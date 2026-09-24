import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { locationRoomsData } from "@/lib/location-rooms-data"

export function generateStaticParams() {
  return Object.keys(locationRoomsData).map((slug) => ({ slug }))
}

export default async function DesignIdeasLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const roomData = locationRoomsData[slug]

  if (!roomData) notFound()

  // Get all designs from all room types for this location
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
      backHref="/design-ideas#by-location"
      backLabel="All locations"
      collectionLabel="location collection"
      galleryTitle={`${roomData.title} Gallery`}
      galleryDescription={`Explore the unique design characteristics and cultural influences that define ${roomData.title.toLowerCase()} interiors across all room types.`}
      showFilters={true}
    />
  )
}