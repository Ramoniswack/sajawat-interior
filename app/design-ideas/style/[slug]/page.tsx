import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { styleRoomsData } from "@/lib/location-rooms-data"

export function generateStaticParams() {
  return Object.keys(styleRoomsData).map((slug) => ({ slug }))
}

export default async function DesignIdeasStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const roomData = styleRoomsData[slug]

  if (!roomData) notFound()

  // Get all designs from all room types for this style
  const galleryItems = roomData.designs.map(design => ({
    image: design.image,
    alt: `${design.roomName} - ${design.alt}`,
    category: design.roomType,
  }))

  return (
    <RoomGallery
      title={roomData.title}
      description={roomData.description}
      gallery={galleryItems}
      backHref="/design-ideas#by-style"
      backLabel="All design styles"
      collectionLabel="design style collection"
      galleryTitle={`${roomData.title} Gallery`}
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${roomData.title.toLowerCase()} to life across all room types.`}
      showFilters={true}
    />
  )
}