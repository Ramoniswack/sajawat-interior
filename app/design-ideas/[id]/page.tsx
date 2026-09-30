"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowLeft, ArrowRight, Heart, Share2, MapPin, Palette, ZoomIn, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

// ── Fallback: auto-detect room link from category slug ────────────────────────
const CATEGORY_TO_ROOM: Record<string, string> = {
  "living-room":  "/rooms/living-room",
  "bedroom":      "/rooms/bedroom",
  "kitchen":      "/rooms/kitchen",
  "bathroom":     "/rooms/bathroom",
  "dining-room":  "/rooms/dining-room",
  "dining":       "/rooms/dining-room",
  "family-room":  "/rooms/family-room",
  "home-office":  "/rooms/home-office",
  "cafe":         "/rooms/cafe",
  "restaurant":   "/rooms/restaurant",
  "office-space": "/rooms/office-space",
}

// ── Aspect ratio class map ────────────────────────────────────────────────────
const ASPECT: Record<string, string> = {
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
  landscape: "aspect-[4/3]",
  wide:      "aspect-video",
  tall:      "aspect-[2/3]",
}

// ── Gallery grid columns map ──────────────────────────────────────────────────
const LAYOUT_GRID: Record<string, string> = {
  "4-col":   "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
  "3-col":   "grid-cols-2 sm:grid-cols-3 gap-4",
  "2-col":   "grid-cols-1 sm:grid-cols-2 gap-5",
  "masonry": "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
}

// ── Types ─────────────────────────────────────────────────────────────────────
type GalleryImage = {
  id: number
  image_url: string
  alt: string
  aspect: string
  span: string
}

type DesignIdea = {
  id: number
  title: string
  description: string
  category: { name: string; slug: string }
  style?: { name: string; slug: string } | null
  location?: { name: string; slug: string } | null
  image_url?: string
  hero_image_url?: string
  // card
  span: string
  aspect: string
  featured: boolean
  // detail page — gallery
  gallery_title: string
  gallery_description: string
  gallery_layout: string
  gallery_images: GalleryImage[]
  // buttons
  room_page_link: string
  // CTA
  cta_title: string
  cta_description: string
  cta_primary_text: string
  cta_primary_link: string
  cta_secondary_text: string
}

