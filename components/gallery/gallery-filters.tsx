"use client"

import { cn } from "@/lib/utils"

type GalleryFiltersProps = {
  categories: { id: string; label: string }[]
  active: string
  onChange: (id: string) => void
}

export function GalleryFilters({ categories, active, onChange }: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
      {categories.map((category) => {
        const isActive = category.id === active
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.id)}
            className={cn(
              "rounded-none border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300, letterSpacing: '0.02em' }}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
