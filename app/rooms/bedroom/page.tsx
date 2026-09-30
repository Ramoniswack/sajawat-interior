"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function BedroomPage() {
  return (
    <RoomSubPage
      roomType="bedroom"
      roomName="Bedroom"
      description="Transform your bedroom into a peaceful sanctuary."
      basePath="/rooms/bedroom"
    />
  )
}
