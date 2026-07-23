import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import * as React from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export function Team() {
  return (
    <section id="team" className="relative section-pad overflow-hidden px-5 md:px-8">
      {/* Decorative background blurs */}
      <div className="pointer-events-none absolute left-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#2EAFFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] bottom-16 -z-10 h-[320px] w-[320px] rounded-full bg-[#49F2B2]/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-4xl md:mb-20">
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            The people behind the systems
          </h2>
        </Reveal>

        {/* 2-column grid centered, with cards of equal dimensions */}
        <Reveal
          stagger="[data-team-card]"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 justify-items-center max-w-5xl mx-auto"
        >
          {/* Card 1: Founder */}
          <article
            data-team-card
            className="group relative flex flex-col overflow-hidden rounded-[24px] w-full max-w-[440px] h-[570px] border border-white/[0.08] bg-[#070d19]/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-cyan-brand/40 hover:bg-[#070d19]/55 hover:shadow-[0_8px_30px_rgba(0,180,204,0.1)]"
          >
            {/* Image container: exactly 320px height */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-t-[24px] bg-[#020912]">
              <img
                src="/mustafa.png"
                alt="Mustafa Shoukat"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Dark gradient overlay at the bottom of image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#070d19] to-transparent opacity-90" />
            </div>

            {/* Content area: flex-1 to push CTA buttons to the bottom */}
            <div className="relative z-10 flex flex-1 flex-col p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-brand/80">
                Founder
              </span>
              <h3 className="mt-2.5 font-sans text-2xl font-extrabold text-foreground">
                Mustafa Shoukat
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent/90">
                Founder, CodAgentic AI
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Founder of CodAgentic AI, focused on AI automation, intelligent software, and production-ready business solutions.
              </p>

              {/* Align buttons to the bottom of the card */}
              <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
                <a
                  href="https://www.linkedin.com/in/mustafashoukat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-cyan-brand/40 hover:bg-cyan-brand/10 hover:text-cyan-brand"
                >
                  <LinkedinIcon className="size-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Mustafa-Shoukat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-cyan-brand/40 hover:bg-cyan-brand/10 hover:text-cyan-brand"
                >
                  <GithubIcon className="size-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Engineering */}
          <article
            data-team-card
            className="group relative flex flex-col overflow-hidden rounded-[24px] w-full max-w-[440px] h-[570px] border border-white/[0.08] bg-[#070d19]/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-cyan-brand/40 hover:bg-[#070d19]/55 hover:shadow-[0_8px_30px_rgba(0,180,204,0.1)]"
          >
            {/* Image container: exactly 320px height */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-t-[24px] bg-[#020912]">
              <img
                src="/ai-development-team.jpg"
                alt="AI Development Team collaborating in a modern workspace"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Dark gradient overlay at the bottom of image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#070d19] to-transparent opacity-90" />
            </div>

            {/* Content area: flex-1 to push CTA buttons to the bottom */}
            <div className="relative z-10 flex flex-1 flex-col p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-brand/80">
                Engineering
              </span>
              <h3 className="mt-2.5 font-sans text-2xl font-extrabold text-foreground">
                AI Development Team
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent/90">
                Custom AI Solutions
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A team creating AI-powered websites, AI agents, chatbots, automation systems, and custom business software for growing companies.
              </p>

              {/* Align button to the bottom of the card, matching Card 1's alignment */}
              <div className="mt-auto pt-4">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-cyan-brand/40 hover:bg-cyan-brand/10 hover:text-cyan-brand"
                >
                  Meet the Team
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}