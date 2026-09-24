"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { pricingData } from "@/lib/pricing-data"

const sys = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
const baseFont = { fontFamily: sys, WebkitFontSmoothing: "antialiased" as const, MozOsxFontSmoothing: "grayscale" as const }

function fmt(n: number) {
  return "Rs " + n.toLocaleString("en-IN")
}

// ─── Package Cards ────────────────────────────────────────────────────────────
function PackagesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Design Packages
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            {pricingData.pricingPage.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative border ${pkg.popular ? "border-[#e99816]" : "border-border"} bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg flex flex-col`}
              style={{ borderRadius: 0 }}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e99816] px-4 py-1 text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap"
                >
                  Most Popular
                </motion.div>
              )}
              <div className="mb-2 text-xs font-medium text-[#e99816] uppercase tracking-wider" style={baseFont}>
                {pkg.name}
              </div>
              <div className="mb-4 text-xl font-semibold text-foreground" style={{ ...baseFont, letterSpacing: "0.01em" }}>
                {pkg.priceLabel}
              </div>
              <p className="mb-6 text-sm text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>
                {pkg.description}
              </p>
              <ul className="mb-8 space-y-2 flex-grow">
                {pkg.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 + 0.2 }}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-0.5 text-[#e99816]">✓</span>
                    <span style={{ ...baseFont, fontWeight: 300 }}>{f}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="block w-full border border-[#e99816] bg-[#e99816] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
                  style={{ ...baseFont, letterSpacing: "0.02em" }}
                >
                  Choose Plan
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Room Pricing Table ───────────────────────────────────────────────────────
function RoomPricingSection() {
  const tiers = ["basic", "standard", "premium", "luxury"] as const
  const tierLabels: Record<string, string> = {
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    luxury: "Luxury",
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Room-wise Pricing
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Estimated design fees per room based on quality level
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-border bg-card px-6 py-4 text-left text-sm font-medium text-foreground" style={baseFont}>
                  Room Type
                </th>
                {tiers.map((t) => (
                  <th key={t} className="border border-border bg-card px-6 py-4 text-center text-sm font-medium text-foreground" style={baseFont}>
                    {tierLabels[t]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.roomPricing.map((room, i) => (
                <motion.tr
                  key={room.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.4 }}
                  className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}
                >
                  <td className="border border-border px-6 py-4 text-sm font-medium text-foreground" style={baseFont}>
                    {room.name}
                  </td>
                  {tiers.map((t) => (
                    <td key={t} className="border border-border px-6 py-4 text-center text-sm text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>
                      {fmt(room.pricing[t])}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-xs text-muted-foreground text-center" style={{ ...baseFont, fontWeight: 300 }}
        >
          {pricingData.pricingNote}
        </motion.p>
      </div>
    </motion.section>
  )
}

// ─── Area Pricing ─────────────────────────────────────────────────────────────
function AreaPricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Price per Sq.Ft.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Overall interior execution cost estimates by quality tier
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pricingData.areaPricing.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-border bg-card p-6 text-center transition-all hover:border-[#e99816]" style={{ borderRadius: 0 }}
            >
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#e99816]" style={baseFont}>{tier.name}</div>
              <div className="text-lg font-semibold text-foreground" style={baseFont}>
                {fmt(tier.minPrice)} – {fmt(tier.maxPrice)}
              </div>
              <div className="mt-1 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>per {tier.unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Design Styles ────────────────────────────────────────────────────────────
function StylesPricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Pricing by Design Style
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Cost range varies based on the design style and complexity of execution
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {pricingData.styles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-border bg-card p-5 transition-all hover:border-[#e99816]" style={{ borderRadius: 0 }}
            >
              <div className="mb-2 text-sm font-medium text-foreground" style={baseFont}>{style.name}</div>
              <div className="text-xs text-[#e99816]" style={baseFont}>
                {fmt(style.priceRange.min)} – {fmt(style.priceRange.max)}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>/ {style.unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Materials ────────────────────────────────────────────────────────────────
function MaterialsSection() {
  const [tab, setTab] = useState<"flooring" | "walls">("flooring")

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Material Pricing
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Estimated cost of common interior materials
          </motion.p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex justify-center gap-4"
        >
          {(["flooring", "walls"] as const).map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 text-sm font-medium border transition-colors ${
                tab === t
                  ? "border-[#e99816] bg-[#e99816] text-white"
                  : "border-border text-foreground hover:border-[#e99816]"
              }`}
              style={{ ...baseFont, borderRadius: 0 }}
            >
              {t === "flooring" ? "Flooring" : "Walls"}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pricingData.materials[tab].map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-border bg-card p-6 transition-all hover:border-[#e99816]" style={{ borderRadius: 0 }}
            >
              <div className="mb-1 text-sm font-medium text-foreground" style={baseFont}>{m.name}</div>
              <div className="text-base font-semibold text-[#e99816]" style={baseFont}>
                {fmt(m.minPrice)} – {fmt(m.maxPrice)}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>per {m.unit}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── Individual Services ──────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Individual Services
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Standalone design services you can book individually
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.services.map((svc, index) => {
            const priceText =
              "price" in svc
                ? fmt(svc.price)
                : `${fmt((svc as { minPrice: number }).minPrice)} – ${fmt((svc as { maxPrice: number }).maxPrice)}`
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="border border-border bg-card p-6 transition-all hover:border-[#e99816]" style={{ borderRadius: 0 }}
              >
                <div className="mb-2 text-sm font-medium text-foreground" style={baseFont}>{svc.name}</div>
                <div className="text-base font-semibold text-[#e99816]" style={baseFont}>{priceText}</div>
                <div className="mt-0.5 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>per {svc.unit}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Estimate Calculator ──────────────────────────────────────────────────────
function CalculatorSection() {
  const [area, setArea] = useState("")
  const [quality, setQuality] = useState("standard")
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null)

  const baseArea = pricingData.areaPricing.find((a) => a.id === "standard")!
  const multiplier = pricingData.calculator.qualityLevels.find((q) => q.id === quality)?.multiplier ?? 1

  function calculate() {
    const sqft = parseFloat(area)
    if (!sqft || sqft <= 0) return

    // find the area price band for selected quality
    const band = pricingData.areaPricing.find((a) => a.id === quality) ?? baseArea
    setEstimate({
      min: Math.round(sqft * band.minPrice * multiplier),
      max: Math.round(sqft * band.maxPrice * multiplier),
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Estimate Calculator
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Get a quick budget estimate for your interior project
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-border bg-card p-8" style={{ borderRadius: 0 }}
        >
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-foreground" style={baseFont}>
              Total Area (sq.ft.)
            </label>
            <input
              type="number"
              min="0"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. 1200"
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#e99816] focus:outline-none"
              style={{ ...baseFont, borderRadius: 0 }}
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-foreground" style={baseFont}>
              Quality Level
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pricingData.calculator.qualityLevels.map((q, index) => (
                <motion.button
                  key={q.id}
                  onClick={() => setQuality(q.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`border py-3 text-sm font-medium transition-colors ${
                    quality === q.id
                      ? "border-[#e99816] bg-[#e99816] text-white"
                      : "border-border text-foreground hover:border-[#e99816]"
                  }`}
                  style={{ ...baseFont, borderRadius: 0 }}
                >
                  {q.name}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculate}
            className="w-full border border-[#e99816] bg-[#e99816] py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
            style={{ ...baseFont, borderRadius: 0 }}
          >
            Calculate Estimate
          </motion.button>

          {estimate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 border border-[#e99816]/30 bg-[#e99816]/5 p-6 text-center"
            >
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#e99816]" style={baseFont}>
                Estimated Budget
              </div>
              <div className="text-2xl font-semibold text-foreground" style={baseFont}>
                {fmt(estimate.min)} – {fmt(estimate.max)}
              </div>
              <p className="mt-3 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>
                {pricingData.pricingNote}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="mt-4 inline-block border border-[#e99816] px-6 py-2 text-sm font-medium text-[#e99816] transition-colors hover:bg-[#e99816] hover:text-white"
                  style={{ ...baseFont, borderRadius: 0 }}
                >
                  Get Exact Quote
                </Link>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Payment Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 border border-border bg-card p-6" style={{ borderRadius: 0 }}
        >
          <h3 className="mb-4 text-lg font-medium text-foreground" style={baseFont}>Payment Schedule</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Booking Deposit", value: pricingData.payment.depositPercent },
              { label: "Design Approval", value: pricingData.payment.designApprovalPercent },
              { label: "Execution", value: pricingData.payment.executionPercent },
              { label: "Completion", value: pricingData.payment.completionPercent },
            ].map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-light text-[#e99816]" style={baseFont}>{step.value}%</div>
                <div className="mt-1 text-xs text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}>{step.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── Additional Costs ─────────────────────────────────────────────────────────
function AdditionalCostsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}>
            Additional Costs to Consider
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground" style={{ ...baseFont, fontWeight: 300 }}
          >
            Plan your full budget by accounting for these components
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.additionalCosts.map((cost, index) => {
            const valueText =
              cost.type === "percentage"
                ? `${(cost as { minPercent: number }).minPercent}–${(cost as { maxPercent: number }).maxPercent}% of project cost`
                : `${fmt((cost as { minPrice: number }).minPrice)} – ${fmt((cost as { maxPrice: number }).maxPrice)}`
            return (
              <motion.div
                key={cost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="border border-border bg-card p-6 transition-all hover:border-[#e99816]" style={{ borderRadius: 0 }}
              >
                <div className="mb-2 text-sm font-medium text-foreground" style={baseFont}>{cost.name}</div>
                <div className="text-sm text-[#e99816]" style={baseFont}>{valueText}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Quotation Note + CTA ─────────────────────────────────────────────────────
function QuotationCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-[#e99816]"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-light text-white md:text-4xl" style={{ ...baseFont, letterSpacing: "0.02em" }}
        >
          {pricingData.pricingPage.cta.primary}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-lg text-white/90" style={{ ...baseFont, fontWeight: 300 }}
        >
          {pricingData.quotation.note}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-sm text-white/70" style={{ ...baseFont, fontWeight: 300 }}
        >
          Quotation valid for {pricingData.quotation.validityDays} days · Site visit required · Custom quotation available
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
              style={{ ...baseFont, letterSpacing: "0.02em" }}
            >
              {pricingData.pricingPage.cta.primary}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#pricing-calculator"
              className="inline-block rounded-none border border-white px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              style={{ ...baseFont, letterSpacing: "0.02em" }}
            >
              {pricingData.pricingPage.cta.secondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── Root Export ──────────────────────────────────────────────────────────────
export function PricingSection() {
  return (
    <div id="pricing" className="w-full pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 text-center">
          <div className="mb-6">
            <span
              className="inline-block border border-[#e99816] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#e99816]"
              style={{ ...baseFont, letterSpacing: "0.05em" }}
            >
              Transparent Pricing · {pricingData.currency}
            </span>
          </div>
          <h1
            className="mb-6 text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ ...baseFont, letterSpacing: "0.02em" }}
          >
            {pricingData.pricingPage.title}
            <span className="block text-[#e99816]">{pricingData.pricingPage.subtitle}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed" style={{ ...baseFont, fontWeight: 300 }}>
            {pricingData.pricingPage.description}
          </p>
        </div>
      </section>

      <PackagesSection />
      <RoomPricingSection />
      <AreaPricingSection />
      <StylesPricingSection />
      <MaterialsSection />
      <ServicesSection />

      {/* Calculator anchor */}
      <div id="pricing-calculator">
        <CalculatorSection />
      </div>

      <AdditionalCostsSection />
      <QuotationCTA />
    </div>
  )
}
