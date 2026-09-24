import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { kitchenStyles } from "@/components/rooms/kitchen-styles"

export function generateStaticParams() {
  return kitchenStyles.map(({ slug }) => ({ slug }))
}

export default async function KitchenStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = kitchenStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/kitchen#by-style"
      backLabel="All kitchen styles"
      collectionLabel="kitchen style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
