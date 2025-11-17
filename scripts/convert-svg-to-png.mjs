import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const publicDir = path.resolve('./public')

async function run() {
  try {
    // OG image: 1200x630
    const ogSvg = path.join(publicDir, 'og-image.svg')
    const ogPng = path.join(publicDir, 'og-image.png')
    const svgExists = await fileExists(ogSvg)
    if (svgExists) {
      await sharp(ogSvg)
        .resize(1200, 630, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(ogPng)
      console.log('Created', ogPng)
    } else {
      console.warn('Missing', ogSvg)
    }

    // Favicon: 512x512 PNG and ICO
    const favSvg = path.join(publicDir, 'favicon.svg')
    const favPng512 = path.join(publicDir, 'favicon-512.png')
    const favIco = path.join(publicDir, 'favicon.ico')
    const favExists = await fileExists(favSvg)
    if (favExists) {
      await sharp(favSvg)
        .resize(512, 512)
        .png({ quality: 90 })
        .toFile(favPng512)
      console.log('Created', favPng512)

      const icoBuffer = await pngToIco(favPng512)
      await fs.writeFile(favIco, icoBuffer)
      console.log('Created', favIco)
    } else {
      console.warn('Missing', favSvg)
    }

    // Optionally create smaller favicons
    const favPng192 = path.join(publicDir, 'favicon-192.png')
    if (await fileExists(favPng512)) {
      await sharp(path.join(publicDir, 'favicon-512.png')).resize(192, 192).toFile(favPng192)
      console.log('Created', favPng192)
    }

    console.log('Conversion finished.')
  } catch (err) {
    console.error('Error during conversion:', err)
    process.exit(1)
  }
}

async function fileExists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

run()
