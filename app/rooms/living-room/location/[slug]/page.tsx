import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { livingRoomLocations } from "@/components/rooms/living-room-styles"

export function generateStaticParams() {
  return livingRoomLocations.map(({ slug }) => ({ slug }))
}

export default async function LivingRoomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = livingRoomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/living-room#by-location"
      backLabel="All living room locations"
      collectionLabel="Living room by location"
      galleryTitle={`Living rooms in ${location.title}`}
      galleryDescription={`Explore living room inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
