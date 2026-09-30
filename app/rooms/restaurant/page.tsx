"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function RestaurantPage() {
  return (
    <RoomSubPage
      roomType="restaurant"
      roomName="Restaurant"
      description="Atmospheric restaurant interiors for a memorable dining experience."
      basePath="/rooms/restaurant"
    />
  )
}
