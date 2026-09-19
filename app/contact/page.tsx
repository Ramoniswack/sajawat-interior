"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FooterSection } from "@/components/sections/footer-section";
import { Header } from "@/components/header";

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-32 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:pb-28 md:pt-40">
        <div className="flex flex-col justify-between gap-14">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">Start a conversation</p>
            <h1 className="max-w-xl text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">Let&apos;s shape a space that feels like you.</h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">Tell us about your home, project, or dream space. Our studio in Damauli, Tanahu will be in touch to arrange a thoughtful first conversation.</p>
          </div>
          <div className="grid gap-6 border-t border-border pt-6 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
              <p className="flex items-start gap-2 leading-6"><MapPin size={16} className="mt-1 shrink-0" /> Damauli, Tanahu<br />Nepal</p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach us</p>
              <a href="tel:+9779800000000" className="mb-2 flex items-center gap-2 hover:underline"><Phone size={15} /> +977 980 000 0000</a>
              <a href="mailto:hello@sajawatinterior.com" className="flex items-center gap-2 hover:underline"><Mail size={15} /> hello@sajawatinterior.com</a>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-start justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">Message received</p>
              <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em]">Thank you. We&apos;ll be in touch soon.</h2>
              <button onClick={() => setSubmitted(false)} className="mt-10 text-sm underline underline-offset-4">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="grid gap-3 text-sm"><span>Name</span><input required name="name" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="Your name" /></label>
                <label className="grid gap-3 text-sm"><span>Email</span><input required type="email" name="email" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="you@example.com" /></label>
              </div>
              <label className="grid gap-3 text-sm"><span>Project type</span><select name="project" defaultValue="" className="border-0 border-b border-border bg-transparent px-0 py-3 outline-none focus:border-foreground"><option value="" disabled>Select one</option><option>Residential interior</option><option>Office or workspace</option><option>Hospitality or café</option><option>Furniture and styling</option></select></label>
              <label className="grid gap-3 text-sm"><span>Tell us about your project</span><textarea required name="message" rows={5} className="resize-none border-0 border-b border-border bg-transparent px-0 py-3 outline-none placeholder:text-muted-foreground focus:border-foreground" placeholder="A little about the space, location, and what you have in mind..." /></label>
              <button type="submit" className="group flex w-full items-center justify-between bg-foreground px-6 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80">Send enquiry <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
              <p className="text-xs leading-5 text-muted-foreground">By sending this form, you agree to be contacted about your project.</p>
            </form>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
