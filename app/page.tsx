import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { HeroTextSection } from "@/components/sections/hero-text-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HeroTextSection />
      <FeaturedProductsSection />
      <TechnologySection />
      <CollectionSection />
      <FooterSection />
    </main>
  );
}
