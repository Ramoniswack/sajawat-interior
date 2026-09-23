'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Youtube, Instagram, Twitter, X } from 'lucide-react'

const config = {
  speed: 1,
  zoom: 1,
  rotation: 0,
  spread: 38,
  spawnSpeed: 5,
  cardZoom: 11,
  blur: 0,
  lifetime: 5,
  maxCards: 30,
  privacy: true,
  highlight: false,
  theme: 'dark',
  borderRadius: 12,
  platYT: true,
  platIG: true,
  platTT: true,
  platX: true,
  pool: [
    "How did you even make this? Insane! 🚀",
    "The comment section turned into a queue lol",
    "Is this editing or real footage? 🔥",
    "Drop a tutorial please!"
  ],
  color: "#FFFFFF",
  colorMode: "solid"
}

interface Comment {
  id: number
  text: string
  platform: 'yt' | 'ig' | 'tt' | 'x'
  x: number
  y: number
  rotation: number
  scale: number
}

export function CommentRain() {
  const [comments, setComments] = useState<Comment[]>([])
  const [nextId, setNextId] = useState(0)

  const platforms = [
    { key: 'yt' as const, icon: Youtube, color: '#FF0000' },
    { key: 'ig' as const, icon: Instagram, color: '#E1306C' },
    { key: 'tt' as const, icon: Twitter, color: '#000000' },
    { key: 'x' as const, icon: X, color: '#000000' }
  ]

  const activePlatforms = platforms.filter(p => {
    if (p.key === 'yt') return config.platYT
    if (p.key === 'ig') return config.platIG
    if (p.key === 'tt') return config.platTT
    if (p.key === 'x') return config.platX
    return false
  })

  useEffect(() => {
    const spawnComment = () => {
      if (comments.length >= config.maxCards) return

      const platform = activePlatforms[Math.floor(Math.random() * activePlatforms.length)]
      const text = config.pool[Math.floor(Math.random() * config.pool.length)]

      const newComment: Comment = {
        id: nextId,
        text,
        platform: platform.key,
        x: Math.random() * 80 + 10, // 10-90% of screen width
        y: -100,
        rotation: (Math.random() - 0.5) * config.rotation * 2,
        scale: config.zoom
      }

      setComments(prev => [...prev, newComment])
      setNextId(prev => prev + 1)

      // Remove comment after lifetime
      setTimeout(() => {
        setComments(prev => prev.filter(c => c.id !== newComment.id))
      }, config.lifetime * 1000)
    }

    const interval = setInterval(spawnComment, 1000 / config.spawnSpeed)

    return () => clearInterval(interval)
  }, [comments.length, nextId, activePlatforms])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <AnimatePresence>
        {comments.map((comment) => {
          const platform = platforms.find(p => p.key === comment.platform)
          const Icon = platform?.icon || Youtube

          return (
            <motion.div
              key={comment.id}
              initial={{
                y: -100,
                x: comment.x + '%',
                rotation: comment.rotation,
                scale: comment.scale,
                opacity: 0
              }}
              animate={{
                y: '110vh',
                x: comment.x + '%',
                rotation: comment.rotation,
                scale: comment.scale,
                opacity: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.5
              }}
              transition={{
                duration: config.lifetime,
                ease: 'linear'
              }}
              className="absolute"
              style={{
                filter: config.blur > 0 ? `blur(${config.blur}px)` : 'none'
              }}
            >
              <div
                className="relative flex items-center gap-2 px-4 py-2"
                style={{
                  backgroundColor: config.theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
                  borderRadius: config.borderRadius + 'px',
                  color: config.color,
                  fontSize: '14px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  maxWidth: '200px',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                {config.privacy && (
                  <Icon
                    size={16}
                    style={{ color: platform?.color || '#fff' }}
                  />
                )}
                {config.privacy ? '•••' : comment.text}
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
