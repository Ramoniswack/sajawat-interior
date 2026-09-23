"use client";

import {
  Sparkles,
  Home,
  Compass,
  Palette,
  Globe,
  Leaf,
  Gem,
  Building2,
} from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const designStyles: CardItem[] = [
  {
    id: "modern",
    title: "Modern",
    description:
      "Clean lines, neutral colors, and sophisticated minimalism create spaces that feel both contemporary and timeless.",
    imgSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    icon: <Home size={24} />,
    linkHref: "/design-ideas?tab=style&style=modern",
  },
  {
    id: "traditional",
    title: "Traditional",
    description:
      "Classic elegance with rich textures, warm colors, and timeless elements that bring comfort and sophistication to any space.",
    imgSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    icon: <Gem size={24} />,
    linkHref: "/design-ideas?tab=style&style=traditional",
  },
  {
    id: "contemporary",
    title: "Contemporary",
    description:
      "Current design trends blended with comfort and functionality for fresh, modern living spaces that reflect today's lifestyle.",
    imgSrc:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    linkHref: "/design-ideas?tab=style&style=contemporary",
  },
  {
    id: "minimalist",
    title: "Minimalist",
    description:
      "Less is more with decluttered spaces, simple forms, and a focus on essential elements that create calm, organized environments.",
    imgSrc:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    icon: <Compass size={24} />,
    linkHref: "/design-ideas?tab=style&style=minimalist",
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Raw materials, exposed elements, and urban aesthetics create bold, edgy spaces with character and modern appeal.",
    imgSrc:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    icon: <Building2 size={24} />,
    linkHref: "/design-ideas?tab=style&style=industrial",
  },
  {
    id: "scandinavian",
    title: "Scandinavian",
    description:
      "Simple, functional designs with natural materials, light colors, and cozy elements that create warm, inviting spaces.",
    imgSrc:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    icon: <Leaf size={24} />,
    linkHref: "/design-ideas?tab=style&style=scandinavian",
  },
  {
    id: "bohemian",
    title: "Bohemian",
    description:
      "Eclectic, free-spirited designs with vibrant colors, patterns, and global influences that create unique, personalized spaces.",
    imgSrc:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    icon: <Palette size={24} />,
    linkHref: "/design-ideas?tab=style&style=bohemian",
  },
  {
    id: "coastal",
    title: "Coastal",
    description:
      "Light, airy designs inspired by the sea with soft colors, natural textures, and relaxed vibes for a beach-inspired atmosphere.",
    imgSrc:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
    icon: <Globe size={24} />,
    linkHref: "/design-ideas?tab=style&style=coastal",
  },
];

export default function DesignByStyle() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 bg-background p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Design by Style
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore different interior design styles and find the perfect aesthetic that matches your personality and lifestyle.
        </p>
      </div>
      <ExpandingCards items={designStyles} defaultActiveIndex={0} />
    </div>
  );
}
