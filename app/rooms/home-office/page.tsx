"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function HomeOfficePage() {
  return (
    <RoomSubPage
      roomType="home-office"
      roomName="Home Office"
      description="Productive and stylish home office designs."
      basePath="/rooms/home-office"
    />
  )
}
