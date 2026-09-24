import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { bedroomLocations } from "@/components/rooms/bedroom-styles"

export function generateStaticParams() {
  return bedroomLocations.map(({ slug }) => ({ slug }))
}

export default async function BedroomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = bedroomLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/bedroom#by-location"
      backLabel="All bedroom locations"
      collectionLabel="bedroom by location"
      galleryTitle={`Bedrooms in ${location.title}`}
      galleryDescription={`Explore bedroom inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
