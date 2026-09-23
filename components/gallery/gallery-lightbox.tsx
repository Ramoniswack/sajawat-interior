"use client"

import { useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, ImageIcon, Play, X } from "lucide-react"
import type { GalleryItem } from "@/lib/gallery-data"

type ExtendedGalleryItem = GalleryItem & { features?: string[] }

type GalleryLightboxProps = {
  items: ExtendedGalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({ items, index, onClose, onNavigate }: GalleryLightboxProps) {
  const item = items[index]

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, goPrev, goNext])

  if (!item) return null

  const hasMedia = Boolean(item.src)

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300, letterSpacing: '0.02em' }}>{item.title}</p>
          <p className="text-xs text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            {index + 1} / {items.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4">
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 z-10 flex size-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Previous"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex max-h-full max-w-3xl flex-1 items-center justify-center">
          {hasMedia && item.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt ?? item.title}
              className="max-h-[70vh] w-auto rounded-lg object-contain"
            />
          ) : hasMedia && item.type === "video" ? (
            <video
              src={item.src}
              poster={item.poster}
              controls
              className="max-h-[70vh] w-auto rounded-lg"
              aria-label={item.alt ?? item.title}
            />
          ) : (
            <div className="flex aspect-video w-full max-w-xl flex-col items-center justify-center gap-3 rounded-lg border border-border bg-muted/40 text-muted-foreground">
              {item.type === "video" ? <Play className="size-8" /> : <ImageIcon className="size-8" />}
              <span className="text-sm">No media set</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 z-10 flex size-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Next"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {item.description ? (
        <div className="border-t border-border px-4 py-3">
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>{item.description}</p>
          {item.features && item.features.length > 0 && (
            <div className="mx-auto max-w-3xl mt-3">
              <h4 className="text-sm font-medium mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300, letterSpacing: '0.02em' }}>What We Offer:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
                    <span className="w-1.5 h-1.5 bg-[#e99816] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
