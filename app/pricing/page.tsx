"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { Check, ArrowRight } from "lucide-react"

export default function PricingPage() {
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
                Pricing Options
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
                Transparent pricing for interior design services tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                Individual Services Pricing
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
                Choose individual services for specific design needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Consultation",
                  price: "Rs. 5,000",
                  description: "One-on-one consultation with our expert designers",
                  features: [
                    "60-minute consultation",
                    "Design assessment",
                    "Recommendations",
                    "Follow-up call"
                  ]
                },
                {
                  name: "Space Planning",
                  price: "Rs. 15,000",
                  description: "Optimize your space layout for maximum functionality",
                  features: [
                    "Floor plan design",
                    "Furniture layout",
                    "Lighting plan",
                    "2 revisions"
                  ]
                },
                {
                  name: "Material Selection",
                  price: "Rs. 10,000",
                  description: "Expert guidance on materials and finishes",
                  features: [
                    "Material sourcing",
                    "Color consultation",
                    "Sample procurement",
                    "Budget planning"
                  ]
                },
                {
                  name: "3D Visualization",
                  price: "Rs. 25,000",
                  description: "Photorealistic 3D renderings of your space",
                  features: [
                    "3D modeling",
                    "Rendering",
                    "Virtual walkthrough",
                    "Multiple angles"
                  ]
                },
                {
                  name: "Project Management",
                  price: "Rs. 20,000",
                  description: "Professional oversight of your design project",
                  features: [
                    "Timeline management",
                    "Contractor coordination",
                    "Quality control",
                    "Regular updates"
                  ]
                },
                {
                  name: "Final Styling",
                  price: "Rs. 15,000",
                  description: "Complete furnishing and accessory selection",
                  features: [
                    "Furniture selection",
                    "Art curation",
                    "Accessory placement",
                    "Final styling"
                  ]
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow"
                >
                  <h3
                    className="mb-2 text-xl font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {service.name}
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
                    {service.description}
                  </p>
                  <div
                    className="mb-6 text-3xl font-bold text-[#e99816]"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {service.price}
                  </div>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
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
                  <button
                    className="w-full flex items-center justify-center gap-2 border border-[#e99816] px-6 py-3 text-sm font-medium text-[#e99816] transition-colors hover:bg-[#e99816] hover:text-white"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Book Service
                    <ArrowRight className="h-4 w-4" />
                  </button>
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
              Need a Custom Quote?
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
              Contact us for a personalized quote based on your specific requirements.
            </p>
            <button
              className="bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Get Quote
            </button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}