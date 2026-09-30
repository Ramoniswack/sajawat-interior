import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { getRoomGalleryBySlug } from "@/lib/api-client"

export async function generateStaticParams() {
  // Dynamic params - will be generated at request time
  return []
}

export default async function BathroomLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Fetch from API only
  const apiData = await getRoomGalleryBySlug(slug)
  
  if (!apiData) {
    notFound()
  }
  
  // Transform API data to match RoomGallery component format
  const galleryItems = apiData.images.map(img => ({
    image: img.image,
    alt: img.alt,
    category: img.category,
    location: img.location,
  }))

  return (
    <RoomGallery
      title={apiData.title}
      description={apiData.description}
      gallery={galleryItems}
      backHref={apiData.back_href}
      backLabel={apiData.back_label}
      collectionLabel={apiData.collection_label}
      galleryTitle={apiData.gallery_title}
      galleryDescription={apiData.gallery_description}
      showFilters={apiData.show_filters}
      layout={apiData.gallery_layout as any}
    />
  )
}
