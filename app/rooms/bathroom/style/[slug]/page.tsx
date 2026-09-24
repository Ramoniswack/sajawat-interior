import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { bathroomStyles } from "@/components/rooms/bathroom-styles"

export function generateStaticParams() {
  return bathroomStyles.map(({ slug }) => ({ slug }))
}

export default async function BathroomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = bathroomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/bathroom#by-style"
      backLabel="All bathroom styles"
      collectionLabel="bathroom style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
