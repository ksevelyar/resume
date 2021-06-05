import puppeteer from 'puppeteer'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url));

(async () => { 
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`file:${currentDir}/docs/index.html`)
  await page.pdf({ path: 'docs/resume.pdf', format: 'A4' })

  await browser.close()
})()
