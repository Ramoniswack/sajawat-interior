import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { livingRoomStyles } from "@/components/rooms/living-room-styles"

export function generateStaticParams() {
  return livingRoomStyles.map(({ slug }) => ({ slug }))
}

export default async function LivingRoomStyleGallery({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const style = livingRoomStyles.find((item) => item.slug === slug)

  if (!style) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-stone-900 md:min-h-[620px]">
          <img
            src={style.gallery[0].image}
            alt={style.gallery[0].alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-36 md:px-10 md:pb-20">
            <Link
              href="/rooms/living-room"
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <span aria-hidden="true">←</span> All living room styles
            </Link>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/75">
              Living room collection
            </p>
            <h1 className="mb-5 max-w-3xl font-display text-4xl font-light tracking-tight text-white md:text-6xl">
              {style.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              {style.description}
            </p>
          </div>
        </section>

        <section className="bg-[#faf9f6] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  The inspiration gallery
                </p>
                <h2 className="font-display text-3xl font-light text-stone-900 md:text-4xl">
                  Spaces in this style
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-stone-600">
                Explore the textures, tones, and thoughtful details that bring {style.title.toLowerCase()} to life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {style.gallery.map((item, index) => (
                <figure
                  key={item.image}
                  className={`group relative overflow-hidden bg-stone-200 ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${index === 0 ? "aspect-[4/3] h-full min-h-[280px] lg:aspect-auto" : "aspect-[4/3]"}`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-12 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                    {item.alt}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-stone-200 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-6 text-stone-600">
                Found a look you love? Let’s shape this inspiration around your home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-stone-900 px-6 py-3 text-sm text-white transition hover:bg-stone-700"
              >
                Talk to our designers <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
