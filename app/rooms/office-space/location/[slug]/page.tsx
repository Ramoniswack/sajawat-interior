import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { officeSpaceLocations } from "@/components/rooms/office-space-styles"

export function generateStaticParams() {
  return officeSpaceLocations.map(({ slug }) => ({ slug }))
}

export default async function OfficeSpaceLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = officeSpaceLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/office-space#by-location"
      backLabel="All office space locations"
      collectionLabel="office space by location"
      galleryTitle={`OfficeSpaces in ${location.title}`}
      galleryDescription={`Explore office space inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
