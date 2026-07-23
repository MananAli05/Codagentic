'use client'

import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import * as React from 'react'

const HealthTechLogo = () => (
  <div className="flex items-center gap-1.5 text-cyan-brand">
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
    <span className="font-sans text-[11px] font-extrabold tracking-wider text-foreground uppercase">HealthTech</span>
  </div>
)

const ManufactureProLogo = () => (
  <div className="flex items-center gap-1.5 text-cyan-brand">
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
    <span className="font-sans text-[11px] font-extrabold tracking-wider text-foreground uppercase">ManufacturePro</span>
  </div>
)

const RetailFlowLogo = () => (
  <div className="flex items-center gap-1.5 text-cyan-brand">
    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M17 17H6V3H4" />
      <path d="m6 5 14 1-1 7H6" />
    </svg>
    <span className="font-sans text-[11px] font-extrabold tracking-wider text-foreground uppercase">RetailFlow</span>
  </div>
)

const reviews = [
  {
    name: 'Ayesha Khan',
    title: 'CTO • HealthTech Inc',
    logo: <HealthTechLogo />,
    quote: 'CodAgentic automated our patient support workflow and reduced manual work by over 60%. The team delivered exactly what they promised.',
  },
  {
    name: 'Michael Chen',
    title: 'Operations Director • ManufacturePro',
    logo: <ManufactureProLogo />,
    quote: 'We replaced repetitive internal processes with AI automation. Deployment was smooth and the productivity gains were immediate.',
  },
  {
    name: 'Sarah Johnson',
    title: 'Founder • RetailFlow',
    logo: <RetailFlowLogo />,
    quote: 'The AI chatbot and automation system significantly improved customer response time while reducing operational costs.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad overflow-hidden px-5 md:px-8">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute left-[-12%] top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[#2EAFFF]/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-3xl md:mb-16">
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            Trusted by teams building with AI
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Businesses use CodAgentic to automate operations, build AI products, and deploy intelligent software.
          </p>
        </Reveal>

        {/* 3 equal cards side-by-side in a responsive grid layout */}
        <Reveal
          stagger="[data-testimonial-card]"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              data-testimonial-card
              className="group relative flex flex-col w-full max-w-[370px] h-[270px] rounded-[24px] border border-white/[0.08] bg-[#070d19]/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 ease-out hover:border-cyan-brand/40 hover:bg-[#070d19]/55 hover:-translate-y-2"
            >
              {/* Top Row: Logo & Stars */}
              <div className="flex items-center justify-between">
                {review.logo}
                
                <div className="flex gap-0.5 text-accent/90" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Client details: name and title */}
              <div className="mt-4">
                <h3 className="font-sans text-lg font-bold text-foreground leading-tight">
                  {review.name}
                </h3>
                <p className="mt-0.5 font-sans text-xs text-muted-foreground/85">
                  {review.title}
                </p>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="mt-3.5 text-sm leading-relaxed text-muted-foreground italic line-clamp-3">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Bottom Row: Divider, Accent Line, and Badge */}
              <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div className="h-0.5 w-6 rounded bg-cyan-brand" />
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-accent uppercase tracking-wider select-none">
                  <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
                  Verified Client
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}