"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { FluidCardStack } from "@/components/ui/fluid-card-stack"
import { livingRoomLocations, livingRoomStyles } from "@/components/rooms/living-room-styles"

export default function LivingRoomPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center">
              <h1
                className="mb-6 text-5xl font-light text-foreground md:text-6xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Living Room Designs
              </h1>
              <p
                className="mx-auto max-w-2xl text-lg text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Transform your living space into a warm, inviting haven for relaxation and entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* By Style Section */}
        <section id="by-style" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                By Style
              </h2>
              <p
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Explore different design styles to find the perfect aesthetic for your space.
              </p>
            </div>
            <div className="flex justify-center">
              <FluidCardStack
                cards={livingRoomStyles.map(({ title, image, detail }) => ({ title, image, detail }))}
                onCardClick={(card) => {
                  const style = livingRoomStyles.find((item) => item.title === card.title)
                  if (style) router.push(`/rooms/living-room/style/${style.slug}`)
                }}
              />
            </div>
          </div>
        </section>

        {/* By Location Section */}
        <section id="by-location" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                By Location
              </h2>
              <p
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Discover designs inspired by different regions and cultural influences.
              </p>
            </div>
            <div className="flex justify-center">
              <FluidCardStack
                cards={livingRoomLocations.map(({ title, image, detail }) => ({ title, image, detail }))}
                onCardClick={(card) => {
                  const location = livingRoomLocations.find((item) => item.title === card.title)
                  if (location) router.push(`/rooms/living-room/location/${location.slug}`)
                }}
              />
            </div>
          </div>
        </section>
      </main>


      <FooterSection />
    </div>
  )
}