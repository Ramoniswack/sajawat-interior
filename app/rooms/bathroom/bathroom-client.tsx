"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RoomModal } from "@/components/rooms/room-modal"
import { FluidCardStack } from "@/components/ui/fluid-card-stack"

interface BathroomClientProps {
  byStyleCards: Array<{
    title: string
    image: string
    detail: string
    slug: string
  }>
  isLocation?: boolean
}

export default function BathroomClient({ byStyleCards, isLocation = false }: BathroomClientProps) {
  const router = useRouter()
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExplore = (item: any) => {
    setSelectedRoom({
      id: item.title.toLowerCase().replace(/\s+/g, '-'),
      title: item.title,
      description: item.detail,
      image: item.image
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedRoom(null)
  }

  const galleryType = isLocation ? 'location' : 'style'
  const basePath = isLocation ? '/rooms/bathroom/location/' : '/rooms/bathroom/style/'

  return (
    <>
      <div className="flex justify-center">
        <FluidCardStack 
          cards={byStyleCards} 
          galleryType={galleryType} 
          onCardClick={(card) => {
            const slug = card.slug || card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            router.push(`${basePath}${slug}`)
          }} 
        />
      </div>

      <RoomModal room={selectedRoom} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
