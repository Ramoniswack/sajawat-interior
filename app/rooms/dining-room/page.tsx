"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomModal } from "@/components/rooms/room-modal"
import { FluidCardStack } from "@/components/ui/fluid-card-stack"

const diningRoomImages = [
  {
    url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden dining sets."
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Newari Heritage",
    description: "Traditional Newari dining design with intricate wood carvings and rich cultural motifs."
  },
  {
    url: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Mountain Retreat",
    description: "Cozy atmosphere inspired by Himalayan homes with warm lighting and natural textures."
  },
  {
    url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
    title: "Tibetan Influence",
    description: "Buddhist-inspired design with mandala patterns and spiritual color palettes."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Pokhara Lakeside",
    description: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Royal Tharu Style",
    description: "Traditional Tharu tribal patterns with earthy colors and handcrafted decorative elements."
  },
]

const byStyleCards = [
  {
    title: "Nepali Traditional",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    detail: "Warm earthy tones with traditional Nepali patterns and handcrafted wooden dining sets."
  },
  {
    title: "Himalayan Minimalist",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    detail: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  {
    title: "Newari Heritage",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    detail: "Traditional Newari dining design with intricate wood carvings and rich cultural motifs."
  },
  {
    title: "Kathmandu Contemporary",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    detail: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
]

const byLocationCards = [
  {
    title: "Kathmandu City",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    detail: "Space-efficient design perfect for Kathmandu living with smart storage solutions."
  },
  {
    title: "Lalitpur Residence",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
    detail: "Family-friendly layout with comfortable seating and traditional Newari elements."
  },
  {
    title: "Pokhara Lakeside",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    detail: "Breezy, light-filled spaces inspired by lakeside living with natural materials."
  },
  {
    title: "Chitwan Jungle",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    detail: "Rustic charm with natural materials and earthy colors inspired by Terai region."
  },
]

export default function DiningRoomPage() {
  const router = useRouter()
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExplore = (item: any) => {
    setSelectedRoom({
      id: item.title.toLowerCase().replace(/\s+/g, '-'),
      title: item.title,
      description: item.description,
      image: item.url
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedRoom(null)
  }

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
                Dining Room Designs
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
                Create memorable dining experiences with elegant and functional dining spaces.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                By Style
              </h2>
              <p
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Explore different design styles to find the perfect aesthetic for your space.
              </p>
            </div>
            <div className="flex justify-center">
              <FluidCardStack cards={byStyleCards} galleryType="style" onCardClick={(card) => {
                  const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  router.push(`/rooms/dining-room/style/${slug}`)
                }} />
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                By Location
              </h2>
              <p
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Discover designs inspired by different regions and cultural influences.
              </p>
            </div>
            <div className="flex justify-center">
              <FluidCardStack cards={byLocationCards} galleryType="location" onCardClick={(card) => {
                  const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  router.push(`/rooms/dining-room/style/${slug}`)
                }} />
            </div>
          </div>
        </section>
      </main>

      <RoomModal room={selectedRoom} isOpen={isModalOpen} onClose={handleCloseModal} />

      <FooterSection />
    </div>
  )
}