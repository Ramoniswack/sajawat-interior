"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AsymmetricGridProps {
  images: string[]
  className?: string
}

export function AsymmetricGrid({ images, className }: AsymmetricGridProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    // Birth animation - scale in with offset (birthSpeed: 1200ms, birthOffset: 150ms)
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 150)
    })
  }, [images])

  // Generate asymmetric spans for visual variety
  const getSpanClass = (index: number) => {
    const patterns = [
      "col-span-1 row-span-1",  // 1x1
      "col-span-2 row-span-1",  // 2x1 (wide)
      "col-span-1 row-span-2",  // 1x2 (tall)
      "col-span-2 row-span-2",  // 2x2 (large)
    ]
    const patternIndex = index % patterns.length
    return patterns[patternIndex]
  }

  return (
    <div className={cn("grid grid-cols-4 gap-[15px] auto-rows-[200px]", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative overflow-hidden bg-white min-h-[200px]",
            getSpanClass(index),
            visibleItems.includes(index) ? "scale-100 opacity-100" : "scale-0 opacity-0",
            "transition-all duration-[1200ms] ease-out rounded-lg"
          )}
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          <img
            src={image}
            alt={`Design ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}