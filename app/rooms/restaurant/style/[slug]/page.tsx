import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { restaurantStyles } from "@/components/rooms/restaurant-styles"

export function generateStaticParams() {
  return restaurantStyles.map(({ slug }) => ({ slug }))
}

export default async function RestaurantStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = restaurantStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <RoomGallery
      title={style.title}
      description={style.description}
      gallery={style.gallery}
      backHref="/rooms/restaurant#by-style"
      backLabel="All restaurant styles"
      collectionLabel="restaurant style collection"
      galleryTitle="Spaces in this style"
      galleryDescription={`Explore the textures, tones, and thoughtful details that bring ${style.title.toLowerCase()} to life.`}
    />
  )
}
