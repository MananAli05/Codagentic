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
    <section id="team" className="relative section-pad overflow-hidden px-5 md:px-8 border-t border-white/[0.08] bg-[#020a12]/80">
      <div className="pointer-events-none absolute left-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#2EAFFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] bottom-16 -z-10 h-[320px] w-[320px] rounded-full bg-[#49F2B2]/8 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8FEAFF]">Leadership & Engineering</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            The people behind the systems
          </h2>
        </Reveal>

        {/* Domain-style Cards Grid */}
        <Reveal
          stagger="[data-team-card]"
          staggerSpeed={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-14 max-w-5xl mx-auto"
        >
          {/* Card 1: Founder */}
          <article
            data-team-card
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-lg glass-panel transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/40 hover:bg-white/[0.07]"
          >
            {/* Image Frame - domain card style aspect ratio */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#06111f]">
              <img
                src="/mustafa.png"
                alt="Mustafa Shoukat"
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-1.05"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e19]/70 via-transparent to-transparent" />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8FEAFF]">
                Founder
              </span>
              <h3 className="mt-1 font-sans text-xl font-extrabold text-foreground group-hover:text-[#8FEAFF] transition-colors">
                Mustafa Shoukat
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                Focused on AI automation, intelligent software architecture, and production-ready enterprise solutions.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/mustafashoukat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:border-[#2EAFFF]/40 hover:bg-[#2EAFFF]/10 hover:text-[#8FEAFF]"
                >
                  <LinkedinIcon className="size-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Mustafa-Shoukat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:border-[#2EAFFF]/40 hover:bg-[#2EAFFF]/10 hover:text-[#8FEAFF]"
                >
                  <GithubIcon className="size-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: AI Engineering Team */}
          <article
            data-team-card
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-lg glass-panel transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/40 hover:bg-white/[0.07]"
          >
            {/* Image Frame - domain card style aspect ratio with real high quality team image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#06111f]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="AI Development Team working together"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-1.05"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e19]/70 via-transparent to-transparent" />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8FEAFF]">
                Engineering Team
              </span>
              <h3 className="mt-1 font-sans text-xl font-extrabold text-foreground group-hover:text-[#8FEAFF] transition-colors">
                AI Development Team
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                Creating AI-powered applications, autonomous agents, chatbots, and custom automation infrastructure.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}