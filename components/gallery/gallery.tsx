"use client"

import { useMemo, useState } from "react"
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/gallery-data"
import { GalleryFilters } from "./gallery-filters"
import { GalleryItem as GalleryItemCard } from "./gallery-item"

type ExtendedGalleryItem = GalleryItem & { features?: string[] }

// ── Layout presets ─────────────────────────────────────────────────────────────
// Pass `layout` to Gallery to switch between arrangements.
// Each preset maps to a Tailwind grid class.
export type GalleryLayout =
  | "2-col"     // 2 columns always — large cards, editorial
  | "3-col"     // 3 columns — balanced
  | "4-col"     // 4 columns — compact grid (default)
  | "masonry"   // 2→3→4 col responsive with row-span support

const layoutGridClass: Record<GalleryLayout, string> = {
  "2-col":   "grid-cols-2",
  "3-col":   "grid-cols-2 sm:grid-cols-3",
  "4-col":   "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  "masonry": "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}

// Gap size per layout
const layoutGapClass: Record<GalleryLayout, string> = {
  "2-col":   "gap-4 sm:gap-6",
  "3-col":   "gap-3 sm:gap-4",
  "4-col":   "gap-3 sm:gap-4",
  "masonry": "gap-3 sm:gap-4",
}

type GalleryProps = {
  title?: string
  subtitle?: string
  items?: ExtendedGalleryItem[]
  categories?: { id: string; label: string }[]
  /**
   * Grid layout preset.
   * "2-col"   → big cards, editorial look
   * "3-col"   → standard 3-up grid
   * "4-col"   → compact (default)
   * "masonry" → responsive with span support from item.span
   */
  layout?: GalleryLayout
  /** Hide the title/subtitle header */
  hideHeader?: boolean
}

export function Gallery({
  title = "Gallery",
  subtitle,
  items = galleryItems,
  categories = galleryCategories,
  layout = "4-col",
  hideHeader = false,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "all")

  const filtered = useMemo(() => {
    if (activeCategory === "all" || activeCategory === "all-ideas") return items
    return items.filter((item) => item.category === activeCategory)
  }, [items, activeCategory])

  return (
    <div className="w-full">
      {!hideHeader && (
        <header className="mb-8 flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base font-light">
                {subtitle}
              </p>
            )}
          </div>
          {categories.length > 1 && (
            <GalleryFilters
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          )}
        </header>
      )}

      {hideHeader && categories.length > 1 && (
        <div className="mb-6">
          <GalleryFilters
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      )}

      {filtered.length > 0 ? (
        <div
          className={[
            "grid items-start",
            layoutGridClass[layout],
            layoutGapClass[layout],
          ].join(" ")}
        >
          {filtered.map((item) => (
            <GalleryItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
          No items in this category.
        </div>
      )}
    </div>
  )
}
