import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { diningRoomStyles } from "@/components/rooms/dining-room-styles"

export function generateStaticParams() {
  return diningRoomStyles.map(({ slug }) => ({ slug }))
}

export default async function DiningRoomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = diningRoomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/dining-room#by-style"
      backLabel="All dining room styles"
      collectionLabel="dining room style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
