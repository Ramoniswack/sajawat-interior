"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function KitchenPage() {
  return (
    <RoomSubPage
      roomType="kitchen"
      roomName="Kitchen"
      description="Modern kitchens that blend function with beautiful form."
      basePath="/rooms/kitchen"
    />
  )
}
