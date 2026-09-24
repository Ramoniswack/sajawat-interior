import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { laundryRoomLocations } from "@/components/rooms/laundry-room-styles"

export function generateStaticParams() {
  return laundryRoomLocations.map(({ slug }) => ({ slug }))
}

export default async function LaundryRoomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = laundryRoomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/laundry-room#by-location"
      backLabel="All laundry room locations"
      collectionLabel="laundry room by location"
      galleryTitle={`Laundry rooms in ${location.title}`}
      galleryDescription={`Explore laundry room inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
