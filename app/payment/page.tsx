"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"

export default function PaymentPage() {
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
                  Flexible Payment
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
                Payment Options
                <span className="block text-[#e99816]">Flexible & Transparent</span>
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
                We offer flexible payment plans designed to fit your budget. Transparent pricing with no hidden costs, making quality interior design accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Plans Section */}
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
                Payment Plans
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
                Choose a plan that works best for your project and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Standard Plan",
                  description: "Pay as you go with milestone-based payments",
                  features: [
                    "50% advance booking",
                    "25% at design approval",
                    "25% at completion",
                    "No interest charges",
                    "Flexible scheduling"
                  ],
                  popular: false
                },
                {
                  name: "Premium Plan",
                  description: "Extended payment terms for larger projects",
                  features: [
                    "40% advance booking",
                    "30% at design approval",
                    "30% at completion",
                    "Priority scheduling",
                    "Dedicated project manager"
                  ],
                  popular: true
                },
                {
                  name: "Custom Plan",
                  description: "Tailored payment schedule for your needs",
                  features: [
                    "Customized payment terms",
                    "Negotiable down payment",
                    "Flexible milestone structure",
                    "Project-specific pricing",
                    "Personalized consultation"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative border ${plan.popular ? 'border-[#e99816]' : 'border-border'} bg-card p-8 transition-all hover:border-[#e99816]`}
                  style={{ borderRadius: "0" }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e99816] px-4 py-1 text-xs font-medium text-white uppercase tracking-wider">
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
                  <p className="mb-6 text-sm text-muted-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}>
                    {plan.description}
                  </p>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-[#e99816] mt-1">✓</span>
                        <span style={{
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale',
                          fontWeight: 300,
                        }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full border border-[#e99816] bg-[#e99816] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
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
                Accepted Payment Methods
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Bank Transfer", icon: "🏦" },
                { name: "Credit/Debit Card", icon: "💳" },
                { name: "UPI", icon: "📱" },
                { name: "Cash", icon: "💵" },
                { name: "Cheque", icon: "📝" },
                { name: "Net Banking", icon: "🌐" },
                { name: "Digital Wallets", icon: "👛" },
                { name: "EMI Options", icon: "📊" }
              ].map((method, index) => (
                <div
                  key={index}
                  className="border border-border bg-card p-6 text-center transition-all hover:border-[#e99816]"
                  style={{ borderRadius: "0" }}
                >
                  <div className="mb-3 text-3xl">{method.icon}</div>
                  <div className="text-sm font-medium text-foreground">{method.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Transparency Section */}
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
                Transparent Pricing
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
                No hidden costs, no surprises. What you see is what you pay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Detailed Quotes</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  Every quote includes itemized costs for materials, labor, and any additional services. You'll know exactly what you're paying for.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">No Hidden Fees</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  We believe in complete transparency. All costs are discussed upfront, and there are no surprise charges during the project.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Change Orders</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  Any changes to the scope are documented with updated pricing. We'll never proceed without your approval on additional costs.
                </p>
              </div>

              <div className="border border-border bg-card p-6" style={{ borderRadius: "0" }}>
                <h3 className="mb-3 text-lg font-medium text-foreground">Payment Security</h3>
                <p className="text-sm text-muted-foreground" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}>
                  All transactions are secure and documented. You'll receive receipts for every payment made towards your project.
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
              Discuss Your Payment Options
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
              Contact us to find a payment plan that works for your budget and project requirements.
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
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}