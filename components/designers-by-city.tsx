"use client";

import {
  MapPin,
  Building,
  Trees,
  Waves,
  Mountain,
  Sun,
  Building2,
  Star,
} from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const designerCities: CardItem[] = [
  {
    id: "kathmandu",
    title: "Kathmandu",
    description:
      "The heart of Nepal's design scene, featuring traditional Newari architecture blended with modern contemporary elements.",
    imgSrc:
      "https://images.unsplash.com/photo-1599406898422-3e0065590ccb?q=80&w=800&auto=format&fit=crop",
    icon: <MapPin size={24} />,
    linkHref: "/design-ideas?tab=location&city=kathmandu",
  },
  {
    id: "pokhara",
    title: "Pokhara",
    description:
      "Lakeside serenity meets modern design, with architects creating spaces that harmonize with the stunning mountain backdrop.",
    imgSrc:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    icon: <Mountain size={24} />,
    linkHref: "/design-ideas?tab=location&city=pokhara",
  },
  {
    id: "lalitpur",
    title: "Lalitpur",
    description:
      "Ancient city known for its exquisite craftsmanship and traditional artistry, home to some of Nepal's finest heritage designers.",
    imgSrc:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    icon: <Building size={24} />,
    linkHref: "/design-ideas?tab=location&city=lalitpur",
  },
  {
    id: "bhaktapur",
    title: "Bhaktapur",
    description:
      "Medieval architecture and timeless design principles inspire contemporary interior spaces with rich cultural heritage.",
    imgSrc:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
    icon: <Star size={24} />,
    linkHref: "/design-ideas?tab=location&city=bhaktapur",
  },
  {
    id: "chitwan",
    title: "Chitwan",
    description:
      "Nature-inspired designs incorporating sustainable materials and biophilic elements that bring the outdoors inside.",
    imgSrc:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    icon: <Trees size={24} />,
    linkHref: "/design-ideas?tab=location&city=chitwan",
  },
  {
    id: "pokara-beach",
    title: "Pokhara Lakeside",
    description:
      "Waterfront properties and lakeside retreats designed to maximize natural light and stunning panoramic views.",
    imgSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    icon: <Waves size={24} />,
    linkHref: "/design-ideas?tab=location&city=pokhara-lakeside",
  },
  {
    id: "nagarkot",
    title: "Nagarkot",
    description:
      "Hill station designs featuring cozy interiors, fireplaces, and spaces optimized for relaxation and mountain views.",
    imgSrc:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    icon: <Sun size={24} />,
    linkHref: "/design-ideas?tab=location&city=nagarkot",
  },
  {
    id: "dharan",
    title: "Dharan",
    description:
      "Eastern Nepal's design hub featuring multicultural influences and innovative approaches to modern interior architecture.",
    imgSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    icon: <Building2 size={24} />,
    linkHref: "/design-ideas?tab=location&city=dharan",
  },
];

export default function DesignersByCity() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 bg-background p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Designers by City
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Discover talented interior designers across Nepal's major cities, each bringing unique regional perspectives and expertise.
        </p>
      </div>
      <ExpandingCards items={designerCities} defaultActiveIndex={0} />
    </div>
  );
}
