import Image from 'next/image'
import type { BookPage } from './rooms-book-data'

export function BookFace({ page, side }: { page: BookPage; side: 'left' | 'right' }) {
  void side

  if (page.variant === 'cover') {
    return (
      <div className="h-full w-full bg-[#e99816] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full" />
        <div className="absolute top-1/2 left-4 w-1 h-12 bg-white/20" />
        <div className="absolute top-1/2 right-4 w-1 h-12 bg-white/20" />
        <div className="absolute top-4 left-1/2 w-12 h-1 bg-white/20 -translate-x-1/2" />
        <div className="absolute bottom-4 left-1/2 w-12 h-1 bg-white/20 -translate-x-1/2" />

        {/* Content */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BXFvUsoRqPfmQg9wVzT7VpQnkxJzMn.png"
          alt="Sajawat Interior Logo"
          className="w-20 h-20 mb-6 object-contain relative z-10"
        />
        <h2 className="text-white text-3xl font-light mb-3 text-center relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
          {page.title}
        </h2>
        <p className="text-white text-xl font-light mb-4 text-center relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
          कोठा डिजाइन
        </p>
        <p className="text-white/90 text-sm text-center max-w-xs relative z-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
          {page.description}
        </p>
        <div className="mt-6 flex items-center gap-2 relative z-10">
          <div className="w-12 h-0.5 bg-white/50" />
          <div className="w-2 h-2 bg-white/70 rounded-full" />
          <div className="w-12 h-0.5 bg-white/50" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-[#f7f4ec] p-6 flex flex-col">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={page.image}
          alt={page.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-neutral-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
        {page.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}>
        {page.description}
      </p>
    </div>
  )
}
