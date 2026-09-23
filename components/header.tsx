"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut } from "lucide-react";

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 bg-white`}
      style={{
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 transition-all duration-300 md:px-10">
        {/* Logo */}
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-black" aria-label="Sajawat Interior home">
          <img src={logoUrl} alt="Sajawat Interior logo" className="h-9 w-9 object-cover" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">Sajawat</span>
          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-[#c0392b] lg:inline">Interiors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-10 md:flex">
          <div className="group flex h-full items-center">
            <Link
              href="/design-ideas"
              className="py-6 text-sm text-black/80 transition-colors hover:text-black group-hover:text-black group-hover:border-b-2 group-hover:border-[#38bdf8]"
            >
              Design Idea
            </Link>
            
            {/* Mega Menu Container */}
            <div className="absolute left-0 top-[76px] w-full bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl border-t border-gray-100 pb-10 pt-8 z-50">
              <div className="mx-auto flex max-w-7xl justify-between px-6 md:px-10">
                {/* Links Section */}
                <div className="flex gap-16">
                  {/* Column 1 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Work with a Designer</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/design-ideas#process" className="text-sm text-gray-700 hover:text-black">How it works</Link></li>
                      <li><Link href="/design-ideas#designers" className="text-sm text-gray-700 hover:text-black">Interior Designers</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Find your Designer</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/design-ideas?tab=style" className="text-sm text-gray-700 hover:text-black">Design by Style</Link></li>
                      <li><Link href="/design-ideas?tab=location" className="text-sm text-gray-700 hover:text-black">Designers by City</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Plan your Project</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="#" className="text-sm text-gray-700 hover:text-black">Pricing & Packages</Link></li>
                      <li><Link href="#" className="text-sm text-gray-700 hover:text-black">Interior Design Cost Guide</Link></li>
                      <li><Link href="#" className="text-sm text-gray-700 hover:text-black">Interior Design Style Quiz</Link></li>
                      <li><Link href="#" className="text-sm text-gray-700 hover:text-black">Gift Cards</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Right Image/CTA Section */}
                <div className="relative h-64 w-96 overflow-hidden rounded-xl bg-gray-100 group/card cursor-pointer">
                  <img 
                    src="/design-ideas/nepali-minimalist.jpg" 
                    alt="Start your project" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider">Designer Service</p>
                    <p className="mb-2 text-xl font-bold">Start your project</p>
                    <p className="text-sm text-gray-200">Work 1:1 with a designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group flex h-full items-center">
            <Link
              href="/services"
              className="py-6 text-sm text-black/80 transition-colors hover:text-black group-hover:text-black group-hover:border-b-2 group-hover:border-[#e99816]"
            >
              Services
            </Link>

            {/* Mega Menu Container */}
            <div className="absolute left-0 top-[76px] w-full bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl border-t border-gray-100 pb-10 pt-8 z-50">
              <div className="mx-auto flex max-w-7xl justify-between px-6 md:px-10">
                {/* Links Section */}
                <div className="flex gap-16">
                  {/* Column 1 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Residential</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Residential Interior</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Custom Design</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Space Planning</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Commercial</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Office or Workspace</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Hospitality or Café</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Retail Design</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Styling</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Furniture and Styling</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Art Selection</Link></li>
                      <li><Link href="/services" className="text-sm text-gray-700 hover:text-black">Accessory Styling</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Right Image/CTA Section */}
                <div className="relative h-64 w-96 overflow-hidden rounded-xl bg-gray-100 group/card cursor-pointer">
                  <img
                    src="/images/luxury-living-room.png"
                    alt="Professional Design Services"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider">Design Services</p>
                    <p className="mb-2 text-xl font-bold">Transform Your Space</p>
                    <p className="text-sm text-gray-200">Expert interior design solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex h-full items-center">
            <Link
              href="/rooms"
              className="py-6 text-sm text-black/80 transition-colors hover:text-black group-hover:text-black group-hover:border-b-2 group-hover:border-[#e99816]"
            >
              Rooms
            </Link>

            {/* Mega Menu Container */}
            <div className="absolute left-0 top-[76px] w-full bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl border-t border-gray-100 pb-10 pt-8 z-50">
              <div className="mx-auto flex max-w-7xl justify-between px-6 md:px-10">
                {/* Links Section */}
                <div className="flex gap-16">
                  {/* Column 1 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Living Spaces</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Living Room</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Dining Room</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Family Room</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Private Spaces</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Bedroom</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Master Suite</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Home Office</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Functional Spaces</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Kitchen</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Bathroom</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Laundry Room</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">Commercial Spaces</h3>
                    <ul className="flex flex-col gap-3">
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Cafe</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Restaurant</Link></li>
                      <li><Link href="/rooms?tab=rooms" className="text-sm text-gray-700 hover:text-black">Office Space</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Right Image/CTA Section */}
                <div className="relative h-64 w-96 overflow-hidden rounded-xl bg-gray-100 group/card cursor-pointer">
                  <img
                    src="/images/luxury-living-room.png"
                    alt="Room Design"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider">Room Design</p>
                    <p className="mb-2 text-xl font-bold">Transform Your Space</p>
                    <p className="text-sm text-gray-200">Expert room design services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/#about"
            className="text-sm text-black/80 transition-colors hover:text-black"
          >
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="bg-[#e99816] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#c9790b]"
          >
            Contact
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProfileOpen((open) => !open)}
              className="flex items-center gap-2 border border-black/15 bg-white/70 px-3 py-2 text-sm text-black backdrop-blur-sm"
              aria-expanded={isProfileOpen}
              aria-label="Open profile menu"
            >
              <User size={16} />
              <span>{isSignedIn ? "Demo User" : "Profile"}</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-52 border border-black/10 bg-white p-3 text-black shadow-xl">
                {isSignedIn ? (
                  <>
                    <p className="px-3 py-2 text-xs uppercase tracking-[0.18em] text-black/45">Demo User</p>
                    <button
                      type="button"
                      onClick={() => { setIsSignedIn(false); setIsProfileOpen(false); }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-black/5"
                    >
                      <LogOut size={15} /> Log out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setIsSignedIn(true); setIsProfileOpen(false); }}
                    className="w-full bg-black px-3 py-2 text-sm text-white hover:bg-black/80"
                  >
                    Sign in as demo user
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              href="/design-ideas"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Design Idea
            </Link>
            <Link
              href="/services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/rooms"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/#about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
