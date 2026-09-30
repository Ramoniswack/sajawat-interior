"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { FooterSection } from "@/components/sections/footer-section"

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

type Package = {
  id: number
  name: string
  description: string
  price: string
  currency: string
  final_price: string
  features: string[]
  featured: boolean
  order: number
}

const FALLBACK_PACKAGES: Package[] = [
  { id: 1, name: "Consultation", description: "One-on-one consultation with our expert designers", price: "5000", currency: "NPR", final_price: "NPR 5,000", features: ["60-minute consultation", "Design assessment", "Recommendations", "Follow-up call"], featured: false, order: 1 },
  { id: 2, name: "Space Planning", description: "Optimize your space layout for maximum functionality", price: "15000", currency: "NPR", final_price: "NPR 15,000", features: ["Floor plan design", "Furniture layout", "Lighting plan", "2 revisions"], featured: false, order: 2 },
  { id: 3, name: "3D Visualization", description: "Photorealistic 3D renderings of your space", price: "25000", currency: "NPR", final_price: "NPR 25,000", features: ["3D modeling", "Rendering", "Virtual walkthrough", "Multiple angles"], featured: true, order: 3 },
]

export default function PricingPage() {
  const [packages, setPackages] = useState<Package[]>(FALLBACK_PACKAGES)

  useEffect(() => {
    fetch(`${API}/pricing/packages/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data) return
        const items: Package[] = data.results || data
        if (items.length > 0) setPackages(items.sort((a, b) => a.order - b.order))
      })
      .catch(() => {})
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
            <h1 className="mb-6 text-5xl font-light text-foreground md:text-6xl">Pricing Options</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
              Transparent pricing for interior design services tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* Packages grid */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">Our Pricing</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground font-light">
                Choose the package that best fits your project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map(pkg => (
                <div
                  key={pkg.id}
                  className={`border bg-white p-8 hover:shadow-lg transition-shadow ${pkg.featured ? "border-[#e99816] shadow-lg" : "border-gray-200 shadow-sm"}`}
                >
                  {pkg.featured && (
                    <div className="mb-4 inline-block bg-[#e99816] px-3 py-1 text-xs font-medium text-white">Most Popular</div>
                  )}
                  <h3 className="mb-2 text-xl font-medium text-foreground">{pkg.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground font-light">{pkg.description}</p>
                  <div className="mb-6 text-3xl font-bold text-[#e99816]">
                    {pkg.final_price || `${pkg.currency} ${Number(pkg.price).toLocaleString()}`}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {(pkg.features || []).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                        <Check className="h-4 w-4 text-[#e99816] flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${
                      pkg.featured
                        ? "bg-[#e99816] text-white hover:bg-[#c9790b]"
                        : "border border-[#e99816] text-[#e99816] hover:bg-[#e99816] hover:text-white"
                    }`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#e99816]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">Need a Custom Quote?</h2>
            <p className="mb-8 text-lg text-white/90 font-light">Contact us for a personalised quote based on your specific requirements.</p>
            <Link href="/contact" className="inline-block bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100">
              Get Quote
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
