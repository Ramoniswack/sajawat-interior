"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Star } from "lucide-react";

const designers = [
  {
    name: "Aarav Sharma",
    role: "Lead Interior Designer",
    bio: "With over 10 years of experience, Aarav specializes in blending traditional Nepali aesthetics with modern minimalism.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 142,
  },
  {
    name: "Priya Gurung",
    role: "Architectural Specialist",
    bio: "Priya brings a wealth of knowledge in sustainable and biophilic design, ensuring every space feels natural and breathable.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 98,
  },
  {
    name: "Siddharth Thapa",
    role: "Modern Spaces Director",
    bio: "An expert in contemporary fusion, Siddharth transforms ordinary rooms into luxurious, cutting-edge living environments.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 213,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function DesignersSection() {
  return (
    <section className="py-24 bg-gray-50/50" id="designers">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-black"
          >
            Meet Our Designers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our in-person interior design service connects you with award-winning experts who will collaborate closely to bring your unique vision to life.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {designers.map((designer, index) => (
            <motion.div key={index} variants={cardVariants} className="group flex flex-col">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-gray-200 shadow-sm border border-border/50">
                <Image 
                  src={designer.image} 
                  alt={designer.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">{designer.name}</h3>
                <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">{designer.role}</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${star <= Math.round(designer.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-black">{designer.rating}</span>
                  <span className="text-xs text-muted-foreground">({designer.reviewCount} reviews)</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  {designer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
