"use client"

import { useState } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    features: string[]
    image: string
  }
  index: number
  onLearnMore: (service: any) => void
}

export function ServiceCard({ service, index, onLearnMore }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 100}ms`,
        borderRadius: "0",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`${service.title} service`}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="service-card-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover Overlay */}
        <div
          className={cn(
            "service-card-overlay absolute inset-0 bg-[#e99816]/90 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <h3
              className="mb-4 text-2xl font-light text-white"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {service.title}
            </h3>
            <button
              onClick={() => onLearnMore(service)}
              className="button-hover flex items-center gap-2 rounded-none border-2 border-white px-6 py-3 text-sm font-light text-white transition-all hover:bg-white hover:text-[#e99816]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Explore Service
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Default Title */}
        <div
          className={cn(
            "service-card-title absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500",
            isHovered ? "translate-y-full" : "translate-y-0"
          )}
        >
          <h3
            className="text-xl font-light text-white"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              letterSpacing: '0.02em',
            }}
          >
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p
          className="mb-4 text-sm text-muted-foreground leading-relaxed"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontWeight: 300,
          }}
        >
          {service.description}
        </p>

        <div className="mb-4">
          <h4
            className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              letterSpacing: '0.05em',
            }}
          >
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#e99816]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => onLearnMore(service)}
          className="flex items-center gap-2 text-sm font-medium text-[#e99816] transition-colors hover:text-[#c9790b]"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            letterSpacing: '0.02em',
          }}
        >
          Learn More
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
