"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowRight, Check, X, Calendar, ClipboardCheck, Ruler, MessageSquare, Lightbulb } from "lucide-react"
import HowItWorks from "@/components/ui/how-it-works"
import { motion } from "motion/react"

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

type ServicePageData = {
  hero_title: string
  hero_description: string
  service_cards: Array<{ number: string; title: string; description: string; href: string }>
  timing_title: string
  timing_description: string
  timing_steps: Array<{ title: string; description: string } | string>
  field_visit_title: string
  field_visit_description: string
  field_visit_steps: Array<{ title: string; description: string } | string>
  payment_title: string
  payment_description: string
  payment_steps: Array<{ title: string; description: string } | string>
  cta_title: string
  cta_description: string
  cta_button_text: string
  cta_button_link: string
}

type PricingPackage = {
  id: string
  name: string
  tagline: string
  price: string | number
  price_display: string
  pricing_type: string
  ideal_for: string[]
  includes: string[]
  not_included: string[]
  estimated_duration: string
  popular: boolean
}

type PricingData = {
  currency: string
  currencySymbol: string
  pricing: {
    packages: PricingPackage[]
  }
}

type StepColorTheme = "gold" | "gold-dark" | "gold-light"

const fieldVisitIcons = [Calendar, ClipboardCheck, Ruler, MessageSquare, Lightbulb]

const DEFAULTS: ServicePageData = {
  hero_title: "Our Services",
  hero_description: "Learn about our timing, field visit process, and payment options for your interior design project.",
  service_cards: [
    { number: "01", title: "Timing", description: "Learn about our project timelines and scheduling process.", href: "#timing" },
    { number: "02", title: "Field Visit", description: "Understand our on-site consultation and assessment process.", href: "#field-visit" },
    { number: "03", title: "Payment Options", description: "Explore our flexible payment plans and pricing structure.", href: "#payment" },
    { number: "04", title: "Pricing & Packages", description: "Transparent NPR pricing — packages, room rates, and materials.", href: "#pricing" },
  ],
  timing_title: "Project Timing",
  timing_description: "We work with you to establish realistic timelines for your project.",
  timing_steps: [
    { title: "Initial consultation", description: "1–2 days to understand your vision" },
    { title: "Design concept", description: "1–2 weeks for creative development" },
    { title: "Final design", description: "2–4 weeks for detailed planning" },
    { title: "Implementation", description: "4–12 weeks for execution" },
    { title: "Completion", description: "Final walkthrough and handover" }
  ],
  field_visit_title: "Field Visit",
  field_visit_description: "Our designers visit your space to understand its full potential.",
  field_visit_steps: [
    { title: "Site measurement", description: "Precise measurements for accurate planning" },
    { title: "Photography", description: "Documentation of existing conditions" },
    { title: "Client brief", description: "Discussion of your preferences and requirements" },
    { title: "Material assessment", description: "Evaluation of finishes and materials" },
    { title: "Recommendations", description: "Expert suggestions based on assessment" }
  ],
  payment_title: "Payment Options",
  payment_description: "Flexible payment plans to suit every budget.",
  payment_steps: [
    { title: "Initial deposit", description: "30% advance on project start" },
    { title: "Design phase", description: "40% on design approval" },
    { title: "Material procurement", description: "25% for material purchases" },
    { title: "Final payment", description: "5% on project completion" }
  ],
  cta_title: "Ready to Transform Your Space?",
  cta_description: "Let's discuss your project and create something beautiful together.",
  cta_button_text: "Get Started Today",
  cta_button_link: "/contact",
}

