import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { familyRoomStyles } from "@/components/rooms/family-room-styles"

export function generateStaticParams() {
  return familyRoomStyles.map(({ slug }) => ({ slug }))
}

export default async function FamilyRoomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = familyRoomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/family-room#by-style"
      backLabel="All family room styles"
      collectionLabel="family room style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
