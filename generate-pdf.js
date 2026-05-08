import puppeteer from 'puppeteer'
import { spawn } from 'child_process'

(async () => {
  const server = spawn('npm', ['run', 'serve', '--', '--no-open'])
  await new Promise(resolve => setTimeout(resolve, 1000))

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("http://localhost:4173")
  await page.pdf({ path: 'docs/resume.pdf', format: 'A4' })

  await browser.close()
  server.kill()
})()
