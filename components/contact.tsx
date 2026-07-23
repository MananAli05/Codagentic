'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import * as React from 'react'

const inputClass =
  'rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/45 transition-all duration-300 hover:border-cyan-brand/30 focus:border-cyan-brand/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-cyan-brand/20 w-full'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16 overflow-hidden px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid items-stretch gap-8 lg:grid-cols-[4.5fr_5.5fr] lg:gap-12">
          
          <div className="flex flex-col justify-center max-w-xl">
            <h2 className="font-sans text-3xl font-extrabold headline-tight text-foreground md:text-5xl">
              Let's build your AI system
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              Tell us what you want to automate or build. We'll recommend the right AI solution for your business
            </p>
          </div>

          <div className="relative w-full max-w-[500px] lg:max-w-none justify-self-center lg:justify-self-end">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 blur-2xl opacity-60 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 180, 204, 0.15) 0%, transparent 65%)',
              }}
            />

            <div className="rounded-[20px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_82px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] glass-panel md:p-6 mt-24">
              {sent ? (
                <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-cyan-brand/20 bg-cyan-brand/10 text-cyan-brand">
                    <Check className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-sans text-2xl font-extrabold headline-tight text-foreground">
                    Request received
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. We'll review your details and respond with the next step.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/75">
                        Name
                      </label>
                      <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/75">
                        Email
                      </label>
                      <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/75">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell us what you want to automate or build."
                      className={`${inputClass} resize-none leading-relaxed`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full font-extrabold text-sm text-[#020912] bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.06)] hover:bg-gradient-to-r hover:from-white hover:to-[#d0f5fc] hover:shadow-[0_0_24px_rgba(0,180,204,0.25)] hover:-translate-y-[2px] active:translate-y-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Book a Strategy Call
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}