export default function ServicesPage() {
  const [page, setPage] = useState<ServicePageData>(DEFAULTS)
  const [pricing, setPricing] = useState<PricingData | null>(null)

  useEffect(() => {
    fetch(`${API}/services/page/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setPage({ ...DEFAULTS, ...data }) })
      .catch(() => {})
    
    fetch(`${API}/pricing/page/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setPricing(data) })
      .catch(() => {})
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-light text-foreground md:text-6xl"
            >
              {page.hero_title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-light"
            >
              {page.hero_description}
            </motion.p>
          </div>
        </motion.section>

        {/* Service navigation cards */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-background"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(page.service_cards || DEFAULTS.service_cards).map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={card.href} className="group">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="border border-border bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg"
                    >
                      <div className="mb-4 text-4xl font-light text-[#e99816]">{card.number}</div>
                      <h3 className="mb-3 text-xl font-medium text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground font-light">{card.description}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timing */}
        <motion.section 
          id="timing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-gray-50"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">{page.timing_title}</h2>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">{page.timing_description}</p>
            </motion.div>
            <HowItWorks
              features={page.timing_steps.map((step: any, index: number) => ({
                title: typeof step === 'string' ? step : step.title,
                description: typeof step === 'string' ? '' : step.description,
                colorTheme: (index % 3 === 0 ? "gold" : index % 3 === 1 ? "gold-dark" : "gold-light") as "gold" | "gold-dark" | "gold-light"
              }))}
              className="!bg-gray-50"
            />
          </div>
        </motion.section>

        {/* Field Visit */}
        <motion.section 
          id="field-visit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">{page.field_visit_title}</h2>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">{page.field_visit_description}</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.field_visit_steps.map((step: any, index: number) => {
                const Icon = fieldVisitIcons[index % fieldVisitIcons.length]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="border border-neutral-200 rounded-lg p-6 hover:border-[#e99816] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e99816]/10 flex items-center justify-center text-[#e99816]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {typeof step === 'string' ? step : step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {typeof step === 'string' ? '' : step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Payment */}
        <motion.section 
          id="payment"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-gray-50"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">{page.payment_title}</h2>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">{page.payment_description}</p>
            </motion.div>
            <HowItWorks
              features={page.payment_steps.map((step: any, index: number) => ({
                title: typeof step === 'string' ? step : step.title,
                description: typeof step === 'string' ? '' : step.description,
                colorTheme: (index % 3 === 0 ? "gold-light" : index % 3 === 1 ? "gold" : "gold-dark") as "gold" | "gold-dark" | "gold-light"
              }))}
              className="!bg-gray-50"
            />
          </div>
        </motion.section>

        {/* Pricing & Packages */}
        <motion.section 
          id="pricing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">Pricing & Packages</h2>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
                Transparent NPR pricing — packages, room rates, materials, and an estimate calculator.
              </p>
            </motion.div>
            
            {pricing && pricing.pricing.packages && pricing.pricing.packages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.pricing.packages.map((pkg, i) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div
                      className={`relative border-2 rounded-lg p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group ${
                        pkg.popular
                          ? 'border-[#e99816] shadow-lg hover:border-[#d4850d]'
                          : 'border-neutral-200 hover:border-[#e99816] hover:shadow-xl'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e99816] text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-[#d4850d] group-hover:scale-105">
                          Popular
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#e99816]">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground">{pkg.tagline}</p>
                        <div className="text-4xl font-bold text-[#e99816] mb-1 transition-transform duration-300 group-hover:scale-110">
                          {pkg.price_display}
                        </div>
                        <p className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{pkg.pricing_type === 'startingFrom' ? 'Starting from' : ''}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-[#e99816]">Ideal For:</h4>
                        <ul className="space-y-2">
                          {pkg.ideal_for.map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1"
                            >
                              <Check className="h-4 w-4 text-[#e99816] mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-[#e99816]">Includes:</h4>
                        <ul className="space-y-2">
                          {pkg.includes.slice(0, 5).map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1"
                            >
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                              {item}
                            </motion.li>
                          ))}
                          {pkg.includes.length > 5 && (
                            <li className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">+ {pkg.includes.length - 5} more</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-[#e99816]">Not Included:</h4>
                        <ul className="space-y-2">
                          {pkg.not_included.slice(0, 3).map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1"
                            >
                              <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                              {item}
                            </motion.li>
                          ))}
                          {pkg.not_included.length > 3 && (
                            <li className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">+ {pkg.not_included.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground">
                          Estimated: {pkg.estimated_duration}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#e99816] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d4850d] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            Get Started <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">Loading pricing information...</div>
            )}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-[#e99816]"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-light text-white md:text-4xl"
            >
              {page.cta_title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-lg text-white/90 font-light"
            >
              {page.cta_description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={page.cta_button_link} className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100">
                {page.cta_button_text} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <FooterSection />
    </div>
  )
}
