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
