import { Reveal } from '@/components/reveal'
import { ChevronRight, ChevronDown } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep audit of your current workflows, business data, and AI opportunities.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Architectural blueprint, security model, and interface specification.',
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Model integration, RAG pipeline construction, and custom software engineering.',
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'Enterprise deployment, telemetry monitoring, staff training, and continuous tuning.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative px-5 py-20 md:px-8 md:py-32 lg:py-36 border-t border-white/[0.08] bg-[#030d18]/80">
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-[620px] -translate-x-1/2 rounded-full bg-[#00B4CC]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal variant="fade-down" className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#00B4CC]">How We Work</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            A focused path from messy operations to <span className="gradient-brand-text">production AI</span>
          </h2>
        </Reveal>

        <Reveal variant="flip-up" stagger="[data-step]" staggerSpeed={0.12} className="relative">
          {/* Horizontal Connecting Flow Line for Desktop */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-[2px] bg-gradient-to-r from-[#2EAFFF]/20 via-[#49F2B2]/60 to-[#2EAFFF]/20 md:block z-0" />

          <div className="grid gap-8 md:grid-cols-4 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.num}
                data-step
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Circle with Glowing Border */}
                <div className="relative flex items-center justify-center">
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-[#8FEAFF]/40 bg-[#061724] font-mono text-sm font-bold text-[#B8F8FF] shadow-[0_0_20px_rgba(46,175,255,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#49F2B2] group-hover:text-[#49F2B2] group-hover:shadow-[0_0_30px_rgba(73,242,178,0.4)]">
                    {step.num}
                  </span>

                  {/* Flow Arrow Indicator to Next Step (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(100%+0.5rem)] hidden md:flex items-center text-[#49F2B2]/70 group-hover:text-[#49F2B2] transition-colors z-20">
                      <ChevronRight className="size-5 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Card Container */}
                <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 glass-panel transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#2EAFFF]/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_16px_48px_rgba(46,175,255,0.12)]">
                  <h3 className="font-sans text-xl font-extrabold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">{step.desc}</p>
                </div>

                {/* Vertical Flow Arrow Indicator for Mobile */}
                {index < steps.length - 1 && (
                  <div className="mt-4 flex items-center justify-center text-[#49F2B2] md:hidden">
                    <ChevronDown className="size-6 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
