"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomGalleryCard } from "@/components/rooms/room-gallery-card"

const bedroomImages = [
  {
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden bed frames."
  },
  {
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari carving patterns with rich cultural motifs and wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    title: "Mountain Retreat",
    description: "Cozy atmosphere inspired by Himalayan homes with warm lighting and natural textures."
  },
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    title: "Tibetan Influence",
    description: "Buddhist-inspired design with mandala patterns and spiritual color palettes."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    title: "Royal Tharu Style",
    description: "Traditional Tharu tribal patterns with earthy colors and handcrafted decorative elements."
  },
]

const byStyleImages = [
  {
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden bed frames."
  },
  {
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari carving patterns with rich cultural motifs and wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
]

const byLocationImages = [
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu City",
    description: "Space-efficient design perfect for Kathmandu living with smart storage solutions."
  },
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    title: "Lalitpur Residence",
    description: "Spacious layout with comfortable seating and traditional Newari elements."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    title: "Chitwan Jungle",
    description: "Rustic charm with natural materials and earthy colors inspired by Terai region."
  },
]

export default function BedroomPage() {
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
                Bedroom Designs
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
                Create serene and restful bedrooms for perfect relaxation and sleep.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">Bedroom Gallery</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {bedroomImages.map((item, index) => (
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