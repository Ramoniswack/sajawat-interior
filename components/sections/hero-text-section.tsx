"use client";

import { useEffect, useState } from "react";
import { api, HomePage } from "@/lib/api";

const phrases = [
  "Spaces with soul",
  "Crafted for living",
  "Interiors with feeling",
  "Your story, beautifully framed",
];

export function HeroTextSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [homeData, setHomeData] = useState<HomePage | null>(null);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const data = await api.getHomePage();
        setHomeData(data);
      } catch (error) {
        console.error('Failed to fetch home data:', error);
      }
    }
    fetchHomeData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-center overflow-hidden bg-background px-6 pt-20 pb-12 text-center text-foreground">
      <div className="max-w-4xl">
        <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
          Sajawat Interior · Pokhara
        </p>
        <p
          key={phraseIndex}
          className="text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
        >
          {homeData 
            ? `${homeData.hero_subtitle}`.split("").map((char, index) => (
                <span
                  key={index}
                  className="animate-typewriter"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  {char}
                </span>
              ))
            : `${phrases[phraseIndex]}, made for living.`.split("").map((char, index) => (
                <span
                  key={index}
                  className="animate-typewriter"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  {char}
                </span>
              ))
          }
        </p>
      </div>
    </section>
  );
}

export default HeroTextSection;
