'use client'

import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

const services = [
  {
    id: 'residential',
    title: 'Residential Interior',
    description: 'Transform your home into a sanctuary. Our residential interior design services create personalized spaces that reflect your lifestyle, preferences, and cultural heritage. From cozy apartments to sprawling family homes, we bring warmth and functionality to every room.',
    features: ['Custom Design', 'Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design'],
    image: '/images/luxury-living-room.png'
  },
  {
    id: 'office',
    title: 'Office or Workspace',
    description: 'Create productive and inspiring work environments. Our office design services focus on optimizing workflow, enhancing employee well-being, and reflecting your brand identity. From home offices to corporate headquarters, we design spaces that drive success.',
    features: ['Ergonomic Design', 'Brand Integration', 'Collaborative Spaces', 'Technology Integration', 'Acoustic Solutions'],
    image: '/images/interior-view.png'
  },
  {
    id: 'hospitality',
    title: 'Hospitality or Café',
    description: 'Design memorable experiences for your guests. Our hospitality design services create inviting atmospheres that encourage relaxation and social connection. From boutique hotels to cozy cafés, we craft spaces that leave lasting impressions.',
    features: ['Ambience Creation', 'Customer Flow Design', 'Brand Storytelling', 'Sustainable Materials', 'Local Art Integration'],
    image: '/images/luxury-dining-room.png'
  },
  {
    id: 'furniture',
    title: 'Furniture and Styling',
    description: 'Curate the perfect pieces to complete your space. Our furniture and styling services help you select, arrange, and style furniture and accessories that complement your design vision. From statement pieces to subtle accents, we bring it all together.',
    features: ['Custom Furniture', 'Art Selection', 'Accessory Styling', 'Textile Coordination', 'Lighting Fixtures'],
    image: '/images/luxury-bedroom.png'
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16 text-center">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            Comprehensive interior design solutions tailored to your unique needs. From residential spaces to commercial environments, we bring your vision to life.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-card shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-2xl mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
                      What We Offer:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
                          <span className="w-1.5 h-1.5 bg-[#e99816] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-[#e99816] text-white hover:bg-[#c9790b] px-6 py-2 rounded-md text-sm font-medium transition-colors" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="bg-[#e99816] rounded-xl p-12 text-center">
            <h2 className="text-3xl font-light text-white mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
              Let's discuss your project and create something beautiful together.
            </p>
            <button className="bg-white text-[#e99816] hover:bg-gray-100 px-8 py-3 rounded-md text-sm font-medium transition-colors" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
              Get Started
            </button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
