import { FooterSection } from "@/components/sections/footer-section"
import { RoomsHero } from "@/components/rooms/rooms-hero"
import { getRoomsPage, getPageBySlug, getHomePageData, getRoomTypes, getRoomStyles } from "@/lib/api-client"
import RoomsClient from "./rooms-client"

const roomCategories = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Areas" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "kitchen", label: "Kitchen & Dining" },
  { id: "bathroom", label: "Bathrooms" },
  { id: "office", label: "Workspaces" },
  { id: "commercial", label: "Commercial" },
]

export default async function RoomsPage() {
  // Fetch room types from API
  const roomTypes = await getRoomTypes()
  
  // Fetch room styles from API
  const roomStyles = await getRoomStyles()
  
  // Fetch page data for dynamic content
  const pageData = await getRoomsPage() 
  const widgetPageData = await getPageBySlug('rooms')
  const homePageData = await getHomePageData()
  
  // Transform API data to match room card format
  const rooms = roomTypes.map((rt: any) => ({
    id: rt.slug,
    title: rt.name,
    description: rt.description,
    image: rt.image || '/images/luxury-living-room.png'
  }))

  // Extract dynamic content from page data or use defaults
  const designStylesTitle = pageData?.widgets?.find((w: any) => w.content_type === 'text')?.data?.content?.replace(/<[^>]*>/g, '').substring(0, 50) || 'Design Styles'
  const designStylesDescription = pageData?.widgets?.find((w: any) => w.content_type === 'text')?.data?.content?.replace(/<[^>]*>/g, '').substring(50) || 'Find the perfect aesthetic that matches your personality'
  const ctaTitle = homePageData?.main_cta_title || 'Ready to Transform Your Space?'
  const ctaDescription = homePageData?.main_cta_description || "Let's discuss your project and create something beautiful together."
  const ctaButtonText = homePageData?.main_cta_button_text || 'Start Your Project'
  const ctaButtonLink = homePageData?.main_cta_button_link || '/contact'

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <RoomsHero subtitle={pageData?.hero_subtitle} title={pageData?.hero_title} description={pageData?.hero_description} ctaText={pageData?.hero_cta_text} secondaryCtaText={pageData?.hero_secondary_cta_text} badgeText={pageData?.hero_badge_text} badgeSubtext={pageData?.hero_badge_subtext} />

        {/* Rooms Section */}
        <section className="py-24 bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <RoomsClient rooms={rooms} />
          </div>
        </section>

        {/* Style Categories Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                {designStylesTitle}
              </h2>
              <p
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                {designStylesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {roomStyles.map((style: any, index: number) => (
                <div
                  key={index}
                  className="process-step relative border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3
                    className="mb-3 text-lg font-medium text-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {style.name}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      fontWeight: 300,
                    }}
                  >
                    {style.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-100">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2
              className="mb-6 text-3xl font-light text-foreground md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {ctaTitle}
            </h2>
            <p
              className="mb-8 text-lg text-muted-foreground"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              {ctaDescription}
            </p>
            <button
              className="button-hover bg-[#e99816] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              {ctaButtonText}
            </button>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

