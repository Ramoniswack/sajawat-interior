"use client"

import { useState } from "react"
import { Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoomCardProps {
  room: {
    id: string
    title: string
    description: string
    image: string
  }
  index: number
  onLearnMore: (room: any) => void
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'
}

export function RoomCard({ room, index, onLearnMore, size = 'medium' }: RoomCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const sizeClasses = {
    small: 'aspect-square',
    medium: 'aspect-[4/3]',
    large: 'aspect-[3/2]',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[3/4]'
  }

  const gridSpanClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2'
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-2xl",
        gridSpanClasses[size]
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onLearnMore(room)}
      role="button"
      tabIndex={0}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", sizeClasses[size])}>
        <img
          src={room.image}
          alt={room.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="absolute top-3 right-3 flex size-8 items-center justify-center bg-transparent text-gray-600 transition-all hover:text-red-500"
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
              {room.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onLearnMore(room)
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
            {room.title}
          </h3>
        </div>
      </div>
    </div>
  )
}
