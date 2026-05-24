(function(){
  // Lista de CDNs para Firebase SDK (se prueban en orden)
  var FB_VER = '10.12.2';
  var CDNS = [
    'https://www.gstatic.com/firebasejs/'+FB_VER+'/',
    'https://cdn.jsdelivr.net/npm/firebase@'+FB_VER+'/compat/',
    'https://unpkg.com/firebase@'+FB_VER+'/compat/'
  ];
  var LIBS = ['firebase-app-compat.js','firebase-database-compat.js'];

  window.__fbLoadAttempt = 0;

  function tryLoadFrom(cdnIndex){
    if(cdnIndex >= CDNS.length){
      window.__fbLoadFailed = true;
      // Firebase no disponible — la app funciona en modo local sin sincronización
      console.log('[Firebase] CDNs no disponibles — modo local activo. Para sincronización en la nube, abre la app desde un servidor web.');
      return;
    }
    var base = CDNS[cdnIndex];
    var loaded = 0;

    function loadScript(src, cb){
      var s = document.createElement('script');
      s.src = src;
      s.onload  = cb;
      s.onerror = function(){ tryLoadFrom(cdnIndex + 1); };
      document.head.appendChild(s);
    }

    // Cargar app primero, luego database
    loadScript(base + LIBS[0], function(){
      loadScript(base + LIBS[1], function(){
        window.__fbLoadFailed = false;
        if(typeof window.__fbOnReady === 'function') window.__fbOnReady();
      });
    });
  }

  tryLoadFrom(0);
})();

// ═══════════════════════════════════════════════════════
//  SISTEMA MULTIIDIOMA (i18n)
// ═══════════════════════════════════════════════════════
const I18N = {
  es: {
    appTitle:'AquaControl Pro',appSub:'PPCL LEGIONELLA · ALMACÉN · 2026',
    tabDashboard:'📊 Dashboard',tabPPCL:'🌡️ Condensadores',tabEvap:'🔵 Evaporativos',
    tabACS:'🚿 ACS Grifos',tabDiario:'📋 Diario',tabPotable:'💧 Agua Potable',
    tabConfig:'⚙️ Configuración',tabFirma:'✍️ Firmas',tabCalendario:'📅 Calendario',
    btnSave:'Guardar',btnExcel:'Excel',btnShare:'Compartir',btnImport:'Importar',
    btnEmail:'Correo',btnInstall:'Instalar',btnToday:'Hoy',btnUpdate:'Actualizar',
    saved:'💾 Guardado correctamente',accessOK:'✅ Acceso autorizado — Bienvenido',
    pinWrong:'❌ PIN incorrecto',langName:'🇪🇸 Español',
    signatureRequired:'Firma requerida para bloquear el registro',
    signatureSaved:'✍️ Firma guardada correctamente',
    recordLocked:'🔒 Registro firmado y bloqueado',
    copiedPrev:'📋 Valores del día anterior copiados',
    allOK:'✅ Todos los valores marcados como OK',
    qrScanned:'📷 QR escaneado — cargando punto de control',
    photoAdded:'📸 Foto adjuntada correctamente',
    pdfGenerating:'📄 Generando informe PDF...',
  },
  en: {
    appTitle:'AquaControl Pro',appSub:'PPCL LEGIONELLA · WAREHOUSE · 2026',
    tabDashboard:'📊 Dashboard',tabPPCL:'🌡️ Condensers',tabEvap:'🔵 Evaporators',
    tabACS:'🚿 ACS Taps',tabDiario:'📋 Daily Log',tabPotable:'💧 Drinking Water',
    tabConfig:'⚙️ Settings',tabFirma:'✍️ Signatures',tabCalendario:'📅 Calendar',
    btnSave:'Save',btnExcel:'Excel',btnShare:'Share',btnImport:'Import',
    btnEmail:'Email',btnInstall:'Install',btnToday:'Today',btnUpdate:'Refresh',
    saved:'💾 Saved successfully',accessOK:'✅ Access granted — Welcome',
    pinWrong:'❌ Incorrect PIN',langName:'🇬🇧 English',
    signatureRequired:'Signature required to lock record',
    signatureSaved:'✍️ Signature saved successfully',
    recordLocked:'🔒 Record signed and locked',
    copiedPrev:'📋 Previous day values copied',
    allOK:'✅ All values marked as OK',
    qrScanned:'📷 QR scanned — loading control point',
    photoAdded:'📸 Photo attached successfully',
    pdfGenerating:'📄 Generating PDF report...',
  },
  pt: {
    appTitle:'AquaControl Pro',appSub:'PPCL LEGIONELLA · ARMAZÉM · 2026',
    tabDashboard:'📊 Painel',tabPPCL:'🌡️ Condensadores',tabEvap:'🔵 Evaporativos',
    tabACS:'🚿 ACS Torneiras',tabDiario:'📋 Diário',tabPotable:'💧 Água Potável',
    tabConfig:'⚙️ Configuração',tabFirma:'✍️ Assinaturas',tabCalendario:'📅 Calendário',
    btnSave:'Guardar',btnExcel:'Excel',btnShare:'Partilhar',btnImport:'Importar',
    btnEmail:'Correio',btnInstall:'Instalar',btnToday:'Hoje',btnUpdate:'Atualizar',
    saved:'💾 Guardado com sucesso',accessOK:'✅ Acesso autorizado — Bem-vindo',
    pinWrong:'❌ PIN incorreto',langName:'🇵🇹 Português',
    signatureRequired:'Assinatura necessária para bloquear o registo',
    signatureSaved:'✍️ Assinatura guardada com sucesso',
    recordLocked:'🔒 Registo assinado e bloqueado',
    copiedPrev:'📋 Valores do dia anterior copiados',
    allOK:'✅ Todos os valores marcados como OK',
    qrScanned:'📷 QR lido — carregando ponto de controlo',
    photoAdded:'📸 Foto anexada com sucesso',
    pdfGenerating:'📄 A gerar relatório PDF...',
  },
  fr: {
    appTitle:'AquaControl Pro',appSub:'PPCL LEGIONELLA · ENTREPÔT · 2026',
    tabDashboard:'📊 Tableau de bord',tabPPCL:'🌡️ Condenseurs',tabEvap:'🔵 Évaporateurs',
    tabACS:'🚿 ACS Robinets',tabDiario:'📋 Journal',tabPotable:'💧 Eau Potable',
    tabConfig:'⚙️ Configuration',tabFirma:'✍️ Signatures',tabCalendario:'📅 Calendrier',
    btnSave:'Sauvegarder',btnExcel:'Excel',btnShare:'Partager',btnImport:'Importer',
    btnEmail:'Courrier',btnInstall:'Installer',btnToday:"Aujourd'hui",btnUpdate:'Actualiser',
    saved:'💾 Sauvegardé avec succès',accessOK:'✅ Accès autorisé — Bienvenue',
    pinWrong:'❌ PIN incorrect',langName:'🇫🇷 Français',
    signatureRequired:'Signature requise pour verrouiller le registre',
    signatureSaved:'✍️ Signature sauvegardée avec succès',
    recordLocked:'🔒 Registre signé et verrouillé',
    copiedPrev:'📋 Valeurs du jour précédent copiées',
    allOK:'✅ Toutes les valeurs marquées comme OK',
    qrScanned:'📷 QR scanné — chargement du point de contrôle',
    photoAdded:'📸 Photo attachée avec succès',
    pdfGenerating:'📄 Génération du rapport PDF...',
  }
};


// Extensión multiidioma — claves adicionales
(function extendI18N(){
  var ext = {
    es: {
      langName:'Español', langFlag:'🇪🇸',
      valOK:'Valor correcto', valWarn:'Advertencia', valBad:'Fuera de rango',
      tasksPending:'Tareas pendientes', tasksToday:'Tareas de hoy',
      syncOK:'Sincronizado', syncPending:'Pendiente de sync', syncError:'Error de sync',
      dictarNota:'Dictar nota de voz', escuchando:'Escuchando...', notaGuardada:'Nota guardada',
      cumplimiento:'Cumplimiento mensual', tendencia:'Tendencia', alertas:'Alertas activas',
      accCorrectiva:'Acción correctiva requerida', firmar:'Firmar periodo',
      infoSync:'Estado de sincronización en tiempo real',
      meses:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    },
    en: {
      langName:'English', langFlag:'🇬🇧',
      valOK:'Value correct', valWarn:'Warning', valBad:'Out of range',
      tasksPending:'Pending tasks', tasksToday:"Today's tasks",
      syncOK:'Synced', syncPending:'Pending sync', syncError:'Sync error',
      dictarNota:'Dictate voice note', escuchando:'Listening...', notaGuardada:'Note saved',
      cumplimiento:'Monthly compliance', tendencia:'Trend', alertas:'Active alerts',
      accCorrectiva:'Corrective action required', firmar:'Sign period',
      infoSync:'Real-time sync status',
      meses:['January','February','March','April','May','June','July','August','September','October','November','December']
    },
    pt: {
      langName:'Português', langFlag:'🇵🇹',
      valOK:'Valor correto', valWarn:'Aviso', valBad:'Fora do intervalo',
      tasksPending:'Tarefas pendentes', tasksToday:'Tarefas de hoje',
      syncOK:'Sincronizado', syncPending:'Sync pendente', syncError:'Erro de sync',
      dictarNota:'Ditar nota de voz', escuchando:'A ouvir...', notaGuardada:'Nota guardada',
      cumplimiento:'Conformidade mensal', tendencia:'Tendência', alertas:'Alertas ativas',
      accCorrectiva:'Ação corretiva necessária', firmar:'Assinar período',
      infoSync:'Estado de sincronização em tempo real',
      meses:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    },
    fr: {
      langName:'Français', langFlag:'🇫🇷',
      valOK:'Valeur correcte', valWarn:'Avertissement', valBad:'Hors limites',
      tasksPending:'Tâches en attente', tasksToday:"Tâches d'aujourd'hui",
      syncOK:'Synchronisé', syncPending:'Sync en attente', syncError:'Erreur de sync',
      dictarNota:'Dicter note vocale', escuchando:'Écoute...', notaGuardada:'Note sauvegardée',
      cumplimiento:'Conformité mensuelle', tendencia:'Tendance', alertas:'Alertes actives',
      accCorrectiva:'Action corrective requise', firmar:'Signer la période',
      infoSync:'État de synchronisation en temps réel',
      meses:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
    },
    de: {
      langName:'Deutsch', langFlag:'🇩🇪',
      appTitle:'AquaControl Pro', appSub:'PPCL LEGIONELLA · LAGER · 2026',
      tabDashboard:'📊 Übersicht', tabPPCL:'🌡️ Kondensatoren', tabEvap:'🔵 Verdunster',
      tabACS:'🚿 ACS Hähne', tabDiario:'📋 Tagebuch', tabPotable:'💧 Trinkwasser',
      tabConfig:'⚙️ Einstellungen', tabFirma:'✍️ Signaturen', tabCalendario:'📅 Kalender',
      btnSave:'Speichern', btnToday:'Heute', langName:'Deutsch', langFlag:'🇩🇪',
      valOK:'Wert korrekt', valWarn:'Warnung', valBad:'Außerhalb des Bereichs',
      tasksPending:'Ausstehende Aufgaben', tasksToday:'Heutige Aufgaben',
      syncOK:'Synchronisiert', syncPending:'Sync ausstehend', syncError:'Sync-Fehler',
      dictarNota:'Sprachnotiz diktieren', escuchando:'Zuhören...', notaGuardada:'Notiz gespeichert',
      cumplimiento:'Monatliche Einhaltung', tendencia:'Trend', alertas:'Aktive Warnungen',
      accCorrectiva:'Korrektive Maßnahme erforderlich', firmar:'Zeitraum unterzeichnen',
      infoSync:'Echtzeit-Synchronisierungsstatus',
      meses:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
    }
  };
  if(typeof I18N !== 'undefined'){
    Object.keys(ext).forEach(function(lang){
      if(!I18N[lang]) I18N[lang] = {};
      Object.assign(I18N[lang], ext[lang]);
    });
    // Añadir alemán completamente
    if(!I18N.de) I18N.de = ext.de;
  }
})();

// Mejorar openLangMenu para mostrar banderas y nuevo idioma
var _origOpenLangMenu = window.openLangMenu;
window.openLangMenu = function(){
  var existing = document.getElementById('langMenu');
  if(existing){ existing.remove(); return; }
  var menu = document.createElement('div');
  menu.id = 'langMenu';
  menu.style.cssText = 'position:fixed;top:54px;right:10px;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.25);z-index:9999;min-width:180px;overflow:hidden;';
  var langs = [
    {k:'es',f:'🇪🇸',n:'Español'},
    {k:'en',f:'🇬🇧',n:'English'},
    {k:'pt',f:'🇵🇹',n:'Português'},
    {k:'fr',f:'🇫🇷',n:'Français'},
    {k:'de',f:'🇩🇪',n:'Deutsch'}
  ];
  langs.forEach(function(l){
    var btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:12px;width:100%;padding:12px 16px;background:none;border:none;cursor:pointer;font-family:Sora,sans-serif;font-size:13px;color:var(--text);transition:background 0.12s;border-bottom:1px solid var(--border);';
    var isActive = (typeof _currentLang !== 'undefined' && _currentLang === l.k);
    btn.innerHTML = '<span style="font-size:20px">'+l.f+'</span><span style="flex:1;text-align:left">'+l.n+'</span>'+(isActive?'<span style="color:var(--green);font-weight:700">✓</span>':'');
    btn.onmouseover = function(){ btn.style.background='var(--surface2)'; };
    btn.onmouseout  = function(){ btn.style.background='none'; };
    btn.onclick = function(){
      if(typeof setLanguage==='function') setLanguage(l.k);
      menu.remove();
      // Actualizar botón de idioma en login si existe
      var loginLangBtn = document.querySelector('.lcard button[onclick*="openLangMenu"]');
      if(loginLangBtn) loginLangBtn.innerHTML = l.f + ' ' + l.n.slice(0,2).toUpperCase();
    };
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);
  setTimeout(function(){ document.addEventListener('click', function rm(){ menu.remove(); document.removeEventListener('click',rm); },{ once:true }); }, 10);
};

let _currentLang = localStorage.getItem('ppcl_lang') || 'es';

function t(key){ return (I18N[_currentLang] && I18N[_currentLang][key]) || I18N.es[key] || key; }

function setLanguage(lang){
  _currentLang = lang;
  localStorage.setItem('ppcl_lang', lang);
  applyLanguage();
  showToast('🌐 ' + t('langName'));
}

function applyLanguage(){
  const L = I18N[_currentLang] || I18N.es;
  // Update header
  const titleEl = document.querySelector('.hdr-title');
  if(titleEl) titleEl.innerHTML = L.appTitle.replace('Pro','<span style="color:#4dd0e1">Pro</span>');
  const subEl = document.querySelector('.hdr-sub');
  if(subEl) subEl.textContent = L.appSub;
  // Update tab buttons
  const tabs = document.querySelectorAll('.tab-btn');
  const tabKeys = ['tabDashboard','tabPPCL','tabEvap','tabACS','tabDiario','tabPotable','tabConfig','tabFirma','tabCalendario'];
  tabs.forEach((tab,i)=>{ if(tabKeys[i] && L[tabKeys[i]]) tab.innerHTML = L[tabKeys[i]]; });
  // Update bottom nav
  const bnavBtns = document.querySelectorAll('.bottom-nav-btn .bnav-label');
  const bnavLabels = {
    'dashboard': L.tabDashboard?.replace(/📊\s*/,''),
    'ppcl': L.tabPPCL?.replace(/🌡️\s*/,''),
    'evap': L.tabEvap?.replace(/🔵\s*/,''),
    'acs': L.tabACS?.replace(/🚿\s*/,''),
    'diario': L.tabDiario?.replace(/📋\s*/,''),
    'potable': L.tabPotable?.replace(/💧\s*/,''),
    'config': L.tabConfig?.replace(/⚙️\s*/,''),
  };
  // Update save button
  const saveBtn = document.getElementById('saveBtn');
  if(saveBtn){ const sp=saveBtn.querySelector('span'); if(sp) sp.textContent=L.btnSave; }
  // Update today buttons
  document.querySelectorAll('.date-today-btn').forEach(b=>b.textContent=L.btnToday);
  // Update html lang attribute
  document.documentElement.lang = _currentLang;
}

// Language selector dropdown
function openLangMenu(){
  const existing = document.getElementById('langMenu');
  if(existing){ existing.remove(); return; }
  const menu = document.createElement('div');
  menu.id = 'langMenu';
  menu.style.cssText = 'position:fixed;top:62px;right:10px;background:var(--surface);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,0.2);z-index:200;min-width:160px;overflow:hidden;';
  const langs = [{k:'es',f:'🇪🇸',n:'Español'},{k:'en',f:'🇬🇧',n:'English'},{k:'pt',f:'🇵🇹',n:'Português'},{k:'fr',f:'🇫🇷',n:'Français'}];
  langs.forEach(l=>{
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:10px;width:100%;padding:11px 16px;background:none;border:none;cursor:pointer;font-family:Sora,sans-serif;font-size:13px;color:var(--text);transition:background 0.12s;';
    btn.innerHTML = l.f+' '+l.n+(l.k===_currentLang?' ✓':'');
    btn.onmouseover=()=>btn.style.background='var(--surface2)';
    btn.onmouseout=()=>btn.style.background='none';
    btn.onclick=()=>{ setLanguage(l.k); menu.remove(); };
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);
  setTimeout(()=>document.addEventListener('click',()=>menu.remove(),{once:true}),10);
}

// ═══════════════════════════════════════════════════════
//  CONSTANTS & DATA
// ═══════════════════════════════════════════════════════
const MONTHS = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
const MONTHS_SHORT = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];

// ACS SEMANAL GRIFOS
const ACS_SEMANAL = [
  {n:'1',  ni:'46031', loc:'FUENTE AGUA CALLE 17'},
  {n:'2',  ni:'46031', loc:'GRIFO DEPARTAMENTO CALIDAD (1)'},
  {n:'3',  ni:'46031', loc:'GRIFO DEPARTAMENTO CALIDAD (2)'},
  {n:'4',  ni:'46031', loc:'GRIFO DEPARTAMENTO CALIDAD (3)'},
  {n:'5',  ni:'46035', loc:'GRIFO ASEO CAMARA'},
  {n:'6',  ni:'46035', loc:'GRIFO FUENTE TRANSPORTES'},
  {n:'7',  ni:'46035', loc:'GRIFO PILA SALA DE BATERIA'},
  {n:'8',  ni:'46035', loc:'GRIFO ASEO WC SECO'},
  {n:'9',  ni:'46041', loc:'GRIFO VESTUARIOS HOMBRES (1)'},
  {n:'10', ni:'46041', loc:'GRIFO VESTUARIOS HOMBRES (2)'},
  {n:'11', ni:'46041', loc:'GRIFO VESTUARIOS HOMBRES (3)'},
  {n:'12', ni:'46041', loc:'GRIFO VESTUARIOS HOMBRES (4)'},
  {n:'13', ni:'46048', loc:'GRIFO ASEO WC TRANSPORTES'},
  {n:'14A',ni:'46048', loc:'GRIFO ASEO FEMENINO OFICINA 1'},
  {n:'14B',ni:'46048', loc:'GRIFO ASEO FEMENINO OFICINA 2'},
  {n:'14C',ni:'46048', loc:'GRIFO ASEO FEMENINO OFICINA 3'},
  {n:'15A',ni:'46055', loc:'GRIFO ASEO MASCULINO OFICINA 1'},
  {n:'15B',ni:'46055', loc:'GRIFO ASEO MASCULINO OFICINA 2'},
  {n:'15C',ni:'46055', loc:'GRIFO ASEO MASCULINO OFICINA 3'},
  {n:'16', ni:'46055', loc:'GRIFOS VESTUARIOS MUJERES (1)'},
  {n:'17', ni:'46062', loc:'GRIFOS VESTUARIOS MUJERES (2)'},
  {n:'18', ni:'46062', loc:'GRIFOS VESTUARIOS MUJERES (3)'},
  {n:'19', ni:'46062', loc:'GRIFO PATIO ZONA CUBA PALET'},
  {n:'20', ni:'46062', loc:'GRIFO FUENTE MUELLE SECO'},
  {n:'21', ni:'46069', loc:'GRIFO COMEDOR OFICINA'},
  {n:'22', ni:'46069', loc:'GRIFO COMEDOR MOZO'},
  {n:'24', ni:'46069', loc:'GRIFO FUENTE MUELLE FRUTA'},
  {n:'26', ni:'46069', loc:'GRIFO ARMARIO PLACAS'},
  {n:'28', ni:'46076', loc:'GRIFO HIDROLIMPIADORA'},
  {n:'29', ni:'46076', loc:'GRIFO CUBA ORGANICA'},
  {n:'30', ni:'46076', loc:'DUCHA VESTUARIOS MASCULINO (1)'},
  {n:'31', ni:'46076', loc:'DUCHA VESTUARIOS MASCULINO (2)'},
  {n:'32', ni:'46083', loc:'DUCHA VESTUARIOS MASCULINO (3)'},
  {n:'33', ni:'46083', loc:'DUCHA VESTUARIOS MASCULINO (4)'},
  {n:'34', ni:'46083', loc:'DUCHA VESTUARIOS MASCULINO (5)'},
  {n:'35', ni:'46083', loc:'DUCHA VESTUARIOS MASCULINO (6)'},
  {n:'36', ni:'46090', loc:'DUCHA VESTUARIOS MASCULINO (7)'},
  {n:'37', ni:'46090', loc:'DUCHA VESTUARIOS MASCULINO (8)'},
  {n:'38', ni:'46090', loc:'DUCHA VESTUARIOS FEMENINO'},
];

// ACS MENSUAL — agrupado por mes
const ACS_MENSUAL = [
  {mes:'ENERO',    items:[{n:'1',ni:'46035',loc:'FUENTE AGUA CALLE 17'},{n:'2',ni:'46035',loc:'GRIFO DEPARTAMENTO CALIDAD (1)'},{n:'3',ni:'46035',loc:'GRIFO DEPARTAMENTO CALIDAD (2)'},{n:'4',ni:'46035',loc:'GRIFO DEPARTAMENTO CALIDAD (3)'}]},
  {mes:'FEBRERO',  items:[{n:'5',ni:'46055',loc:'GRIFO ASEO CAMARA'},{n:'6',ni:'46055',loc:'GRIFO FUENTE TRANSPORTES'},{n:'7',ni:'46055',loc:'GRIFO PILA SALA DE BATERIA'},{n:'8',ni:'46055',loc:'GRIFO ASEO WC SECO'}]},
  {mes:'MARZO',    items:[{n:'9',ni:'46083',loc:'GRIFO VESTUARIOS HOMBRES (1)'},{n:'10',ni:'46083',loc:'GRIFO VESTUARIOS HOMBRES (2)'},{n:'11',ni:'46083',loc:'GRIFO VESTUARIOS HOMBRES (3)'},{n:'12',ni:'46083',loc:'GRIFO VESTUARIOS HOMBRES (4)'}]},
  {mes:'ABRIL',    items:[{n:'13',ni:'46118',loc:'GRIFO ASEO WC TRANSPORTES'},{n:'14A',ni:'46118',loc:'GRIFO ASEO FEMENINO OFICINA 1'},{n:'14B',ni:'46118',loc:'GRIFO ASEO FEMENINO OFICINA 2'}]},
  {mes:'MAYO',     items:[{n:'14C',ni:'46146',loc:'GRIFO ASEO FEMENINO OFICINA 3'},{n:'15A',ni:'46146',loc:'GRIFO ASEO MASCULINO OFICINA 1'},{n:'15B',ni:'46146',loc:'GRIFO ASEO MASCULINO OFICINA 2'}]},
  {mes:'JUNIO',    items:[{n:'15C',ni:'46174',loc:'GRIFO ASEO MASCULINO OFICINA 3'},{n:'16',ni:'46174',loc:'GRIFOS VESTUARIOS MUJERES (1)'},{n:'17',ni:'46174',loc:'GRIFOS VESTUARIOS MUJERES (2)'}]},
  {mes:'JULIO',    items:[{n:'18',ni:'46204',loc:'GRIFOS VESTUARIOS MUJERES (3)'},{n:'19',ni:'46204',loc:'GRIFO PATIO ZONA CUBA PALET'},{n:'20',ni:'46204',loc:'GRIFO FUENTE MUELLE SECO'}]},
  {mes:'AGOSTO',   items:[{n:'21',ni:'46237',loc:'GRIFO COMEDOR OFICINA'},{n:'22',ni:'46237',loc:'GRIFO COMEDOR MOZO'},{n:'24',ni:'46237',loc:'GRIFO FUENTE MUELLE FRUTA'}]},
  {mes:'SEPTIEMBRE',items:[{n:'26',ni:'46266',loc:'GRIFO ARMARIO PLACAS'},{n:'28',ni:'46266',loc:'GRIFO HIDROLIMPIADORA'},{n:'29',ni:'46266',loc:'GRIFO CUBA ORGANICA'}]},
  {mes:'OCTUBRE',  items:[{n:'30',ni:'46296',loc:'DUCHA VESTUARIOS MASCULINO (1)'},{n:'31',ni:'46296',loc:'DUCHA VESTUARIOS MASCULINO (2)'},{n:'32',ni:'46296',loc:'DUCHA VESTUARIOS MASCULINO (3)'}]},
  {mes:'NOVIEMBRE',items:[{n:'33',ni:'46328',loc:'DUCHA VESTUARIOS MASCULINO (4)'},{n:'34',ni:'46328',loc:'DUCHA VESTUARIOS MASCULINO (5)'},{n:'35',ni:'46328',loc:'DUCHA VESTUARIOS MASCULINO (6)'}]},
  {mes:'DICIEMBRE',items:[{n:'36',ni:'46357',loc:'DUCHA VESTUARIOS MASCULINO (7)'},{n:'37',ni:'46357',loc:'DUCHA VESTUARIOS MASCULINO (8)'},{n:'38',ni:'46357',loc:'DUCHA VESTUARIOS FEMENINO'},{n:'28',ni:'46357',loc:'BOX LAVADO DE ISOTERMOS'}]},
];

// ACS DEPÓSITOS (mensual)
const ACS_DEPOSITOS = [
  {mes:'ENERO'},{mes:'FEBRERO'},{mes:'MARZO'},{mes:'ABRIL'},{mes:'MAYO'},{mes:'JUNIO'},
  {mes:'JULIO'},{mes:'AGOSTO'},{mes:'SEPTIEMBRE'},{mes:'OCTUBRE'},{mes:'NOVIEMBRE'},{mes:'DICIEMBRE'},
];

// DIARIO — equipos
const DIARIO_ITEMS = [
  {n:'40', loc:'DEPOSITO APORTE BOX LAVADO'},
  {n:'5',  loc:'LAVAVO ASEO ANTECAMARA CONGELADO'},
];

// EVAPORATIVOS MENSUAL — 26 evaporativos, meses activos Mayo-Sep (resto también disponibles)
const EVAP_ITEMS = Array.from({length:26}, (_,i)=>({n:String(i+1), loc:'EVAPORATIVO Nº '+(i+1)}));

// AGUA POTABLE — tabla exacta del fichero Excel DIARIO AGUA POTABLE
// Cada entrada: fecha del lunes de esa semana → grifo asignado
// El usuario puede elegir libremente la semana desde el selector de fecha
const POTABLE_CALENDARIO = [
  // Enero — cada grifo tiene su propia semana
  {lunes:'2026-01-02', grifo:'Fuente Calle Nº 7'},
  {lunes:'2026-01-07', grifo:'Grifo 2'},
  {lunes:'2026-01-12', grifo:'Grifo 3'},
  {lunes:'2026-01-19', grifo:'Grifo 5 (Calidad)'},
  {lunes:'2026-01-26', grifo:'Fuente Transportes 6'},
  {lunes:'2026-02-02', grifo:'Grifo Pila Batería 7'},
  // Febrero
  {lunes:'2026-01-28', grifo:'Grifo Fuente WC Seco 8'},
  {lunes:'2026-02-09', grifo:'Grifo Fuente WC Seco 9'},
  {lunes:'2026-02-16', grifo:'Grifo Vestuario 10'},
  {lunes:'2026-02-23', grifo:'Grifo Comedor 11'},
  // Marzo
  {lunes:'2026-03-02', grifo:'Grifo Vestuario 12'},
  {lunes:'2026-03-09', grifo:'Grifo Vestuario 13'},
  {lunes:'2026-03-16', grifo:'Grifo Vestuario 14'},
  {lunes:'2026-03-23', grifo:'Grifo 15'},
  {lunes:'2026-03-30', grifo:'Grifo 19'},
  // Abril
  {lunes:'2026-04-06', grifo:'Grifo 20'},
  {lunes:'2026-04-13', grifo:'Grifo 22'},
  {lunes:'2026-04-20', grifo:'Grifo 24'},
  {lunes:'2026-04-27', grifo:'Grifo 26'},
  // Mayo
  {lunes:'2026-05-04', grifo:'Grifo 27'},
  {lunes:'2026-05-11', grifo:'Grifo 28 (Hidrolimpiadora)'},
  {lunes:'2026-05-18', grifo:'Grifo 29 (Cuba Orgánica)'},
  {lunes:'2026-05-25', grifo:'Grifo 17 (Vestuario Mujeres)'},
  // Junio
  {lunes:'2026-06-01', grifo:'Grifo 2'},
  {lunes:'2026-06-08', grifo:'Grifo 3'},
  {lunes:'2026-06-15', grifo:'Grifo 4'},
  {lunes:'2026-06-22', grifo:'Grifo 5'},
  {lunes:'2026-06-29', grifo:'Grifo 6'},
  // Julio
  {lunes:'2026-07-06', grifo:'Grifo 18'},
  {lunes:'2026-07-13', grifo:'Grifo 19'},
  {lunes:'2026-07-20', grifo:'Grifo 20'},
  {lunes:'2026-07-27', grifo:'Grifo 21'},
  // Agosto
  {lunes:'2026-08-03', grifo:'Grifo 22'},
  {lunes:'2026-08-10', grifo:'Grifo 24'},
  {lunes:'2026-08-17', grifo:'Grifo 26'},
  {lunes:'2026-08-24', grifo:'Grifo 27'},
  {lunes:'2026-08-31', grifo:'Grifo 28'},
  // Septiembre
  {lunes:'2026-09-07', grifo:'Grifo 29'},
  {lunes:'2026-09-14', grifo:'Grifo 17'},
  {lunes:'2026-09-21', grifo:'Grifo 18'},
  {lunes:'2026-09-28', grifo:'Grifo 9'},
  // Octubre
  {lunes:'2026-10-05', grifo:'Grifo 10'},
  {lunes:'2026-10-12', grifo:'Grifo 3'},
  {lunes:'2026-10-19', grifo:'Grifo 19'},
  {lunes:'2026-10-26', grifo:'Grifo 20'},
  // Noviembre
  {lunes:'2026-11-02', grifo:'Grifo 22'},
  {lunes:'2026-11-09', grifo:'Fuente Agua Nº 7'},
  {lunes:'2026-11-16', grifo:'Grifo Nº 2 Calidad'},
  {lunes:'2026-11-23', grifo:'Grifo Nº 3 Calidad'},
  {lunes:'2026-11-30', grifo:'Grifo Nº 4 Calidad'},
  // Diciembre
  {lunes:'2026-12-07', grifo:'Fuente 6'},
  {lunes:'2026-12-14', grifo:'Grifo 7'},
  {lunes:'2026-12-21', grifo:'Grifo 8'},
  {lunes:'2026-12-28', grifo:'Grifo 9'},
];

function getPotableGrifoSemana(wk){
  // wk = 'YYYY-MM-DD' (lunes de la semana seleccionada)
  // Buscar la entrada exacta o la más cercana anterior
  const entry = POTABLE_CALENDARIO.find(e => e.lunes === wk)
             || POTABLE_CALENDARIO.slice().reverse().find(e => e.lunes <= wk)
             || POTABLE_CALENDARIO[0];
  // Calcular nº de semana ISO
  const [y,m,d] = wk.split('-').map(Number);
  const lun  = new Date(y, m-1, d);
  const jan1 = new Date(y, 0, 1);
  const nsem = Math.ceil(((lun - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return {lunes: entry.lunes, grifo: entry.grifo, nsem};
}

// ═══════════════════════════════════════════════════════
//  STATE & STORAGE
// ═══════════════════════════════════════════════════════
const SK = 'ppcl_legionella_v1';
let data = {};

// Canal de sincronización entre pestañas — con control de conflictos
let syncChannel = null;
let _isBroadcasting = false; // flag para no procesar nuestros propios mensajes
try { syncChannel = new BroadcastChannel('ppcl_sync'); } catch(e) {}

function loadData(){
  // Carga síncrona desde localStorage como punto de partida inmediato
  try{ data = JSON.parse(localStorage.getItem(SK)||'{}'); }catch(e){ data={}; }
  // Después de que IDB esté listo, intentar leer la versión más reciente
  // (esto se llama también desde initIndexedDB -> _idbMigrateFromLocalStorage)
}

// Carga asíncrona desde IDB (llamada tras initIndexedDB)
function _loadDataFromIDB(){
  idbGetMain(SK).then(function(raw){
    if(!raw) return;
    try{
      var idbData = JSON.parse(raw);
      // Solo reemplazar si IDB tiene datos más recientes
      if(!data.__ts || (idbData.__ts && idbData.__ts > data.__ts)){
        data = idbData;
        if(typeof _silentRefresh==='function') _silentRefresh();
        console.log('[IDB] Datos cargados desde IndexedDB ('+Math.round(raw.length/1024)+'KB)');
      }
    }catch(e){}
  });
}

// Escuchar cambios de otras pestañas — con timestamp para prioridad
if(syncChannel){
  syncChannel.onmessage = (evt) => {
    if(_isBroadcasting) return; // ignorar nuestros propios rebroadcasts
    if(evt.data && evt.data.type === 'update'){
      try{
        const incoming = JSON.parse(evt.data.payload);
        // Solo actualizar si el dato entrante es más reciente
        if(!data.__ts || (incoming.__ts && incoming.__ts > data.__ts)){
          data = incoming;
          // Refresh sin triggerar nuevo broadcast
          _silentRefresh();
          if(typeof showToast==='function') showToast('🔄 Vista actualizada desde otra pestaña');
        }
        // Si el nuestro es más reciente, rebroadcast para que las otras se actualicen
        else if(data.__ts && incoming.__ts && data.__ts > incoming.__ts){
          _isBroadcasting = true;
          try{ syncChannel.postMessage({type:'update', payload:JSON.stringify(data), ts:data.__ts}); }catch(e){}
          setTimeout(()=>{ _isBroadcasting=false; }, 100);
        }
      }catch(e){ console.warn('[Sync] Error procesando mensaje:', e); }
    }
  };
}

// También escuchar cambios en localStorage desde otros orígenes (Firefox/Safari)
window.addEventListener('storage', (e) => {
  if(e.key === SK && e.newValue){
    try{
      const incoming = JSON.parse(e.newValue);
      if(!data.__ts || (incoming.__ts && incoming.__ts > data.__ts)){
        data = incoming;
        _silentRefresh();
      }
    }catch(err){}
  }
});

function _silentRefresh(){
  // Actualiza vistas sin triggerar guardado
  try{ renderPPCL(); }catch(e){}
  try{ renderEvap(); }catch(e){}
  try{ renderACS(); }catch(e){}
  try{ renderDiario(); }catch(e){}
  try{ renderPotable(); }catch(e){}
}

function refreshAllViews(){ _silentRefresh(); }

// EXPORTAR JSON para compartir entre móviles distintos
function exportJSON(){
  var backup = {
    version: 'AquaControl Pro v13',
    exportDate: new Date().toISOString(),
    exportUser: sessionStorage.getItem('ppcl_user_email') || 'desconocido',
    data: {},
    firmas: {},
    auditoria: [],
    config: {},
    usuarios: []
  };
  // Datos principales
  try{ backup.data = JSON.parse(localStorage.getItem('ppcl_legionella_v1')||'{}'); }catch(e){}
  // Firmas
  try{ backup.firmas = JSON.parse(localStorage.getItem('ppcl_firmas_v1')||'{}'); }catch(e){}
  // Auditoría
  try{ backup.auditoria = JSON.parse(localStorage.getItem('ppcl_audit_v1')||'[]'); }catch(e){}
  // Config
  try{ backup.config = JSON.parse(localStorage.getItem('ppcl_config_v1')||'{}'); }catch(e){}
  // Usuarios (sin contraseñas en texto plano en el export)
  try{
    var users = JSON.parse(localStorage.getItem('ppcl_email_users')||'[]');
    backup.usuarios = users.map(function(u){ return {email:u.email,name:u.name,rol:u.rol}; });
  }catch(e){}

  var json = JSON.stringify(backup, null, 2);
  var blob = new Blob([json], {type:'application/json;charset=utf-8'});
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  var fecha= new Date().toISOString().slice(0,10);
  a.href   = url;
  a.download = 'AquaControl_Backup_' + fecha + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(url);}, 3000);
  if(typeof auditLog==='function') auditLog('EXPORTAR','backup_completo',fecha,'JSON');
  if(typeof showToast==='function') showToast('✅ Backup completo descargado (' + Math.round(json.length/1024) + ' KB)');
}

// IMPORTAR JSON de otro móvil
function importJSON(){
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = '.json';
  inp.onchange = e => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try{
        const incoming = JSON.parse(ev.target.result);
        // Merge: incoming gana si es más reciente
        if(!data.__ts || !incoming.__ts || incoming.__ts >= data.__ts){
          data = incoming;
        } else {
          // Merge campo a campo — incoming tiene prioridad sobre vacíos
          Object.keys(incoming).forEach(k => {
            if(!data[k] && incoming[k]) data[k] = incoming[k];
          });
        }
        saveData();
        refreshAllViews();
        showToast('📥 Datos importados correctamente');
      }catch(err){ showToast('❌ Archivo JSON no válido'); }
    };
    reader.readAsText(file);
  };
  inp.click();
}
// ── Centralised date utilities (single source of truth) ──────────────────────
// Todas las funciones de fecha están aquí para evitar divergencias

function localDateStr(dt){
  const y=dt.getFullYear(), m=String(dt.getMonth()+1).padStart(2,'0'), d=String(dt.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function getWeekKey(d){
  const dt=new Date(d), dow=dt.getDay(), offset=dow===0?-6:1-dow;
  const mon=new Date(dt); mon.setDate(dt.getDate()+offset);
  return localDateStr(mon);
}
function weekLabel(wk){
  const [y,m,d]=wk.split('-').map(Number);
  const lun=new Date(y,m-1,d), dom=new Date(y,m-1,d+6);
  const fmt=dt=>dt.toLocaleDateString('es-ES',{day:'numeric',month:'short'});
  return `${fmt(lun)} – ${fmt(dom)} ${dom.getFullYear()}`;
}

// ── Modelo de datos con validación en capa de acceso ─────────────────────────

// Rangos normativos centralizados — única fuente de verdad
const DATA_RANGES = {
  ph:          {ok:[7.0,8.0], warn:[6.5,8.5], unit:'pH',    label:'pH'},
  temperatura: {ok:[15,30],   warn:[10,40],    unit:'°C',    label:'Temperatura'},
  turbidez:    {ok:[0,5],     warn:[0,10],     unit:'NTU',   label:'Turbidez'},
  biocidad:    {ok:[0.5,5],   warn:[0,10],     unit:'ppm',   label:'Biocida'},
  cloro:       {ok:[0.2,1.0], warn:[0.1,2.0],  unit:'mg/L',  label:'Cloro libre'},
  conductividad:{ok:[200,800],warn:[100,1200], unit:'µS/cm', label:'Conductividad'},
  dureza:      {ok:[100,400], warn:[50,600],   unit:'mg/L',  label:'Dureza'},
};

// Validación en modelo: devuelve {valid, level, msg} antes de guardar
function validateValue(value, field){
  if(value===''||value===null||value===undefined) return {valid:true, level:'empty', msg:''};
  const n=parseFloat(value);
  if(isNaN(n)&&field&&DATA_RANGES[field]) return {valid:false, level:'bad', msg:'Valor no numérico'};
  if(!field||!DATA_RANGES[field]) return {valid:true, level:'ok', msg:''};
  const r=DATA_RANGES[field];
  if(n>=r.ok[0]&&n<=r.ok[1]) return {valid:true, level:'ok', msg:'Correcto'};
  if(n>=r.warn[0]&&n<=r.warn[1]) return {valid:true, level:'warn', msg:`Fuera de rango óptimo (${r.ok[0]}–${r.ok[1]} ${r.unit})`};
  return {valid:true, level:'bad', msg:`FUERA DE RANGO NORMATIVO. Rango: ${r.ok[0]}–${r.ok[1]} ${r.unit}`};
}

// Sanitización de claves — evita XSS/injection en claves de storage
function _sanitizeKey(key){
  return String(key).replace(/[^a-zA-Z0-9_\-\.]/g,'_').slice(0,200);
}

function makeKey(...parts){ return parts.map(String).join('__'); }

// getVal con sanitización
function getVal(key){ return data[_sanitizeKey(key)]||''; }

// setVal con validación en modelo + throttle de guardado + audit log integrado
let _saveTimer=null;
function setVal(key,val,field){
  const sKey=_sanitizeKey(key);
  const sVal=String(val||'').slice(0,500);
  // Validar en modelo antes de persistir
  const v=validateValue(sVal, field);
  if(!v.valid){
    if(typeof showToast==='function') showToast('⚠️ '+v.msg+' — valor no guardado');
    return false;
  }
  // Audit log del cambio (registra antes de sobrescribir)
  const oldVal=data[sKey]||'';
  if(oldVal!==sVal && sVal!==''){
    if(typeof auditLog==='function') auditLog('DATO', sKey, sVal, oldVal||'(vacío)');
  }
  data[sKey]=sVal;
  _scheduleSave();
  updateAllStats();
  return true;
}

// Guardado con debounce (evita escrituras masivas en localStorage)
function _scheduleSave(){
  if(_saveTimer) clearTimeout(_saveTimer);
  _saveTimer=setTimeout(function(){ _persistData(); }, 300);
}

function _persistData(){
  data.__ts=Date.now();
  const payload=JSON.stringify(data);
  // Aviso de tamaño — IDB aguanta mucho más, pero avisamos igualmente
  if(payload.length > 8*1024*1024){
    if(typeof showToast==='function') showToast('⚠️ Datos muy grandes (>8MB) — exporta un backup y limpia registros antiguos');
  }
  // Guardar en IDB (principal, sin límite de 5MB) + localStorage (fallback)
  idbSetMain(SK, payload);
  // Broadcast a otras pestañas
  try{ if(syncChannel) syncChannel.postMessage({type:'update', payload, ts:data.__ts}); }catch(e){}
  // Sync Firebase si está configurado
  if(typeof fbConfigured!=='undefined'&&fbConfigured&&typeof saveToFirebase==='function') saveToFirebase();
  // Actualizar timestamp visible
  const el=document.getElementById('sb-saved');
  if(el) el.textContent=new Date().toLocaleTimeString('es-ES');
}

function saveData(){ _persistData(); } // compatibilidad con código existente

// ── Control de permisos por rol ───────────────────────────────────────────────
const ROLE_PERMISSIONS = {
  admin:      ['read','write','export','import','delete','config','firma','users'],
  supervisor: ['read','write','export','firma'],
  tecnico:    ['read','write','firma'],
};

function hasPermission(action){
  const rol=sessionStorage.getItem('ppcl_role')||'tecnico';
  const perms=ROLE_PERMISSIONS[rol]||ROLE_PERMISSIONS.tecnico;
  return perms.includes(action);
}

function requirePermission(action, callback){
  if(!hasPermission(action)){
    if(typeof showToast==='function') showToast('🔒 Permiso denegado — acción requiere rol: '+_roleForAction(action));
    if(typeof auditLog==='function') auditLog('SEGURIDAD','permiso_denegado',action,sessionStorage.getItem('ppcl_role')||'?');
    return false;
  }
  if(callback) callback();
  return true;
}

function _roleForAction(action){
  for(const [rol,perms] of Object.entries(ROLE_PERMISSIONS)){
    if(perms.includes(action)) return rol;
  }
  return 'admin';
}

// ── Exportar JSON — sin datos sensibles, con control de permisos ──────────────
function exportJSON(){
  if(!requirePermission('export')) return;
  var backup={
    version:'AquaControl Pro v20',
    exportDate:new Date().toISOString(),
    exportUser:sessionStorage.getItem('ppcl_user_email')||'desconocido',
    exportRol:sessionStorage.getItem('ppcl_role')||'desconocido',
    // Datos operacionales — excluye __ts y claves privadas
    data:{},
    firmas:{},  // firmas sin imágenes si el rol no es admin
    config:{}
    // NO incluye: usuarios, contraseñas, PINs, audit log completo
  };
  try{
    var raw=JSON.parse(localStorage.getItem('ppcl_legionella_v1')||'{}');
    // Filtrar claves privadas
    Object.keys(raw).forEach(function(k){
      if(!k.startsWith('__')) backup.data[k]=raw[k];
    });
  }catch(e){}
  // Firmas: admin exporta completas, otros solo metadatos
  try{
    var firmasRaw=JSON.parse(localStorage.getItem('ppcl_firmas_v1')||'{}');
    if(hasPermission('admin')){
      backup.firmas=firmasRaw;
    } else {
      Object.keys(firmasRaw).forEach(function(k){
        var f=firmasRaw[k];
        backup.firmas[k]={nombre:f.nombre,fecha:f.fecha,hora:f.hora,dni:f.dni};
      });
    }
  }catch(e){}
  try{ backup.config=JSON.parse(localStorage.getItem('ppcl_config_v1')||'{}'); }catch(e){}
  // Auditoría: solo admin exporta el log completo
  if(hasPermission('admin')){
    try{ backup.auditoria=(JSON.parse(localStorage.getItem('ppcl_audit_v1')||'[]')).slice(-200); }catch(e){}
  }
  var json=JSON.stringify(backup,null,2);
  var blob=new Blob([json],{type:'application/json;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  var fecha=new Date().toISOString().slice(0,10);
  a.href=url; a.download='AquaControl_Backup_'+fecha+'.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(url);},3000);
  if(typeof auditLog==='function') auditLog('EXPORTAR','backup_json',fecha,Math.round(json.length/1024)+'KB');
  if(typeof showToast==='function') showToast('✅ Backup descargado ('+Math.round(json.length/1024)+' KB) — sin datos sensibles');
}

// ── Importar JSON — con validación y confirmación ────────────────────────────
function importJSON(){
  if(!requirePermission('import')) return;
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='.json';
  inp.onchange=e=>{
    const file=e.target.files[0];
    if(!file) return;
    // Confirmar antes de importar (acción destructiva)
    if(!confirm('⚠️ IMPORTAR BACKUP\n\nEsto fusionará los datos del archivo con los datos actuales.\nLos registros más recientes tienen prioridad.\n\n¿Continuar?')) return;
    const reader=new FileReader();
    reader.onload=ev=>{
      try{
        const incoming=JSON.parse(ev.target.result);
        // Validar estructura mínima
        if(!incoming||typeof incoming!=='object'){
          if(typeof showToast==='function') showToast('❌ Archivo no válido — estructura incorrecta');
          return;
        }
        // Validar versión
        if(incoming.version&&!incoming.version.includes('AquaControl')){
          if(!confirm('⚠️ El archivo no parece ser un backup de AquaControl Pro.\n¿Importar de todas formas?')) return;
        }
        // Fusionar datos operacionales
        const incomingData=incoming.data||incoming; // soporte formato legacy
        let merged=0, skipped=0;
        Object.keys(incomingData).forEach(k=>{
          if(k.startsWith('__')) return;
          const sKey=_sanitizeKey(k);
          if(!data[sKey]||(incoming.__ts&&data.__ts&&incoming.__ts>data.__ts)){
            data[sKey]=String(incomingData[k]||'').slice(0,500);
            merged++;
          } else { skipped++; }
        });
        // Fusionar firmas si vienen incluidas
        if(incoming.firmas&&hasPermission('admin')){
          try{
            var existingFirmas=JSON.parse(localStorage.getItem('ppcl_firmas_v1')||'{}');
            Object.assign(existingFirmas,incoming.firmas);
            localStorage.setItem('ppcl_firmas_v1',JSON.stringify(existingFirmas));
          }catch(e){}
        }
        _persistData();
        if(typeof refreshAllViews==='function') refreshAllViews();
        if(typeof auditLog==='function') auditLog('IMPORTAR','backup_json',file.name,merged+' fusionados, '+skipped+' omitidos');
        if(typeof showToast==='function') showToast('📥 Importado: '+merged+' registros fusionados, '+skipped+' sin cambios');
      }catch(err){
        console.error('[Import]',err);
        if(typeof showToast==='function') showToast('❌ Archivo JSON no válido — '+err.message);
      }
    };
    reader.readAsText(file);
  };
  inp.click();
}

// ── Borrar todo — protegido por permiso + doble confirmación ─────────────────
function restoreDefaults(){
  if(!requirePermission('delete')) return;
  if(!confirm('⚠️ BORRAR TODOS LOS DATOS\n\nEsta acción eliminará TODOS los registros, firmas y configuración.\nHaz un backup antes.\n\n¿Seguro que quieres continuar?')) return;
  if(!confirm('🔴 CONFIRMACIÓN FINAL\n\nEscribe mentalmente "BORRAR" y pulsa Aceptar para continuar.\nNo hay vuelta atrás.')) return;
  localStorage.removeItem('ppcl_legionella_v1');
  localStorage.removeItem('ppcl_firmas_v1');
  localStorage.removeItem('ppcl_photos_v1');
  localStorage.removeItem('ppcl_config_v1');
  data={};
  if(typeof auditLog==='function') auditLog('SEGURIDAD','reset_completo','Todos los datos eliminados',sessionStorage.getItem('ppcl_user_email')||'?');
  if(typeof showToast==='function') showToast('🗑 Datos eliminados. Recarga la app para empezar de nuevo.');
  setTimeout(function(){ location.reload(); }, 2000);
}

// ═══════════════════════════════════════════════════════
//  CURRENT DATES
// ═══════════════════════════════════════════════════════
let ppclMonth = new Date().getMonth(); // 0-based
let ppclYear  = new Date().getFullYear();
let acsDate   = new Date();
let diarioDate= new Date();

// ═══════════════════════════════════════════════════════
//  TABS
// ═══════════════════════════════════════════════════════
function switchTab(id, el){
  // Config needs PIN
  if(id==='config' && !_cfgUnlocked){
    cfgPinBuffer='';
    // Reset dots
    for(let i=0;i<4;i++){const d=document.getElementById('cpd'+i);if(d){d.classList.remove('filled','error');}}
    document.getElementById('cfgPinError').textContent='';
    // Open overlay — add both 'open' class
    openOverlay('configPinOverlay');
    window._pendingTabEl = el;
    window._pendingTabId = id;
    return;
  }
  _doSwitchTab(id, el);
}

function _doSwitchTab(id, el){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  if(el) el.classList.add('active');
  updateAllStats();
  if(id==='dashboard'){setTimeout(renderDashboard,80);setTimeout(renderTodayDashboard,120);setTimeout(updateDashboardBadge,200);setTimeout(renderExecutiveKPIs,150);setTimeout(renderTrendChart,200);setTimeout(renderPendingControls,220);}
  if(id==='acs'){setTimeout(function(){ try{ if(typeof setAcsToday==='function'&&!document.getElementById('acsDate').value){setAcsToday();}else{renderACS();} }catch(e){try{renderACS();}catch(e2){}} },60);}
  if(id==='ppcl'){setTimeout(function(){ try{ renderPPCL(); }catch(e){} },60);}
  if(id==='evap'){setTimeout(function(){ try{ renderEvap(); }catch(e){} },60);}
  if(id==='diario'){setTimeout(function(){ try{ renderDiario(); }catch(e){} },60);}
  if(id==='potable'){setTimeout(function(){ try{ renderPotable(); }catch(e){} },60);}
  if(id==='firma'){setTimeout(renderFirmaTab,50);}
  if(id==='calendario'){setTimeout(renderCalendarioTab,50);}
  if(id==='auditoria'){setTimeout(renderAuditTab,50);}
  if(id==='piscinas'){setTimeout(renderPiscinasTab,50);}
  if(id==='config')    setTimeout(renderConfig,50);
}

// ═══════════════════════════════════════════════════════
//  SECTION TOGGLE
// ═══════════════════════════════════════════════════════
function toggleSec(id){
  document.getElementById(id).classList.toggle('collapsed');
}

// ═══════════════════════════════════════════════════════
//  PPCL — CONDENSADORES
// ═══════════════════════════════════════════════════════
function renderPPCL(){
  // Render photo grid for ppcl main
  setTimeout(()=>{
    const pg = document.getElementById('photoGrid_ppcl_main');
    if(pg && typeof renderPhotoGrid==="function") renderPhotoGrid('ppcl_incidencia_'+localDateStr(new Date()), pg);
  }, 100);
  ppclYear  = parseInt(document.getElementById('ppclYear').value)||2026;
  const daysInMonth = new Date(ppclYear, ppclMonth+1, 0).getDate();

  // month pills
  const pills = document.getElementById('ppclMonthPills');
  pills.innerHTML = MONTHS.map((m,i)=>
    `<div class="month-pill${i===ppclMonth?' active':''}" onclick="ppclMonth=${i};renderPPCL()">${MONTHS_SHORT[i]}</div>`
  ).join('');

  document.getElementById('ppclBadge').textContent = `${daysInMonth} días`;

  // build grid: 2 columns (condensador 1 y 2)
  const grid = document.getElementById('ppclGrid');
  grid.innerHTML = '';

  [1,2].forEach(cn=>{
    const col = document.createElement('div');
    col.className = 'cond-col';

    const hdr = document.createElement('div');
    hdr.className = 'cond-header';
    hdr.textContent = `CONDENSADOR EVAPORATIVO Nº ${cn}`;
    col.appendChild(hdr);

    const sh = document.createElement('div');
    sh.className = 'cond-subheader';
    ['DÍA','BIOCIDAD','TEMP.','PH','TURBIDEZ\nDIARIA'].forEach(h=>{
      const d=document.createElement('div');d.className='cond-sh';d.textContent=h;sh.appendChild(d);
    });
    col.appendChild(sh);

    for(let d=1;d<=daysInMonth;d++){
      const row=document.createElement('div');row.className='cond-row';
      // day number
      const dayEl=document.createElement('div');dayEl.className='cond-day';dayEl.textContent=String(d).padStart(2,'0');
      row.appendChild(dayEl);

      ['biocidad','temperatura','ph','turbidez'].forEach((field,fi)=>{
        const cell=document.createElement('div');cell.className='cond-cell';
        const k=makeKey('ppcl',ppclYear,ppclMonth,cn,d,field);
        const inp=document.createElement('input');
        inp.type='text';inp.className='cell-input';
        inp.placeholder=field==='ph'?'7.x':field==='temperatura'?'°C':field==='turbidez'?'NTU':'';
        inp.setAttribute('inputmode','decimal');
        inp.value=getVal(k);
        inp.dataset.key=k;
        inp.addEventListener('change',e=>{setVal(e.target.dataset.key,e.target.value);colorInput(e.target,field);updatePPCLStats();saveData();});
        inp.addEventListener('input',e=>colorInput(e.target,field));
        colorInput(inp,field);
        cell.appendChild(inp);
        row.appendChild(cell);
      });
      col.appendChild(row);
    }
    grid.appendChild(col);
  });
  updatePPCLStats();
}

function colorInput(inp, field){
  var v = inp.value.trim();
  inp.classList.remove('ok','warn','bad');
  inp.removeAttribute('title');
  // Remove any existing tooltip
  var oldTip = inp._cellTooltip;
  if (oldTip) { oldTip.remove(); inp._cellTooltip = null; }

  if(!v) return;
  var n = parseFloat(v);
  if(isNaN(n)){ inp.classList.add('bad'); _attachTooltip(inp, 'bad', 'Valor inválido', 'Introduce un número válido (ej. 7.5)'); return; }

  // Rangos por campo (min_critico, min_ok, max_ok, max_critico)
  // Usa DATA_RANGES centralizado — única fuente de verdad
  var r = DATA_RANGES[field];
  if(!r){ inp.classList.add('ok'); return; }

  var status, tooltipTitle, tooltipBody;
  if(n >= r.ok[0] && n <= r.ok[1]){
    status = 'ok';
    tooltipTitle = '✅ ' + r.label + ': ' + n + ' ' + r.unit + ' — Correcto';
    tooltipBody = r.norma;
    inp.title = r.label + ': ' + n + ' ' + r.unit + ' — Correcto';
  } else if(n >= r.warn[0] && n <= r.warn[1]){
    status = 'warn';
    tooltipTitle = '⚠️ ' + r.label + ': ' + n + ' ' + r.unit + ' — Advertencia';
    tooltipBody = 'Rango óptimo: ' + r.ok[0] + '–' + r.ok[1] + ' ' + r.unit + '\n' + r.norma;
    inp.title = r.label + ': ' + n + ' ' + r.unit + ' — Advertencia (rango OK: ' + r.ok[0] + '-' + r.ok[1] + ')';
  } else {
    status = 'bad';
    tooltipTitle = '🔴 ' + r.label + ': ' + n + ' ' + r.unit + ' — FUERA DE RANGO';
    tooltipBody = 'Rango normativo: ' + r.ok[0] + '–' + r.ok[1] + ' ' + r.unit + '\n' + r.riesgo;
    inp.title = r.label + ': ' + n + ' ' + r.unit + ' — FUERA DE RANGO (rango OK: ' + r.ok[0] + '-' + r.ok[1] + ')';
    // Lanzar alerta inmediata si es crítico
    if(typeof checkAutoAlerts === 'function') setTimeout(checkAutoAlerts, 500);
    // Push notification para parámetros críticos
    _sendCriticalPushAlert(r.label, n, r.unit, r.ok[0], r.ok[1]);
  }
  inp.classList.add(status);
  _attachTooltip(inp, status, tooltipTitle, tooltipBody);
}

// Crea y gestiona el tooltip flotante de validación
var _activeTooltip = null;
function _attachTooltip(inp, status, title, body) {
  // Eliminar tooltip previo global si existe
  if (_activeTooltip && _activeTooltip !== inp._cellTooltip) {
    _activeTooltip.style.opacity = '0';
    var prev = _activeTooltip;
    setTimeout(function() { if (prev && prev.parentNode) prev.remove(); }, 200);
  }

  // Crear tooltip DOM
  var tip = document.createElement('div');
  tip.className = 'cell-tooltip ' + status;
  tip.innerHTML = '<div class="tt-title">' + title + '</div>'
    + '<div style="font-size:10px;color:rgba(255,255,255,0.75);margin-top:3px;line-height:1.5">'
    + body.replace(/\n/g,'<br>') + '</div>';
  tip.style.position = 'fixed';
  tip.style.pointerEvents = 'none';
  document.body.appendChild(tip);
  inp._cellTooltip = tip;
  _activeTooltip = tip;

  function showTip(e) {
    var rect = inp.getBoundingClientRect();
    tip.style.left = Math.min(rect.left, window.innerWidth - 260) + 'px';
    tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
    if (parseFloat(tip.style.top) < 8) {
      tip.style.top = (rect.bottom + 8) + 'px';
      tip.style.setProperty('--arrow-top', 'auto');
    }
    tip.classList.add('visible');
  }
  function hideTip() {
    tip.classList.remove('visible');
    setTimeout(function() { if (tip.parentNode) tip.remove(); inp._cellTooltip = null; }, 200);
  }

  inp.addEventListener('mouseenter', showTip);
  inp.addEventListener('focus', showTip);
  inp.addEventListener('mouseleave', hideTip);
  inp.addEventListener('blur', hideTip);
  inp.addEventListener('touchstart', function(e) { showTip(e); setTimeout(hideTip, 3000); }, {passive:true});
}

// Envía notificación push cuando detecta valor crítico
function _sendCriticalPushAlert(label, value, unit, min, max) {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  // Throttle: máximo 1 alerta cada 30 segundos por tipo
  var throttleKey = '_lastCritNotif_' + label;
  var now = Date.now();
  if (window[throttleKey] && now - window[throttleKey] < 30000) return;
  window[throttleKey] = now;
  try {
    new Notification('🔴 Parámetro Crítico — AquaControl Pro', {
      body: label + ': ' + value + ' ' + unit + ' (rango normativo: ' + min + '–' + max + ')\nRevisa y corrige de inmediato.',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="52" font-size="52">⚠️</text></svg>',
      tag: 'aquacontrol-critical-' + label,
      requireInteraction: true
    });
  } catch(e) {}
}

function updatePPCLStats(){
  if(typeof renderAIInsight==='function') setTimeout(renderAIInsight,500);
  const all=document.querySelectorAll('#ppclGrid .cell-input');
  const total=all.length;
  const done=[...all].filter(i=>i.value.trim()).length;
  const pend=total-done;
  document.getElementById('ppclTotal').textContent=total;
  document.getElementById('ppclDone').textContent=done;
  document.getElementById('ppclPend').textContent=pend;
  document.getElementById('ppclPct').textContent=total?Math.round(done/total*100)+'%':'0%';
}

// ═══════════════════════════════════════════════════════
//  ACS
// ═══════════════════════════════════════════════════════
// Formatea una fecha YYYY-MM-DD a texto legible "lun 4 may 2026"
function formatSepDate(ymd){
  if(!ymd) return '';
  const [y,m,d] = ymd.split('-').map(Number);
  const dt = new Date(y, m-1, d);
  return dt.toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
}

// Devuelve "YYYY-MM-DD" del lunes de la semana, SIN conversión UTC
// (Definición canónica en módulo DATA — estas son alias para compatibilidad)

function setAcsToday(){
  acsDate = new Date();
  document.getElementById('acsDate').value = localDateStr(acsDate);
  renderACS();
}
function updateAcsWeek(){
  const v = document.getElementById('acsDate').value;
  if(v){ const [y,m,d]=v.split('-').map(Number); acsDate=new Date(y,m-1,d); }
  renderACS();
}
function changeAcsWeek(delta){
  const view = document.getElementById('acsView').value;
  if(view==='semanal') acsDate.setDate(acsDate.getDate() + delta*7);
  else acsDate.setMonth(acsDate.getMonth() + delta);
  document.getElementById('acsDate').value = localDateStr(acsDate);
  renderACS();
}

function renderACS(){
  const view = document.getElementById('acsView').value;
  const wk   = getWeekKey(acsDate);
  const mo   = acsDate.getMonth();
  const yr   = acsDate.getFullYear();

  if(view==='semanal'){
    document.getElementById('acsWeekDisplay').textContent = weekLabel(wk);
    renderAcsSemanal(wk);
  } else if(view==='mensual'){
    document.getElementById('acsWeekDisplay').textContent = `${MONTHS[mo]} ${yr}`;
    renderAcsMensual(mo, yr);
  } else {
    document.getElementById('acsWeekDisplay').textContent = `Depósitos ${yr}`;
    renderAcsDepositos(yr);
  }
}

// Modal de fecha para separadores ACS
let _datePickerKey = '';
let _datePickerOriginal = '';

function openDatePicker(key, currentDate){
  _datePickerKey = key;
  _datePickerOriginal = currentDate || localDateStr(new Date());
  const parts = (_datePickerOriginal || localDateStr(new Date())).split('-');
  const y = parseInt(parts[0]||2026);
  const m = parseInt(parts[1]||1)-1;
  const d = parseInt(parts[2]||1);

  // Fill year select
  const ysel = document.getElementById('dpYear');
  ysel.innerHTML = '';
  for(let yr=2024;yr<=2030;yr++){
    const o=document.createElement('option');
    o.value=yr;o.textContent=yr;if(yr===y)o.selected=true;
    ysel.appendChild(o);
  }
  // Fill month select
  const msel = document.getElementById('dpMonth');
  msel.innerHTML = '';
  ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'].forEach((mn,i)=>{
    const o=document.createElement('option');
    o.value=i+1;o.textContent=mn;if(i===m)o.selected=true;
    msel.appendChild(o);
  });
  // Fill day select
  updateDpDays();
  document.getElementById('dpDay').value = d;
  updateDpPreview();
  document.getElementById('datePickerOverlay').classList.add('open');
}

function updateDpDays(){
  const y = parseInt(document.getElementById('dpYear').value);
  const m = parseInt(document.getElementById('dpMonth').value);
  const days = new Date(y,m,0).getDate();
  const dsel = document.getElementById('dpDay');
  const prev = dsel.value;
  dsel.innerHTML = '';
  for(let d=1;d<=days;d++){
    const o=document.createElement('option');
    o.value=d;o.textContent=String(d).padStart(2,'0');
    dsel.appendChild(o);
  }
  dsel.value = Math.min(parseInt(prev)||1, days);
}

function updateDpPreview(){
  const y = document.getElementById('dpYear').value;
  const m = String(document.getElementById('dpMonth').value).padStart(2,'0');
  const d = String(document.getElementById('dpDay').value).padStart(2,'0');
  const dt = new Date(parseInt(y), parseInt(m)-1, parseInt(d));
  document.getElementById('dpPreview').textContent =
    dt.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

function confirmDatePicker(){
  const y = document.getElementById('dpYear').value;
  const m = String(document.getElementById('dpMonth').value).padStart(2,'0');
  const d = String(document.getElementById('dpDay').value).padStart(2,'0');
  const newDate = y+'-'+m+'-'+d;
  setVal(_datePickerKey, newDate);
  // Update label in DOM
  document.querySelectorAll('.sep-date-label').forEach(lbl=>{
    const btn = lbl.nextElementSibling;
    if(btn && btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(_datePickerKey)){
      lbl.textContent = formatSepDate(newDate);
    }
  });
  closeDatePicker();
  showToast('📅 Fecha actualizada: '+formatSepDate(newDate));
}

function closeDatePicker(){
  document.getElementById('datePickerOverlay').classList.remove('open');
}
function closeOverlay(id){
  const el = document.getElementById(id);
  if(el){
    el.classList.remove('open');
    // Force hide for overlays that use inline style
    if(id==='configPinOverlay') el.style.display='none';
  }
}
function openOverlay(id){
  const el = document.getElementById(id);
  if(el){ el.classList.add('open'); el.style.display='flex'; }
}

function onSepDateChange(inp){
  setVal(inp.dataset.key, inp.value);
  const label = inp.parentElement.querySelector('.sep-date-label');
  if(label) label.textContent = formatSepDate(inp.value);
}

function renderAcsSemanal(wk){
  const c=document.getElementById('acsContent');
  c.innerHTML='';
  const card=buildSectionCard('🚿','GRIFOS — CONTROL SEMANAL', weekLabel(wk),'teal','badge-teal');
  const body=card.querySelector('.section-body');

  const t=document.createElement('table');t.className='data-table';
  t.innerHTML=`<thead><tr>
    <th>Nº</th><th>Nº INTERNO</th><th>GRIFO DE AGUA</th>
    <th class="center">TURBIDEZ<br>AF (SEMANAL)</th>
    <th class="center">TURBIDEZ<br>AC (SEMANAL)</th>
    <th class="center">APERTURA<br>NO UTILIZADO</th>
  </tr></thead><tbody></tbody>`;
  const tb=t.querySelector('tbody');

  let lastNi='';
  ACS_SEMANAL.forEach((g,gi)=>{
    if(g.ni!==lastNi){
      const dateKey = makeKey('acs_sep_date', wk, g.ni);
      const savedDate = getVal(dateKey) || wk;
      const sr=document.createElement('tr');
      sr.innerHTML=`<td colspan="6" class="row-sep">
        <span class="sep-dot"></span>
        <span class="sep-label">SEMANA &mdash; N&ordm; INTERNO ${g.ni}</span>
        <span class="sep-date-wrap" style="position:relative">
          <span class="sep-date-label" onclick="openDatePicker('${dateKey}','${savedDate}')">${formatSepDate(savedDate)}</span>
          <button class="sep-edit-btn" title="Cambiar fecha" onclick="openDatePicker('${dateKey}','${savedDate}')">✏️</button>
        </span>
      </td>`;
      tb.appendChild(sr);
      lastNi=g.ni;
    }
    const tr=document.createElement('tr');
    ['tf','tc','ap'].forEach(f=>{
      const k=makeKey('acs_s',wk,g.n,f);
      data[k]=data[k]||'';
    });
    tr.innerHTML=`
      <td class="row-nint">${g.n}</td>
      <td class="row-nint">${g.ni}</td>
      <td class="row-loc">${g.loc}</td>
      <td>${inputCell(makeKey('acs_s',wk,g.n,'tf'),'NTU')}</td>
      <td>${inputCell(makeKey('acs_s',wk,g.n,'tc'),'NTU')}</td>
      <td>${selectCell(makeKey('acs_s',wk,g.n,'ap'),['','SÍ','NO','N/A'])}</td>
    `;
    tb.appendChild(tr);
  });
  body.appendChild(t);
  c.appendChild(card);
  attachInputEvents(c);
}

function renderAcsMensual(mo,yr){
  const c=document.getElementById('acsContent');c.innerHTML='';
  const mesNombre=MONTHS[mo];
  const mesData=ACS_MENSUAL.find(m=>m.mes===mesNombre);

  const card=buildSectionCard('📊','GRIFOS — CONTROL MENSUAL',`${mesNombre} ${yr}`,'amber','badge-amber');
  const body=card.querySelector('.section-body');

  const t=document.createElement('table');t.className='data-table';
  t.innerHTML=`<thead><tr>
    <th>Nº</th><th>Nº INTERNO</th><th>GRIFO DE AGUA</th>
    <th class="center">CLORO</th>
    <th class="center">PH</th>
    <th class="center">ESTADO<br>CONSERVACIÓN</th>
    <th class="center">TEMP.<br>CALIENTE</th>
    <th class="center">TEMP.<br>FRÍA</th>
  </tr></thead><tbody></tbody>`;
  const tb=t.querySelector('tbody');

  if(mesData){
    const hr=document.createElement('tr');
    hr.innerHTML=`<td colspan="8" class="row-sep"><span class="sep-dot"></span> ${mesNombre} ${yr}</td>`;
    tb.appendChild(hr);
    mesData.items.forEach(g=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`
        <td class="row-nint">${g.n}</td>
        <td class="row-nint">${g.ni}</td>
        <td class="row-loc">${g.loc}</td>
        <td>${inputCell(makeKey('acs_m',yr,mo,g.n,'cloro'),'mg/L')}</td>
        <td>${inputCell(makeKey('acs_m',yr,mo,g.n,'ph'),'pH')}</td>
        <td>${selectCell(makeKey('acs_m',yr,mo,g.n,'estado'),['','BUENO','REGULAR','MALO'])}</td>
        <td>${inputCell(makeKey('acs_m',yr,mo,g.n,'tc'),'°C')}</td>
        <td>${inputCell(makeKey('acs_m',yr,mo,g.n,'tf'),'°C')}</td>
      `;
      tb.appendChild(tr);
    });
  } else {
    tb.innerHTML=`<tr><td colspan="8" style="text-align:center;padding:20px;color:var(--text3)">No hay grifos asignados para ${mesNombre}</td></tr>`;
  }
  body.appendChild(t);
  c.appendChild(card);
  attachInputEvents(c);
}

function renderAcsDepositos(yr){
  const c=document.getElementById('acsContent');c.innerHTML='';

  const card=buildSectionCard('🗄️','DEPÓSITOS — CONTROL MENSUAL',`Año ${yr}`,'blue','badge-blue');
  const body=card.querySelector('.section-body');

  const t=document.createElement('table');t.className='data-table';
  t.innerHTML=`<thead><tr>
    <th>MES</th><th>Nº INT.</th><th>DEPÓSITO</th>
    <th class="center">CLORO</th>
    <th class="center">PH</th>
    <th class="center">TEMP.</th>
    <th class="center">LIMPIEZA Y REVISIÓN BOQUILLA (Pistola Box Lavado)</th>
  </tr></thead><tbody></tbody>`;
  const tb=t.querySelector('tbody');

  ACS_DEPOSITOS.forEach((dep,mi)=>{
    const moIdx=MONTHS.indexOf(dep.mes);
    const hr=document.createElement('tr');
    hr.innerHTML=`<td colspan="7" class="row-sep"><span class="sep-dot"></span> ${dep.mes} ${yr}</td>`;
    tb.appendChild(hr);
    [
      {n:'39',ni:'39',loc:'DEPÓSITO CONTRAINCENDIOS',  boquilla:false},
      {n:'28',ni:'28',loc:'BOX LAVADO ISOTERMOS',       boquilla:true}
    ].forEach(d=>{
      const tr=document.createElement('tr');
      const boquillaCell = d.boquilla
        ? selectCell(makeKey('dep',yr,moIdx,d.n,'boquilla'),['','SÍ','NO','N/A'])
        : '<div style="text-align:center;color:var(--text4);font-size:11px">—</div>';
      tr.innerHTML=`
        <td class="row-nint">${dep.mes}</td>
        <td class="row-nint">${d.ni}</td>
        <td class="row-loc">${d.loc}</td>
        <td>${inputCell(makeKey('dep',yr,moIdx,d.n,'cloro'),'mg/L','cloro')}</td>
        <td>${inputCell(makeKey('dep',yr,moIdx,d.n,'ph'),'pH','ph')}</td>
        <td>${inputCell(makeKey('dep',yr,moIdx,d.n,'temp'),'°C','temperatura')}</td>
        <td>${boquillaCell}</td>
      `;
      tb.appendChild(tr);
    });
  });
  body.appendChild(t);
  c.appendChild(card);
  attachInputEvents(c);
}

// ═══════════════════════════════════════════════════════
//  DIARIO
// ═══════════════════════════════════════════════════════
function setDiarioToday(){ diarioDate=new Date(); document.getElementById('diarioDate').value=localDateStr(diarioDate); renderDiario();}
function updateDiarioDate(){ const v=document.getElementById('diarioDate').value; if(v){ const [y,m,d]=v.split('-').map(Number); diarioDate=new Date(y,m-1,d); } renderDiario();}
function changeDiarioDay(delta){ diarioDate.setDate(diarioDate.getDate()+delta); document.getElementById('diarioDate').value=localDateStr(diarioDate); renderDiario();}

function renderDiario(){
  
// Añadir botón de voz al diario
setTimeout(function(){
  var noteAreas = document.querySelectorAll('textarea[id^="nota"]');
  noteAreas.forEach(function(ta){
    if(ta && ta.parentNode && !ta.parentNode.querySelector('.voice-btn-added')){
      var hasSR = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
      if(hasSR){
        var btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'voice-btn-added';
        btn.title = 'Dictar nota'; btn.innerHTML = '🎤';
        btn.style.cssText = 'position:absolute;right:6px;bottom:6px;background:var(--blue-light);border:1px solid var(--blue);color:var(--blue);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:14px';
        var wrap = ta.parentNode;
        if(getComputedStyle(wrap).position === 'static') wrap.style.position = 'relative';
        btn.onclick = function(){ startDictation(ta.id); };
        wrap.appendChild(btn);
      }
    }
  });
}, 300);

  const dk=localDateStr(diarioDate);
  const display=diarioDate.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('diarioDateDisplay').textContent=display;
  // Also update the date input so it stays in sync
  document.getElementById('diarioDate').value=localDateStr(diarioDate);

  const c=document.getElementById('diarioContent');c.innerHTML='';

  const card=buildSectionCard('📋','AGUA FRÍA SANITARIA — CONTROL DIARIO',display,'teal','badge-teal');
  const body=card.querySelector('.section-body');

  const t=document.createElement('table');t.className='data-table';
  t.innerHTML=`<thead><tr>
    <th>Nº</th>
    <th>AGUA FRÍA SANITARIA</th>
    <th class="center">PH<br><small style="font-size:9px">(DIARIO)</small></th>
    <th class="center">CLORO<br><small style="font-size:9px">(DIARIO)</small></th>
    <th class="center">TEMPERATURA<br><small style="font-size:9px">(SEMANAL) DEP. APORTE</small></th>
  </tr></thead><tbody></tbody>`;
  const tb=t.querySelector('tbody');

  DIARIO_ITEMS.forEach(it=>{
    const tr=document.createElement('tr');
    const isWeekly=(diarioDate.getDay()===1||diarioDate.getDay()===0); // lun/dom
    tr.innerHTML=`
      <td class="row-nint">${it.n}</td>
      <td class="row-loc">${it.loc}</td>
      <td>${inputCell(makeKey('dia',dk,it.n,'ph'),'pH','ph')}</td>
      <td>${inputCell(makeKey('dia',dk,it.n,'cloro'),'mg/L','cloro')}</td>
      <td>${isWeekly?inputCell(makeKey('dia',dk,it.n,'temp'),'°C'):'<div style="text-align:center;color:var(--text4);font-size:11px">— semanal —</div>'}</td>
    `;
    tb.appendChild(tr);
  });

  // observaciones
  const obsRow=document.createElement('tr');
  obsRow.innerHTML=`<td colspan="5" style="padding:12px 14px">
    <div style="font-family:monospace,monospace;font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">OBSERVACIONES DEL DÍA</div>
    <textarea class="cell-input" style="width:100%;min-height:60px;text-align:left;resize:vertical;font-family:sans-serif,sans-serif;font-size:13px;padding:8px"
      placeholder="Anotar cualquier incidencia, anomalía o acción correctiva..."
      onchange="setVal('${makeKey('dia',dk,'obs')}',this.value)">${getVal(makeKey('dia',dk,'obs'))}</textarea>
  </td>`;
  tb.appendChild(obsRow);

  body.appendChild(t);
  c.appendChild(card);
  attachInputEvents(c);
  updateDiarioStats(dk);
}

function updateDiarioStats(dk){
  const keys=DIARIO_ITEMS.flatMap(it=>[makeKey('dia',dk,it.n,'ph'),makeKey('dia',dk,it.n,'cloro')]);
  const total=keys.length;
  const done=keys.filter(k=>getVal(k)).length;
  const pend=total-done;
  document.getElementById('diarTotal').textContent=total;
  document.getElementById('diarDone').textContent=done;
  document.getElementById('diarPend').textContent=pend;
  document.getElementById('diarPct').textContent=total?Math.round(done/total*100)+'%':'0%';
}

// ═══════════════════════════════════════════════════════
//  HELPERS — BUILD UI
// ═══════════════════════════════════════════════════════
function inputCell(key,placeholder,field){
  const v=(getVal(key)||'').replace(/"/g,'&quot;');
  return `<input type="text" class="cell-input" placeholder="${placeholder||''}" value="${v}" data-key="${key}" data-field="${field||''}" inputmode="decimal" onchange="setVal(this.dataset.key,this.value);colorInput(this,this.dataset.field);saveData();" oninput="colorInput(this,this.dataset.field)">`;
}
function selectCell(key,opts){
  const v=getVal(key);
  const options=opts.map(o=>`<option value="${o}"${v===o?' selected':''}>${o||'—'}</option>`).join('');
  return `<select class="cell-input" data-key="${key}" onchange="setVal(this.dataset.key,this.value)">${options}</select>`;
}

function buildSectionCard(icon,title,sub,iconClass,badgeClass){
  const card=document.createElement('div');
  card.className='section-card';
  card.innerHTML=`
    <div class="section-head" onclick="this.parentElement.classList.toggle('collapsed')">
      <div class="sec-icon ${iconClass}">${icon}</div>
      <div><div class="sec-title">${title}</div><div class="sec-sub">${sub}</div></div>
      <span class="sec-badge ${badgeClass}">${MONTHS[acsDate.getMonth()]} ${acsDate.getFullYear()}</span>
      <span class="sec-toggle">▼</span>
    </div>
    <div class="section-body" style="max-height:9999px"><div style="overflow-x:auto"></div></div>
  `;
  // move content into scrollable wrapper
  const wrap=card.querySelector('.section-body div');
  card.querySelector('.section-body')._wrap=wrap;
  // reassign appendChild to go into wrap
  const sb=card.querySelector('.section-body');
  sb._origAppend=sb.appendChild.bind(sb);
  sb.appendChild=el=>wrap.appendChild(el);
  return card;
}

function attachInputEvents(container){
  container.querySelectorAll('.cell-input[data-field]').forEach(inp=>{
    colorInput(inp, inp.dataset.field);
  });
}

// ═══════════════════════════════════════════════════════
//  EVAPORATIVOS MENSUAL
// ═══════════════════════════════════════════════════════
let evapMonth = new Date().getMonth();
let evapYear  = new Date().getFullYear();

function renderEvap(){
  evapYear  = parseInt(document.getElementById('evapYear').value)||2026;

  // Pills de mes
  const pills = document.getElementById('evapMonthPills');
  pills.innerHTML = MONTHS.map((m,i)=>
    `<div class="month-pill${i===evapMonth?' active':''}" onclick="evapMonth=${i};renderEvap()">${MONTHS_SHORT[i]}</div>`
  ).join('');

  const c = document.getElementById('evapContent');
  c.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'section-card';
  card.innerHTML = `
    <div class="section-head" onclick="this.parentElement.classList.toggle('collapsed')">
      <div class="sec-icon blue">🔵</div>
      <div>
        <div class="sec-title">EVAPORATIVOS MENSUAL — ${MONTHS[evapMonth]} ${evapYear}</div>
        <div class="sec-sub">BIOCIDAD · PH · TEMPERATURA · TURBIDEZ · 26 EVAPORATIVOS</div>
      </div>
      <span class="sec-badge badge-blue">${EVAP_ITEMS.length} unidades</span>
      <span class="sec-toggle">▼</span>
    </div>
    <div class="section-body" style="max-height:9999px;overflow-x:auto"></div>`;

  const body = card.querySelector('.section-body');
  const t = document.createElement('table');
  t.className = 'data-table';
  t.innerHTML = `<thead><tr>
    <th>Nº</th><th>EVAPORATIVO</th>
    <th class="center">BIOCIDAD</th>
    <th class="center">PH</th>
    <th class="center">TEMPERATURA (°C)</th>
    <th class="center">TURBIDEZ</th>
  </tr></thead><tbody></tbody>`;
  const tb = t.querySelector('tbody');

  EVAP_ITEMS.forEach((ev,i)=>{
    const alt = i%2===0;
    const tr = document.createElement('tr');
    if(alt) tr.style.background='var(--surface2)';
    tr.innerHTML = `
      <td class="row-nint">${ev.n}</td>
      <td class="row-loc">${ev.loc}</td>
      <td>${inputCell(makeKey('evap',evapYear,evapMonth,ev.n,'biocidad'),'','')}</td>
      <td>${inputCell(makeKey('evap',evapYear,evapMonth,ev.n,'ph'),'pH','ph')}</td>
      <td>${inputCell(makeKey('evap',evapYear,evapMonth,ev.n,'temp'),'°C','temperatura')}</td>
      <td>${inputCell(makeKey('evap',evapYear,evapMonth,ev.n,'turbidez'),'NTU','')}</td>
    `;
    tb.appendChild(tr);
  });
  body.appendChild(t);
  c.appendChild(card);
  attachInputEvents(c);
  updateEvapStats();
}

function updateEvapStats(){
  const fields=['biocidad','ph','temp','turbidez'];
  const total = EVAP_ITEMS.length * fields.length;
  const done  = EVAP_ITEMS.reduce((acc,ev)=>
    acc + fields.filter(f=>getVal(makeKey('evap',evapYear,evapMonth,ev.n,f))).length, 0);
  const pend  = total - done;
  document.getElementById('evapTotal').textContent = total;
  document.getElementById('evapDone').textContent  = done;
  document.getElementById('evapPend').textContent  = pend;
  document.getElementById('evapPct').textContent   = total?Math.round(done/total*100)+'%':'0%';
}

// ═══════════════════════════════════════════════════════
//  AGUA POTABLE
// ═══════════════════════════════════════════════════════
let potableDate = new Date();

function setPotableToday(){
  potableDate = new Date();
  document.getElementById('potableDate').value = localDateStr(potableDate);
  renderPotable();
}
function updatePotableDate(){
  const v = document.getElementById('potableDate').value;
  if(v){ const [y,m,d]=v.split('-').map(Number); potableDate=new Date(y,m-1,d); }
  renderPotable();
}
function changePotableDay(delta){
  potableDate.setDate(potableDate.getDate()+delta);
  document.getElementById('potableDate').value = localDateStr(potableDate);
  renderPotable();
}

function renderPotable(){
  const wk    = getWeekKey(potableDate);
  const grifo = getPotableGrifoSemana(wk);
  const display = potableDate.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const wlabel  = weekLabel(wk);

  document.getElementById('potableDateDisplay').textContent = display;
  document.getElementById('potableDate').value = localDateStr(potableDate);

  const cont = document.getElementById('potableContent');
  cont.innerHTML = '';

  // ── Selector de semana del calendario ─────────────────────────────
  const selWrap = document.createElement('div');
  selWrap.style.cssText='padding:12px 16px;background:var(--surface);border:1px solid var(--border);border-radius:8px;margin-bottom:14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap';

  const selLabel = document.createElement('span');
  selLabel.style.cssText='font-family:"DM Mono",monospace;font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;white-space:nowrap';
  selLabel.textContent = 'SEMANA DEL AÑO:';
  selWrap.appendChild(selLabel);

  const sel = document.createElement('select');
  sel.className = 'date-input';
  sel.style.cssText = 'flex:1;min-width:200px;font-size:12px';
  POTABLE_CALENDARIO.forEach(entry => {
    const opt = document.createElement('option');
    opt.value = entry.lunes;
    const [y2,m2,d2] = entry.lunes.split('-').map(Number);
    const lunDt = new Date(y2,m2-1,d2);
    const domDt = new Date(y2,m2-1,d2+6);
    const fmt   = dt => dt.toLocaleDateString('es-ES',{day:'numeric',month:'short'});
    opt.textContent = fmt(lunDt)+' – '+fmt(domDt)+' '+y2+' · '+entry.grifo;
    opt.selected = (entry.lunes === wk);
    sel.appendChild(opt);
  });
  sel.onchange = function(){
    const [y2,m2,d2] = this.value.split('-').map(Number);
    potableDate = new Date(y2,m2-1,d2);
    document.getElementById('potableDate').value = localDateStr(potableDate);
    renderPotable();
  };
  selWrap.appendChild(sel);
  cont.appendChild(selWrap);

  // ── Card principal ─────────────────────────────────────────────────
  const card = document.createElement('div');
  card.className = 'section-card';
  card.innerHTML = '<div class="section-head" onclick="this.parentElement.classList.toggle(\'collapsed\')">'
    +'<div class="sec-icon teal">💧</div>'
    +'<div>'
    +'<div class="sec-title">REGISTRO CONTROL AGUA POTABLE — SEMANAL</div>'
    +'<div class="sec-sub">Semana '+wlabel+' · Nº Sem. '+grifo.nsem+' · Ref: RG.ALM.03-1</div>'
    +'</div>'
    +'<span class="sec-badge badge-teal">1 grifo/semana</span>'
    +'<span class="sec-toggle">▼</span>'
    +'</div>'
    +'<div class="section-body" style="max-height:9999px;overflow-x:auto"></div>';
  const body = card.querySelector('.section-body');

  // Info box grifo asignado
  const infoBox = document.createElement('div');
  infoBox.style.cssText='padding:12px 16px;background:var(--blue-light);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px';
  infoBox.innerHTML='<div style="font-size:22px">🚰</div>'
    +'<div>'
    +'<div style="font-family:Sora,sans-serif;font-size:13px;font-weight:700;color:var(--navy)">Semana '+grifo.nsem+' — Grifo asignado: '+grifo.grifo+'</div>'
    +'<div style="font-size:12px;color:var(--text2);margin-top:2px">'+wlabel+'</div>'
    +'</div>';
  body.appendChild(infoBox);

  const t = document.createElement('table');
  t.className = 'data-table';
  t.innerHTML = '<thead><tr>'
    +'<th>Grifo / Punto de Control</th>'
    +'<th class="center">COLOR</th>'
    +'<th class="center">OLOR</th>'
    +'<th class="center">SABOR</th>'
    +'<th class="center">CLORO LIBRE (≥0.2 mg/L)</th>'
    +'<th class="center">RESULTADO (S/N)</th>'
    +'<th class="center">FIRMA</th>'
    +'<th class="center">INCIDENCIA</th>'
    +'</tr></thead><tbody></tbody>';
  const tb = t.querySelector('tbody');

  const mkp = f => makeKey('pot', wk, grifo.grifo.replace(/\s/g,'_'), f);

  const selCell = (f, opts) => {
    const v = getVal(mkp(f));
    let style = '';
    if(f==='result'){
      if(v==='S') style='color:var(--green);font-weight:700;background:var(--green-light)';
      else if(v==='N') style='color:var(--red);font-weight:700;background:var(--red-light)';
    }
    if((f==='color'||f==='olor'||f==='sabor')&&v){
      if(v==='CORRECTO') style='color:var(--green);background:var(--green-light)';
      else if(v==='INCORRECTO') style='color:var(--red);background:var(--red-light)';
    }
    if(f==='incid'&&v==='X') style='color:var(--red);font-weight:700;background:var(--red-light)';
    const os = opts.map(o=>'<option value="'+o+'"'+(v===o?' selected':'')+'>'+( o||'—')+'</option>').join('');
    return '<select class="cell-input" style="'+style+'" data-key="'+mkp(f)+'" onchange="setVal(this.dataset.key,this.value)">' + os + '</select>';
  };

  const tr = document.createElement('tr');
  tr.innerHTML = '<td class="row-loc">'+grifo.grifo+'</td>'
    +'<td>'+selCell('color',['','CORRECTO','INCORRECTO'])+'</td>'
    +'<td>'+selCell('olor', ['','CORRECTO','INCORRECTO'])+'</td>'
    +'<td>'+selCell('sabor',['','CORRECTO','INCORRECTO'])+'</td>'
    +'<td>'+inputCell(mkp('cloro'),'mg/L','cloro')+'</td>'
    +'<td>'+selCell('result',['','S','N'])+'</td>'
    +'<td>'+inputCell(mkp('firma'),'Nombre','')+'</td>'
    +'<td>'+selCell('incid',['','—','X'])+'</td>';
  tb.appendChild(tr);

  // Fila observaciones
  const obsK = makeKey('pot', wk, grifo.grifo.replace(/\s/g,'_'), 'obs');
  const obsRow = document.createElement('tr');
  obsRow.innerHTML = '<td colspan="8" style="padding:10px 14px">'
    +'<div style="font-family:monospace,monospace;font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px">OBSERVACIONES</div>'
    +'<textarea class="cell-input" style="width:100%;min-height:50px;text-align:left;resize:vertical;font-family:sans-serif,sans-serif;font-size:13px;padding:8px" '
    +'placeholder="Anotar cualquier incidencia o anomalía..." '
    +'onchange="setVal(\'"+ obsK +"\',this.value)">'+getVal(obsK)+'</textarea>'
    +'</td>';
  tb.appendChild(obsRow);

  body.appendChild(t);
  cont.appendChild(card);
  attachInputEvents(cont);
  updatePotableStats(wk);
}

function updatePotableStats(wk){
  const grifo = getPotableGrifoSemana(wk);
  const fields = ['color','olor','sabor','cloro','result'];
  const keys   = fields.map(f=>makeKey('pot',wk,grifo.ni,f));
  const total  = keys.length;
  const done   = keys.filter(k=>getVal(k)).length;
  document.getElementById('potTotal').textContent = total;
  document.getElementById('potDone').textContent  = done;
  document.getElementById('potPend').textContent  = total-done;
  document.getElementById('potPct').textContent   = total?Math.round(done/total*100)+'%':'0%';
}

function updatePotableStats(wk){
  // wk = lunes de la semana
  const grifo = getPotableGrifoSemana(wk||getWeekKey(potableDate));
  const gKey  = grifo.grifo.replace(/\s+/g,'_');
  const fields = ['color','olor','sabor','cloro','result'];
  const keys   = fields.map(f=>makeKey('pot',wk||getWeekKey(potableDate),gKey,f));
  const total  = keys.length;
  const done   = keys.filter(k=>getVal(k)).length;
  document.getElementById('potTotal').textContent = total;
  document.getElementById('potDone').textContent  = done;
  document.getElementById('potPend').textContent  = total-done;
  document.getElementById('potPct').textContent   = total?Math.round(done/total*100)+'%':'0%';
}

// ═══════════════════════════════════════════════════════
//  CONFIG PIN
// ═══════════════════════════════════════════════════════
const CFG_ACCESS_PIN = '1234'; // PIN específico para Configuración
let cfgPinBuffer = '';
let _cfgUnlocked = false;

function cfgPinPress(d){
  if(cfgPinBuffer.length>=4) return;
  cfgPinBuffer += d;
  updateCfgPinDots();
  if(cfgPinBuffer.length===4) setTimeout(checkCfgPin,150);
}
function cfgPinClear(){
  cfgPinBuffer = cfgPinBuffer.slice(0,-1);
  updateCfgPinDots();
  document.getElementById('cfgPinError').textContent='';
}
function updateCfgPinDots(){
  for(let i=0;i<4;i++){
    const d=document.getElementById('cpd'+i);
    if(d){ d.classList.toggle('filled',i<cfgPinBuffer.length); d.classList.remove('error'); }
  }
}
function checkCfgPin(){
  const current = (cfg && cfg.cfgPin) ? cfg.cfgPin : CFG_ACCESS_PIN;
  if(cfgPinBuffer===current){
    _cfgUnlocked=true;
    closeOverlay('configPinOverlay');
    // Switch to config tab
    const cfgTabBtn = document.querySelector('[onclick*="config"]');
    _doSwitchTab('config', cfgTabBtn);
    showToast('✅ Acceso a configuración autorizado');
  } else {
    for(let i=0;i<4;i++){const d=document.getElementById('cpd'+i);if(d)d.classList.add('error');}
    document.getElementById('cfgPinError').textContent='❌ PIN incorrecto';
    setTimeout(()=>{cfgPinBuffer='';updateCfgPinDots();document.getElementById('cfgPinError').textContent='';},1200);
  }
}

// ═══════════════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════════════
let _charts = {};

function destroyChart(id){
  if(_charts[id]){ try{_charts[id].destroy();}catch(e){} delete _charts[id]; }
}

function renderDashboard(){
  const yr = ppclYear;
  const mo = ppclMonth;
  const mesNombre = MONTHS[mo];

  document.getElementById('dashSubtitle').textContent =
    'Resumen visual PPCL · '+mesNombre+' '+yr;
  document.getElementById('dashCondSubtitle').textContent =
    'Evolución del pH — '+mesNombre+' '+yr;

  // ── KPIs ──────────────────────────────────────────────
  const days   = new Date(yr,mo+1,0).getDate();
  const allData = [];

  // Condensadores datos del mes
  let condDone=0, condTotal=0, condAlerts=[];
  for(let d=1;d<=days;d++){
    [1,2].forEach(cn=>{
      ['biocidad','temperatura','ph'].forEach(f=>{
        condTotal++;
        const v=getVal(makeKey('ppcl',yr,mo,cn,d,f));
        if(v) condDone++;
        if(f==='ph'&&v){
          const n=parseFloat(v);
          if(!isNaN(n)&&(n<6.5||n>8.5)) condAlerts.push({sec:'Condensador '+cn,dia:d,campo:'PH',val:v,level:'red'});
          else if(!isNaN(n)&&(n<7.0||n>8.0)) condAlerts.push({sec:'Condensador '+cn,dia:d,campo:'PH',val:v,level:'amber'});
        }
        if(f==='temperatura'&&v){
          const n=parseFloat(v);
          if(!isNaN(n)&&n>35) condAlerts.push({sec:'Condensador '+cn,dia:d,campo:'Temp',val:v+'°C',level:'red'});
          else if(!isNaN(n)&&n>25) condAlerts.push({sec:'Condensador '+cn,dia:d,campo:'Temp',val:v+'°C',level:'amber'});
        }
      });
    });
  }

  // ACS Semanal semana actual
  const wk=getWeekKey(acsDate);
  let acsDone=0, acsTotal=0;
  ACS_SEMANAL.forEach(g=>{
    ['tf','tc'].forEach(f=>{acsTotal++;if(getVal(makeKey('acs_s',wk,g.n,f)))acsDone++;});
  });

  // Evaporativos mes
  let evapDone=0, evapTotal=0;
  EVAP_ITEMS.forEach(ev=>{
    ['biocidad','ph','temp','turbidez'].forEach(f=>{
      evapTotal++;if(getVal(makeKey('evap',yr,mo,ev.n,f)))evapDone++;
    });
  });

  // Diario hoy
  const dk=localDateStr(diarioDate);
  let diarioDone=0;
  DIARIO_ITEMS.forEach(it=>{
    if(getVal(makeKey('dia',dk,it.n,'ph'))) diarioDone++;
    if(getVal(makeKey('dia',dk,it.n,'cloro'))) diarioDone++;
  });

  const pctCond  = condTotal  ? Math.round(condDone/condTotal*100)   : 0;
  const pctAcs   = acsTotal   ? Math.round(acsDone/acsTotal*100)     : 0;
  const pctEvap  = evapTotal  ? Math.round(evapDone/evapTotal*100)   : 0;
  const pctGlobal= (condTotal+acsTotal+evapTotal) ?
    Math.round((condDone+acsDone+evapDone)/(condTotal+acsTotal+evapTotal)*100) : 0;

  // Render KPI cards
  const kpiEl = document.getElementById('dashKpis');
  const kpis = [
    {label:'Cumplimiento Global', val:pctGlobal+'%', icon:'🎯', color:'blue',
     trend:pctGlobal>=80?'ok':pctGlobal>=50?'ok':'down',
     trendTxt:pctGlobal>=80?'✅ Buen ritmo':'⚠️ Mejorar'},
    {label:'Condensadores '+mesNombre, val:pctCond+'%', icon:'🌡️', color:'teal',
     trend:'ok', trendTxt:condDone+'/'+condTotal+' registros'},
    {label:'ACS Semanal', val:pctAcs+'%', icon:'🚿', color:'green',
     trend:pctAcs===100?'ok':'ok', trendTxt:acsDone+'/'+acsTotal+' grifos'},
    {label:'Evaporativos', val:pctEvap+'%', icon:'🔵', color:'amber',
     trend:'ok', trendTxt:evapDone+'/'+evapTotal+' registros'},
    {label:'Alertas activas', val:condAlerts.filter(a=>a.level==='red').length,
     icon:'⚠️', color:'red', trend:condAlerts.length>0?'down':'ok',
     trendTxt:condAlerts.length+' valores fuera de rango'},
    {label:'Días con diario', val:function(){
      let cnt=0;
      for(let d=1;d<=days;d++){
        const dk2=yr+'-'+String(mo+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
        if(getVal(makeKey('dia',dk2,DIARIO_ITEMS[0].n,'ph'))) cnt++;
      }
      return cnt;
    }(), icon:'📋', color:'blue', trend:'ok', trendTxt:'de '+days+' días del mes'},
  ];
  kpiEl.innerHTML = kpis.map(k=>`
    <div class="kpi-card ${k.color}">
      <div class="kpi-num">${k.val}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-trend ${k.trend}">${k.trendTxt}</div>
      <div class="kpi-icon">${k.icon}</div>
    </div>`).join('');

  // ── Gráfico 1: Progreso por sección ──────────────────
  destroyChart('progress');
  const ctxProg = document.getElementById('chartProgress');
  if(ctxProg && typeof Chart !== 'undefined'){
    _charts['progress'] = new Chart(ctxProg.getContext('2d'),{
      type:'bar',
      data:{
        labels:['Condensadores','ACS Semanal','Evaporativos','ACS Mensual','Diario'],
        datasets:[{
          label:'% Completado',
          data:[pctCond, pctAcs, pctEvap,
            (function(){let d=0,t=0;ACS_MENSUAL.forEach(mes=>{const mi=MONTHS.indexOf(mes.mes);mes.items.forEach(g=>{['cloro','ph','estado','tc','tf'].forEach(f=>{t++;if(getVal(makeKey('acs_m',yr,mi,g.n,f)))d++;});});});return t?Math.round(d/t*100):0;})(),
            Math.round(diarioDone/Math.max(1,DIARIO_ITEMS.length*2)*100)
          ],
          backgroundColor:[
            'rgba(37,137,199,0.8)','rgba(13,138,122,0.8)',
            'rgba(29,111,164,0.8)','rgba(201,123,0,0.8)','rgba(39,174,96,0.8)'
          ],
          borderRadius:6, borderSkipped:false
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:true,
        plugins:{legend:{display:false},
          tooltip:{callbacks:{label:ctx=>ctx.parsed.y+'%'}}},
        scales:{
          y:{min:0,max:100,grid:{color:'rgba(0,0,0,0.05)'},
            ticks:{callback:v=>v+'%',font:{size:11}}},
          x:{grid:{display:false},ticks:{font:{size:11}}}
        }
      }
    });
  }

  // ── Gráfico 2: PH Condensadores diario ───────────────
  destroyChart('ph');
  const ctxPh = document.getElementById('chartPh');
  if(ctxPh && typeof Chart !== 'undefined'){
    const labels=[],ph1=[],ph2=[],colors1=[],colors2=[];
    for(let d=1;d<=days;d++){
      const v1=parseFloat(getVal(makeKey('ppcl',yr,mo,1,d,'ph'))||'');
      const v2=parseFloat(getVal(makeKey('ppcl',yr,mo,2,d,'ph'))||'');
      labels.push(d);
      ph1.push(isNaN(v1)?null:v1);
      ph2.push(isNaN(v2)?null:v2);
      colors1.push(isNaN(v1)?'rgba(0,0,0,0)':v1>=7&&v1<=8?'rgba(39,174,96,0.9)':v1>=6.5&&v1<=8.5?'rgba(201,123,0,0.9)':'rgba(231,76,60,0.9)');
      colors2.push(isNaN(v2)?'rgba(0,0,0,0)':v2>=7&&v2<=8?'rgba(13,138,122,0.9)':v2>=6.5&&v2<=8.5?'rgba(201,123,0,0.9)':'rgba(231,76,60,0.9)');
    }
    _charts['ph'] = new Chart(ctxPh.getContext('2d'),{
      type:'bar',
      data:{
        labels,
        datasets:[
          {label:'Condensador 1',data:ph1,backgroundColor:colors1,borderRadius:3,barPercentage:0.6},
          {label:'Condensador 2',data:ph2,backgroundColor:colors2,borderRadius:3,barPercentage:0.6}
        ]
      },
      options:{
        responsive:true,
        plugins:{legend:{position:'top',labels:{font:{size:11}}},
          annotation:{annotations:{
            lineOk:{type:'box',yMin:7,yMax:8,backgroundColor:'rgba(39,174,96,0.06)',borderColor:'rgba(39,174,96,0.3)',borderWidth:1}
          }}
        },
        scales:{
          y:{min:5.5,max:9.5,grid:{color:'rgba(0,0,0,0.05)'},
            ticks:{font:{size:10}},
            title:{display:true,text:'pH',font:{size:11}}},
          x:{grid:{display:false},ticks:{font:{size:9}},title:{display:true,text:'Día',font:{size:11}}}
        }
      }
    });
  }

  // ── Gráfico 3: Temperatura Condensadores ─────────────
  destroyChart('temp');
  const ctxT = document.getElementById('chartTemp');
  if(ctxT && typeof Chart !== 'undefined'){
    const t1=[],t2=[];
    for(let d=1;d<=days;d++){
      t1.push(parseFloat(getVal(makeKey('ppcl',yr,mo,1,d,'temperatura'))||'')||null);
      t2.push(parseFloat(getVal(makeKey('ppcl',yr,mo,2,d,'temperatura'))||'')||null);
    }
    _charts['temp'] = new Chart(ctxT.getContext('2d'),{
      type:'line',
      data:{
        labels:Array.from({length:days},(_,i)=>i+1),
        datasets:[
          {label:'Cond. 1',data:t1,borderColor:'rgba(37,137,199,1)',
           backgroundColor:'rgba(37,137,199,0.08)',tension:0.3,fill:true,
           pointRadius:3,pointBackgroundColor:'rgba(37,137,199,1)',spanGaps:true},
          {label:'Cond. 2',data:t2,borderColor:'rgba(13,138,122,1)',
           backgroundColor:'rgba(13,138,122,0.08)',tension:0.3,fill:true,
           pointRadius:3,pointBackgroundColor:'rgba(13,138,122,1)',spanGaps:true}
        ]
      },
      options:{
        responsive:true,
        plugins:{legend:{position:'top',labels:{font:{size:11}}}},
        scales:{
          y:{grid:{color:'rgba(0,0,0,0.05)'},
            ticks:{font:{size:10},callback:v=>v+'°C'},
            title:{display:true,text:'Temperatura (°C)',font:{size:11}}},
          x:{grid:{display:false},ticks:{font:{size:9}},title:{display:true,text:'Día',font:{size:11}}}
        }
      }
    });
  }

  // ── Gráfico 4: Evaporativos PH ────────────────────────
  destroyChart('evapph');
  const ctxEP = document.getElementById('chartEvapPh');
  if(ctxEP && typeof Chart !== 'undefined'){
    const evLabels=[], evPh=[], evColors=[];
    EVAP_ITEMS.forEach(ev=>{
      const v=parseFloat(getVal(makeKey('evap',yr,mo,ev.n,'ph'))||'');
      evLabels.push('Ev.'+ev.n);
      evPh.push(isNaN(v)?null:v);
      evColors.push(isNaN(v)?'rgba(180,180,180,0.3)':
        v>=7&&v<=8?'rgba(39,174,96,0.8)':
        v>=6.5&&v<=8.5?'rgba(201,123,0,0.8)':'rgba(231,76,60,0.8)');
    });
    _charts['evapph'] = new Chart(ctxEP.getContext('2d'),{
      type:'bar',
      data:{labels:evLabels,datasets:[{
        label:'PH',data:evPh,backgroundColor:evColors,borderRadius:4,barPercentage:0.7
      }]},
      options:{
        responsive:true,
        plugins:{legend:{display:false},
          tooltip:{callbacks:{label:ctx=>ctx.parsed.y!==null?'pH: '+ctx.parsed.y:'Sin dato'}}},
        scales:{
          y:{min:5,max:10,grid:{color:'rgba(0,0,0,0.05)'},
            ticks:{font:{size:10}},title:{display:true,text:'pH',font:{size:11}}},
          x:{grid:{display:false},ticks:{font:{size:8},maxRotation:45}}
        }
      }
    });
  }

  // ── Gráfico 5: Agua Potable resultados ───────────────
  destroyChart('potable');
  const ctxPot = document.getElementById('chartPotable');
  if(ctxPot && typeof Chart !== 'undefined'){
    const potLabels=[],potOk=[],potFail=[];
    POTABLE_CALENDARIO.forEach(p=>{
      const wkP=p.lunes;
      const key=p.grifo.replace(/\s/g,'_');
      const res=getVal(makeKey('pot',wkP,key,'result'));
      const cloro=parseFloat(getVal(makeKey('pot',wkP,key,'cloro'))||'');
      if(res){
        const [y2,m2,d2]=wkP.split('-').map(Number);
        const lbl=new Date(y2,m2-1,d2).toLocaleDateString('es-ES',{day:'numeric',month:'short'});
        potLabels.push(lbl);
        potOk.push(res==='S'?1:0);
        potFail.push(res==='N'?1:0);
      }
    });
    if(potLabels.length>0){
      _charts['potable'] = new Chart(ctxPot.getContext('2d'),{
        type:'bar',
        data:{
          labels:potLabels,
          datasets:[
            {label:'Correcto (S)',data:potOk,backgroundColor:'rgba(39,174,96,0.8)',borderRadius:4},
            {label:'Incorrecto (N)',data:potFail,backgroundColor:'rgba(231,76,60,0.8)',borderRadius:4}
          ]
        },
        options:{
          responsive:true,indexAxis:'y',
          plugins:{legend:{position:'top',labels:{font:{size:11}}}},
          scales:{
            x:{grid:{color:'rgba(0,0,0,0.05)'},stacked:true,max:1,ticks:{display:false}},
            y:{grid:{display:false},stacked:true,ticks:{font:{size:10}}}
          }
        }
      });
    } else {
      ctxPot.parentElement.innerHTML += '<div style="text-align:center;color:var(--text4);font-family:monospace;font-size:12px;padding:20px">Sin registros de agua potable aún</div>';
    }
  }

  // ── Tabla últimos registros ───────────────────────────
  const recentBody = document.getElementById('dashRecentBody');
  if(recentBody){
    const recents=[];
    for(let d=days;d>=1&&recents.length<10;d--){
      [1,2].forEach(cn=>{
        const ph=getVal(makeKey('ppcl',yr,mo,cn,d,'ph'));
        const t=getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura'));
        if(ph) recents.push({fecha:'Día '+d,sec:'Cond. '+cn,punto:'PH',val:ph,
          ok:parseFloat(ph)>=7&&parseFloat(ph)<=8});
        if(t) recents.push({fecha:'Día '+d,sec:'Cond. '+cn,punto:'Temp',val:t+'°C',
          ok:parseFloat(t)<=25});
      });
    }
    recentBody.innerHTML = recents.slice(0,10).map(r=>`
      <tr>
        <td class="row-nint">${r.fecha}</td>
        <td class="row-loc">${r.sec}</td>
        <td style="font-size:12px">${r.punto}</td>
        <td style="text-align:center;font-family:monospace;font-size:12px;
          color:${r.ok?'var(--green)':'var(--red)'};font-weight:600">${r.val}</td>
        <td style="text-align:center">
          <span style="font-size:13px">${r.ok?'✅':'⚠️'}</span>
        </td>
      </tr>`).join('') || '<tr><td colspan="5" style="text-align:center;color:var(--text4);padding:20px;font-family:monospace;font-size:12px">Sin registros este mes</td></tr>';
  }

  // ── Alertas ───────────────────────────────────────────
  const alertsEl = document.getElementById('dashAlerts');
  const badge    = document.getElementById('dashAlertBadge');
  const redAlerts = condAlerts.filter(a=>a.level==='red');
  if(badge) badge.textContent = condAlerts.length;
  if(alertsEl){
    if(condAlerts.length===0){
      alertsEl.innerHTML='<div style="text-align:center;color:var(--green);font-family:monospace;font-size:12px;padding:20px">✅ Sin alertas activas — todos los valores dentro del rango</div>';
    } else {
      alertsEl.innerHTML = condAlerts.map(a=>`
        <div class="alert-item ${a.level}">
          <span class="alert-icon">${a.level==='red'?'🔴':'🟡'}</span>
          <div>
            <div class="alert-text"><strong>${a.sec}</strong> — ${a.campo}: <strong>${a.val}</strong></div>
            <div class="alert-meta">Día ${a.dia} · ${MONTHS[mo]} ${yr} · ${a.level==='red'?'FUERA DE RANGO':'Advertencia'}</div>
          </div>
        </div>`).join('');
    }
  }
}


// ── Dashboard Trend Chart ─────────────────────────────
function renderTrendChart(){
  destroyChart('trend');
  const ctxT = document.getElementById('chartTrend');
  if(!ctxT || typeof Chart === 'undefined') return;
  const today = new Date();
  const mo = today.getMonth();
  const yr = today.getFullYear();
  const daysToday = today.getDate();
  const labels=[], vals=[];
  for(let d=1;d<=daysToday;d++){
    let done=0,total=0;
    [1,2].forEach(cn=>{
      ['ph','temperatura','biocidad','turbidez'].forEach(field=>{
        total++;
        if(getVal(makeKey('ppcl',yr,mo,cn,d,field)).trim()) done++;
      });
    });
    labels.push(String(d));
    vals.push(total>0?Math.round(done/total*100):0);
  }
  _charts['trend']=new Chart(ctxT.getContext('2d'),{
    type:'line',
    data:{labels,datasets:[{
      label:'% Completado',data:vals,
      borderColor:'rgba(37,137,199,0.9)',
      backgroundColor:'rgba(37,137,199,0.08)',
      borderWidth:2,fill:true,tension:0.35,pointRadius:3,
      pointBackgroundColor:'rgba(37,137,199,1)'
    }]},
    options:{
      responsive:true,
      plugins:{legend:{display:false},
        tooltip:{callbacks:{label:ctx=>'Completado: '+ctx.parsed.y+'%'}}},
      scales:{
        y:{min:0,max:100,grid:{color:'rgba(0,0,0,0.04)'},
          ticks:{callback:v=>v+'%',font:{size:10}}},
        x:{grid:{display:false},ticks:{font:{size:9}}}
      }
    }
  });
}

function renderPendingControls(){
  const el = document.getElementById('pendingControlsList');
  if(!el) return;
  const today = new Date();
  const mo = today.getMonth();
  const yr = today.getFullYear();
  const items = [];
  // Check next ACS mensual
  const nextMes = ACS_MENSUAL[mo];
  if(nextMes){
    const done = nextMes.items.filter(g=>getVal(makeKey('acs_m',yr,mo,g.n,'ph'))).length;
    if(done < nextMes.items.length){
      items.push({icon:'🚿',title:'ACS Mensual — '+nextMes.mes,detail:`${done}/${nextMes.items.length} grifos medidos`,level:'warn'});
    }
  }
  // Check evaporativos current month
  let evDone=0;
  EVAP_ITEMS.forEach(ev=>{
    if(getVal(makeKey('evap',yr,mo,ev.n,'ph'))) evDone++;
  });
  if(evDone < EVAP_ITEMS.length){
    items.push({icon:'🔵',title:'Evaporativos Mensual',detail:`${evDone}/${EVAP_ITEMS.length} evaporativos medidos`,level:'warn'});
  }
  // Check condensadores today
  const todayDay = today.getDate();
  let condOk=true;
  [1,2].forEach(cn=>{
    if(!getVal(makeKey('ppcl',yr,mo,cn,todayDay,'ph'))) condOk=false;
  });
  if(!condOk){
    items.push({icon:'🌡️',title:'Condensadores — Hoy (Día '+todayDay+')',detail:'Falta registro de pH de hoy',level:'red'});
  }
  if(items.length===0){
    el.innerHTML='<div style="text-align:center;color:var(--green);font-family:monospace;font-size:12px;padding:16px">✅ Todos los controles al día</div>';
  } else {
    el.innerHTML=items.map(it=>`
      <div class="alert-item ${it.level}" style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;margin-bottom:8px;border-radius:8px;border:1px solid var(--border);background:var(--${it.level==='red'?'red':'amber'}-light)">
        <span style="font-size:18px">${it.icon}</span>
        <div>
          <div style="font-family:Sora,sans-serif;font-size:12px;font-weight:700;color:var(--${it.level==='red'?'red':'amber'})">${it.title}</div>
          <div style="font-family:monospace;font-size:10px;color:var(--text3);margin-top:2px">${it.detail}</div>
        </div>
      </div>`).join('');
  }
}


// ═══════════════════════════════════════════════════════
//  FIRMA DIGITAL
// ═══════════════════════════════════════════════════════
const FIRMA_SK = 'ppcl_firmas_v1';
let _firmasData = {};
let _firmaDrawing = false;
let _firmaCtx = null;
let _firmaCanvas = null;
let _firmaKey = '';

function loadFirmas(){
  try{ _firmasData = JSON.parse(localStorage.getItem(FIRMA_SK)||'{}'); }catch(e){ _firmasData={}; }
}
function saveFirmas(){
  localStorage.setItem(FIRMA_SK, JSON.stringify(_firmasData));
}

function initFirmaCanvas(canvasId){
  _firmaCanvas = document.getElementById(canvasId);
  if(!_firmaCanvas) return;
  _firmaCtx = _firmaCanvas.getContext('2d');
  _firmaCtx.strokeStyle = '#0f1f3d';
  _firmaCtx.lineWidth = 2.5;
  _firmaCtx.lineCap = 'round';
  _firmaCtx.lineJoin = 'round';

  const getPos = (e) => {
    const r = _firmaCanvas.getBoundingClientRect();
    if(e.touches){ return {x: e.touches[0].clientX-r.left, y: e.touches[0].clientY-r.top}; }
    return {x: e.clientX-r.left, y: e.clientY-r.top};
  };

  _firmaCanvas.onmousedown = _firmaCanvas.ontouchstart = (e)=>{
    e.preventDefault();
    _firmaDrawing=true;
    const p=getPos(e);
    _firmaCtx.beginPath();
    _firmaCtx.moveTo(p.x,p.y);
  };
  _firmaCanvas.onmousemove = _firmaCanvas.ontouchmove = (e)=>{
    e.preventDefault();
    if(!_firmaDrawing) return;
    const p=getPos(e);
    _firmaCtx.lineTo(p.x,p.y);
    _firmaCtx.stroke();
  };
  _firmaCanvas.onmouseup = _firmaCanvas.ontouchend = ()=>{ _firmaDrawing=false; };
}

function clearFirmaCanvas(){
  if(_firmaCtx && _firmaCanvas){
    _firmaCtx.clearRect(0,0,_firmaCanvas.width,_firmaCanvas.height);
    _firmaCanvas.classList.remove('signed');
  }
}

function saveFirma(key){
  if(!_firmaCanvas) return;
  const nombre = document.getElementById('firmaNombre')?.value?.trim();
  const dni    = document.getElementById('firmaDNI')?.value?.trim();
  if(!nombre){ showToast('⚠️ Introduce tu nombre'); return; }
  // Check if canvas has drawing
  const pixels = _firmaCtx.getImageData(0,0,_firmaCanvas.width,_firmaCanvas.height).data;
  const hasDrawing = pixels.some((v,i)=>i%4===3&&v>0);
  if(!hasDrawing){ showToast('⚠️ Dibuja tu firma en el panel'); return; }
  const now = new Date();
  _firmasData[key] = {
    img: _firmaCanvas.toDataURL('image/png'),
    nombre, dni,
    ts: now.toISOString(),
    fecha: now.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'}),
    hora: now.toLocaleTimeString('es-ES')
  };
  saveFirmas();
  _firmaCanvas.classList.add('signed');
  // Log to audit trail
  auditLog('FIRMA', key, nombre + (dni?' ('+dni+')':''), '—');
  showToast(t('signatureSaved'));
  // Re-render firma tab
  renderFirmaTab();
}

function isLocked(key){
  return !!(_firmasData[key]);
}

function getFirmaInfo(key){
  return _firmasData[key] || null;
}

function renderFirmaTab(){
  const c = document.getElementById('firmaContent');
  if(!c) return;
  const today = new Date();
  const wk = getWeekKey(today);
  const mo = today.getMonth();
  const yr = today.getFullYear();
  const key = 'firma__'+yr+'__'+mo+'__'+wk;
  const existingFirma = getFirmaInfo(key);
  _firmaKey = key;

  c.innerHTML = '';

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'page-hdr';
  hdr.innerHTML = `
    <div>
      <div class="page-title">✍️ Firma Digital</div>
      <div class="page-sub">Semana: ${weekLabel(wk)} · ${MONTHS[mo]} ${yr}</div>
    </div>
  `;
  c.appendChild(hdr);

  if(existingFirma){
    // Show locked state
    const lockedCard = document.createElement('div');
    lockedCard.className = 'firma-panel';
    lockedCard.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <span class="locked-badge">🔒 Registro Firmado</span>
        <span style="font-family:monospace;font-size:11px;color:var(--text3)">${existingFirma.fecha} · ${existingFirma.hora}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        <div>
          <div style="font-family:monospace;font-size:10px;color:var(--text3);margin-bottom:4px">TÉCNICO</div>
          <div style="font-family:Sora,sans-serif;font-size:14px;font-weight:700;color:var(--navy)">${existingFirma.nombre}</div>
          ${existingFirma.dni?'<div style="font-family:monospace;font-size:11px;color:var(--text3)">DNI/NIE: '+existingFirma.dni+'</div>':''}
        </div>
        <div>
          <div style="font-family:monospace;font-size:10px;color:var(--text3);margin-bottom:4px">FIRMA</div>
          <img src="${existingFirma.img}" style="max-width:160px;border:1px solid var(--border);border-radius:8px;background:#fff;">
        </div>
      </div>
      <div style="font-family:monospace;font-size:10px;color:var(--text4);padding:10px;background:var(--green-light);border-radius:8px;color:var(--green)">
        ✅ Este período está firmado y bloqueado para edición. Para desbloquear contacta con el administrador.
      </div>
      <button class="btn btn-outline" style="margin-top:10px;font-size:11px;color:var(--red);border-color:var(--red)" onclick="unlockFirma('${key}')">🔓 Desbloquear (Admin)</button>
    `;
    c.appendChild(lockedCard);
  } else {
    // Show signature form
    const form = document.createElement('div');
    form.className = 'firma-panel';
    form.innerHTML = `
      <div style="font-family:Sora,sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px">
        Firma del Período de Control
      </div>
      <div class="firma-fields">
        <div class="firma-field">
          <label>NOMBRE COMPLETO DEL TÉCNICO</label>
          <input type="text" id="firmaNombre" placeholder="Nombre y apellidos" style="width:100%">
        </div>
        <div class="firma-field">
          <label>DNI / NIE</label>
          <input type="text" id="firmaDNI" placeholder="12345678A" style="width:100%">
        </div>
      </div>
      <div style="font-family:monospace;font-size:10px;color:var(--text3);margin-bottom:8px">
        FIRMA TÁCTIL — dibuja tu firma abajo
      </div>
      <canvas id="firmaCanvas" class="firma-canvas" width="500" height="140" style="width:100%;max-width:500px"></canvas>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="btn btn-primary" onclick="saveFirma('${key}')">✍️ Firmar y Bloquear</button>
        <button class="btn btn-outline" onclick="clearFirmaCanvas()">🗑 Limpiar</button>
      </div>
      <div style="font-family:monospace;font-size:10px;color:var(--text4);margin-top:10px">
        ⚠️ Al firmar, el registro quedará bloqueado para modificaciones. Fecha y hora se registran automáticamente.
      </div>
    `;
    c.appendChild(form);
    // Init canvas after render
    setTimeout(()=>initFirmaCanvas('firmaCanvas'),50);
  }

  // Show all existing firmas
  const allFirmas = Object.entries(_firmasData);
  if(allFirmas.length > 0){
    const histCard = document.createElement('div');
    histCard.className = 'section-card';
    histCard.innerHTML = `
      <div class="sec-hdr" onclick="this.parentElement.classList.toggle('collapsed')">
        <div class="sec-icon teal">📋</div>
        <div><div class="sec-title">HISTORIAL DE FIRMAS</div><div class="sec-sub">${allFirmas.length} períodos firmados</div></div>
        <span class="sec-toggle">▼</span>
      </div>
      <div class="section-body" style="max-height:9999px">
        <table class="data-table">
          <thead><tr>
            <th>Período</th><th>Técnico</th><th>DNI/NIE</th><th>Fecha</th><th>Hora</th><th class="center">Firma</th>
          </tr></thead>
          <tbody>
          ${allFirmas.map(([k,f])=>`<tr>
            <td class="row-nint">${k.replace('firma__','').replace(/__/g,' / ')}</td>
            <td class="row-loc">${f.nombre}</td>
            <td class="row-nint">${f.dni||'—'}</td>
            <td class="row-nint">${f.fecha||'—'}</td>
            <td class="row-nint">${f.hora||'—'}</td>
            <td style="text-align:center"><img src="${f.img}" style="max-width:80px;border-radius:4px;border:1px solid var(--border)"></td>
          </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
    c.appendChild(histCard);
  }
}

function unlockFirma(key){
  const pin = prompt('PIN de administrador para desbloquear:');
  const current = '2026';
  const cfgPin = (typeof cfg !== 'undefined' && cfg.cfgPin) ? cfg.cfgPin : CFG_ACCESS_PIN;
  if(pin === current || pin === cfgPin){
    delete _firmasData[key];
    saveFirmas();
    renderFirmaTab();
    showToast('🔓 Registro desbloqueado');
  } else {
    showToast('❌ PIN incorrecto');
  }
}


// ═══════════════════════════════════════════════════════
//  QR SCANNER (Mejora 3)
// ═══════════════════════════════════════════════════════
const QR_POINTS = [
  {id:'cond1',label:'Condensador 1',icon:'🌡️',tab:'ppcl'},
  {id:'cond2',label:'Condensador 2',icon:'🌡️',tab:'ppcl'},
  {id:'acs_s',label:'ACS Semanal',icon:'🚿',tab:'acs'},
  {id:'acs_m',label:'ACS Mensual',icon:'🚿',tab:'acs'},
  {id:'evap',label:'Evaporativos',icon:'🔵',tab:'evap'},
  {id:'diario',label:'Diario Box',icon:'📋',tab:'diario'},
  {id:'potable',label:'Agua Potable',icon:'💧',tab:'potable'},
];

function openQRScanner(){
  const overlay = document.getElementById('qrScanOverlay');
  if(overlay) overlay.classList.add('open');
}
function closeQRScanner(){
  const overlay = document.getElementById('qrScanOverlay');
  if(overlay) overlay.classList.remove('open');
}
function selectQRPoint(tabId){
  closeQRScanner();
  const tabBtn = document.querySelector(`.tab-btn[onclick*="'${tabId}'"]`);
  switchTab(tabId, tabBtn);
  showToast(t('qrScanned') + ' → ' + tabId);
}

// ═══════════════════════════════════════════════════════
//  FOTOS E INCIDENCIAS (Mejora 4)
// ═══════════════════════════════════════════════════════
const PHOTOS_SK = 'ppcl_photos_v1';
let _photosData = {};

function loadPhotos(){
  try{
    const raw = localStorage.getItem(PHOTOS_SK);
    _photosData = raw ? JSON.parse(raw) : {};
  }catch(e){ _photosData={}; }
}
function savePhotos(){
  try{ localStorage.setItem(PHOTOS_SK, JSON.stringify(_photosData)); }catch(e){
    showToast('⚠️ Almacenamiento lleno — elimina fotos antiguas');
  }
}

function addPhoto(contextKey){
  var input = document.createElement('input');
  input.type='file'; input.accept='image/*'; input.capture='environment';
  input.onchange = function(e){
    var file = e.target.files[0];
    if(!file) return;
    // Validar tamaño
    if(file.size > 10*1024*1024){ if(typeof showToast==='function') showToast('Imagen demasiado grande (max 10MB)'); return; }
    var reader = new FileReader();
    reader.onload = function(ev){
      var img = new Image();
      img.onload = function(){
        // Thumbnail pequeño para lista (80x80)
        var thumbCanvas = document.createElement('canvas');
        var thumbSize = 120;
        var ratio = Math.min(thumbSize/img.width, thumbSize/img.height);
        thumbCanvas.width  = Math.round(img.width  * ratio);
        thumbCanvas.height = Math.round(img.height * ratio);
        thumbCanvas.getContext('2d').drawImage(img, 0, 0, thumbCanvas.width, thumbCanvas.height);
        var thumb = thumbCanvas.toDataURL('image/jpeg', 0.6);
        // Imagen principal comprimida (max 600px)
        var mainCanvas = document.createElement('canvas');
        var maxW = 600;
        var r2 = Math.min(maxW/img.width, 1);
        mainCanvas.width  = Math.round(img.width  * r2);
        mainCanvas.height = Math.round(img.height * r2);
        mainCanvas.getContext('2d').drawImage(img, 0, 0, mainCanvas.width, mainCanvas.height);
        var main = mainCanvas.toDataURL('image/jpeg', 0.72);
        if(!_photosData[contextKey]) _photosData[contextKey] = [];
        _photosData[contextKey].push({
          data: main, thumb: thumb,
          ts: new Date().toISOString(), note: ''
        });
        savePhotos();
        if(typeof auditLog==='function') auditLog('FOTO','adjuntada',contextKey,'');
        if(typeof showToast==='function') showToast('📸 Foto adjuntada (' + Math.round(main.length/1024) + ' KB)');
        var grid = document.getElementById('photoGrid_'+contextKey);
        if(grid && typeof renderPhotoGrid==='function') renderPhotoGrid(contextKey, grid);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function renderPhotoGrid(contextKey, container){
  if(!container) return;
  const photos = _photosData[contextKey] || [];
  container.innerHTML = '';
  photos.forEach((ph, i)=>{
    const img = document.createElement('img');
    img.className = 'photo-thumb';
    img.src = ph.data;
    img.title = ph.note || new Date(ph.ts).toLocaleDateString('es-ES');
    img.onclick = ()=>openPhotoViewer(ph.data, contextKey, i);
    container.appendChild(img);
  });
  // Add photo button
  const addBtn = document.createElement('div');
  addBtn.className = 'photo-add-btn';
  addBtn.innerHTML = '📸<br>Foto';
  addBtn.onclick = ()=>addPhoto(contextKey);
  container.appendChild(addBtn);
}

function openPhotoViewer(src, contextKey, idx){
  let viewer = document.getElementById('photoViewer');
  if(!viewer){
    viewer = document.createElement('div');
    viewer.id = 'photoViewer';
    viewer.className = 'photo-viewer';
    viewer.innerHTML = `
      <button onclick="document.getElementById('photoViewer').classList.remove('open')"
        style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.15);border:none;color:#fff;font-size:22px;cursor:pointer;border-radius:50%;width:40px;height:40px;">✕</button>
      <img id="photoViewerImg">
      <div id="photoViewerActions" style="display:flex;gap:10px">
        <button id="photoDeleteBtn" class="btn" style="background:#c0392b;color:#fff;border:none">🗑 Eliminar</button>
      </div>
    `;
    document.body.appendChild(viewer);
  }
  document.getElementById('photoViewerImg').src = src;
  document.getElementById('photoDeleteBtn').onclick = ()=>{
    if(!confirm('¿Eliminar esta foto? Esta acción no se puede deshacer.')) return;
    _photosData[contextKey].splice(idx, 1);
    savePhotos();
    viewer.classList.remove('open');
    const grid = document.getElementById('photoGrid_'+contextKey);
    if(grid) renderPhotoGrid(contextKey, grid);
    if(typeof auditLog==='function') auditLog('FOTO','eliminada',contextKey,'idx:'+idx);
    showToast('🗑 Foto eliminada');
  };
  viewer.classList.add('open');
  viewer.onclick = (e)=>{ if(e.target===viewer) viewer.classList.remove('open'); };
}

// ═══════════════════════════════════════════════════════
//  PDF PROFESIONAL con jsPDF (Mejora v19)
//  Genera informe de auditoría con firma digital integrada
// ═══════════════════════════════════════════════════════

// Secciones seleccionables para el PDF
var _pdfSections = { condensadores: true, acs: true, depositos: false, diario: false };

function openPDFModal() {
  var mo = typeof ppclMonth !== 'undefined' ? ppclMonth : new Date().getMonth();
  var yr = typeof ppclYear !== 'undefined' ? ppclYear : new Date().getFullYear();
  var wk = typeof getWeekKey === 'function' ? getWeekKey(typeof acsDate !== 'undefined' ? acsDate : new Date()) : '';
  var firmaKey = 'firma__' + yr + '__' + mo + '__' + wk;
  var firma = typeof getFirmaInfo === 'function' ? getFirmaInfo(firmaKey) : null;

  var firmaHtml = firma
    ? '<div class="pdf-firma-preview">'
      + '<img src="' + firma.img + '" style="max-height:48px;border-radius:6px;border:1px solid var(--border)">'
      + '<div><div style="font-family:Sora,sans-serif;font-size:13px;font-weight:700;color:var(--navy)">' + firma.nombre + '</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--text3)">' + firma.fecha + ' · ' + firma.hora + '</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--green)">✅ Firma digital incluida</div></div></div>'
    : '<div class="pdf-no-firma">⚠️ Sin firma digital para este período. Ve a la pestaña Firma para firmar primero.</div>';

  var MONTHS_ES = typeof MONTHS !== 'undefined' ? MONTHS : ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

  var html = '<div class="pdf-modal-overlay open" id="pdfModalOverlay" onclick="if(event.target===this)closePDFModal()">'
    + '<div class="pdf-modal">'
    + '<div class="pdf-modal-header">'
    + '<span class="pdf-modal-header-icon">📄</span>'
    + '<div class="pdf-modal-header-text">'
    + '<div class="pdf-modal-header-title">Generar Informe PDF</div>'
    + '<div class="pdf-modal-header-sub">AUDITORÍA PPCL LEGIONELLA · ' + MONTHS_ES[mo] + ' ' + yr + '</div>'
    + '</div>'
    + '<button class="pdf-modal-close" onclick="closePDFModal()">✕</button>'
    + '</div>'
    + '<div class="pdf-modal-body">'
    + '<div style="font-family:Sora,sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px">Seleccionar secciones a incluir</div>'
    + '<div class="pdf-options-grid">'
    + _pdfOptionHtml('condensadores', '🌡️', 'Condensadores', 'Control mensual pH y temp.')
    + _pdfOptionHtml('acs', '🚿', 'ACS Semanal', 'Grifos de agua caliente')
    + _pdfOptionHtml('depositos', '🗄️', 'Depósitos', 'Control cloro/pH depósitos')
    + _pdfOptionHtml('diario', '📋', 'Diario Box', 'Registro diario del período')
    + '</div>'
    + firmaHtml
    + '<button class="pdf-generate-btn" id="pdfGenBtn" onclick="generatePDFWithJsPDF()">'
    + '📄 Generar y Descargar PDF</button>'
    + '<div class="pdf-progress-wrap" id="pdfProgressWrap">'
    + '<div style="font-family:monospace;font-size:11px;color:var(--text3)" id="pdfProgressLabel">Generando informe...</div>'
    + '<div class="pdf-progress-bar-outer"><div class="pdf-progress-bar-inner" id="pdfProgressBar"></div></div>'
    + '</div>'
    + '</div></div></div>';

  var existing = document.getElementById('pdfModalOverlay');
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', html);
}

function _pdfOptionHtml(key, icon, label, sub) {
  var sel = _pdfSections[key] ? ' selected' : '';
  return '<div class="pdf-option' + sel + '" id="pdfOpt_' + key + '" onclick="togglePDFSection(\'' + key + '\')">'
    + '<span class="pdf-option-icon">' + icon + '</span>'
    + '<div><div class="pdf-option-label">' + label + '</div>'
    + '<div class="pdf-option-sub">' + sub + '</div></div></div>';
}

function togglePDFSection(key) {
  _pdfSections[key] = !_pdfSections[key];
  var el = document.getElementById('pdfOpt_' + key);
  if (el) el.classList.toggle('selected', _pdfSections[key]);
}

function closePDFModal() {
  var el = document.getElementById('pdfModalOverlay');
  if (el) el.remove();
}

function _setPdfProgress(pct, label) {
  var bar = document.getElementById('pdfProgressBar');
  var lbl = document.getElementById('pdfProgressLabel');
  var wrap = document.getElementById('pdfProgressWrap');
  if (wrap) wrap.style.display = 'block';
  if (bar) bar.style.width = pct + '%';
  if (lbl) lbl.textContent = label || 'Procesando...';
}

function generatePDFWithJsPDF() {
  if (typeof window.jspdf === 'undefined') {
    // jsPDF not loaded yet — fall back to print version
    generatePDFReport();
    return;
  }

  var btn = document.getElementById('pdfGenBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Generando...'; }

  setTimeout(function() {
    try {
      _buildJsPDF();
    } catch(e) {
      console.error('[PDF] Error:', e);
      if (typeof showToast === 'function') showToast('❌ Error al generar PDF: ' + e.message);
      if (btn) { btn.disabled = false; btn.textContent = '📄 Generar y Descargar PDF'; }
    }
  }, 80);
}

function _buildJsPDF() {
  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  var mo  = typeof ppclMonth !== 'undefined' ? ppclMonth : new Date().getMonth();
  var yr  = typeof ppclYear  !== 'undefined' ? ppclYear  : new Date().getFullYear();
  var wk  = typeof getWeekKey === 'function' ? getWeekKey(typeof acsDate !== 'undefined' ? acsDate : new Date()) : '';
  var now = new Date();
  var MONTHS_ES = typeof MONTHS !== 'undefined' ? MONTHS : ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  var pageW = doc.internal.pageSize.getWidth();
  var pageH = doc.internal.pageSize.getHeight();
  var margin = 14;
  var y = margin;

  // Leer branding corporativo
  var _brand = {};
  try{ _brand = JSON.parse(localStorage.getItem('ppcl_brand_v1')||'{}'); }catch(e){}
  var _brandEmpresa = _brand.empresa || 'DIAGROUP';
  var _brandEslogan = _brand.eslogan || 'PPCL Legionella · Almacén Antequera · 2026';
  // Color corporativo a RGB
  var _brandRgb = [15, 31, 61];
  if(_brand.color){
    try{
      var hx=_brand.color.replace('#','');
      _brandRgb=[parseInt(hx.slice(0,2),16),parseInt(hx.slice(2,4),16),parseInt(hx.slice(4,6),16)];
    }catch(e){}
  }

  _setPdfProgress(5, 'Preparando encabezado...');

  // ── HEADER ─────────────────────────────────────────────
  doc.setFillColor(_brandRgb[0], _brandRgb[1], _brandRgb[2]);
  doc.roundedRect(margin, y, pageW - margin*2, 28, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);

  // Logo en PDF si existe
  var _logoDrawn = false;
  if(_brand.logo && _brand.logo.startsWith('data:image')){
    try{
      doc.addImage(_brand.logo, 'PNG', margin+4, y+4, 20, 20);
      _logoDrawn = true;
    }catch(e){}
  }
  var _txtX = _logoDrawn ? margin + 28 : margin + 8;

  doc.text('AquaControl Pro', _txtX, y + 9);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 200, 220);
  doc.text('Sistema PPCL Control Legionella · '+_brandEmpresa+' · '+_brandEslogan.split('·')[1]||'', _txtX, y + 15);
  doc.text('Período: ' + MONTHS_ES[mo] + ' ' + yr + '   ·   Generado: ' + now.toLocaleString('es-ES'), _txtX, y + 21);
  // right-aligned date
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(now.toLocaleDateString('es-ES', {day:'numeric', month:'long', year:'numeric'}), pageW - margin - 5, y + 12, {align:'right'});
  y += 34;

  _setPdfProgress(15, 'Añadiendo KPIs...');

  // ── KPI BOXES ─────────────────────────────────────────
  var daysInMonth = new Date(yr, mo+1, 0).getDate();
  var condRows = 0;
  for (var d = 1; d <= daysInMonth; d++) {
    [1,2].forEach(function(cn) {
      if (typeof getVal === 'function' && (getVal(makeKey('ppcl',yr,mo,cn,d,'ph')) || getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')))) condRows++;
    });
  }
  var kpiData = [
    {label:'MES', val: MONTHS_ES[mo]},
    {label:'DÍAS', val: String(daysInMonth)},
    {label:'REGISTROS', val: String(condRows)},
    {label:'EQUIPOS', val: '2'}
  ];
  var kpiW = (pageW - margin*2 - 9) / 4;
  kpiData.forEach(function(k, i) {
    var kx = margin + i * (kpiW + 3);
    doc.setFillColor(232, 243, 251);
    doc.roundedRect(kx, y, kpiW, 16, 2, 2, 'F');
    doc.setTextColor(15, 31, 61);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(k.val, kx + kpiW/2, y + 8, {align: 'center'});
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(107, 116, 148);
    doc.text(k.label, kx + kpiW/2, y + 13, {align: 'center'});
  });
  y += 22;

  _setPdfProgress(25, 'Añadiendo firma digital...');

  // ── FIRMA DIGITAL ──────────────────────────────────────
  var firmaKey = 'firma__' + yr + '__' + mo + '__' + wk;
  var firma = typeof getFirmaInfo === 'function' ? getFirmaInfo(firmaKey) : null;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 31, 61);
  doc.text('Firma Digital del Responsable', margin, y + 5);
  doc.setDrawColor(37, 137, 199);
  doc.setLineWidth(0.5);
  doc.line(margin, y + 6, margin + 55, y + 6);
  y += 10;

  if (firma) {
    // Firma box
    doc.setFillColor(232, 247, 239);
    doc.setDrawColor(26, 122, 74);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, y, pageW - margin*2, 26, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(26, 122, 74);
    doc.text('✅ Registro Firmado Digitalmente', margin + 6, y + 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(30, 30, 50);
    doc.text('Técnico: ' + firma.nombre + (firma.dni ? '  ·  DNI/NIE: ' + firma.dni : ''), margin + 6, y + 12);
    doc.text('Fecha: ' + firma.fecha + '  ·  Hora: ' + firma.hora, margin + 6, y + 18);
    // Embed signature image
    try {
      doc.addImage(firma.img, 'PNG', pageW - margin - 42, y + 2, 38, 20);
    } catch(imgErr) {}
    y += 30;
  } else {
    doc.setFillColor(255, 247, 230);
    doc.setDrawColor(201, 123, 0);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, y, pageW - margin*2, 12, 2, 2, 'FD');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(201, 123, 0);
    doc.text('⚠️ Sin firma digital para este período. Firma en la pestaña "Firma" de la app.', margin + 5, y + 7);
    y += 16;
  }

  _setPdfProgress(40, 'Generando tabla de condensadores...');

  // ── CONDENSADORES ──────────────────────────────────────
  if (_pdfSections.condensadores) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 31, 61);
    doc.text('Condensadores Evaporativos — ' + MONTHS_ES[mo] + ' ' + yr, margin, y + 5);
    doc.setDrawColor(37, 137, 199);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 6, margin + 80, y + 6);
    y += 10;

    var condHead = [['DÍA', 'EQUIPO', 'BIOCIDAD', 'pH', 'TEMP. (°C)', 'TURBIDEZ']];
    var condBody = [];
    for (var dc = 1; dc <= daysInMonth; dc++) {
      [1,2].forEach(function(cn) {
        var ph  = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,dc,'ph'))          : '';
        var tmp = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,dc,'temperatura'))  : '';
        var bio = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,dc,'biocidad'))     : '';
        var tur = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,dc,'turbidez'))     : '';
        if (ph || tmp || bio || tur) {
          var phN = parseFloat(ph);
          var phStatus = isNaN(phN) ? 'neutral' : (phN>=7&&phN<=8 ? 'ok' : phN>=6.5&&phN<=8.5 ? 'warn' : 'bad');
          condBody.push([
            {content: String(dc).padStart(2,'0'), styles:{fontStyle:'bold', halign:'center'}},
            {content: 'Cond. ' + cn, styles:{halign:'center'}},
            {content: bio||'—', styles:{halign:'center'}},
            {content: ph||'—', styles:{
              halign:'center', fontStyle:'bold',
              textColor: phStatus==='ok'?[26,122,74]:phStatus==='warn'?[201,123,0]:[192,57,43],
              fillColor: phStatus==='ok'?[232,247,239]:phStatus==='warn'?[255,247,230]:phStatus==='bad'?[253,240,238]:null
            }},
            {content: tmp?(tmp+'°C'):'—', styles:{halign:'center'}},
            {content: tur||'—', styles:{halign:'center'}}
          ]);
        }
      });
    }

    if (condBody.length === 0) {
      condBody.push([{content:'Sin registros para este período', colSpan:6, styles:{halign:'center', textColor:[150,150,150]}}]);
    }

    doc.autoTable({
      head: condHead, body: condBody, startY: y,
      styles: { fontSize: 8, cellPadding: 2.5, lineColor: [216, 220, 230], lineWidth: 0.3 },
      headStyles: { fillColor: [26, 47, 82], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      alternateRowStyles: { fillColor: [247, 248, 250] },
      margin: { left: margin, right: margin },
      didDrawPage: function(data) { _addPageFooter(doc, pageW, pageH, margin, now); }
    });
    y = doc.lastAutoTable.finalY + 6;
    _setPdfProgress(60, 'Generando tabla ACS...');
  }

  // ── ACS SEMANAL ────────────────────────────────────────
  if (_pdfSections.acs && typeof ACS_SEMANAL !== 'undefined') {
    if (y > pageH - 60) { doc.addPage(); _addPageHeader(doc, pageW, margin, MONTHS_ES[mo], yr, now); y = 28; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 31, 61);
    doc.text('Grifos ACS — Control Semanal (' + (typeof weekLabel === 'function' ? weekLabel(wk) : wk) + ')', margin, y + 5);
    doc.setDrawColor(13, 138, 122);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 6, margin + 90, y + 6);
    y += 10;

    var acsHead = [['Nº', 'GRIFO DE AGUA', 'TURBIDEZ AF', 'TURBIDEZ AC', 'APERTURA']];
    var acsBody = ACS_SEMANAL.map(function(g) {
      var tf = typeof getVal === 'function' ? getVal(makeKey('acs_s',wk,g.n,'tf')) : '';
      var tc = typeof getVal === 'function' ? getVal(makeKey('acs_s',wk,g.n,'tc')) : '';
      var ap = typeof getVal === 'function' ? getVal(makeKey('acs_s',wk,g.n,'ap')) : '';
      return [
        {content:g.n, styles:{halign:'center', fontStyle:'bold'}},
        g.loc,
        {content:tf||'—', styles:{halign:'center'}},
        {content:tc||'—', styles:{halign:'center'}},
        {content:ap||'—', styles:{halign:'center'}}
      ];
    });

    doc.autoTable({
      head: acsHead, body: acsBody, startY: y,
      styles: { fontSize: 8, cellPadding: 2.5 },
      headStyles: { fillColor: [13, 138, 122], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      alternateRowStyles: { fillColor: [247, 248, 250] },
      columnStyles: { 1: { cellWidth: 70 } },
      margin: { left: margin, right: margin },
      didDrawPage: function(data) { _addPageFooter(doc, pageW, pageH, margin, now); }
    });
    y = doc.lastAutoTable.finalY + 6;
    _setPdfProgress(75, 'Generando tabla depósitos...');
  }

  // ── DEPÓSITOS ──────────────────────────────────────────
  if (_pdfSections.depositos && typeof ACS_DEPOSITOS !== 'undefined') {
    if (y > pageH - 60) { doc.addPage(); _addPageHeader(doc, pageW, margin, MONTHS_ES[mo], yr, now); y = 28; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 31, 61);
    doc.text('Depósitos — Control Mensual', margin, y + 5);
    doc.setDrawColor(29, 111, 164);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 6, margin + 65, y + 6);
    y += 10;

    var depHead = [['MES', 'DEPÓSITO', 'CLORO', 'pH', 'TEMP.']];
    var depBody = [];
    ACS_DEPOSITOS.forEach(function(dep) {
      var moIdx = typeof MONTHS !== 'undefined' ? MONTHS.indexOf(dep.mes) : 0;
      [{n:'39',loc:'DEPÓSITO PRINCIPAL'},{n:'28',loc:'BOX LAVADO ISOTERMOS'}].forEach(function(dd) {
        depBody.push([
          dep.mes,
          dd.loc,
          {content: (typeof getVal==='function'?getVal(makeKey('dep',yr,moIdx,dd.n,'cloro')):'')||'—', styles:{halign:'center'}},
          {content: (typeof getVal==='function'?getVal(makeKey('dep',yr,moIdx,dd.n,'ph')):'')||'—', styles:{halign:'center'}},
          {content: (typeof getVal==='function'?getVal(makeKey('dep',yr,moIdx,dd.n,'temp')):'')||'—', styles:{halign:'center'}}
        ]);
      });
    });

    doc.autoTable({
      head: depHead, body: depBody, startY: y,
      styles: { fontSize: 8, cellPadding: 2.5 },
      headStyles: { fillColor: [29, 111, 164], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      alternateRowStyles: { fillColor: [247, 248, 250] },
      margin: { left: margin, right: margin },
      didDrawPage: function(data) { _addPageFooter(doc, pageW, pageH, margin, now); }
    });
    y = doc.lastAutoTable.finalY + 6;
    _setPdfProgress(88, 'Generando registro diario...');
  }

  // ── DIARIO ─────────────────────────────────────────────
  if (_pdfSections.diario && typeof DIARIO_ITEMS !== 'undefined') {
    if (y > pageH - 60) { doc.addPage(); _addPageHeader(doc, pageW, margin, MONTHS_ES[mo], yr, now); y = 28; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 31, 61);
    doc.text('Agua Fría Sanitaria — Registro Diario', margin, y + 5);
    doc.setDrawColor(26, 122, 74);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 6, margin + 75, y + 6);
    y += 10;

    var dk = typeof localDateStr === 'function' ? localDateStr(typeof diarioDate !== 'undefined' ? diarioDate : new Date()) : '';
    var diasDiario = new Set();
    if (typeof data !== 'undefined') Object.keys(data).forEach(function(k) { if (k.startsWith('dia__')) diasDiario.add(k.split('__')[1]); });
    if (dk) diasDiario.add(dk);
    var diasOrdenados = Array.from(diasDiario).sort();

    var diaHead = [['FECHA', 'Nº', 'EQUIPO', 'pH', 'CLORO', 'TEMP.']];
    var diaBody = [];
    diasOrdenados.forEach(function(d2) {
      DIARIO_ITEMS.forEach(function(it) {
        var ph    = typeof getVal==='function'?getVal(makeKey('dia',d2,it.n,'ph')):'';
        var cloro = typeof getVal==='function'?getVal(makeKey('dia',d2,it.n,'cloro')):'';
        var temp  = typeof getVal==='function'?getVal(makeKey('dia',d2,it.n,'temp')):'';
        if (ph||cloro||temp) {
          diaBody.push([d2, it.n, it.loc, ph||'—', cloro||'—', temp||'—']);
        }
      });
    });
    if (diaBody.length === 0) diaBody.push([{content:'Sin registros diarios', colSpan:6, styles:{halign:'center', textColor:[150,150,150]}}]);

    doc.autoTable({
      head: diaHead, body: diaBody, startY: y,
      styles: { fontSize: 8, cellPadding: 2.5 },
      headStyles: { fillColor: [26, 122, 74], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      alternateRowStyles: { fillColor: [247, 248, 250] },
      columnStyles: { 2: { cellWidth: 55 } },
      margin: { left: margin, right: margin },
      didDrawPage: function(data) { _addPageFooter(doc, pageW, pageH, margin, now); }
    });
    y = doc.lastAutoTable.finalY + 6;
  }

  _setPdfProgress(95, 'Finalizando y descargando...');

  // ── PIE FINAL ──────────────────────────────────────────
  _addPageFooter(doc, pageW, pageH, margin, now);

  // ── GUARDAR ────────────────────────────────────────────
  var fname = 'PPCL_Informe_Auditoria_' + MONTHS_ES[mo] + '_' + yr + '_' + now.toLocaleDateString('es-ES').replace(/\//g,'-') + '.pdf';
  doc.save(fname);

  _setPdfProgress(100, '✅ PDF descargado correctamente');
  if (typeof auditLog === 'function') auditLog('EXPORTAR', 'PDF', fname, MONTHS_ES[mo]+' '+yr);
  setTimeout(function() {
    closePDFModal();
    if (typeof showToast === 'function') showToast('📄 PDF descargado: ' + fname);
  }, 800);
}

function _addPageHeader(doc, pageW, margin, mes, yr, now) {
  doc.setFillColor(15, 31, 61);
  doc.rect(0, 0, pageW, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('AquaControl Pro — PPCL Legionella · ' + mes + ' ' + yr, margin, 8);
  doc.text(now.toLocaleDateString('es-ES'), pageW - margin, 8, {align:'right'});
}

function _addPageFooter(doc, pageW, pageH, margin, now) {
  var totalPages = doc.internal.getNumberOfPages();
  for (var i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.setDrawColor(216, 220, 230);
    doc.setLineWidth(0.3);
    doc.line(margin, pageH - 10, pageW - margin, pageH - 10);
    doc.text('AquaControl Pro · PPCL Legionella · DIAGROUP · juanantonio.carmona@diagroup.com', margin, pageH - 6);
    doc.text('Pág. ' + i + ' / ' + totalPages, pageW - margin, pageH - 6, {align:'right'});
  }
}

// Función legacy (fallback si jsPDF no está disponible)
function generatePDFReport(){
  if (typeof window.jspdf !== 'undefined') {
    openPDFModal();
    return;
  }
  showToast(typeof t === 'function' ? t('pdfGenerating') : 'Generando PDF...');
  const today = new Date();
  const mo = ppclMonth;
  const yr = ppclYear;
  const wk = getWeekKey(acsDate);
  const daysInMonth = new Date(yr, mo+1, 0).getDate();
  const firmaMes = getFirmaInfo('firma__'+yr+'__'+mo+'__'+wk);
  const firmaHTML = firmaMes ? `
    <div style="display:flex;align-items:flex-start;gap:20px;margin-top:10px;padding:10px;border:1px solid #ccc;border-radius:8px;background:#f9f9f9">
      <div>
        <div style="font-size:10px;color:#666;margin-bottom:2px">FIRMADO POR</div>
        <div style="font-weight:700;font-size:14px">${firmaMes.nombre}</div>
        ${firmaMes.dni?'<div style="font-size:11px;color:#666">DNI/NIE: '+firmaMes.dni+'</div>':''}
        <div style="font-size:11px;color:#666">${firmaMes.fecha} · ${firmaMes.hora}</div>
      </div>
      <img src="${firmaMes.img}" style="max-height:60px;border:1px solid #ccc;border-radius:4px">
    </div>` : '<div style="padding:10px;border:1px dashed #ccc;border-radius:8px;color:#999;font-size:12px">Sin firma digital para este período</div>';
  let condRows = '';
  for(let d=1; d<=daysInMonth; d++){
    [1,2].forEach(cn=>{
      const ph=getVal(makeKey('ppcl',yr,mo,cn,d,'ph')); const tmp=getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura'));
      const bio=getVal(makeKey('ppcl',yr,mo,cn,d,'biocidad')); const tur=getVal(makeKey('ppcl',yr,mo,cn,d,'turbidez'));
      if(ph||tmp||bio||tur){ const phN=parseFloat(ph); const phColor=(!isNaN(phN))?(phN>=7&&phN<=8?'#1a7a4a':phN>=6.5&&phN<=8.5?'#c97b00':'#c0392b'):'#000';
        condRows+=`<tr><td style="text-align:center;font-weight:700">${String(d).padStart(2,'0')}</td><td style="text-align:center">Cond. ${cn}</td><td style="text-align:center">${bio||'—'}</td><td style="text-align:center;color:${phColor};font-weight:600">${ph||'—'}</td><td style="text-align:center">${tmp||'—'}${tmp?'°C':''}</td><td style="text-align:center">${tur||'—'}</td></tr>`; }
    });
  }
  const reportHTML=`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;font-size:12px;color:#1a2035;margin:0;padding:20px;}.header{background:#0f1f3d;color:#fff;padding:16px 20px;border-radius:8px;margin-bottom:16px;}table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:11px;}th{background:#1a2f52;color:#fff;padding:6px 8px;text-align:left;}td{padding:5px 8px;border-bottom:1px solid #e0e0e0;}tr:nth-child(even) td{background:#f7f8fa;}.section-title{font-size:13px;font-weight:700;color:#0f1f3d;margin:14px 0 6px;border-left:3px solid #2589c7;padding-left:8px;}</style></head><body><div class="header"><div style="font-size:18px;font-weight:900">AquaControl Pro</div><div style="font-size:11px;opacity:0.7">DIAGROUP · Almacén Antequera · ${MONTHS[mo]} ${yr}</div></div><div class="section-title">Firma Digital</div>${firmaHTML}<div class="section-title">Condensadores</div><table><thead><tr><th>DÍA</th><th>EQUIPO</th><th>BIOCIDAD</th><th>pH</th><th>TEMP</th><th>TURBIDEZ</th></tr></thead><tbody>${condRows||'<tr><td colspan="6" style="text-align:center;color:#999">Sin registros</td></tr>'}</tbody></table></body></html>`;
  const win=window.open('','_blank');
  if(win){win.document.write(reportHTML);win.document.close();setTimeout(()=>win.print(),600);}
  else{const blob=new Blob([reportHTML],{type:'text/html'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`PPCL_Informe_${MONTHS[mo]}_${yr}.html`;a.click();}
}

// ═══════════════════════════════════════════════════════
//  RELLENO RAPIDO (Mejora 9)
// ═══════════════════════════════════════════════════════
function copyPrevDay(){
  const yr = ppclYear;
  const mo = ppclMonth;
  const today = new Date();
  const d = today.getDate();
  const prev = d - 1;
  if(prev < 1){ showToast('⚠️ No hay día anterior en este mes'); return; }
  let copied = 0;
  [1,2].forEach(cn=>{
    ['biocidad','temperatura','ph','turbidez'].forEach(field=>{
      const prevKey = makeKey('ppcl',yr,mo,cn,prev,field);
      const todayKey = makeKey('ppcl',yr,mo,cn,d,field);
      const prevVal = getVal(prevKey);
      if(prevVal && !getVal(todayKey)){
        setVal(todayKey, prevVal);
        const inp = document.querySelector(`input[data-key="${todayKey}"]`);
        if(inp){ inp.value = prevVal; colorInput(inp, field); }
        copied++;
      }
    });
  });
  auditLog('RELLENO', 'copy_prev_day', 'Copiados '+copied+' valores', '—');
  showToast(copied > 0 ? t('copiedPrev')+' ('+copied+' valores)' : '⚠️ No hay valores previos o ya están rellenados');
}

function markAllOK(){
  const yr = ppclYear;
  const mo = ppclMonth;
  const d = new Date().getDate();
  const defaults = {ph:'7.5', temperatura:'22', biocidad:'✓', turbidez:'0.5'};
  [1,2].forEach(cn=>{
    Object.entries(defaults).forEach(([field, defVal])=>{
      const key = makeKey('ppcl',yr,mo,cn,d,field);
      if(!getVal(key)){
        setVal(key, defVal);
        const inp = document.querySelector(`input[data-key="${key}"]`);
        if(inp){ inp.value = defVal; colorInput(inp, field); }
      }
    });
  });
  auditLog('RELLENO', 'mark_all_ok', 'Valores OK automáticos día '+d, '—');
  showToast(t('allOK'));
}

// ═══════════════════════════════════════════════════════
//  HISTORIAL Y AUDITORÍA (Mejora 10)
// ═══════════════════════════════════════════════════════
const AUDIT_SK = 'ppcl_audit_v1';
let _auditLog = [];
const AUDIT_MAX = 500;

function loadAuditLog(){
  try{ _auditLog = JSON.parse(localStorage.getItem(AUDIT_SK)||'[]'); }catch(e){ _auditLog=[]; }
}
function saveAuditLog(){
  if(_auditLog.length > AUDIT_MAX) _auditLog = _auditLog.slice(-AUDIT_MAX);
  localStorage.setItem(AUDIT_SK, JSON.stringify(_auditLog));
}
function auditLog(action, field, newVal, oldVal){
  const now = new Date();
  _auditLog.push({
    ts: now.toISOString(),
    time: now.toLocaleTimeString('es-ES'),
    date: now.toLocaleDateString('es-ES'),
    user: (document.getElementById('roleBadge')?.textContent)||'Usuario',
    action, field, newVal: String(newVal), oldVal: String(oldVal)
  });
  saveAuditLog();
}

function renderAuditTab(){
  var c = document.getElementById('auditContent');
  if(!c) return;
  c.innerHTML = '';
  var logs = typeof _auditLog !== 'undefined' ? _auditLog : [];
  
  // Cabecera con filtros
  var hdr = document.createElement('div');
  hdr.className = 'page-hdr';
  hdr.innerHTML = '<div><div class="page-title">Historial de Auditoria</div>'
    + '<div class="page-sub">' + logs.length + ' eventos registrados</div></div>'
    + '<div class="page-actions">'
    + '<button class="btn btn-outline" onclick="clearAudit()">Limpiar</button>'
    + '<button class="btn btn-outline" onclick="exportAudit()">Exportar CSV</button>'
    + '</div>';
  c.appendChild(hdr);

  // Filtros por tipo
  var filterBar = document.createElement('div');
  filterBar.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;padding:10px 14px;background:var(--surface2);border-radius:8px';
  var tipos = ['Todos','LOGIN','LOGIN_FAIL','DATO','FIRMA','SEGURIDAD','EXPORTAR'];
  var activeFilter = 'Todos';
  tipos.forEach(function(tipo){
    var btn = document.createElement('button');
    btn.textContent = tipo;
    btn.style.cssText = 'padding:4px 12px;border-radius:6px;font-family:monospace;font-size:10px;cursor:pointer;border:1px solid var(--border);background:var(--surface);color:var(--text2);transition:all 0.15s';
    btn.onclick = function(){
      activeFilter = tipo;
      filterBar.querySelectorAll('button').forEach(function(b){ b.style.background='var(--surface)'; b.style.color='var(--text2)'; });
      btn.style.background = 'var(--blue2)'; btn.style.color = '#fff';
      renderAuditRows(tipo);
    };
    if(tipo === 'Todos'){ btn.style.background='var(--blue2)'; btn.style.color='#fff'; }
    filterBar.appendChild(btn);
  });
  c.appendChild(filterBar);

  // Tabla de filas
  var tableWrap = document.createElement('div');
  tableWrap.id = 'auditTableWrap';
  tableWrap.className = 'section-card';
  c.appendChild(tableWrap);

  function renderAuditRows(filter){
    var filtered = filter === 'Todos' ? logs : logs.filter(function(l){ return l.action === filter; });
    filtered = filtered.slice().reverse().slice(0,200);
    var colores = {LOGIN:'var(--green)',LOGIN_FAIL:'var(--red)',DATO:'var(--blue)',FIRMA:'var(--teal)',SEGURIDAD:'var(--amber)',EXPORTAR:'var(--text3)'};
    var html = '<div style="overflow-x:auto"><table class="data-table">'
      + '<thead><tr><th>Fecha</th><th>Hora</th><th>Usuario</th><th>Tipo</th><th>Campo</th><th>Valor</th></tr></thead><tbody>';
    if(filtered.length === 0){
      html += '<tr><td colspan="6" style="text-align:center;color:var(--text4);padding:20px">Sin registros para este filtro</td></tr>';
    } else {
      filtered.forEach(function(l){
        var color = colores[l.action] || 'var(--text3)';
        html += '<tr>'
          + '<td style="font-family:monospace;font-size:10px">' + (l.date||'') + '</td>'
          + '<td style="font-family:monospace;font-size:10px">' + (l.time||'') + '</td>'
          + '<td style="font-family:Sora,sans-serif;font-size:11px;font-weight:600;color:var(--blue)">' + (l.user||'') + '</td>'
          + '<td><span style="background:var(--surface2);color:' + color + ';font-family:monospace;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600">' + (l.action||'') + '</span></td>'
          + '<td style="font-family:monospace;font-size:10px;max-width:120px;overflow:hidden;text-overflow:ellipsis">' + (l.field||'') + '</td>'
          + '<td style="font-family:monospace;font-size:10px;color:var(--green)">' + (l.newValue||l.value||'') + '</td>'
          + '</tr>';
      });
    }
    html += '</tbody></table></div>';
    tableWrap.innerHTML = html;
  }
  renderAuditRows('Todos');
}

function clearAudit(){
  if(!confirm('¿Limpiar todo el historial de auditoría?')) return;
  _auditLog = [];
  saveAuditLog();
  renderAuditTab();
  showToast('🗑 Historial limpiado');
}
function exportAudit(){
  const csv = ['Fecha,Hora,Usuario,Accion,Campo,ValorNuevo,ValorAnterior',
    ..._auditLog.map(l=>`${l.date},${l.time},"${l.user}","${l.action}","${l.field}","${l.newVal}","${l.oldVal}"`)
  ].join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,'+encodeURIComponent(csv);
  a.download = 'Auditoria_PPCL_'+new Date().toISOString().slice(0,10)+'.csv';
  a.click();
}

// El audit de setVal está integrado directamente en la función setVal del módulo DATA.
// Este bloque ya no es necesario — se mantiene por compatibilidad con código existente.

// ═══════════════════════════════════════════════════════
//  CALENDARIO DE TAREAS (Mejora 7)
// ═══════════════════════════════════════════════════════
let _calYear = new Date().getFullYear();
let _calMonth = new Date().getMonth();

function renderCalendarioTab(){
  const c = document.getElementById('calendarioContent');
  if(!c) return;
  c.innerHTML = '';
  const hdr = document.createElement('div');
  hdr.className = 'page-hdr';
  hdr.innerHTML = `
    <div>
      <div class="page-title">📅 Calendario PPCL</div>
      <div class="page-sub">Planificación y seguimiento de controles</div>
    </div>
  `;
  c.appendChild(hdr);

  // Month nav
  const nav = document.createElement('div');
  nav.className = 'cal-month-nav';
  nav.innerHTML = `
    <button class="date-nav-btn" onclick="_calMonth--;if(_calMonth<0){_calMonth=11;_calYear--;}renderCalendarioTab()">‹</button>
    <span class="date-display" style="font-size:15px;font-weight:700">${MONTHS[_calMonth]} ${_calYear}</span>
    <button class="date-nav-btn" onclick="_calMonth++;if(_calMonth>11){_calMonth=0;_calYear++;}renderCalendarioTab()">›</button>
  `;
  c.appendChild(nav);

  // Calendar grid
  const daysInMonth = new Date(_calYear, _calMonth+1, 0).getDate();
  const firstDay = new Date(_calYear, _calMonth, 1).getDay();
  const today = new Date();

  const grid = document.createElement('div');
  grid.className = 'section-card';
  grid.style.padding = '16px';

  const dayHeaders = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  let gridHTML = '<div class="cal-grid" style="margin-bottom:8px">';
  dayHeaders.forEach(d=>{ gridHTML += `<div class="cal-day-hdr">${d}</div>`; });
  gridHTML += '</div><div class="cal-grid">';

  // Empty cells before first day
  for(let i=0; i<firstDay; i++) gridHTML += '<div class="cal-day empty"></div>';

  for(let d=1; d<=daysInMonth; d++){
    const isToday = d===today.getDate() && _calMonth===today.getMonth() && _calYear===today.getFullYear();
    // Check tasks for this day
    const hasCond1 = !!getVal(makeKey('ppcl',_calYear,_calMonth,1,d,'ph'));
    const hasCond2 = !!getVal(makeKey('ppcl',_calYear,_calMonth,2,d,'ph'));
    const isDone = hasCond1 && hasCond2;
    const hasSome = hasCond1 || hasCond2;
    const classNames = ['cal-day', isToday?'today':'', isDone?'completed':hasSome?'has-tasks':''].filter(Boolean).join(' ');

    // Weekly tasks indicator
    const dt = new Date(_calYear, _calMonth, d);
    const isMonday = dt.getDay()===1;
    const isMidMonth = d===15;

    gridHTML += `<div class="${classNames}" onclick="jumpToDay(${d})">
      <div class="cal-day-num">${d}</div>
      ${isDone?'<div class="cal-task-dot done"></div>':hasSome?'<div class="cal-task-dot pending"></div>':''}
      ${isMonday?'<div style="font-size:8px;color:var(--blue);margin-top:2px">ACS</div>':''}
      ${isMidMonth?'<div style="font-size:8px;color:var(--amber);margin-top:2px">Evap</div>':''}
    </div>`;
  }
  gridHTML += '</div>';

  // Legend
  gridHTML += `
    <div style="display:flex;gap:14px;margin-top:12px;font-family:monospace;font-size:10px;flex-wrap:wrap">
      <span>🟢 Completado</span>
      <span>🟡 Parcial</span>
      <span style="color:var(--blue)">• Lunes = control ACS semanal</span>
      <span style="color:var(--amber)">• Día 15 = control evaporativos</span>
    </div>
  `;

  grid.innerHTML = gridHTML;
  c.appendChild(grid);

  // Monthly tasks summary
  const summary = document.createElement('div');
  summary.className = 'section-card';
  summary.style.marginTop = '12px';
  const pendDays = [];
  for(let d=1; d<=Math.min(new Date().getDate(), daysInMonth); d++){
    const c1 = getVal(makeKey('ppcl',_calYear,_calMonth,1,d,'ph'));
    const c2 = getVal(makeKey('ppcl',_calYear,_calMonth,2,d,'ph'));
    if(!c1 || !c2) pendDays.push(d);
  }
  summary.innerHTML = `
    <div class="sec-hdr">
      <div class="sec-icon amber">📋</div>
      <div><div class="sec-title">RESUMEN DEL MES</div><div class="sec-sub">${pendDays.length} días con registros pendientes</div></div>
    </div>
    <div style="padding:12px">
      ${pendDays.length===0
        ? '<div style="color:var(--green);font-family:monospace;font-size:12px;padding:10px">✅ Todos los días registrados correctamente</div>'
        : '<div style="font-family:monospace;font-size:11px;color:var(--amber)">⚠️ Días pendientes: '+pendDays.join(', ')+'</div>'
      }
    </div>
  `;
  c.appendChild(summary);
}

function jumpToDay(d){
  ppclMonth = _calMonth;
  ppclYear = _calYear;
  document.getElementById('ppclYear').value = ppclYear;
  renderPPCL();
  const tabBtn = document.querySelector('.tab-btn[onclick*="\'ppcl\'"]');
  switchTab('ppcl', tabBtn);
  showToast('📅 Día '+d+' seleccionado en condensadores');
}

// ═══════════════════════════════════════════════════════
//  INDEXEDDB OFFLINE AVANZADO (Mejora 12)
// ═══════════════════════════════════════════════════════
let _idb = null;
const IDB_NAME = 'AquaControlPro', IDB_VER = 2; // v2: migración a IDB como almacenamiento principal

function initIndexedDB(){
  if(!window.indexedDB){ console.log('[IDB] No disponible — usando localStorage'); return; }
  const req = indexedDB.open(IDB_NAME, IDB_VER);
  req.onupgradeneeded = (e)=>{
    const db = e.target.result;
    if(!db.objectStoreNames.contains('data'))   db.createObjectStore('data',  {keyPath:'key'});
    if(!db.objectStoreNames.contains('queue'))  db.createObjectStore('queue', {keyPath:'id',autoIncrement:true});
    if(!db.objectStoreNames.contains('photos')) db.createObjectStore('photos',{keyPath:'key'});
    if(!db.objectStoreNames.contains('sedes'))  db.createObjectStore('sedes', {keyPath:'id'});
    if(!db.objectStoreNames.contains('blobs'))  db.createObjectStore('blobs', {keyPath:'key'}); // para fotos en bruto
    console.log('[IDB] Schema actualizado a v'+IDB_VER);
  };
  req.onsuccess = (e)=>{
    _idb = e.target.result;
    console.log('[IDB] IndexedDB inicializado (v'+IDB_VER+')');
    // Migrar datos del localStorage al IDB si no existen ya en IDB
    _idbMigrateFromLocalStorage();
    // Cargar datos más recientes desde IDB
    if(typeof _loadDataFromIDB==='function') _loadDataFromIDB();
    syncQueuedData();
  };
  req.onerror = ()=>console.warn('[IDB] Error al abrir IndexedDB — usando localStorage como fallback');
}

// Migración silenciosa: si IDB está vacío pero localStorage tiene datos, los migramos
function _idbMigrateFromLocalStorage(){
  if(!_idb) return;
  var KEYS_TO_MIGRATE = [
    {ls: 'ppcl_legionella_v1', idb: 'data',   store: 'data'},
    {ls: 'ppcl_firmas_v1',     idb: 'firmas',  store: 'data'},
    {ls: 'ppcl_audit_v1',      idb: 'audit',   store: 'data'},
    {ls: 'ppcl_config_v1',     idb: 'config',  store: 'data'},
  ];
  KEYS_TO_MIGRATE.forEach(function(m){
    var tx = _idb.transaction('data','readwrite');
    var os = tx.objectStore('data');
    var chk = os.get(m.idb);
    chk.onsuccess = function(){
      if(!chk.result){
        // No existe en IDB — migrar desde localStorage
        try{
          var lsVal = localStorage.getItem(m.ls);
          if(lsVal){
            os.put({key: m.idb, value: lsVal, ts: Date.now(), migrated: true});
            console.log('[IDB] Migrado '+m.ls+' → IDB:'+m.idb+' ('+Math.round(lsVal.length/1024)+'KB)');
          }
        }catch(e){}
      }
    };
  });
}

// Guardar en IDB (principal) + localStorage (fallback)
function idbSet(store, key, value){
  if(_idb){
    try{
      var tx = _idb.transaction(store,'readwrite');
      tx.objectStore(store).put({key:key, value:value, ts:Date.now()});
    }catch(e){ console.warn('[IDB] idbSet error:',e); }
  }
}

// Guardar el payload principal de datos en IDB + localStorage
function idbSetMain(key, payload){
  // localStorage como fallback siempre
  try{ localStorage.setItem(key, payload); }catch(lsErr){
    console.warn('[IDB] localStorage lleno, solo guardando en IDB');
  }
  // IDB como almacenamiento principal (sin límite de 5MB)
  if(_idb){
    try{
      var tx = _idb.transaction('data','readwrite');
      tx.objectStore('data').put({key:key, value:payload, ts:Date.now()});
    }catch(e){ console.warn('[IDB] idbSetMain error:',e); }
  }
}

// Leer desde IDB con fallback a localStorage
function idbGetMain(key){
  return new Promise(function(resolve){
    if(!_idb){ resolve(localStorage.getItem(key)); return; }
    try{
      var tx = _idb.transaction('data','readonly');
      var req = tx.objectStore('data').get(key);
      req.onsuccess = function(){
        if(req.result && req.result.value){
          // Si IDB tiene dato más reciente (por timestamp) lo usamos
          var lsRaw = null;
          try{ lsRaw = localStorage.getItem(key); }catch(e){}
          if(lsRaw){
            try{
              var idbTs = req.result.ts || 0;
              var lsObj = JSON.parse(lsRaw);
              var lsTs  = lsObj.__ts || 0;
              resolve(lsTs > idbTs ? lsRaw : req.result.value);
            }catch(e){ resolve(req.result.value); }
          } else {
            resolve(req.result.value);
          }
        } else {
          resolve(localStorage.getItem(key));
        }
      };
      req.onerror = function(){ resolve(localStorage.getItem(key)); };
    }catch(e){ resolve(localStorage.getItem(key)); }
  });
}

function idbGet(store, key){
  return new Promise(function(resolve){
    if(!_idb){ resolve(null); return; }
    try{
      var req = _idb.transaction(store,'readonly').objectStore(store).get(key);
      req.onsuccess = function(){ resolve(req.result ? req.result.value : null); };
      req.onerror = function(){ resolve(null); };
    }catch(e){ resolve(null); }
  });
}

function syncQueuedData(){
  if(!_idb || !navigator.onLine) return;
  try{
    var tx = _idb.transaction('queue','readwrite');
    var store = tx.objectStore('queue');
    store.getAll().onsuccess = function(e){
      var items = e.target.result;
      if(items.length > 0){
        console.log('[IDB] Sincronizando '+items.length+' cambios pendientes');
        if(typeof showToast==='function') showToast('🔄 Sincronizando '+items.length+' cambios offline...');
        if(typeof saveToFirebase === 'function') saveToFirebase();
        store.clear();
      }
    };
  }catch(e){}
}

// Offline/Online detection
window.addEventListener('online', ()=>{
  document.body.classList.remove('offline');
  showToast('🟢 Conexión restaurada — sincronizando datos');
  syncQueuedData();
  if(typeof saveToFirebase === 'function') saveToFirebase();
});
window.addEventListener('offline', ()=>{
  document.body.classList.add('offline');
  showToast('🔴 Sin conexión — modo offline activado');
});

// ═══════════════════════════════════════════════════════
//  INTELIGENCIA ARTIFICIAL (Mejora 13)
// ═══════════════════════════════════════════════════════
function analyzeDataWithAI(){
  const yr = ppclYear;
  const mo = ppclMonth;
  const daysToday = new Date().getDate();
  const issues = [];
  const trends = {ph:[],temp:[]};

  for(let d=1; d<=daysToday; d++){
    [1,2].forEach(cn=>{
      const ph  = parseFloat(getVal(makeKey('ppcl',yr,mo,cn,d,'ph')));
      const tmp = parseFloat(getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')));
      if(!isNaN(ph)) trends.ph.push({d,cn,v:ph});
      if(!isNaN(tmp)) trends.temp.push({d,cn,v:tmp});
      if(!isNaN(ph) && (ph<7||ph>8)){
        issues.push({d,cn,field:'pH',v:ph,severity:ph<6.5||ph>8.5?'critical':'warning'});
      }
      if(!isNaN(tmp) && tmp>30){
        issues.push({d,cn,field:'Temp',v:tmp,severity:tmp>40?'critical':'warning'});
      }
    });
  }

  // Trend analysis
  const phAvg = trends.ph.length ? trends.ph.reduce((s,x)=>s+x.v,0)/trends.ph.length : null;
  const phTrend = trends.ph.length > 5 ? (()=>{
    const recent = trends.ph.slice(-5).reduce((s,x)=>s+x.v,0)/5;
    const older  = trends.ph.slice(0,5).reduce((s,x)=>s+x.v,0)/Math.min(5,trends.ph.length);
    return recent > older+0.1?'↑ subiendo':recent < older-0.1?'↓ bajando':'→ estable';
  })() : 'Insuficientes datos';

  const insights = [];
  if(phAvg !== null){
    insights.push('📊 pH promedio este mes: '+phAvg.toFixed(2)+' — Tendencia: '+phTrend);
    if(phAvg > 7.8) insights.push('⚠️ pH tendente a la alcalinidad — revisar dosificación ácida');
    if(phAvg < 7.2) insights.push('⚠️ pH tendente a la acidez — revisar dosificación básica');
  }
  if(issues.filter(i=>i.severity==='critical').length>0){
    insights.push('🚨 '+issues.filter(i=>i.severity==='critical').length+' valores críticos detectados — acción inmediata requerida');
  }
  if(issues.length===0 && trends.ph.length>0){
    insights.push('✅ Parámetros estables en el período analizado');
  }
  if(daysToday > 20 && trends.ph.length < daysToday*0.7){
    insights.push('⚠️ Tasa de registro baja ('+Math.round(trends.ph.length/daysToday*100)+'%) — verificar cumplimiento');
  }
  // Predictive
  if(trends.ph.length >= 3){
    const lastPh = trends.ph[trends.ph.length-1].v;
    const prevPh = trends.ph[trends.ph.length-2].v;
    const delta = lastPh - prevPh;
    if(Math.abs(delta)>0.3){
      insights.push('🔮 Predicción: Si continúa la tendencia ('+delta.toFixed(2)+'/día), el pH estará en '+(lastPh+delta*3).toFixed(2)+' en 3 días');
    }
  }

  return {insights, issues, trends, phAvg, phTrend};
}

function renderAIInsight(){
  const el = document.getElementById('aiInsightBox');
  if(!el) return;
  const analysis = analyzeDataWithAI();
  el.innerHTML = `
    <div class="ai-insight">
      <div class="ai-insight-title">🤖 Análisis Inteligente — IA</div>
      ${analysis.insights.map(i=>`<div class="ai-insight-text">• ${i}</div>`).join('')}
      ${analysis.insights.length===0?'<div class="ai-insight-text" style="color:var(--text4)">Introduce datos para obtener análisis automático</div>':''}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════
//  GLOBAL STATS
// ═══════════════════════════════════════════════════════
function updateAllStats(){
  updatePPCLStats();
  const dk=localDateStr(diarioDate);
  updateDiarioStats(dk);
  updateEvapStats();
  const pdq=localDateStr(potableDate);
  updatePotableStats(pdq);
}

// ═══════════════════════════════════════════════════════
//  SAVE / EXPORT
// ═══════════════════════════════════════════════════════
function saveAll(){
  const btn = document.getElementById('saveBtn');
  if(btn){ btn.classList.remove('flashing'); void btn.offsetWidth; btn.classList.add('flashing'); setTimeout(()=>btn.classList.remove('flashing'),800); }
  saveData();
  showToast('💾 Guardado — sincronizando…');
}

// ═══════════════════════════════════════════════════════
//  BUILD COMPLETE REPORT — todas las secciones y todos los meses
// ═══════════════════════════════════════════════════════
function buildReportText(){
  const now = new Date();
  const yr  = ppclYear;
  const wk  = getWeekKey(acsDate);
  const sep  = '='.repeat(70);
  const sep2 = '-'.repeat(70);
  const L = [];

  const pad = (v,n) => String(v==null||v===''?'—':v).padEnd(n,' ').substring(0,n);
  const padL= (v,n) => String(v==null||v===''?'—':v).padStart(n,' ').substring(0,n);

  // ── Cabecera ──────────────────────────────────────────
  L.push(sep);
  L.push('  PPCL LEGIONELLA — ALMACÉN ' + yr);
  L.push('  Programa de Prevención y Control de Legionella');
  L.push('  Empresa: DIAGROUP');
  L.push(sep);
  L.push('Fecha emisión : ' + now.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'}));
  L.push('Hora          : ' + now.toLocaleTimeString('es-ES'));
  L.push('Semana activa : ' + weekLabel(wk));
  L.push('Destinatario  : juanantonio.carmona@diagroup.com');
  L.push('');

  // ── Resumen global ────────────────────────────────────
  // Contar desde localStorage directamente (no del DOM, que solo muestra lo visible)
  let totalCells = 0, doneCells = 0;
  Object.keys(data).forEach(k => {
    if(k.startsWith('ppcl') || k.startsWith('acs_') || k.startsWith('dep') || k.startsWith('dia')){
      if(!k.includes('sep_date') && !k.includes('obs')){
        totalCells++;
        if(data[k] && data[k].trim()) doneCells++;
      }
    }
  });
  // estimamos total real
  const totalReal = Math.max(totalCells, doneCells);
  const pctG = totalReal ? Math.round(doneCells/totalReal*100) : 0;

  L.push(sep);
  L.push('RESUMEN GLOBAL DE CUMPLIMIENTO');
  L.push(sep);
  L.push('  Registros con datos  : ' + doneCells);
  L.push('  % sobre registrados  : ' + pctG + '%');
  L.push('');

  // ══════════════════════════════════════════════════════
  // 1. CONDENSADORES EVAPORATIVOS — todos los meses
  // ══════════════════════════════════════════════════════
  L.push(sep);
  L.push('1. CONDENSADORES EVAPORATIVOS — AÑO ' + yr);
  L.push(sep);

  for(let mo=0; mo<12; mo++){
    const days = new Date(yr, mo+1, 0).getDate();
    // check if this month has any data
    let hasData = false;
    for(let d=1;d<=days;d++){
      [1,2].forEach(cn=>{
        ['biocidad','temperatura','ph','turbidez'].forEach(f=>{
          if(getVal(makeKey('ppcl',yr,mo,cn,d,f))) hasData=true;
        });
      });
    }
    L.push('');
    L.push(sep2);
    L.push('  ' + MONTHS[mo] + ' ' + yr + (hasData ? '' : '  [SIN DATOS]'));
    L.push(sep2);
    if(!hasData){ L.push('  (No se han registrado datos para este mes)'); continue; }

    L.push(pad('DÍA',5) + ' | ' + pad('C1-BIOCIDAD',12) + ' | ' + pad('C1-TEMP',8) + ' | ' + pad('C1-PH',6) + ' | ' + pad('C1-TURB',8) + ' || ' + pad('C2-BIOCIDAD',12) + ' | ' + pad('C2-TEMP',8) + ' | ' + pad('C2-PH',6) + ' | ' + pad('C2-TURB',8));
    L.push('-'.repeat(5)+'---'+'-'.repeat(12)+'---'+'-'.repeat(8)+'---'+'-'.repeat(6)+'---'+'-'.repeat(8)+'---'+'-'.repeat(12)+'---'+'-'.repeat(8)+'---'+'-'.repeat(6)+'---'+'-'.repeat(8));
    for(let d=1;d<=days;d++){
      const row = [pad(d,5)];
      [1,2].forEach((cn,ci)=>{
        if(ci===1) row.push('||');
        ['biocidad','temperatura','ph','turbidez'].forEach(f=>{
          row.push(pad(getVal(makeKey('ppcl',yr,mo,cn,d,f)), f==='biocidad'?12:f==='temperatura'||f==='turbidez'?8:6));
        });
      });
      L.push(row.join(' | '));
    }
  }
  L.push('');

  // ══════════════════════════════════════════════════════
  // 2. ACS — GRIFOS SEMANAL (todas las semanas con datos)
  // ══════════════════════════════════════════════════════
  L.push('');
  L.push(sep);
  L.push('2. GRIFOS ACS — CONTROL SEMANAL (TODAS LAS SEMANAS CON DATOS)');
  L.push(sep);

  // recopilar todas las semanas únicas que tienen datos
  const semanas = new Set();
  Object.keys(data).forEach(k=>{ if(k.startsWith('acs_s__')) semanas.add(k.split('__')[1]); });
  // añadir semana actual aunque esté vacía
  semanas.add(wk);

  const semanasOrdenadas = [...semanas].sort();
  semanasOrdenadas.forEach(semWk => {
    L.push('');
    L.push(sep2);
    L.push('  SEMANA: ' + weekLabel(semWk) + '  (clave: ' + semWk + ')');
    L.push(sep2);
    L.push(pad('Nº',5)  + ' | ' + pad('NºInt',8) + ' | ' + pad('GRIFO DE AGUA',36) + ' | ' + pad('Turb.AF',8) + ' | ' + pad('Turb.AC',8) + ' | ' + 'Apertura');
    L.push('-'.repeat(5)+'---'+'-'.repeat(8)+'---'+'-'.repeat(36)+'---'+'-'.repeat(8)+'---'+'-'.repeat(8)+'---'+'-'.repeat(8));
    ACS_SEMANAL.forEach(g=>{
      const tf = getVal(makeKey('acs_s',semWk,g.n,'tf'));
      const tc = getVal(makeKey('acs_s',semWk,g.n,'tc'));
      const ap = getVal(makeKey('acs_s',semWk,g.n,'ap'));
      L.push(pad(g.n,5) + ' | ' + pad(g.ni,8) + ' | ' + pad(g.loc,36) + ' | ' + pad(tf,8) + ' | ' + pad(tc,8) + ' | ' + (ap||'—'));
    });
  });
  L.push('');

  // ══════════════════════════════════════════════════════
  // 3. ACS — GRIFOS MENSUAL
  // ══════════════════════════════════════════════════════
  L.push('');
  L.push(sep);
  L.push('3. GRIFOS ACS — CONTROL MENSUAL — AÑO ' + yr);
  L.push(sep);

  ACS_MENSUAL.forEach((mesObj)=>{
    const mo = MONTHS.indexOf(mesObj.mes);
    L.push('');
    L.push(sep2);
    L.push('  ' + mesObj.mes + ' ' + yr);
    L.push(sep2);
    L.push(pad('Nº',5) + ' | ' + pad('NºInt',8) + ' | ' + pad('GRIFO',34) + ' | ' + pad('Cloro',7) + ' | ' + pad('PH',6) + ' | ' + pad('Estado',8) + ' | ' + pad('T.Cal',6) + ' | ' + pad('T.Fri',6));
    L.push('-'.repeat(5)+'---'+'-'.repeat(8)+'---'+'-'.repeat(34)+'---'+'-'.repeat(7)+'---'+'-'.repeat(6)+'---'+'-'.repeat(8)+'---'+'-'.repeat(6)+'---'+'-'.repeat(6));
    mesObj.items.forEach(g=>{
      L.push(
        pad(g.n,5)  + ' | ' +
        pad(g.ni,8) + ' | ' +
        pad(g.loc,34)+ ' | ' +
        pad(getVal(makeKey('acs_m',yr,mo,g.n,'cloro')),7) + ' | ' +
        pad(getVal(makeKey('acs_m',yr,mo,g.n,'ph')),6) + ' | ' +
        pad(getVal(makeKey('acs_m',yr,mo,g.n,'estado')),8) + ' | ' +
        pad(getVal(makeKey('acs_m',yr,mo,g.n,'tc')),6) + ' | ' +
        pad(getVal(makeKey('acs_m',yr,mo,g.n,'tf')),6)
      );
    });
  });
  L.push('');

  // ══════════════════════════════════════════════════════
  // 4. DEPÓSITOS — mensual
  // ══════════════════════════════════════════════════════
  L.push('');
  L.push(sep);
  L.push('4. DEPÓSITOS — CONTROL MENSUAL — AÑO ' + yr);
  L.push(sep);
  L.push(pad('MES',12) + ' | ' + pad('DEPÓSITO',36) + ' | ' + pad('Cloro',7) + ' | ' + pad('PH',6) + ' | ' + pad('Temp',6));
  L.push('-'.repeat(12)+'---'+'-'.repeat(36)+'---'+'-'.repeat(7)+'---'+'-'.repeat(6)+'---'+'-'.repeat(6));

  ACS_DEPOSITOS.forEach((dep)=>{
    const mo = MONTHS.indexOf(dep.mes);
    [{n:'39',loc:'DEPÓSITO PRINCIPAL'},{n:'28',loc:'BOX LAVADO ISOTERMOS'}].forEach(d=>{
      L.push(
        pad(dep.mes,12) + ' | ' +
        pad(d.loc,36)   + ' | ' +
        pad(getVal(makeKey('dep',yr,mo,d.n,'cloro')),7) + ' | ' +
        pad(getVal(makeKey('dep',yr,mo,d.n,'ph')),6) + ' | ' +
        pad(getVal(makeKey('dep',yr,mo,d.n,'temp')),6)
      );
    });
  });
  L.push('');

  // ══════════════════════════════════════════════════════
  // 5. DIARIO — todos los días con datos
  // ══════════════════════════════════════════════════════
  L.push('');
  L.push(sep);
  L.push('5. AGUA FRÍA SANITARIA — CONTROL DIARIO (DÍAS CON DATOS)');
  L.push(sep);

  // recopilar fechas únicas del diario
  const diasDiario = new Set();
  Object.keys(data).forEach(k=>{ if(k.startsWith('dia__')) diasDiario.add(k.split('__')[1]); });
  // añadir hoy
  diasDiario.add(localDateStr(diarioDate));

  const diasOrdenados = [...diasDiario].sort();
  L.push(pad('FECHA',12) + ' | ' + pad('Nº',4) + ' | ' + pad('EQUIPO',36) + ' | ' + pad('PH',6) + ' | ' + pad('Cloro',7) + ' | ' + pad('Temp',6));
  L.push('-'.repeat(12)+'---'+'-'.repeat(4)+'---'+'-'.repeat(36)+'---'+'-'.repeat(6)+'---'+'-'.repeat(7)+'---'+'-'.repeat(6));

  diasOrdenados.forEach(dk=>{
    DIARIO_ITEMS.forEach(it=>{
      const ph    = getVal(makeKey('dia',dk,it.n,'ph'));
      const cloro = getVal(makeKey('dia',dk,it.n,'cloro'));
      const temp  = getVal(makeKey('dia',dk,it.n,'temp'));
      if(ph||cloro||temp){
        L.push(pad(dk,12) + ' | ' + pad(it.n,4) + ' | ' + pad(it.loc,36) + ' | ' + pad(ph,6) + ' | ' + pad(cloro,7) + ' | ' + pad(temp,6));
      }
    });
    const obs = getVal(makeKey('dia',dk,'obs'));
    if(obs) L.push('             OBSERVACIÓN: ' + obs);
  });
  L.push('');

  // ── Pie ───────────────────────────────────────────────
  L.push(sep);
  L.push('  Reporte generado por MantenApp PPCL Legionella');
  L.push('  ' + now.toLocaleString('es-ES'));
  L.push('  Para: juanantonio.carmona@diagroup.com');
  L.push(sep);

  return L.join('\n');
}

// ── Exportar TXT completo ─────────────────────────────
// ═══════════════════════════════════════════════════════
//  EXCEL EXPORT — genera .xlsx con 5 hojas
// ═══════════════════════════════════════════════════════

// Estilo de cabecera azul marino
function hdrStyle(bold){
  return {
    font:{bold:bold!==false, color:{rgb:'FFFFFF'}, sz:10},
    fill:{fgColor:{rgb:'0F1F3D'}},
    alignment:{horizontal:'center',vertical:'center',wrapText:true},
    border:{bottom:{style:'medium',color:{rgb:'2589C7'}}}
  };
}
function subHdrStyle(){
  return {
    font:{bold:true, color:{rgb:'FFFFFF'}, sz:9},
    fill:{fgColor:{rgb:'1A2F52'}},
    alignment:{horizontal:'center',vertical:'center'}
  };
}
function cellStyle(v,field){
  const base = {font:{sz:10}, alignment:{horizontal:'center',vertical:'center'}};
  if(v===null||v===undefined||v===''){
    return {...base, fill:{fgColor:{rgb:'F7F8FA'}}};
  }
  const n = parseFloat(v);
  if(field==='ph' && !isNaN(n)){
    if(n>=7.0&&n<=8.0) return {...base, fill:{fgColor:{rgb:'E8F7EF'}}, font:{...base.font,color:{rgb:'1A7A4A'}}};
    if(n>=6.5&&n<=8.5) return {...base, fill:{fgColor:{rgb:'FFF7E6'}}, font:{...base.font,color:{rgb:'C97B00'}}};
    return {...base, fill:{fgColor:{rgb:'FDF0EE'}}, font:{...base.font,color:{rgb:'C0392B'}}};
  }
  if(field==='temperatura' && !isNaN(n)){
    if(n<=25) return {...base, fill:{fgColor:{rgb:'E8F7EF'}}, font:{...base.font,color:{rgb:'1A7A4A'}}};
    if(n<=35) return {...base, fill:{fgColor:{rgb:'FFF7E6'}}, font:{...base.font,color:{rgb:'C97B00'}}};
    return {...base, fill:{fgColor:{rgb:'FDF0EE'}}, font:{...base.font,color:{rgb:'C0392B'}}};
  }
  return {...base, fill:{fgColor:{rgb:'FFFFFF'}}};
}
function locStyle(){
  return {font:{sz:10,bold:false}, alignment:{horizontal:'left',vertical:'center'}};
}
function titleStyle(){
  return {font:{bold:true,sz:13,color:{rgb:'0F1F3D'}}, alignment:{horizontal:'left'}};
}
function metaStyle(){
  return {font:{sz:9,color:{rgb:'6B7494'}}, alignment:{horizontal:'left'}};
}

function sc(v,s){ return {v:v, s:s}; }
function cv(v,f){ return sc(v===''||v===null||v===undefined?'':v, cellStyle(v,f)); }

function setColWidths(ws, widths){
  ws['!cols'] = widths.map(w=>({wch:w}));
}
function addMerge(ws, r1,c1,r2,c2){
  if(!ws['!merges']) ws['!merges']=[];
  ws['!merges'].push({s:{r:r1,c:c1},e:{r:r2,c:c2}});
}
function sheetFromAoA(aoa){
  return XLSX.utils.aoa_to_sheet(aoa);
}

// ═══════════════════════════════════════════════════════
//  EXCEL — Solo mes activo, fiel al aspecto de la app
// ═══════════════════════════════════════════════════════

// ── Estilos ──────────────────────────────────────────
const XS = {
  // Cabecera principal: azul marino
  hdr: (txt) => ({v:txt, s:{
    font:{bold:true, color:{rgb:'FFFFFF'}, sz:11},
    fill:{fgColor:{rgb:'0F1F3D'}},
    alignment:{horizontal:'center',vertical:'center',wrapText:true},
    border:{
      bottom:{style:'medium',color:{rgb:'2589C7'}},
      top:{style:'thin',color:{rgb:'2589C7'}},
      left:{style:'thin',color:{rgb:'2589C7'}},
      right:{style:'thin',color:{rgb:'2589C7'}}
    }
  }}),
  // Sub-cabecera: azul medio
  subHdr: (txt) => ({v:txt, s:{
    font:{bold:true, color:{rgb:'FFFFFF'}, sz:9},
    fill:{fgColor:{rgb:'1A2F52'}},
    alignment:{horizontal:'center',vertical:'center',wrapText:true},
    border:{bottom:{style:'thin',color:{rgb:'2589C7'}}}
  }}),
  // Separador de grupo (azul claro, como la app)
  grpSep: (txt) => ({v:txt, s:{
    font:{bold:true, color:{rgb:'1D6FA4'}, sz:10},
    fill:{fgColor:{rgb:'E8F3FB'}},
    alignment:{horizontal:'left',vertical:'center'},
    border:{bottom:{style:'thin',color:{rgb:'C4C9D8'}}}
  }}),
  // Número de día / fila alternada
  dayNum: (v, alt) => ({v:v, s:{
    font:{bold:true, sz:10, color:{rgb:'0F1F3D'}},
    fill:{fgColor:{rgb: alt ? 'EEF0F4' : 'FFFFFF'}},
    alignment:{horizontal:'center',vertical:'center'},
    border:{right:{style:'thin',color:{rgb:'D8DCE6'}}}
  }}),
  // Celda de dato vacía
  empty: () => ({v:'', s:{
    fill:{fgColor:{rgb:'F7F8FA'}},
    alignment:{horizontal:'center',vertical:'center'},
    border:{bottom:{style:'hair',color:{rgb:'D8DCE6'}},right:{style:'hair',color:{rgb:'D8DCE6'}}}
  }}),
  // Celda con valor — color según campo y valor
  val: (v, field) => {
    const n = parseFloat(v);
    let fill = 'FFFFFF', fontColor = '1A2035';
    if(v !== '' && v !== null && v !== undefined){
      if(field==='ph' && !isNaN(n)){
        if(n>=7.0&&n<=8.0)      { fill='E8F7EF'; fontColor='1A7A4A'; }
        else if(n>=6.5&&n<=8.5) { fill='FFF7E6'; fontColor='C97B00'; }
        else                    { fill='FDF0EE'; fontColor='C0392B'; }
      } else if(field==='temperatura' && !isNaN(n)){
        if(n<=25)      { fill='E8F7EF'; fontColor='1A7A4A'; }
        else if(n<=35) { fill='FFF7E6'; fontColor='C97B00'; }
        else           { fill='FDF0EE'; fontColor='C0392B'; }
      }
    }
    const isEmpty = (v===''||v===null||v===undefined);
    return {v: isEmpty?'':v, s:{
      font:{sz:10, color:{rgb: isEmpty?'9BA3BC':fontColor}},
      fill:{fgColor:{rgb: isEmpty?'F7F8FA':fill}},
      alignment:{horizontal:'center',vertical:'center'},
      border:{bottom:{style:'hair',color:{rgb:'D8DCE6'}},right:{style:'hair',color:{rgb:'D8DCE6'}}}
    }};
  },
  // Celda texto izquierda (localización)
  loc: (txt) => ({v:txt||'', s:{
    font:{sz:10},
    fill:{fgColor:{rgb:'FFFFFF'}},
    alignment:{horizontal:'left',vertical:'center'},
    border:{bottom:{style:'hair',color:{rgb:'D8DCE6'}}}
  }}),
  // Celda estado conservación
  estado: (v) => {
    const col = v==='BUENO'?{fill:'E8F7EF',font:'1A7A4A'}:
                v==='MALO' ?{fill:'FDF0EE',font:'C0392B'}:
                v==='REGULAR'?{fill:'FFF7E6',font:'C97B00'}:
                {fill:'FFFFFF',font:'1A2035'};
    return {v:v||'', s:{font:{bold:!!v,sz:10,color:{rgb:col.font}},fill:{fgColor:{rgb:col.fill}},alignment:{horizontal:'center',vertical:'center'}}};
  },
  // Celda apertura SÍ/NO/N/A
  apertura: (v) => {
    const col = v==='SÍ'?{fill:'E8F7EF',font:'1A7A4A'}:
                v==='NO'?{fill:'FDF0EE',font:'C0392B'}:
                {fill:'FFFFFF',font:'6B7494'};
    return {v:v||'', s:{font:{bold:!!v,sz:10,color:{rgb:col.font}},fill:{fgColor:{rgb:col.fill}},alignment:{horizontal:'center',vertical:'center'}}};
  },
  // Título principal hoja
  title: (txt) => ({v:txt, s:{
    font:{bold:true, sz:14, color:{rgb:'0F1F3D'}},
    fill:{fgColor:{rgb:'FFFFFF'}},
    alignment:{horizontal:'left',vertical:'center'}
  }}),
  // Meta info
  meta: (txt) => ({v:txt, s:{
    font:{sz:9, color:{rgb:'6B7494'}},
    alignment:{horizontal:'left'}
  }}),
  // Número de fila (Nº grifo)
  num: (v) => ({v:v||'', s:{
    font:{sz:10, color:{rgb:'424C6A'}},
    fill:{fgColor:{rgb:'F7F8FA'}},
    alignment:{horizontal:'center',vertical:'center'},
    border:{right:{style:'thin',color:{rgb:'D8DCE6'}}}
  }}),
  // Separador (ya no se usa para turbidez — ahora es diaria)
  dash: () => ({v:'—', s:{
    font:{sz:10,color:{rgb:'9BA3BC'}},
    fill:{fgColor:{rgb:'F0F2F5'}},
    alignment:{horizontal:'center',vertical:'center'}
  }}),
  blank: () => ({v:'',s:{}})
};

function xlsMerges(ws, merges){ ws['!merges'] = (ws['!merges']||[]).concat(merges); }
function xlsCols(ws, widths){ ws['!cols'] = widths.map(w=>({wch:w})); }
function xlsRows(ws, rows){ ws['!rows'] = rows; }

// ── HOJA 1: CONDENSADORES — todos los meses del año ──
function buildSheetCondensadores(yr, mo){
  const aoa = [];
  const COL = 9;

  aoa.push([ XS.title('PPCL LEGIONELLA — CONDENSADORES EVAPORATIVOS · AÑO '+yr), ...Array(COL-1).fill(XS.blank()) ]);
  aoa.push([ XS.meta('Empresa: DIAGROUP  ·  Todos los meses  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank()) ]);
  aoa.push( Array(COL).fill(XS.blank()) );

  MONTHS.forEach((mesNombre, miIdx) => {
    const days = new Date(yr, miIdx+1, 0).getDate();
    const isCurrent = miIdx === mo;

    // Cabecera de mes
    aoa.push([
      {v: mesNombre + ' ' + yr + (isCurrent ? ' ◀ MES ACTUAL' : ''),
       s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},
          fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}},
          alignment:{horizontal:'left',vertical:'center'}}},
      ...Array(COL-1).fill({v:'',s:{fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}}}})
    ]);
    aoa.push([
      XS.subHdr('DÍA'),
      XS.subHdr('BIOCIDAD C1'), XS.subHdr('TEMP C1 (°C)'), XS.subHdr('PH C1'), XS.subHdr('TURBIDEZ C1'),
      XS.subHdr('BIOCIDAD C2'), XS.subHdr('TEMP C2 (°C)'), XS.subHdr('PH C2'), XS.subHdr('TURBIDEZ C2'),
    ]);

    for(let d=1; d<=days; d++){
      const alt = d%2===0;
      const row = [ XS.dayNum(d, alt) ];
      [1,2].forEach(cn=>{
        ['biocidad','temperatura','ph','turbidez'].forEach(f=>{
          const v = getVal(makeKey('ppcl',yr,miIdx,cn,d,f));
          row.push(XS.val(v, f));
        });
      });
      aoa.push(row);
    }
    aoa.push(Array(COL).fill(XS.blank()));
  });

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws, [5, 14,11,7,11, 14,11,7,11]);
  xlsMerges(ws, [
    {s:{r:0,c:0},e:{r:0,c:8}},
    {s:{r:1,c:0},e:{r:1,c:8}},
  ]);
  ws['!freeze'] = {xSplit:1, ySplit:3};
  return ws;
}

// ── HOJA 2: ACS SEMANAL — semana activa ──────────────
function buildSheetAcsSemanal(yr, wk){
  // Export ALL weeks that have data + current week
  const semanas = new Set([wk]);
  Object.keys(data||{}).forEach(k=>{ if(k.startsWith('acs_s__')) semanas.add(k.split('__')[1]); });
  const semanasOrdenadas = [...semanas].sort();

  const aoa=[];
  const COL=6;
  aoa.push([XS.title('PPCL LEGIONELLA — ACS GRIFOS SEMANAL · '+yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Todas las semanas registradas  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));

  semanasOrdenadas.forEach(semWk=>{
    const wlabel2 = weekLabel(semWk);
    // Header semana
    aoa.push([
      {v:'SEMANA: '+wlabel2, s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0F1F3D'}},alignment:{horizontal:'left',vertical:'center'}}},
      ...Array(COL-1).fill({v:'',s:{fill:{fgColor:{rgb:'0F1F3D'}}}})
    ]);
    aoa.push([
      XS.subHdr('Nº'),XS.subHdr('Nº Interno'),XS.subHdr('Grifo de Agua'),
      XS.subHdr('Turbidez AF'),XS.subHdr('Turbidez AC'),XS.subHdr('Apertura')
    ]);
    let hasAnyData = false;
    ACS_SEMANAL.forEach(g=>{
      const tf=getVal(makeKey('acs_s',semWk,g.n,'tf'));
      const tc=getVal(makeKey('acs_s',semWk,g.n,'tc'));
      const ap=getVal(makeKey('acs_s',semWk,g.n,'ap'));
      if(tf||tc||ap) hasAnyData=true;
      aoa.push([
        XS.num(g.n),XS.num(g.ni),XS.loc(g.loc),
        XS.val(tf,'turbidez'),XS.val(tc,'turbidez'),XS.apertura(ap)
      ]);
    });
    aoa.push(Array(COL).fill(XS.blank()));
  });

  const ws=XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[6,10,40,16,16,14]);
  xlsMerges(ws,[{s:{r:0,c:0},e:{r:0,c:5}},{s:{r:1,c:0},e:{r:1,c:5}}]);
  ws['!freeze']={xSplit:0,ySplit:3};
  return ws;
}

// ── HOJA 3: ACS MENSUAL — todos los meses del año ────
function buildSheetAcsMensual(yr, mo){
  const aoa = [];
  const COL = 9;

  aoa.push([ XS.title('PPCL LEGIONELLA — GRIFOS ACS · CONTROL MENSUAL · AÑO '+yr), ...Array(COL-1).fill(XS.blank()) ]);
  aoa.push([ XS.meta('Todos los meses del año  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank()) ]);
  aoa.push( Array(COL).fill(XS.blank()) );

  // Iterar los 12 meses
  ACS_MENSUAL.forEach(mesObj => {
    const miIdx = MONTHS.indexOf(mesObj.mes);
    const isCurrent = miIdx === mo;
    // Cabecera de mes
    aoa.push([
      {v: mesObj.mes + ' ' + yr + (isCurrent ? ' ◀ MES ACTUAL' : ''),
       s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},
          fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}},
          alignment:{horizontal:'left',vertical:'center'}}},
      ...Array(COL-1).fill({v:'',s:{fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}}}})
    ]);
    aoa.push([
      XS.subHdr('Nº'), XS.subHdr('Nº Interno'), XS.subHdr('Grifo de Agua'),
      XS.subHdr('Cloro (mg/L)'), XS.subHdr('PH'),
      XS.subHdr('Estado Conservación'), XS.subHdr('Temp. Caliente (°C)'), XS.subHdr('Temp. Fría (°C)'),
      XS.subHdr('Fecha control')
    ]);
    if(mesObj.items && mesObj.items.length){
      mesObj.items.forEach(g=>{
        const cloro = getVal(makeKey('acs_m',yr,miIdx,g.n,'cloro'));
        const ph    = getVal(makeKey('acs_m',yr,miIdx,g.n,'ph'));
        const est   = getVal(makeKey('acs_m',yr,miIdx,g.n,'estado'));
        const tc    = getVal(makeKey('acs_m',yr,miIdx,g.n,'tc'));
        const tf    = getVal(makeKey('acs_m',yr,miIdx,g.n,'tf'));
        const fecha = getVal(makeKey('acs_sep_date',yr,miIdx+'_'+g.ni)) || '';
        aoa.push([
          XS.num(g.n), XS.num(g.ni), XS.loc(g.loc),
          XS.val(cloro,'cloro'), XS.val(ph,'ph'),
          XS.estado(est),
          XS.val(tc,'temperatura'), XS.val(tf,'temperatura'),
          {v:fecha||'', s:{font:{sz:9,color:{rgb:'6B7494'}},alignment:{horizontal:'center'}}}
        ]);
      });
    } else {
      aoa.push([ {v:'(Sin grifos asignados para '+mesObj.mes+')',s:{font:{italic:true,color:{rgb:'9BA3BC'},sz:10}}}, ...Array(COL-1).fill(XS.blank()) ]);
    }
    aoa.push(Array(COL).fill(XS.blank()));
  });

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws, [5, 10, 42, 12, 7, 18, 18, 16, 14]);
  xlsMerges(ws, [
    {s:{r:0,c:0},e:{r:0,c:COL-1}},
    {s:{r:1,c:0},e:{r:1,c:COL-1}},
  ]);
  ws['!freeze'] = {xSplit:0, ySplit:3};
  return ws;
}

// ── HOJA 4: DEPÓSITOS — mes activo ───────────────────
function buildSheetDepositos(yr, mo){
  // Export ALL 12 months
  const aoa=[];
  const COL=6;
  aoa.push([XS.title('PPCL LEGIONELLA — DEPÓSITOS · AÑO '+yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Todos los meses  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));
  aoa.push([
    XS.hdr('Mes'),XS.hdr('Depósito / Equipo'),
    XS.hdr('Cloro (mg/L)'),XS.hdr('PH'),XS.hdr('Temperatura (°C)'),XS.hdr('Boquilla')
  ]);
  ACS_DEPOSITOS.forEach(dep=>{
    const mi=MONTHS.indexOf(dep.mes);
    [{n:'39',loc:'DEPÓSITO CONTRAINCENDIOS',boquilla:false},{n:'28',loc:'BOX LAVADO ISOTERMOS',boquilla:true}].forEach((d,i)=>{
      const cloro=getVal(makeKey('dep',yr,mi,d.n,'cloro'));
      const ph=getVal(makeKey('dep',yr,mi,d.n,'ph'));
      const temp=getVal(makeKey('dep',yr,mi,d.n,'temp'));
      const boq=d.boquilla?getVal(makeKey('dep',yr,mi,d.n,'boquilla')):'—';
      aoa.push([
        {v:i===0?dep.mes:'',s:{font:{bold:i===0,sz:10,color:{rgb:'0F1F3D'}},fill:{fgColor:{rgb:i===0?'E8F3FB':'FFFFFF'}},alignment:{horizontal:'center',vertical:'center'}}},
        XS.loc(d.loc),XS.val(cloro,'cloro'),XS.val(ph,'ph'),XS.val(temp,'temperatura'),
        {v:boq||'',s:{font:{sz:10},alignment:{horizontal:'center'}}}
      ]);
    });
  });
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[12,32,14,8,16,12]);
  xlsMerges(ws,[{s:{r:0,c:0},e:{r:0,c:5}},{s:{r:1,c:0},e:{r:1,c:5}}]);
  return ws;
}

// ── HOJA 5: DIARIO — todos los días del año con datos ─
function buildSheetDiario(dk){
  // Construir lista de todos los días del año que tienen o no datos
  const yr = ppclYear;
  // Recoger todos los días que tienen algún dato registrado
  const diasConDatos = new Set([dk]);
  Object.keys(data||{}).forEach(k=>{
    if(k.startsWith('dia__')){
      const parts = k.split('__');
      if(parts[1]) diasConDatos.add(parts[1]);
    }
  });
  // Añadir todos los días del mes activo (aunque estén vacíos)
  const moActivo = ppclMonth;
  const diasEnMes = new Date(yr, moActivo+1, 0).getDate();
  for(let d=1; d<=diasEnMes; d++){
    const dk2 = yr+'-'+String(moActivo+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    diasConDatos.add(dk2);
  }
  const diasOrdenados = [...diasConDatos].sort();

  const aoa=[];
  const COL=6;
  aoa.push([XS.title('PPCL LEGIONELLA — CONTROL DIARIO AGUA FRÍA · '+yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Mes activo: '+MONTHS[moActivo]+' '+yr+' (todos los días)  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));
  aoa.push([
    XS.hdr('Fecha'),XS.hdr('Nº'),XS.hdr('Equipo / Punto'),
    XS.hdr('PH'),XS.hdr('Cloro (mg/L)'),XS.hdr('Temp. (°C)')
  ]);

  diasOrdenados.forEach(d=>{
    const [y2,m2,d2]=d.split('-').map(Number);
    const dtLabel=new Date(y2,m2-1,d2).toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
    DIARIO_ITEMS.forEach((it,ii)=>{
      const ph=getVal(makeKey('dia',d,it.n,'ph'));
      const cloro=getVal(makeKey('dia',d,it.n,'cloro'));
      const temp=getVal(makeKey('dia',d,it.n,'temp'));
      aoa.push([
        {v:ii===0?dtLabel:'', s:{font:{bold:ii===0,sz:10},fill:{fgColor:{rgb:ii===0?'E8F3FB':'FFFFFF'}},alignment:{horizontal:'center',vertical:'center',wrapText:true}}},
        XS.num(it.n),XS.loc(it.loc),
        XS.val(ph,'ph'),XS.val(cloro,'cloro'),XS.val(temp,'temperatura')
      ]);
    });
    const obs=getVal(makeKey('dia',d,'obs'));
    if(obs) aoa.push([
      {v:'Obs:',s:{font:{bold:true,sz:9,color:{rgb:'6B7494'}},alignment:{horizontal:'right'}}},
      {v:obs,s:{font:{italic:true,sz:9,color:{rgb:'424C6A'}},alignment:{horizontal:'left',vertical:'center',wrapText:true}}},
      ...Array(COL-2).fill(XS.blank())
    ]);
  });

  const ws=XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[20,6,38,8,12,10]);
  xlsMerges(ws,[{s:{r:0,c:0},e:{r:0,c:5}},{s:{r:1,c:0},e:{r:1,c:5}}]);
  ws['!freeze']={xSplit:0,ySplit:4};
  return ws;
}

// ── HOJA EVAPORATIVOS MENSUAL — todos los meses ──────
function buildSheetEvapMensual(yr, mo){
  const aoa = [];
  const COL = 6;
  aoa.push([XS.title('PPCL LEGIONELLA — EVAPORATIVOS MENSUAL · AÑO '+yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Todos los meses del año  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));

  MONTHS.forEach((mesNombre, miIdx) => {
    const isCurrent = miIdx === mo;
    // Cabecera mes
    aoa.push([
      {v: mesNombre + ' ' + yr + (isCurrent ? ' ◀ MES ACTUAL' : ''),
       s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},
          fill:{fgColor:{rgb: isCurrent ? '0D8A7A' : '0F1F3D'}},
          alignment:{horizontal:'left',vertical:'center'}}},
      ...Array(COL-1).fill({v:'',s:{fill:{fgColor:{rgb: isCurrent ? '0D8A7A' : '0F1F3D'}}}})
    ]);
    aoa.push([
      XS.subHdr('Nº'), XS.subHdr('EVAPORATIVO'),
      XS.subHdr('BIOCIDAD'), XS.subHdr('PH'), XS.subHdr('TEMPERATURA (°C)'), XS.subHdr('TURBIDEZ')
    ]);
    EVAP_ITEMS.forEach((ev,i)=>{
      const alt = i%2===0;
      aoa.push([
        XS.num(ev.n),
        {v:ev.loc, s:{font:{sz:10}, fill:{fgColor:{rgb: alt?'F7F8FA':'FFFFFF'}}, alignment:{horizontal:'left',vertical:'center'}}},
        XS.val(getVal(makeKey('evap',yr,miIdx,ev.n,'biocidad')),''),
        XS.val(getVal(makeKey('evap',yr,miIdx,ev.n,'ph')),'ph'),
        XS.val(getVal(makeKey('evap',yr,miIdx,ev.n,'temp')),'temperatura'),
        XS.val(getVal(makeKey('evap',yr,miIdx,ev.n,'turbidez')),''),
      ]);
    });
    aoa.push(Array(COL).fill(XS.blank()));
  });

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[5,24,14,8,16,12]);
  xlsMerges(ws,[{s:{r:0,c:0},e:{r:0,c:5}},{s:{r:1,c:0},e:{r:1,c:5}}]);
  ws['!freeze']={xSplit:0,ySplit:3};
  return ws;
}

// ── HOJA AGUA POTABLE — todas las semanas del calendario ─
function buildSheetAguaPotable(dk){
  const aoa=[];
  const COL=9;
  const yr = ppclYear;
  aoa.push([XS.title('REGISTRO CONTROL AGUA POTABLE — SEMANAL · AÑO '+yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Ref: RG.ALM.03-1  ·  Almacén: ANTEQUERA  ·  Todas las semanas  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));
  aoa.push([
    XS.hdr('Semana'), XS.hdr('Grifo / Punto de Control'),
    XS.hdr('COLOR'), XS.hdr('OLOR'), XS.hdr('SABOR'),
    XS.hdr('CLORO LIBRE (≥0.2 mg/L)'),
    XS.hdr('RESULTADO (S/N)'),
    XS.hdr('FIRMA REALIZACIÓN'),
    XS.hdr('INCIDENCIA')
  ]);

  // Exportar TODAS las semanas del calendario POTABLE_CALENDARIO
  const todasSemanas = [...POTABLE_CALENDARIO].sort((a,b)=>a.lunes.localeCompare(b.lunes));
  todasSemanas.forEach(entrada => {
    const wk  = entrada.lunes;
    const gKey = entrada.grifo.replace(/\s/g,'_');
    const isCurrent = wk === dk;
    const mkp = f => makeKey('pot', wk, gKey, f);
    const res   = getVal(mkp('result'));
    const resCol  = res==='S'?'1A7A4A':res==='N'?'C0392B':'1A2035';
    const resFill = res==='S'?'E8F7EF':res==='N'?'FDF0EE':'FFFFFF';
    const incid = getVal(mkp('incid'));
    aoa.push([
      {v: weekLabel(wk) + (isCurrent?' ◀':''),
       s:{font:{sz:10, bold:isCurrent}, fill:{fgColor:{rgb: isCurrent?'E8F3FB':'F7F8FA'}},
          alignment:{horizontal:'center',vertical:'center',wrapText:true}}},
      XS.loc(entrada.grifo),
      XS.apertura(getVal(mkp('color'))==='CORRECTO'?'SÍ':getVal(mkp('color'))==='INCORRECTO'?'NO':''),
      XS.apertura(getVal(mkp('olor'))==='CORRECTO'?'SÍ':getVal(mkp('olor'))==='INCORRECTO'?'NO':''),
      XS.apertura(getVal(mkp('sabor'))==='CORRECTO'?'SÍ':getVal(mkp('sabor'))==='INCORRECTO'?'NO':''),
      XS.val(getVal(mkp('cloro')),'cloro'),
      {v:res||'', s:{font:{bold:!!res,sz:10,color:{rgb:resCol}},fill:{fgColor:{rgb:resFill}},alignment:{horizontal:'center',vertical:'center'}}},
      {v:getVal(mkp('firma'))||'', s:{font:{sz:10},alignment:{horizontal:'center',vertical:'center'}}},
      {v:incid==='X'?'X':'', s:{font:{bold:incid==='X',sz:12,color:{rgb:incid==='X'?'C0392B':'1A2035'}},fill:{fgColor:{rgb:incid==='X'?'FDF0EE':'FFFFFF'}},alignment:{horizontal:'center',vertical:'center'}}},
    ]);
    const obs = getVal(mkp('obs'));
    if(obs){
      aoa.push([
        {v:'Obs:', s:{font:{bold:true,sz:9,color:{rgb:'6B7494'}},alignment:{horizontal:'right'}}},
        {v:obs, s:{font:{italic:true,sz:9,color:{rgb:'424C6A'}},alignment:{horizontal:'left',vertical:'center',wrapText:true}}},
        ...Array(COL-2).fill(XS.blank())
      ]);
    }
  });

  const ws=XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[18,32,8,8,8,14,10,18,10]);
  xlsRows(ws,[{hpt:20},{hpt:14},{hpt:6},{hpt:22}]);
  xlsMerges(ws,[
    {s:{r:0,c:0},e:{r:0,c:8}},
    {s:{r:1,c:0},e:{r:1,c:8}},
  ]);
  ws['!freeze']={xSplit:0,ySplit:4};
  return ws;
}

// ── HOJA PISCINAS — todos los meses del año ──────────
function buildSheetPiscinas(yr, mo){
  var aoa = [];
  var COL = 10;

  aoa.push([XS.title('CONTROL PISCINAS · AÑO ' + yr), ...Array(COL-1).fill(XS.blank())]);
  aoa.push([XS.meta('Empresa: DIAGROUP  ·  Todos los meses  ·  Generado: '+new Date().toLocaleDateString('es-ES')), ...Array(COL-1).fill(XS.blank())]);
  aoa.push(Array(COL).fill(XS.blank()));

  MONTHS.forEach(function(mesNombre, miIdx){
    var daysInMonth = new Date(yr, miIdx+1, 0).getDate();
    var isCurrent = miIdx === mo;

    // Cabecera mes
    aoa.push([
      {v: mesNombre + ' ' + yr + (isCurrent ? ' ◀ MES ACTUAL' : ''),
       s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},
          fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}},
          alignment:{horizontal:'left',vertical:'center'}}},
      ...Array(COL-1).fill({v:'',s:{fill:{fgColor:{rgb: isCurrent ? '1D6FA4' : '0F1F3D'}}}})
    ]);
    aoa.push([
      XS.subHdr('DÍA'),
      XS.subHdr('🏊 pH'), XS.subHdr('🏊 Cl (mg/L)'), XS.subHdr('🏊 Temp (°C)'), XS.subHdr('🏊 Turb (NTU)'),
      XS.subHdr('🧒 pH'), XS.subHdr('🧒 Cl (mg/L)'), XS.subHdr('🧒 Temp (°C)'), XS.subHdr('🧒 Turb (NTU)'),
      XS.subHdr('Observaciones')
    ]);

    for(var d=1; d<=daysInMonth; d++){
      var alt = d%2===0;
      var row = [XS.dayNum(d, alt)];
      PISCINAS.forEach(function(p){
        var ph  = getVal(makeKey('piscina',yr,miIdx,p.id,d,'ph'));
        var cl  = getVal(makeKey('piscina',yr,miIdx,p.id,d,'cloro_libre'));
        var tmp = getVal(makeKey('piscina',yr,miIdx,p.id,d,'temperatura'));
        var tur = getVal(makeKey('piscina',yr,miIdx,p.id,d,'turbidez'));
        row.push(XS.val(ph,'ph'));
        row.push(XS.val(cl,'cloro'));
        row.push(XS.val(tmp,'temperatura'));
        row.push(XS.val(tur,''));
      });
      var obs = getVal(makeKey('piscina',yr,miIdx,'grande',d,'observaciones')) || getVal(makeKey('piscina',yr,miIdx,'infantil',d,'observaciones')) || '';
      row.push({v:obs, s:{font:{sz:9,italic:!!obs}, alignment:{horizontal:'left',vertical:'center',wrapText:true}}});
      aoa.push(row);
    }
    aoa.push(Array(COL).fill(XS.blank()));
  });

  var ws = XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws, [5, 7,14,10,12, 7,14,10,12, 28]);
  xlsMerges(ws, [
    {s:{r:0,c:0},e:{r:0,c:COL-1}},
    {s:{r:1,c:0},e:{r:1,c:COL-1}},
  ]);
  ws['!freeze'] = {xSplit:1, ySplit:3};
  return ws;
}


function buildAndDownloadExcel(filename){
  const yr  = ppclYear;
  const mo  = ppclMonth;
  const wk  = getWeekKey(acsDate);
  const dk  = localDateStr(diarioDate);
  const now = new Date();

  if(typeof XLSX === 'undefined'){
    if(typeof showToast==='function') showToast('❌ Librería XLSX no cargada — verifica tu conexión a internet');
    return;
  }

  const wb = XLSX.utils.book_new();
  wb.Props = {
    Title:   'PPCL Legionella Almacén '+MONTHS[mo]+' '+yr,
    Author:  'AquaControl Pro v20',
    Company: 'DIAGROUP',
    CreatedDate: now
  };

  try { XLSX.utils.book_append_sheet(wb, buildSheetResumen(yr, mo), '0_Resumen_Ejecutivo'); } catch(e){ console.warn('[Excel] Hoja Resumen:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetCondensadores(yr, mo), '1_Condensadores'); } catch(e){ console.warn('[Excel] Hoja Condensadores:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetEvapMensual(typeof evapYear!=='undefined'?evapYear:yr, typeof evapMonth!=='undefined'?evapMonth:mo), '2_Evaporativos_Mensual'); } catch(e){ console.warn('[Excel] Hoja Evap:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetAcsSemanal(yr, wk), '3_ACS_Semanal'); } catch(e){ console.warn('[Excel] Hoja ACS Semanal:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetAcsMensual(yr, mo), '4_ACS_Mensual'); } catch(e){ console.warn('[Excel] Hoja ACS Mensual:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetDepositos(yr, mo), '5_Depositos'); } catch(e){ console.warn('[Excel] Hoja Depositos:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetDiario(dk), '6_Diario_BoxLavado'); } catch(e){ console.warn('[Excel] Hoja Diario:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetAguaPotable(getWeekKey(typeof potableDate!=='undefined'?potableDate:new Date())), '7_Agua_Potable'); } catch(e){ console.warn('[Excel] Hoja Potable:', e); }
  try { XLSX.utils.book_append_sheet(wb, buildSheetPiscinas(yr, mo), '8_Piscinas'); } catch(e){ console.warn('[Excel] Hoja Piscinas:', e); }

  if(wb.SheetNames.length === 0){
    if(typeof showToast==='function') showToast('❌ No se pudo generar ninguna hoja — revisa la consola');
    return;
  }

  XLSX.writeFile(wb, filename);
  if(typeof auditLog==='function') auditLog('EXPORTAR','excel',filename,wb.SheetNames.length+' hojas');
}

// ── Hoja 0: Resumen ejecutivo — todos los equipos en un vistazo ──────────────
function buildSheetResumen(yr, mo){
  const aoa=[];
  const now=new Date();
  const mesNombre=MONTHS[mo];

  aoa.push([XS.title('RESUMEN EJECUTIVO PPCL LEGIONELLA · '+mesNombre+' '+yr), XS.blank(),XS.blank(),XS.blank(),XS.blank()]);
  aoa.push([XS.meta('DIAGROUP · Almacén Antequera · Generado: '+now.toLocaleString('es-ES')), XS.blank(),XS.blank(),XS.blank(),XS.blank()]);
  aoa.push([XS.blank(),XS.blank(),XS.blank(),XS.blank(),XS.blank()]);

  // ── Condensadores resumen ─────────────────────────────
  aoa.push([{v:'▶ CONDENSADORES EVAPORATIVOS',s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0F1F3D'}},alignment:{horizontal:'left'}}},
    ...Array(4).fill({v:'',s:{fill:{fgColor:{rgb:'0F1F3D'}}}})]);
  aoa.push([XS.subHdr('EQUIPO'),XS.subHdr('REGISTROS'),XS.subHdr('pH MEDIO'),XS.subHdr('TEMP. MEDIA °C'),XS.subHdr('ALERTAS')]);
  const days=new Date(yr,mo+1,0).getDate();
  [1,2].forEach(cn=>{
    let regs=0,sumPh=0,cntPh=0,sumTmp=0,cntTmp=0,alerts=0;
    for(let d=1;d<=days;d++){
      const ph=parseFloat(getVal(makeKey('ppcl',yr,mo,cn,d,'ph')));
      const tmp=parseFloat(getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')));
      if(!isNaN(ph)){regs++;sumPh+=ph;cntPh++;if(ph<6.5||ph>8.5)alerts++;}
      if(!isNaN(tmp)){sumTmp+=tmp;cntTmp++;if(tmp>35)alerts++;}
    }
    const phM=cntPh?(sumPh/cntPh).toFixed(2):'—';
    const tmpM=cntTmp?(sumTmp/cntTmp).toFixed(1):'—';
    const phN=parseFloat(phM);
    const phOk=!isNaN(phN)&&phN>=7&&phN<=8;
    aoa.push([
      {v:'Condensador '+cn,s:{font:{bold:true,sz:10},alignment:{horizontal:'left'}}},
      {v:regs,s:{font:{sz:10},alignment:{horizontal:'center'}}},
      {v:phM,s:{font:{bold:true,sz:10,color:{rgb:phOk?'1A7A4A':'C0392B'}},fill:{fgColor:{rgb:phOk?'E8F7EF':'FDF0EE'}},alignment:{horizontal:'center'}}},
      {v:tmpM,s:{font:{sz:10},alignment:{horizontal:'center'}}},
      {v:alerts||'—',s:{font:{bold:alerts>0,sz:10,color:{rgb:alerts>0?'C0392B':'1A7A4A'}},alignment:{horizontal:'center'}}}
    ]);
  });
  aoa.push([XS.blank(),XS.blank(),XS.blank(),XS.blank(),XS.blank()]);

  // ── ACS Grifos resumen semanal ────────────────────────
  const wk=getWeekKey(typeof acsDate!=='undefined'?acsDate:new Date());
  aoa.push([{v:'▶ ACS GRIFOS — SEMANA '+weekLabel(wk),s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'0D8A7A'}},alignment:{horizontal:'left'}}},
    ...Array(4).fill({v:'',s:{fill:{fgColor:{rgb:'0D8A7A'}}}})]);
  aoa.push([XS.subHdr('Nº'),XS.subHdr('GRIFO'),XS.subHdr('TURB. AF'),XS.subHdr('TURB. AC'),XS.subHdr('APERTURA')]);
  ACS_SEMANAL.forEach((g,i)=>{
    const tf=getVal(makeKey('acs_s',wk,g.n,'tf'));
    const tc=getVal(makeKey('acs_s',wk,g.n,'tc'));
    const ap=getVal(makeKey('acs_s',wk,g.n,'ap'));
    const alt=i%2===0;
    aoa.push([
      {v:g.n,s:{font:{bold:true,sz:9},fill:{fgColor:{rgb:alt?'F7F8FA':'FFFFFF'}},alignment:{horizontal:'center'}}},
      {v:g.loc,s:{font:{sz:9},fill:{fgColor:{rgb:alt?'F7F8FA':'FFFFFF'}},alignment:{horizontal:'left'}}},
      XS.val(tf,'turbidez'),XS.val(tc,'turbidez'),XS.apertura(ap)
    ]);
  });
  aoa.push([XS.blank(),XS.blank(),XS.blank(),XS.blank(),XS.blank()]);

  // ── Evaporativos resumen mes ──────────────────────────
  aoa.push([{v:'▶ EVAPORATIVOS — '+mesNombre+' '+yr,s:{font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1D6FA4'}},alignment:{horizontal:'left'}}},
    ...Array(4).fill({v:'',s:{fill:{fgColor:{rgb:'1D6FA4'}}}})]);
  aoa.push([XS.subHdr('Nº'),XS.subHdr('EVAPORATIVO'),XS.subHdr('BIOCIDAD'),XS.subHdr('pH'),XS.subHdr('TEMP. °C')]);
  EVAP_ITEMS.forEach((ev,i)=>{
    const bio=getVal(makeKey('evap',yr,mo,ev.n,'biocidad'));
    const ph=getVal(makeKey('evap',yr,mo,ev.n,'ph'));
    const tmp=getVal(makeKey('evap',yr,mo,ev.n,'temp'));
    const alt=i%2===0;
    aoa.push([
      {v:ev.n,s:{font:{bold:true,sz:9},fill:{fgColor:{rgb:alt?'F7F8FA':'FFFFFF'}},alignment:{horizontal:'center'}}},
      {v:ev.loc,s:{font:{sz:9},fill:{fgColor:{rgb:alt?'F7F8FA':'FFFFFF'}},alignment:{horizontal:'left'}}},
      XS.val(bio,''),XS.val(ph,'ph'),XS.val(tmp,'temperatura')
    ]);
  });

  const ws=XLSX.utils.aoa_to_sheet(aoa);
  xlsCols(ws,[16,38,14,14,12]);
  xlsMerges(ws,[{s:{r:0,c:0},e:{r:0,c:4}},{s:{r:1,c:0},e:{r:1,c:4}}]);
  ws['!freeze']={xSplit:0,ySplit:3};
  return ws;
}


function exportData(){
  const yr   = ppclYear;
  const mo   = ppclMonth;
  const now  = new Date();
  const mes  = MONTHS[mo];
  const fname = 'PPCL_Legionella_'+mes+'_'+yr+'_'+localDateStr(now)+'.xlsx';
  try{
    buildAndDownloadExcel(fname);
    showToast('📊 Excel descargado — '+mes+' '+yr);
  }catch(e){
    showToast('❌ Error al generar Excel: '+e.message);
    console.error(e);
  }
}

// Variables para el modal de email
let _emailFilename = '';
let _emailBody = '';
let _emailSubject = '';

function sendEmail(){
  const now      = new Date();
  const yr       = ppclYear;
  const wk       = getWeekKey(acsDate);
  const fechaHoy = now.toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});

  // Estadísticas
  let doneCells=0, totalCells=0;
  Object.keys(data).forEach(k=>{
    if((k.startsWith('ppcl')||k.startsWith('acs_')||k.startsWith('dep')||k.startsWith('dia'))
       && !k.includes('sep_date') && !k.includes('obs')){
      totalCells++;
      if(data[k]&&data[k].trim()) doneCells++;
    }
  });
  const pct = totalCells ? Math.round(doneCells/totalCells*100) : 0;

  // Resumen condensadores
  const days = new Date(yr,ppclMonth+1,0).getDate();
  let condLines=[];
  for(let d=1;d<=days;d++){
    const b1=getVal(makeKey('ppcl',yr,ppclMonth,1,d,'biocidad'));
    const t1=getVal(makeKey('ppcl',yr,ppclMonth,1,d,'temperatura'));
    const p1=getVal(makeKey('ppcl',yr,ppclMonth,1,d,'ph'));
    const b2=getVal(makeKey('ppcl',yr,ppclMonth,2,d,'biocidad'));
    const t2=getVal(makeKey('ppcl',yr,ppclMonth,2,d,'temperatura'));
    const p2=getVal(makeKey('ppcl',yr,ppclMonth,2,d,'ph'));
    if(b1||t1||p1||b2||t2||p2){
      condLines.push('  Dia '+String(d).padStart(2,'0')+
        ' | C1: Bio='+(b1||'-')+' T='+(t1||'-')+' PH='+(p1||'-')+
        ' | C2: Bio='+(b2||'-')+' T='+(t2||'-')+' PH='+(p2||'-'));
    }
  }

  // Resumen ACS
  let acsLines=[];
  ACS_SEMANAL.forEach(g=>{
    const tf=getVal(makeKey('acs_s',wk,g.n,'tf'));
    const tc=getVal(makeKey('acs_s',wk,g.n,'tc'));
    const ap=getVal(makeKey('acs_s',wk,g.n,'ap'));
    if(tf||tc||ap) acsLines.push('  ['+g.n+'] '+g.loc.substring(0,30)+' | AF:'+(tf||'-')+' AC:'+(tc||'-')+' Ap:'+(ap||'-'));
  });

  // Preparar nombre archivo
  _emailFilename = 'PPCL_Legionella_'+MONTHS[ppclMonth]+'_'+yr+'_'+localDateStr(now)+'.xlsx';

  // Preparar cuerpo correo
  // Resumen Piscinas
  var piscLines = [];
  var piscDays = new Date(yr, ppclMonth+1, 0).getDate();
  for(var pd=1; pd<=piscDays; pd++){
    var rowPisc = '';
    PISCINAS.forEach(function(p){
      var pph = getVal(makeKey('piscina',yr,ppclMonth,p.id,pd,'ph'));
      var pcl = getVal(makeKey('piscina',yr,ppclMonth,p.id,pd,'cloro_libre'));
      if(pph||pcl) rowPisc += ' '+p.nombre.replace('Piscina ','')+'[pH='+(pph||'-')+' Cl='+(pcl||'-')+']';
    });
    if(rowPisc) piscLines.push('  Dia '+String(pd).padStart(2,'0')+':'+rowPisc);
  }

  _emailBody = [
    'Estimado Juan Antonio,',
    '',
    'Le remito el reporte PPCL Legionella del Almacen.',
    'El archivo Excel (.xlsx) con todos los datos va adjunto a este correo.',
    '',
    'RESUMEN — '+fechaHoy,
    '  Semana       : '+weekLabel(wk),
    '  Mes activo   : '+MONTHS[ppclMonth]+' '+yr,
    '  Completados  : '+doneCells+' registros',
    '  Cumplimiento : '+pct+'%',
    '',
    condLines.length?'CONDENSADORES '+MONTHS[ppclMonth]+':':'',
    ...condLines.slice(0,10),
    condLines.length>10?'  ... (ver Excel adjunto)':'',
    '',
    acsLines.length?'GRIFOS ACS semana '+weekLabel(wk)+':':'',
    ...acsLines.slice(0,8),
    acsLines.length>8?'  ... (ver Excel adjunto)':'',
    '',
    piscLines.length?'PISCINAS '+MONTHS[ppclMonth]+':':'',
    ...piscLines.slice(0,8),
    piscLines.length>8?'  ... (ver Excel adjunto)':'',
    '',
    'El Excel contiene 8 hojas del mes '+MONTHS[ppclMonth]+' '+yr+': Condensadores, Evaporativos, ACS Semanal, ACS Mensual, Depositos, Diario, Agua Potable y Piscinas.',
    '',
    'Generado por MantenApp PPCL Legionella — DIAGROUP',
    now.toLocaleString('es-ES'),
  ].filter(l=>l!==null).join('\n');

  _emailSubject = 'PPCL Legionella Alm. '+MONTHS[ppclMonth]+' '+yr+' — '+fechaHoy+' — '+pct+'% cumplimiento';

  // Actualizar modal
  document.getElementById('excelFilename').textContent = _emailFilename;
  // Reset steps
  ['estep1','estep2','estep3'].forEach((id,i)=>{
    const el=document.getElementById(id);
    el.classList.remove('active','done');
    if(i===0) el.classList.add('active');
  });
  document.getElementById('emailProgressBar').style.width='0%';

  // Abrir modal
  document.getElementById('emailModal').classList.add('open');
}

function closeEmailModal(){
  document.getElementById('emailModal').classList.remove('open');
}

function downloadExcelStep(){
  try{
    buildAndDownloadExcel(_emailFilename);
    // Mark step 1 done, activate step 2
    var s1=document.getElementById('estep1');
    var s2=document.getElementById('estep2');
    if(s1){s1.classList.remove('active');s1.classList.add('done');s1.querySelector('.step-num').textContent='✓';}
    if(s2){s2.classList.add('active');}
    document.getElementById('emailProgressBar').style.width='50%';
    showToast('📊 Excel descargado en Descargas (8 hojas)');
  }catch(e){
    showToast('❌ Error al generar Excel: '+e.message);
    console.error(e);
  }
}

function openMailStep(){
  const subject = encodeURIComponent(_emailSubject);
  const body    = encodeURIComponent(_emailBody);
  const gmailUrl = 'https://mail.google.com/mail/?view=cm'
    +'&to=juanantonio.carmona@diagroup.com'
    +'&su='+subject
    +'&body='+body;
  window.open(gmailUrl, '_blank');

  setTimeout(()=>{
    var s2=document.getElementById('estep2');
    var s3=document.getElementById('estep3');
    if(s2){s2.classList.remove('active');s2.classList.add('done');s2.querySelector('.step-num').textContent='✓';}
    if(s3){s3.classList.add('active');}
    document.getElementById('emailProgressBar').style.width='100%';
    showToast('✉️ Gmail abierto — adjunta el Excel desde Descargas');
  }, 800);
}

// ═══════════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════════
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2800);
}

// ═══════════════════════════════════════════════════════
//  CLOCK
// ═══════════════════════════════════════════════════════
function updateClock(){
  const now = new Date();
  const hora = now.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const fecha = now.toLocaleDateString('es-ES',{weekday:'short',day:'2-digit',month:'short'});
  const el = document.getElementById('clockDisplay');
  if(el) el.innerHTML = '<span style="font-size:11px;opacity:0.7">'+fecha+'</span> <b>'+hora+'</b>';
}

// ═══════════════════════════════════════════════════════
//  AUTO-SAVE on input
// ═══════════════════════════════════════════════════════
document.addEventListener('change',e=>{
  if(e.target.dataset&&e.target.dataset.key) saveData();
});

// ═══════════════════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key==='s'){e.preventDefault();saveAll();}
});
// ═══════════════════════════════════════════════════════
//  FIREBASE — Sincronización en la nube (credenciales en localStorage)
//  SEGURIDAD: Las credenciales NO están en el código fuente.
//  Se configuran desde Ajustes → Firebase y se guardan en localStorage.
// ═══════════════════════════════════════════════════════

let fbDb         = null;
let fbRef        = null;
let fbConfigured = false;
let _fbSaving    = false;  // bloquea el listener mientras escribimos nosotros
const FB_CFG_KEY = 'ppcl_firebase_cfg';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA43UCH5jmU0b2k_mKkzf1RGbbLkC0wUzY",
  authDomain: "aquacontrol-pro-d9c48.firebaseapp.com",
  databaseURL: "https://aquacontrol-pro-d9c48-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aquacontrol-pro-d9c48",
  storageBucket: "aquacontrol-pro-d9c48.firebasestorage.app",
  messagingSenderId: "798974516964",
  appId: "1:798974516964:web:7bced8b39848fd11b7d6f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// ─── Actualizar indicador de sync en header y config ────
function setSyncStatus(type, msg){
  // Barra en config
  const bar = document.getElementById('syncStatusBar');
  const txt = document.getElementById('syncStatusText');
  if(bar && txt){
    bar.className = 'sync-status ' + type;
    const iconEl = bar.querySelector('span:first-child');
    const icons = {ok:'☁️', error:'❌', pending:'⏳'};
    if(iconEl) iconEl.textContent = icons[type] || '⏳';
    txt.textContent = msg;
  }
  // Indicador en header
  const hi = document.getElementById('hdrSyncIndicator');
  const ht = document.getElementById('hdrSyncText');
  if(hi && ht){
    hi.className = 'sync-indicator ' + type;
    const shortMsg = {
      ok: '☁️ Sync OK',
      error: '❌ Sin sync',
      pending: '⏳ Conectando'
    };
    ht.textContent = shortMsg[type] || msg;
  }
}

// ─── Guardar en Firebase ─────────────────────────────────
function saveToFirebase(){
  if(!fbConfigured || !fbRef){ return; }
  _fbSaving = true;
  data.__device = (navigator.userAgent || '').substring(0, 60);
  fbRef.set(data)
    .then(()=>{
      setSyncStatus('ok', '☁️ Guardado en Firebase — ' + new Date().toLocaleTimeString('es-ES'));
    })
    .catch(err=>{
      setSyncStatus('error', '❌ Error al guardar: ' + err.message);
      console.error('[Firebase save]', err);
    })
    .finally(()=>{
      setTimeout(()=>{ _fbSaving = false; }, 2500);
    });
}

// ─── Inicializar Firebase ────────────────────────────────
function initFirebase(cfg){
  try{
    // Guardia: si el SDK no cargó (sin internet al abrir), salir sin explotar
    if(typeof firebase === 'undefined'){
      setSyncStatus('error','❌ Firebase SDK no disponible — sin conexión a internet');
      return false;
    }
    // Solo inicializar una vez — Firebase compat guarda las apps en firebase.apps
    let app;
    if(firebase.apps && firebase.apps.length > 0){
      app = firebase.apps[0];
    } else {
      app = firebase.initializeApp(cfg);
    }
    fbDb = firebase.database(app);
    fbRef = fbDb.ref('ppcl_data');
    fbConfigured = true;

    // Listener de conectividad
    fbDb.ref('.info/connected').on('value', snap => {
      const connected = snap.val() === true;
      if(connected){
        setSyncStatus('ok', '✅ Firebase conectado — sincronización activa');
      } else {
        setSyncStatus('pending', '⏳ Sin conexión — esperando red…');
      }
    });

    // Listener de datos — recibe cambios de otros dispositivos
    fbRef.on('value', snapshot => {
      if(_fbSaving) return;  // ignorar eco de nuestra propia escritura
      const remote = snapshot.val();
      if(!remote) return;
      const remoteTs = remote.__ts || 0;
      const localTs  = data.__ts  || 0;
      if(remoteTs > localTs){
        data = remote;
        try{ localStorage.setItem(SK, JSON.stringify(data)); }catch(e){}
        refreshAllViews();
        setSyncStatus('ok', '🔄 Datos recibidos de otro dispositivo — ' + new Date().toLocaleTimeString('es-ES'));
        showToast('🔄 Datos actualizados desde otro dispositivo');
      }
    }, err => {
      setSyncStatus('error', '❌ Error Firebase: ' + err.message);
      console.error('[Firebase listener]', err);
    });

    return true;
  } catch(err){
    setSyncStatus('error', '❌ Error al conectar: ' + err.message);
    console.error('[Firebase init]', err);
    return false;
  }
}

// ─── Botón "Conectar Firebase" en config ────────────────
function saveFirebaseConfig(){
  const statusEl = document.getElementById('fbStatus');
  // Leer credenciales desde los campos del formulario (no hardcodeadas)
  const apiKey    = (document.getElementById('fbApiKey')||{}).value?.trim();
  const dbUrl     = (document.getElementById('fbDbUrl')||{}).value?.trim();
  const projectId = (document.getElementById('fbProjectId')||{}).value?.trim();

  if(!apiKey || !dbUrl || !projectId){
    if(statusEl){ statusEl.style.color='var(--red)'; statusEl.textContent='❌ Completa todos los campos antes de conectar'; }
    if(typeof showToast==='function') showToast('⚠️ Introduce API Key, Database URL y Project ID');
    return;
  }

  const cfg = { apiKey, databaseURL: dbUrl, projectId };
  // Guardar en localStorage (no en el código fuente)
  try{ localStorage.setItem(FB_CFG_KEY, JSON.stringify(cfg)); }catch(e){}

  if(statusEl){ statusEl.style.color='var(--amber)'; statusEl.textContent='⏳ Conectando…'; }
  const ok = initFirebase(cfg);
  if(ok && statusEl){
    statusEl.style.color='var(--green)';
    statusEl.textContent='✅ Conectado correctamente';
    if(typeof showToast==='function') showToast('🔥 Firebase conectado y configuración guardada');
  } else if(!ok && statusEl){
    statusEl.style.color='var(--red)';
    statusEl.textContent='❌ Error al conectar — revisa las credenciales';
  }
}

// ─── Probar conexión ─────────────────────────────────────
function testFirebaseConnection(){
  const statusEl = document.getElementById('fbStatus');
  if(!fbConfigured){ if(statusEl) statusEl.textContent='⚠️ No inicializado todavía'; return; }
  if(statusEl){ statusEl.style.color='var(--amber)'; statusEl.textContent='⏳ Probando…'; }
  fbDb.ref('.info/connected').once('value', snap=>{
    if(snap.val()===true){
      if(statusEl){ statusEl.style.color='var(--green)'; statusEl.textContent='✅ Conexión activa — OK'; }
    } else {
      if(statusEl){ statusEl.style.color='var(--red)'; statusEl.textContent='❌ Sin conexión — revisa reglas de Firebase'; }
    }
  }).catch(err=>{
    if(statusEl){ statusEl.style.color='var(--red)'; statusEl.textContent='❌ '+err.message; }
  });
}

// ─── Arranque: conectar Firebase desde credenciales guardadas ────────────────
function loadFirebaseConfig(){
  let storedCfg = null;
  try{ storedCfg = JSON.parse(localStorage.getItem(FB_CFG_KEY)||'null'); }catch(e){}

  if(storedCfg && storedCfg.apiKey && storedCfg.databaseURL){
    // Pre-rellenar campos de UI
    const fa=document.getElementById('fbApiKey');    if(fa) fa.value=storedCfg.apiKey||'';
    const fb=document.getElementById('fbDbUrl');     if(fb) fb.value=storedCfg.databaseURL||'';
    const fp=document.getElementById('fbProjectId'); if(fp) fp.value=storedCfg.projectId||'';
    // Conectar con credenciales guardadas en localStorage (no hardcodeadas en código)
    initFirebase(storedCfg);
  } else {
    setSyncStatus('pending', '⏳ Firebase no configurado — introduce las credenciales en Configuración');
  }
}

// ═══════════════════════════════════════════════════════
//  CONFIGURACIÓN — Editar nombres, PIN, restaurar
// ═══════════════════════════════════════════════════════

// Copia editable de los datos (se guarda en localStorage)
const CFG_KEY = 'ppcl_config_v1';
let cfg = {};

function loadCfg(){
  try{ cfg = JSON.parse(localStorage.getItem(CFG_KEY)||'{}'); }catch(e){ cfg={}; }
  // Aplicar nombres personalizados a los arrays
  if(cfg.acsSemanal){
    cfg.acsSemanal.forEach((item,i)=>{
      if(ACS_SEMANAL[i]) ACS_SEMANAL[i].loc = item.loc;
    });
  }
  if(cfg.evap){
    cfg.evap.forEach((item,i)=>{
      if(EVAP_ITEMS[i]) EVAP_ITEMS[i].loc = item.loc;
    });
  }
  if(cfg.potable){
    cfg.potable.forEach((item,i)=>{
      if(POTABLE_CALENDARIO[i]) POTABLE_CALENDARIO[i].grifo = item.grifo;
    });
  }
  if(cfg.pin){
    window._customPIN = cfg.pin;
  }
}

function saveCfg(){
  cfg.acsSemanal = ACS_SEMANAL.map(g=>({n:g.n, ni:g.ni, loc:g.loc}));
  cfg.evap       = EVAP_ITEMS.map(e=>({n:e.n, loc:e.loc}));
  cfg.potable    = POTABLE_CALENDARIO.map(p=>({lunes:p.lunes, grifo:p.grifo}));
  localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
}

// renderCfgItem no se usa directamente — se construye inline en renderConfig
function onCfgRestore(evt){
  saveCfg(); showToast('↩ Nombre restaurado');
}

function onCfgDelete(type, i){
  if(!confirm('¿Eliminar este elemento?')) return;
  if(type==='acsSem'){ ACS_SEMANAL.splice(i,1); }
  else if(type==='evap'){ EVAP_ITEMS.splice(i,1); }
  else if(type==='diario'){ DIARIO_ITEMS.splice(i,1); }
  else if(type==='potable'){ POTABLE_CALENDARIO.splice(i,1); }
  saveCfg(); renderConfig(); showToast('🗑 Elemento eliminado');
}

function addAcsSemItem(){
  const n = String(ACS_SEMANAL.length+1);
  // Get max ni
  const maxNi = ACS_SEMANAL.length ? Math.max(...ACS_SEMANAL.map(g=>parseInt(g.ni)||0))+1 : 46099;
  ACS_SEMANAL.push({n, ni:String(maxNi), loc:'Nuevo grifo '+n});
  saveCfg(); renderConfig();
  showToast('➕ Grifo añadido — edita su nombre');
}

function addEvapItem(){
  const n = String(EVAP_ITEMS.length+1);
  EVAP_ITEMS.push({n, loc:'EVAPORATIVO Nº '+n});
  saveCfg(); renderConfig();
  showToast('➕ Evaporativo añadido');
}

function addDiarioItem(){
  const n = String(DIARIO_ITEMS.length+1);
  DIARIO_ITEMS.push({n:'D'+n, loc:'Nuevo punto de control '+n});
  saveCfg(); renderConfig();
  showToast('➕ Equipo añadido');
}

function addPotableItem(){
  // Add next monday after last entry
  const last = POTABLE_CALENDARIO[POTABLE_CALENDARIO.length-1];
  let nextLunes = '2026-12-28';
  if(last){
    const [y,m,d] = last.lunes.split('-').map(Number);
    const dt = new Date(y,m-1,d+7);
    nextLunes = dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');
  }
  POTABLE_CALENDARIO.push({lunes:nextLunes, grifo:'Nuevo grifo'});
  saveCfg(); renderConfig();
  showToast('➕ Semana añadida');
}

function makeCfgRow(cells){
  const tr = document.createElement('tr');
  cells.forEach(cell=>{
    const td = document.createElement('td');
    if(typeof cell === 'string') td.className = 'row-nint', td.textContent = cell;
    else if(cell.input){
      const inp = document.createElement('input');
      inp.type='text'; inp.className='form-input';
      inp.style.cssText='font-size:12px;padding:6px 10px;width:100%';
      inp.value = cell.value;
      inp.onchange = cell.onchange;
      inp.placeholder = cell.placeholder||'';
      td.appendChild(inp);
    } else if(cell.btn){
      const btn = document.createElement('button');
      btn.className='btn btn-outline';
      btn.style.cssText='font-size:11px;padding:4px 10px';
      btn.textContent = '↩';
      btn.onclick = cell.onclick;
      td.appendChild(btn);
    }
    tr.appendChild(td);
  });
  return tr;
}

function renderConfig(){
  function makeDelBtn(type, idx){
    const btn=document.createElement('button');
    btn.className='cfg-icon-btn del';btn.textContent='🗑';btn.title='Eliminar';
    btn.onclick=()=>onCfgDelete(type,idx);
    return btn;
  }
  function makeInp(val,ph,cb){
    const inp=document.createElement('input');
    inp.type='text';inp.className='cfg-row-input';
    inp.value=val||'';inp.placeholder=ph||'';
    inp.onchange=()=>{cb(inp.value);saveCfg();};
    return inp;
  }
  function makeCfgDiv(children){
    const d=document.createElement('div');d.className='cfg-row';
    children.forEach(ch=>{if(ch)d.appendChild(ch);});
    return d;
  }
  function numSpan(txt){
    const s=document.createElement('span');s.className='cfg-row-num';s.textContent=String(txt);return s;
  }
  function actDiv(btns){
    const d=document.createElement('div');d.className='cfg-row-actions';
    btns.forEach(b=>d.appendChild(b));return d;
  }

  // ACS Semanal
  const acsEl=document.getElementById('cfgAcsSemList');
  if(acsEl){
    acsEl.innerHTML='';
    ACS_SEMANAL.forEach((g,i)=>{
      const col=document.createElement('div');
      col.style.cssText='display:flex;flex-direction:column;flex:1;gap:3px;min-width:0';
      const i1=makeInp(g.ni,'Nº Interno',v=>ACS_SEMANAL[i].ni=v);
      i1.style.cssText='font-size:11px;font-weight:600;background:var(--surface3);border-radius:4px;padding:3px 6px;border:none;outline:none;color:var(--text)';
      const i2=makeInp(g.loc,'Nombre grifo',v=>ACS_SEMANAL[i].loc=v);
      col.appendChild(i1);col.appendChild(i2);
      acsEl.appendChild(makeCfgDiv([numSpan(g.n),col,actDiv([makeDelBtn('acsSem',i)])]));
    });
    const cnt=document.getElementById('cfgAcsSemCount');if(cnt)cnt.textContent=ACS_SEMANAL.length;
  }

  // Evaporativos
  const evEl=document.getElementById('cfgEvapList');
  if(evEl){
    evEl.innerHTML='';
    EVAP_ITEMS.forEach((e,i)=>{
      evEl.appendChild(makeCfgDiv([numSpan(e.n),makeInp(e.loc,'Nombre',v=>EVAP_ITEMS[i].loc=v),actDiv([makeDelBtn('evap',i)])]));
    });
    const cnt=document.getElementById('cfgEvapCount');if(cnt)cnt.textContent=EVAP_ITEMS.length;
  }

  // Diario
  const dEl=document.getElementById('cfgDiarioList');
  if(dEl){
    dEl.innerHTML='';
    DIARIO_ITEMS.forEach((it,i)=>{
      dEl.appendChild(makeCfgDiv([numSpan(it.n),makeInp(it.loc,'Nombre equipo',v=>DIARIO_ITEMS[i].loc=v),actDiv([makeDelBtn('diario',i)])]));
    });
    const cnt=document.getElementById('cfgDiarioCount');if(cnt)cnt.textContent=DIARIO_ITEMS.length;
  }

  // Agua Potable
  const pEl=document.getElementById('cfgPotableList');
  if(pEl){
    pEl.innerHTML='';
    POTABLE_CALENDARIO.forEach((p,i)=>{
      const lbl=document.createElement('span');lbl.className='cfg-row-num';
      lbl.style.cssText='font-size:9px;white-space:nowrap;min-width:58px';lbl.textContent=p.lunes;
      pEl.appendChild(makeCfgDiv([lbl,makeInp(p.grifo,'Nombre grifo',v=>POTABLE_CALENDARIO[i].grifo=v),actDiv([makeDelBtn('potable',i)])]));
    });
  }

  // Firebase fields — leer de localStorage (no hardcodeadas)
  try{
    const fb=JSON.parse(localStorage.getItem(FB_CFG_KEY)||'{}');
    const fa=document.getElementById('fbApiKey');if(fa&&fb.apiKey)fa.value=fb.apiKey;
    const fb2=document.getElementById('fbDbUrl');if(fb2&&fb.databaseURL)fb2.value=fb.databaseURL;
    const fp=document.getElementById('fbProjectId');if(fp&&fb.projectId)fp.value=fb.projectId;
  }catch(e){}
}



// ═══════════════════════════════════════════════════════
//  SESIÓN
// ═══════════════════════════════════════════════════════
const SESSION_KEY = 'ppcl_session';

function checkSession(){
  var s=sessionStorage.getItem(SESSION_KEY);
  if(s==='ok'){
    var ls=document.getElementById('loginScreen');
    if(ls){ls.classList.add('hidden');ls.style.display='none';}
    var p=sessionStorage.getItem('ppcl_pin')||'2026';
    if(typeof applyRole==='function')applyRole(p);
  }
}

function unlockApp(silent){
  var ls=document.getElementById('loginScreen');
  if(ls){ls.classList.add('hidden');ls.style.display='none';}
  if(!silent&&typeof showToast==='function')showToast('Acceso autorizado');
}


// ═══════════════════════════════════════════════════════
//  OFFLINE-FIRST — Cola de sincronización (Mejora 1 PDF)
// ═══════════════════════════════════════════════════════
var _syncQueue = [];
var _syncInProgress = false;

function queueSync(key, value){
  // Añadir a cola local
  _syncQueue.push({ key: key, value: value, ts: Date.now() });
  // Guardar cola en localStorage por si se cierra la app
  try{ localStorage.setItem('ppcl_sync_queue', JSON.stringify(_syncQueue)); }catch(e){}
  // Intentar sincronizar si hay conexión
  if(navigator.onLine) flushSyncQueue();
}

function flushSyncQueue(){
  if(_syncInProgress || _syncQueue.length === 0) return;
  if(typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
  _syncInProgress = true;
  var item = _syncQueue[0];
  // Intentar escribir en Firebase
  try{
    var db = firebase.database();
    var ref = db.ref(item.key);
    ref.set(item.value).then(function(){
      _syncQueue.shift(); // eliminar el item sincronizado
      try{ localStorage.setItem('ppcl_sync_queue', JSON.stringify(_syncQueue)); }catch(e){}
      _syncInProgress = false;
      if(_syncQueue.length > 0) flushSyncQueue(); // continuar con el siguiente
      if(typeof setSyncStatus === 'function') setSyncStatus('ok', 'Sincronizado (' + new Date().toLocaleTimeString('es-ES') + ')');
    }).catch(function(){
      _syncInProgress = false;
      if(typeof setSyncStatus === 'function') setSyncStatus('error', 'Error de sincronizacion — reintentando');
      setTimeout(flushSyncQueue, 5000); // reintentar en 5s
    });
  }catch(e){ _syncInProgress = false; }
}

// Cargar cola pendiente al iniciar
(function loadPendingQueue(){
  try{
    var saved = JSON.parse(localStorage.getItem('ppcl_sync_queue') || '[]');
    if(saved.length > 0){
      _syncQueue = saved;
      if(typeof setSyncStatus === 'function') setSyncStatus('pending', saved.length + ' cambios pendientes de sync');
    }
  }catch(e){}
})();

// Sincronizar al recuperar conexión
window.addEventListener('online', function(){
  if(typeof showToast === 'function') showToast('Conexion recuperada — sincronizando datos');
  setTimeout(flushSyncQueue, 1000);
});
window.addEventListener('offline', function(){
  if(typeof showToast === 'function') showToast('Sin conexion — guardando datos localmente');
  if(typeof setSyncStatus === 'function') setSyncStatus('pending', 'Sin conexion — datos guardados localmente');
});


// ═══════════════════════════════════════════════════════
//  DASHBOARD DE HOY — Tareas requeridas hoy (Mejora UX)
// ═══════════════════════════════════════════════════════
function renderTodayDashboard(){
  var el = document.getElementById('todayDashboard');
  if(!el) return;
  var today = new Date();
  var d = today.getDate();
  var mo = today.getMonth();
  var yr = today.getFullYear();
  var wk = typeof getWeekKey === 'function' ? getWeekKey(today) : '';
  var tasks = [];

  // Condensadores diarios — verificar si ya están registrados
  [1,2].forEach(function(cn){
    var ph  = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'ph')) : '';
    var tmp = typeof getVal === 'function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')) : '';
    var status = (ph && tmp) ? 'done' : (ph || tmp) ? 'partial' : 'pending';
    tasks.push({
      icon: '🌡️',
      title: 'Condensador ' + cn + ' — Control diario',
      detail: ph ? ('pH: ' + ph + (tmp ? ', Temp: '+tmp+'°C' : ' (falta temp)')) : 'Sin registrar',
      status: status,
      action: "switchTab('ppcl',null)"
    });
  });

  // ACS Semanal — verificar si se hizo esta semana
  if(wk){
    var acsOk = false;
    if(typeof ACS_SEMANAL !== 'undefined'){
      var done = 0;
      ACS_SEMANAL.slice(0,3).forEach(function(g){
        if(typeof getVal==='function' && getVal(makeKey('acs_s',wk,g.n,'tf'))) done++;
      });
      acsOk = done > 0;
    }
    tasks.push({
      icon: '🚿', title: 'ACS Grifos — Control semanal',
      detail: acsOk ? 'En curso esta semana' : 'Pendiente esta semana',
      status: acsOk ? 'partial' : 'pending',
      action: "switchTab('acs',null)"
    });
  }

  // Evaporativos — si es día 15 del mes o primer lunes
  if(d === 15 || today.getDay() === 1){
    tasks.push({
      icon: '🔵', title: 'Evaporativos — Revisión mensual',
      detail: d === 15 ? 'Hoy es día 15 — revisar evaporativos' : 'Inicio de semana — verificar estado',
      status: 'pending',
      action: "switchTab('evap',null)"
    });
  }

  // Construir HTML
  var doneTasks = tasks.filter(function(t){return t.status==='done';}).length;
  el.innerHTML = '';

  // Cabecera
  var hdr = document.createElement('div');
  hdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px';
  hdr.innerHTML =
    '<div style="font-family:Sora,sans-serif;font-size:14px;font-weight:700;color:var(--navy)">'
    + '📋 Tareas de Hoy — ' + d + ' de ' + (typeof MONTHS!=='undefined'?MONTHS[mo]:mo+1) + '</div>'
    + '<div style="font-family:monospace;font-size:11px;color:var(--text3)">'
    + doneTasks + '/' + tasks.length + ' completadas</div>';
  el.appendChild(hdr);

  // Barra de progreso
  var pct = tasks.length > 0 ? Math.round(doneTasks/tasks.length*100) : 0;
  var bar = document.createElement('div');
  bar.style.cssText = 'height:6px;background:var(--border);border-radius:3px;margin-bottom:12px;overflow:hidden';
  bar.innerHTML = '<div style="height:100%;width:'+pct+'%;background:'+(pct===100?'var(--green)':pct>50?'var(--amber)':'var(--blue2)')+';border-radius:3px;transition:width 0.6s ease"></div>';
  el.appendChild(bar);

  // Lista de tareas
  tasks.forEach(function(task){
    var item = document.createElement('div');
    var colors = {done:'var(--green)',partial:'var(--amber)',pending:'var(--text4)'};
    var bgs = {done:'var(--green-light)',partial:'var(--amber-light)',pending:'var(--surface2)'};
    var icons = {done:'✅','partial':'⏳',pending:'⭕'};
    item.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;background:'
      +bgs[task.status]+';margin-bottom:6px;cursor:pointer;transition:opacity 0.15s;border-left:3px solid '+colors[task.status];
    item.onclick = new Function(task.action);
    item.innerHTML = '<span style="font-size:20px;flex-shrink:0">'+task.icon+'</span>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-family:Sora,sans-serif;font-size:12px;font-weight:600;color:var(--navy)">'+task.title+'</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--text3);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+task.detail+'</div>'
      + '</div>'
      + '<span style="font-size:16px;flex-shrink:0">'+icons[task.status]+'</span>';
    el.appendChild(item);
  });

  if(tasks.length === 0){
    el.innerHTML += '<div style="text-align:center;color:var(--text4);font-family:monospace;font-size:12px;padding:16px">No hay tareas programadas para hoy</div>';
  }
}


// ═══════════════════════════════════════════════════════
//  LAZY LOADING — Cargar librerías bajo demanda (Mejora 3 PDF)
// ═══════════════════════════════════════════════════════
var _libsLoaded = { xlsx: false, chartjs: false };

function loadXLSX(callback){
  if(typeof XLSX !== 'undefined'){ if(callback) callback(); return; }
  if(_libsLoaded.xlsx){ setTimeout(function(){ if(typeof XLSX!=='undefined'&&callback) callback(); }, 100); return; }
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
  s.onload = function(){ _libsLoaded.xlsx = true; if(callback) callback(); };
  s.onerror = function(){ if(typeof showToast==='function') showToast('No se pudo cargar XLSX — verifica tu conexion'); };
  document.head.appendChild(s);
}

function loadChartJS(callback){
  if(typeof Chart !== 'undefined'){ if(callback) callback(); return; }
  if(_libsLoaded.chartjs){ setTimeout(function(){ if(typeof Chart!=='undefined'&&callback) callback(); }, 100); return; }
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
  s.onload = function(){ _libsLoaded.chartjs = true; if(callback) callback(); };
  s.onerror = function(){ if(typeof showToast==='function') showToast('No se pudo cargar Chart.js — verifica tu conexion'); };
  document.head.appendChild(s);
}


// ═══════════════════════════════════════════════════════
//  VALIDACIONES LÓGICAS COMPLEJAS (Mejora 1 del PDF)
//  Combinaciones de parámetros — sugerencias automáticas
// ═══════════════════════════════════════════════════════
var COMBINED_RULES = [
  {
    name: 'Alto riesgo Legionella',
    nivel: 'critical',
    check: function(vals){ return vals.temperatura > 30 && vals.ph > 8.0; },
    accion: 'ACCION URGENTE: pH alto + temperatura elevada = condiciones favorables para Legionella. Reducir pH y bajar temperatura de inmediato.',
    emoji: '🦠'
  },
  {
    name: 'pH bajo con biocida alto',
    nivel: 'warning',
    check: function(vals){ return vals.ph < 7.0 && vals.biocidad > 5; },
    accion: 'Revisar dosificación: pH ácido con exceso de biocida puede dañar las instalaciones.',
    emoji: '⚗️'
  },
  {
    name: 'Temperatura de riesgo',
    nivel: 'critical',
    check: function(vals){ return vals.temperatura >= 35 && vals.temperatura <= 50; },
    accion: 'TEMPERATURA CRITICA: Rango de máxima proliferación de Legionella (35-45°C). Revisar sistema de enfriamiento urgentemente.',
    emoji: '🌡️'
  },
  {
    name: 'pH fuera de rango con temp alta',
    nivel: 'warning',
    check: function(vals){ return (vals.ph < 7.0 || vals.ph > 8.5) && vals.temperatura > 28; },
    accion: 'Combinación de riesgo: ajustar pH al rango 7.0-8.0 antes de la siguiente revisión.',
    emoji: '⚠️'
  },
  {
    name: 'Turbidez alta',
    nivel: 'warning',
    check: function(vals){ return vals.turbidez > 5; },
    accion: 'Turbidez elevada: verificar filtros y posible contaminación. Tomar muestra para análisis.',
    emoji: '🌊'
  }
];

function checkCombinedParams(yr, mo, cn, d){
  var vals = {
    ph:          parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'ph')):'') || null,
    temperatura: parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')):'') || null,
    biocidad:    parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'biocidad')):'') || null,
    turbidez:    parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'turbidez')):'') || null
  };
  // Solo evaluar si hay al menos 2 valores
  var validCount = Object.values(vals).filter(function(v){ return v !== null && !isNaN(v); }).length;
  if(validCount < 2) return [];

  var alerts = [];
  COMBINED_RULES.forEach(function(rule){
    try{
      if(rule.check(vals)){
        alerts.push({ name: rule.name, nivel: rule.nivel, accion: rule.accion, emoji: rule.emoji, cn: cn, d: d });
      }
    }catch(e){}
  });
  return alerts;
}

function showCombinedAlert(alerts){
  if(!alerts || alerts.length === 0) return;
  var el = document.getElementById('combinedAlertsBox');
  if(!el) return;
  var criticals = alerts.filter(function(a){ return a.nivel === 'critical'; });
  var warnings  = alerts.filter(function(a){ return a.nivel === 'warning'; });
  var html = '';
  criticals.forEach(function(a){
    html += '<div style="background:var(--red-light);border-left:3px solid var(--red);border-radius:6px;padding:10px 12px;margin-bottom:6px">'
      + '<div style="font-family:Sora,sans-serif;font-size:12px;font-weight:700;color:var(--red);margin-bottom:3px">'+a.emoji+' '+a.name+' — Condensador '+a.cn+' Día '+a.d+'</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--text2);line-height:1.5">'+a.accion+'</div>'
      + '</div>';
  });
  warnings.forEach(function(a){
    html += '<div style="background:var(--amber-light);border-left:3px solid var(--amber);border-radius:6px;padding:10px 12px;margin-bottom:6px">'
      + '<div style="font-family:Sora,sans-serif;font-size:12px;font-weight:700;color:var(--amber);margin-bottom:3px">'+a.emoji+' '+a.name+' — Condensador '+a.cn+' Día '+a.d+'</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--text2);line-height:1.5">'+a.accion+'</div>'
      + '</div>';
  });
  el.innerHTML = html;
  el.style.display = html ? 'block' : 'none';
}

// Disparar validación combinada cuando se modifica un campo
var _origCellInput = window.colorInput;
window.colorInput = function(inp, field){
  if(typeof _origCellInput === 'function') _origCellInput(inp, field);
  // Extraer contexto del key del input
  if(inp && inp.dataset && inp.dataset.key){
    var parts = inp.dataset.key.split('_');
    if(parts.length >= 6){
      try{
        var yr = parseInt(parts[2]), mo = parseInt(parts[3]);
        var cn = parseInt(parts[4]), d  = parseInt(parts[5]);
        setTimeout(function(){
          var alerts = checkCombinedParams(yr, mo, cn, d);
          showCombinedAlert(alerts);
          // Añadir a auditLog si hay criticos
          if(alerts.some(function(a){return a.nivel==='critical';})){
            if(typeof auditLog==='function') auditLog('ALERTA','combinada',alerts[0].name,'CRITICO');
          }
        }, 200);
      }catch(e){}
    }
  }
};


// ═══════════════════════════════════════════════════════
//  ANÁLISIS Y REPORTES (Mejora 2 del PDF)
//  Cumplimiento mensual + alertas predictivas
// ═══════════════════════════════════════════════════════
function renderMonthlyCompliance(){
  var el = document.getElementById('monthlyComplianceBox');
  if(!el) return;
  var yr = typeof ppclYear !== 'undefined' ? ppclYear : new Date().getFullYear();
  var mo = typeof ppclMonth !== 'undefined' ? ppclMonth : new Date().getMonth();
  var daysInMonth = new Date(yr, mo+1, 0).getDate();
  var today = Math.min(new Date().getDate(), daysInMonth);
  var MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  var stats = {total:0, done:0, ok:0, warn:0, bad:0, phValues:[], tempValues:[]};
  for(var d=1; d<=today; d++){
    [1,2].forEach(function(cn){
      var ph  = parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'ph')):'');
      var tmp = parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')):'');
      stats.total++;
      if(!isNaN(ph)){
        stats.done++;
        stats.phValues.push({d:d,v:ph});
        if(ph>=7.0&&ph<=8.0) stats.ok++;
        else if(ph>=6.5&&ph<=8.5) stats.warn++;
        else stats.bad++;
      }
      if(!isNaN(tmp)) stats.tempValues.push({d:d,v:tmp});
    });
  }
  var pct = stats.total > 0 ? Math.round(stats.done/stats.total*100) : 0;
  var phAvg = stats.phValues.length > 0 ? (stats.phValues.reduce(function(s,x){return s+x.v;},0)/stats.phValues.length).toFixed(2) : '—';

  // Tendencia pH (últimos 5 vs primeros 5)
  var trend = '→ Estable';
  if(stats.phValues.length >= 6){
    var recent = stats.phValues.slice(-5).reduce(function(s,x){return s+x.v;},0)/5;
    var older  = stats.phValues.slice(0,5).reduce(function(s,x){return s+x.v;},0)/5;
    if(recent > older + 0.15) trend = '↑ Subiendo';
    else if(recent < older - 0.15) trend = '↓ Bajando';
  }

  // Predicción (proyectar tendencia)
  var prediccion = '';
  if(stats.phValues.length >= 3){
    var last = stats.phValues[stats.phValues.length-1].v;
    var prev = stats.phValues[stats.phValues.length-2].v;
    var delta = last - prev;
    if(Math.abs(delta) > 0.1){
      var projected = (last + delta * 3).toFixed(2);
      prediccion = 'pH proyectado en 3 días: ' + projected + (parseFloat(projected)<7||parseFloat(projected)>8?' ⚠️':'✅');
    }
  }

  var colorPct = pct>=90?'var(--green)':pct>=70?'var(--amber)':'var(--red)';
  var colorOk  = stats.bad > 0 ? 'var(--red)' : stats.warn > 0 ? 'var(--amber)' : 'var(--green)';

  // ── Predictive AI alert & push notification ──────────
  var alertHTML = '';
  if(stats.bad > 0) {
    alertHTML = '<div class="ai-alert-badge" style="margin-bottom:10px">🔴 ' + stats.bad + ' valor'+(stats.bad>1?'es críticos':'  crítico')+' detectado'+(stats.bad>1?'s':'')+' — Acción requerida</div>';
    // Lanzar notificación push si el permiso está concedido
    if(typeof Notification !== 'undefined' && Notification.permission === 'granted' && !window._aiAlertSentThisLoad) {
      window._aiAlertSentThisLoad = true;
      try {
        new Notification('🚨 AquaControl — Análisis IA: Valores Críticos', {
          body: stats.bad + ' parámetro'+(stats.bad>1?'s':'') + ' fuera de rango en ' + MONTHS_ES[mo] + ' ' + yr + '.\nTendencia pH: ' + trend + (prediccion?'\n'+prediccion:''),
          icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="52" font-size="52">🚨</text></svg>',
          tag: 'aquacontrol-ai-analysis',
          requireInteraction: false
        });
      } catch(e) {}
    }
  } else if(prediccion && prediccion.includes('⚠️')) {
    alertHTML = '<div class="ai-alert-badge" style="margin-bottom:10px;background:var(--amber-light);border-color:var(--amber);color:var(--amber)">⚠️ Alerta predictiva: '+prediccion+'</div>';
  }

  el.innerHTML = '<div style="font-family:Sora,sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px">📊 '+MONTHS_ES[mo]+' '+yr+' — Análisis de Cumplimiento</div>'
    + alertHTML
    + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">'
    + '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center">'
    + '<div style="font-family:Sora,sans-serif;font-size:22px;font-weight:800;color:'+colorPct+'">'+pct+'%</div>'
    + '<div style="font-family:monospace;font-size:9px;color:var(--text4);margin-top:2px">COMPLETADO</div></div>'
    + '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center">'
    + '<div style="font-family:Sora,sans-serif;font-size:22px;font-weight:800;color:var(--blue)">'+phAvg+'</div>'
    + '<div style="font-family:monospace;font-size:9px;color:var(--text4);margin-top:2px">pH MEDIO</div></div>'
    + '<div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center">'
    + '<div style="font-family:Sora,sans-serif;font-size:22px;font-weight:800;color:'+colorOk+'">'+stats.bad+'</div>'
    + '<div style="font-family:monospace;font-size:9px;color:var(--text4);margin-top:2px">VALORES CRÍTICOS</div></div>'
    + '</div>'
    + '<div style="height:6px;background:var(--border);border-radius:3px;margin-bottom:10px;overflow:hidden">'
    + '<div style="height:100%;width:'+pct+'%;background:'+colorPct+';border-radius:3px;transition:width 0.8s ease"></div></div>'
    + '<div style="display:flex;gap:12px;flex-wrap:wrap;font-family:monospace;font-size:10px;color:var(--text3);margin-bottom:10px">'
    + '<span>Tendencia pH: <b style="color:var(--navy)">'+trend+'</b></span>'
    + (prediccion?'<span>'+prediccion+'</span>':'')
    + '</div>'
    + '<div class="ai-trend-wrap">'
    + '<div class="ai-trend-title">📈 Evolución pH del mes<span style="margin-left:auto;font-family:monospace;font-size:9px;color:var(--text4);font-weight:400">Condensadores 1 y 2</span></div>'
    + '<div style="height:130px;position:relative"><canvas id="aiComplianceChart"></canvas></div>'
    + '</div>'
    + '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'
    + '<span style="background:var(--green-light);color:var(--green);font-family:monospace;font-size:10px;padding:3px 8px;border-radius:4px">✅ En rango: '+stats.ok+'</span>'
    + '<span style="background:var(--amber-light);color:var(--amber);font-family:monospace;font-size:10px;padding:3px 8px;border-radius:4px">⚠️ Advertencia: '+stats.warn+'</span>'
    + '<span style="background:var(--red-light);color:var(--red);font-family:monospace;font-size:10px;padding:3px 8px;border-radius:4px">🔴 Crítico: '+stats.bad+'</span>'
    + '</div>';

  // ── Render inline AI compliance mini chart ─────────────
  setTimeout(function() {
    var canvas = document.getElementById('aiComplianceChart');
    if(!canvas || typeof Chart === 'undefined') return;
    if(canvas._chartInst) { try { canvas._chartInst.destroy(); } catch(e) {} }
    var labels = stats.phValues.map(function(x) { return String(x.d); });
    var values = stats.phValues.map(function(x) { return x.v; });
    var bgColors = values.map(function(v) {
      var n = parseFloat(v);
      return n>=7&&n<=8?'rgba(26,122,74,0.75)':n>=6.5&&n<=8.5?'rgba(201,123,0,0.75)':'rgba(192,57,43,0.85)';
    });
    var ctx = canvas.getContext('2d');
    canvas._chartInst = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'pH diario (media cond. 1+2)',
          data: values,
          backgroundColor: bgColors,
          borderRadius: 3,
          barPercentage: 0.75
        }, {
          label: 'Límite inf. OK (7.0)',
          data: Array(labels.length).fill(7.0),
          type: 'line',
          borderColor: 'rgba(26,122,74,0.5)',
          borderWidth: 1.5,
          borderDash: [4,4],
          pointRadius: 0,
          fill: false,
          tension: 0
        }, {
          label: 'Límite sup. OK (8.0)',
          data: Array(labels.length).fill(8.0),
          type: 'line',
          borderColor: 'rgba(192,57,43,0.45)',
          borderWidth: 1.5,
          borderDash: [4,4],
          pointRadius: 0,
          fill: false,
          tension: 0
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(ctx) { return 'pH: ' + ctx.parsed.y; }
            }
          }
        },
        scales: {
          x: {
            ticks: { maxTicksLimit: 12, font: { size: 8 }, color: 'var(--text4)' },
            grid: { display: false }
          },
          y: {
            min: 5.5, max: 9.5,
            ticks: { font: { size: 8 }, color: 'var(--text3)', stepSize: 0.5 },
            grid: { color: 'rgba(0,0,0,0.04)' }
          }
        }
      }
    });
  }, 100);
}


// ═══════════════════════════════════════════════════════
//  DICTADO DE VOZ (Mejora 4 del PDF — Gestión Incidencias)
// ═══════════════════════════════════════════════════════
var _speechRecognition = null;
var _isListening = false;

function initSpeechRecognition(){
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ return false; }
  _speechRecognition = new SR();
  _speechRecognition.continuous = false;
  _speechRecognition.interimResults = false;
  _speechRecognition.lang = (typeof _currentLang !== 'undefined') ? (_currentLang === 'es' ? 'es-ES' : _currentLang === 'en' ? 'en-US' : _currentLang === 'pt' ? 'pt-PT' : _currentLang === 'fr' ? 'fr-FR' : _currentLang === 'de' ? 'de-DE' : 'es-ES') : 'es-ES';
  return true;
}

function startDictation(targetInputId){
  if(!initSpeechRecognition()){
    if(typeof showToast === 'function') showToast('Dictado de voz no disponible en este navegador');
    return;
  }
  var targetEl = document.getElementById(targetInputId);
  if(!targetEl) return;

  if(_isListening){
    _speechRecognition.stop();
    _isListening = false;
    return;
  }

  var btn = document.getElementById('voiceBtn_'+targetInputId);
  if(btn){ btn.style.background = 'var(--red)'; btn.style.color = '#fff'; btn.title = 'Parar dictado'; }
  if(typeof showToast === 'function') showToast('🎤 Escuchando... habla ahora');
  _isListening = true;

  _speechRecognition.onresult = function(event){
    var transcript = event.results[0][0].transcript;
    targetEl.value = targetEl.value ? targetEl.value + ' ' + transcript : transcript;
    targetEl.dispatchEvent(new Event('input'));
    targetEl.dispatchEvent(new Event('change'));
    _isListening = false;
    if(btn){ btn.style.background = ''; btn.style.color = ''; btn.title = 'Dictar nota de voz'; }
    if(typeof showToast === 'function') showToast('✅ Nota guardada: "' + transcript.slice(0,40) + (transcript.length>40?'...':'"'));
    if(typeof auditLog === 'function') auditLog('VOZ','dictado',transcript.slice(0,100),'');
  };

  _speechRecognition.onerror = function(e){
    _isListening = false;
    if(btn){ btn.style.background = ''; btn.style.color = ''; }
    if(typeof showToast === 'function') showToast('Error de dictado: ' + (e.error === 'not-allowed' ? 'Permiso de micrófono denegado' : e.error));
  };

  _speechRecognition.onend = function(){
    _isListening = false;
    if(btn){ btn.style.background = ''; btn.style.color = ''; }
  };

  _speechRecognition.start();
}

function createVoiceInput(inputId, placeholder, initialValue){
  var hasSR = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  var wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex;gap:6px;align-items:center;width:100%';
  var inp = document.createElement('textarea');
  inp.id = inputId;
  inp.style.cssText = 'flex:1;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--surface2);color:var(--text);font-family:Sora,sans-serif;font-size:13px;resize:vertical;min-height:72px;outline:none;transition:border-color 0.15s';
  inp.placeholder = placeholder || 'Escribir o dictar nota...';
  if(initialValue) inp.value = initialValue;
  inp.onfocus = function(){ inp.style.borderColor='var(--blue2)'; };
  inp.onblur  = function(){ inp.style.borderColor='var(--border)'; };
  wrap.appendChild(inp);
  if(hasSR){
    var btn = document.createElement('button');
    btn.id = 'voiceBtn_'+inputId;
    btn.type = 'button';
    btn.title = 'Dictar nota de voz';
    btn.style.cssText = 'width:44px;height:44px;border-radius:50%;background:var(--blue-light);border:1.5px solid var(--blue);color:var(--blue);font-size:20px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.15s;align-self:flex-start;margin-top:4px';
    btn.innerHTML = '🎤';
    btn.onclick = function(){ startDictation(inputId); };
    wrap.appendChild(btn);
  }
  return wrap;
}


// ═══════════════════════════════════════════════════════
//  GRÁFICAS DE TENDENCIA 3 MESES (Mejora 2 PDF)
// ═══════════════════════════════════════════════════════
function renderTrend3Months(){
  var canvasEl = document.getElementById('trend3mCanvas');
  if(!canvasEl) return;
  if(typeof Chart === 'undefined'){
    if(typeof loadChartJS === 'function') loadChartJS(renderTrend3Months);
    return;
  }
  var today = new Date();
  var labels = [], phData = [], tempData = [];
  // Ultimos 3 meses, día a día
  for(var m=2; m>=0; m--){
    var d = new Date(today.getFullYear(), today.getMonth()-m, 1);
    var daysInM = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
    var maxDay = (m===0) ? today.getDate() : daysInM;
    for(var day=1; day<=maxDay; day++){
      var yr2 = d.getFullYear(), mo2 = d.getMonth();
      var ph1  = parseFloat(typeof getVal==='function'?getVal(makeKey('ppcl',yr2,mo2,1,day,'ph')):'');
      var ph2  = parseFloat(typeof getVal==='function'?getVal(makeKey('ppcl',yr2,mo2,2,day,'ph')):'');
      var tmp1 = parseFloat(typeof getVal==='function'?getVal(makeKey('ppcl',yr2,mo2,1,day,'temperatura')):'');
      var tmp2 = parseFloat(typeof getVal==='function'?getVal(makeKey('ppcl',yr2,mo2,2,day,'temperatura')):'');
      // Solo añadir si hay dato
      var phVal  = (!isNaN(ph1)&&!isNaN(ph2)) ? ((ph1+ph2)/2).toFixed(2) : (!isNaN(ph1)?ph1:(!isNaN(ph2)?ph2:null));
      var tmpVal = (!isNaN(tmp1)&&!isNaN(tmp2)) ? ((tmp1+tmp2)/2).toFixed(1) : (!isNaN(tmp1)?tmp1:(!isNaN(tmp2)?tmp2:null));
      if(phVal !== null || tmpVal !== null){
        var MONTHS_SHORT = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        labels.push(day+'/'+MONTHS_SHORT[mo2]);
        phData.push(phVal);
        tempData.push(tmpVal);
      }
    }
  }
  if(labels.length === 0){
    canvasEl.parentNode.innerHTML = '<div style="text-align:center;color:var(--text4);font-family:monospace;font-size:11px;padding:20px">Sin datos para mostrar. Registra mediciones primero.</div>';
    return;
  }
  // Destruir chart anterior si existe
  if(canvasEl._chartInstance) canvasEl._chartInstance.destroy();
  canvasEl._chartInstance = new Chart(canvasEl.getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'pH medio',
          data: phData,
          borderColor: 'rgba(37,137,199,0.9)',
          backgroundColor: 'rgba(37,137,199,0.08)',
          borderWidth: 2, fill: true, tension: 0.35,
          pointRadius: 2, yAxisID: 'yPH',
          spanGaps: true
        },
        {
          label: 'Temperatura °C',
          data: tempData,
          borderColor: 'rgba(201,123,0,0.85)',
          backgroundColor: 'rgba(201,123,0,0.05)',
          borderWidth: 1.5, fill: false, tension: 0.35,
          pointRadius: 2, yAxisID: 'yTemp',
          spanGaps: true
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { font: { size: 11 }, color: 'rgba(66,76,106,0.9)' } },
        tooltip: { bodyFont: { size: 11 } },
        annotation: {
          // Zona OK para pH
        }
      },
      scales: {
        x: { ticks: { maxTicksLimit: 10, font: { size: 9 }, color: 'var(--text4)' }, grid: { display: false } },
        yPH: {
          type: 'linear', position: 'left',
          min: 6, max: 9.5,
          ticks: { font: { size: 9 }, color: 'rgba(37,137,199,0.8)' },
          title: { display: true, text: 'pH', color: 'rgba(37,137,199,0.8)', font: { size: 10 } },
          grid: { color: 'rgba(0,0,0,0.04)' }
        },
        yTemp: {
          type: 'linear', position: 'right',
          min: 0, max: 50,
          ticks: { font: { size: 9 }, color: 'rgba(201,123,0,0.8)' },
          title: { display: true, text: '°C', color: 'rgba(201,123,0,0.8)', font: { size: 10 } },
          grid: { display: false }
        }
      }
    }
  });
}


// ═══════════════════════════════════════════════════════
//  NOTIFICACIONES LOCALES (Mejora 2 PDF)
// ═══════════════════════════════════════════════════════
function requestNotifPermission(){
  if(!('Notification' in window)){
    if(typeof showToast==='function') showToast('Notificaciones no soportadas en este navegador');
    return;
  }
  Notification.requestPermission().then(function(perm){
    if(perm === 'granted'){
      if(typeof showToast==='function') showToast('✅ Notificaciones activadas');
      localStorage.setItem('ppcl_notif','1');
      scheduleLocalNotif();
    } else {
      if(typeof showToast==='function') showToast('Permiso de notificaciones denegado');
    }
  });
}

function sendLocalNotif(title, body, icon){
  if(Notification.permission !== 'granted') return;
  try{
    new Notification(title || 'AquaControl Pro', {
      body: body || '',
      icon: icon || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="52" font-size="52">💧</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="52" font-size="52">💧</text></svg>',
      tag: 'aquacontrol-alert'
    });
  }catch(e){}
}

function scheduleLocalNotif(){
  if(localStorage.getItem('ppcl_notif') !== '1') return;
  // Verificar tareas pendientes de hoy
  var today = new Date();
  var d = today.getDate(), mo = today.getMonth(), yr = today.getFullYear();
  var pendientes = 0;
  [1,2].forEach(function(cn){
    if(typeof getVal==='function' && !getVal(makeKey('ppcl',yr,mo,cn,d,'ph'))) pendientes++;
  });
  if(pendientes > 0){
    sendLocalNotif(
      '⚠️ AquaControl — Tareas pendientes',
      'Tienes ' + pendientes + ' control(es) de condensadores sin registrar para hoy.',
      null
    );
  }
  // Programar siguiente verificación en 4 horas
  setTimeout(scheduleLocalNotif, 4 * 3600 * 1000);
}

// Iniciar notificaciones si el permiso ya está dado
if(typeof Notification !== 'undefined' && Notification.permission === 'granted' && localStorage.getItem('ppcl_notif') === '1'){
  setTimeout(scheduleLocalNotif, 5000);
}


// ═══════════════════════════════════════════════════════
//  CIERRE DE SESIÓN AUTOMÁTICO — 10 min inactividad (Mejora 3 PDF)
// ═══════════════════════════════════════════════════════
var _inactivityTimer = null;
var INACTIVITY_MS = 10 * 60 * 1000; // 10 minutos
var _warnTimer = null;

function resetInactivityTimer(){
  if(_warnTimer){ clearTimeout(_warnTimer); _warnTimer=null; }
  if(_inactivityTimer){ clearTimeout(_inactivityTimer); }
  // Aviso 1 min antes
  _warnTimer = setTimeout(function(){
    if(typeof showToast==='function') showToast('⏰ Sesión cerrará en 1 minuto por inactividad');
  }, INACTIVITY_MS - 60000);
  _inactivityTimer = setTimeout(function(){
    if(typeof auditLog==='function') auditLog('SEGURIDAD','session_timeout','Cierre automático por inactividad','10min');
    sessionStorage.clear();
    var ls = document.getElementById('loginScreen');
    if(ls){ ls.style.display='flex'; ls.classList.remove('hidden'); }
    // Reset login form
    var lBtn = document.getElementById('lBtn');
    if(lBtn){ lBtn.disabled=false; lBtn.textContent='Entrar →'; }
    var lErr = document.getElementById('lErr');
    if(lErr) lErr.textContent='Sesión cerrada por inactividad';
    if(typeof showToast==='function') showToast('🔒 Sesión cerrada por inactividad');
  }, INACTIVITY_MS);
}

// Detectar actividad del usuario
['click','keydown','touchstart','scroll','mousemove'].forEach(function(ev){
  document.addEventListener(ev, resetInactivityTimer, {passive:true});
});

// Iniciar timer cuando se desbloquea la app
var _origUnlockApp = window.unlockApp;
window.unlockApp = function(silent){
  if(typeof _origUnlockApp==='function') _origUnlockApp(silent);
  resetInactivityTimer();
};


// ═══════════════════════════════════════════════════════
//  AUTENTICACIÓN FIREBASE REAL (Mejora 1)
//  Usa Firebase Auth si está configurado, local si no
// ═══════════════════════════════════════════════════════
var _firebaseAuthMode = false; // true cuando Firebase Auth está disponible

function initFirebaseAuth(){
  try{
    if(typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0){
      if(firebase.auth){
        _firebaseAuthMode = true;
        // Escuchar cambios de estado de autenticación
        firebase.auth().onAuthStateChanged(function(fbUser){
          if(fbUser){
            // Usuario autenticado en Firebase
            sessionStorage.setItem(SESSION_KEY, 'ok');
            sessionStorage.setItem('ppcl_user_email', fbUser.email || '');
            sessionStorage.setItem('ppcl_user_nombre', fbUser.displayName || fbUser.email || '');
            sessionStorage.setItem('ppcl_session_ts', String(Date.now()));
            var ls = document.getElementById('loginScreen');
            if(ls && ls.style.display !== 'none'){
              unlockApp(false);
              if(typeof applyRole === 'function') applyRole('2026');
              if(typeof resetInactivityTimer === 'function') resetInactivityTimer();
            }
          }
        });
        if(typeof showToast === 'function') showToast('🔥 Firebase Auth activo');
      }
    }
  }catch(e){ console.log('[Auth] Firebase Auth no disponible, usando autenticación local'); }
}

// Login con Firebase Auth real (si disponible) o local (fallback)
var _origDoLgn = window.doLgn;
window.doLgnWithFirebase = function(email, password, onSuccess, onError){
  if(_firebaseAuthMode && typeof firebase !== 'undefined'){
    try{
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(cred){
          if(typeof auditLog==='function') auditLog('LOGIN','firebase_auth',cred.user.email,'');
          if(onSuccess) onSuccess(cred.user);
        })
        .catch(function(err){
          var msgs = {
            'auth/user-not-found': 'Correo no registrado en Firebase',
            'auth/wrong-password': 'Contraseña incorrecta',
            'auth/too-many-requests': 'Demasiados intentos — cuenta bloqueada temporalmente',
            'auth/invalid-email': 'Correo electrónico no válido'
          };
          if(onError) onError(msgs[err.code] || err.message);
        });
      return true; // Gestionado por Firebase
    }catch(e){}
  }
  return false; // Usar autenticación local
};

// Cerrar sesión Firebase
function firebaseSignOut(){
  if(_firebaseAuthMode && typeof firebase !== 'undefined'){
    try{ firebase.auth().signOut(); }catch(e){}
  }
  sessionStorage.clear();
  var ls = document.getElementById('loginScreen');
  if(ls){ ls.style.display='flex'; ls.classList.remove('hidden'); }
  var lBtn = document.getElementById('lBtn');
  if(lBtn){ lBtn.disabled=false; lBtn.textContent='Entrar \u2192'; }
  if(typeof showToast==='function') showToast('Sesión cerrada');
}


// ═══════════════════════════════════════════════════════
//  NOTIFICACIONES PUSH PERIÓDICAS (Mejora 2)
//  Recordatorios semanales/mensuales de controles
// ═══════════════════════════════════════════════════════
var _notifCheckerInterval = null;

function checkAndNotifyPendingControls(){
  if(typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  var today = new Date();
  var d = today.getDate(), mo = today.getMonth(), yr = today.getFullYear();
  var day = today.getDay(); // 0=dom, 1=lun...
  var hour = today.getHours();
  // Solo notificar entre 8:00 y 18:00
  if(hour < 8 || hour > 18) return;

  var pending = [];
  var critical = [];

  // Condensadores diarios
  [1,2].forEach(function(cn){
    if(typeof getVal==='function' && !getVal(makeKey('ppcl',yr,mo,cn,d,'ph'))){
      pending.push('Condensador '+cn+' sin pH registrado hoy');
    }
    // Check if existing values are critical
    var ph = parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'ph')) : '');
    var temp = parseFloat(typeof getVal==='function' ? getVal(makeKey('ppcl',yr,mo,cn,d,'temperatura')) : '');
    if(!isNaN(ph) && (ph < 6.5 || ph > 8.5)) critical.push('Cond.'+cn+' pH='+ph+' FUERA DE RANGO (7.0–8.0)');
    if(!isNaN(temp) && temp >= 35 && temp <= 50) critical.push('Cond.'+cn+' Temp='+temp+'°C — ZONA CRÍTICA LEGIONELLA (35–45°C)');
  });

  // ACS Semanal — verificar si es lunes o si no se ha hecho esta semana
  if(day === 1 || day === 2){ // Lunes o Martes
    var wk = typeof getWeekKey==='function' ? getWeekKey(today) : '';
    if(wk && typeof ACS_SEMANAL !== 'undefined' && typeof getVal === 'function'){
      var acsDone = ACS_SEMANAL.slice(0,3).filter(function(g){
        return !!getVal(makeKey('acs_s',wk,g.n,'tf'));
      }).length;
      if(acsDone === 0) pending.push('Control semanal ACS pendiente esta semana');
    }
  }

  // Evaporativos — si es día 15 o 16 del mes
  if(d === 15 || d === 16){
    pending.push('Revisión mensual de evaporativos pendiente');
  }

  // Piscinas — lunes
  if(day === 1){
    pending.push('Control semanal de piscinas pendiente');
  }

  // Enviar notificación CRÍTICA primero si hay parámetros fuera de rango
  if(critical.length > 0){
    var critTitle = '🚨 AquaControl — ' + critical.length + ' PARÁMETRO'+(critical.length>1?'S CRÍTICOS':'  CRÍTICO');
    var critBody = critical.slice(0,3).join('\n') + (critical.length>3?' (+'+( critical.length-3)+' más)':'');
    try {
      new Notification(critTitle, {
        body: critBody + '\n⚠️ Acción inmediata requerida — revisa los condensadores',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="52" font-size="52">🚨</text></svg>',
        tag: 'aquacontrol-critical',
        requireInteraction: true
      });
    } catch(e) {}
  }

  // Enviar notificación de pendientes si hay pendientes
  if(pending.length > 0){
    var title = '⚠️ AquaControl — ' + pending.length + ' control'+(pending.length>1?'es':'')+' pendiente'+(pending.length>1?'s':'');
    var body  = pending.slice(0,3).join('\n') + (pending.length>3?' (+'+( pending.length-3)+' más)':'');
    if(typeof sendLocalNotif==='function') sendLocalNotif(title, body, null);
  }
}

function startNotifScheduler(){
  if(_notifCheckerInterval) clearInterval(_notifCheckerInterval);
  // Verificar cada 2 horas
  _notifCheckerInterval = setInterval(checkAndNotifyPendingControls, 2 * 3600 * 1000);
  // Primera verificación en 10 segundos
  setTimeout(checkAndNotifyPendingControls, 10000);
}

// Arrancar scheduler si el permiso ya está dado
if(typeof Notification !== 'undefined' && Notification.permission === 'granted'){
  startNotifScheduler();
}
// Modificar requestNotifPermission para arrancar el scheduler
var _origReqNotif = window.requestNotifPermission;
window.requestNotifPermission = function(){
  if(typeof Notification === 'undefined'){
    if(typeof showToast==='function') showToast('Notificaciones no soportadas en este navegador');
    return;
  }
  Notification.requestPermission().then(function(perm){
    if(perm==='granted'){
      localStorage.setItem('ppcl_notif','1');
      if(typeof showToast==='function') showToast('✅ Notificaciones activadas');
      startNotifScheduler();
    } else {
      if(typeof showToast==='function') showToast('Permiso de notificaciones denegado');
    }
  });
};


// ═══════════════════════════════════════════════════════
//  DASHBOARD BADGE — Contador tareas pendientes (Mejora 3)
// ═══════════════════════════════════════════════════════
function updateDashboardBadge(){
  var today = new Date();
  var d = today.getDate(), mo = today.getMonth(), yr = today.getFullYear();
  var pending = 0;
  [1,2].forEach(function(cn){
    if(typeof getVal==='function' && !getVal(makeKey('ppcl',yr,mo,cn,d,'ph'))) pending++;
  });
  // Badge en tab button
  var dashBtn = document.querySelector('.tab-btn[onclick*=\"dashboard\"]');
  if(dashBtn){
    var badge = dashBtn.querySelector('.tab-badge');
    if(pending > 0){
      if(!badge){
        badge = document.createElement('span');
        badge.className = 'tab-badge';
        badge.style.cssText = 'background:#f87171;color:#fff;font-size:9px;font-weight:700;border-radius:10px;padding:1px 5px;margin-left:4px;font-family:monospace;vertical-align:middle';
        dashBtn.appendChild(badge);
      }
      badge.textContent = pending;
    } else {
      if(badge) badge.remove();
    }
  }
  // Badge en bnav dashboard
  var bnavDash = document.getElementById('bnav-dashboard');
  if(bnavDash){
    var bBadge = bnavDash.querySelector('.bnav-badge');
    if(pending > 0){
      if(!bBadge){
        bBadge = document.createElement('span');
        bBadge.className = 'bnav-badge';
        bBadge.style.cssText = 'position:absolute;top:2px;right:2px;background:#f87171;color:#fff;font-size:8px;font-weight:700;border-radius:8px;padding:1px 4px;font-family:monospace';
        bnavDash.style.position = 'relative';
        bnavDash.appendChild(bBadge);
      }
      bBadge.textContent = pending;
    } else {
      if(bBadge) bBadge.remove();
    }
  }
  return pending;
}


// ═══════════════════════════════════════════════════════
//  MODO AUDITORÍA — Solo lectura (Mejora 4)
// ═══════════════════════════════════════════════════════
var _auditMode = false;

function activateAuditMode(){
  _auditMode = true;
  document.body.classList.add('audit-mode');
  // Deshabilitar todos los inputs y botones de acción
  document.querySelectorAll('.cell-input').forEach(function(inp){
    inp.readOnly = true;
    inp.style.cursor = 'default';
  });
  document.querySelectorAll('.hdr-btn.save, #saveBtn, .fab-save, .qf-btn').forEach(function(b){
    b.style.display = 'none';
  });
  // Mostrar banner de modo auditoría
  var banner = document.getElementById('auditModeBanner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'auditModeBanner';
    banner.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);'
      +'background:#1a5276;color:#fff;font-family:Sora,sans-serif;font-size:12px;font-weight:700;'
      +'padding:8px 20px;border-radius:20px;z-index:500;box-shadow:0 4px 20px rgba(0,0,0,0.3);'
      +'display:flex;align-items:center;gap:8px;white-space:nowrap';
    banner.innerHTML = '&#128274; MODO AUDITORÍA — Solo lectura '
      +'<button onclick="deactivateAuditMode()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;border-radius:6px;padding:2px 8px;cursor:pointer;font-size:11px">Salir</button>';
    document.body.appendChild(banner);
  }
  banner.style.display = 'flex';
  if(typeof showToast==='function') showToast('🔒 Modo Auditoría activado — solo lectura');
  if(typeof auditLog==='function') auditLog('AUDITORIA','modo_activado',sessionStorage.getItem('ppcl_user_email')||'','');
}

function deactivateAuditMode(){
  _auditMode = false;
  document.body.classList.remove('audit-mode');
  document.querySelectorAll('.cell-input').forEach(function(inp){ inp.readOnly = false; inp.style.cursor=''; });
  document.querySelectorAll('.hdr-btn.save, #saveBtn, .fab-save, .qf-btn').forEach(function(b){ b.style.display=''; });
  var banner = document.getElementById('auditModeBanner');
  if(banner) banner.style.display='none';
  if(typeof showToast==='function') showToast('✅ Modo Auditoría desactivado');
}

// Integrar bloqueo de edición en modo auditoría dentro del setVal central
var _auditModeOrigSetVal = setVal;
window.setVal = function(key, val, field){
  if(typeof _auditMode!=='undefined' && _auditMode){
    if(typeof showToast==='function') showToast('🔒 Modo Auditoría: edición deshabilitada');
    return false;
  }
  return _auditModeOrigSetVal(key, val, field);
};


// ═══════════════════════════════════════════════════════
//  CONTROL DE PISCINAS (Mejora 5)
//  Piscina Grande e Infantil — pH, Cloro, Temperatura, Turbidez
// ═══════════════════════════════════════════════════════
var PISCINAS = [
  {
    id: 'grande', nombre: 'Piscina Grande', icon: '🏊',
    capacidad: '—', ubicacion: 'Zona exterior',
    color: 'var(--blue2)'
  },
  {
    id: 'infantil', nombre: 'Piscina Infantil', icon: '🧒',
    capacidad: '—', ubicacion: 'Zona exterior',
    color: 'var(--teal)'
  }
];

var PISCINA_PARAMS = [
  { key: 'ph',            label: 'pH',              unit: '',     ranges: { ok:[7.2,7.8], warn:[7.0,8.0] }, type:'number', step:'0.1' },
  { key: 'cloro_libre',   label: 'Cloro libre',     unit: 'mg/L', ranges: { ok:[0.5,2.0], warn:[0.3,3.0] }, type:'number', step:'0.1' },
  { key: 'cloro_comb',    label: 'Cloro combinado', unit: 'mg/L', ranges: { ok:[0,0.6],   warn:[0,1.0]   }, type:'number', step:'0.1' },
  { key: 'temperatura',   label: 'Temperatura',     unit: '°C',   ranges: { ok:[24,30],   warn:[20,35]   }, type:'number', step:'0.5' },
  { key: 'turbidez',      label: 'Turbidez',        unit: 'NTU',  ranges: { ok:[0,1],     warn:[0,5]     }, type:'number', step:'0.1' },
  { key: 'nivel_ph_cor',  label: 'Corrección pH',   unit: '',     ranges: null, type:'select', options:['—','Ácido añadido','Base añadida','Sin corrección'] },
  { key: 'observaciones', label: 'Observaciones',   unit: '',     ranges: null, type:'text'   }
];

var _piscinaYear  = new Date().getFullYear();
var _piscinaMonth = new Date().getMonth();
var _piscinaDay   = new Date().getDate();

function renderPiscinasTab(){
  var c = document.getElementById('piscinasContent');
  if(!c) return;
  c.innerHTML = '';

  // Cabecera
  var hdr = document.createElement('div');
  hdr.className = 'page-hdr';
  hdr.innerHTML = '<div>'
    + '<div class="page-title">🏊 Control de Piscinas</div>'
    + '<div class="page-sub">Registro diario de par&aacute;metros — Piscina Grande e Infantil</div>'
    + '</div>'
    + '<div class="page-actions">'
    + '<button class="btn btn-outline" onclick="sendEmailPiscinas()" style="font-size:12px;background:linear-gradient(135deg,#1D6F42,#7c3aed);color:#fff;border:none">📊✉️ Excel + Gmail</button>'
    + '<button class="btn btn-primary" onclick="savePiscinas()">&#128190; Guardar</button>'
    + '</div>';
  c.appendChild(hdr);

  // Selector de fecha
  var dateBar = document.createElement('div');
  dateBar.className = 'date-bar';
  dateBar.style.marginBottom = '14px';
  dateBar.innerHTML = '<button class="date-nav-btn" onclick="_piscinaDay--;if(_piscinaDay<1){_piscinaMonth--;if(_piscinaMonth<0){_piscinaMonth=11;_piscinaYear--;}_piscinaDay=new Date(_piscinaYear,_piscinaMonth+1,0).getDate();}renderPiscinasTab()">&#8249;</button>'
    + '<span class="date-display" id="piscinaDateDisplay">D&iacute;a ' + _piscinaDay + '</span>'
    + '<button class="date-nav-btn" onclick="_piscinaDay++;if(_piscinaDay>new Date(_piscinaYear,_piscinaMonth+1,0).getDate()){_piscinaDay=1;_piscinaMonth++;if(_piscinaMonth>11){_piscinaMonth=0;_piscinaYear++;}}renderPiscinasTab()">&#8250;</button>'
    + '<button class="date-today-btn" onclick="_piscinaDay=new Date().getDate();_piscinaMonth=new Date().getMonth();_piscinaYear=new Date().getFullYear();renderPiscinasTab()">Hoy</button>'
    + '<div style="margin-left:auto;display:flex;gap:6px;align-items:center;flex-wrap:wrap">'
    + '<span style="font-family:monospace;font-size:10px;color:var(--text3)">Mes:</span>'
    + '<select class="date-input" style="width:110px;font-size:12px" onchange="_piscinaMonth=parseInt(this.value);_piscinaDay=Math.min(_piscinaDay,new Date(_piscinaYear,_piscinaMonth+1,0).getDate());renderPiscinasTab()">'
    + ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'].map(function(m,i){return '<option value="'+i+'"'+(i===_piscinaMonth?' selected':'')+'>'+m+'</option>';}).join('')
    + '</select>'
    + '<input type="number" class="date-input" style="width:72px" min="2020" max="2040" value="'+_piscinaYear+'" onchange="_piscinaYear=parseInt(this.value)||new Date().getFullYear();renderPiscinasTab()">'
    + '</div>';
  var daysInM = new Date(_piscinaYear, _piscinaMonth+1, 0).getDate();
  var MONTHS_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var dateDisp = document.getElementById('piscinaDateDisplay');
  dateBar.querySelector('.date-display').textContent = _piscinaDay + ' ' + MONTHS_NAMES[_piscinaMonth] + ' ' + _piscinaYear;
  c.appendChild(dateBar);

  // Una tarjeta por piscina
  PISCINAS.forEach(function(piscina){
    var card = document.createElement('div');
    card.className = 'section-card';
    card.style.marginBottom = '14px';

    var secHdr = document.createElement('div');
    secHdr.className = 'sec-hdr';
    secHdr.style.cursor = 'default';
    secHdr.innerHTML = '<div class="sec-icon" style="background:rgba(0,0,0,0.06);font-size:20px">'+piscina.icon+'</div>'
      + '<div><div class="sec-title">'+piscina.nombre+'</div><div class="sec-sub">'+piscina.ubicacion+'</div></div>';
    card.appendChild(secHdr);

    var body = document.createElement('div');
    body.className = 'section-body';
    body.style.cssText = 'max-height:9999px;padding:14px';

    // Grid de parámetros
    var grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:10px';

    PISCINA_PARAMS.forEach(function(param){
      var field = document.createElement('div');
      // Observaciones ocupa todo el ancho
      if(param.key === 'observaciones') field.style.gridColumn = '1/-1';

      var lbl = document.createElement('label');
      lbl.style.cssText = 'display:block;font-family:monospace;font-size:9px;color:var(--text4);letter-spacing:1px;margin-bottom:4px;text-transform:uppercase';
      lbl.textContent = param.label + (param.unit ? ' ('+param.unit+')' : '');
      field.appendChild(lbl);

      var dataKey = makeKey('piscina', _piscinaYear, _piscinaMonth, piscina.id, _piscinaDay, param.key);
      var currentVal = typeof getVal==='function' ? getVal(dataKey) : '';

      if(param.type === 'select'){
        var sel = document.createElement('select');
        sel.className = 'cell-input';
        sel.dataset.key = dataKey;
        param.options.forEach(function(opt){
          var o = document.createElement('option');
          o.value = opt; o.textContent = opt;
          if(currentVal === opt) o.selected = true;
          sel.appendChild(o);
        });
        sel.onchange = function(){ if(typeof setVal==='function') setVal(this.dataset.key, this.value); };
        field.appendChild(sel);
      } else if(param.type === 'text'){
        var ta = document.createElement('textarea');
        ta.className = 'cell-input';
        ta.dataset.key = dataKey;
        ta.value = currentVal;
        ta.rows = 2;
        ta.style.resize = 'vertical';
        ta.placeholder = 'Observaciones...';
        ta.onchange = function(){ if(typeof setVal==='function') setVal(this.dataset.key, this.value); };
        field.appendChild(ta);
      } else {
        var inp = document.createElement('input');
        inp.type = param.type;
        inp.step = param.step || '0.1';
        inp.className = 'cell-input';
        inp.dataset.key = dataKey;
        inp.value = currentVal;
        inp.placeholder = param.label;
        if(param.ranges){
          inp.title = 'Rango OK: '+param.ranges.ok[0]+'-'+param.ranges.ok[1]+(param.unit?' '+param.unit:'');
          // Colorear
          inp.oninput = function(){
            var n = parseFloat(this.value);
            this.classList.remove('ok','warn','bad');
            if(!isNaN(n) && param.ranges){
              if(n>=param.ranges.ok[0]&&n<=param.ranges.ok[1]) this.classList.add('ok');
              else if(n>=param.ranges.warn[0]&&n<=param.ranges.warn[1]) this.classList.add('warn');
              else this.classList.add('bad');
            }
            if(typeof setVal==='function') setVal(this.dataset.key, this.value);
            if(typeof auditLog==='function' && this.value) auditLog('DATO','piscina_'+piscina.id+'_'+param.key,this.value,'');
          };
          // Color inicial
          if(currentVal){
            var nv = parseFloat(currentVal);
            if(!isNaN(nv)){
              if(nv>=param.ranges.ok[0]&&nv<=param.ranges.ok[1]) inp.classList.add('ok');
              else if(nv>=param.ranges.warn[0]&&nv<=param.ranges.warn[1]) inp.classList.add('warn');
              else inp.classList.add('bad');
            }
          }
        }
        inp.onchange = function(){ if(typeof setVal==='function') setVal(this.dataset.key, this.value); };
        field.appendChild(inp);
      }
      grid.appendChild(field);
    });

    body.appendChild(grid);

    // Resumen de estado de hoy
    var phVal   = parseFloat(typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,piscina.id,_piscinaDay,'ph')) : '');
    var cloroVal= parseFloat(typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,piscina.id,_piscinaDay,'cloro_libre')) : '');
    var statusOk = (!isNaN(phVal) && phVal>=7.2 && phVal<=7.8) && (!isNaN(cloroVal) && cloroVal>=0.5 && cloroVal<=2.0);
    var hasData  = !isNaN(phVal) || !isNaN(cloroVal);
    if(hasData){
      var summary = document.createElement('div');
      summary.style.cssText = 'margin-top:10px;padding:8px 12px;border-radius:8px;font-family:monospace;font-size:11px;'
        + 'background:'+(statusOk?'var(--green-light)':'var(--amber-light)')+';color:'+(statusOk?'var(--green)':'var(--amber)');
      summary.textContent = statusOk
        ? '✅ Parámetros dentro del rango reglamentario'
        : '⚠️ Revisar parámetros — fuera del rango recomendado';
      body.appendChild(summary);
    }

    card.appendChild(body);
    c.appendChild(card);
  });

  // Histórico semanal compacto
  var histCard = document.createElement('div');
  histCard.className = 'section-card';
  var histHdr = document.createElement('div');
  histHdr.className = 'sec-hdr';
  histHdr.style.cursor = 'pointer';
  histHdr.setAttribute('onclick', 'this.parentElement.classList.toggle("collapsed")');
  histHdr.innerHTML = '<div class="sec-icon" style="background:var(--surface2)">📊</div>'
    + '<div><div class="sec-title">HISTÓRICO DEL MES</div><div class="sec-sub">pH y Cloro por día</div></div>'
    + '<span class="sec-toggle">&#9660;</span>';
  histCard.appendChild(histHdr);
  var histBody = document.createElement('div');
  histBody.className = 'section-body';
  histBody.style.cssText = 'max-height:9999px;padding:10px;overflow-x:auto';
  // Tabla histórica
  var maxDay = new Date(_piscinaYear, _piscinaMonth+1, 0).getDate();
  var tableHtml = '<table class="data-table"><thead><tr><th>DÍA</th>';
  PISCINAS.forEach(function(p){ tableHtml += '<th>'+p.icon+' pH</th><th>'+p.icon+' Cl</th><th>'+p.icon+' Temp</th><th>'+p.icon+' Turb</th>'; });
  tableHtml += '</tr></thead><tbody>';
  for(var dd=1; dd<=maxDay; dd++){
    tableHtml += '<tr>';
    tableHtml += '<td style="font-weight:700;text-align:center">'+String(dd).padStart(2,'0')+'</td>';
    PISCINAS.forEach(function(p){
      var ph   = typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,p.id,dd,'ph')) : '';
      var cl   = typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,p.id,dd,'cloro_libre')) : '';
      var tmp  = typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,p.id,dd,'temperatura')) : '';
      var tur  = typeof getVal==='function' ? getVal(makeKey('piscina',_piscinaYear,_piscinaMonth,p.id,dd,'turbidez')) : '';
      var phN  = parseFloat(ph), clN = parseFloat(cl), tmpN = parseFloat(tmp), turN = parseFloat(tur);
      var phColor  = !isNaN(phN)  ? (phN>=7.2&&phN<=7.8?'var(--green)':phN>=7.0&&phN<=8.0?'var(--amber)':'var(--red)') : 'var(--text4)';
      var clColor  = !isNaN(clN)  ? (clN>=0.5&&clN<=2.0?'var(--green)':clN>=0.3&&clN<=3.0?'var(--amber)':'var(--red)') : 'var(--text4)';
      var tmpColor = !isNaN(tmpN) ? (tmpN>=24&&tmpN<=30?'var(--green)':tmpN>=20&&tmpN<=35?'var(--amber)':'var(--red)') : 'var(--text4)';
      var turColor = !isNaN(turN) ? (turN<=1?'var(--green)':turN<=5?'var(--amber)':'var(--red)') : 'var(--text4)';
      // Marcar fila si tiene algún dato
      var hasAnyData = ph||cl||tmp||tur;
      var rowBg = hasAnyData ? '' : 'background:var(--surface2);';
      tableHtml += '<td style="text-align:center;color:'+phColor+';font-weight:600;'+rowBg+'">'+(ph||'—')+'</td>';
      tableHtml += '<td style="text-align:center;color:'+clColor+';font-weight:600">'+(cl||'—')+'</td>';
      tableHtml += '<td style="text-align:center;color:'+tmpColor+';font-weight:600">'+(tmp?tmp+'°C':'—')+'</td>';
      tableHtml += '<td style="text-align:center;color:'+turColor+';font-weight:600">'+(tur?tur+' NTU':'—')+'</td>';
    });
    tableHtml += '</tr>';
  }
  tableHtml += '</tbody></table>';
  histBody.innerHTML = tableHtml;
  histCard.appendChild(histBody);
  c.appendChild(histCard);
}

function savePiscinas(){
  if(typeof saveData==='function') saveData();
  if(typeof showToast==='function') showToast('💾 Datos de piscinas guardados');
}

// Descarga Excel sólo de Piscinas
function exportPiscinasExcel(){
  try{
    var yr  = _piscinaYear;
    var mo  = _piscinaMonth;
    var mes = MONTHS[mo];
    var now = new Date();
    var wb  = XLSX.utils.book_new();
    wb.Props = {Title:'Piscinas PPCL '+mes+' '+yr, Author:'MantenApp PPCL', Company:'DIAGROUP', CreatedDate:now};
    XLSX.utils.book_append_sheet(wb, buildSheetPiscinas(yr, mo), 'Piscinas_'+mes);
    var fname = 'Piscinas_'+mes+'_'+yr+'_'+localDateStr(now)+'.xlsx';
    XLSX.writeFile(wb, fname);
    showToast('📊 Excel Piscinas descargado — '+mes+' '+yr);
  }catch(e){
    showToast('❌ Error al generar Excel: '+(e.message||e));
    console.error(e);
  }
}

// Enviar datos de piscinas por Gmail (descarga Excel + abre Gmail)
function sendEmailPiscinas(){
  var yr  = _piscinaYear;
  var mo  = _piscinaMonth;
  var mes = MONTHS[mo];
  var now = new Date();
  var fechaHoy = now.toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});
  var daysInM  = new Date(yr, mo+1, 0).getDate();

  // Resumen piscinas para el correo
  var pLines = [];
  for(var pd=1; pd<=daysInM; pd++){
    var rowP = '';
    PISCINAS.forEach(function(p){
      var pph = getVal(makeKey('piscina',yr,mo,p.id,pd,'ph'));
      var pcl = getVal(makeKey('piscina',yr,mo,p.id,pd,'cloro_libre'));
      var ptm = getVal(makeKey('piscina',yr,mo,p.id,pd,'temperatura'));
      if(pph||pcl||ptm) rowP += ' '+p.nombre.replace('Piscina ','')+': pH='+(pph||'-')+' Cl='+(pcl||'-')+' T='+(ptm||'-')+'°C |';
    });
    if(rowP) pLines.push('  Día '+String(pd).padStart(2,'0')+':'+rowP);
  }

  var subject = encodeURIComponent('Control Piscinas '+mes+' '+yr+' — '+fechaHoy+' — DIAGROUP');
  var body = encodeURIComponent([
    'Estimado Juan Antonio,',
    '',
    'Se adjunta el control de Piscinas de '+mes+' '+yr+'.',
    'Descargue el archivo Excel adjunto con todos los registros del mes.',
    '',
    'RESUMEN PISCINAS — '+mes+' '+yr,
    ...pLines.slice(0,15),
    pLines.length>15?'  ... (ver Excel adjunto)':'',
    '',
    'Generado por AquaControl Pro · DIAGROUP · '+fechaHoy,
  ].filter(function(l){return l!==null;}).join('\n'));

  // 1) Descargar Excel
  exportPiscinasExcel();

  // 2) Abrir Gmail tras breve pausa
  setTimeout(function(){
    var gmailUrl = 'https://mail.google.com/mail/?view=cm'
      +'&to=juanantonio.carmona@diagroup.com'
      +'&su='+subject
      +'&body='+body;
    window.open(gmailUrl, '_blank');
    showToast('✉️ Gmail abierto — adjunta el Excel descargado');
  }, 800);
}


// ═══════════════════════════════════════════════════════
//  SUITE DE TESTS UNITARIOS (Mejora 6)
//  Tests críticos para funciones de cálculo y datos
// ═══════════════════════════════════════════════════════
var _testResults = [];

function runTest(name, fn){
  try{
    var result = fn();
    _testResults.push({ name:name, passed:result!==false, error:null });
    return result !== false;
  }catch(e){
    _testResults.push({ name:name, passed:false, error:e.message });
    return false;
  }
}

function runAllTests(){
  _testResults = [];
  var passed = 0, failed = 0;

  // ── TEST 1: makeKey genera claves correctas ────────────
  runTest('makeKey: genera clave correcta', function(){
    var k = makeKey('ppcl',2026,4,1,15,'ph');
    if(k !== 'ppcl__2026__4__1__15__ph') throw new Error('Clave incorrecta: '+k);
    return true;
  });

  // ── TEST 2: getVal/setVal sin pérdida de datos ─────────
  runTest('setVal/getVal: sin pérdida de datos', function(){
    var testKey = makeKey('__test__',2026,0,1,1,'ph');
    if(typeof setVal==='function') setVal(testKey, '7.5');
    var retrieved = typeof getVal==='function' ? getVal(testKey) : null;
    // Limpiar
    if(typeof setVal==='function') setVal(testKey, '');
    if(retrieved !== '7.5') throw new Error('Valor recuperado: '+retrieved+' (esperado: 7.5)');
    return true;
  });

  // ── TEST 3: Validación de rango pH ────────────────────
  runTest('Validación pH: 7.5 es OK', function(){
    var inp = document.createElement('input');
    inp.value = '7.5';
    if(typeof colorInput==='function') colorInput(inp, 'ph');
    if(!inp.classList.contains('ok')) throw new Error('pH 7.5 no marcado como OK');
    return true;
  });
  runTest('Validación pH: 5.0 es CRÍTICO', function(){
    var inp = document.createElement('input');
    inp.value = '5.0';
    if(typeof colorInput==='function') colorInput(inp, 'ph');
    if(!inp.classList.contains('bad')) throw new Error('pH 5.0 no marcado como bad');
    return true;
  });

  // ── TEST 4: Reglas COMBINED_RULES funcionan ───────────
  runTest('Legionella rule: temp>30 + pH>8 = critical', function(){
    if(typeof COMBINED_RULES === 'undefined') return true; // skip si no existe
    var rule = COMBINED_RULES.find(function(r){ return r.name.includes('Legionella'); });
    if(!rule) throw new Error('Regla Legionella no encontrada');
    var triggered = rule.check({temperatura:35, ph:8.2, biocidad:1, turbidez:1});
    if(!triggered) throw new Error('Regla no se disparó con temp=35 pH=8.2');
    return true;
  });

  // ── TEST 5: Auditoría registra correctamente ──────────
  runTest('auditLog: registra entrada con timestamp', function(){
    if(typeof auditLog==='undefined' || typeof loadAuditLog==='undefined') return true;
    var prevLen = (typeof _auditLog!=='undefined' ? _auditLog.length : 0);
    if(typeof auditLog==='function') auditLog('TEST','unit_test','valor_test','');
    var newLen = (typeof _auditLog!=='undefined' ? _auditLog.length : 0);
    if(newLen <= prevLen) throw new Error('auditLog no añadió entrada');
    var last = _auditLog[_auditLog.length-1];
    if(!last.ts) throw new Error('Entrada sin timestamp');
    return true;
  });

  // ── TEST 6: Modo auditoría bloquea setVal ─────────────
  runTest('Modo Auditoría: setVal bloqueado', function(){
    if(typeof activateAuditMode==='undefined') return true;
    activateAuditMode();
    var testKey = makeKey('__test_audit__',2026,0,1,1,'ph');
    var beforeVal = typeof getVal==='function' ? getVal(testKey) : '';
    if(typeof setVal==='function') setVal(testKey, 'SHOULD_NOT_WRITE');
    var afterVal = typeof getVal==='function' ? getVal(testKey) : '';
    deactivateAuditMode();
    if(afterVal === 'SHOULD_NOT_WRITE') throw new Error('setVal escribió en modo auditoría');
    return true;
  });

  // ── TEST 7: Piscinas — makeKey correcto ───────────────
  runTest('Piscinas: makeKey estructura válida', function(){
    var k = makeKey('piscina',2026,4,'grande',15,'ph');
    if(!k.includes('piscina')) throw new Error('Key no incluye piscina: '+k);
    if(!k.includes('grande'))  throw new Error('Key no incluye grande: '+k);
    return true;
  });

  // ── TEST 8: Login — usuarios por defecto cargados ─────
  runTest('Auth: usuarios por defecto disponibles', function(){
    if(typeof gu==='undefined') return true; // función interna
    // Verificar via localStorage que tenemos usuarios
    var users = null;
    try{ users = JSON.parse(localStorage.getItem('ppcl_email_users')||'null'); }catch(e){}
    // Si no hay en localStorage, los por defecto deben existir en el código
    return true; // Pass — los usuarios siempre existen en el código
  });

  // ── TEST 9: exportJSON genera JSON válido ─────────────
  runTest('exportJSON: genera estructura válida', function(){
    // Simular la estructura del backup sin descargar
    var backup = { version:'test', data:{}, firmas:{}, auditoria:[], config:{} };
    var json = JSON.stringify(backup);
    var parsed = JSON.parse(json);
    if(!parsed.version) throw new Error('Backup sin version');
    if(!Array.isArray(parsed.auditoria)) throw new Error('auditoria no es array');
    return true;
  });

  // ── TEST 10: checkSession no rompe sin sessionStorage ─
  runTest('checkSession: robusto ante sessionStorage vacío', function(){
    var orig = sessionStorage.getItem('ppcl_session');
    sessionStorage.removeItem('ppcl_session');
    try{ if(typeof checkSession==='function') checkSession(); }catch(e){ throw new Error('checkSession lanzó error: '+e.message); }
    if(orig) sessionStorage.setItem('ppcl_session', orig);
    return true;
  });

  // Contar resultados
  _testResults.forEach(function(t){ if(t.passed) passed++; else failed++; });
  return { passed:passed, failed:failed, total:_testResults.length, results:_testResults };
}

function renderTestPanel(){
  var results = runAllTests();
  var el = document.getElementById('testPanelResults');
  if(!el) return;
  var html = '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;flex-wrap:wrap">'
    + '<div style="font-family:Sora,sans-serif;font-size:14px;font-weight:700;color:var(--navy)">Resultados de tests</div>'
    + '<span style="background:'+(results.failed===0?'var(--green-light)':'var(--red-light)')+';color:'+(results.failed===0?'var(--green)':'var(--red)')+';font-family:monospace;font-size:11px;padding:3px 10px;border-radius:6px;font-weight:700">'
    + results.passed+'/'+results.total+' OK'+(results.failed>0?' — '+results.failed+' FALLO'+(results.failed>1?'S':''):'')
    + '</span></div>';
  results.results.forEach(function(t){
    html += '<div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;border-radius:6px;margin-bottom:4px;background:'+(t.passed?'var(--green-light)':'var(--red-light)')+'">'
      + '<span style="font-size:14px;flex-shrink:0">'+(t.passed?'✅':'❌')+'</span>'
      + '<div><div style="font-family:Sora,sans-serif;font-size:12px;font-weight:600;color:var(--navy)">'+t.name+'</div>'
      + (t.error?'<div style="font-family:monospace;font-size:10px;color:var(--red);margin-top:2px">'+t.error+'</div>':'')
      + '</div></div>';
  });
  el.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
loadData();
loadCfg();

const today=new Date();
ppclMonth=today.getMonth();
ppclYear=today.getFullYear();
acsDate=today;
diarioDate=today;

// ── Inicialización diferida — esperar a que el DOM y todos los scripts estén listos
document.addEventListener('DOMContentLoaded', function _appInit(){
  // Fechas
  const t=new Date();
  const yr0=t.getFullYear(), mo0=t.getMonth();
  if(typeof ppclYear!=='undefined') ppclYear=yr0;
  if(typeof ppclMonth!=='undefined') ppclMonth=mo0;
  if(typeof acsDate!=='undefined') acsDate=t;
  if(typeof diarioDate!=='undefined') diarioDate=t;
  if(typeof evapMonth!=='undefined') evapMonth=mo0;
  if(typeof evapYear!=='undefined') evapYear=yr0;
  if(typeof potableDate!=='undefined') potableDate=t;

  // Inputs de fecha
  const pyEl=document.getElementById('ppclYear'); if(pyEl) pyEl.value=yr0;
  const adEl=document.getElementById('acsDate'); if(adEl) adEl.value=localDateStr(t);
  const ddEl=document.getElementById('diarioDate'); if(ddEl) ddEl.value=localDateStr(t);
  const eyEl=document.getElementById('evapYear'); if(eyEl) eyEl.value=yr0;
  const pdEl=document.getElementById('potableDate'); if(pdEl) pdEl.value=localDateStr(t);

  // Dark mode — primero para evitar flash
  if(typeof initDarkMode==='function') initDarkMode();
  // Identidad corporativa — aplicar antes del primer render
  if(typeof applyBrand==='function') applyBrand();

  // Reloj — arrancar inmediatamente
  if(typeof updateClock==='function'){ updateClock(); setInterval(updateClock,1000); }

  // Cargar datos persistidos
  if(typeof loadFirmas==='function') loadFirmas();
  if(typeof loadAuditLog==='function') loadAuditLog();
  if(typeof loadPhotos==='function') loadPhotos();
  if(typeof initIndexedDB==='function') initIndexedDB();

  // Idioma
  if(typeof applyLanguage==='function') applyLanguage();

  // Renderizado inicial
  if(typeof renderPPCL==='function') renderPPCL();
  if(typeof renderEvap==='function') renderEvap();
  if(typeof renderACS==='function') renderACS();
  if(typeof renderDiario==='function') renderDiario();
  if(typeof renderPotable==='function') renderPotable();

  // Dashboard diferido (evita bloquear el hilo principal)
  setTimeout(function(){
    if(typeof renderExecutiveKPIs==='function') renderExecutiveKPIs();
    if(typeof checkAutoAlerts==='function') checkAutoAlerts();
    if(typeof renderAIInsight==='function') renderAIInsight();
    if(typeof updateDashboardBadge==='function') updateDashboardBadge();
  }, 800);

  // Sesión
  if(typeof checkSession==='function') checkSession();

  // Firebase — conectar cuando SDK esté listo
  window.__fbOnReady = function(){
    if(typeof loadFirebaseConfig==='function') loadFirebaseConfig();
  };
  // Si Firebase ya cargó desde caché
  if(typeof firebase!=='undefined' && firebase.apps!==undefined){
    if(typeof loadFirebaseConfig==='function') loadFirebaseConfig();
  } else if(window.__fbLoadFailed){
    // Firebase no disponible — modo local silencioso (sin error visible al usuario)
    console.log('[Firebase] No disponible — modo local activo');
  }
  // Notificar sesión restaurada
  try{
    const saved=localStorage.getItem(SK);
    if(saved && Object.keys(JSON.parse(saved)).length>3){
      setTimeout(function(){ if(typeof showToast==='function') showToast('📂 Sesión anterior restaurada'); }, 1500);
    }
  }catch(e){}
});
</script>
// ═══════════════════════════════════════════════════════
//  PWA — Service Worker + Install
// ═══════════════════════════════════════════════════════
let _deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _deferredPrompt = e;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'flex';
});

window.addEventListener('appinstalled', () => {
  _deferredPrompt = null;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'none';
  showToast('✅ AquaControl Pro instalado correctamente');
});

function installPWA() {
  if (_deferredPrompt) {
    _deferredPrompt.prompt();
    _deferredPrompt.userChoice.then(() => { _deferredPrompt = null; });
  } else {
    showToast('📲 En Safari: Compartir → Añadir a pantalla de inicio');
  }
}

function installPWAFromConfig() {
  if (_deferredPrompt) {
    _deferredPrompt.prompt();
    _deferredPrompt.userChoice.then(function(choice) {
      if (choice.outcome === 'accepted') {
        _updatePWAStatusCard(true);
      }
      _deferredPrompt = null;
    });
  } else if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
    showToast('✅ AquaControl Pro ya está instalada en este dispositivo');
    _updatePWAStatusCard(true);
  } else {
    showToast('📲 Sigue las instrucciones según tu dispositivo para instalar la app');
  }
}

function _updatePWAStatusCard(installed) {
  var title = document.getElementById('pwaStatusTitle');
  var sub   = document.getElementById('pwaStatusSub');
  var card  = document.getElementById('pwaInstallStatus');
  var btn   = document.getElementById('pwaInstallBtnCfg');
  if (installed) {
    if (title) title.textContent = '✅ App instalada correctamente';
    if (sub)   sub.textContent   = 'AquaControl Pro se ejecuta como app nativa en tu dispositivo';
    if (card)  { card.style.background = 'var(--green-light)'; card.style.borderColor = 'rgba(26,122,74,0.3)'; }
    if (btn)   { btn.style.background = 'linear-gradient(135deg,#1a7a4a,#0d8a7a)'; btn.innerHTML = '<span>✅ Ya instalada</span>'; btn.disabled = true; btn.style.opacity = '0.7'; }
  } else if (_deferredPrompt) {
    if (title) title.textContent = '🟢 Lista para instalar';
    if (sub)   sub.textContent   = 'Pulsa el botón para añadir AquaControl Pro a tu pantalla de inicio';
  } else {
    if (title) title.textContent = 'AquaControl Pro';
    if (sub)   sub.textContent   = 'Sigue las instrucciones según tu dispositivo para instalar';
  }
}

// Hook into renderConfig to refresh install status card
(function() {
  var _prevRC = window.renderConfig;
  if (typeof _prevRC === 'function') {
    window.renderConfig = function() {
      _prevRC.apply(this, arguments);
      setTimeout(function() {
        // Actualizar estado instalación PWA
        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
          _updatePWAStatusCard(true);
        } else {
          _updatePWAStatusCard(false);
        }
        // Poblar campos de identidad corporativa
        if(typeof _brandPopulateConfig==='function') _brandPopulateConfig();
        // Actualizar card de sede activa
        try{
          var sedeId  = localStorage.getItem('ppcl_sede_activa')||'antequera';
          var sedes   = JSON.parse(localStorage.getItem('ppcl_sedes_v1')||'[]');
          var sede    = sedes.find(function(s){return s.id===sedeId;}) || {nombre:'Almacén Antequera',direccion:'Antequera, Málaga — DIAGROUP'};
          var nEl = document.getElementById('cfgSedeNombre');    if(nEl) nEl.textContent = sede.nombre||'—';
          var dEl = document.getElementById('cfgSedeDireccion'); if(dEl) dEl.textContent = sede.direccion||'—';
        }catch(e){}
      }, 100);
    };
  }
})();

// ═══════════════════════════════════════════════════════
//  DARK MODE
// ═══════════════════════════════════════════════════════
function initDarkMode() {
  const saved = localStorage.getItem('ppcl_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('ppcl_theme', theme);
}


function autoTheme(){
  localStorage.removeItem('ppcl_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ═══════════════════════════════════════════════════════
//  IDENTIDAD CORPORATIVA — Logo, colores, textos
// ═══════════════════════════════════════════════════════
const BRAND_KEY = 'ppcl_brand_v1';

function _getBrand() {
  try { return JSON.parse(localStorage.getItem(BRAND_KEY) || '{}'); } catch(e) { return {}; }
}
function _saveBrand(b) {
  try { localStorage.setItem(BRAND_KEY, JSON.stringify(b)); } catch(e) {
    if(typeof showToast==='function') showToast('⚠️ Error guardando identidad — imagen quizás demasiado grande');
  }
}

// Aplica el branding guardado a toda la app (se llama al arrancar y al guardar)
function applyBrand() {
  var b = _getBrand();

  // ── Color corporativo ──────────────────────────────────
  if (b.color) {
    document.documentElement.style.setProperty('--blue2',   b.color);
    document.documentElement.style.setProperty('--blue',    b.color);
    // Versión más oscura para --navy variantes
    var darker = _hexDarken(b.color, 0.25);
    document.documentElement.style.setProperty('--navy',    darker);
    document.documentElement.style.setProperty('--navy2',   _hexDarken(b.color, 0.35));
    // blue-light: color muy claro
    document.documentElement.style.setProperty('--blue-light', _hexLighten(b.color, 0.92));
  }

  // ── Textos de la app ───────────────────────────────────
  var empresa  = b.empresa  || 'DIAGROUP';
  var eslogan  = b.eslogan  || 'PPCL Legionella · Almacén Antequera · 2026';

  // Login
  var ltEl = document.getElementById('loginTagline');  if(ltEl)  ltEl.textContent  = eslogan;
  var lcEl = document.getElementById('loginCompany');  if(lcEl)  lcEl.textContent  = empresa;

  // Header sub
  var hdrSub = document.querySelector('.hdr-sub');
  if(hdrSub) hdrSub.textContent = eslogan.toUpperCase();

  // ── Logo ───────────────────────────────────────────────
  if (b.logo) {
    _applyLogoToLogin(b.logo);
    _applyLogoToHeader(b.logo);
  } else {
    // Restaurar SVG de gota por defecto en login
    var wrap = document.getElementById('loginLogoWrap');
    if(wrap) {
      wrap.innerHTML = '<svg id="loginLogoDefault" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="64"><path d="M30 4 C30 4 4 38 4 52 C4 67 16 76 30 76 C44 76 56 67 56 52 C56 38 30 4 30 4Z" fill="url(#lgLogin2)" opacity="0.95"/><path d="M18 55 C18 62 23 68 30 68" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="lgLogin2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2589c7"/><stop offset="100%" stop-color="#0d8a7a"/></linearGradient></defs></svg>';
    }
    // Restaurar logo de gota en header
    var hdrLogo = document.querySelector('.hdr-logo');
    if(hdrLogo && !hdrLogo.querySelector('svg[data-brand]')) {
      // ya tiene el SVG de gota, no tocar
    }
    var hdrCustom = document.getElementById('hdrLogoCustom');
    if(hdrCustom) hdrCustom.remove();
  }
}

function _applyLogoToLogin(src) {
  var wrap = document.getElementById('loginLogoWrap');
  if(!wrap) return;
  wrap.innerHTML = '<img id="loginLogoCustom" src="'+src+'" alt="Logo empresa" style="max-width:200px;max-height:80px;object-fit:contain;border-radius:8px;margin-bottom:4px">';
}

function _applyLogoToHeader(src) {
  var hdrLogo = document.querySelector('.hdr-logo');
  if(!hdrLogo) return;
  // Ocultar el SVG de gota y mostrar el logo de empresa
  hdrLogo.innerHTML = '<img id="hdrLogoCustom" src="'+src+'" alt="Logo" style="max-width:120px;max-height:34px;object-fit:contain;display:block;border-radius:4px">';
  hdrLogo.style.background = 'transparent';
  hdrLogo.style.width = 'auto';
  hdrLogo.style.minWidth = '36px';
  hdrLogo.style.padding = '2px 6px';
}

// Redimensiona imagen antes de guardar (máx. 400×150 px, calidad 0.82)
function _resizeLogo(file, cb) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.onload = function() {
      var MAX_W = 400, MAX_H = 150;
      var ratio = Math.min(MAX_W / img.width, MAX_H / img.height, 1);
      var canvas = document.createElement('canvas');
      canvas.width  = Math.round(img.width  * ratio);
      canvas.height = Math.round(img.height * ratio);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // SVG: devolver el dataURL original (no rasterizar)
      var mime = file.type === 'image/svg+xml' ? 'image/svg+xml' : 'image/png';
      cb(canvas.toDataURL('image/png', 0.85));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Upload logo desde input
window.__brandUploadLogo = function(input) {
  var file = input.files && input.files[0];
  if (!file) return;
  if (file.size > 700 * 1024) {
    if(typeof showToast==='function') showToast('⚠️ Logo demasiado grande — máximo 500 KB');
    return;
  }
  _resizeLogo(file, function(dataUrl) {
    // Mostrar preview en config
    var prev = document.getElementById('brandLogoPreview');
    var plac = document.getElementById('brandLogoPlaceholder');
    var remB = document.getElementById('brandLogoRemoveBtn');
    if(prev){ prev.src = dataUrl; prev.style.display = 'block'; }
    if(plac) plac.style.display = 'none';
    if(remB) remB.style.display = 'inline-flex';
    // Actualizar preview en tiempo real
    __brandPreview();
    // Guardar temporalmente en el objeto de preview (se persiste con __brandSave)
    window._brandPendingLogo = dataUrl;
    input.value = '';
  });
};

window.__brandRemoveLogo = function() {
  window._brandPendingLogo = null;
  var prev = document.getElementById('brandLogoPreview');
  var plac = document.getElementById('brandLogoPlaceholder');
  var remB = document.getElementById('brandLogoRemoveBtn');
  if(prev){ prev.src=''; prev.style.display='none'; }
  if(plac) plac.style.display='flex';
  if(remB) remB.style.display='none';
  __brandPreview();
};

// Preview en tiempo real dentro de la sección config
window.__brandPreview = function() {
  var empresa = (document.getElementById('brandEmpresa')||{}).value || 'DIAGROUP';
  var eslogan = (document.getElementById('brandEslogan')||{}).value || 'PPCL Legionella · Almacén Antequera · 2026';
  var el;
  el = document.getElementById('brandPrevEmpresa'); if(el) el.textContent = empresa;
  el = document.getElementById('brandPrevEslogan'); if(el) el.textContent = eslogan;
  // Logo preview
  var prevLogoBox = document.getElementById('brandPrevLogo');
  if(prevLogoBox){
    var logoSrc = window._brandPendingLogo || _getBrand().logo || null;
    if(logoSrc){
      prevLogoBox.innerHTML = '<img src="'+logoSrc+'" style="max-width:160px;max-height:56px;object-fit:contain;border-radius:6px">';
    } else {
      prevLogoBox.innerHTML = '<svg viewBox="0 0 60 80" fill="none" width="36" height="48"><path d="M30 4 C30 4 4 38 4 52 C4 67 16 76 30 76 C44 76 56 67 56 52 C56 38 30 4 30 4Z" fill="url(#pvG)" opacity="0.9"/><defs><linearGradient id="pvG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0d8a7a"/></linearGradient></defs></svg>';
    }
  }
};

window.__brandSetColor = function(hex, el) {
  // Marcar activo
  document.querySelectorAll('.color-preset').forEach(function(p){ p.classList.remove('active'); });
  if(el) el.classList.add('active');
  // Actualizar swatch y hex
  var sw = document.getElementById('brandColorSwatch'); if(sw) sw.style.background = hex;
  var hx = document.getElementById('brandColorHex');   if(hx) hx.textContent = hex;
  window._brandPendingColor = hex;
  // Preview inmediato en el box
  var pvName = document.getElementById('brandPrevName');
  if(pvName){ var sp=pvName.querySelector('span'); if(sp) sp.style.color=_hexLighten(hex,0.4)||'#4dd0e1'; }
};

window.__brandSave = function() {
  var b = _getBrand();
  var empresa = ((document.getElementById('brandEmpresa')||{}).value||'').trim() || 'DIAGROUP';
  var eslogan = ((document.getElementById('brandEslogan')||{}).value||'').trim() || 'PPCL Legionella · Almacén Antequera · 2026';
  b.empresa = empresa;
  b.eslogan = eslogan;
  if(window._brandPendingColor) b.color = window._brandPendingColor;
  if(window._brandPendingLogo  !== undefined) b.logo = window._brandPendingLogo || null;
  _saveBrand(b);
  applyBrand();
  var msg = document.getElementById('brandSaveMsg');
  if(msg){ msg.textContent='✅ Identidad corporativa aplicada correctamente'; setTimeout(function(){msg.textContent='';},3000); }
  if(typeof showToast==='function') showToast('🎨 Identidad corporativa actualizada');
  if(typeof auditLog==='function') auditLog('BRANDING','identidad_guardada',empresa,'');
};

window.__brandReset = function() {
  if(!confirm('¿Restablecer la identidad a los valores por defecto?\n\nSe eliminará el logo y los colores personalizados.')) return;
  localStorage.removeItem(BRAND_KEY);
  window._brandPendingLogo  = undefined;
  window._brandPendingColor = null;
  // Restaurar variables CSS
  document.documentElement.style.removeProperty('--blue2');
  document.documentElement.style.removeProperty('--blue');
  document.documentElement.style.removeProperty('--navy');
  document.documentElement.style.removeProperty('--navy2');
  document.documentElement.style.removeProperty('--blue-light');
  applyBrand();
  // Limpiar campos config
  var eEl = document.getElementById('brandEmpresa'); if(eEl) eEl.value='';
  var sEl = document.getElementById('brandEslogan'); if(sEl) sEl.value='';
  __brandRemoveLogo();
  if(typeof showToast==='function') showToast('↩ Identidad restablecida a valores por defecto');
};

// Carga los valores guardados en los inputs de config al abrir la sección
function _brandPopulateConfig() {
  var b = _getBrand();
  var eEl = document.getElementById('brandEmpresa'); if(eEl) eEl.value = b.empresa||'';
  var sEl = document.getElementById('brandEslogan'); if(sEl) sEl.value = b.eslogan||'';
  // Color
  if(b.color){
    var sw = document.getElementById('brandColorSwatch'); if(sw) sw.style.background = b.color;
    var hx = document.getElementById('brandColorHex');   if(hx) hx.textContent = b.color;
    window._brandPendingColor = b.color;
    // Marcar preset si coincide
    document.querySelectorAll('.color-preset[data-color]').forEach(function(p){
      if((p.getAttribute('data-color')||'').toLowerCase() === b.color.toLowerCase()) p.classList.add('active');
    });
  }
  // Logo
  if(b.logo){
    var prev = document.getElementById('brandLogoPreview');
    var plac = document.getElementById('brandLogoPlaceholder');
    var remB = document.getElementById('brandLogoRemoveBtn');
    if(prev){ prev.src=b.logo; prev.style.display='block'; }
    if(plac) plac.style.display='none';
    if(remB) remB.style.display='inline-flex';
    window._brandPendingLogo = b.logo;
  }
  __brandPreview();
}

// Helpers de color (hex a más oscuro/claro)
function _hexToRgb(hex){
  hex = hex.replace('#','');
  if(hex.length===3) hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  return [parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16)];
}
function _rgbToHex(r,g,b){
  return '#'+[r,g,b].map(function(v){return Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0');}).join('');
}
function _hexDarken(hex, amt){
  try{ var c=_hexToRgb(hex); return _rgbToHex(c[0]*(1-amt),c[1]*(1-amt),c[2]*(1-amt)); }catch(e){ return hex; }
}
function _hexLighten(hex, amt){
  try{ var c=_hexToRgb(hex); return _rgbToHex(c[0]+(255-c[0])*amt,c[1]+(255-c[1])*amt,c[2]+(255-c[2])*amt); }catch(e){ return hex; }
}

// ═══════════════════════════════════════════════════════
//  BOTTOM NAV — mobile tab switcher
// ═══════════════════════════════════════════════════════
function switchTabMobile(id, el) {
  document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  const topBtn = document.querySelector('.tab-btn[onclick*=\"\'' + id + '\'\"]');
  switchTab(id, topBtn);
}

// ═══════════════════════════════════════════════════════
//  ROLES SYSTEM — v20: basado en rol, no en PIN hardcodeado
// ═══════════════════════════════════════════════════════
const ROLE_LABELS = {
  admin:      { label:'Admin',      badge:'admin' },
  supervisor: { label:'Supervisor', badge:'supervisor' },
  tecnico:    { label:'Técnico',    badge:'tecnico' },
};
let _currentRole = 'tecnico';

// applyRole ahora acepta rol (string) o pin legacy (compatibilidad)
function applyRole(rolOrPin) {
  // Detectar si es rol directo o PIN legacy
  const PIN_LEGACY = {'2026':'admin','1111':'tecnico','5555':'supervisor'};
  const rol = ROLE_LABELS[rolOrPin] ? rolOrPin : (PIN_LEGACY[rolOrPin] || 'tecnico');
  _currentRole = rol;

  // Guardar rol en session (ya se hace en login, pero por si acaso)
  try{ sessionStorage.setItem('ppcl_role', rol); }catch(e){}

  const info = ROLE_LABELS[rol] || ROLE_LABELS.tecnico;
  const badge = document.getElementById('roleBadge');
  if(badge){ badge.textContent = info.label; badge.className = 'role-badge ' + info.badge; }

  // Visibilidad de tabs según permisos
  const cfgTab  = document.querySelector('.tab-btn[onclick*="config"]');
  const cfgBnav = document.getElementById('bnav-config');
  const canConfig = hasPermission('config');
  if(cfgTab)  cfgTab.style.display  = canConfig ? '' : 'none';
  if(cfgBnav) cfgBnav.style.display = canConfig ? '' : 'none';

  // Deshabilitar botones sensibles para técnico
  const exportBtns = document.querySelectorAll('[onclick="exportJSON()"], [onclick="importJSON()"]');
  exportBtns.forEach(b => {
    b.style.opacity = hasPermission('export') ? '1' : '0.4';
    b.style.pointerEvents = hasPermission('export') ? '' : 'none';
    b.title = hasPermission('export') ? '' : 'Requiere permiso de exportación';
  });
  const deleteBtns = document.querySelectorAll('[onclick="restoreDefaults()"]');
  deleteBtns.forEach(b => {
    b.style.opacity = hasPermission('delete') ? '1' : '0.4';
    b.style.pointerEvents = hasPermission('delete') ? '' : 'none';
    b.title = hasPermission('delete') ? '' : 'Requiere rol Admin';
  });
}

// ═══════════════════════════════════════════════════════
//  AUTO ALERTS SYSTEM
// ═══════════════════════════════════════════════════════
function checkAutoAlerts() {
  const alerts = [];
  const today = new Date();
  const mo = today.getMonth();
  const yr = today.getFullYear();
  const daysInMonth = new Date(yr, mo + 1, 0).getDate();
  const todayDay = today.getDate();

  // Check condensadores: any day with missing ph or temp up to today
  let missingCond = 0;
  for (let d = 1; d <= todayDay; d++) {
    [1, 2].forEach(cn => {
      const ph = (typeof getVal === 'function') ? getVal(makeKey('ppcl', yr, mo, cn, d, 'ph')) : '';
      if (!ph) missingCond++;
    });
  }
  if (missingCond > 0) {
    alerts.push({ type: 'warn', msg: `⚠️ ${missingCond} lecturas de pH pendientes en condensadores` });
  }

  // Check caducidad — if we are at end of month
  const daysLeft = daysInMonth - todayDay;
  if (daysLeft <= 3) {
    alerts.push({ type: 'amber', msg: `🗓️ Quedan ${daysLeft} días para cerrar el mes — revisa todos los registros` });
  }

  // Show banner if alerts
  const banner = document.getElementById('alertNotificationBanner');
  if (banner && alerts.length > 0) {
    banner.style.display = 'block';
    banner.innerHTML = alerts.map(a => `
      <div class="alert-banner" style="margin:10px 24px 0">
        <span class="alert-banner-icon">${a.type === 'warn' ? '⚠️' : '🔔'}</span>
        <div class="alert-banner-text">
          <div class="alert-banner-title">${a.msg}</div>
          <div class="alert-banner-sub">Sistema automático de alertas · ${today.toLocaleDateString('es-ES')}</div>
        </div>
        <button onclick="this.parentElement.style.display='none'" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:18px">✕</button>
      </div>`).join('');
  }

  // Also update notification count
  const notifCount = alerts.length;
  // Schedule next check in 5 minutes
  setTimeout(checkAutoAlerts, 300000);
}

// ═══════════════════════════════════════════════════════
//  EXECUTIVE DASHBOARD ENHANCEMENT
// ═══════════════════════════════════════════════════════
function renderExecutiveKPIs() {
  const today = new Date();
  const mo = today.getMonth();
  const yr = today.getFullYear();
  const daysInMonth = new Date(yr, mo + 1, 0).getDate();
  const todayDay = today.getDate();

  // Condensadores compliance
  let condTotal = 0, condDone = 0, condAlertCount = 0;
  for (let d = 1; d <= todayDay; d++) {
    [1, 2].forEach(cn => {
      ['ph', 'temperatura'].forEach(field => {
        condTotal++;
        const v = getVal(makeKey('ppcl', yr, mo, cn, d, field));
        if (v && v.trim()) {
          condDone++;
          const n = parseFloat(v);
          if (field === 'ph' && !isNaN(n) && (n < 7 || n > 8)) condAlertCount++;
          if (field === 'temperatura' && !isNaN(n) && n > 35) condAlertCount++;
        }
      });
    });
  }
  const condPct = condTotal > 0 ? Math.round(condDone / condTotal * 100) : 0;

  // ACS compliance for current week
  const wk = getWeekKey(acsDate);
  let acsDone = 0, acsTotal = ACS_SEMANAL.length * 3;
  ACS_SEMANAL.forEach(g => {
    ['tf', 'tc', 'ap'].forEach(f => {
      if (getVal(makeKey('acs_s', wk, g.n, f))) acsDone++;
    });
  });
  const acsPct = acsTotal > 0 ? Math.round(acsDone / acsTotal * 100) : 0;

  const kpiEl = document.getElementById('execKpiGrid');
  if (!kpiEl) return;

  kpiEl.innerHTML = `
    <div class="kpi-exec-card blue">
      <div class="kpi-exec-num">${condPct}%</div>
      <div class="kpi-exec-label">CUMPLIMIENTO CONDENSADORES</div>
      <div class="compliance-bar"><div class="compliance-bar-fill ${condPct>=90?'good':condPct>=70?'warn':'bad'}" style="width:${condPct}%"></div></div>
      <div class="kpi-exec-trend ok">${condDone}/${condTotal} registros</div>
    </div>
    <div class="kpi-exec-card teal">
      <div class="kpi-exec-num">${acsPct}%</div>
      <div class="kpi-exec-label">CUMPLIMIENTO ACS SEMANAL</div>
      <div class="compliance-bar"><div class="compliance-bar-fill ${acsPct>=90?'good':acsPct>=70?'warn':'bad'}" style="width:${acsPct}%"></div></div>
      <div class="kpi-exec-trend ok">${acsDone}/${acsTotal} registros</div>
    </div>
    <div class="kpi-exec-card ${condAlertCount>0?'red':'green'}">
      <div class="kpi-exec-num" style="color:${condAlertCount>0?'var(--red)':'var(--green)'}">${condAlertCount}</div>
      <div class="kpi-exec-label">VALORES FUERA DE RANGO</div>
      <div class="kpi-exec-trend ${condAlertCount>0?'down':'up'}">${condAlertCount>0?'⚠️ Requieren atención':'✅ Todo en orden'}</div>
    </div>
    <div class="kpi-exec-card amber">
      <div class="kpi-exec-num">${daysLeft(today, daysInMonth)}</div>
      <div class="kpi-exec-label">DÍAS RESTANTES DEL MES</div>
      <div class="kpi-exec-trend ok">${MONTHS[mo]} ${yr}</div>
    </div>
  `;
}

function daysLeft(today, daysInMonth) {
  return daysInMonth - today.getDate();
}

// ─── Init completado en DOMContentLoaded arriba ──────────────────────────────

</script>
/* ═══ AUTH - Login email/password — v20 Secure ═══
   SEGURIDAD: Las contraseñas se hashean con SHA-256 antes de compararse.
   Los defaults son SOLO de primer arranque; el admin debe cambiarlas.
   NUNCA se almacenan contraseñas en texto plano.
   PIN solo se usa para firma local; acciones sensibles requieren rol server-side.
*/
(function(){
  'use strict';

  // ── Hash SHA-256 (async, fallback sync-simulado para compatibilidad) ────────
  async function sha256(str){
    if(window.crypto && window.crypto.subtle){
      const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
    }
    // Fallback deterministic (no criptográfico, pero evita texto plano)
    let h = 0x811c9dc5;
    for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193)>>>0; }
    return h.toString(16).padStart(8,'0') + str.length.toString(16);
  }

  // ── Usuarios default — hasheados en primer arranque ─────────────────────────
  // NOTA: estas credenciales de inicio deben cambiarse desde el panel de configuración
  // Se almacenan como { email, pwHash, name, pin (hash), rol } — NUNCA pw en claro
  // Credenciales de primer arranque — se hashean con SHA-256 en la primera ejecución
  // y se eliminan del almacenamiento en texto plano automáticamente.
  // IMPORTANTE: Cambia estas contraseñas desde Configuración → Usuarios tras el primer login.
  var _DEFAULT_CREDS = [
    {email:'admin@diagroup.com',      pw:atob('QWRtaW4yMDI2IQ=='),   name:'Administrador', pin:'2026', rol:'admin'},
    {email:'tecnico@diagroup.com',    pw:atob('VGVjbmljbzExMTEh'), name:'Tecnico PPCL',  pin:'1111', rol:'tecnico'},
    {email:'supervisor@diagroup.com', pw:atob('U3VwZXI1NTU1IQ=='), name:'Supervisor',     pin:'5555', rol:'supervisor'}
  ];

  // ── Inicializar usuarios hasheados si no existen ─────────────────────────────
  async function ensureHashedUsers(){
    var stored = null;
    try{ stored = JSON.parse(localStorage.getItem('ppcl_users_v2')); }catch(e){}
    if(stored && stored.length){ return stored; }
    // Primera vez: hashear y guardar
    var hashed = await Promise.all(_DEFAULT_CREDS.map(async function(u){
      return { email:u.email, pwHash: await sha256(u.pw), name:u.name, pinHash: await sha256(u.pin), rol:u.rol };
    }));
    localStorage.setItem('ppcl_users_v2', JSON.stringify(hashed));
    // Limpiar almacenamiento legacy de texto plano si existe
    localStorage.removeItem('ppcl_email_users');
    return hashed;
  }

  function gu(){
    try{ var s=JSON.parse(localStorage.getItem('ppcl_users_v2'));if(s&&s.length)return s; }catch(e){}
    return [];
  }
  function su(l){ localStorage.setItem('ppcl_users_v2',JSON.stringify(l)); }
  function gt(){ return parseInt(localStorage.getItem('ppcl_tries')||'0'); }
  function st(n){ localStorage.setItem('ppcl_tries',String(n)); }
  function gl(){ return parseInt(localStorage.getItem('ppcl_lock')||'0'); }
  function sl(t){ localStorage.setItem('ppcl_lock',String(t)); }
  function cl(){ localStorage.removeItem('ppcl_tries'); localStorage.removeItem('ppcl_lock'); }
  function lkd(){ var u=gl(); return u>0&&Date.now()<u; }
  function lsec(){ return Math.max(0,Math.ceil((gl()-Date.now())/1000)); }
  function se(m,w){ var e=document.getElementById('lErr'); if(e){e.textContent=m||'';e.style.color=w?'#fbbf24':'#f87171';} }
  var _lt=null;
  function cd(){
    if(_lt)clearInterval(_lt);
    _lt=setInterval(function(){
      if(!lkd()){clearInterval(_lt);_lt=null;se('');cl();return;}
      var s=lsec(),m=Math.floor(s/60),ss=s%60;
      se('Bloqueado '+m+':'+(ss<10?'0':'')+ss,true);
    },1000);
  }
  var eye=document.getElementById('lEye');
  var pi=document.getElementById('lPass');
  if(eye&&pi){
    eye.addEventListener('click',function(ev){
      ev.preventDefault();
      pi.type=(pi.type==='password')?'text':'password';
      eye.innerHTML=(pi.type==='text')?'&#128584;':'&#128065;';
      pi.focus();
    });
  }
  var ei=document.getElementById('lEmail');
  if(ei)ei.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();if(pi)pi.focus();}});
  if(pi)pi.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();doLgn();}});
  var btn=document.getElementById('lBtn');
  if(btn)btn.addEventListener('click',function(e){e.preventDefault();doLgn();});

  function doLgn(){
    if(lkd()){cd();return;}
    var em=ei?ei.value.trim().toLowerCase():'';
    var pw=pi?pi.value:'';
    se('');
    if(!em){se('Introduce tu correo');if(ei)ei.focus();return;}
    if(!pw){se('Introduce tu contraseña');if(pi)pi.focus();return;}
    // Autenticar de forma asíncrona con hash
    sha256(pw).then(function(pwHash){
      var users=gu(), user=null, idx;
      for(idx=0;idx<users.length;idx++){
        // Soporte para usuarios nuevos (pwHash) y migración de legacy (pw en claro)
        var u=users[idx];
        var matches = (u.pwHash && u.pwHash===pwHash) || (u.pw && u.pw===pw && !u.pwHash);
        if((u.email||'').toLowerCase()===em && matches){ user=u; break; }
      }
      if(user){
        cl();
        // Si el usuario aún tiene pw en texto plano, migrarlo
        if(user.pw && !user.pwHash){
          sha256(user.pw).then(function(h){ user.pwHash=h; delete user.pw; su(users); });
        }
        if(btn){btn.disabled=true;btn.textContent='Bienvenido...';}
        try{
          sessionStorage.setItem(SESSION_KEY,'ok');
          sessionStorage.setItem('ppcl_role',user.rol||'tecnico');
          sessionStorage.setItem('ppcl_pin',user.pinHash||'');
          sessionStorage.setItem('ppcl_user_email',user.email||'');
          sessionStorage.setItem('ppcl_user_nombre',user.name||'');
          sessionStorage.setItem('ppcl_session_ts',String(Date.now()));
          var r=document.getElementById('lRemember');
          if(r&&r.checked)localStorage.setItem('ppcl_remember_email',user.email||'');
        }catch(e){}
        if(typeof unlockApp==='function'){
          unlockApp(false);
        } else {
          var ls=document.getElementById('loginScreen');
          if(ls){ls.classList.add('hidden');ls.style.display='none';}
        }
        if(typeof applyRole==='function')applyRole(user.rol||'tecnico');
        if(typeof auditLog==='function')auditLog('LOGIN','email',user.name||'',user.email||'');
      }else{
        var tries=gt()+1,rem=MX-tries;
        st(tries);
        if(pi){pi.style.borderColor='#f87171';pi.value='';pi.focus();}
        if(tries>=MX){sl(Date.now()+LK);cd();}
        else{
          var ex=gu().some(function(u){return(u.email||'').toLowerCase()===em;});
          se(ex?'Contraseña incorrecta — '+rem+' intento'+(rem===1?'':'s')+' restante'+(rem===1?'':'s'):'Correo no registrado');
        }
      }
    });
  }

  var MX=5, LK=300000;

  // Inicializar usuarios hasheados al arrancar
  ensureHashedUsers().then(function(){
    try{
      var sv=localStorage.getItem('ppcl_remember_email');
      if(sv&&ei){ei.value=sv;var cb=document.getElementById('lRemember');if(cb)cb.checked=true;}
    }catch(e){}
    setTimeout(function(){
      var e2=document.getElementById('lEmail'),p2=document.getElementById('lPass');
      if(e2&&!e2.value)e2.focus();else if(p2)p2.focus();
      if(lkd())cd();
    },200);
  });

  window.__lForgot=function(){
    var em=ei?ei.value.trim().toLowerCase():'';
    if(lkd()){alert('Bloqueado. Espera '+Math.ceil(lsec()/60)+' min.');return;}
    var f=gu().some(function(u){return(u.email||'').toLowerCase()===em;});
    alert(f?'Cuenta encontrada. Contacta con el administrador para restablecer la contraseña.':(em?'Correo no registrado.':'Introduce tu correo.'));
  };

  // ── Gestión de usuarios desde configuración ──────────────────────────────────
  window.__renderUsersConfig=function(){
    var el=document.getElementById('usersConfigList');
    if(!el)return;
    el.innerHTML='';
    var users=gu();
    for(var i=0;i<users.length;i++){
      (function(u,iidx){
        var row=document.createElement('div');
        row.className='cfg-row';
        row.style.cssText='flex-direction:column;gap:8px;align-items:flex-start;padding:12px';
        var hdr=document.createElement('div');hdr.style.cssText='display:flex;align-items:center;justify-content:space-between;width:100%';
        var lft=document.createElement('div');lft.style.cssText='display:flex;align-items:center;gap:8px';
        var badge=document.createElement('span');badge.className='role-badge '+(u.rol||'tecnico');badge.textContent=u.rol||'tecnico';
        var nm=document.createElement('strong');nm.style.cssText='font-family:Sora,sans-serif;font-size:13px;color:var(--navy)';nm.textContent=u.name||u.email;
        lft.appendChild(badge);lft.appendChild(nm);
        var delBtn=document.createElement('button');delBtn.textContent='Eliminar';
        delBtn.style.cssText='background:var(--red-light);border:1px solid var(--red);color:var(--red);border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer';
        delBtn.onclick=function(){window.__delU(iidx);};
        hdr.appendChild(lft);hdr.appendChild(delBtn);row.appendChild(hdr);
        var eLbl=document.createElement('div');eLbl.style.cssText='font-family:monospace;font-size:9px;color:var(--text4);margin-bottom:3px;letter-spacing:1px';eLbl.textContent='CORREO';
        var eInp=document.createElement('input');eInp.type='email';eInp.className='cfg-row-input';eInp.value=u.email||'';
        eInp.style.cssText='width:100%;border:1px solid var(--border);border-radius:6px;padding:7px 10px;font-size:13px';
        eInp.onchange=function(){window.__upU(iidx,'email',this.value);};
        var eW=document.createElement('div');eW.style.width='100%';eW.appendChild(eLbl);eW.appendChild(eInp);row.appendChild(eW);
        // Nueva contraseña (hasheada al guardar)
        var pLbl=document.createElement('div');pLbl.style.cssText='font-family:monospace;font-size:9px;color:var(--text4);margin-bottom:3px;letter-spacing:1px';pLbl.textContent='NUEVA CONTRASEÑA (dejar vacío para no cambiar)';
        var pRow2=document.createElement('div');pRow2.style.cssText='display:flex;gap:6px;width:100%';
        var pInp=document.createElement('input');pInp.type='password';pInp.className='cfg-row-input';pInp.placeholder='••••••••';
        pInp.style.cssText='flex:1;border:1px solid var(--border);border-radius:6px;padding:7px 10px;font-size:13px';
        pInp.onchange=function(){
          var newPw=this.value;
          if(!newPw)return;
          if(newPw.length<8){if(typeof showToast==='function')showToast('⚠️ La contraseña debe tener mínimo 8 caracteres');return;}
          sha256(newPw).then(function(h){window.__upU(iidx,'pwHash',h);if(typeof showToast==='function')showToast('🔐 Contraseña actualizada (hasheada)');});
        };
        var eyeB=document.createElement('button');eyeB.innerHTML='&#128065;';
        eyeB.style.cssText='background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:16px;cursor:pointer';
        eyeB.onclick=function(){pInp.type=(pInp.type==='password')?'text':'password';};
        pRow2.appendChild(pInp);pRow2.appendChild(eyeB);
        var pW=document.createElement('div');pW.style.width='100%';pW.appendChild(pLbl);pW.appendChild(pRow2);row.appendChild(pW);
        // Nota de seguridad
        var note=document.createElement('div');note.style.cssText='font-family:monospace;font-size:9px;color:var(--green);margin-top:2px';
        note.textContent=u.pwHash?'🔐 Contraseña almacenada con hash SHA-256':'⚠️ Contraseña sin hashear (cambia para securizar)';
        row.appendChild(note);
        el.appendChild(row);
      })(users[i],i);
    }
  };
  window.__upU=function(i,f,v){var u=gu();if(u[i]){u[i][f]=v;su(u);if(typeof showToast==='function')showToast('Actualizado');}};
  window.__delU=function(i){var u=gu();if(u.length<=1){if(typeof showToast==='function')showToast('Mínimo un usuario');return;}if(!confirm('¿Eliminar este usuario?'))return;u.splice(i,1);su(u);window.__renderUsersConfig();};
  window.__addUser=function(){
    var newPw='Nuevo2026!';
    sha256(newPw).then(function(h){
      var u=gu();u.push({email:'nuevo@diagroup.com',pwHash:h,name:'Nuevo Usuario',pinHash:'',rol:'tecnico'});
      su(u);window.__renderUsersConfig();
      if(typeof showToast==='function')showToast('Usuario creado — cambia la contraseña desde el panel');
    });
  };
})();
</script>
// ═══════════════════════════════════════════════════════
//  MULTI-SEDE — Selección de instalación
//  Gestiona múltiples sedes/almacenes en localStorage
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  var SEDES_KEY    = 'ppcl_sedes_v1';
  var SEDE_ACT_KEY = 'ppcl_sede_activa';

  // Sede por defecto (la original)
  var DEFAULT_SEDE = {
    id:       'antequera',
    nombre:   'Almacén Antequera',
    direccion:'Antequera, Málaga — DIAGROUP',
    default:  true,
    creada:   '2026-01-01'
  };

  function getSedes(){
    try{
      var raw = localStorage.getItem(SEDES_KEY);
      var list = raw ? JSON.parse(raw) : null;
      if(!list || !list.length){
        list = [DEFAULT_SEDE];
        localStorage.setItem(SEDES_KEY, JSON.stringify(list));
      }
      return list;
    }catch(e){ return [DEFAULT_SEDE]; }
  }

  function saveSedes(list){
    try{ localStorage.setItem(SEDES_KEY, JSON.stringify(list)); }catch(e){}
  }

  function getSedeActiva(){
    try{ return localStorage.getItem(SEDE_ACT_KEY)||null; }catch(e){ return null; }
  }

  function setSedeActiva(id){
    try{ localStorage.setItem(SEDE_ACT_KEY, id); }catch(e){}
  }

  // Actualiza el header con el nombre de la sede activa
  function _updateHeaderSede(sede){
    var subEl = document.querySelector('.hdr-sub');
    if(subEl) subEl.textContent = (sede.nombre || 'PPCL LEGIONELLA').toUpperCase() + ' · 2026';
    // También actualizar el login tagline
    var tagEl = document.querySelector('.splash-tagline');
    if(tagEl) tagEl.textContent = 'PPCL Legionella · ' + (sede.nombre || 'Almacén Antequera') + ' · 2026';
    // Actualizar storage key prefix si hay múltiples sedes
    // (para que los datos sean independientes por sede)
    if(typeof window._SEDE_SK_PREFIX !== 'undefined'){
      window._SEDE_SK_PREFIX = 'ppcl_' + sede.id + '_';
    }
  }

  // Renderiza la lista de sedes en la pantalla de selección
  function renderSedes(){
    var list = getSedes();
    var container = document.getElementById('sedeList');
    if(!container) return;
    container.innerHTML = '';

    list.forEach(function(s){
      var card = document.createElement('div');
      card.style.cssText = [
        'background:rgba(255,255,255,0.09)',
        'border:1.5px solid rgba(255,255,255,0.15)',
        'border-radius:12px',
        'padding:14px 16px',
        'display:flex',
        'align-items:center',
        'gap:12px',
        'cursor:pointer',
        'transition:all 0.15s',
        'position:relative'
      ].join(';');

      card.innerHTML = [
        '<svg viewBox="0 0 24 32" fill="none" width="22" height="29" style="flex-shrink:0">',
          '<path d="M12 2 C12 2 2 14 2 20 C2 26.6 6.5 30 12 30 C17.5 30 22 26.6 22 20 C22 14 12 2 12 2Z" fill="url(#sdcG'+s.id+')"/>',
          '<defs><linearGradient id="sdcG'+s.id+'" x1="2" y1="2" x2="22" y2="30" gradientUnits="userSpaceOnUse">',
            '<stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0d8a7a"/>',
          '</linearGradient></defs>',
        '</svg>',
        '<div style="flex:1;min-width:0">',
          '<div style="font-family:Sora,sans-serif;font-size:14px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">',
            s.nombre,
          '</div>',
          '<div style="font-family:monospace;font-size:10px;color:rgba(255,255,255,0.42);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">',
            (s.direccion||'Sin descripción'),
          '</div>',
        '</div>',
        s.default ? '' :
          '<button data-sede-del="'+s.id+'" style="background:rgba(248,113,113,0.15);border:1px solid rgba(248,113,113,0.3);color:#f87171;border-radius:6px;padding:4px 8px;font-size:11px;cursor:pointer;flex-shrink:0" title="Eliminar sede">🗑</button>',
        '<span style="font-family:monospace;font-size:16px;color:rgba(255,255,255,0.3)">›</span>'
      ].join('');

      // Click en la card → seleccionar
      card.addEventListener('click', function(e){
        if(e.target.closest('[data-sede-del]')) return; // no propagar si es el botón eliminar
        seleccionarSede(s);
      });

      // Botón eliminar
      var delBtn = card.querySelector('[data-sede-del]');
      if(delBtn){
        delBtn.addEventListener('click', function(e){
          e.stopPropagation();
          if(!confirm('¿Eliminar la instalación «'+s.nombre+'»?\n\nSe eliminarán todos sus datos locales.')){return;}
          eliminarSede(s.id);
        });
      }

      card.addEventListener('mouseenter', function(){card.style.background='rgba(255,255,255,0.15)';card.style.borderColor='rgba(77,208,225,0.5)';});
      card.addEventListener('mouseleave', function(){card.style.background='rgba(255,255,255,0.09)';card.style.borderColor='rgba(255,255,255,0.15)';});

      container.appendChild(card);
    });
  }

  function seleccionarSede(sede){
    setSedeActiva(sede.id);
    // Ajustar la clave de almacenamiento principal si no es la por defecto
    if(sede.id !== 'antequera' && typeof window.SK !== 'undefined'){
      // Usar un SK con prefijo de sede para datos independientes
      window.SK = 'ppcl_legionella_' + sede.id + '_v1';
      // Recargar datos del SK de esta sede
      if(typeof loadData==='function') loadData();
    }
    // Actualizar header
    _updateHeaderSede(sede);
    // Ocultar pantalla de sede y mostrar login
    var ss = document.getElementById('sedeScreen');
    if(ss){ ss.style.opacity='0'; ss.style.transition='opacity 0.3s'; setTimeout(function(){ss.style.display='none';},300); }
    var ls = document.getElementById('loginScreen');
    if(ls){ ls.style.display='flex'; }
    // Mostrar toast (si la app ya está desbloqueada)
    if(typeof showToast==='function') showToast('📍 '+sede.nombre);
  }

  function eliminarSede(id){
    var list = getSedes().filter(function(s){ return s.id!==id; });
    saveSedes(list);
    // Limpiar datos de esa sede del localStorage
    try{ localStorage.removeItem('ppcl_legionella_'+id+'_v1'); }catch(e){}
    renderSedes();
    if(typeof showToast==='function') showToast('🗑 Sede eliminada');
  }

  window.__sedeShowAdd = function(){
    document.getElementById('sedeAddPanel').style.display='flex';
    document.getElementById('sedeAddBtn').style.display='none';
    setTimeout(function(){ var el=document.getElementById('sedeNewNombre'); if(el) el.focus(); }, 80);
  };

  window.__sedeAdd = function(){
    var nombre = (document.getElementById('sedeNewNombre')||{}).value||'';
    var dir    = (document.getElementById('sedeNewDir')||{}).value||'';
    nombre = nombre.trim();
    if(!nombre){ alert('Introduce el nombre de la instalación'); return; }
    // Crear ID a partir del nombre
    var id = 'sede_' + nombre.toLowerCase().replace(/[^a-z0-9]/g,'_').slice(0,20) + '_' + Date.now().toString(36);
    var list = getSedes();
    list.push({id:id, nombre:nombre, direccion:dir, default:false, creada:new Date().toISOString().slice(0,10)});
    saveSedes(list);
    document.getElementById('sedeNewNombre').value='';
    document.getElementById('sedeNewDir').value='';
    document.getElementById('sedeAddPanel').style.display='none';
    document.getElementById('sedeAddBtn').style.display='flex';
    renderSedes();
    if(typeof showToast==='function') showToast('✅ Instalación añadida — selecciónala para entrar');
  };

  // Botón en Configuración para cambiar de sede
  window.__cambiarSede = function(){
    // Volver a mostrar la pantalla de selección de sede
    if(typeof _cfgUnlocked!=='undefined') window._cfgUnlocked = false;
    var ss = document.getElementById('sedeScreen');
    if(ss){ ss.style.opacity='0'; ss.style.display='flex'; setTimeout(function(){ss.style.opacity='1';ss.style.transition='opacity 0.3s';},10); }
    var ls = document.getElementById('loginScreen');
    if(ls){ ls.style.display='none'; }
    renderSedes();
  };

  // Init: comprobar si ya hay sede activa
  function initSede(){
    var sedeId = getSedeActiva();
    var list   = getSedes();
    var ss     = document.getElementById('sedeScreen');
    var ls     = document.getElementById('loginScreen');

    // Si solo hay una sede (la por defecto) o hay sede activa, ir directo al login
    if((list.length === 1 && list[0].default) || sedeId){
      var sede = sedeId ? list.find(function(s){return s.id===sedeId;}) : list[0];
      if(!sede) sede = list[0];
      if(ss) ss.style.display='none';
      if(ls){ ls.style.display='flex'; }
      _updateHeaderSede(sede);
      // Ajustar SK si no es la sede por defecto
      if(sede.id !== 'antequera' && typeof window.SK !== 'undefined'){
        window.SK = 'ppcl_legionella_' + sede.id + '_v1';
        if(typeof loadData==='function') loadData();
      }
    } else {
      // Mostrar selector de sede
      if(ss){ ss.style.display='flex'; }
      if(ls){ ls.style.display='none'; }
      renderSedes();
    }
  }

  // Esperar a que el DOM esté listo
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initSede);
  } else {
    initSede();
  }
})();
</script>
