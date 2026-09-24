import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { cafeStyles } from "@/components/rooms/cafe-styles"

export function generateStaticParams() {
  return cafeStyles.map(({ slug }) => ({ slug }))
}

export default async function CafeStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = cafeStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/cafe#by-style"
      backLabel="All cafe styles"
      collectionLabel="cafe style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
