"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { api, HomePage } from "@/lib/api";

const word = "SAJAWAT";

const sideImages = [
  {
    src: "/images/hero-interior-left-1.png",
    alt: "Warm contemporary living room interior",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-interior-left-2.png",
    alt: "Custom interior staircase and living space",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-interior-right-1.png",
    alt: "Minimal dining room interior",
    position: "right",
    span: 1,
  },
  {
    src: "/images/hero-interior-right-2.png",
    alt: "Ambient bedroom interior lighting",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [homeData, setHomeData] = useState<HomePage | null>(null);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const data = await api.getHomePage();
        setHomeData(data);
      } catch (error) {
        console.error('Failed to fetch home data:', error);
        // Set fallback data if API fails
        setHomeData({
          hero_title: 'Sajawat Interior Design',
          hero_subtitle: 'Transform your spaces with our expert interior design services',
          hero_cta_text: 'Start your project',
          hero_cta_link: '/contact',
          statistics: {
            projects_completed: 500,
            expert_designers: 50,
            happy_clients: 1000,
            design_styles: 15,
          },
          hero_phrases: [],
          featured_section_title: 'A glimpse inside',
          featured_section_subtitle: 'Displays',
          featured_section_description: 'Spaces shaped by light, material, and the way you live.',
          technology_section_title: 'Technology',
          technology_section_description: '',
          collection_section_title: 'Collection',
          collection_section_description: '',
          design_styles_section_title: 'Design Styles',
          design_styles_section_description: 'Find the perfect aesthetic that matches your personality',
          main_cta_title: 'Ready to Transform Your Space?',
          main_cta_description: "Let's discuss your project and create something beautiful together.",
          main_cta_button_text: 'Start Your Project',
          main_cta_button_link: '/contact',
          meta_title: 'Sajawat Interiors | Pokhara',
          meta_description: 'Immersive interior design for homes, cafés, offices, and hospitality spaces in Pokhara, Nepal.'
        });
      }
    }
    fetchHomeData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations - More balanced distribution
  const centerWidth = 100 - (imageProgress * 80); // 100% to 20% (same as each side image)
  const centerHeight = 100; // Always 100% height
  const sideWidth = imageProgress * 40; // 0% to 40% (20% per image, 2 images = 40%)
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = 0; // No border radius
  const gap = imageProgress * 8; // 0px to 8px
  
  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  const heroData = homeData || {
    hero_title: 'Sajawat Interior Design',
    hero_subtitle: 'Transform your spaces with our expert interior design services',
    hero_cta_text: 'Start your project',
    hero_cta_link: '/contact',
  };

  return (
    <section id="hero" ref={sectionRef} className="relative bg-transparent">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-svh min-h-140">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    quality={75}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: 0,
              }}
            >
              <Image
                src="/images/hero-living-room.jpg"
                alt="Contemporary living room with sculptural seating, indoor trees, and built-in shelving"
                style={{ filter: "drop-shadow(0 24px 28px rgba(0,0,0,0.18))" }}
                fill
                quality={75}
                className="hero-image-reveal object-cover object-center opacity-100"
                priority
              />
              <div 
                className="hero-caption-reveal absolute inset-0 z-10 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none transition-opacity duration-300" 
                style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }} 
              />
              
            </div>

            {/* Right Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    quality={75}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA Button */}
        <div 
          className="hero-caption-reveal absolute left-0 right-0 z-30 flex justify-center pointer-events-none transition-opacity duration-300"
          style={{ 
            opacity: Math.max(0, 1 - scrollProgress * 3),
            bottom: "16%" // Keeping original positioning
          }}
        >
          <Link 
            href={heroData.hero_cta_link} 
            className="group flex items-center gap-2 bg-white/90 px-6 py-3 text-[10px] md:px-7 md:py-3.5 md:text-xs font-semibold uppercase tracking-[0.15em] text-black backdrop-blur-md transition-all hover:bg-white hover:scale-105 pointer-events-auto whitespace-nowrap"
          >
            {heroData.hero_cta_text}
          </Link>
        </div>
        
        {/* Traveling Text */}
        <div 
          className="hero-caption-reveal absolute left-0 right-0 z-20 flex justify-center pointer-events-none"
          style={{
            bottom: `calc(12% - ${scrollProgress * 12}% - ${scrollProgress * 68}px)`,
          }}
        >
          <p 
             className="text-sm tracking-[0.2em] transition-colors duration-500"
             style={{ 
               color: scrollProgress > 0.8 ? '#c0392b' : '#f0b38b',
               textShadow: scrollProgress < 0.5 ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
             }} 
             lang="ne"
          >
            मायाले सजिएको घर
          </p>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[150vh]" />
    </section>
  );
}
