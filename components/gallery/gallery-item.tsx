"use client"

import { useState } from "react"
import { ImageIcon, Play, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryItem as GalleryItemType } from "@/lib/gallery-data"
import Link from "next/link"

const spanClasses: Record<NonNullable<GalleryItemType["span"]>, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  large: "sm:col-span-2 row-span-2",
}

type GalleryItemProps = {
  item: GalleryItemType
  onSelect?: (item: GalleryItemType) => void
}

export function GalleryItem({ item, onSelect }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const hasMedia = Boolean(item.src)

  // If onSelect is provided, use button for lightbox functionality
  // Otherwise use Link for navigation to style/location gallery or detail page
  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(item)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group relative flex min-h-40 flex-col overflow-hidden border border-border bg-card text-left",
          "transition-all duration-500 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
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
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : hasMedia && item.type === "video" ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.poster || "/placeholder.svg"}
                alt={item.alt ?? item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
          
          {/* Hover Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-[#e99816]/90 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex h-full flex-col items-center justify-center p-4 text-center">
              <h3
                className="mb-3 text-xl font-light text-white"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                {item.title}
              </h3>
              <div className="flex items-center gap-2 border-2 border-white px-4 py-2 text-sm font-light text-white transition-all hover:bg-white hover:text-[#e99816]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                View Details
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Default Title */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 p-3 transition-transform duration-500",
              isHovered ? "translate-y-full" : "translate-y-0"
            )}
          >
            <span 
              className="truncate text-sm font-medium text-white"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              {item.title}
            </span>
          </div>
        </div>
      </button>
    )
  }

  // Determine navigation target based on category
  const getHref = () => {
    if (item.category === "style" && item.style) {
      return `/design-ideas/style/${item.style}`
    }
    if (item.category === "location" && item.location) {
      return `/design-ideas/location/${item.location}`
    }
    // For featured items, navigate to style gallery if available, otherwise location
    if (item.category === "featured") {
      if (item.style) {
        return `/design-ideas/style/${item.style}`
      }
      if (item.location) {
        return `/design-ideas/location/${item.location}`
      }
    }
    return `/design-ideas/${item.id}`
  }

  return (
    <Link
      href={getHref()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex min-h-40 flex-col overflow-hidden border border-border bg-card text-left",
        "transition-all duration-500 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        item.span && spanClasses[item.span],
      )}
      aria-label={`View ${item.title} details`}
    >
      <div className="relative flex flex-1 items-center justify-center">
        {hasMedia && item.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src || "/placeholder.svg"}
            alt={item.alt ?? item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : hasMedia && item.type === "video" ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.poster || "/placeholder.svg"}
              alt={item.alt ?? item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        
        {/* Hover Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-[#e99816]/90 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <h3
              className="mb-3 text-xl font-light text-white"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {item.title}
            </h3>
            <div className="flex items-center gap-2 border-2 border-white px-4 py-2 text-sm font-light text-white transition-all hover:bg-white hover:text-[#e99816]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Default Title */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-3 transition-transform duration-500",
            isHovered ? "translate-y-full" : "translate-y-0"
          )}
        >
          <span 
            className="truncate text-sm font-medium text-white"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            {item.title}
          </span>
        </div>
      </div>
    </Link>
  )
}