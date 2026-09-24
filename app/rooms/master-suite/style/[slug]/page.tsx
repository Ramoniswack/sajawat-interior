import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { masterSuiteStyles } from "@/components/rooms/master-suite-styles"

export function generateStaticParams() {
  return masterSuiteStyles.map(({ slug }) => ({ slug }))
}

export default async function MasterSuiteStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = masterSuiteStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/master-suite#by-style"
      backLabel="All master suite styles"
      collectionLabel="master suite style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
