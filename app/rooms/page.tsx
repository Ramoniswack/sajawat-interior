"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomsHero } from "@/components/rooms/rooms-hero"
import { RoomCard } from "@/components/rooms/room-card"
import { api, Room, RoomsPage } from "@/lib/api"

const roomCategories = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Areas" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "kitchen", label: "Kitchen & Dining" },
  { id: "bathroom", label: "Bathrooms" },
  { id: "office", label: "Workspaces" },
  { id: "commercial", label: "Commercial" },
]

export default function RoomsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("all")
  const [rooms, setRooms] = useState<Room[]>([])
  const [roomsPageData, setRoomsPageData] = useState<RoomsPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Ensure rooms is always an array
  const safeRooms = Array.isArray(rooms) ? rooms : []

  useEffect(() => {
    async function fetchRoomsData() {
      try {
        setLoading(true)
        const [roomsData, pageData] = await Promise.all([
          api.getRooms(),
          api.getRoomsPage()
        ])
        setRooms(Array.isArray(roomsData) ? roomsData : [])
        setRoomsPageData(pageData)
      } catch (err) {
        console.error('Failed to fetch rooms data:', err)
        setError('Failed to load rooms. Please try again later.')
        setRooms([])
      } finally {
        setLoading(false)
      }
    }

    fetchRoomsData()
  }, [])

  const handleLearnMore = (room: Room) => {
    // Navigate to room detail page using room ID
    router.push(`/rooms/${room.id}`)
  }

  const filteredRooms = activeCategory === "all"
    ? safeRooms
    : safeRooms.filter((room) => {
        // Filter by room_type name from API
        const roomTypeName = room.room_type.name.toLowerCase()
        if (activeCategory === "living") return roomTypeName.includes('living') || roomTypeName.includes('dining') || roomTypeName.includes('family')
        if (activeCategory === "bedroom") return roomTypeName.includes('bedroom') || roomTypeName.includes('master')
        if (activeCategory === "kitchen") return roomTypeName.includes('kitchen') || roomTypeName.includes('dining')
        if (activeCategory === "bathroom") return roomTypeName.includes('bathroom') || roomTypeName.includes('laundry')
        if (activeCategory === "office") return roomTypeName.includes('office')
        if (activeCategory === "commercial") return roomTypeName.includes('cafe') || roomTypeName.includes('restaurant')
        return true
      })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <RoomsHero />

        {/* Rooms Section */}
        <section className="py-24 bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                <p className="mt-4 text-gray-600">Loading rooms...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Content */}
            {!loading && !error && (
              <>
                {/* Filter Buttons */}
                <div className="mb-8 flex flex-wrap justify-center gap-3">
                  {roomCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-2.5 text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                  {filteredRooms.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-600">No rooms found in this category.</p>
                    </div>
                  ) : (
                    filteredRooms.map((room, index) => {
                      // Create varied sizes for abstract mosaic layout
                      const sizes: Array<'small' | 'medium' | 'large' | 'wide' | 'tall'> = [
                        'large', 'medium', 'tall',
                        'medium', 'wide', 'small',
                        'tall', 'medium', 'large',
                        'small', 'medium', 'wide',
                        'tall', 'medium', 'large'
                      ]
                      const size = sizes[index % sizes.length]
                      
                      // Transform API data to match component expected format
                      const transformedRoom = {
                        id: room.id.toString(),
                        title: room.title,
                        description: room.description,
                        image: room.image_url || room.image || '/images/placeholder-room.jpg',
                      }
                      
                      return (
                        <RoomCard
                          key={room.id}
                          room={transformedRoom}
                          index={index}
                          onLearnMore={() => handleLearnMore(room)}
                          size={size}
                        />
                      )
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Style Categories Section */}
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
                {roomsPageData?.design_styles_title || 'Design Styles'}
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
                {roomsPageData?.design_styles_description || 'Find the perfect aesthetic that matches your personality'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Modern", description: "Clean lines, neutral colors, sophisticated minimalism" },
                { title: "Traditional", description: "Classic elegance with rich textures and timeless elements" },
                { title: "Contemporary", description: "Current trends blended with comfort for fresh spaces" },
                { title: "Transitional", description: "Perfect balance between traditional warmth and modern sophistication" },
              ].map((style, index) => (
                <div
                  key={index}
                  className="process-step relative border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3
                    className="mb-3 text-lg font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {style.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    {style.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-100">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="mb-6 text-3xl font-light text-foreground md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {roomsPageData?.cta_title || 'Ready to Transform Your Space?'}
            </h2>
            <p
              className="mb-8 text-lg text-muted-foreground"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              {roomsPageData?.cta_description || "Let's discuss your project and create something beautiful together."}
            </p>
            <Link
              href={roomsPageData?.cta_button_link || '/contact'}
              className="button-hover bg-[#e99816] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {roomsPageData?.cta_button_text || 'Start Your Project'}
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
