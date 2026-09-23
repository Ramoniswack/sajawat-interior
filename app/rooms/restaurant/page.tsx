"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomGalleryCard } from "@/components/rooms/room-gallery-card"

const restaurantImages = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari restaurant design with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    title: "Mountain Retreat",
    description: "Cozy atmosphere inspired by Himalayan homes with warm lighting and natural textures."
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    title: "Tibetan Influence",
    description: "Buddhist-inspired design with prayer flag colors and spiritual elements."
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    title: "Royal Tharu Style",
    description: "Traditional Tharu tribal patterns with earthy colors and handcrafted decorative elements."
  },
]

const byStyleImages = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden elements."
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari restaurant design with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
]

const byLocationImages = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu City",
    description: "Space-efficient design perfect for Kathmandu's Durbar Square area with smart seating solutions."
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    title: "Lalitpur Dining",
    description: "Spacious layout with comfortable seating and traditional Newari elements."
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    title: "Chitwan Jungle",
    description: "Rustic charm with natural materials and earthy colors inspired by Terai region."
  },
]

export default function RestaurantPage() {
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
                Restaurant Designs
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
                Elegant restaurant interiors that enhance the dining experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="mb-12 text-3xl font-light text-foreground">Restaurant Gallery</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {restaurantImages.map((item, index) => (
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