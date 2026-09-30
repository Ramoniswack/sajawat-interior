"use client"

import { useState } from "react"
import { ImageIcon, Play, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryItem as GalleryItemType } from "@/lib/gallery-data"
import Link from "next/link"

// Grid span — how many grid cells this card occupies
const spanClasses: Record<NonNullable<GalleryItemType["span"]>, string> = {
  tall:  "row-span-2",
  wide:  "sm:col-span-2",
  large: "sm:col-span-2 row-span-2",
}

// Aspect ratio — the card's own intrinsic height/shape
// Applied to the OUTER element so CSS knows its height
const aspectClasses: Record<NonNullable<GalleryItemType["aspect"]>, string> = {
  square:    "aspect-square",
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide:      "aspect-video",   // 16/9
  tall:      "aspect-[2/3]",
}

type GalleryItemProps = {
  item: GalleryItemType
  onSelect?: (item: GalleryItemType) => void
}

function CardInner({
  item,
  isHovered,
  isButton,
}: {
  item: GalleryItemType
  isHovered: boolean
  isButton: boolean
}) {
  const hasMedia = Boolean(item.src)

  return (
    <>
      {/* Image — fills the card via absolute positioning */}
      {hasMedia && item.type === "image" ? (
        <img
          src={item.src!}
          alt={item.alt ?? item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : hasMedia && item.type === "video" ? (
        <>
          <img
            src={item.poster ?? item.src!}
            alt={item.alt ?? item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
              <Play className="size-5 translate-x-0.5 fill-white" />
            </span>
          </span>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground">
          <ImageIcon className="size-6" />
          <span className="text-xs">No image</span>
        </div>
      )}

      {/* Permanent gradient so title text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none z-10" />

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 p-4 text-center",
          "bg-[#e99816]/90 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="text-lg font-light leading-snug tracking-wide text-white">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 border-2 border-white px-4 py-2 text-sm font-light text-white hover:bg-white hover:text-[#e99816] transition-colors">
          {isButton ? "View Details" : "Explore"}
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Default bottom title (slides away on hover) */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-20 px-3 py-3 pointer-events-none",
          "transition-transform duration-300",
          isHovered ? "translate-y-full" : "translate-y-0",
        )}
      >
        <span className="block truncate text-sm font-medium tracking-wide text-white drop-shadow-sm">
          {item.title}
        </span>
      </div>
    </>
  )
}

export function GalleryItem({ item, onSelect }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Aspect ratio on the OUTER element (not on absolute children)
  const aspectClass = item.aspect ? aspectClasses[item.aspect] : "aspect-[3/4]"

  const outerCn = cn(
    // Span in the grid
    item.span ? spanClasses[item.span] : "",
    // Shape of the card itself
    aspectClass,
    // Layout — relative so absolute children can fill it
    "group relative w-full overflow-hidden",
    // Interactivity
    "transition-shadow duration-300 hover:shadow-2xl",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e99816]",
  )

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(item)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={outerCn}
        aria-label={`Open ${item.title}`}
      >
        <CardInner item={item} isHovered={isHovered} isButton />
      </button>
    )
  }

  const getHref = () => {
    if (item.category === "style" && item.style)       return `/design-ideas/style/${item.style}`
    if (item.category === "location" && item.location) return `/design-ideas/location/${item.location}`
    if (item.category === "featured") {
      if (item.style)    return `/design-ideas/style/${item.style}`
      if (item.location) return `/design-ideas/location/${item.location}`
    }
    return `/design-ideas/${item.id}`
  }

  return (
    <Link
      href={getHref()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={outerCn}
      aria-label={`View ${item.title}`}
    >
      <CardInner item={item} isHovered={isHovered} isButton={false} />
    </Link>
  )
}
