const fs = require('fs')
const path = require('path')

const headerPath = path.join(__dirname, 'components/header.tsx')
const lines = fs.readFileSync(headerPath, 'utf8').split('\n')

// 0-indexed:
// Design Idea: 51 to 112 (inclusive)
// Services: 113 to 157 (inclusive)
// Rooms: 158 to 232 (inclusive)

const pre = lines.slice(0, 51)
const designIdea = lines.slice(51, 113)
const services = lines.slice(113, 158)
const rooms = lines.slice(158, 233)
const post = lines.slice(233)

// Change gap-10 to gap-16 in the nav container to add more space (line 50, which is pre[50])
for(let i=0; i<pre.length; i++) {
  if (pre[i].includes('gap-10 md:flex')) {
    pre[i] = pre[i].replace('gap-10', 'gap-16')
  }
}

// Reassemble: pre, rooms, services, designIdea, post
const newLines = [...pre, ...rooms, ...services, ...designIdea, ...post]

fs.writeFileSync(headerPath, newLines.join('\n'))

console.log("Swapped safely and added space!")
