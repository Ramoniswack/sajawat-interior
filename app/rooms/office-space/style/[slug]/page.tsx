import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { officeSpaceStyles } from "@/components/rooms/office-space-styles"

export function generateStaticParams() {
  return officeSpaceStyles.map(({ slug }) => ({ slug }))
}

export default async function OfficeSpaceStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = officeSpaceStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/office-space#by-style"
      backLabel="All office space styles"
      collectionLabel="office space style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
