// Renders public/og-image.svg → public/og-image.png
// Run with: node scripts/render-og.mjs
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svg = readFileSync(resolve(__dirname, '../public/og-image.svg'), 'utf-8')

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
})
const png = resvg.render().asPng()
writeFileSync(resolve(__dirname, '../public/og-image.png'), png)
console.log('Wrote og-image.png:', png.length, 'bytes')
