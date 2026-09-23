import type { GalleryItem } from "@/lib/gallery-data"

export type ServiceItem = GalleryItem & { features?: string[] }

/**
 * Filter categories. The first entry ("all") is always shown.
 * Add, rename, or remove categories freely — items reference these by `id`.
 */
export const serviceCategories: { id: string; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "styling", label: "Furniture & Styling" },
]

/**
 * Service items. Replace `src`, `title`, `category`, etc. with your own data,
 * or fetch this list from an API and pass it into <Gallery items={...} />.
 * Items with an empty `src` render a neutral placeholder tile.
 */
export const serviceItems: ServiceItem[] = [
  {
    id: "1",
    title: "Residential Interior",
    description: "Transform your home into a sanctuary. Our residential interior design services create personalized spaces that reflect your lifestyle, preferences, and cultural heritage. From cozy apartments to sprawling family homes, we bring warmth and functionality to every room.",
    category: "residential",
    type: "image",
    src: "/images/luxury-living-room.png",
    span: "large",
    features: ["Custom Design", "Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
  },
  {
    id: "2",
    title: "Office or Workspace",
    description: "Create productive and inspiring work environments. Our office design services focus on optimizing workflow, enhancing employee well-being, and reflecting your brand identity. From home offices to corporate headquarters, we design spaces that drive success.",
    category: "commercial",
    type: "image",
    src: "/images/interior-view.png",
    span: "tall",
    features: ["Ergonomic Design", "Brand Integration", "Collaborative Spaces", "Technology Integration", "Acoustic Solutions"]
  },
  {
    id: "3",
    title: "Hospitality or Café",
    description: "Design memorable experiences for your guests. Our hospitality design services create inviting atmospheres that encourage relaxation and social connection. From boutique hotels to cozy cafés, we craft spaces that leave lasting impressions.",
    category: "commercial",
    type: "image",
    src: "/images/luxury-dining-room.png",
    span: "wide",
    features: ["Ambience Creation", "Customer Flow Design", "Brand Storytelling", "Sustainable Materials", "Local Art Integration"]
  },
  {
    id: "4",
    title: "Furniture and Styling",
    description: "Curate the perfect pieces to complete your space. Our furniture and styling services help you select, arrange, and style furniture and accessories that complement your design vision. From statement pieces to subtle accents, we bring it all together.",
    category: "styling",
    type: "image",
    src: "/images/luxury-bedroom.png",
    features: ["Custom Furniture", "Art Selection", "Accessory Styling", "Textile Coordination", "Lighting Fixtures"]
  },
]
