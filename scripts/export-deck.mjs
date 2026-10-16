// Genera PDF y PPTX como capturas exactas (1920x1080) de la presentación web.
// Uso: npm run dev (en otra terminal) y luego: npm run export
import { chromium } from 'playwright-core'
import PptxGenJS from 'pptxgenjs'
import { mkdirSync, writeFileSync } from 'node:fs'

const URL = process.argv[2] || 'http://localhost:5173'
const NAME = 'Karla_USIL_Creator_Economy'
const OUT = 'public/downloads'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'msedge' })
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await page.goto(URL + '/#1')
await page.waitForSelector('.slide')
const total = await page.evaluate(() => Number(document.querySelector('.counter').textContent.split('/')[1]))
const shots = []
for (let i = 1; i <= total; i++) {
  await page.goto(`${URL}/#${i}`)
  await page.reload()
  await page.waitForSelector('.slide')
  await page.evaluate(() => document.fonts.ready)
  await page.addStyleTag({ content: '.controls{display:none!important}' })
  await page.waitForTimeout(900)
  shots.push((await page.screenshot({ type: 'jpeg', quality: 94 })).toString('base64'))
  console.log('captura', i)
}

const pptx = new PptxGenJS()
pptx.defineLayout({ name: 'W16x9', width: 13.333, height: 7.5 })
pptx.layout = 'W16x9'
shots.forEach((s) => pptx.addSlide().addImage({ data: 'image/jpeg;base64,' + s, x: 0, y: 0, w: 13.333, h: 7.5 }))
await pptx.writeFile({ fileName: `${OUT}/${NAME}.pptx` })

const html = `<style>@page{size:1920px 1080px;margin:0}html,body{margin:0}img{display:block;width:1920px;height:1080px;page-break-after:always}</style>${shots
  .map((s) => `<img src="data:image/jpeg;base64,${s}">`)
  .join('')}`
const pdfPage = await browser.newPage()
await pdfPage.setContent(html)
await pdfPage.pdf({ path: `${OUT}/${NAME}.pdf`, width: '1920px', height: '1080px', printBackground: true })
await browser.close()
console.log('Listo:', OUT)
