const fs = require('fs')
const path = require('path')

const roomsDir = path.join(__dirname, 'app/rooms')

const dirs = fs.readdirSync(roomsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'living-room')
  .map(dirent => dirent.name)

for (const room of dirs) {
  const pagePath = path.join(roomsDir, room, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue

  let content = fs.readFileSync(pagePath, 'utf8')

  // Find the location FluidCardStack and replace style with location
  // We can look for galleryType="location" onCardClick=...
  
  // A simple regex replacement for the incorrect routing
  content = content.replace(
    /galleryType="location" onCardClick=\{\(card\) => \{\s*const slug = card\.title\.toLowerCase\(\)\.replace\(\/\[\^a-z0-9\]\+\/g, '-'\)\s*router\.push\(`\/rooms\/(.+?)\/style\/\$\{slug\}`\)\s*\}\}/g,
    'galleryType="location" onCardClick={(card) => {\n                  const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, \'-\')\n                  router.push(`/rooms/$1/location/${slug}`)\n                }}'
  )

  fs.writeFileSync(pagePath, content)
}

console.log("Fixed routing for by location sections")
