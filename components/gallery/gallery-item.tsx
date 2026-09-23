"use client"

import { ImageIcon, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryItem as GalleryItemType } from "@/lib/gallery-data"

const spanClasses: Record<NonNullable<GalleryItemType["span"]>, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  large: "sm:col-span-2 row-span-2",
}

type GalleryItemProps = {
  item: GalleryItemType
  onSelect: (item: GalleryItemType) => void
}

export function GalleryItem({ item, onSelect }: GalleryItemProps) {
  const hasMedia = Boolean(item.src)

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={cn(
        "group relative flex min-h-40 flex-col overflow-hidden rounded-none border border-border bg-muted/40 text-left",
        "transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        item.span && spanClasses[item.span],
      )}
      aria-label={`Open ${item.title}`}
    >
      <div className="relative flex flex-1 items-center justify-center">
        {hasMedia && item.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src || "/placeholder.svg"}
            alt={item.alt ?? item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : hasMedia && item.type === "video" ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.poster || "/placeholder.svg"}
              alt={item.alt ?? item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                <Play className="size-5 translate-x-0.5 fill-foreground" />
              </span>
            </span>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 py-10 text-muted-foreground">
            {item.type === "video" ? <Play className="size-6" /> : <ImageIcon className="size-6" />}
            <span className="text-xs">Placeholder</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="truncate text-sm font-medium text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300, letterSpacing: '0.02em' }}>{item.title}</span>
        </div>
      </div>
    </button>
  )
}
