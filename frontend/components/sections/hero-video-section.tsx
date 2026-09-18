export function HeroVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ef] px-4 py-16 md:px-12 md:py-24" aria-labelledby="hero-video-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-black/45">Sajawat Interior · Pokhara</p>
            <h2 id="hero-video-heading" className="max-w-xl text-3xl font-light leading-tight text-black md:text-5xl">
              Designed around the way you live.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-black/55 md:block">
            Thoughtful spaces, natural textures, and quiet details brought together with intention.
          </p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-black shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:aspect-[2/1]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Sajawat Interior design showcase"
          >
            <source src="/videos/hero-followup.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.25em] text-white md:bottom-8 md:left-8">
            Spaces with soul
          </p>
        </div>
      </div>
    </section>
  );
}
