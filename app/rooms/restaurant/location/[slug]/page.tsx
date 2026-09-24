import { notFound } from "next/navigation"
import { RoomGallery } from "@/components/rooms/room-gallery"
import { restaurantLocations } from "@/components/rooms/restaurant-styles"

export function generateStaticParams() {
  return restaurantLocations.map(({ slug }) => ({ slug }))
}

export default async function RestaurantLocationGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = restaurantLocations.find((item) => item.slug === slug)

  if (!location) notFound()

  return (
    <RoomGallery
      title={location.title}
      description={location.description}
      gallery={location.gallery}
      backHref="/rooms/restaurant#by-location"
      backLabel="All restaurant locations"
      collectionLabel="restaurant by location"
      galleryTitle={`Restaurants in ${location.title}`}
      galleryDescription={`Explore restaurant inspiration shaped by the character and lifestyle of ${location.title}.`}
    />
  )
}
