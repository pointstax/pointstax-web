// Regenerates the raster icon set + OG image from the SVG sources.
// Run with: node scripts/render-icons.mjs
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = (f) => resolve(__dirname, '../public/', f)

// App-icon: the transparent card-stack mark composed onto a dark rounded square,
// so favicon / PWA / apple-touch read on browser tabs and home screens.
const markInner = readFileSync(pub('logo.svg'), 'utf-8')
  .replace(/^<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

const appIcon = `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" rx="224" fill="#0B0F1A"/>
  <g transform="translate(512 512) scale(0.8) translate(-512 -512)">${markInner}</g>
</svg>`

function renderToPng(svg, width) {
  return new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true },
  })
    .render()
    .asPng()
}

const iconTargets = [
  ['favicon.png', 48],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]

for (const [file, size] of iconTargets) {
  const png = renderToPng(appIcon, size)
  writeFileSync(pub(file), png)
  console.log(`Wrote ${file}: ${size}px, ${png.length} bytes`)
}

// OG image (1200×630) from its own source.
const og = renderToPng(readFileSync(pub('og-image.svg'), 'utf-8'), 1200)
writeFileSync(pub('og-image.png'), og)
console.log(`Wrote og-image.png: ${og.length} bytes`)
