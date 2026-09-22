'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { DesignersSection } from "@/components/sections/designers-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const designStyles = [
  {
    id: 'newari-fusion',
    title: 'Newari Contemporary Fusion',
    image: '/design-ideas/newari-fusion.jpg',
    detail: 'Experience the perfect harmony of traditional Newari architecture and contemporary design. This style features exposed red brick walls, intricately carved wooden elements, paired with modern minimalist furniture.'
  },
  {
    id: 'mongolian-modern',
    title: 'Nepali Mongolian Modern',
    image: '/design-ideas/mongolian-modern.jpg',
    detail: 'Drawing inspiration from the rich heritage of Gurung, Magar, and Tamang cultures, this modern style incorporates traditional geometric rugs, cultural artifacts, and elegant wooden furniture.'
  },
  {
    id: 'nepali-minimalist',
    title: 'Modern Nepali Minimalist',
    image: '/design-ideas/nepali-minimalist.jpg',
    detail: 'Embracing the "less is more" philosophy, the Modern Nepali Minimalist style focuses on clean lines, natural materials, and uncluttered spaces. Subtle traditional motifs are integrated thoughtfully.'
  },
  {
    id: 'nepali-rustic',
    title: 'Nepali Rustic',
    image: '/design-ideas/nepali-rustic.jpg',
    detail: 'Capture the charm of a mountain cabin with the Nepali Rustic aesthetic. This style highlights exposed stone walls, raw timber beams, and mud-plastered effects, complemented by warm textiles.'
  },
  {
    id: 'nepali-biophilic',
    title: 'Nepali Biophilic',
    image: '/design-ideas/nepali-biophilic.jpg',
    detail: 'Connect with nature through the Nepali Biophilic design. By incorporating abundant indoor plants, bamboo elements, and traditional Dhaka fabric accents, this style blurs the lines between indoor and outdoor.'
  }
]

const locations = [
  {
    id: 'kathmandu',
    title: 'Kathmandu',
    image: '/images/luxury-dining-room.png',
    detail: 'Urban sophistication meets traditional charm in Kathmandu interiors. Perfect for city living with a blend of modern amenities and cultural heritage.'
  },
  {
    id: 'pokhara',
    title: 'Pokhara',
    image: '/images/luxury-bedroom.png',
    detail: 'Lakeside tranquility inspires Pokhara interiors. Natural light, panoramic views, and relaxed elegance define this serene style.'
  },
  {
    id: 'chitwan',
    title: 'Chitwan',
    image: '/images/luxury-kitchen.png',
    detail: 'Jungle-inspired elegance for Chitwan interiors. Earthy tones, natural materials, and wildlife motifs create a unique connection to nature.'
  }
]

export default function DesignIdeaPage() {
  const searchParams = useSearchParams();
  const [defaultTab, setDefaultTab] = useState('style');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'style' || tab === 'location') {
      setDefaultTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16 text-center">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Design Ideas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            Explore our curated collection of interior design styles, blending rich Nepali heritage with modern aesthetics to inspire your next project.
          </p>
        </div>

        <HowItWorksSection />

        {/* Statistics Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#e99816] mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>500+</div>
              <div className="text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e99816] mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>50+</div>
              <div className="text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight:300 }}>Expert Designers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e99816] mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>1000+</div>
              <div className="text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight:300 }}>Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e99816] mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>15+</div>
              <div className="text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight:300 }}>Design Styles</div>
            </div>
          </div>
        </div>

        {/* Design Tips Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl mb-8 text-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            Design Tips & Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Start with Natural Light</h3>
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
                Maximize natural light in your space to create a bright, welcoming atmosphere. Consider window treatments that enhance rather than block sunlight.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Embrace Local Materials</h3>
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
                Incorporate locally sourced materials like bamboo, stone, and wood to connect your space with Nepali heritage and craftsmanship.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Balance Function & Beauty</h3>
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
                Find the perfect balance between practical functionality and aesthetic beauty. Every element should serve both form and purpose in your daily life.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl mb-8 text-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg bg-card cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/luxury-living-room.png"
                  alt="Modern Living Room"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Modern Living Room</h3>
                  <p className="text-white/80 text-sm mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>Kathmandu</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-card cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/luxury-bedroom.png"
                  alt="Serene Bedroom"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Serene Bedroom</h3>
                  <p className="text-white/80 text-sm mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>Pokhara</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-card cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/luxury-kitchen.png"
                  alt="Contemporary Kitchen"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>Contemporary Kitchen</h3>
                  <p className="text-white/80 text-sm mt-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>Lalitpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="style" className="tab-button">By Style</TabsTrigger>
              <TabsTrigger value="location" className="tab-button">By City</TabsTrigger>
            </TabsList>

            <TabsContent value="style">
              <div className="card-stack" aria-label="Design styles">
                {designStyles.map((style) => (
                  <button
                    key={style.id}
                    className="feature-card"
                  >
                    <div className="feature-image-wrapper">
                      <Image
                        src={style.image}
                        alt={style.title}
                        fill
                        className="feature-image"
                      />
                    </div>
                    <span className="feature-title">{style.title}</span>
                    <div className="feature-content">
                      <h3 className="feature-heading">{style.title}</h3>
                      <p className="feature-detail">{style.detail}</p>
                      <span className="learn-more">Explore Style</span>
                    </div>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="card-stack" aria-label="Design locations">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className="feature-card"
                  >
                    <div className="feature-image-wrapper">
                      <Image
                        src={location.image}
                        alt={location.title}
                        fill
                        className="feature-image"
                      />
                    </div>
                    <span className="feature-title">{location.title}</span>
                    <div className="feature-content">
                      <h3 className="feature-heading">{location.title}</h3>
                      <p className="feature-detail">{location.detail}</p>
                      <span className="learn-more">Explore City</span>
                    </div>
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DesignersSection />
      </main>

      <FooterSection />
    </div>
  );
}
