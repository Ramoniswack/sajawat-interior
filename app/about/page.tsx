"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { Sparkles, Target, Leaf, Check, ArrowRight } from "lucide-react"
import TeamMemberCard from "@/components/ui/team-member-card"
import { api, Designer } from "@/lib/api"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [designers, setDesigners] = useState<Designer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const data = await api.getDesigners()
        setDesigners(data)
      } catch (err) {
        console.error('Error fetching designers:', err)
        setError('Failed to load team members')
      } finally {
        setLoading(false)
      }
    }

    fetchDesigners()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
                About Sajawat Interiors
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
                Transforming spaces into extraordinary experiences through innovative interior design solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="mb-6 text-3xl font-light text-foreground md:text-4xl"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  Our Story
                </h2>
                <p
                  className="mb-4 text-base text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}
                >
                  Founded with a passion for creating beautiful, functional spaces, Sajawat Interiors has grown from a small design studio to a leading interior design company in Nepal. Our journey began with a simple belief: that every space has the potential to inspire and transform lives.
                </p>
                <p
                  className="text-base text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}
                >
                  Today, we continue to push the boundaries of interior design, blending traditional Nepali aesthetics with modern contemporary elements to create spaces that are both timeless and innovative.
                </p>
              </div>
              <div className="relative aspect-[4/3] bg-gray-100">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/luxury-living-room.png")' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
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
                Our Mission
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
                To transform every space we touch into a reflection of our clients' dreams, while maintaining the highest standards of quality and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing boundaries with creative design solutions",
                  icon: <Sparkles className="h-8 w-8 text-[#e99816]" />
                },
                {
                  title: "Quality",
                  description: "Uncompromising commitment to excellence in every detail",
                  icon: <Target className="h-8 w-8 text-[#e99816]" />
                },
                {
                  title: "Sustainability",
                  description: "Eco-friendly practices and materials for a better future",
                  icon: <Leaf className="h-8 w-8 text-[#e99816]" />
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-8 text-center"
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3
                    className="mb-3 text-xl font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {value.title}
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
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Our Team
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
                Meet the talented individuals who bring our design visions to life.
              </p>
            </div>

            {loading ? (
              <div className="text-center text-muted-foreground">Loading team members...</div>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : designers.length === 0 ? (
              <div className="text-center text-muted-foreground">No team members available.</div>
            ) : (
              <div className="flex flex-col">
                {designers.map((designer, index) => {
                  const nameParts = designer.name.split(' ')
                  const firstName = nameParts[0] || ''
                  const lastName = nameParts.slice(1).join(' ') || ''
                  const position = index % 2 === 0 ? 'left' : 'right'
                  
                  return (
                    <TeamMemberCard
                      key={designer.id}
                      position={position}
                      jobPosition={designer.role}
                      firstName={firstName}
                      lastName={lastName}
                      imageUrl={designer.image_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'}
                      description={designer.description}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* About Us Section */}
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
                About Us
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
                Discover what makes Sajawat Interiors unique in the world of design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3
                  className="mb-4 text-2xl font-light text-foreground"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  Our Philosophy
                </h3>
                <p
                  className="mb-6 text-base text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}
                >
                  At Sajawat Interiors, we believe that great design should be both beautiful and functional. Our approach combines aesthetic excellence with practical solutions, ensuring that every space we create not only looks stunning but also enhances the quality of life for those who inhabit it.
                </p>
                <p
                  className="text-base text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}
                >
                  We draw inspiration from Nepal's rich architectural heritage while embracing contemporary design principles, creating spaces that honor tradition while embracing modernity.
                </p>
              </div>

              <div>
                <h3
                  className="mb-4 text-2xl font-light text-foreground"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  Our Approach
                </h3>
                <ul className="space-y-4">
                  {[
                    "Client-Centric Design Process",
                    "Collaborative Approach with Open Communication",
                    "Attention to Detail in Every Project",
                    "Sustainable and Eco-Friendly Practices",
                    "Blend of Traditional and Modern Aesthetics",
                    "Commitment to Quality and Excellence"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base text-muted-foreground"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        fontWeight: 300,
                      }}
                    >
                      <Check className="h-5 w-5 text-[#e99816] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Expert Designers" },
                { number: "1000+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-4xl font-bold text-[#e99816] mb-2"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    {stat.label}
                  </div>
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
              className="bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
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