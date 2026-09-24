import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { bedroomStyles } from "@/components/rooms/bedroom-styles"

export function generateStaticParams() {
  return bedroomStyles.map(({ slug }) => ({ slug }))
}

export default async function BedroomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = bedroomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/bedroom#by-style"
      backLabel="All bedroom styles"
      collectionLabel="bedroom style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
