"use client"

import { useEffect } from "react"
import { X, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoomModalProps {
  room: {
    id: string
    title: string
    description: string
    image: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!room || !isOpen) return null

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="modal-content relative max-w-4xl w-full bg-white border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center border border-gray-200 bg-white/80 text-gray-600 transition-colors hover:bg-white hover:text-[#e99816]"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${room.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Premium Design</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <h2
              className="mb-4 text-3xl font-light text-foreground"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {room.title}
            </h2>

            <p
              className="mb-8 text-base text-muted-foreground leading-relaxed"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              {room.description}
            </p>

            <div className="mb-8">
              <h3
                className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.05em',
                }}
              >
                Design Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "Customized to your lifestyle",
                  "Premium materials and finishes",
                  "Optimal space utilization",
                  "Lighting and ambiance design",
                  "Sustainable and eco-friendly options"
                ].map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    <span className="mt-1 flex size-5 flex-shrink-0 items-center justify-center rounded-none bg-[#e99816]/10">
                      <Sparkles className="h-3 w-3 text-[#e99816]" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="button-hover flex items-center justify-center gap-2 bg-[#e99816] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Get This Design
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="button-hover border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
