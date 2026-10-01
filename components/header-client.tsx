"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut, ChevronDown, ChevronRight } from "lucide-react";
// Re-export all nav types from the shared types file (no "use client" boundary issue)
export type { NavItem, MegaMenuLink, MegaMenuColumn, MegaMenuPanel } from "./nav-types";
import type { NavItem, MegaMenuPanel as MegaMenuPanelData } from "./nav-types";

const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png";

// ── Fallback nav (shown only when API is completely unreachable) ───────────────
const FALLBACK_NAV: NavItem[] = [
  { id: 1, label: "Rooms", href: "/rooms", order: 1, columns: [], panel: null },
  { id: 2, label: "Services", href: "/services", order: 2, columns: [], panel: null },
  { id: 3, label: "Design Ideas", href: "/design-ideas", order: 3, columns: [], panel: null },
  { id: 4, label: "About", href: "/about", order: 4, columns: [], panel: null },
];

// ── Full-width Mega Menu Panel ─────────────────────────────────────────────────
// Rendered once, outside the nav flow, anchored to the header bottom edge.
function MegaMenuPanel({
  navItem,
  pathname,
  onLinkClick,
}: {
  navItem: NavItem;
  pathname: string;
  onLinkClick: () => void;
}) {
  return (
    /* Full-viewport-width strip sitting below the header bar */
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl">
      <div className="mx-auto max-w-7xl px-10 py-10 flex gap-0">

        {/* Left: description panel */}
        {navItem.panel &&
          (navItem.panel.description_heading || navItem.panel.description_text) && (
            <div className="w-56 flex-shrink-0 flex flex-col pr-10 border-r border-gray-100 mr-10">
              {navItem.panel.description_heading && (
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {navItem.panel.description_heading}
                </p>
              )}
              {navItem.panel.description_text && (
                <p className="text-sm leading-relaxed text-gray-500">
                  {navItem.panel.description_text}
                </p>
              )}
              {navItem.panel.card_href && (
                <Link
                  href={navItem.panel.card_href}
                  onClick={onLinkClick}
                  className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#e99816] hover:text-[#c9790b] transition-colors"
                >
                  Explore all <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          )}

        {/* Middle: columns */}
        {navItem.columns.length > 0 && (
          <div className="flex gap-12 flex-1 flex-wrap">
            {navItem.columns.map((col) => (
              <div key={col.id} className="flex flex-col min-w-[140px]">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border-b border-gray-100 pb-2">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => {
                    const active = pathname === link.href || pathname?.startsWith(link.href + "/");
                    return (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          onClick={onLinkClick}
                          className={`
                            group/link text-sm transition-colors duration-150
                            flex items-center gap-2
                            ${active
                              ? "text-black font-semibold"
                              : "text-gray-600 hover:text-black"
                            }
                          `}
                        >
                          <span
                            className={`
                              inline-block w-1 h-1 rounded-full flex-shrink-0 transition-colors
                              ${active ? "bg-[#e99816]" : "bg-transparent group-hover/link:bg-gray-300"}
                            `}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Right: featured card */}
        {navItem.panel && navItem.panel.card_title && (
          <Link
            href={navItem.panel.card_href || "#"}
            onClick={onLinkClick}
            className="
              relative ml-10 flex-shrink-0 h-60 w-72
              overflow-hidden bg-gray-200
              group/card cursor-pointer
              hover:shadow-2xl transition-shadow duration-300
            "
          >
            <img
              src={navItem.panel.card_image_url || "/images/luxury-living-room.png"}
              alt={navItem.panel.card_title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              {navItem.panel.card_label && (
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e99816]">
                  {navItem.panel.card_label}
                </p>
              )}
              <p className="text-lg font-bold leading-snug">
                {navItem.panel.card_title}
              </p>
              {navItem.panel.card_subtitle && (
                <p className="mt-1 text-xs text-gray-300">
                  {navItem.panel.card_subtitle}
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white group-hover/card:gap-2 transition-all">
                View details <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Bottom gold accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#e99816]/50 to-transparent" />
    </div>
  );
}

// ── Mobile accordion item ──────────────────────────────────────────────────────
function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasMegaMenu = item.columns.length > 0 || !!item.panel;
  const active =
    item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between py-4">
        <Link
          href={item.href || "#"}
          onClick={() => { if (!hasMegaMenu) onClose(); }}
          className={`text-base font-medium ${active ? "text-black" : "text-gray-700"}`}
        >
          {item.label}
        </Link>
        {hasMegaMenu && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className="p-2 text-gray-400"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {hasMegaMenu && open && (
        <div className="pb-5 pl-2 flex flex-col gap-6">
          {item.columns.map((col) => (
            <div key={col.id}>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`text-sm ${
                        pathname === link.href ? "text-black font-semibold" : "text-gray-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Panel CTA in mobile */}
          {item.panel?.card_href && (
            <Link
              href={item.panel.card_href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e99816]"
            >
              {item.panel.card_label || "Explore"} <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Header ────────────────────────────────────────────────────────────────
export function HeaderClient({ navItems: initialNavItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(
    initialNavItems.length > 0 ? initialNavItems : FALLBACK_NAV
  );
  // Track which nav item's mega menu is open (-1 = none)
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  // Keep a timer ref so hover intent doesn't flicker
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Client-side refetch when server component couldn't get data
  useEffect(() => {
    if (initialNavItems.length > 0) return;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    fetch(`${API_BASE_URL}/navigation/`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        const items = Array.isArray(data) ? data : data.results ?? [];
        if (items.length > 0) setNavItems(items);
      })
      .catch(() => {});
  }, [initialNavItems.length]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mega menu and mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMenuId(null);
  }, [pathname]);

  // Close mega menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenuId(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const handleNavMouseEnter = (item: NavItem) => {
    const hasMegaMenu = item.columns.length > 0 || !!item.panel;
    if (!hasMegaMenu) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenuId(item.id);
  };

  const handleNavMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenuId(null), 120);
  };

  const handleMegaMenuMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMegaMenuMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenuId(null), 120);
  };

  const activeNavItem = navItems.find((i) => i.id === openMenuId) ?? null;

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : openMenuId ? "shadow-none" : "shadow-none border-b border-gray-100"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpenMenuId(null); }}
          className="flex items-center gap-2.5 text-black flex-shrink-0"
          aria-label="Sajawat Interior home"
        >
          <img src={logoUrl} alt="Sajawat Interior logo" className="h-9 w-9 object-cover rounded" />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold uppercase tracking-[0.22em]">Sajawat</span>
            <span className="hidden text-[9px] uppercase tracking-[0.28em] text-[#c0392b] lg:block">
              Interiors
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 h-full" aria-label="Main navigation">
          {navItems.map((item) => {
            const hasMegaMenu = item.columns.length > 0 || !!item.panel;
            const active = isActive(item.href);
            const menuOpen = openMenuId === item.id;

            return (
              <div
                key={item.id}
                className="relative flex items-center h-full"
                onMouseEnter={() => handleNavMouseEnter(item)}
                onMouseLeave={handleNavMouseLeave}
              >
                <Link
                  href={item.href || "#"}
                  aria-haspopup={hasMegaMenu ? "true" : undefined}
                  aria-expanded={hasMegaMenu ? menuOpen : undefined}
                  className={`
                    relative px-4 py-5 text-sm font-medium transition-colors duration-150
                    flex items-center gap-1 select-none whitespace-nowrap
                    ${active || menuOpen ? "text-black" : "text-gray-600 hover:text-black"}
                  `}
                >
                  {item.label}
                  {hasMegaMenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${menuOpen ? "rotate-180 opacity-100" : ""}`}
                    />
                  )}
                  {/* Active / hover underline */}
                  <span
                    className={`
                      absolute bottom-3 left-4 right-4 h-0.5 bg-[#e99816] rounded-full
                      transition-transform duration-200 origin-center
                      ${active || menuOpen ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-[#e99816] hover:bg-[#c9790b] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
          >
            Get a Quote
          </Link>

          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen((o) => !o)}
              className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:border-gray-400 transition-colors"
              aria-expanded={isProfileOpen}
              aria-label="Open profile menu"
            >
              <User size={15} />
              <span>{isSignedIn ? "Demo User" : "Sign in"}</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-11 w-52 border border-gray-100 bg-white rounded-xl p-2 text-black shadow-xl z-50">
                {isSignedIn ? (
                  <>
                    <p className="px-3 py-2 text-xs text-gray-400 uppercase tracking-wider">Demo User</p>
                    <button
                      type="button"
                      onClick={() => { setIsSignedIn(false); setIsProfileOpen(false); }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <LogOut size={14} /> Log out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setIsSignedIn(true); setIsProfileOpen(false); }}
                    className="w-full bg-black text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Sign in as demo user
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className="text-gray-700 hover:text-black transition-colors md:hidden p-1"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Full-width Mega Menu ── */}
      {/* Sits flush below the header bar, spans 100vw */}
      <div
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
        className={`
          hidden md:block w-full
          transition-all duration-200 ease-out overflow-hidden
          ${activeNavItem ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 pointer-events-none"}
        `}
        aria-hidden={!activeNavItem}
      >
        {activeNavItem && (
          <MegaMenuPanel
            navItem={activeNavItem}
            pathname={pathname}
            onLinkClick={() => setOpenMenuId(null)}
          />
        )}
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100
          ${isMenuOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-6 py-2 pb-8">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.id}
              item={item}
              pathname={pathname}
              onClose={() => setIsMenuOpen(false)}
            />
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#e99816] text-white text-center text-sm font-semibold py-3 hover:bg-[#c9790b] transition-colors"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setIsSignedIn((v) => !v)}
              className="border border-gray-200 text-gray-700 text-sm py-3 hover:bg-gray-50 transition-colors"
            >
              {isSignedIn ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
