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

// Grid span — how many cells the card occupies
const gridSpanClasses = {
  small:  'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-1',
  large:  'col-span-2 row-span-2',
  wide:   'col-span-2 row-span-1',
  tall:   'col-span-1 row-span-2',
}

// Aspect ratio — drives the card's own height so no grid row height is needed
const aspectClasses = {
  small:  'aspect-square',
  medium: 'aspect-[4/3]',
  large:  'aspect-[4/3]',   // col+row span-2 so it fills a 2×2 area naturally
  wide:   'aspect-[16/9]',
  tall:   'aspect-[3/4]',
}

export function RoomCard({ room, index, onLearnMore, size = 'medium' }: RoomCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked]     = useState(false)

  return (
    <div
      className={cn(
        // Grid positioning
        gridSpanClasses[size],
        // Aspect ratio on the OUTER element — drives height, no fixed row needed
        aspectClasses[size],
        // Relative so absolute children fill it completely
        "group relative overflow-hidden border border-border bg-card cursor-pointer",
        "transition-all duration-500 hover:shadow-2xl",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onLearnMore(room)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onLearnMore(room) }}
      aria-label={`Explore ${room.title}`}
    >
      {/* ── Image fills entire card ── */}
      <img
        src={room.image}
        alt={room.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* ── Permanent gradient so title is always readable ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      {/* ── Like button ── */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked) }}
        className="absolute top-3 right-3 z-20 flex size-8 items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Like design"
      >
        <Heart className={cn("h-4 w-4 drop-shadow", isLiked ? "fill-red-500 text-red-500" : "fill-white/30")} />
      </button>

      {/* ── Hover overlay ── */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-6 text-center",
          "bg-[#e99816]/90 transition-opacity duration-400",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="text-xl font-light tracking-wide text-white">
          {room.title}
        </h3>
        <button
          onClick={(e) => { e.stopPropagation(); onLearnMore(room) }}
          className="flex items-center gap-2 border-2 border-white px-5 py-2.5 text-sm font-light text-white transition-all hover:bg-white hover:text-[#e99816]"
        >
          Explore Design
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* ── Default bottom title ── */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10 px-4 py-3 pointer-events-none",
          "transition-transform duration-400",
          isHovered ? "translate-y-full" : "translate-y-0",
        )}
      >
        <h3 className="text-base font-semibold text-white drop-shadow">
          {room.title}
        </h3>
      </div>
    </div>
  )
}
