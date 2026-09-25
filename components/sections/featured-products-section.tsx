"use client";

import { FadeImage } from "@/components/fade-image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api, Room } from "@/lib/api";

export function FeaturedProductsSection() {
  const [featuredRooms, setFeaturedRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  // Ensure featuredRooms is always an array
  const safeFeaturedRooms = Array.isArray(featuredRooms) ? featuredRooms : [];

  useEffect(() => {
    async function fetchFeaturedRooms() {
      try {
        const data = await api.getFeaturedRooms();
        setFeaturedRooms(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch featured rooms:', error);
        // If API fails, we'll use the fallback static data
        setFeaturedRooms([]);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedRooms();
  }, []);

  // Fallback to static data if API fails or no rooms
  const features = safeFeaturedRooms.length > 0 && safeFeaturedRooms[0]?.title
    ? safeFeaturedRooms.map(room => ({
        image: room.image || "/images/placeholder-room.jpg",
        span: room.span === 'large' ? "col-span-2 row-span-2" : 
              room.span === 'tall' ? "col-span-1 row-span-2" :
              room.span === 'wide' ? "col-span-2 row-span-1" :
              "col-span-1 row-span-1",
        title: room.title,
        description: room.description,
      }))
    : [
        {
          image: "/images/luxury-living-room-white-wall.png",
          span: "col-span-2 row-span-2", // Large
        },
        {
          image: "/images/luxury-dining-room.png",
          span: "col-span-1 row-span-1", // Small
        },
        {
          image: "/images/luxury-bedroom.png",
          span: "col-span-1 row-span-1", // Small
        },
        {
          image: "/images/luxury-kitchen.png",
          span: "col-span-1 row-span-2", // Tall
        },
        {
          image: "/images/luxury-living-room.png",
          span: "col-span-1 row-span-1", // Small
        },
        {
          image: "/images/luxury-dining-room.png",
          span: "col-span-2 row-span-1", // Wide
        },
        {
          image: "/images/luxury-bedroom.png",
          span: "col-span-1 row-span-1", // Small
        },
        {
          image: "/images/luxury-kitchen.png",
          span: "col-span-1 row-span-2", // Tall
        },
        {
          image: "/images/luxury-living-room.png",
          span: "col-span-2 row-span-1", // Wide
        },
        {
          image: "/images/luxury-dining-room.png",
          span: "col-span-1 row-span-1", // Small
        },
      ];

  return (
    <section id="services" className="relative bg-background pb-20 pt-10 md:pb-32 md:pt-16 overflow-hidden">
      <div className="px-4 md:px-12 lg:px-20">
        <motion.div 
          className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6 md:mb-14"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">A glimpse inside</p>
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-5xl">Displays</h2>
          </div>
          <p className="hidden text-right text-sm leading-relaxed text-muted-foreground sm:block">
            Spaces shaped by light, material, and the way you live.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="mx-auto max-w-7xl flex justify-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Bento Grid */}
        {!loading && (
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 auto-rows-45 md:grid-cols-4 md:gap-4 md:auto-rows-55">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: (index % 4) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden border border-gray-200 ${feature.span}`}
              >
                <FadeImage
                  src={feature.image || "/placeholder.svg"}
                  alt={`Sajawat Interior project detail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-black/70 to-transparent px-5 pb-5 pt-12 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">Sajawat Interior</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {feature.title || `Project detail ${String(index + 1).padStart(2, "0")}`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
