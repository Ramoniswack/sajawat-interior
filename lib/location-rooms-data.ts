import { bathroomStyles, bathroomLocations } from "@/components/rooms/bathroom-styles"
import { bedroomStyles, bedroomLocations } from "@/components/rooms/bedroom-styles"
import { cafeStyles, cafeLocations } from "@/components/rooms/cafe-styles"
import { diningRoomStyles, diningRoomLocations } from "@/components/rooms/dining-room-styles"
import { familyRoomStyles, familyRoomLocations } from "@/components/rooms/family-room-styles"
import { homeOfficeStyles, homeOfficeLocations } from "@/components/rooms/home-office-styles"
import { kitchenStyles, kitchenLocations } from "@/components/rooms/kitchen-styles"
import { laundryRoomStyles, laundryRoomLocations } from "@/components/rooms/laundry-room-styles"
import { livingRoomStyles, livingRoomLocations } from "@/components/rooms/living-room-styles"
import { masterSuiteStyles, masterSuiteLocations } from "@/components/rooms/master-suite-styles"
import { officeSpaceStyles, officeSpaceLocations } from "@/components/rooms/office-space-styles"
import { restaurantStyles, restaurantLocations } from "@/components/rooms/restaurant-styles"

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

export type StyleData = {
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

function aggregateDesignsByStyle(): Record<string, StyleData> {
  const allRooms = [
    { type: "bathroom", styles: bathroomStyles },
    { type: "bedroom", styles: bedroomStyles },
    { type: "cafe", styles: cafeStyles },
    { type: "dining-room", styles: diningRoomStyles },
    { type: "family-room", styles: familyRoomStyles },
    { type: "home-office", styles: homeOfficeStyles },
    { type: "kitchen", styles: kitchenStyles },
    { type: "laundry-room", styles: laundryRoomStyles },
    { type: "living-room", styles: livingRoomStyles },
    { type: "master-suite", styles: masterSuiteStyles },
    { type: "office-space", styles: officeSpaceStyles },
    { type: "restaurant", styles: restaurantStyles },
  ]

  const styleData: Record<string, StyleData> = {}

  allRooms.forEach(({ type, styles }) => {
    styles.forEach((style) => {
      const key = style.slug

      if (!styleData[key]) {
        styleData[key] = {
          slug: key,
          title: style.title,
          description: style.description,
          designs: [],
        }
      }

      // Add designs from this room type for this style
      style.gallery.forEach((item) => {
        styleData[key].designs.push({
          roomType: type,
          roomName: roomTypeNames[type] || type,
          image: item.image,
          alt: item.alt,
        })
      })
    })
  })

  // Filter out styles with no designs
  Object.keys(styleData).forEach(key => {
    if (styleData[key].designs.length === 0) {
      delete styleData[key]
    }
  })

  return styleData
}

export const locationRoomsData = aggregateDesignsByLocation()
export const styleRoomsData = aggregateDesignsByStyle()

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

export const styleDescriptions: Record<string, { title: string; description: string }> = {
  "nepali-traditional": {
    title: "Nepali Traditional",
    description: "Warm earthy tones with traditional Nepali patterns and handcrafted elements across all room types."
  },
  "himalayan-spa": {
    title: "Himalayan Spa",
    description: "Calming colors inspired by mountain hot springs with natural materials for rejuvenation."
  },
  "himalayan-minimalist": {
    title: "Himalayan Minimalist",
    description: "Clean lines inspired by mountain landscapes with natural materials and serene colors."
  },
  "newari-heritage": {
    title: "Newari Heritage",
    description: "Traditional Newari design with intricate carvings and rich cultural motifs."
  },
  "kathmandu-contemporary": {
    title: "Kathmandu Contemporary",
    description: "Modern design blended with traditional Nepali textiles and vibrant cultural colors."
  },
}