import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { kitchenLocations } from "@/components/rooms/kitchen-styles"

export function generateStaticParams() {
  return kitchenLocations.map(({ slug }) => ({ slug }))
}

export default async function KitchenLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = kitchenLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/kitchen#by-location"
      backLabel="All kitchen locations"
      collectionLabel="kitchen by location"
      galleryTitle={`Kitchens in ${location.title}`}
      galleryDescription={`Explore kitchen inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
