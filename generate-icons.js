#!/usr/bin/env node
// ═══════════════════════════════════════════════════════
//  AquaControl Pro — Generador de iconos PWA
//  Genera todos los tamaños necesarios en /icons/
//  Uso: node generate-icons.js
//  Requiere: npm install canvas
// ═══════════════════════════════════════════════════════

const { createCanvas } = require('canvas');
const fs   = require('fs');
const path = require('path');

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const OUT_DIR = path.join(__dirname, 'icons');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx    = canvas.getContext('2d');
  const s      = size;

  // Fondo degradado oscuro (igual que el tema de la app)
  const bg = ctx.createLinearGradient(0, 0, s, s);
  bg.addColorStop(0, '#0f1f3d');
  bg.addColorStop(1, '#1a2f52');
  ctx.fillStyle = bg;
  // Esquinas redondeadas
  const r = s * 0.2;
  ctx.beginPath();
  ctx.moveTo(r, 0); ctx.lineTo(s-r, 0);
  ctx.quadraticCurveTo(s, 0, s, r);
  ctx.lineTo(s, s-r);
  ctx.quadraticCurveTo(s, s, s-r, s);
  ctx.lineTo(r, s);
  ctx.quadraticCurveTo(0, s, 0, s-r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // Gota de agua centrada
  const cx = s * 0.5;
  const top = s * 0.12;
  const bot = s * 0.88;
  const dropW = s * 0.38;

  const dropGrad = ctx.createLinearGradient(cx - dropW, top, cx + dropW, bot);
  dropGrad.addColorStop(0, '#4fc3f7');
  dropGrad.addColorStop(0.5, '#2589c7');
  dropGrad.addColorStop(1, '#0d8a7a');

  ctx.beginPath();
  ctx.moveTo(cx, top);
  ctx.bezierCurveTo(cx + dropW * 0.1, top + (bot - top) * 0.3,
                    cx + dropW,       top + (bot - top) * 0.55,
                    cx + dropW * 0.5, bot - s * 0.06);
  ctx.quadraticCurveTo(cx, bot, cx - dropW * 0.5, bot - s * 0.06);
  ctx.bezierCurveTo(cx - dropW,       top + (bot - top) * 0.55,
                    cx - dropW * 0.1, top + (bot - top) * 0.3,
                    cx, top);
  ctx.closePath();
  ctx.fillStyle = dropGrad;
  ctx.fill();

  // Reflejo
  ctx.beginPath();
  ctx.ellipse(cx + dropW * 0.15, top + (bot - top) * 0.22, dropW * 0.12, dropW * 0.22, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  ctx.fill();

  return canvas.toBuffer('image/png');
}

SIZES.forEach(size => {
  const buf  = drawIcon(size);
  const file = path.join(OUT_DIR, `icon-${size}.png`);
  fs.writeFileSync(file, buf);
  console.log(`✅ icon-${size}.png generado (${(buf.length / 1024).toFixed(1)} KB)`);
});

console.log('\n🎉 Todos los iconos generados en /icons/');
console.log('   Cópialos a tu carpeta de proyecto junto con index.html');
