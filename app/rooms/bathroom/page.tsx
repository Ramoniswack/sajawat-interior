"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function BathroomPage() {
  return (
    <RoomSubPage
      roomType="bathroom"
      roomName="Bathroom"
      description="Spa-like bathrooms designed for relaxation and rejuvenation."
      basePath="/rooms/bathroom"
    />
  )
}
