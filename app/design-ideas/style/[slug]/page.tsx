import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { designIdeasItems, styleDescriptions } from "@/lib/design-ideas-data"

export function generateStaticParams() {
  return Object.keys(styleDescriptions).map((slug) => ({ slug }))
}

export default async function DesignIdeasStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const styleData = styleDescriptions[slug]

  if (!styleData) notFound()

  // Filter items by this style
  const galleryItems = designIdeasItems
    .filter(item => item.style === slug)
    .map(item => ({
      image: item.src,
      alt: item.alt || item.title,
      category: item.category,
      location: item.location,
    }))

  return (
    <RoomGallery
      title={styleData.title}
      description={styleData.description}
      gallery={galleryItems}
      backHref="/design-ideas#by-style"
      backLabel="All design styles"
      collectionLabel="design style collection"
      galleryTitle={`${styleData.title} Gallery`}
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${styleData.title.toLowerCase()} to life.`}
      showFilters={false}
    />
  )
}