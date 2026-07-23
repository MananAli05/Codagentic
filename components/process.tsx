import { Reveal } from '@/components/reveal'

const steps = ['Discovery', 'Design', 'Develop', 'Deploy']

export function Process() {
  return (
    <section id="process" className="relative px-5 pb-16 md:px-8 md:pb-32 lg:pb-40">
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-[620px] -translate-x-1/2 rounded-full bg-[#00B4CC]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl border-t border-white/10 pt-16 md:pt-24">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#00B4CC]">How We Work</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            A focused path from messy operations to <span className="gradient-brand-text">production AI</span>
          </h2>
        </Reveal>

        <Reveal stagger="[data-step]" className="relative">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-[#8FEAFF]/35 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step}
                data-step
                className="group relative flex items-center gap-5 md:flex-col md:items-center md:text-center"
              >
                <div className="absolute left-6 top-12 bottom-[-2rem] w-px bg-[#8FEAFF]/18 last:hidden md:hidden" />
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-[#8FEAFF]/25 bg-[#061724]/80 font-mono text-xs font-bold text-[#B8F8FF] shadow-[0_0_0_8px_rgba(0,0,0,0.34),0_0_26px_rgba(46,175,255,0.12)] glass-panel transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#49F2B2]/55 group-hover:text-[#49F2B2] group-hover:shadow-[0_0_0_8px_rgba(0,0,0,0.34),0_0_34px_rgba(73,242,178,0.18)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 glass-panel transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2EAFFF]/30 group-hover:bg-white/[0.055] md:w-full">
                  <h3 className="font-sans text-lg font-bold text-foreground">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
