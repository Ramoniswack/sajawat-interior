"use client";

import { useState } from 'react'
import Image from "next/image";

const designers = [
  {
    name: "Aarav Sharma",
    role: "Lead Interior Designer",
    description: "With over 10 years of experience, Aarav specializes in blending traditional Nepali aesthetics with modern minimalism.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Gurung",
    role: "Architectural Specialist",
    description: "Priya brings a wealth of knowledge in sustainable and biophilic design, ensuring every space feels natural and breathable.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Siddharth Thapa",
    role: "Modern Spaces Director",
    description: "An expert in contemporary fusion, Siddharth transforms ordinary rooms into luxurious, cutting-edge living environments.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Anita Rai",
    role: "Traditional Crafts Expert",
    description: "Anita specializes in incorporating traditional Nepali craftsmanship into modern interior spaces with authentic materials.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Rajan Shrestha",
    role: "Sustainable Design Lead",
    description: "Rajan focuses on eco-friendly design solutions that blend sustainability with luxurious comfort and style.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
];

export function DesignersSection() {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + designers.length) % designers.length)
  const next = () => setActive((current) => (current + 1) % designers.length)

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

        <div className="relative bg-[#fbfbfa] rounded-[4px] overflow-hidden py-12">
          <button aria-label="Previous designer" onClick={previous} className="nav-button left-4 sm:left-7">
            <span aria-hidden="true">‹</span>
          </button>
          <button aria-label="Next designer" onClick={next} className="nav-button right-4 sm:right-7">
            <span aria-hidden="true">›</span>
          </button>

          <div className="carousel-track" style={{ transform: `translateX(calc(50% - ${active * 351 + 175}px))` }}>
            {designers.map((designer, index) => {
              const isActive = index === active
              return (
                <article
                  key={designer.name}
                  className={`profile-card ${isActive ? 'is-active' : 'is-side'}`}
                  onClick={() => setActive(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="portrait-frame">
                    <img
                      src={designer.image}
                      alt={`${designer.name} portrait`}
                      style={{ objectPosition: 'center 28%' }}
                    />
                  </div>
                  <div className="profile-copy">
                    <h1>{designer.name}</h1>
                    <p>{designer.description}</p>
                    <div className="profile-footer">
                      <span>{designer.role}</span>
                      <button type="button" onClick={(e) => e.stopPropagation()}>View Profile</button>
                    </div>
                    <div className="social-icons">
                      <a href="#" className="social-icon" aria-label="Instagram" onClick={(e) => e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-icon" aria-label="Twitter" onClick={(e) => e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
