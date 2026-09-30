// API client for backend integration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'

// Navigation / Mega Menu API
export async function getNavigation() {
  try {
    const response = await fetch(`${API_BASE_URL}/navigation/`, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    })
    if (!response.ok) {
      console.warn(`Navigation API returned ${response.status}`)
      return []
    }
    const data = await response.json()
    const items = Array.isArray(data) ? data : data.results ?? []
    return items
  } catch (error) {
    console.error("Error fetching navigation:", error)
    return []
  }
}

// Home Page API
export async function getHomePageData() {
  try {
    const response = await fetch(`${API_BASE_URL}/`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return null
  }
}

// Widget-based Page API
export async function getPageBySlug(slug: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/widgets/pages/by_slug/?slug=${slug}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching page by slug:', error)
    return null
  }
}

// Design Ideas Style Page API
export async function getDesignIdeasStylePage(slug: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/widgets/design-ideas-style/by_slug/?slug=${slug}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching design ideas style page:', error)
    return null
  }
}

// Design Ideas Location Page API
export async function getDesignIdeasLocationPage(slug: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/widgets/design-ideas-location/by_slug/?slug=${slug}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching design ideas location page:', error)
    return null
  }
}

export type GalleryImage = {
  image: string
  alt: string
  category?: string
  location?: string
}

export type RoomGalleryData = {
  id: number
  room_type: string
  filter_type: string
  slug: string
  title: string
  description: string
  collection_label: string
  gallery_title: string
  gallery_description: string
  back_href: string
  back_label: string
  show_filters: boolean
  images: GalleryImage[]
  layout?: string // Optional for backward compatibility
}

export type DesignGalleryData = {
  id: number
  filter_type: string
  slug: string
  title: string
  description: string
  collection_label: string
  gallery_title: string
  gallery_description: string
  back_href: string
  back_label: string
  show_filters: boolean
  images: Array<{
    image: string
    alt: string
    room_type: string
    room_name: string
  }>
}

// Room Gallery API
export async function getRoomGalleryBySlug(slug: string): Promise<RoomGalleryData | null> {
  try {
    console.log(`Fetching room gallery from: ${API_BASE_URL}/rooms/galleries/by_slug/?slug=${slug}`)
    const response = await fetch(`${API_BASE_URL}/rooms/galleries/by_slug/?slug=${slug}`)
    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)
    
    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText)
      return null
    }
    
    const data = await response.json()
    console.log('API response data:', data)
    return transformRoomGalleryData(data)
  } catch (error) {
    console.error('Error fetching room gallery:', error)
    return null
  }
}

export async function getRoomGalleriesByType(roomType: string): Promise<RoomGalleryData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/galleries/by_room_type/?room_type=${roomType}`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data.map(transformRoomGalleryData)
  } catch (error) {
    console.error('Error fetching room galleries by type:', error)
    return []
  }
}

// Design Gallery API - Widget-based
export async function getDesignGalleryBySlug(slug: string, filterType: 'style' | 'location'): Promise<DesignGalleryData | null> {
  try {
    // Use widget-based API endpoints
    const endpoint = filterType === 'style' 
      ? `${API_BASE_URL}/widgets/design-ideas-style/by_slug/?slug=${slug}`
      : `${API_BASE_URL}/widgets/design-ideas-location/by_slug/?slug=${slug}`
    
    console.log(`Fetching design gallery from: ${endpoint}`)
    const response = await fetch(endpoint)
    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)
    
    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText)
      return null
    }
    
    const data = await response.json()
    console.log('API response data:', data)
    
    // Transform widget-based response to match expected format
    return transformWidgetDataToGallery(data)
  } catch (error) {
    console.error('Error fetching design gallery:', error)
    return null
  }
}

// Transform widget-based page data to gallery format
function transformWidgetDataToGallery(pageData: any): DesignGalleryData | null {
  if (!pageData || !pageData.widgets) {
    return null
  }
  
  // Find the gallery widget
  const galleryWidget = pageData.widgets.find((w: any) => w.content_type === 'gallery')
  if (!galleryWidget) {
    return null
  }
  
  const widget = galleryWidget.widget
  if (!widget) {
    return null
  }
  
  // Transform custom_items to images format
  const images = widget.custom_items || []
  
  return {
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
    collection_label: widget.gallery_title || 'Design Collection',
    gallery_title: widget.gallery_title || 'Gallery',
    gallery_description: widget.gallery_description || '',
    back_href: widget.back_href || '/design-ideas',
    back_label: widget.back_label || 'Back',
    show_filters: widget.show_filter !== false,
    images: images.map((item: any) => ({
      image: item.image,
      alt: item.alt,
      room_type: item.category,
    }))
  }
}

export async function getDesignGalleriesByType(filterType: 'style' | 'location'): Promise<DesignGalleryData[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/design-galleries/by_filter_type/?filter_type=${filterType}`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data.map(transformDesignGalleryData)
  } catch (error) {
    console.error('Error fetching design galleries by type:', error)
    return []
  }
}

