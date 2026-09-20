"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textCycles = [
  "Design & Feeling.",
  "Warm Light.",
  "Crafted Details.",
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 4; // Increased for 3 text cycles
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

  return (
    <section ref={sectionRef} id="technology" className="relative bg-foreground">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          
          <div className="relative flex h-full w-full items-stretch justify-center">
            
            {/* Main Center Image - Full Bleed always (Removed the copied bento-split animation) */}
            <div 
              className="relative overflow-hidden will-change-transform w-full h-full"
            >
              {/* Layered Images - Progressive Fade In */}
              {/* Image 1 */}
              <Image
                src="/images/luxury-living-room.png"
                alt="Luxury living room interior"
                fill
                className="object-cover"
                style={{ opacity: 1 }}
                priority
              />
              
              {/* Image 2 - Fades in during first text cycle */}
              <Image
                src="/images/luxury-dining-room.png"
                alt="Luxury dining room interior"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.2)),
                  transition: 'opacity 0.3s ease',
                }}
              />
              
              {/* Image 3 - Fades in during second text cycle */}
              <Image
                src="/images/luxury-bedroom.png"
                alt="Luxury bedroom interior"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2)),
                  transition: 'opacity 0.3s ease',
                }}
              />
              
              {/* Image 4 - Fades in during third text cycle */}
              <Image
                src="/images/luxury-kitchen.png"
                alt="Luxury kitchen interior"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.2)),
                  transition: 'opacity 0.3s ease',
                }}
              />
              
              <div className="absolute inset-0 bg-foreground/40" />
              
              {/* Title Text - Cycles through 3 texts exactly like original */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                {textCycles.map((text, cycleIndex) => {
                  const cycleStart = cycleIndex / textCycles.length;
                  const cycleEnd = (cycleIndex + 1) / textCycles.length;
                  const words = text.split(" ");
                  
                  return (
                    <h2 
                      key={cycleIndex}
                      className="absolute max-w-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-5xl"
                    >
                      {words.map((word, wordIndex) => {
                        let wordOpacity = 0;
                        
                        if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                          const localProgress = (scrollProgress - cycleStart) / (cycleEnd - cycleStart);
                          
                          if (localProgress < 0.5) {
                            const appearProgress = (localProgress / 0.5) * (words.length + 1);
                            const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - wordIndex));
                            wordOpacity = wordAppearProgress;
                          } else {
                            const disappearProgress = ((localProgress - 0.5) / 0.5) * (words.length + 1);
                            const wordDisappearProgress = Math.max(0, Math.min(1, disappearProgress - wordIndex));
                            wordOpacity = 1 - wordDisappearProgress;
                          }
                        }
                        
                        return (
                          <span
                            key={wordIndex}
                            className="inline-block"
                            style={{
                              opacity: wordOpacity,
                              transition: 'opacity 0.3s ease',
                              marginRight: '0.3em',
                            }}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </h2>
                  );
                })}
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-700 pointer-events-none"
              style={{ opacity: scrollProgress > 0.85 ? 0 : 1 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                Keep Scrolling
              </span>
              <div className="flex h-12 w-6 justify-center rounded-full border border-white/40 p-1">
                <div className="h-1.5 w-1.5 animate-[bounce_2s_infinite] rounded-full bg-white" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[400vh]" />
    </section>
  );
}
