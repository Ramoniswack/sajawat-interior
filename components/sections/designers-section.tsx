"use client";

import { useState } from 'react'
import TeamMemberCard from "@/components/ui/team-member-card"

const designers = [
  {
    name: "Aarav Sharma",
    role: "Lead Designer",
    description: "Aarav is a visionary designer with over 10 years of experience in creating stunning residential and commercial spaces. His innovative approach blends modern aesthetics with functional design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Gurung",
    role: "Architectural Specialist",
    description: "Priya brings a wealth of knowledge in sustainable and biophilic design, ensuring every space feels natural and breathable. Her designs seamlessly integrate nature with modern living.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Siddharth Thapa",
    role: "Design Director",
    description: "An expert in contemporary fusion, Siddharth transforms ordinary rooms into luxurious, cutting-edge living environments. His work has been featured in leading design publications.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Anita Rai",
    role: "Interior Consultant",
    description: "Anita specializes in creating warm, inviting spaces that reflect her clients' personalities. Her attention to detail and personalized approach ensures every project tells a unique story.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

export function DesignersSection() {
  return (
    <section className="py-24 bg-gray-50/50" id="designers">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl mb-4 text-black" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            Meet Our Designers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            Our in-person interior design service connects you with award-winning experts who will collaborate closely to bring your unique vision to life.
          </p>
        </div>

        <div className="space-y-8">
          {designers.map((designer, index) => {
            const [firstName, lastName] = designer.name.split(' ');
            return (
              <TeamMemberCard
                key={designer.name}
                position={index % 2 === 0 ? 'left' : 'right'}
                jobPosition={designer.role}
                firstName={firstName}
                lastName={lastName}
                imageUrl={designer.image}
                description={designer.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
