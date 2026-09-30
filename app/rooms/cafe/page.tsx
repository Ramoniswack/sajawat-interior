"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function CafePage() {
  return (
    <RoomSubPage
      roomType="cafe"
      roomName="Café"
      description="Create an inviting café atmosphere with the right design."
      basePath="/rooms/cafe"
    />
  )
}
