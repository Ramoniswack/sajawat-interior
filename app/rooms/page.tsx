"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { RoomsHero } from "@/components/rooms/rooms-hero"
import { RoomCard } from "@/components/rooms/room-card"
import { rooms } from "@/lib/rooms-data-custom"

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

  const handleLearnMore = (room: any) => {
    // Map room IDs to their dedicated page routes
    const routeMap: Record<string, string> = {
      'living-room': '/rooms/living-room',
      'dining-room': '/rooms/dining-room',
      'family-room': '/rooms/family-room',
      'bedroom': '/rooms/bedroom',
      'master-suite': '/rooms/master-suite',
      'home-office': '/rooms/home-office',
      'kitchen': '/rooms/kitchen',
      'bathroom': '/rooms/bathroom',
      'laundry-room': '/rooms/laundry-room',
      'cafe': '/rooms/cafe',
      'restaurant': '/rooms/restaurant',
      'office-space': '/rooms/office-space',
    }

    const route = routeMap[room.id]
    if (route) {
      router.push(route)
    }
  }

  const filteredRooms = activeCategory === "all"
    ? rooms
    : rooms.filter((room) => {
        if (activeCategory === "living") return room.id === "living-room" || room.id === "dining-room" || room.id === "family-room"
        if (activeCategory === "bedroom") return room.id === "bedroom" || room.id === "master-suite"
        if (activeCategory === "kitchen") return room.id === "kitchen" || room.id === "dining-room"
        if (activeCategory === "bathroom") return room.id === "bathroom" || room.id === "laundry-room"
        if (activeCategory === "office") return room.id === "home-office" || room.id === "office-space"
        if (activeCategory === "commercial") return room.id === "cafe" || room.id === "restaurant"
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
              {filteredRooms.map((room, index) => {
                // Create varied sizes for abstract mosaic layout
                const sizes: Array<'small' | 'medium' | 'large' | 'wide' | 'tall'> = [
                  'large', 'medium', 'tall',
                  'medium', 'wide', 'small',
                  'tall', 'medium', 'large',
                  'small', 'medium', 'wide',
                  'tall', 'medium', 'large'
                ]
                const size = sizes[index % sizes.length]
                
                return (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    onLearnMore={handleLearnMore}
                    size={size}
                  />
                )
              })}
            </div>
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
                Design Styles
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
                Find the perfect aesthetic that matches your personality
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
              Ready to Transform Your Space?
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
              Let's discuss your project and create something beautiful together.
            </p>
            <button
              className="button-hover bg-[#e99816] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
