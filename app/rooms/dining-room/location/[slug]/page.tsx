import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { diningRoomLocations } from "@/components/rooms/dining-room-styles"

export function generateStaticParams() {
  return diningRoomLocations.map(({ slug }) => ({ slug }))
}

export default async function DiningRoomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = diningRoomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/dining-room#by-location"
      backLabel="All dining room locations"
      collectionLabel="dining room by location"
      galleryTitle={`Dining rooms in ${location.title}`}
      galleryDescription={`Explore dining room inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
