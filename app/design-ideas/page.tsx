import { FooterSection } from "@/components/sections/footer-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { DesignersSection } from "@/components/sections/designers-section";
import { Gallery } from "@/components/gallery/gallery";
import { getHomePageData, getDesignIdeaPage, getDesignIdeaCategories, getDesignIdeas } from "@/lib/api-client";

export default async function DesignIdeaPage() {
  // Fetch home page data for statistics
  const homePageData = await getHomePageData()
  
  // Fetch page data for dynamic content
  const pageData = await getDesignIdeaPage()
  const dbCategories = await getDesignIdeaCategories()
  const dbIdeas = await getDesignIdeas()
  
    // Pseudo-random span generator based on ID for a varied, non-repeating pattern
  const getSpan = (idStr: string, explicitSpan: string) => {
    if (explicitSpan && explicitSpan !== 'standard' && explicitSpan !== '') {
      return explicitSpan as 'large' | 'tall' | 'wide'
    }
    let hash = 0
    for (let i = 0; i < idStr.length; i++) {
      hash = idStr.charCodeAt(i) + ((hash << 5) - hash)
    }
    const spans = ['large', undefined, 'wide', 'tall', 'wide', undefined, 'tall', undefined, 'wide', 'large', undefined, 'wide']
    return spans[Math.abs(hash) % spans.length] as 'large' | 'tall' | 'wide' | undefined
  }

  // Transform API data to match Gallery component format
  const designIdeasItems = (dbIdeas || []).map((idea: any) => ({
    id: idea.id.toString(),
    title: idea.title,
    description: idea.description,
    category: idea.category_slug || idea.category?.slug || 'all-ideas',
    type: "image" as const,
    src: idea.image_url || idea.image || "/images/luxury-living-room.png",
    span: getSpan(idea.id.toString(), idea.span),
    aspect: idea.aspect || undefined,
    style: idea.style?.slug || undefined,
    location: idea.location?.slug || undefined,
  }))

  const designIdeasCategories = dbCategories?.length > 0 ? dbCategories.map((c: any) => ({
    id: c.slug,
    label: c.name
  })) : [
    { id: "all", label: "All Ideas" },
    { id: "style", label: "By Style" },
    { id: "location", label: "By Location" },
    { id: "featured", label: "Featured" },
  ]

  // Extract dynamic content from page data or use defaults
  const heroTitle = pageData?.hero_title || 'Design Ideas'
  const heroSubtitle = pageData?.hero_description || 'Explore our curated collection of interior design styles, blending rich Nepali heritage with modern aesthetics to inspire your next project.'
  const galleryTitle    = pageData?.gallery_title    || 'Design Inspiration Gallery'
  const gallerySubtitle = pageData?.gallery_subtitle || 'Browse through our collection of design ideas organized by style, location, and featured projects.'
  const galleryLayout   = pageData?.gallery_layout   || '4-col'

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 text-center">
          <h1
            className="mb-4 text-4xl font-light tracking-tight sm:text-5xl text-foreground"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              letterSpacing: '0.02em',
            }}
          >
            {heroTitle}
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: 300,
            }}
          >
            {heroSubtitle}
          </p>
        </div>

        <HowItWorksSection />

        {/* Statistics Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {pageData?.stats_projects_completed || homePageData?.statistics?.projects_completed || 500}+
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Projects Completed
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {pageData?.stats_expert_designers || homePageData?.statistics?.expert_designers || 50}+
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Expert Designers
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {pageData?.stats_happy_clients || homePageData?.statistics?.happy_clients || 1000}+
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Happy Clients
              </div>
            </div>
            <div>
              <div
                className="text-4xl font-bold text-[#e99816] mb-2"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {pageData?.stats_design_styles || homePageData?.statistics?.design_styles || 15}+
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Design Styles
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <Gallery
            title={galleryTitle}
            subtitle={gallerySubtitle}
            items={designIdeasItems}
            categories={designIdeasCategories}
            layout={galleryLayout as any}
          />
        </div>

        <DesignersSection />
      </main>

      <FooterSection />
    </div>
  );
}


