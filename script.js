const fs = require('fs')
const path = require('path')

const roomsDir = path.join(__dirname, 'app/rooms')
const componentsDir = path.join(__dirname, 'components/rooms')

const dirs = fs.readdirSync(roomsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'living-room')
  .map(dirent => dirent.name)

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

for (const room of dirs) {
  const pagePath = path.join(roomsDir, room, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue

  let content = fs.readFileSync(pagePath, 'utf8')

  // Extract byStyleCards
  const styleMatch = content.match(/const byStyleCards = (\[[\s\S]*?\])/)
  // Extract byLocationCards
  const locationMatch = content.match(/const byLocationCards = (\[[\s\S]*?\])/)

  if (!styleMatch || !locationMatch) continue

  const styles = eval(styleMatch[1])
  const locations = eval(locationMatch[1])

  const transformToData = (arr) => {
    return arr.map(item => ({
      slug: slugify(item.title),
      title: item.title,
      image: item.image,
      detail: item.detail,
      description: item.detail,
      gallery: [
        { image: item.image, alt: item.title + " main" },
        { image: item.image, alt: item.title + " view 2" },
        { image: item.image, alt: item.title + " view 3" },
        { image: item.image, alt: item.title + " view 4" },
        { image: item.image, alt: item.title + " view 5" },
        { image: item.image, alt: item.title + " view 6" },
      ]
    }))
  }

  const roomStylesData = transformToData(styles)
  const roomLocationsData = transformToData(locations)

  const dataFileContent = `export const ${room.replace(/-./g, x => x[1].toUpperCase())}Styles = ${JSON.stringify(roomStylesData, null, 2)} as const

export const ${room.replace(/-./g, x => x[1].toUpperCase())}Locations = ${JSON.stringify(roomLocationsData, null, 2)} as const
`
  
  fs.writeFileSync(path.join(componentsDir, `${room}-styles.ts`), dataFileContent)

  // Now replace the content in page.tsx
  // We need to import useRouter
  if (!content.includes('useRouter')) {
    content = content.replace('import { useState } from "react"', 'import { useState } from "react"\nimport { useRouter } from "next/navigation"')
  }
  
  // Replace the component function to include router
  const componentNameMatch = content.match(/export default function ([a-zA-Z0-9]+)\(\)/)
  if (componentNameMatch) {
    const compName = componentNameMatch[1]
    content = content.replace(
      `export default function ${compName}() {`,
      `export default function ${compName}() {\n  const router = useRouter()`
    )
  }

  // Replace fluid card stack calls
  content = content.replace(
    /onCardClick={\(card\) => handleExplore\(\{ title: card\.title, description: card\.detail, url: '' \}\)}/g,
    (match, offset, str) => {
      // Find if it's style or location
      const before = str.substring(0, offset)
      if (before.includes('galleryType="style"')) {
        return `onCardClick={(card) => {
                  const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  router.push(\`/rooms/${room}/style/\${slug}\`)
                }}`
      } else {
         return `onCardClick={(card) => {
                  const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  router.push(\`/rooms/${room}/location/\${slug}\`)
                }}`
      }
    }
  )

  fs.writeFileSync(pagePath, content)

  // Create the dynamic routes for this room!
  const styleRouteDir = path.join(roomsDir, room, 'style', '[slug]')
  const locationRouteDir = path.join(roomsDir, room, 'location', '[slug]')
  
  fs.mkdirSync(styleRouteDir, { recursive: true })
  fs.mkdirSync(locationRouteDir, { recursive: true })

  const camelRoom = room.replace(/-./g, x => x[1].toUpperCase())
  const CapRoom = room.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')

  const styleRouteContent = `import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { ${camelRoom}Styles } from "@/components/rooms/${room}-styles"

export function generateStaticParams() {
  return ${camelRoom}Styles.map(({ slug }) => ({ slug }))
}

export default async function ${CapRoom}StyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = ${camelRoom}Styles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/${room}#by-style"
      backLabel="All ${room.replace('-', ' ')} styles"
      collectionLabel="${room.replace('-', ' ')} style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={\`Explore the textures, tones, and thoughtful details that bring \${style.title.toLowerCase()} to life.\`}
    />
  )
}
`

  const locationRouteContent = `import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { ${camelRoom}Locations } from "@/components/rooms/${room}-styles"

export function generateStaticParams() {
  return ${camelRoom}Locations.map(({ slug }) => ({ slug }))
}

export default async function ${CapRoom}LocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = ${camelRoom}Locations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/${room}#by-location"
      backLabel="All ${room.replace('-', ' ')} locations"
      collectionLabel="${room.replace('-', ' ')} by location"
      galleryTitle={\`${CapRoom.replace('Room', ' room')}s in \${location.title}\`}
      galleryDescription={\`Explore ${room.replace('-', ' ')} inspiration shaped by the character and lifestyle of \${location.title}.\`}
    />
  )
}
`

  fs.writeFileSync(path.join(styleRouteDir, 'page.tsx'), styleRouteContent)
  fs.writeFileSync(path.join(locationRouteDir, 'page.tsx'), locationRouteContent)
}

console.log("Done generating files!")