// Transform backend data to frontend format
function transformRoomGalleryData(data: any): RoomGalleryData {
  return {
    id: data.id,
    room_type: data.room_type,
    filter_type: data.filter_type,
    slug: data.slug,
    title: data.title,
    description: data.description,
    collection_label: data.collection_label,
    gallery_title: data.gallery_title,
    gallery_description: data.gallery_description,
    back_href: data.back_href,
    back_label: data.back_label,
    show_filters: data.show_filters,
    images: data.images?.map((img: any) => ({
      image: img.image_url || img.image,
      alt: img.alt,
      category: img.category,
      location: img.location,
      aspect: img.aspect,
    })) || [],
  }
}

function transformDesignGalleryData(data: any): DesignGalleryData {
  return {
    id: data.id,
    filter_type: data.filter_type,
    slug: data.slug,
    title: data.title,
    description: data.description,
    collection_label: data.collection_label,
    gallery_title: data.gallery_title,
    gallery_description: data.gallery_description,
    back_href: data.back_href,
    back_label: data.back_label,
    show_filters: data.show_filters,
    images: data.images?.map((img: any) => ({
      image: img.image_url || img.image,
      alt: img.alt,
      room_type: img.room_type,
      room_name: img.room_name,
    })) || [],
  }
}
// Room Types API
export async function getRoomTypes() {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/types/`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data
  } catch (error) {
    console.error('Error fetching room types:', error)
    return []
  }
}

// Room Styles API
export async function getRoomStyles() {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/styles/`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data
  } catch (error) {
    console.error('Error fetching room styles:', error)
    return []
  }
}

// Design Idea API
export async function getDesignIdeaPage() {
  try {
    const response = await fetch(`${API_BASE_URL}/design-ideas/page/`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching design idea page:', error)
    return null
  }
}

export async function getDesignIdeaCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/design-ideas/categories/`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data
  } catch (error) {
    console.error('Error fetching design idea categories:', error)
    return []
  }
}

// Rooms Page API
export async function getRoomsPage() {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/page/`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    return data?.results?.[0] || data?.[0] || null
  } catch (error) {
    console.error('Error fetching rooms page:', error)
    return null
  }
}




export async function getDesignIdeas() {
  try {
    const response = await fetch(`${API_BASE_URL}/design-ideas/design-ideas/`)
    if (!response.ok) {
      return []
    }
    const data = await response.json()
    return data.results || data
  } catch (error) {
    console.error('Error fetching design ideas:', error)
    return []
  }
}

// ── Services API ──────────────────────────────────────────────────────────────
export async function getServicePage() {
  try {
    const res = await fetch(`${API_BASE_URL}/services/page/`, { next: { revalidate: 60 } })
    return res.ok ? await res.json() : null
  } catch { return null }
}

export async function getServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/services/services/`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return data.results || data
  } catch { return [] }
}

// ── Contact API ───────────────────────────────────────────────────────────────
export async function getContactPage() {
  try {
    const res = await fetch(`${API_BASE_URL}/contact/page/`, { next: { revalidate: 60 } })
    return res.ok ? await res.json() : null
  } catch { return null }
}

export async function submitContactForm(data: {
  name: string; email: string; phone?: string;
  subject?: string; message: string; service_interest?: string; budget?: string
}) {
  const res = await fetch(`${API_BASE_URL}/contact/submit/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.ok ? await res.json() : null
}

// ── Pricing API ───────────────────────────────────────────────────────────────
export async function getPricingPackages() {
  try {
    const res = await fetch(`${API_BASE_URL}/pricing/packages/`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return data.results || data
  } catch { return [] }
}

// ── About / Home Page API ─────────────────────────────────────────────────────
export async function getAboutData() {
  try {
    const res = await fetch(`${API_BASE_URL}/`, { next: { revalidate: 60 } })
    return res.ok ? await res.json() : null
  } catch { return null }
}

// ── Rooms: galleries by room type (for room subpages) ─────────────────────────
export async function getRoomPageGalleries(roomType: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/rooms/galleries/by_room_type/?room_type=${roomType}`, {
      next: { revalidate: 60 }
    })
    if (!res.ok) return { styleCards: [], locationCards: [] }
    const data = await res.json()
    const galleries: any[] = data.results || data
    return {
      styleCards: galleries
        .filter((g: any) => g.filter_type === 'style')
        .map((g: any) => ({
          title: g.title,
          image: g.images?.[0]?.image_url || g.images?.[0]?.image || '/images/luxury-living-room.png',
          detail: g.description,
          slug: g.slug,
        })),
      locationCards: galleries
        .filter((g: any) => g.filter_type === 'location')
        .map((g: any) => ({
          title: g.title,
          image: g.images?.[0]?.image_url || g.images?.[0]?.image || '/images/luxury-living-room.png',
          detail: g.description,
          slug: g.slug,
        })),
    }
  } catch { return { styleCards: [], locationCards: [] } }
}
