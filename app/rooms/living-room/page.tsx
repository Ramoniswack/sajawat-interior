"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomGalleryCard } from "@/components/rooms/room-gallery-card"

const livingRoomImages = [
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari architecture with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
  {
    url: "https://images.unsplash.com/photo-1600573472591-ee6c563aaec5?q=80&w=800&auto=format&fit=crop",
    title: "Mountain Retreat",
    description: "Cozy atmosphere inspired by Himalayan homes with warm lighting and natural textures."
  },
  {
    url: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=800&auto=format&fit=crop",
    title: "Tibetan Influence",
    description: "Buddhist-inspired design with prayer flags, mandala patterns, and spiritual elements."
  },
  {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop",
    title: "Royal Tharu Style",
    description: "Traditional Tharu tribal patterns with earthy colors and handcrafted decorative elements."
  },
]

const byStyleImages = [
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari architecture with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
]

const byLocationImages = [
  {
    url: "https://images.unsplash.com/photo-1600573472591-ee6c563aaec5?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu City",
    description: "Space-efficient design perfect for Kathmandu living with smart storage solutions."
  },
  {
    url: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=800&auto=format&fit=crop",
    title: "Lalitpur Residence",
    description: "Family-friendly layout with comfortable seating and traditional Newari elements."
  },
  {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop",
    title: "Chitwan Jungle",
    description: "Rustic charm with natural materials and earthy colors inspired by Terai region."
  },
]

export default function LivingRoomPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
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
                Living Room Designs
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
                Transform your living space into a warm, inviting haven for relaxation and entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">Living Room Gallery</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {livingRoomImages.map((item, index) => (
                <RoomGalleryCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* By Style Section */}
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

        {/* By Location Section */}
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