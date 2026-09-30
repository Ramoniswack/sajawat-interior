"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FooterSection } from "@/components/sections/footer-section";

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

type ContactPageData = {
  hero_subtitle: string;
  hero_title: string;
  hero_description: string;
  location_address: string;
  location_city: string;
  phone_number: string;
  email_address: string;
  project_types: string[];
  success_title: string;
  success_subtitle: string;
};

const DEFAULTS: ContactPageData = {
  hero_subtitle: "Start a conversation",
  hero_title: "Let's shape a space that feels like you.",
  hero_description: "Tell us about your home, project, or dream space. Our studio will be in touch to arrange a thoughtful first conversation.",
  location_address: "Damauli, Tanahu",
  location_city: "Nepal",
  phone_number: "+977 980 000 0000",
  email_address: "hello@sajawatinterior.com",
  project_types: ["Residential interior", "Office or workspace", "Hospitality or café", "Furniture and styling"],
  success_title: "Thank you. We'll be in touch soon.",
  success_subtitle: "Message received",
};

export default function ContactPage() {
  const [page, setPage] = useState<ContactPageData>(DEFAULTS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API}/contact/page/`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setPage({ ...DEFAULTS, ...data }) })
      .catch(() => {});
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service_interest: (form.elements.namedItem("project") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch(`${API}/contact/submit/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-32 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:pb-28 md:pt-40">
        <div className="flex flex-col justify-between gap-14">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">{page.hero_subtitle}</p>
            <h1 className="max-w-xl text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">{page.hero_title}</h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">{page.hero_description}</p>
          </div>
          <div className="grid gap-6 border-t border-border pt-6 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
              <p className="flex items-start gap-2 leading-6">
                <MapPin size={16} className="mt-1 shrink-0" /> {page.location_address}<br />{page.location_city}
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach us</p>
              <a href={`tel:${page.phone_number}`} className="mb-2 flex items-center gap-2 hover:underline">
                <Phone size={15} /> {page.phone_number}
              </a>
              <a href={`mailto:${page.email_address}`} className="flex items-center gap-2 hover:underline">
                <Mail size={15} /> {page.email_address}
              </a>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-start justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">{page.success_subtitle}</p>
              <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em]">{page.success_title}</h2>
              <button onClick={() => setSubmitted(false)} className="mt-10 text-sm underline underline-offset-4">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="grid gap-3 text-sm">
                  <span>Name</span>
                  <input required name="name" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="Your name" />
                </label>
                <label className="grid gap-3 text-sm">
                  <span>Email</span>
                  <input required type="email" name="email" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="you@example.com" />
                </label>
              </div>
              <label className="grid gap-3 text-sm">
                <span>Project type</span>
                <select name="project" defaultValue="" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none focus:border-foreground">
                  <option value="" disabled>Select one</option>
                  {page.project_types.map(pt => <option key={pt}>{pt}</option>)}
                </select>
              </label>
              <label className="grid gap-3 text-sm">
                <span>Tell us about your project</span>
                <textarea required name="message" rows={5} className="resize-none border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="A little about the space, location, and what you have in mind..." />
              </label>
              <button type="submit" disabled={loading} className="group flex w-full items-center justify-between bg-foreground px-6 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:opacity-50">
                {loading ? "Sending..." : "Send enquiry"} <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <p className="text-xs leading-5 text-muted-foreground">By sending this form, you agree to be contacted about your project.</p>
            </form>
          )}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
