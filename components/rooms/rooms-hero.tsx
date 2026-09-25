"use client"

import { useState, useEffect } from "react"
import { api, RoomsPage } from "@/lib/api"

export function RoomsHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [roomsPageData, setRoomsPageData] = useState<RoomsPage | null>(null)

  useEffect(() => {
    setIsVisible(true)
    async function fetchRoomsPageData() {
      try {
        const data = await api.getRoomsPage()
        setRoomsPageData(data)
      } catch (error) {
        console.error('Failed to fetch rooms page data:', error)
      }
    }
    fetchRoomsPageData()
  }, [])

  const data = roomsPageData || {
    hero_subtitle: 'Room Designs',
    hero_title: 'Discover Your Perfect Space',
    hero_description: 'Explore stunning interior designs organized by room type. From living rooms to home offices, find inspiration for every space in your home. Each design is crafted to transform your living environment into something extraordinary.',
    hero_cta_text: 'Browse Designs',
    hero_cta_link: '#rooms',
    hero_secondary_cta_text: 'Get Consultation',
    hero_secondary_cta_link: '/contact',
    hero_badge_text: '50+',
    hero_badge_subtext: 'Room Designs'
  }

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/rooms-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6">
            <span
              className="inline-block rounded-lg border border-[#e99816] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#e99816]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.05em',
              }}
            >
              {data.hero_subtitle}
            </span>
          </div>

          <h1
            className="mb-6 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              letterSpacing: '0.02em',
            }}
          >
            {data.hero_title}
          </h1>

          <p
            className="mb-8 max-w-xl text-lg text-white/80 leading-relaxed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: 300,
            }}
          >
            {data.hero_description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="button-hover bg-[#e99816] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {data.hero_cta_text}
            </button>
            <button
              className="button-hover border border-[#e99816] bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-50"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {data.hero_secondary_cta_text}
            </button>
          </div>

          {/* Badge */}
          <div className="absolute bottom-8 right-8 rounded-lg bg-[#e99816] p-6 text-white shadow-lg">
            <div className="text-3xl font-light">{data.hero_badge_text}</div>
            <div className="text-sm">{data.hero_badge_subtext}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
