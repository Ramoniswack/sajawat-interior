import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { homeOfficeStyles } from "@/components/rooms/home-office-styles"

export function generateStaticParams() {
  return homeOfficeStyles.map(({ slug }) => ({ slug }))
}

export default async function HomeOfficeStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = homeOfficeStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/home-office#by-style"
      backLabel="All home office styles"
      collectionLabel="home office style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
