'use client'

/**
 * @author: @emerald-ui
 * @description: Editorial-style team member card with overlapping layers and motion
 * @version: 2.0.0
 * @date: 2026-02-19
 * @license: MIT
 * @website: https://emerald-ui.com
 *
 */
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
}

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://cdn.21st.dev/assets/mirror/17/1714867a87f5bff03a84da4493b98ade811acbd6bd667eb4f9cdd47c64d70f09.jpg',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'
  const [isDarkBackground, setIsDarkBackground] = useState(false)

  useEffect(() => {
    const checkImageBrightness = async () => {
      try {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = imageUrl
        
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data
          
          let totalBrightness = 0
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            totalBrightness += brightness
          }
          
          const avgBrightness = totalBrightness / (data.length / 4)
          setIsDarkBackground(avgBrightness < 128)
        }
      } catch (error) {
        console.error('Error checking image brightness:', error)
      }
    }

    checkImageBrightness()
  }, [imageUrl])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-16 flex flex-col justify-center', className)}
    >
      {/* jobPosition label — editorial uppercase tracking */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/80',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className='flex items-center justify-end'>
        {/* Portrait image with reveal animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[500px] w-[360px] shrink-0 overflow-hidden',
            isPositionRight && 'order-1'
          )}
        >
          {/* Subtle grain overlay for texture */}
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
        </motion.div>

        {/* Info block — overlaps image via negative margin */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative -left-8 z-2 flex w-[calc(100%-350px)] flex-col gap-14 bg-black/80 p-8',
            isPositionRight && 'left-8 items-end'
          )}
        >
          {/* Display name — large editorial type */}
          <div>
            <p 
              className='text-5xl leading-[1.1] font-extralight tracking-tight text-white'
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif' }}
            >
              {firstName}
              <br />
              <span className='font-normal'>{lastName}</span>
            </p>
          </div>

          {/* Details row — toggle + bio */}
          <div className={cn('flex gap-8', isPositionRight && 'justify-end')}>
            {/* Circular CTA with hover pulse */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-colors duration-300 hover:border-white hover:bg-white/20',
                isPositionRight && 'order-1'
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-white transition-all duration-300 group-hover:-rotate-45 group-hover:text-white',
                  isPositionRight && 'rotate-180 group-hover:rotate-225'
                )}
              />
            </motion.div>

            {/* Bio copy — restrained body text */}
            <div className='w-[40%]'>
              <p
                className={cn(
                  'text-sm leading-[1.8] text-white/80',
                  isPositionRight && 'text-right'
                )}
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif', fontWeight: 300 }}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
