"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FooterSection } from "@/components/sections/footer-section"
import { Sparkles, Target, Leaf, Check } from "lucide-react"
import TeamMemberCard from "@/components/ui/team-member-card"

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

type HomeData = {
  projects_completed: number
  expert_designers: number
  happy_clients: number
  design_styles: number
  featured_section_title?: string
  featured_section_description?: string
}

const DEFAULTS: HomeData = {
  projects_completed: 500,
  expert_designers: 50,
  happy_clients: 1000,
  design_styles: 15,
}

export default function AboutPage() {
  const [home, setHome] = useState<HomeData>(DEFAULTS)

  useEffect(() => {
    fetch(`${API}/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setHome({ ...DEFAULTS, ...data }) })
      .catch(() => {})
  }, [])

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: `${home.projects_completed}+`, label: "Projects Completed" },
    { number: `${home.expert_designers}+`, label: "Expert Designers" },
    { number: `${home.happy_clients}+`, label: "Happy Clients" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
            <h1 className="mb-6 text-5xl font-light text-foreground md:text-6xl">About Sajawat Interiors</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
              Transforming spaces into extraordinary experiences through innovative interior design solutions.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-light text-foreground md:text-4xl">Our Story</h2>
                <p className="mb-4 text-base text-muted-foreground leading-relaxed font-light">
                  Founded with a passion for creating beautiful, functional spaces, Sajawat Interiors has grown from a small design studio to a leading interior design company in Nepal. Our journey began with a simple belief: that every space has the potential to inspire and transform lives.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  Today, we continue to push the boundaries of interior design, blending traditional Nepali aesthetics with modern contemporary elements to create spaces that are both timeless and innovative.
                </p>
              </div>
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/luxury-living-room.png")' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">Our Mission</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground font-light">
                To transform every space we touch into a reflection of our clients' dreams.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "Constantly pushing boundaries with creative design solutions", icon: <Sparkles className="h-8 w-8 text-[#e99816]" /> },
                { title: "Quality", desc: "Uncompromising commitment to excellence in every detail", icon: <Target className="h-8 w-8 text-[#e99816]" /> },
                { title: "Sustainability", desc: "Eco-friendly practices and materials for a better future", icon: <Leaf className="h-8 w-8 text-[#e99816]" /> },
              ].map((v, i) => (
                <div key={i} className="border border-gray-200 bg-white p-8 text-center">
                  <div className="mb-4 flex justify-center">{v.icon}</div>
                  <h3 className="mb-3 text-xl font-medium text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-foreground md:text-4xl">Our Team</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground font-light">
                Meet the talented individuals who bring our design visions to life.
              </p>
            </div>
            <div className="flex flex-col">
              <TeamMemberCard position="left" jobPosition="Lead Designer" firstName="Aarav" lastName="Sharma" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" description="Aarav is a visionary designer with over 10 years of experience creating stunning residential and commercial spaces." />
              <TeamMemberCard position="right" jobPosition="Architectural Specialist" firstName="Priya" lastName="Gurung" imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" description="Priya brings expertise in sustainable and biophilic design, ensuring every space feels natural and breathable." />
              <TeamMemberCard position="left" jobPosition="Design Director" firstName="Siddharth" lastName="Thapa" imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" description="An expert in contemporary fusion, Siddharth transforms ordinary rooms into luxurious, cutting-edge environments." />
              <TeamMemberCard position="right" jobPosition="Interior Consultant" firstName="Anita" lastName="Rai" imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" description="Anita specialises in creating warm, inviting spaces that reflect her clients' personalities." />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-[#e99816] mb-2">{s.number}</div>
                  <div className="text-sm text-muted-foreground font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 text-2xl font-light text-foreground">Our Philosophy</h3>
                <p className="mb-6 text-base text-muted-foreground leading-relaxed font-light">
                  At Sajawat Interiors, great design should be both beautiful and functional. We combine aesthetic excellence with practical solutions, ensuring every space not only looks stunning but enhances the quality of life for those who inhabit it.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-light text-foreground">Our Approach</h3>
                <ul className="space-y-4">
                  {[
                    "Client-Centric Design Process",
                    "Collaborative Approach with Open Communication",
                    "Attention to Detail in Every Project",
                    "Sustainable and Eco-Friendly Practices",
                    "Blend of Traditional and Modern Aesthetics",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-light">
                      <Check className="h-5 w-5 text-[#e99816] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#e99816]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">Ready to Transform Your Space?</h2>
            <p className="mb-8 text-lg text-white/90 font-light">Let's discuss your project and create something beautiful together.</p>
            <Link href="/contact" className="inline-block bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
