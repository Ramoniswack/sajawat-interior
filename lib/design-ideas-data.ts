import type { GalleryItem } from "@/lib/gallery-data"

export const designIdeasCategories: { id: string; label: string }[] = [
  { id: "all", label: "All Ideas" },
  { id: "style", label: "By Style" },
  { id: "location", label: "By Location" },
  { id: "featured", label: "Featured" },
]

export const designIdeasItems: GalleryItem[] = [
  // Styles
  {
    id: "1",
    title: "Newari Contemporary Fusion",
    description: "Experience the perfect harmony of traditional Newari architecture and contemporary design. This style features exposed red brick walls, intricately carved wooden elements, paired with modern minimalist furniture.",
    category: "style",
    style: "newari-contemporary",
    type: "image",
    src: "/images/luxury-living-room.png",
    span: "large",
  },
  {
    id: "2",
    title: "Nepali Mongolian Modern",
    description: "Drawing inspiration from the rich heritage of Gurung, Magar, and Tamang cultures, this modern style incorporates traditional geometric rugs, cultural artifacts, and elegant wooden furniture.",
    category: "style",
    style: "mongolian-modern",
    type: "image",
    src: "/images/luxury-bedroom.png",
    span: "tall",
  },
  {
    id: "3",
    title: "Modern Nepali Minimalist",
    description: "Embracing the 'less is more' philosophy, the Modern Nepali Minimalist style focuses on clean lines, natural materials, and uncluttered spaces. Subtle traditional motifs are integrated thoughtfully.",
    category: "style",
    style: "nepali-minimalist",
    type: "image",
    src: "/images/luxury-kitchen.png",
    span: "wide",
  },
  {
    id: "4",
    title: "Nepali Rustic",
    description: "Capture the charm of a mountain cabin with the Nepali Rustic aesthetic. This style highlights exposed stone walls, raw timber beams, and mud-plastered effects, complemented by warm textiles.",
    category: "style",
    style: "nepali-rustic",
    type: "image",
    src: "/images/luxury-dining-room.png",
    span: "tall",
  },
  {
    id: "5",
    title: "Nepali Biophilic",
    description: "Connect with nature through the Nepali Biophilic design. By incorporating abundant indoor plants, bamboo elements, and traditional Dhaka fabric accents, this style blurs the lines between indoor and outdoor.",
    category: "style",
    style: "nepali-biophilic",
    type: "image",
    src: "/images/luxury-living-room.png",
    span: "tall",
  },
  {
    id: "12",
    title: "Himalayan Spa",
    description: "Calming colors inspired by mountain hot springs with natural materials for rejuvenation. Features stone elements, warm lighting, and therapeutic water features.",
    category: "style",
    style: "himalayan-spa",
    type: "image",
    src: "/images/luxury-bedroom.png",
    span: "wide",
  },
  // Locations
  {
    id: "6",
    title: "Kathmandu City",
    description: "Urban sophistication meets traditional charm in Kathmandu interiors. Perfect for city living with a blend of modern amenities and cultural heritage.",
    category: "location",
    location: "kathmandu",
    type: "image",
    src: "/images/luxury-dining-room.png",
    span: "wide",
  },
  {
    id: "7",
    title: "Pokhara Lakeside",
    description: "Lakeside tranquility inspires Pokhara interiors. Natural light, panoramic views, and relaxed elegance define this serene style.",
    category: "location",
    location: "pokhara",
    type: "image",
    src: "/images/luxury-bedroom.png",
    span: "tall",
  },
  {
    id: "8",
    title: "Chitwan Jungle",
    description: "Jungle-inspired elegance for Chitwan interiors. Earthy tones, natural materials, and wildlife motifs create a unique connection to nature.",
    category: "location",
    location: "chitwan",
    type: "image",
    src: "/images/luxury-kitchen.png",
    span: "wide",
  },
  {
    id: "13",
    title: "Lalitpur Residence",
    description: "Traditional Newari craftsmanship meets modern luxury in Lalitpur homes. Features intricate woodwork, traditional patterns, and contemporary amenities.",
    category: "location",
    location: "lalitpur",
    type: "image",
    src: "/images/luxury-living-room.png",
    span: "large",
  },
  // Featured
  {
    id: "9",
    title: "Modern Living Room",
    description: "A stunning modern living room design that combines comfort with contemporary aesthetics, perfect for urban living in Kathmandu.",
    category: "featured",
    type: "image",
    src: "/images/luxury-living-room.png",
    span: "large",
  },
  {
    id: "10",
    title: "Serene Bedroom",
    description: "A peaceful bedroom retreat inspired by Pokhara's lakeside tranquility, featuring natural materials and calming colors.",
    category: "featured",
    type: "image",
    src: "/images/luxury-bedroom.png",
    span: "tall",
  },
  {
    id: "11",
    title: "Contemporary Kitchen",
    description: "A modern kitchen design from Lalitpur that blends functionality with elegant aesthetics, perfect for the contemporary home.",
    category: "featured",
    type: "image",
    src: "/images/luxury-kitchen.png",
    span: "wide",
  },
]

// Style descriptions for gallery pages
export const styleDescriptions: Record<string, { title: string; description: string }> = {
  "newari-contemporary": {
    title: "Newari Contemporary Fusion",
    description: "Experience the perfect harmony of traditional Newari architecture and contemporary design. This style features exposed red brick walls, intricately carved wooden elements, paired with modern minimalist furniture."
  },
  "mongolian-modern": {
    title: "Nepali Mongolian Modern",
    description: "Drawing inspiration from the rich heritage of Gurung, Magar, and Tamang cultures, this modern style incorporates traditional geometric rugs, cultural artifacts, and elegant wooden furniture."
  },
  "nepali-minimalist": {
    title: "Modern Nepali Minimalist",
    description: "Embracing the 'less is more' philosophy, the Modern Nepali Minimalist style focuses on clean lines, natural materials, and uncluttered spaces. Subtle traditional motifs are integrated thoughtfully."
  },
  "nepali-rustic": {
    title: "Nepali Rustic",
    description: "Capture the charm of a mountain cabin with the Nepali Rustic aesthetic. This style highlights exposed stone walls, raw timber beams, and mud-plastered effects, complemented by warm textiles."
  },
  "nepali-biophilic": {
    title: "Nepali Biophilic",
    description: "Connect with nature through the Nepali Biophilic design. By incorporating abundant indoor plants, bamboo elements, and traditional Dhaka fabric accents, this style blurs the lines between indoor and outdoor."
  },
  "himalayan-spa": {
    title: "Himalayan Spa",
    description: "Calming colors inspired by mountain hot springs with natural materials for rejuvenation. Features stone elements, warm lighting, and therapeutic water features."
  },
}

// Location descriptions for gallery pages
export const locationDescriptions: Record<string, { title: string; description: string }> = {
  "kathmandu": {
    title: "Kathmandu City",
    description: "Urban sophistication meets traditional charm in Kathmandu interiors. Perfect for city living with a blend of modern amenities and cultural heritage."
  },
  "pokhara": {
    title: "Pokhara Lakeside",
    description: "Lakeside tranquility inspires Pokhara interiors. Natural light, panoramic views, and relaxed elegance define this serene style."
  },
  "chitwan": {
    title: "Chitwan Jungle",
    description: "Jungle-inspired elegance for Chitwan interiors. Earthy tones, natural materials, and wildlife motifs create a unique connection to nature."
  },
  "lalitpur": {
    title: "Lalitpur Residence",
    description: "Traditional Newari craftsmanship meets modern luxury in Lalitpur homes. Features intricate woodwork, traditional patterns, and contemporary amenities."
  },
}