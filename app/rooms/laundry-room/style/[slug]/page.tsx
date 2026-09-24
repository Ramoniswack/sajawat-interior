import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { laundryRoomStyles } from "@/components/rooms/laundry-room-styles"

export function generateStaticParams() {
  return laundryRoomStyles.map(({ slug }) => ({ slug }))
}

export default async function LaundryRoomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = laundryRoomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/laundry-room#by-style"
      backLabel="All laundry room styles"
      collectionLabel="laundry room style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
