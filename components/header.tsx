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
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/#design-idea"
            className="text-sm text-black/80 transition-colors hover:text-black"
          >
            Design Idea
          </Link>
          <Link
            href="/#services"
            className="text-sm text-black/80 transition-colors hover:text-black"
          >
            Services
          </Link>
          <Link
            href="/#rooms"
            className="text-sm text-black/80 transition-colors hover:text-black"
          >
            Rooms
          </Link>
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
              href="/#design-idea"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Design Idea
            </Link>
            <Link
              href="/#services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#rooms"
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
