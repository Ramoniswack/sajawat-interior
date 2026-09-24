"use client"

import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { designIdeasItems, designIdeasCategories } from "@/lib/design-ideas-data"
import { motion } from "framer-motion"
import { ArrowLeft, Share2, Heart, MapPin, Palette, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DesignIdeaDetailPage() {
  const params = useParams()
  const router = useRouter()
  const itemId = params.id as string

  const selectedItem = designIdeasItems.find(item => item.id === itemId)
  const relatedItems = designIdeasItems
    .filter(item => item.id !== itemId && item.category === selectedItem?.category)
    .slice(0, 4)

  if (!selectedItem) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-light mb-4">Design Idea Not Found</h1>
            <Link 
              href="/design-ideas" 
              className="inline-flex items-center gap-2 text-[#e99816] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>
          </div>
        </main>
        <FooterSection />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
          <Link
            href="/design-ideas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: 300,
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
        </div>

        {/* Hero Section with Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl"
            />
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.alt || selectedItem.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-6"
                >
                  <span
                    className="inline-block rounded-none border border-[#e99816] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#e99816]"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {selectedItem.category}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-6 text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  {selectedItem.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}
                >
                  {selectedItem.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-none bg-[#e99816] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c9790b]"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <Heart className="h-4 w-4" />
                    Save to Favorites
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-none border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </motion.button>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mt-8 grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e99816]/10">
                      <Palette className="h-5 w-5 text-[#e99816]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Style</div>
                      <div className="text-xs text-muted-foreground">Modern Fusion</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e99816]/10">
                      <MapPin className="h-5 w-5 text-[#e99816]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Location</div>
                      <div className="text-xs text-muted-foreground">Kathmandu</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Related Ideas Section */}
        {relatedItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-background"
          >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2
                  className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.02em',
                  }}
                >
                  Related Design Ideas
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
                  Explore more {selectedItem.category} designs similar to this one
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Link href={`/design-ideas/${item.id}`} className="group block">
                      <div className="relative overflow-hidden border border-border bg-card transition-all hover:border-[#e99816] hover:shadow-lg" style={{ borderRadius: "0" }}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt || item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-[#e99816]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                            <div className="text-center p-4">
                              <h3
                                className="mb-2 text-lg font-light text-white"
                                style={{
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                                  WebkitFontSmoothing: 'antialiased',
                                  MozOsxFontSmoothing: 'grayscale',
                                  letterSpacing: '0.02em',
                                }}
                              >
                                {item.title}
                              </h3>
                              <div className="flex items-center justify-center gap-2 text-sm text-white">
                                View Details
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4">
                          <h4
                            className="text-sm font-medium text-foreground truncate"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                              WebkitFontSmoothing: 'antialiased',
                              MozOsxFontSmoothing: 'grayscale',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="mt-1 text-xs text-muted-foreground line-clamp-2"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                              WebkitFontSmoothing: 'antialiased',
                              MozOsxFontSmoothing: 'grayscale',
                              fontWeight: 300,
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-[#e99816]"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-3xl font-light text-white md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Love This Design?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg text-white/90"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              Let's bring this design concept to life in your space. Contact us for a consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  )
}