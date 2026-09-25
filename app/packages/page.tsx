"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { Check, ArrowRight } from "lucide-react"
import { api } from "@/lib/api"
import { useEffect, useState } from "react"

export default function PackagesPage() {
  const [pricingData, setPricingData] = useState<any[]>([])

  useEffect(() => {
    async function fetchPricingData() {
      try {
        const data = await api.getPricing()
        setPricingData(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Failed to fetch pricing data:', error)
      }
    }
    fetchPricingData()
  }, [])
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
                Design Packages
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
                Comprehensive packages for complete interior design transformations.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 bg-white">
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
                Our Design Packages
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
                All-inclusive packages for complete room and home transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(pricingData.length > 0 ? pricingData : [
                {
                  name: "Essential",
                  final_price: 75000,
                  currency: "NPR",
                  description: "Complete design solution for single room transformation",
                  features: [
                    "Full room design",
                    "Material selection",
                    "Furniture recommendations",
                    "2 design concepts",
                    "1 revision round",
                    "Email support"
                  ],
                  featured: false
                },
                {
                  name: "Professional",
                  final_price: 200000,
                  currency: "NPR",
                  description: "Comprehensive design for multiple rooms",
                  features: [
                    "Multi-room design",
                    "3D visualization",
                    "Material sourcing",
                    "5 design concepts",
                    "3 revision rounds",
                    "Project coordination",
                    "Priority support"
                  ],
                  featured: true
                },
                {
                  name: "Premium",
                  final_price: 500000,
                  currency: "NPR",
                  description: "Complete home transformation with full service",
                  features: [
                    "Full home design",
                    "Complete 3D walkthrough",
                    "Turnkey execution",
                    "Unlimited concepts",
                    "Unlimited revisions",
                    "Dedicated project manager",
                    "On-site supervision",
                    "24/7 support"
                  ],
                  featured: false
                }
              ]).map((plan, index) => (
                <div
                  key={index}
                  className={`border bg-white p-8 ${
                    plan.featured
                      ? 'border-[#e99816] shadow-lg'
                      : 'border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.featured && (
                    <div className="mb-4 inline-block bg-[#e99816] px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}
                  <h3
                    className="mb-2 text-xl font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="mb-4 text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    {plan.description}
                  </p>
                  <div
                    className="mb-6 text-3xl font-bold text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {plan.currency === 'NPR' ? 'Rs. ' : plan.currency + ' '}{(plan.final_price || plan.price)?.toLocaleString()}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
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
                        <Check className="h-4 w-4 text-[#e99816]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                      plan.featured
                        ? 'bg-[#e99816] text-white hover:bg-[#c9790b]'
                        : 'border border-gray-300 text-foreground hover:bg-gray-50'
                    }`}
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Choose Package
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
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
                How It Works
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
                Simple process from consultation to completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Initial consultation to understand your needs" },
                { step: "02", title: "Design", description: "Create custom design concepts for your space" },
                { step: "03", title: "Execution", description: "Transform your space with expert implementation" },
                { step: "04", title: "Delivery", description: "Final walkthrough and project handover" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-6 text-center"
                >
                  <div
                    className="mb-4 text-4xl font-light text-[#e99816]"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="mb-2 text-lg font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#e99816]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="mb-6 text-3xl font-light text-white md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="mb-8 text-lg text-white/90"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              Choose a package that fits your needs and let us transform your space.
            </p>
            <Link
              href="/contact"
              className="bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}