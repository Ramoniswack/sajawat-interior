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
    <footer className="bg-foreground text-background">
      {/* Contact CTA */}
      <div className="border-b border-background/15 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-background/55">Start a conversation</p>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Let&apos;s make space for what matters.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 bg-[#e99816] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
          >
            Plan your space
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-6 py-14 md:px-12 md:py-16 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="#hero" className="flex w-fit items-center gap-3" aria-label="Sajawat Interior home">
              <img src={logoUrl} alt="Sajawat Interior logo" className="h-10 w-10 object-cover" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Sajawat Interior</span>
            </Link>
            <div className="mt-7 space-y-3 text-sm text-background/65">
              <a className="flex w-fit items-center gap-3 transition-colors hover:text-background" href="mailto:hello@sajawatinterior.com">
                <Mail className="h-4 w-4 text-[#e99816]" />
                hello@sajawatinterior.com
              </a>
              <a className="flex w-fit items-center gap-3 transition-colors hover:text-background" href="tel:+9779800000000">
                <Phone className="h-4 w-4 text-[#e99816]" />
                +977 980 000 0000
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#e99816]" />
                Damauli, Tanahu, Nepal
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 md:col-span-7 lg:col-span-6">
            <div>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-background/45">Explore</h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-background/45">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                aria-label="Sajawat Interior on Instagram"
              >
                <Instagram className="h-4 w-4" />
                Instagram
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/15 px-6 py-5 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-xs text-background/45 sm:flex-row sm:items-center">
          <p>© 2026 Sajawat Interior. All rights reserved.</p>
          <Link href="#hero" className="group inline-flex items-center gap-2 transition-colors hover:text-background">
            Back to top
            <MoveUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
