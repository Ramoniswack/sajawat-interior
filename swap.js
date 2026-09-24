const fs = require('fs')
const path = require('path')

const headerPath = path.join(__dirname, 'components/header.tsx')
let content = fs.readFileSync(headerPath, 'utf8')

// We will split the `<nav className="hidden h-full items-center gap-10 md:flex">` children.
// The structure is roughly:
// <nav ...>
//   <div className="group flex h-full items-center"> ... Design Idea ... </div>
//   <div className="group flex h-full items-center"> ... Services ... </div>
//   <div className="group flex h-full items-center"> ... Rooms ... </div>
//   <Link href="/about" ...> About </Link>
// </nav>

// We can just use string indexOf and slice to extract each div.
// To do this reliably, we'll locate the start of each block.

const navStart = content.indexOf('<nav className="hidden h-full items-center gap-10 md:flex">')
const designIdeaStart = content.indexOf('<div className="group flex h-full items-center">', navStart)
const servicesStart = content.indexOf('<div className="group flex h-full items-center">', designIdeaStart + 10)
const roomsStart = content.indexOf('<div className="group flex h-full items-center">', servicesStart + 10)
const aboutStart = content.indexOf('<Link', roomsStart + 10)

const designIdeaBlock = content.slice(designIdeaStart, servicesStart)
const servicesBlock = content.slice(servicesStart, roomsStart)
const roomsBlock = content.slice(roomsStart, aboutStart)

// Now reconstruct the nav content with Rooms first, then Services, then Design Idea.
const newNavContent = content.slice(0, designIdeaStart) + roomsBlock + servicesBlock + designIdeaBlock + content.slice(aboutStart)

fs.writeFileSync(headerPath, newNavContent)

console.log("Swapped!")
