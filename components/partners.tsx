'use client'

import { Reveal } from '@/components/reveal'

const partners = [
  {
    name: 'OpenAI',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7,11.3c0.3-0.5,0.4-1.1,0.2-1.7c-0.2-0.6-0.6-1.1-1.1-1.4l-1.3-0.7c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.8,0.3-1.8-0.3-2.5c-0.6-0.7-1.5-1.1-2.4-0.9L15,4.3c-0.1-0.1-0.2-0.1-0.3-0.2C14.3,3.7,13.7,3.5,13,3.5c-0.6,0-1.3,0.2-1.8,0.5L9.9,4.7C9.8,4.6,9.7,4.6,9.6,4.5C8.8,4.1,7.8,4.2,7.1,4.8C6.4,5.4,6,6.3,6.2,7.2L6.6,8.7c-0.1,0-0.2,0.1-0.3,0.2C5.9,9.3,5.7,9.9,5.7,10.6c0,0.6,0.2,1.3,0.5,1.8L7,13.7C6.9,13.8,6.9,13.9,6.8,14c-0.4,0.8-0.3,1.8,0.3,2.5c0.6,0.7,1.5,1.1,2.4,0.9l2-0.5c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.3,1,0.5,1.7,0.5c0.6,0,1.3-0.2,1.8-0.5l1.3-0.7c0.1,0.1,0.2,0.1,0.3,0.2c0.8,0.4,1.8,0.3,2.5-0.3c0.7-0.6,1.1-1.5,0.9-2.4L20,13.2c0.1,0,0.2-0.1,0.3-0.2C21.4,12.6,21.7,12,21.7,11.3z M13,16.4c-0.2,0-0.4-0.1-0.6-0.2l-1.3-0.7c0,0,0,0,0,0l0,0c-0.4-0.2-0.6-0.6-0.6-1.1v-2.3L13,10.7l2.5,1.4v2.9C15.5,15.7,14.4,16.4,13,16.4z M9.1,14.1c-0.1-0.2-0.1-0.4-0.1-0.6V12c0-0.4,0.2-0.9,0.6-1.1l2-1.2l2.5,1.4V14L11.6,15.5l-2.4-1.4C9.2,14.1,9.1,14.1,9.1,14.1z M10.4,9c0-0.2,0.1-0.4,0.3-0.5l2-1.2c0.4-0.2,0.9-0.2,1.3,0l2,1.2c0.4,0.2,0.6,0.6,0.6,1.1v1.5L14.1,11.7l-2.5-1.4L10.4,9L10.4,9z M16.9,11.5l-2.5-1.4V7.2c0-0.5-0.3-0.9-0.7-1.1l1.3-0.7c0.8-0.5,1.8-0.3,2.4,0.4c0.6,0.7,0.7,1.7,0.2,2.4l-1.1,1.9C16.7,10.6,16.8,11.1,16.9,11.5z M18.5,8.8c0.1,0.2,0.1,0.4,0.1,0.6v1.5c0,0.4-0.2,0.9-0.6,1.1l-2,1.2l-2.5-1.4V9.1L15.9,7.6l2.4,1.4C18.4,8.8,18.5,8.8,18.5,8.8L18.5,8.8z" />
      </svg>
    ),
  },
  {
    name: 'Anthropic',
    logo: (
      <span className="font-sans font-bold tracking-tight text-lg leading-none select-none">
        ANTHROPIC
      </span>
    ),
  },
  {
    name: 'Supabase',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.36 10.98a1.2 1.2 0 00-1.07-.68h-5.96l2.08-6.94a1.2 1.2 0 00-2-.99l-9.6 9.6a1.2 1.2 0 00.85 2.05h5.96l-2.08 6.94a1.2 1.2 0 002.01.99l9.6-9.6a1.2 1.2 0 00.21-1.37z" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    logo: (
      <span className="font-sans font-bold tracking-tight text-lg leading-none select-none">
        aws
      </span>
    ),
  },
  {
    name: 'Vercel',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0L12 1.475L24 22.525Z" />
      </svg>
    ),
  },
]

export function Partners() {
  return (
    <section className="relative border-y border-border/40 bg-surface/10 py-10 px-5 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-center justify-center">

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground/60">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-1.5 transition-all duration-300 hover:text-foreground hover:scale-105"
                title={partner.name}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

