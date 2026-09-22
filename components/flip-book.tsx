'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { sheets } from './rooms-book-data'
import { BookFace } from './book-face'

const NUM = sheets.length

export function FlipBook() {
  // location = number of sheets already turned to the left (0 = closed on cover).
  const [location, setLocation] = useState(1)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const frame = useRef<HTMLDivElement>(null)

  const canPrev = location > 0
  const canNext = location < NUM

  const next = useCallback(() => setLocation((l) => Math.min(l + 1, NUM)), [])
  const prev = useCallback(() => setLocation((l) => Math.max(l - 1, 0)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const handleMove = (e: React.PointerEvent) => {
    const el = frame.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: py * -9, y: px * 13 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  // Turn based on which half of the book was clicked.
  const handleClick = (e: React.MouseEvent) => {
    const el = frame.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const isRight = e.clientX - r.left > r.width / 2
    if (isRight) next()
    else prev()
  }

  const shift = location === 0 ? '-25%' : location === NUM ? '25%' : '0%'

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={frame}
        onPointerMove={handleMove}
        onPointerLeave={resetTilt}
        onClick={handleClick}
        className="[perspective:2200px] cursor-pointer select-none"
        style={{ touchAction: 'manipulation' }}
      >
        {/* tilt layer */}
        <div
          className="[transform-style:preserve-3d] transition-transform duration-300 ease-out"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          {/* recentre layer as the book opens / closes */}
          <div
            className="[transform-style:preserve-3d] transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${shift})` }}
          >
            {/* book */}
            <div
              className="relative [transform-style:preserve-3d]"
              style={{
                // a little bigger than the reference
                // @ts-expect-error custom props
                '--pw': 'min(46vw, 460px)',
                '--ph': 'calc(min(46vw, 460px) * 1.36)',
                width: 'calc(var(--pw) * 2)',
                height: 'var(--ph)',
              }}
            >
              {sheets.map((sheet, i) => {
                const flipped = i < location
                const z = flipped ? i : NUM - i
                return (
                  <div
                    key={i}
                    className="absolute top-0 [transform-style:preserve-3d] transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      left: 'var(--pw)',
                      width: 'var(--pw)',
                      height: 'var(--ph)',
                      transformOrigin: 'left center',
                      transform: `rotateY(${flipped ? -180 : 0}deg)`,
                      zIndex: z,
                    }}
                  >
                    {/* front face (right-hand page) */}
                    <div className="absolute inset-0 overflow-hidden rounded-r-[12px] [backface-visibility:hidden] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.75)]">
                      <BookFace page={sheet.front} side="right" />
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 to-transparent" />
                    </div>
                    {/* back face (becomes the left-hand page once turned) */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-l-[12px] [backface-visibility:hidden] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.75)]"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <BookFace page={sheet.back} side="left" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 to-transparent" />
                    </div>
                  </div>
                )
              })}

              {/* centre spine shadow */}
              <div
                className="pointer-events-none absolute inset-y-0 z-[100] w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/25 to-transparent mix-blend-multiply"
                style={{ left: 'var(--pw)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="flex items-center gap-6 text-neutral-700">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          disabled={!canPrev}
          className="border border-neutral-300 px-5 py-2 text-sm tracking-wide transition-colors hover:bg-[#e99816] hover:text-white hover:border-[#e99816] disabled:cursor-not-allowed disabled:opacity-30"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}
          aria-label="Previous page"
        >
          ← Prev
        </button>
        <span className="w-16 text-center text-sm tabular-nums text-neutral-500" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}>
          {location} / {NUM}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          disabled={!canNext}
          className="border border-neutral-300 px-5 py-2 text-sm tracking-wide transition-colors hover:bg-[#e99816] hover:text-white hover:border-[#e99816] disabled:cursor-not-allowed disabled:opacity-30"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
