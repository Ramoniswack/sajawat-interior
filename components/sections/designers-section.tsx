"use client";

import { useState, useEffect } from 'react'
import TeamMemberCard from "@/components/ui/team-member-card"
import { api, Designer } from "@/lib/api"

interface DesignersSectionProps {
  title?: string;
  description?: string;
}

export function DesignersSection({ title = "Meet Our Designers", description = "Our in-person interior design service connects you with award-winning experts who will collaborate closely to bring your unique vision to life." }: DesignersSectionProps) {
  const [designers, setDesigners] = useState<Designer[]>([])

  useEffect(() => {
    async function fetchDesigners() {
      try {
        const data = await api.getDesigners()
        setDesigners(data)
      } catch (error) {
        console.error('Failed to fetch designers:', error)
      }
    }
    fetchDesigners()
  }, [])

  return (
    <section className="py-24 bg-gray-50/50" id="designers">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl mb-4 text-black" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontWeight: 300 }}>
            {description}
          </p>
        </div>

        {designers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No designers found. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {designers.map((designer, index) => {
              const [firstName, lastName] = designer.name.split(' ');
              return (
                <TeamMemberCard
                  key={designer.id}
                  position={index % 2 === 0 ? 'left' : 'right'}
                  jobPosition={designer.role}
                  firstName={firstName}
                  lastName={lastName}
                  imageUrl={designer.image_url || designer.image}
                  description={designer.description}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
