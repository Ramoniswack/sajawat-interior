import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { homeOfficeLocations } from "@/components/rooms/home-office-styles"

export function generateStaticParams() {
  return homeOfficeLocations.map(({ slug }) => ({ slug }))
}

export default async function HomeOfficeLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = homeOfficeLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/home-office#by-location"
      backLabel="All home office locations"
      collectionLabel="home office by location"
      galleryTitle={`HomeOffices in ${location.title}`}
      galleryDescription={`Explore home office inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
