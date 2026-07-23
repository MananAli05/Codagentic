'use client'

import { Reveal } from '@/components/reveal'
import * as React from 'react'

const features = ['AI Strategy', 'AI Development', 'Workflow Automation', 'AI Integration']

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden px-5 md:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 204, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2 className="font-sans text-4xl font-extrabold headline-tight text-foreground md:text-6xl text-balance">
            We turn messy workflows into structured <span className="gradient-brand-text">AI systems</span>
          </h2>

          <p className="mt-8 text-base md:text-lg leading-[1.8] text-muted-foreground max-w-3xl mx-auto">
            CodAgentic AI helps businesses replace repetitive work with intelligent software. We design, build, and deploy AI systems that automate operations, integrate with existing tools, and scale with your business
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 max-w-xs mx-auto sm:grid-cols-2 sm:max-w-xl">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 transition-all duration-300 hover:border-cyan-brand/35 hover:bg-white/[0.06]"
              >
                <span className="size-2 rounded-full bg-cyan-brand shadow-[0_0_12px_rgba(0,180,204,0.6)]" />
                <span className="text-sm font-semibold text-foreground/90 tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
