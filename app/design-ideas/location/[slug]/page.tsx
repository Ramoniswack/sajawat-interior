import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { getDesignIdeasLocationPage } from "@/lib/api-client"

export async function generateStaticParams() {
  // Dynamic params - will be generated at request time
  return []
}

export default async function DesignIdeasLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Fetch from widget-based API
  const pageData = await getDesignIdeasLocationPage(slug)
  
  if (!pageData) {
    notFound()
  }
  
  // Find the gallery widget
  const galleryWidget = pageData.widgets?.find((w: any) => w.content_type === 'gallery')
  const widgetData = galleryWidget?.data
  
  if (!widgetData) {
    notFound()
  }
  
  // Transform widget data to match RoomGallery component format
  const galleryItems = widgetData.custom_items?.map((item: any) => ({
    image: item.image,
    alt: item.alt,
    category: item.category,
  })) || []

  return (
    <RoomGallery
      title={pageData.title}
      description={pageData.description}
      gallery={galleryItems}
      backHref={widgetData.back_href || '/design-ideas'}
      backLabel={widgetData.back_label || 'Back'}
      collectionLabel={widgetData.gallery_title || 'Design Collection'}
      galleryTitle={widgetData.gallery_title || 'Gallery'}
      galleryDescription={widgetData.gallery_description || ''}
      showFilters={widgetData.show_filter !== false}
    />
  )
}