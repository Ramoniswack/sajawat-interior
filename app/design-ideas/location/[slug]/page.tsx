import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { designIdeasItems, locationDescriptions } from "@/lib/design-ideas-data"

export function generateStaticParams() {
  return Object.keys(locationDescriptions).map((slug) => ({ slug }))
}

export default async function DesignIdeasLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const locationData = locationDescriptions[slug]

  if (!locationData) notFound()

  // Filter items by this location - only show related designs
  const galleryItems = designIdeasItems
    .filter(item => item.location === slug)
    .map(item => ({
      image: item.src,
      alt: item.alt || item.title,
      category: item.category,
      style: item.style,
    }))

  return (
    <RoomGallery
      title={locationData.title}
      description={locationData.description}
      gallery={galleryItems}
      backHref="/design-ideas#by-location"
      backLabel="All locations"
      collectionLabel="location collection"
      galleryTitle={`${locationData.title} Gallery`}
      galleryDescription={`Explore the unique design characteristics and cultural influences that define ${locationData.title.toLowerCase()} interiors.`}
      showFilters={false}
    />
  )
}