import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, MoveUpRight, Phone } from "lucide-react";

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png";

const footerLinks = {
  explore: [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Accessories", href: "#accessories" },
  ],
  company: [
    { label: "Our Story", href: "#about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:gap-12 lg:gap-20 mb-24">
          
          {/* Left Column - CTA */}
          <div className="flex flex-col justify-between max-w-md">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#e99816]">Start a conversation</p>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl mb-10">
                Let's make space for what matters.
              </h2>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border-b border-white/30 pb-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:border-white"
              >
                Plan your space
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Explore</h3>
              <ul className="space-y-5">
                <li><Link href="/#technology" className="text-sm text-white/90 transition-colors hover:text-white">Services</Link></li>
                <li><Link href="/#gallery" className="text-sm text-white/90 transition-colors hover:text-white">Portfolio</Link></li>
                <li><Link href="/#accessories" className="text-sm text-white/90 transition-colors hover:text-white">Approach</Link></li>
                <li><Link href="/#about" className="text-sm text-white/90 transition-colors hover:text-white">About Us</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-2">
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Connect</h3>
              <ul className="space-y-5">
                <li>
                  <a href="mailto:hello@sajawatinterior.com" className="group flex w-fit items-center gap-4 text-sm text-white/90 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 text-white/50 transition-colors group-hover:text-[#e99816]" />
                    hello@sajawatinterior.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9779800000000" className="group flex w-fit items-center gap-4 text-sm text-white/90 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 text-white/50 transition-colors group-hover:text-[#e99816]" />
                    +977 980 000 0000
                  </a>
                </li>
                <li>
                  <p className="flex items-center gap-4 text-sm text-white/90">
                    <MapPin className="h-4 w-4 text-white/50" />
                    Damauli, Tanahu, Nepal
                  </p>
                </li>
                <li className="pt-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white">
                    <Instagram className="h-4 w-4 text-white/50 transition-colors group-hover:text-[#e99816]" /> 
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Brand Name */}
      <div className="w-full border-t border-white/10 pt-12 pb-8 flex flex-col items-center">
        <h1 className="text-[14vw] font-black uppercase tracking-tighter leading-none text-white/[0.05] select-none w-full text-center px-4 overflow-hidden whitespace-nowrap">
          SAJAWAT
        </h1>
        
        {/* Bottom Bar */}
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 mt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 gap-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" className="h-5 w-5 opacity-40 grayscale" />
            <span>© 2026 Sajawat Interior</span>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
