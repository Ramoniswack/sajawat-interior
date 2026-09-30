"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function DiningRoomPage() {
  return (
    <RoomSubPage
      roomType="dining-room"
      roomName="Dining Room"
      description="Elegant dining spaces for memorable meals together."
      basePath="/rooms/dining-room"
    />
  )
}
