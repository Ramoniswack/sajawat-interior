"use client"

import { useState } from "react"
import { Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoomGalleryCardProps {
  item: {
    url: string
    title: string
    description: string
  }
  index: number
  onExplore: (item: any) => void
}

export function RoomGalleryCard({ item, index, onExplore }: RoomGalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className="group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 100}ms`,
        borderRadius: "0",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExplore(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onExplore(item)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${item.title} design`}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.url}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center bg-transparent text-gray-600 transition-all hover:text-red-500"
          aria-label="Like design"
        >
          <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
        </button>

        {/* Hover Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-[#e99816]/90 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <h3
              className="mb-4 text-2xl font-light text-white"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {item.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onExplore(item)
              }}
              className="button-hover flex items-center gap-2 border-2 border-white px-6 py-3 text-sm font-light text-white transition-all hover:bg-white hover:text-[#e99816]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Explore Design
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Default Title */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500",
            isHovered ? "translate-y-full" : "translate-y-0"
          )}
        >
          <h3
            className="text-lg font-semibold text-white"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}
