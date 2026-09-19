"use client";

import { FadeImage } from "@/components/fade-image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_ACCESSORY_ID = 1;

const accessories = [
  {
    id: 1,
    name: "Compact Model",
    description: "120m² living space with optimal energy efficiency",
    price: "NRs 285,000",
    image: "/images/luxury-living-room.png",
  },
  {
    id: 2,
    name: "Standard Model",
    description: "180m² perfect balance of space and sustainability",
    price: "NRs 395,000",
    image: "/images/luxury-dining-room.png",
  },
  {
    id: 3,
    name: "Premium Model",
    description: "250m² expansive design with maximum comfort",
    price: "NRs 525,000",
    image: "/images/luxury-bedroom.png",
  },
  {
    id: 4,
    name: "Warm Minimal",
    description: "Natural textures and soft light for quiet interiors",
    price: "NRs 460,000",
    image: "/images/luxury-kitchen.png",
  },
  {
    id: 5,
    name: "Earth & Stone",
    description: "Grounded materials with a calm, tactile character",
    price: "NRs 485,000",
    image: "/images/rusted-metal.png",
  },
  {
    id: 6,
    name: "Light & Line",
    description: "Clean forms and open views for modern living",
    price: "NRs 560,000",
    image: "/images/luxury-living-room-white-wall.png",
  },
  {
    id: 7,
    name: "Signature Model",
    description: "Thoughtful details and layered finishes made for you",
    price: "NRs 650,000",
    image: "/images/interior-view.png",
  },
];

export function CollectionSection() {
  const [activeId, setActiveId] = useState(DEFAULT_ACCESSORY_ID);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const activeAccessory = accessories.find((item) => item.id === activeId) ?? accessories[0];
  const activeIndex = accessories.findIndex((item) => item.id === activeId);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    
    const container = sliderRef.current;
    const card = cardRefs.current[activeId];
    
    if (container && card) {
      // Calculate position to center the card horizontally
      const scrollLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeId]);


  const moveSelection = (direction: "next" | "previous") => {
    const nextIndex = direction === "next"
      ? (activeIndex + 1) % accessories.length
      : (activeIndex - 1 + accessories.length) % accessories.length;

    setActiveId(accessories[nextIndex].id);
  };

  return (
    <section id="accessories" className="bg-background overflow-hidden">
      <div className="px-6 py-20 md:px-12 md:py-10 lg:px-20">
        <motion.div 
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">Explore the collection</p>
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Surface Options</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Shape your interior around a palette, material, and mood that feels like home.
            </p>
          </div>
          <div className="flex shrink-0 gap-2 mt-4 md:mt-0">
            <button
              type="button"
              onClick={() => moveSelection("previous")}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="Previous surface option"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => moveSelection("next")}
              className="flex h-10 w-10 items-center justify-center bg-foreground text-background transition-colors hover:bg-[#e99816]"
              aria-label="Next surface option"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="overflow-hidden pb-24"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          ref={sliderRef}
          className="surface-carousel-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 md:px-12 lg:px-20"
          aria-label="Surface options carousel"
        >
          {accessories.map((accessory) => (
            <button
              key={accessory.id}
              ref={(element) => { cardRefs.current[accessory.id] = element; }}
              type="button"
              onClick={() => setActiveId(accessory.id)}
              aria-pressed={activeId === accessory.id}
              className={`group w-[68vw] max-w-[280px] shrink-0 snap-center text-left transition-all duration-500 md:w-[30vw] md:max-w-[340px] lg:w-[28vw] lg:max-w-[360px] ${activeId === accessory.id ? "-translate-y-2" : "opacity-70 hover:-translate-y-1 hover:opacity-100"}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <FadeImage
                  src={accessory.image}
                  alt={accessory.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">{accessory.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{accessory.description}</p>
                  </div>
                  <span className="text-lg font-medium text-foreground md:text-2xl">{accessory.price}</span>
                </div>
              </div>
              <span className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-[#e99816]">
                View palette <ArrowUpRight className="h-3 w-3" />
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
