import { bathroomLocations } from "@/components/rooms/bathroom-styles"
import { bedroomLocations } from "@/components/rooms/bedroom-styles"
import { cafeLocations } from "@/components/rooms/cafe-styles"
import { diningRoomLocations } from "@/components/rooms/dining-room-styles"
import { familyRoomLocations } from "@/components/rooms/family-room-styles"
import { homeOfficeLocations } from "@/components/rooms/home-office-styles"
import { kitchenLocations } from "@/components/rooms/kitchen-styles"
import { laundryRoomLocations } from "@/components/rooms/laundry-room-styles"
import { livingRoomLocations } from "@/components/rooms/living-room-styles"
import { masterSuiteLocations } from "@/components/rooms/master-suite-styles"
import { officeSpaceLocations } from "@/components/rooms/office-space-styles"
import { restaurantLocations } from "@/components/rooms/restaurant-styles"

export type RoomDesign = {
  roomType: string
  roomName: string
  image: string
  alt: string
}

export type LocationData = {
  slug: string
  title: string
  description: string
  designs: RoomDesign[]
}

// Map location slugs to their display names
const locationNameMap: Record<string, string> = {
  "kathmandu": "Kathmandu City",
  "kathmandu-city": "Kathmandu City",
  "pokhara": "Pokhara Lakeside",
  "pokhara-lakeside": "Pokhara Lakeside",
  "chitwan": "Chitwan Jungle",
  "chitwan-jungle": "Chitwan Jungle",
  "lalitpur": "Lalitpur Residence",
  "lalitpur-residence": "Lalitpur Residence",
  "lalitpur-cafe": "Lalitpur Cafe",
  "lalitpur-dining": "Lalitpur Dining",
  "kathmandu-business": "Kathmandu Business",
  "pokhara-business": "Pokhara Business",
  "chitwan-business": "Chitwan Business",
}

// Map location slug key to the actual slug used in room data
const locationSlugMap: Record<string, string[]> = {
  "kathmandu": ["kathmandu-city", "kathmandu-business"],
  "pokhara": ["pokhara-lakeside", "pokhara-business"],
  "chitwan": ["chitwan-jungle", "chitwan-business"],
  "lalitpur": ["lalitpur-residence", "lalitpur-cafe", "lalitpur-dining"],
}

const roomTypeNames: Record<string, string> = {
  "bathroom": "Bathroom",
  "bedroom": "Bedroom",
  "cafe": "Cafe",
  "dining-room": "Dining Room",
  "family-room": "Family Room",
  "home-office": "Home Office",
  "kitchen": "Kitchen",
  "laundry-room": "Laundry Room",
  "living-room": "Living Room",
  "master-suite": "Master Suite",
  "office-space": "Office Space",
  "restaurant": "Restaurant",
}

function aggregateDesignsByLocation(): Record<string, LocationData> {
  const allRooms = [
    { type: "bathroom", locations: bathroomLocations },
    { type: "bedroom", locations: bedroomLocations },
    { type: "cafe", locations: cafeLocations },
    { type: "dining-room", locations: diningRoomLocations },
    { type: "family-room", locations: familyRoomLocations },
    { type: "home-office", locations: homeOfficeLocations },
    { type: "kitchen", locations: kitchenLocations },
    { type: "laundry-room", locations: laundryRoomLocations },
    { type: "living-room", locations: livingRoomLocations },
    { type: "master-suite", locations: masterSuiteLocations },
    { type: "office-space", locations: officeSpaceLocations },
    { type: "restaurant", locations: restaurantLocations },
  ]

  const locationData: Record<string, LocationData> = {}

  allRooms.forEach(({ type, locations }) => {
    locations.forEach((location) => {
      const key = location.slug
      const mainSlug = Object.keys(locationSlugMap).find(
        (mainKey) => locationSlugMap[mainKey].includes(key)
      ) || key

      if (!locationData[mainSlug]) {
        locationData[mainSlug] = {
          slug: mainSlug,
          title: locationNameMap[mainSlug] || location.title,
          description: location.description,
          designs: [],
        }
      }

      // Add designs from this room type for this location
      location.gallery.forEach((item) => {
        locationData[mainSlug].designs.push({
          roomType: type,
          roomName: roomTypeNames[type] || type,
          image: item.image,
          alt: item.alt,
        })
      })
    })
  })

  // Filter out locations with no designs
  Object.keys(locationData).forEach(key => {
    if (locationData[key].designs.length === 0) {
      delete locationData[key]
    }
  })

  return locationData
}

export const locationRoomsData = aggregateDesignsByLocation()

export const locationDescriptions: Record<string, { title: string; description: string }> = {
  "kathmandu": {
    title: "Kathmandu City",
    description: "Urban sophistication meets traditional charm in Kathmandu interiors. Explore room designs from bathrooms to living rooms, all crafted for city living with a blend of modern amenities and cultural heritage."
  },
  "pokhara": {
    title: "Pokhara Lakeside",
    description: "Lakeside tranquility inspires Pokhara interiors. Discover breezy, light-filled spaces across all room types, from bedrooms to kitchens, featuring natural materials and panoramic views of the serene lakeside environment."
  },
  "chitwan": {
    title: "Chitwan Jungle",
    description: "Jungle-inspired elegance for Chitwan interiors. Explore rustic charm across all room types with earthy tones, natural materials, and wildlife motifs that create a unique connection to nature in the Terai region."
  },
  "lalitpur": {
    title: "Lalitpur Residence",
    description: "Traditional Newari craftsmanship meets modern luxury in Lalitpur homes. Features intricate woodwork, traditional patterns, and contemporary amenities across all room types from dining spaces to offices."
  },
}