import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Facebook } from "lucide-react";

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png";

export function FooterSection() {
  return (
    <footer className="bg-background text-foreground pt-24 overflow-hidden relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:gap-12 lg:gap-20 mb-24">
          
          {/* Left Column - CTA */}
          <div className="flex flex-col justify-between max-w-md">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#e99816]">Start a conversation</p>
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl mb-10 text-foreground">
                Let's make space for what matters.
              </h2>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border-b border-foreground/30 pb-3 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:border-foreground"
              >
                Plan your space
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Explore</h3>
              <ul className="space-y-5">
                <li><Link href="/#technology" className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">Services</Link></li>
                <li><Link href="/#gallery" className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">Portfolio</Link></li>
                <li><Link href="/#accessories" className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">Approach</Link></li>
                <li><Link href="/#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">About Us</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-2">
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect</h3>
              <ul className="space-y-5">
                <li>
                  <a href="mailto:hello@sajawatinterior.com" className="group flex w-fit items-center gap-4 text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">
                    <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#e99816]" />
                    hello@sajawatinterior.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9779800000000" className="group flex w-fit items-center gap-4 text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">
                    <Phone className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#e99816]" />
                    +977 980 000 0000
                  </a>
                </li>
                <li>
                  <p className="flex items-center gap-4 text-sm font-medium text-foreground/80">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    Damauli, Tanahu, Nepal
                  </p>
                </li>
                <li className="pt-4 flex flex-col gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">
                    <Instagram className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#e99816]" /> 
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/80 transition-colors hover:text-[#e99816]">
                    <Facebook className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#e99816]" /> 
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Brand Name */}
      <div className="w-full border-t border-border pt-12 pb-8 flex flex-col items-center">
        <h1 className="text-[15vw] font-display font-medium uppercase tracking-tight leading-none text-foreground/[0.03] select-none w-full text-center px-4 overflow-hidden whitespace-nowrap">
          SAJAWAT
        </h1>
        
        {/* Bottom Bar */}
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 mt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground gap-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" className="h-5 w-5 opacity-40 grayscale" />
            <span>© 2026 Sajawat Interior</span>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
