"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RoomCard } from "@/components/rooms/room-card"

const roomCategories = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Areas" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "kitchen", label: "Kitchen & Dining" },
  { id: "bathroom", label: "Bathrooms" },
  { id: "office", label: "Workspaces" },
  { id: "commercial", label: "Commercial" },
]

interface RoomsClientProps {
  rooms: Array<{
    id: string
    title: string
    description: string
    image: string
  }>
}

export default function RoomsClient({ rooms }: RoomsClientProps) {
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
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
    </>
  )
}
