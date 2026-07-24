'use client'

import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { LineChart, MessageCircle, Mic, Workflow } from 'lucide-react'
import * as THREE from 'three'
import { useModals } from '@/lib/modal-context'
import * as React from 'react'

const technologies = [
  { name: 'OpenAI', logo: '/tech-logos/openai.svg', color: '#10A37F', width: 104 },
  { name: 'Anthropic (Claude)', logo: '/tech-logos/anthropic.svg', color: '#D97757', width: 120 },
  { name: 'Meta', logo: '/tech-logos/meta.svg', color: '#0866FF', width: 100 },
  { name: 'FastAPI', logo: '/tech-logos/fastapi.svg', color: '#009688', width: 112 },
  { name: 'Supabase', logo: '/tech-logos/supabase.svg', color: '#3ECF8E', width: 118 },
  { name: 'LangGraph', logo: '/tech-logos/langgraph.svg', color: '#1FC7A6', width: 118 },
  { name: 'Pinecone', logo: '/tech-logos/pinecone.svg', color: '#00E599', width: 124 },
  { name: 'n8n', logo: '/tech-logos/n8n.svg', color: '#EA4B71', width: 82 },
]

function CyanParticles() {
  const pointsRef = useRef<THREE.Points>(null)

  const { geometry, material } = useMemo(() => {
    const count = 90
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 7
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.5 - 1.4
      color.set(i % 4 === 0 ? '#ffffff' : '#2EAFFF')
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    return {
      geometry: geom,
      material: new THREE.PointsMaterial({
        size: 0.035,
        transparent: true,
        opacity: 0.55,
        vertexColors: true,
        depthWrite: false,
      }),
    }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.018
    pointsRef.current.position.y = Math.sin(t * 0.7) * 0.06
  })

  return <points ref={pointsRef} geometry={geometry} material={material} />
}

function HeroEcosystem() {
  const pointer = useRef({ x: 0, y: 0 })

  return (
    <div
      className="absolute inset-0"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        pointer.current = {
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
          y: -(((event.clientY - rect.top) / rect.height - 0.5) * 2),
        }
        event.currentTarget.style.setProperty('--hero-pointer-x', `${pointer.current.x}`)
        event.currentTarget.style.setProperty('--hero-pointer-y', `${pointer.current.y}`)
      }}
      onPointerLeave={(event) => {
        pointer.current = { x: 0, y: 0 }
        event.currentTarget.style.setProperty('--hero-pointer-x', '0')
        event.currentTarget.style.setProperty('--hero-pointer-y', '0')
      }}
    >
      <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(46,175,255,0.24)_0%,rgba(0,180,204,0.1)_42%,transparent_70%)] blur-2xl" />
      <div className="hero-ai-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="hero-robot-glow pointer-events-none absolute" />

      <Canvas
        className="pointer-events-none absolute inset-0"
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[0, 1.2, 2.4]} intensity={5} color="#2EAFFF" distance={8} />
        <CyanParticles />
      </Canvas>

      <div className="hero-robot-float pointer-events-none absolute inset-0">
        <div className="hero-robot-parallax">
          <img src="/hero.png" alt="AI Robot" className="hero-robot-image" />
        </div>
      </div>

      <div className="hero-orbit-card hero-orbit-chat pointer-events-none absolute">
        <div className="flex items-center justify-between gap-3">
          <span className="hero-orbit-icon"><MessageCircle className="size-4" strokeWidth={1.8} aria-hidden="true" /></span>
          <span className="hero-orbit-status"><span />Connected</span>
        </div>
        <p>AI Chat</p>
      </div>

      <div className="hero-orbit-card hero-orbit-voice pointer-events-none absolute">
        <div className="flex items-center justify-between gap-3">
          <span className="hero-orbit-icon"><Mic className="size-4" strokeWidth={1.8} aria-hidden="true" /></span>
          <span className="hero-orbit-status"><span />Listening</span>
        </div>
        <p>Voice AI</p>
        <div className="hero-orbit-waveform" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => <span key={i} style={{ '--i': i } as React.CSSProperties} />)}
        </div>
      </div>

      <div className="hero-orbit-card hero-orbit-automation pointer-events-none absolute">
        <div className="flex items-center justify-between gap-3">
          <span className="hero-orbit-icon"><Workflow className="size-4" strokeWidth={1.8} aria-hidden="true" /></span>
          <span className="hero-orbit-status"><span />Running</span>
        </div>
        <p>Automation</p>
      </div>

      <div className="hero-orbit-card hero-orbit-analytics pointer-events-none absolute">
        <div className="flex items-center justify-between gap-3">
          <span className="hero-orbit-icon"><LineChart className="size-4" strokeWidth={1.8} aria-hidden="true" /></span>
          <span className="hero-orbit-metric">98.7%</span>
        </div>
        <p>Analytics</p>
        <span className="hero-orbit-caption">Accuracy</span>
      </div>
    </div>
  )
}

