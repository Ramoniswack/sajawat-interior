"use client"

import { useMemo, useState } from "react"
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/gallery-data"
import { GalleryFilters } from "./gallery-filters"
import { GalleryItem as GalleryItemCard } from "./gallery-item"
import { GalleryLightbox } from "./gallery-lightbox"

type ExtendedGalleryItem = GalleryItem & { features?: string[] }

type GalleryProps = {
  /** Title shown in the header. */
  title?: string
  /** Supporting line shown under the title. */
  subtitle?: string
  /** Items to display. Defaults to the placeholder set in lib/gallery-data. */
  items?: ExtendedGalleryItem[]
  /** Filter categories. Defaults to the placeholder set in lib/gallery-data. */
  categories?: { id: string; label: string }[]
}

export function Gallery({
  title = "Gallery",
  subtitle = "A blank, reusable gallery template. Replace the placeholder items with your own.",
  items = galleryItems,
  categories = galleryCategories,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => (activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)),
    [items, activeCategory],
  )

  const handleSelect = (item: ExtendedGalleryItem) => {
    const index = filtered.findIndex((i) => i.id === item.id)
    if (index >= 0) setOpenIndex(index)
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-balance text-3xl font-light tracking-tight sm:text-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', letterSpacing: '0.02em' }}>{title}</h1>
          <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>{subtitle}</p>
        </div>
        <GalleryFilters
          categories={categories}
          active={activeCategory}
          onChange={(id) => {
            setActiveCategory(id)
            setOpenIndex(null)
          }}
        />
      </header>

      <div className="mt-8">
        {filtered.length > 0 ? (
          <div className="grid auto-rows-[minmax(11rem,1fr)] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {filtered.map((item) => (
              <GalleryItemCard key={item.id} item={item} onSelect={handleSelect} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
            No items in this category.
          </div>
        )}
      </div>

      {openIndex !== null ? (
        <GalleryLightbox
          items={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </div>
  )
}
