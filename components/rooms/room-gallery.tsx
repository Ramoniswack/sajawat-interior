"use client"

import Link from "next/link"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowLeft, Heart, Share2, ZoomIn } from "lucide-react"
import { useState } from "react"

type GalleryImage = {
  image: string
  alt: string
  category?: string
  location?: string
  aspect?: string
}

// Matches backend GALLERY_LAYOUT_CHOICES and frontend GalleryLayout type
type GalleryLayout = "4-col" | "3-col" | "2-col" | "masonry"

// Grid classes per layout — same as gallery.tsx
const layoutGrid: Record<GalleryLayout, string> = {
  "4-col":   "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4",
  "3-col":   "grid-cols-2 sm:grid-cols-3 gap-4",
  "2-col":   "grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6",
  "masonry": "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4",
}

// Aspect ratio per layout (default card shape when no per-image aspect set)
const layoutAspect: Record<GalleryLayout, string> = {
  "4-col":   "aspect-[3/4]",
  "3-col":   "aspect-[4/3]",
  "2-col":   "aspect-[4/3]",
  "masonry": "aspect-[3/4]",
}

// Per-image aspect override map
const aspectMap: Record<string, string> = {
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
  landscape: "aspect-[4/3]",
  wide:      "aspect-video",
  tall:      "aspect-[2/3]",
}

type RoomGalleryProps = {
  title: string
  description: string
  gallery: readonly GalleryImage[]
  backHref: string
  backLabel: string
  collectionLabel: string
  galleryTitle: string
  galleryDescription: string
  showFilters?: boolean
  /** Layout is now always masonry as per simplified admin */
  layout?: GalleryLayout
}

export function RoomGallery({
  title,
  description,
  gallery,
  backHref,
  backLabel,
  collectionLabel,
  galleryTitle,
  galleryDescription,
  showFilters = false,
  layout = "masonry",
}: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = ["all", ...new Set(gallery.map(i => i.category).filter(Boolean))]

  const filteredGallery = activeFilter === "all"
    ? gallery
    : gallery.filter(i => i.category === activeFilter || i.location === activeFilter)

  const gridClass = layoutGrid[layout]
  const defaultAspect = layoutAspect[layout]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-stone-900 md:min-h-[620px]">
          <div className="absolute inset-0 -z-20 h-full w-full">
            <img
              src={gallery[0]?.image || "/images/luxury-living-room.png"}
              alt={gallery[0]?.alt || title}
              className="h-full w-full object-cover scale-105 animate-[kenBurns_1.5s_ease-out_forwards]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

          <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-36 md:px-10 md:pb-20 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
            <Link
              href={backHref}
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/75">
              {collectionLabel}
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-light tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/85 font-light md:text-lg">
              {description}
            </p>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="bg-[#faf9f6] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  The inspiration gallery
                </p>
                <h2 className="text-3xl font-light text-stone-900 md:text-4xl">
                  {galleryTitle}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-stone-600 font-light">
                {galleryDescription}
              </p>
            </div>

            {/* Filters */}
            {showFilters && categories.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat!)}
                    className={`px-4 py-2 text-sm font-medium transition-all ${
                      activeFilter === cat
                        ? "bg-[#e99816] text-white"
                        : "bg-white text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {cat === "all" ? "All" : cat}
                  </button>
                ))}
              </div>
            )}

            {/* ── Grid — layout driven by admin ── */}
            <div className={`grid items-start ${gridClass}`}>
              {filteredGallery.map((item, index) => {
                // Per-image aspect override or layout default
                const aspect = item.aspect && aspectMap[item.aspect]
                  ? aspectMap[item.aspect]
                  : defaultAspect

                // Masonry: first card spans 2 cols
                const spanClass = layout === "masonry" && index === 0
                  ? "sm:col-span-2"
                  : ""

                return (
                  <figure
                    key={`${item.image}-${index}`}
                    className={`group relative block overflow-hidden bg-stone-200 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${aspect} ${spanClass}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5
                      bg-gradient-to-t from-black/80 to-transparent
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-end justify-between
                        translate-y-3 opacity-0 transition-all duration-300
                        group-hover:translate-y-0 group-hover:opacity-100">
                        <figcaption className="text-sm text-white font-light">
                          {item.alt}
                        </figcaption>
                        <div className="flex gap-1.5">
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(item) }}
                            className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30"
                          >
                            <ZoomIn className="h-3.5 w-3.5 text-white" />
                          </button>
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30"
                          >
                            <Heart className="h-3.5 w-3.5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Default bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 pointer-events-none
                      transition-transform duration-300 group-hover:translate-y-full">
                      <span className="text-sm font-medium text-white tracking-wide drop-shadow-sm">
                        {item.alt}
                      </span>
                    </div>
                  </figure>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-col items-start justify-between gap-6
              border-t border-stone-200 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-6 text-stone-600 font-light">
                Found a look you love? Let's shape this inspiration around your home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-stone-900 px-6 py-3 text-sm text-white
                  transition hover:bg-stone-700"
              >
                Talk to our designers <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Lightbox ── */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-11 right-0 text-white/70 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain rounded"
              />
              <div className="mt-3 flex items-center justify-between">
                <p className="text-white/80 text-sm">{selectedImage.alt}</p>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30">
                    <Share2 className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <FooterSection />
    </div>
  )
}