// --- MAIN HERO COMPONENT ---

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { openStartProject } = useModals()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '[data-hero-line]',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.1
      )
        .fromTo(
          '[data-hero-sub]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '[data-hero-3d]',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.2)' },
          '-=0.4'
        )
        .fromTo(
          '[data-hero-cta]',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          '[data-hero-stat]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.8'
        )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pt-24 pb-12 sm:px-8 md:px-12 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content + Integrated Mobile Robot */}
        <div className="relative flex flex-col justify-center text-center lg:col-span-6 lg:text-left">
          {/* Background glow directly behind the hero title */}
          <div
            className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-35 lg:left-[30%]"
            style={{
              background:
                'radial-gradient(circle, rgba(46,175,255,0.22) 0%, rgba(0,180,204,0.12) 40%, rgba(73,242,178,0.04) 70%, transparent 100%)',
            }}
          />

          {/* Heading */}
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.02] text-balance mt-2 lg:mt-10">
            <span data-hero-line className="block">Dream It.</span>
            <span data-hero-line className="block mt-1 sm:mt-2">
              We Will <span className="gradient-brand-text">AI It.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-hero-sub
            className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg mx-auto lg:mx-0 text-pretty"
          >
            We build smart AI software, automation systems, chatbots, and business tools that help companies work faster and smarter.
          </p>

          {/* Mobile 3D Robot Container (Visible on mobile/tablet < lg) */}
          <div className="my-5 flex items-center justify-center lg:hidden">
            <div
              data-hero-3d
              className="relative h-[290px] w-full max-w-[360px] sm:h-[380px]"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    'radial-gradient(circle, rgba(46,175,255,0.3) 0%, rgba(73,242,178,0.15) 50%, transparent 70%)',
                }}
              />
              <HeroEcosystem />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-3 sm:mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
            <button
              type="button"
              data-hero-cta
              onClick={() => openStartProject()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-all duration-300 hover:opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              Start a Project
            </button>
            <a
              data-hero-cta
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2EAFFF]/60 bg-[#2EAFFF]/12 px-7 py-3.5 text-sm font-bold text-foreground backdrop-blur-md shadow-[0_0_20px_rgba(46,175,255,0.15)] transition-all duration-300 hover:border-[#2EAFFF] hover:bg-[#2EAFFF]/25 hover:shadow-[0_0_28px_rgba(46,175,255,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Desktop 3D Animation (Visible on lg+) */}
        <div className="hidden items-center justify-center lg:col-span-6 lg:flex">
          <div
            data-hero-3d
            className="relative h-[560px] w-full"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  'radial-gradient(circle, rgba(46,175,255,0.3) 0%, rgba(73,242,178,0.15) 50%, transparent 70%)',
              }}
            />
            <HeroEcosystem />
          </div>
        </div>

        <motion.section
          className="tech-stack-section lg:col-span-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Built with Industry-Leading AI Technologies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We build intelligent AI products using trusted enterprise technologies and modern AI infrastructure.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                className="tech-logo-card"
                style={{ '--brand-color': technology.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="tech-logo-mark"
                  style={{
                    '--logo-url': `url(${technology.logo})`,
                    '--logo-width': `${technology.width}px`,
                  } as React.CSSProperties}
                  role="img"
                  aria-label={`${technology.name} logo`}
                />
                <span className="tech-logo-name">{technology.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
      </div>
    </section>
  )
}