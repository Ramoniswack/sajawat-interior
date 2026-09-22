'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const roomDesigns = [
  {
    id: 'living-room',
    title: 'Living Room',
    image: '/images/luxury-living-room.png',
    detail: 'Transform your living space into a warm, inviting gathering place. From cozy minimalism to luxurious entertaining spaces, find the perfect style for your lifestyle.'
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    image: '/images/luxury-bedroom.png',
    detail: 'Create your personal sanctuary with bedroom designs that prioritize comfort, tranquility, and personal style. From serene retreats to dramatic master suites.'
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    image: '/images/luxury-kitchen.png',
    detail: 'Design the heart of your home with functional, beautiful kitchen spaces. Modern layouts, smart storage solutions, and stunning aesthetics for cooking and gathering.'
  },
  {
    id: 'dining-room',
    title: 'Dining Room',
    image: '/images/luxury-dining-room.png',
    detail: 'Elevate your dining experience with elegant dining room designs. From intimate family dinners to grand entertaining, create memorable spaces for every occasion.'
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    image: '/images/interior-view.png',
    detail: 'Transform your bathroom into a spa-like retreat. Luxurious fixtures, calming colors, and smart design for ultimate relaxation and functionality.'
  },
  {
    id: 'home-office',
    title: 'Home Office',
    image: '/images/hero-living-room.jpg',
    detail: 'Create productive, inspiring workspaces at home. Ergonomic design, natural lighting, and organizational solutions for the modern professional.'
  },
  {
    id: 'cafe',
    title: 'Cafe',
    image: '/images/luxury-living-room.png',
    detail: 'Design inviting cafe spaces that blend comfort with functionality. From cozy coffee corners to bustling cafes, create atmospheres that keep customers coming back.'
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    image: '/images/luxury-dining-room.png',
    detail: 'Create memorable dining experiences with restaurant interior design. From intimate bistros to grand dining halls, design spaces that enhance culinary journeys.'
  },
  {
    id: 'office-space',
    title: 'Office Space',
    image: '/images/interior-view.png',
    detail: 'Design productive and inspiring commercial office spaces. Modern layouts, collaborative areas, and professional aesthetics for business success.'
  }
];

const roomStyles = [
  {
    id: 'modern',
    title: 'Modern',
    image: '/images/luxury-living-room.png',
    detail: 'Clean lines, neutral colors, and sophisticated minimalism define modern room design.'
  },
  {
    id: 'traditional',
    title: 'Traditional',
    image: '/images/luxury-bedroom.png',
    detail: 'Classic elegance with rich textures, warm colors, and timeless design elements.'
  },
  {
    id: 'contemporary',
    title: 'Contemporary',
    image: '/images/luxury-kitchen.png',
    detail: 'Current trends blended with comfort for spaces that feel fresh and inviting.'
  },
  {
    id: 'transitional',
    title: 'Transitional',
    image: '/images/luxury-dining-room.png',
    detail: 'The perfect balance between traditional warmth and modern sophistication.'
  }
];

export default function RoomsPage() {
  const searchParams = useSearchParams();
  const [defaultTab, setDefaultTab] = useState('rooms');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'rooms' || tab === 'styles') {
      setDefaultTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16 text-center">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            Room Designs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            Explore stunning interior designs organized by room type. From living rooms to home offices, find inspiration for every space in your home.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="rooms" className="tab-button">By Room</TabsTrigger>
              <TabsTrigger value="styles" className="tab-button">By Style</TabsTrigger>
            </TabsList>

            <TabsContent value="rooms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roomDesigns.map((room) => (
                  <div
                    key={room.id}
                    className="group relative overflow-hidden rounded-xl bg-card shadow-sm border border-border/50 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-xl">{room.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">{room.detail}</p>
                      <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Explore {room.title}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="styles">
              <div className="card-stack" aria-label="Room styles">
                {roomStyles.map((style) => (
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
          </Tabs>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
