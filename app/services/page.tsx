"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { ServicesHero } from "@/components/services/services-hero"
import { TimingSection } from "@/components/services/timing-section"
import { FieldVisitSection } from "@/components/services/field-visit-section"
import { PaymentSection } from "@/components/services/payment-section"
import { PricingSection } from "@/components/services/pricing-section"
import { api, ServicePage } from "@/lib/api"
import { useEffect, useState } from "react"

export default function ServicesPage() {
  const [serviceData, setServiceData] = useState<ServicePage | null>(null)

  useEffect(() => {
    async function fetchServiceData() {
      try {
        const data = await api.getServicePage()
        setServiceData(data)
      } catch (error) {
        console.error('Failed to fetch service data:', error)
      }
    }
    fetchServiceData()
  }, [])

  const data = serviceData || {
    hero_title: 'Our Services',
    hero_description: 'Learn about our timing, field visit process, and payment options for your interior design project.',
    service_cards: [
      { number: '01', title: 'Timing', description: 'Learn about our project timelines and scheduling process.', href: '#timing' },
      { number: '02', title: 'Field Visit', description: 'Understand our on-site consultation and assessment process.', href: '#field-visit' },
      { number: '03', title: 'Payment Options', description: 'Explore our flexible payment plans and pricing structure.', href: '#payment' },
      { number: '04', title: 'Pricing & Packages', description: 'Transparent NPR pricing — packages, room rates, materials, and an estimate calculator.', href: '#pricing' }
    ],
    cta_title: 'Ready to Transform Your Space?',
    cta_description: "Let's discuss your project and create something beautiful together.",
    cta_button_text: 'Get Started Today',
    cta_button_link: '/contact'
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <ServicesHero />

        {/* Services Section */}
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
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                {data.hero_title}
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                {data.hero_description}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.service_cards.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href} className="group">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="border border-border bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg"
                      style={{ borderRadius: "0" }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        className="mb-4 text-4xl font-light text-[#e99816] transition-colors"
                      >
                        {service.number}
                      </motion.div>
                      <h3 className="mb-3 text-xl font-medium text-foreground" style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        letterSpacing: '0.02em',
                      }}>{service.title}</h3>
                      <p className="text-sm text-muted-foreground" style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 300,
                      }}>{service.description}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


                <TimingSection />
        <FieldVisitSection />
        <PaymentSection />
        <PricingSection />

        {/* CTA Section */}
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
              className="mb-6 text-3xl font-light text-white md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {data.cta_title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg text-white/90"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              {data.cta_description}
            </motion.p>
            <Link href={data.cta_button_link || '/contact'}>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-hover rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                {data.cta_button_text}
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}
