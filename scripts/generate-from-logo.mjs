import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const publicDir = path.resolve('./public')

async function run(){
  try{
    // support both logo.png and logo.Png
    const candidates = ['logo.png','logo.Png','logo.PNG']
    let logoPath = null
    for(const c of candidates){
      const p = path.join(publicDir,c)
      try{ await fs.access(p); logoPath = p; break } catch{}
    }
    if(!logoPath) throw new Error('No logo file found in public/ (expected logo.png or logo.Png)')

    // create og-image (1200x630) with dark gradient background and logo centered
    const ogOut = path.join(publicDir,'og-image.png')
    const ogWidth = 1200, ogHeight = 630

    const bg = Buffer.from(`<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stop-color="#0ea5e9"/>
          <stop offset="1" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="black" />
      <rect width="100%" height="100%" fill="url(#g)" fill-opacity="0.18"/>
    </svg>`)

    // determine logo size — fit within 60% height
    const logoBuffer = await fs.readFile(logoPath)
    const logoMeta = await sharp(logoBuffer).metadata()
    const maxLogoHeight = Math.floor(ogHeight * 0.65)
    const maxLogoWidth = Math.floor(ogWidth * 0.65)
    let targetWidth = logoMeta.width
    let targetHeight = logoMeta.height
    const ratio = Math.min(maxLogoWidth / targetWidth, maxLogoHeight / targetHeight, 1)
    targetWidth = Math.round(targetWidth * ratio)
    targetHeight = Math.round(targetHeight * ratio)

    // create resized logo PNG with preserved transparency
    const logoResized = await sharp(logoBuffer)
      .resize(targetWidth, targetHeight, { fit: 'contain' })
      .png()
      .toBuffer()

    // composite onto background center
    await sharp(bg)
      .composite([{ input: logoResized, gravity: 'center' }])
      .png({ quality: 90 })
      .toFile(ogOut)
    console.log('Created', ogOut)

    // create favicon 512 and 192 from logo
    const fav512 = path.join(publicDir,'favicon-512.png')
    const fav192 = path.join(publicDir,'favicon-192.png')
    await sharp(logoBuffer).resize(512,512,{fit:'cover'}).png({quality:90}).toFile(fav512)
    await sharp(logoBuffer).resize(192,192,{fit:'cover'}).png({quality:90}).toFile(fav192)
    console.log('Created', fav512, fav192)

    // create ico from 512 PNG
    const icoOut = path.join(publicDir,'favicon.ico')
    const icoBuffer = await pngToIco(fav512)
    await fs.writeFile(icoOut, icoBuffer)
    console.log('Created', icoOut)

    console.log('All assets generated successfully')
  }catch(err){
    console.error('Error:', err.message)
    process.exit(1)
  }
}

run()
