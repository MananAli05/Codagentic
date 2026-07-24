'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'zoom-in'
  | 'slide-right'
  | 'slide-left'
  | 'flip-up'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Selector for staggered children; if omitted the wrapper itself animates */
  stagger?: string
  delay?: number
  variant?: AnimationVariant
  staggerSpeed?: number
}

export function Reveal({
  children,
  className,
  stagger,
  delay = 0,
  variant = 'fade-up',
  staggerSpeed = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const targets = stagger
      ? Array.from(el.querySelectorAll(stagger))
      : [el]
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      let fromVars: gsap.TweenVars = { opacity: 0 }
      let toVars: gsap.TweenVars = {
        opacity: 1,
        duration: 0.85,
        delay,
        stagger: staggerSpeed,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }

      switch (variant) {
        case 'zoom-in':
          fromVars = { opacity: 0, scale: 0.88, y: 24 }
          toVars = { ...toVars, scale: 1, y: 0, ease: 'back.out(1.3)' }
          break
        case 'slide-right':
          fromVars = { opacity: 0, x: -45 }
          toVars = { ...toVars, x: 0, ease: 'power3.out' }
          break
        case 'slide-left':
          fromVars = { opacity: 0, x: 45 }
          toVars = { ...toVars, x: 0, ease: 'power3.out' }
          break
        case 'flip-up':
          fromVars = { opacity: 0, rotateX: 28, y: 32 }
          toVars = { ...toVars, rotateX: 0, y: 0, ease: 'power3.out' }
          break
        case 'fade-down':
          fromVars = { opacity: 0, y: -36 }
          toVars = { ...toVars, y: 0, ease: 'power3.out' }
          break
        case 'fade-up':
        default:
          fromVars = { opacity: 0, y: 38 }
          toVars = { ...toVars, y: 0, ease: 'power3.out' }
          break
      }

      gsap.fromTo(targets, fromVars, toVars)
    }, el)

    return () => ctx.revert()
  }, [stagger, delay, variant, staggerSpeed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
