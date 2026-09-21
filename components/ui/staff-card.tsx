"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ArrowUpRight, X, MapPin, Globe, CheckCircle2 } from "lucide-react";

export interface StaffMember {
  id: string;
  number: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  reviewCount: number;
  experience: string;
  projects: number;
  clients: number;
  bio: string;
  specializations: string[];
  availability: "available" | "busy" | "away";
  location?: string;
  languages?: string[];
}

interface StaffCardProps {
  staff: StaffMember;
  index: number;
}

function StarRating({ rating, animated = false }: { rating: number; animated?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          animate={animated ? { scale: [1, 1.2, 1] } : {}}
          transition={{ delay: star * 0.05, duration: 0.3 }}
        >
          <Star
            className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
          />
        </motion.div>
      ))}
    </div>
  );
}

const availabilityConfig = {
  available: { label: "Available", color: "bg-emerald-400" },
  busy: { label: "Busy", color: "bg-amber-400" },
  away: { label: "Away", color: "bg-gray-300" },
};

export function StaffCard({ staff, index }: StaffCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const avail = availabilityConfig[staff.availability];

  return (
    <>
      {/* Card */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
        tabIndex={0}
        role="button"
        aria-label={`View ${staff.name}'s full profile`}
        onKeyDown={(e) => e.key === "Enter" && setIsExpanded(true)}
        className="group relative bg-white border border-[#E8E8E8] rounded-none overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 select-none"
        style={{
          boxShadow: isHovered
            ? "0 16px 48px -8px rgba(0,0,0,0.10)"
            : "0 2px 12px -2px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Top section: portrait + info side by side */}
        <div className="flex flex-col">
          {/* Portrait Area */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
            {/* Background number */}
            <motion.span
              animate={isHovered && !shouldReduceMotion ? { x: 6, y: -6 } : { x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-4 right-5 text-[80px] font-black text-white/20 leading-none z-10 select-none pointer-events-none"
              aria-hidden="true"
            >
              {staff.number}
            </motion.span>

            {/* Availability dot */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[#E8E8E8]">
              <span className={`w-1.5 h-1.5 rounded-full ${avail.color}`} />
              <span className="text-[10px] font-semibold text-gray-600 tracking-wide">{avail.label}</span>
            </div>

            {/* Role badge */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm px-3 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">{staff.role}</span>
            </div>

            {/* Portrait */}
            <motion.div
              animate={isHovered && !shouldReduceMotion ? { scale: 1.04 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={staff.image}
                alt={`Portrait of ${staff.name}`}
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Info Area */}
          <div className="p-6">
            {/* Name + Arrow */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Interior Designer
                </p>
                <h3 className="text-xl font-bold text-black tracking-tight leading-tight">
                  {staff.name}
                </h3>
              </div>
              <motion.div
                animate={isHovered && !shouldReduceMotion ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 w-8 h-8 border border-[#E8E8E8] flex items-center justify-center flex-shrink-0"
              >
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </motion.div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={staff.rating} animated={isHovered} />
              <span className="text-sm font-bold text-black">{staff.rating}</span>
              <span className="text-xs text-gray-400">/ {staff.reviewCount} reviews</span>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
              {staff.bio}
            </p>

            {/* Specializations */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {staff.specializations.slice(0, 3).map((spec) => (
                <span
                  key={spec}
                  className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gray-600 border border-[#E8E8E8] bg-white"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 divide-x divide-[#E8E8E8] border-t border-[#E8E8E8] pt-5">
              {[
                { label: "Projects", value: `${staff.projects}+` },
                { label: "Clients", value: staff.clients },
                { label: "Experience", value: staff.experience },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center gap-0.5 px-2">
                  <motion.span
                    animate={isHovered && !shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 2, opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-black text-black tracking-tight"
                  >
                    {metric.value}
                  </motion.span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              aria-hidden="true"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={`${staff.name} full profile`}
              className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[700px] z-50 bg-white border border-[#E8E8E8] overflow-y-auto shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-5 right-5 z-10 w-9 h-9 border border-[#E8E8E8] flex items-center justify-center hover:bg-gray-50 transition-colors focus-visible:ring-2 focus-visible:ring-black outline-none"
                aria-label="Close profile"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Portrait */}
              <div className="relative w-full h-72 md:h-96 bg-gray-100">
                <Image src={staff.image} alt={`Portrait of ${staff.name}`} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">{staff.number}</p>
                  <h2 className="text-3xl font-black tracking-tight">{staff.name}</h2>
                  <p className="text-sm text-white/80 font-medium mt-1">{staff.role}</p>
                </div>
                <div className="absolute bottom-6 right-8 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                  <span className={`w-2 h-2 rounded-full ${avail.color}`} />
                  <span className="text-xs font-semibold text-white">{avail.label}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Rating */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E8E8]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <StarRating rating={staff.rating} />
                      <span className="text-2xl font-black text-black">{staff.rating}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Based on {staff.reviewCount} client reviews</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-2 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold">Verified Expert</span>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">About</p>
                  <p className="text-gray-600 leading-relaxed">{staff.bio}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-0 border border-[#E8E8E8] divide-x divide-[#E8E8E8]">
                  {[
                    { label: "Projects", value: `${staff.projects}+` },
                    { label: "Clients", value: staff.clients },
                    { label: "Experience", value: staff.experience },
                    { label: "Rating", value: staff.rating },
                  ].map((m) => (
                    <div key={m.label} className="p-4 flex flex-col items-center gap-1">
                      <span className="text-2xl font-black text-black">{m.value}</span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Specializations */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {staff.specializations.map((spec) => (
                      <span key={spec} className="px-3 py-1.5 text-xs font-semibold text-gray-700 border border-[#E8E8E8] bg-white">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {staff.location && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</p>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {staff.location}
                      </div>
                    </div>
                  )}
                  {staff.languages && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Languages</p>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Globe className="w-3.5 h-3.5 text-gray-400" />
                        {staff.languages.join(", ")}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-black text-white py-3.5 text-sm font-bold tracking-wide hover:bg-black/80 transition-colors focus-visible:ring-2 focus-visible:ring-black outline-none">
                    Contact Designer →
                  </button>
                  <button className="flex-1 border border-[#E8E8E8] text-black py-3.5 text-sm font-bold tracking-wide hover:bg-gray-50 transition-colors focus-visible:ring-2 focus-visible:ring-black outline-none">
                    View Full Profile ↗
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
