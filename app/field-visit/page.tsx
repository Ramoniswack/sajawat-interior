"use client"

import Link from "next/link"
import { Ruler, Search, Lightbulb, Camera, Target, Clipboard } from "lucide-react"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"

export default function FieldVisitPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
            <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="text-center">
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
                  On-Site Assessment
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
                Field Visit
                <span className="block text-[#e99816]">On-Site Consultation</span>
              </h1>

              <p
                className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Our field visits are essential for understanding your space, assessing requirements, and creating accurate design solutions tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-24 bg-background">
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
                What to Expect
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
                A comprehensive on-site assessment to ensure perfect design planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Ruler className="h-12 w-12 text-[#e99816]" />,
                  title: "Space Measurement",
                  description: "Accurate measurements of all rooms, including dimensions, ceiling heights, and architectural features."
                },
                {
                  icon: <Search className="h-12 w-12 text-[#e99816]" />,
                  title: "Site Assessment",
                  description: "Evaluation of existing conditions, lighting, electrical points, and structural considerations."
                },
                {
                  icon: <Lightbulb className="h-12 w-12 text-[#e99816]" />,
                  title: "Requirement Discussion",
                  description: "In-depth discussion about your lifestyle, preferences, budget, and design aspirations."
                },
                {
                  icon: <Camera className="h-12 w-12 text-[#e99816]" />,
                  title: "Documentation",
                  description: "Photographic documentation of existing space and important details for reference."
                },
                {
                  icon: <Target className="h-12 w-12 text-[#e99816]" />,
                  title: "Opportunity Analysis",
                  description: "Identification of design opportunities and potential challenges in the space."
                },
                {
                  icon: <Clipboard className="h-12 w-12 text-[#e99816]" />,
                  title: "Initial Recommendations",
                  description: "Preliminary suggestions and design direction based on site assessment."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-border bg-card p-6 transition-all hover:border-[#e99816]"
                  style={{ borderRadius: "0" }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="mb-3 text-lg font-medium text-foreground"
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
                    className="text-sm text-muted-foreground leading-relaxed"
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

        {/* Process Section */}
        <section className="py-24 bg-muted/30">
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
                Visit Process
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Scheduling",
                  description: "Contact us to schedule a convenient time for the field visit. We work around your availability."
                },
                {
                  step: "02",
                  title: "Preparation",
                  description: "We review your requirements and prepare assessment checklist. Please have any inspiration images ready."
                },
                {
                  step: "03",
                  title: "On-Site Visit",
                  description: "Our designer visits your location, conducts measurements, and discusses your vision in detail."
                },
                {
                  step: "04",
                  title: "Follow-up",
                  description: "Receive a detailed report with findings, measurements, and initial recommendations within 3-5 days."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative border border-border bg-card p-8 transition-all hover:border-[#e99816]"
                  style={{ borderRadius: "0" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-4xl font-light text-[#e99816]">{item.step}</div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="mb-3 text-xl font-medium text-foreground"
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
                        className="text-sm text-muted-foreground leading-relaxed"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-24 bg-background">
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
                Tips for a Successful Visit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Be Prepared</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  Have your budget range, timeline, and any specific requirements ready. Share inspiration images or Pinterest boards.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Clear Access</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  Ensure all areas to be designed are accessible. Clear any clutter that might obstruct measurements or assessment.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Ask Questions</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  This is your opportunity to understand our process. Don't hesitate to ask about our approach, timeline, or any concerns.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Take Notes</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  Feel free to take notes during the visit. We'll also provide a written summary after the assessment for your reference.
                </p>
              </div>
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
              Schedule Your Field Visit
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
              Let us visit your space and create a design plan that transforms it into something extraordinary.
            </p>
            <Link
              href="/contact"
              className="button-hover inline-block rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Book Your Visit
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}