"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowLeft, Heart, Share2, ZoomIn } from "lucide-react"
import { useState } from "react"

type GalleryImage = {
  image: string
  alt: string
  category?: string
  location?: string
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
}: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  // Extract unique categories for filtering
  const categories = ["all", ...new Set(gallery.map(item => item.category).filter(Boolean))]
  const locations = ["all", ...new Set(gallery.map(item => item.location).filter(Boolean))]

  const filteredGallery = activeFilter === "all"
    ? gallery
    : gallery.filter(item => item.category === activeFilter || item.location === activeFilter)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-stone-900 md:min-h-[620px]">
          <div className="absolute inset-0 -z-20 h-full w-full animate-[kenBurns_1.5s_ease-out_forwards]">
            <img
              src={gallery[0]?.image || "/images/luxury-living-room.png"}
              alt={gallery[0]?.alt || title}
              className="h-full w-full object-cover scale-110"
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
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/75 animate-[fadeIn_0.6s_ease-out_0.4s_forwards] opacity-0"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              {collectionLabel}
            </p>
            <h1
              className="mb-5 max-w-3xl font-display text-4xl font-light tracking-tight text-white md:text-6xl animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] opacity-0"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {title}
            </h1>
            <p
              className="max-w-2xl text-base leading-7 text-white/85 md:text-lg animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              {description}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-[#faf9f6] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-500"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  The inspiration gallery
                </p>
                <h2 className="font-display text-3xl font-light text-stone-900 md:text-4xl"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  {galleryTitle}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-stone-600"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                {galleryDescription}
              </p>
            </div>

            {/* Filters */}
            {showFilters && categories.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95 ${
                      activeFilter === category
                        ? "bg-[#e99816] text-white"
                        : "bg-white text-stone-700 hover:bg-stone-100"
                    }`}
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {category === "all" ? "All" : category}
                  </button>
                ))}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {filteredGallery.map((item, index) => (
                <figure
                  key={`${item.image}-${index}`}
                  className={`group relative overflow-hidden bg-stone-200 cursor-pointer transition-transform hover:-translate-y-1 ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${index === 0 ? "aspect-[4/3] h-full min-h-[280px] lg:aspect-auto" : "aspect-[4/3]"}`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <figcaption className="text-sm text-white">
                          {item.alt}
                        </figcaption>
                        <div className="flex gap-2">
                          <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-transform hover:scale-110 active:scale-90">
                            <ZoomIn className="h-4 w-4 text-white" />
                          </button>
                          <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-transform hover:scale-110 active:scale-90">
                            <Heart className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-stone-200 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-6 text-stone-600"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Found a look you love? Let's shape this inspiration around your home.
              </p>
              <div className="transition-transform hover:scale-105 active:scale-95">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-stone-900 px-6 py-3 text-sm text-white transition hover:bg-stone-700"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  Talk to our designers <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-[fadeIn_0.2s_ease-out_forwards]" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl max-h-[90vh] animate-[scaleIn_0.3s_ease-out_forwards]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-stone-300"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-white">{selectedImage.alt}</p>
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