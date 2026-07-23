'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Selector for staggered children; if omitted the wrapper itself animates */
  stagger?: string
  delay?: number
}

export function Reveal({ children, className, stagger, delay = 0 }: RevealProps) {
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
      gsap.fromTo(
        targets,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay,
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [stagger, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
