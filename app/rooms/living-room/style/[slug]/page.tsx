import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { livingRoomStyles } from "@/components/rooms/living-room-styles"

export function generateStaticParams() {
  return livingRoomStyles.map(({ slug }) => ({ slug }))
}

export default async function LivingRoomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = livingRoomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/living-room#by-style"
      backLabel="All living room styles"
      collectionLabel="Living room style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
