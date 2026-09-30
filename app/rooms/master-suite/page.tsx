"use client"
import { RoomSubPage } from "@/components/rooms/room-sub-page"

export default function MasterSuitePage() {
  return (
    <RoomSubPage
      roomType="master-suite"
      roomName="Master Suite"
      description="Luxurious master suites designed for ultimate comfort."
      basePath="/rooms/master-suite"
    />
  )
}
