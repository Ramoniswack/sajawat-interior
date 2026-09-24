import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { familyRoomLocations } from "@/components/rooms/family-room-styles"

export function generateStaticParams() {
  return familyRoomLocations.map(({ slug }) => ({ slug }))
}

export default async function FamilyRoomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = familyRoomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/family-room#by-location"
      backLabel="All family room locations"
      collectionLabel="family room by location"
      galleryTitle={`Family rooms in ${location.title}`}
      galleryDescription={`Explore family room inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
