import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { DesignersSection } from "@/components/sections/designers-section";

export default function DesignIdeaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Design Ideas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of interior design styles, blending rich Nepali heritage with modern aesthetics to inspire your next project.
          </p>
        </div>

        <HowItWorksSection />

        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Section 1: Newari Contemporary Fusion */}
            <div id="newari-fusion" className="flex flex-col bg-card text-card-foreground rounded-xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-64">
                <Image 
                  src="/design-ideas/newari-fusion.jpg" 
                  alt="Newari Contemporary Fusion Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">Newari Contemporary Fusion</h2>
                <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                  Experience the perfect harmony of traditional Newari architecture and contemporary design. 
                  This style features exposed red brick walls, intricately carved wooden elements, paired with 
                  modern minimalist furniture.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Explore Style
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2: Nepali Mongolian Modern Style */}
            <div id="mongolian-modern" className="flex flex-col bg-card text-card-foreground rounded-xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-64">
                <Image 
                  src="/design-ideas/mongolian-modern.jpg" 
                  alt="Nepali Mongolian Modern Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">Nepali Mongolian Modern</h2>
                <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                  Drawing inspiration from the rich heritage of Gurung, Magar, and Tamang cultures, 
                  this modern style incorporates traditional geometric rugs, cultural artifacts, and elegant wooden furniture.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Explore Style
                  </button>
                </div>
              </div>
            </div>

            {/* Section 3: Modern Nepali Minimalist */}
            <div id="nepali-minimalist" className="flex flex-col bg-card text-card-foreground rounded-xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-64">
                <Image 
                  src="/design-ideas/nepali-minimalist.jpg" 
                  alt="Modern Nepali Minimalist Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">Modern Nepali Minimalist</h2>
                <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                  Embracing the 'less is more' philosophy, the Modern Nepali Minimalist style focuses on clean lines, 
                  natural materials, and uncluttered spaces. Subtle traditional motifs are integrated thoughtfully.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Explore Style
                  </button>
                </div>
              </div>
            </div>

            {/* Section 4: Nepali Rustic */}
            <div id="nepali-rustic" className="flex flex-col bg-card text-card-foreground rounded-xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-64">
                <Image 
                  src="/design-ideas/nepali-rustic.jpg" 
                  alt="Nepali Rustic Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">Nepali Rustic</h2>
                <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                  Capture the charm of a mountain cabin with the Nepali Rustic aesthetic. 
                  This style highlights exposed stone walls, raw timber beams, and mud-plastered effects, complemented by warm textiles.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Explore Style
                  </button>
                </div>
              </div>
            </div>

            {/* Section 5: Nepali Biophilic */}
            <div id="nepali-biophilic" className="flex flex-col bg-card text-card-foreground rounded-xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-64">
                <Image 
                  src="/design-ideas/nepali-biophilic.jpg" 
                  alt="Nepali Biophilic Interior" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">Nepali Biophilic</h2>
                <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                  Connect with nature through the Nepali Biophilic design. By incorporating abundant indoor plants, 
                  bamboo elements, and traditional Dhaka fabric accents, this style blurs the lines between indoor and outdoor.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Explore Style
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <DesignersSection />
      </main>

      <FooterSection />
    </div>
  );
}
