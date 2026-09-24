const fs = require('fs')
const path = require('path')

function convertPageToComponent(pagePath, componentPath, componentName, sectionId) {
  if (!fs.existsSync(pagePath)) return;
  let content = fs.readFileSync(pagePath, 'utf8')
  
  // Remove Header, Footer, and the fixed progress bar
  content = content.replace(/<Header \/>/g, '')
  content = content.replace(/<FooterSection \/>/g, '')
  content = content.replace(/<motion\.div\s+className="fixed top-0 left-0 right-0 h-1 bg-\[#e99816\] z-50 origin-left"\s+style=\{\{ scaleX: scrollYProgress \}\}\s+\/>/g, '')
  
  // Also we want to wrap the main part in an <div id={sectionId}> instead of <div className="flex min-h-screen...">
  // Or just replace <main className="flex-grow"> with <div id={sectionId} className="w-full">
  content = content.replace(/<main className="flex-grow">/g, `<div id="${sectionId}" className="w-full pt-20">`)
  content = content.replace(/<\/main>/g, `</div>`)
  
  // Remove the wrapper div <div className="flex min-h-screen flex-col">
  content = content.replace(/<div className="flex min-h-screen flex-col">/g, '')
  // The closing div of that wrapper is right before the return statement ends, which is near the end.
  // We'll just remove the last </div> before `)`
  content = content.replace(/<\/div>\s*\)\s*\}\s*$/m, ')\n}')

  // Rename the component
  content = content.replace(/export default function \w+\(\) \{/, `export function ${componentName}() {`)

  // Remove unused imports (Header, FooterSection)
  content = content.replace(/import \{ Header \} from "@\/components\/header"/g, '')
  content = content.replace(/import \{ FooterSection \} from "@\/components\/sections\/footer-section"/g, '')

  fs.writeFileSync(componentPath, content)
  console.log(`Converted ${pagePath} to ${componentPath}`)
}

const dir = path.join(__dirname)
convertPageToComponent(path.join(dir, 'app/timing/page.tsx'), path.join(dir, 'components/services/timing-section.tsx'), 'TimingSection', 'timing')
convertPageToComponent(path.join(dir, 'app/field-visit/page.tsx'), path.join(dir, 'components/services/field-visit-section.tsx'), 'FieldVisitSection', 'field-visit')
convertPageToComponent(path.join(dir, 'app/payment/page.tsx'), path.join(dir, 'components/services/payment-section.tsx'), 'PaymentSection', 'payment')

// Now update app/services/page.tsx
const servicesPagePath = path.join(dir, 'app/services/page.tsx')
let servicesContent = fs.readFileSync(servicesPagePath, 'utf8')

// Add imports
const imports = `import { TimingSection } from "@/components/services/timing-section"
import { FieldVisitSection } from "@/components/services/field-visit-section"
import { PaymentSection } from "@/components/services/payment-section"`
servicesContent = servicesContent.replace('import { ServicesHero } from "@/components/services/services-hero"', 'import { ServicesHero } from "@/components/services/services-hero"\n' + imports)

// Update the links in the grid to be anchor links
servicesContent = servicesContent.replace(/href="\/timing"/g, 'href="#timing"')
servicesContent = servicesContent.replace(/href="\/field-visit"/g, 'href="#field-visit"')
servicesContent = servicesContent.replace(/href="\/payment"/g, 'href="#payment"')

// Insert the sections before CTA
const sectionsString = `        <TimingSection />
        <FieldVisitSection />
        <PaymentSection />
`
servicesContent = servicesContent.replace('{/* CTA Section */}', sectionsString + '\n        {/* CTA Section */}')

fs.writeFileSync(servicesPagePath, servicesContent)
console.log('Updated app/services/page.tsx')

// Finally update header.tsx
const headerPath = path.join(dir, 'components/header.tsx')
let headerContent = fs.readFileSync(headerPath, 'utf8')

headerContent = headerContent.replace(/href="\/timing"/g, 'href="/services#timing"')
headerContent = headerContent.replace(/href="\/field-visit"/g, 'href="/services#field-visit"')
headerContent = headerContent.replace(/href="\/payment"/g, 'href="/services#payment"')

fs.writeFileSync(headerPath, headerContent)
console.log('Updated header.tsx')
