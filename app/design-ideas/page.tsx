"use client"

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { DesignersSection } from "@/components/sections/designers-section";
import { Gallery } from "@/components/gallery/gallery";
import { api, DesignIdeaPage, DesignIdea, DesignIdeaCategory } from "@/lib/api";
import { useEffect, useState } from "react";

export default function DesignIdeaPage() {
  const [designIdeaData, setDesignIdeaData] = useState<DesignIdeaPage | null>(null)
  const [designIdeas, setDesignIdeas] = useState<DesignIdea[]>([])
  const [categories, setCategories] = useState<DesignIdeaCategory[]>([])

  useEffect(() => {
    async function fetchDesignIdeaData() {
      try {
        const [pageData, ideasData, categoriesData] = await Promise.all([
          api.getDesignIdeaPage(),
          api.getDesignIdeas(),
          api.getDesignIdeaCategories()
        ])
        setDesignIdeaData(pageData)
        setDesignIdeas(ideasData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Failed to fetch design idea data:', error)
      }
    }
    fetchDesignIdeaData()
  }, [])

  const data = designIdeaData || {
    hero_title: 'Design Ideas',
    hero_description: 'Explore our curated collection of interior design styles, blending rich Nepali heritage with modern aesthetics to inspire your next project.',
    stats_projects_completed: 500,
    stats_expert_designers: 50,
    stats_happy_clients: 1000,
    stats_design_styles: 15,
    how_it_works_title: 'How It Works',
    how_it_works_description: '',
    designers_title: 'Meet Our Designers',
    designers_description: '',
    gallery_title: 'Design Inspiration Gallery',
    gallery_subtitle: 'Browse through our collection of design ideas organized by style, location, and featured projects.'
  }

  // Convert backend data to gallery format
  const galleryItems = (designIdeas || []).map(idea => ({
    id: idea.id,
    title: idea.title,
    category: idea.style,
    image: idea.image || '/images/placeholder-room.jpg',
    description: idea.description
  }))

  const galleryCategories = (categories || []).map(cat => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug
  }))
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 text-center">
          <h1
            className="mb-4 text-4xl font-light tracking-tight sm:text-5xl text-foreground"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              letterSpacing: '0.02em',
            }}
          >
            {data.hero_title}
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
            {data.hero_description}
          </p>
        </div>

        <HowItWorksSection
          title={data.how_it_works_title}
          description={data.how_it_works_description}
        />

        {/* Statistics Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {data.stats_projects_completed}+
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
                Projects Completed
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {data.stats_expert_designers}+
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
                Expert Designers
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {data.stats_happy_clients}+
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
                Happy Clients
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {data.stats_design_styles}+
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
                Design Styles
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <Gallery
            title={data.gallery_title}
            subtitle={data.gallery_subtitle}
            items={galleryItems}
            categories={galleryCategories}
          />
        </div>

        <DesignersSection
          title={data.designers_title}
          description={data.designers_description}
        />
      </main>

      <FooterSection />
    </div>
  );
}
