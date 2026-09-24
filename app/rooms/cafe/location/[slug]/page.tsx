import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { cafeLocations } from "@/components/rooms/cafe-styles"

export function generateStaticParams() {
  return cafeLocations.map(({ slug }) => ({ slug }))
}

export default async function CafeLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = cafeLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/cafe#by-location"
      backLabel="All cafe locations"
      collectionLabel="cafe by location"
      galleryTitle={`Cafes in ${location.title}`}
      galleryDescription={`Explore cafe inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
