export type GalleryItem = {
  /** Unique id used as the React key and lightbox reference. */
  id: string
  /** Short title shown in the caption and lightbox. */
  title: string
  /** Optional longer description shown in the lightbox. */
  description?: string
  /** Category slug used by the filter bar. Must match one of `galleryCategories`. */
  category: string
  /** Media type. Images render an <img>, videos render a <video>. */
  type: "image" | "video"
  /** Media source URL. Leave empty ("") to render a neutral placeholder tile. */
  src?: string
  /** Alt text for images (also used as the video aria-label). */
  alt?: string
  /** Poster image URL for videos (optional). */
  poster?: string
  /**
   * Visual footprint in the masonry grid.
   * "tall" spans two rows, "wide" spans two columns, "large" spans both.
   */
  span?: "tall" | "wide" | "large"
}

/**
 * Filter categories. The first entry ("all") is always shown.
 * Add, rename, or remove categories freely — items reference these by `id`.
 */
export const galleryCategories: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Areas" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "kitchen", label: "Kitchen & Dining" },
  { id: "bathroom", label: "Bathrooms" },
  { id: "office", label: "Workspaces" },
  { id: "commercial", label: "Commercial" },
]

/**
 * Placeholder items. Replace `src`, `title`, `category`, etc. with your own data,
 * or fetch this list from an API and pass it into <Gallery items={...} />.
 * Items with an empty `src` render a neutral placeholder tile.
 */
export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Living Room", description: "Transform your living space into a warm, inviting gathering place. From cozy minimalism to luxurious entertaining spaces, find the perfect style for your lifestyle.", category: "living", type: "image", src: "/images/luxury-living-room.png", span: "large" },
  { id: "2", title: "Bedroom", description: "Create your personal sanctuary with bedroom designs that prioritize comfort, tranquility, and personal style. From serene retreats to dramatic master suites.", category: "bedroom", type: "image", src: "/images/luxury-bedroom.png", span: "tall" },
  { id: "3", title: "Kitchen", description: "Design the heart of your home with functional, beautiful kitchen spaces. Modern layouts, smart storage solutions, and stunning aesthetics for cooking and gathering.", category: "kitchen", type: "image", src: "/images/luxury-kitchen.png" },
  { id: "4", title: "Dining Room", description: "Elevate your dining experience with elegant dining room designs. From intimate family dinners to grand entertaining, create memorable spaces for every occasion.", category: "kitchen", type: "image", src: "/images/luxury-dining-room.png", span: "wide" },
  { id: "5", title: "Bathroom", description: "Transform your bathroom into a spa-like retreat. Luxurious fixtures, calming colors, and smart design for ultimate relaxation and functionality.", category: "bathroom", type: "image", src: "/images/interior-view.png" },
  { id: "6", title: "Home Office", description: "Create productive, inspiring workspaces at home. Ergonomic design, natural lighting, and organizational solutions for the modern professional.", category: "office", type: "image", src: "/images/hero-living-room.jpg", span: "tall" },
  { id: "7", title: "Cafe", description: "Design inviting cafe spaces that blend comfort with functionality. From cozy coffee corners to bustling cafes, create atmospheres that keep customers coming back.", category: "commercial", type: "image", src: "/images/luxury-living-room.png" },
  { id: "8", title: "Restaurant", description: "Create memorable dining experiences with restaurant interior design. From intimate bistros to grand dining halls, design spaces that enhance culinary journeys.", category: "commercial", type: "image", src: "/images/luxury-dining-room.png", span: "wide" },
  { id: "9", title: "Office Space", description: "Design productive and inspiring commercial office spaces. Modern layouts, collaborative areas, and professional aesthetics for business success.", category: "commercial", type: "image", src: "/images/interior-view.png" },
]
