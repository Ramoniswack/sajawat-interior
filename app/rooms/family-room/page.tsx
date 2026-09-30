"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function FamilyRoomPage() {
  return (
    <RoomSubPage
      roomType="family-room"
      roomName="Family Room"
      description="Cosy family spaces designed for togetherness and comfort."
      basePath="/rooms/family-room"
    />
  )
}