// ── Gallery card component ────────────────────────────────────────────────────
function GalleryCard({
  img, liked, onLike, onZoom,
}: {
  img: GalleryImage
  liked: boolean
  onLike: () => void
  onZoom: () => void
}) {
  const [hovered, setHovered] = useState(false)

  const spanCn =
    img.span === "wide"  ? "sm:col-span-2" :
    img.span === "tall"  ? "row-span-2"    :
    img.span === "large" ? "sm:col-span-2 row-span-2" : ""

  const aspectCn = ASPECT[img.aspect] ?? "aspect-[3/4]"

  return (
    <figure
      className={cn(
        "group relative block overflow-hidden bg-stone-200 cursor-pointer",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
        aspectCn, spanCn,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img.image_url}
        alt={img.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

      {/* Like button */}
      <button
        type="button"
        onClick={e => { e.stopPropagation(); onLike() }}
        className={cn(
          "absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-sm transition-all",
          liked ? "bg-red-500/90 text-white" : "bg-white/20 text-white hover:bg-white/40",
        )}
        aria-label={liked ? "Unlike" : "Like"}
      >
        <Heart className={cn("h-4 w-4", liked && "fill-white")} />
      </button>

      {/* Hover overlay */}
      <div className={cn(
        "absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 p-4 text-center",
        "bg-[#e99816]/90 transition-opacity duration-300",
        hovered ? "opacity-100" : "opacity-0",
      )}>
        <p className="text-sm font-medium text-white tracking-wide">{img.alt}</p>
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onZoom() }}
          className="flex items-center gap-1.5 border border-white px-3 py-1.5 text-xs text-white hover:bg-white hover:text-[#e99816] transition-colors"
        >
          <ZoomIn className="h-3.5 w-3.5" /> View Full
        </button>
      </div>

      {/* Default label */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 px-3 py-2.5 pointer-events-none z-10",
        "transition-transform duration-300",
        hovered ? "translate-y-full" : "translate-y-0",
      )}>
        <span className="block truncate text-sm font-medium text-white drop-shadow-sm">
          {img.alt}
        </span>
      </div>
    </figure>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function DesignIdeaDetailPage() {
  const params = useParams()
  const id = params.id as string

  const [idea, setIdea]         = useState<DesignIdea | null>(null)
  const [loading, setLoading]   = useState(true)
  const [likes, setLikes]       = useState<Set<string>>(new Set())
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  useEffect(() => {
    fetch(`${API}/design-ideas/design-ideas/${id}/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { setIdea(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  const toggleLike = (key: string) =>
    setLikes(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n })

  // Room link: admin field takes priority, then category auto-detect
  const roomHref = idea?.room_page_link
    || (idea ? CATEGORY_TO_ROOM[idea.category?.slug] ?? "/rooms" : "/rooms")

  const heroImage = idea?.hero_image_url || "/images/luxury-living-room.png"
  const gridClass = LAYOUT_GRID[idea?.gallery_layout ?? "3-col"] ?? LAYOUT_GRID["3-col"]

  // CTA text with fallbacks
  const ctaTitle        = idea?.cta_title         || "Love This Design?"
  const ctaDesc         = idea?.cta_description   || "Let's bring this concept to life in your space."
  const ctaPrimaryText  = idea?.cta_primary_text  || "Get a Consultation"
  const ctaPrimaryLink  = idea?.cta_primary_link  || "/contact"
  const ctaSecondary    = idea?.cta_secondary_text || "View Room Designs"

  // Gallery heading with fallback
  const galleryTitle = idea?.gallery_title       || `More ${idea?.category?.name ?? ""} Designs`
  const galleryDesc  = idea?.gallery_description || ""

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf9f6]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#e99816] border-t-transparent" />
    </div>
  )

  if (!idea) return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl font-light text-gray-600">Design idea not found.</p>
          <Link href="/design-ideas" className="inline-flex items-center gap-2 text-[#e99816] text-sm hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
        </div>
      </main>
      <FooterSection />
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6]">
      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative isolate min-h-[65vh] flex items-end overflow-hidden bg-stone-900">
          <img
            src={heroImage}
            alt={idea.title}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ animation: "kenBurns 1.5s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-36 md:px-10 md:pb-20">
            <Link href="/design-ideas" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Design Ideas
            </Link>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e99816]">
              {idea.category?.name}
            </p>

            <h1 className="mb-5 max-w-3xl text-4xl font-light tracking-tight text-white md:text-6xl">
              {idea.title}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-white/80 font-light md:text-lg">
              {idea.description}
            </p>

            {/* Style / Location badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {idea.style && (
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                  <Palette className="h-4 w-4 text-[#e99816]" /> {idea.style.name}
                </span>
              )}
              {idea.location && (
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                  <MapPin className="h-4 w-4 text-[#e99816]" /> {idea.location.name}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={roomHref} className="inline-flex items-center gap-2 bg-[#e99816] hover:bg-[#c9790b] px-6 py-3 text-sm font-semibold text-white transition-colors">
                View Room Designs <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => toggleLike("hero")}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border transition-colors",
                  likes.has("hero")
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-white/10 border-white/30 text-white hover:bg-white/20",
                )}
              >
                <Heart className={cn("h-4 w-4", likes.has("hero") && "fill-white")} />
                {likes.has("hero") ? "Saved" : "Save Idea"}
              </button>
              <button
                type="button"
                onClick={() => navigator.share?.({ title: idea.title, url: window.location.href })}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/30 bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        {idea.gallery_images.length > 0 && (
          <section className="px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">

              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-stone-500">
                    Inspiration Gallery
                  </p>
                  <h2 className="text-3xl font-light text-stone-900 md:text-4xl">
                    {galleryTitle}
                  </h2>
                  {galleryDesc && (
                    <p className="mt-2 max-w-xl text-sm text-stone-500 font-light">{galleryDesc}</p>
                  )}
                </div>
                <Link href={roomHref} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#e99816] hover:text-[#c9790b] transition-colors whitespace-nowrap">
                  View all rooms <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Grid */}
              <div className={cn("grid items-start", gridClass)}>
                {idea.gallery_images.map((img, i) => (
                  <GalleryCard
                    key={img.id}
                    img={img}
                    liked={likes.has(`g-${img.id}`)}
                    onLike={() => toggleLike(`g-${img.id}`)}
                    onZoom={() => setLightbox(img)}
                  />
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-200 pt-8">
                <p className="max-w-sm text-sm text-stone-500 font-light">
                  Love what you see? Bring this style into your home.
                </p>
                <Link href={roomHref} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 px-6 py-3 text-sm text-white transition-colors">
                  Explore Room Designs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA Banner ── */}
        <section className="bg-[#e99816] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">{ctaTitle}</h2>
            <p className="mb-8 text-lg text-white/90 font-light">{ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={ctaPrimaryLink} className="bg-white px-8 py-3 text-sm font-semibold text-[#e99816] hover:bg-gray-100 transition-colors">
                {ctaPrimaryText}
              </Link>
              <Link href={roomHref} className="border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                {ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterSection />

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4" onClick={() => setLightbox(null)}>
          <button type="button" className="absolute top-5 right-5 text-white/70 hover:text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img src={lightbox.image_url} alt={lightbox.alt} className="max-h-[85vh] w-auto rounded object-contain" />
            <p className="mt-3 text-center text-sm text-white/70">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
