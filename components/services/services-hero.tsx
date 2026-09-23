"use client"

import { useState, useEffect } from "react"

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block rounded-none border border-[#e99816] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#e99816]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.05em',
                }}
              >
                Our Expertise
              </span>
            </div>

            <h1
              className="mb-6 text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Transform Your Space
              <span className="block text-[#e99816]">With Expert Design</span>
            </h1>

            <p
              className="mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              Comprehensive interior design solutions tailored to your unique needs. From residential sanctuaries to commercial spaces that inspire, we bring your vision to life with precision and creativity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="button-hover rounded-none bg-[#e99816] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Start Your Project
              </button>
              <button
                className="button-hover rounded-none border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 border-2 border-[#e99816]" />
              <div className="absolute -right-4 -top-4 h-full w-full border-2 border-border" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/luxury-living-room.png")' }}
              />
              <div className="absolute -bottom-6 -left-6 rounded-none bg-[#e99816] p-6 text-white">
                <div className="text-3xl font-light">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
