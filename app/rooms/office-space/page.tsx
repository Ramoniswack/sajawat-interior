"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomGalleryCard } from "@/components/rooms/room-gallery-card"

const officeSpaceImages = [
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari office design with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
  {
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=800&auto=format&fit=crop",
    title: "Mountain Retreat",
    description: "Cozy atmosphere inspired by Himalayan homes with warm lighting and natural textures."
  },
  {
    url: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop",
    title: "Tibetan Influence",
    description: "Buddhist-inspired design with mandala patterns and spiritual color palettes."
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    title: "Royal Tharu Style",
    description: "Traditional Tharu tribal patterns with earthy colors and handcrafted decorative elements."
  },
  {
    url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    title: "Sherpa Business",
    description: "Mountain-inspired office design with Sherpa cultural elements and natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    title: "Gurung Heritage",
    description: "Traditional Gurung patterns with warm colors and cultural significance."
  },
]

const byStyleImages = [
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari office design with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
]

const byLocationImages = [
  {
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu City",
    description: "Space-efficient design perfect for Kathmandu business district with smart solutions."
  },
  {
    url: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop",
    title: "Lalitpur Business",
    description: "Spacious layout with room for productivity and traditional Newari elements."
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Business",
    description: "Professional design with natural materials and lakeside inspiration."
  },
  {
    url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    title: "Chitwan Business",
    description: "Flexible layout designed for collaboration with earthy colors inspired by Terai region."
  },
]

export default function OfficeSpacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center">
              <h1
                className="mb-6 text-5xl font-light text-foreground md:text-6xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Office Space Designs
              </h1>
              <p
                className="mx-auto max-w-2xl text-lg text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Professional office spaces designed for productivity and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">Office Space Gallery</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {officeSpaceImages.map((item, index) => (
                <RoomGalleryCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">By Style</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {byStyleImages.map((item, index) => (
                <RoomGalleryCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">By Location</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {byLocationImages.map((item, index) => (
                <RoomGalleryCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}