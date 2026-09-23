import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Gallery } from "@/components/gallery/gallery";

export default function RoomsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <Gallery
          title="Room Designs"
          subtitle="Explore stunning interior designs organized by room type. From living rooms to home offices, find inspiration for every space in your home."
        />
      </main>

      <FooterSection />
    </div>
  );
}
