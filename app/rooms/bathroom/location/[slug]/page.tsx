import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { bathroomLocations } from "@/components/rooms/bathroom-styles"

export function generateStaticParams() {
  return bathroomLocations.map(({ slug }) => ({ slug }))
}

export default async function BathroomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = bathroomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/bathroom#by-location"
      backLabel="All bathroom locations"
      collectionLabel="bathroom by location"
      galleryTitle={`Bathrooms in ${location.title}`}
      galleryDescription={`Explore bathroom inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
