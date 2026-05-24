// ═══════════════════════════════════════════════════════
//  AquaControl Pro — Service Worker v2.1
//  Estrategia: Cache-first para assets, Network-first para datos
// ═══════════════════════════════════════════════════════

const SW_VERSION   = '2.1.0';
const CACHE_STATIC = 'aquacontrol-static-v2';
const CACHE_FONTS  = 'aquacontrol-fonts-v1';
const CACHE_CDN    = 'aquacontrol-cdn-v1';

// Assets que se cachean en la instalación
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// CDN libs que se cachean al primer uso
const CDN_PATTERNS = [
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

// ── INSTALL ─────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando v' + SW_VERSION);
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        console.log('[SW] Cacheando assets estáticos');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Error cacheando assets:', err))
  );
});

// ── ACTIVATE ─────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[SW] Activando v' + SW_VERSION);
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => ![CACHE_STATIC, CACHE_FONTS, CACHE_CDN].includes(key))
          .map(key => {
            console.log('[SW] Eliminando caché antiguo:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Solo manejar GET
  if (event.request.method !== 'GET') return;

  // ── Fuentes de Google: Cache-first ──────────────────────
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(event.request, CACHE_FONTS));
    return;
  }

  // ── CDN libs: Cache-first ───────────────────────────────
  if (CDN_PATTERNS.some(p => url.hostname.includes(p))) {
    event.respondWith(cacheFirst(event.request, CACHE_CDN));
    return;
  }

  // ── Firebase / API calls: Network-first ─────────────────
  if (url.hostname.includes('firebaseio.com') || url.hostname.includes('googleapis.com')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // ── Assets propios: Cache-first con fallback ─────────────
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(event.request, CACHE_STATIC));
    return;
  }
});

// ── ESTRATEGIAS ───────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cache    = await caches.open(cacheName);
  const cached   = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    console.warn('[SW] Sin red y sin caché para:', request.url);
    return offlineFallback(request);
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cache  = await caches.open(CACHE_STATIC);
    const cached = await cache.match(request);
    return cached || offlineFallback(request);
  }
}

function offlineFallback(request) {
  // Si es una página HTML, devolver index.html del caché
  if (request.headers.get('accept')?.includes('text/html')) {
    return caches.match('./index.html');
  }
  // Para otros recursos, 503 simple
  return new Response('Sin conexión', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'text/plain' }
  });
}

// ── BACKGROUND SYNC (cuando vuelve la conexión) ──────────
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-ppcl-data') {
    console.log('[SW] Background sync: sincronizando datos PPCL');
    event.waitUntil(syncPPCLData());
  }
});

async function syncPPCLData() {
  // Notificar a todos los clientes que hay conexión
  const clients = await self.clients.matchAll();
  clients.forEach(client => {
    client.postMessage({ type: 'SYNC_AVAILABLE', ts: Date.now() });
  });
}

// ── PUSH NOTIFICATIONS (preparado para futuro backend) ───
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'AquaControl Pro', {
      body:    data.body    || 'Nueva alerta PPCL',
      icon:    './icons/icon-192.png',
      badge:   './icons/icon-72.png',
      tag:     data.tag     || 'ppcl-alert',
      data:    data.url     || './',
      actions: [
        { action: 'open',    title: 'Ver detalle' },
        { action: 'dismiss', title: 'Ignorar'     }
      ]
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  const url = event.notification.data || './';
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ── MESSAGE (comunicación con la app) ─────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data?.type === 'GET_VERSION') {
    event.source.postMessage({ type: 'SW_VERSION', version: SW_VERSION });
  }
});

console.log('[SW] AquaControl Pro Service Worker v' + SW_VERSION + ' cargado');
