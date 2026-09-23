"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { ServicesHero } from "@/components/services/services-hero"

export default function ServicesPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <ServicesHero />

        {/* Services Section */}
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
                Our Services
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
                Learn about our timing, field visit process, and payment options for your interior design project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/timing" className="group">
                <div className="border border-border bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg" style={{ borderRadius: "0" }}>
                  <div className="mb-4 text-4xl font-light text-[#e99816] transition-colors">01</div>
                  <h3 className="mb-3 text-xl font-medium text-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}>Timing</h3>
                  <p className="text-sm text-muted-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}>Learn about our project timelines and scheduling process.</p>
                </div>
              </Link>

              <Link href="/field-visit" className="group">
                <div className="border border-border bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg" style={{ borderRadius: "0" }}>
                  <div className="mb-4 text-4xl font-light text-[#e99816] transition-colors">02</div>
                  <h3 className="mb-3 text-xl font-medium text-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}>Field Visit</h3>
                  <p className="text-sm text-muted-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}>Understand our on-site consultation and assessment process.</p>
                </div>
              </Link>

              <Link href="/payment" className="group">
                <div className="border border-border bg-card p-8 transition-all hover:border-[#e99816] hover:shadow-lg" style={{ borderRadius: "0" }}>
                  <div className="mb-4 text-4xl font-light text-[#e99816] transition-colors">03</div>
                  <h3 className="mb-3 text-xl font-medium text-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}>Payment Options</h3>
                  <p className="text-sm text-muted-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}>Explore our flexible payment plans and pricing structure.</p>
                </div>
              </Link>
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
                Our Process
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
                A streamlined approach to bringing your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Initial meeting to understand your vision and requirements" },
                { step: "02", title: "Design", description: "Creating concepts and detailed design plans" },
                { step: "03", title: "Implementation", description: "Executing the design with precision and care" },
                { step: "04", title: "Final Touch", description: "Adding finishing touches for perfect completion" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="process-step relative border border-border bg-card p-6"
                  style={{ borderRadius: "0" }}
                >
                  <div
                    className="step-number mb-4 text-4xl font-light text-[#e99816] transition-colors"
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
              Ready to Transform Your Space?
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
              Let's discuss your project and create something beautiful together.
            </p>
            <button
              className="button-hover rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
