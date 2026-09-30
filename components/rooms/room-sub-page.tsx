"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FooterSection } from "@/components/sections/footer-section"
import { FluidCardStack } from "@/components/ui/fluid-card-stack"

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

type Card = { title: string; image: string; detail: string; slug: string }

interface RoomSubPageProps {
  roomType: string        // e.g. "bedroom"
  roomName: string        // e.g. "Bedroom"
  description: string     // subheading under the hero title
  basePath: string        // e.g. "/rooms/bedroom"
}

export function RoomSubPage({ roomType, roomName, description, basePath }: RoomSubPageProps) {
  const router = useRouter()
  const [styleCards, setStyleCards] = useState<Card[]>([])
  const [locationCards, setLocationCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/rooms/galleries/by_room_type/?room_type=${roomType}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data) return
        const galleries: any[] = data.results || data
        setStyleCards(
          galleries
            .filter((g: any) => g.filter_type === "style")
            .map((g: any) => ({
              title: g.title,
              image: g.images?.[0]?.image_url || g.images?.[0]?.image || "/images/luxury-living-room.png",
              detail: g.description,
              slug: g.slug,
            }))
        )
        setLocationCards(
          galleries
            .filter((g: any) => g.filter_type === "location")
            .map((g: any) => ({
              title: g.title,
              image: g.images?.[0]?.image_url || g.images?.[0]?.image || "/images/luxury-living-room.png",
              detail: g.description,
              slug: g.slug,
            }))
        )
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [roomType])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
            <h1 className="mb-6 text-5xl font-light text-foreground md:text-6xl">{roomName} Designs</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">{description}</p>
          </div>
        </section>

        {/* By Style */}
        {(loading || styleCards.length > 0) && (
          <section id="by-style" className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">By Style</h2>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground font-light">
                  Explore different design styles to find the perfect aesthetic for your space.
                </p>
              </div>
              {loading ? (
                <div className="flex justify-center py-16">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#e99816] border-t-transparent" />
                </div>
              ) : (
                <div className="flex justify-center">
                  <FluidCardStack
                    cards={styleCards}
                    onCardClick={card => {
                      const slug = (card as any).slug || card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                      router.push(`${basePath}/style/${slug}`)
                    }}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* By Location */}
        {(loading || locationCards.length > 0) && (
          <section id="by-location" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">By Location</h2>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground font-light">
                  Discover designs inspired by different regions and cultural influences.
                </p>
              </div>
              {loading ? (
                <div className="flex justify-center py-16">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#e99816] border-t-transparent" />
                </div>
              ) : (
                <div className="flex justify-center">
                  <FluidCardStack
                    cards={locationCards}
                    onCardClick={card => {
                      const slug = (card as any).slug || card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                      router.push(`${basePath}/location/${slug}`)
                    }}
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <FooterSection />
    </div>
  )
}
