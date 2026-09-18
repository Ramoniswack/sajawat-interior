"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "Spaces with soul",
  "Crafted for living",
  "Interiors with feeling",
  "Your story, beautifully framed",
];

export function HeroTextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updatePhrase = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(
        Math.max((window.scrollY - sectionTop) / sectionHeight, 0),
        1,
      );
      const nextIndex = Math.min(
        Math.floor(progress * phrases.length),
        phrases.length - 1,
      );

      setPhraseIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePhrase);
    };

    updatePhrase();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex min-h-[120vh] items-start justify-center overflow-hidden bg-background px-6 py-8 text-center text-foreground md:min-h-[150vh] md:py-12">
      <div className="sticky top-[30vh] max-w-4xl">
        <p className="mb-3 text-sm tracking-[0.2em] text-[#c0392b]" lang="ne">
          मायाले सजिएको घर
        </p>
        <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
          Sajawat Interior · Pokhara
        </p>
        <p
          key={phraseIndex}
          className="text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
        >
          {`${phrases[phraseIndex]}, made for living.`.split("").map((char, index) => (
            <span
              key={index}
              className="animate-typewriter"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default HeroTextSection;
