"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function OfficeSpacePage() {
  return (
    <RoomSubPage
      roomType="office-space"
      roomName="Office Space"
      description="Professional office interiors that inspire productivity."
      basePath="/rooms/office-space"
    />
  )
}
