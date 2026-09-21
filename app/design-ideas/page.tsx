import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export default function DesignIdeaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Design Ideas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of interior design styles, blending rich Nepali heritage with modern aesthetics to inspire your next project.
            </p>
          </div>

          <div className="space-y-24">
            {/* Section 1: Newari Contemporary Fusion */}
            <section id="newari-fusion" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Newari Contemporary Fusion</h2>
                <p className="text-muted-foreground mb-6">
                  Experience the perfect harmony of traditional Newari architecture and contemporary design. 
                  This style features exposed red brick walls, intricately carved wooden elements, paired with 
                  modern minimalist furniture and warm ambient lighting for a sophisticated yet grounded atmosphere.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/design-ideas/newari-fusion.jpg" 
                  alt="Newari Contemporary Fusion Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </section>

            {/* Section 2: Nepali Mongolian Modern Style */}
            <section id="mongolian-modern" className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Nepali Mongolian Modern Style</h2>
                <p className="text-muted-foreground mb-6">
                  Drawing inspiration from the rich heritage of Gurung, Magar, and Tamang cultures, 
                  this modern style incorporates traditional geometric rugs, cultural artifacts, and elegant wooden furniture. 
                  It creates a cozy, inviting space that celebrates ethnic roots while maintaining a clean, modern edge.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/design-ideas/mongolian-modern.jpg" 
                  alt="Nepali Mongolian Modern Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </section>

            {/* Section 3: Modern Nepali Minimalist */}
            <section id="nepali-minimalist" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Modern Nepali Minimalist</h2>
                <p className="text-muted-foreground mb-6">
                  Embracing the 'less is more' philosophy, the Modern Nepali Minimalist style focuses on clean lines, 
                  natural materials, and uncluttered spaces. Subtle traditional motifs are integrated thoughtfully, 
                  allowing large windows and natural light to create a serene and peaceful environment.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/design-ideas/nepali-minimalist.jpg" 
                  alt="Modern Nepali Minimalist Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </section>

            {/* Section 4: Nepali Rustic */}
            <section id="nepali-rustic" className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Nepali Rustic</h2>
                <p className="text-muted-foreground mb-6">
                  Capture the charm of a mountain cabin with the Nepali Rustic aesthetic. 
                  This style highlights exposed stone walls, raw timber beams, and mud-plastered effects. 
                  Complemented by warm textiles and cozy fireplaces, it brings the rugged beauty of the Himalayas indoors.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/design-ideas/nepali-rustic.jpg" 
                  alt="Nepali Rustic Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </section>

            {/* Section 5: Nepali Biophilic */}
            <section id="nepali-biophilic" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Nepali Biophilic</h2>
                <p className="text-muted-foreground mb-6">
                  Connect with nature through the Nepali Biophilic design. By incorporating abundant indoor plants, 
                  bamboo elements, and traditional Dhaka fabric accents, this style blurs the lines between indoor 
                  and outdoor spaces, fostering a refreshing and vibrant living environment.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/design-ideas/nepali-biophilic.jpg" 
                  alt="Nepali Biophilic Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
