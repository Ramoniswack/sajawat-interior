"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function LivingRoomPage() {
  return (
    <RoomSubPage
      roomType="living-room"
      roomName="Living Room"
      description="Transform your living space into a warm, inviting haven."
      basePath="/rooms/living-room"
    />
  )
}
