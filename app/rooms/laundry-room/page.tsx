"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function LaundryRoomPage() {
  return (
    <RoomSubPage
      roomType="laundry-room"
      roomName="Laundry Room"
      description="Efficient and stylish laundry room designs."
      basePath="/rooms/laundry-room"
    />
  )
}
