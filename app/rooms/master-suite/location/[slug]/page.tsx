import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { masterSuiteLocations } from "@/components/rooms/master-suite-styles"

export function generateStaticParams() {
  return masterSuiteLocations.map(({ slug }) => ({ slug }))
}

export default async function MasterSuiteLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = masterSuiteLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/master-suite#by-location"
      backLabel="All master suite locations"
      collectionLabel="master suite by location"
      galleryTitle={`MasterSuites in ${location.title}`}
      galleryDescription={`Explore master suite inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
