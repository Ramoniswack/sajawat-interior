"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  return (
    <section id="hero" ref={sectionRef} className="relative bg-transparent">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-svh min-h-140 overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center">
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
              <div className="hero-caption-reveal absolute inset-0 z-10 flex items-end justify-center bg-linear-to-t from-black/35 via-transparent to-transparent px-6 pb-[12%] text-center text-white drop-shadow-lg">
                <div>
                  <p className="text-sm tracking-[0.2em] text-[#f0b38b]" lang="ne">
                    तपाईंका लागि, तपाईंको शैलीमा।
                  </p>
                </div>
              </div>

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
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
