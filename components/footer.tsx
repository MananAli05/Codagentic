'use client'

import { navigate } from '@/lib/router'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020912]/80 backdrop-blur-md px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a
            href="#top"
            className="transition-opacity hover:opacity-90 w-fit block"
          >
            <img src="/codagentic-logo.png" alt="CodAgentic AI" className="h-6 w-auto select-none" />
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-muted-foreground transition-colors duration-300 hover:text-cyan-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-white/[0.06] w-full" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="mailto:info@codagenticai.com" className="hover:text-cyan-brand transition-colors duration-300">
              Email: info@codagenticai.com
            </a>
            <a href="tel:+923126938208" className="hover:text-cyan-brand transition-colors duration-300">
              Phone: +92 312 6938208
            </a>
            <span>Location: Rahim Yar Khan, Punjab, Pakistan</span>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] w-full" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] text-muted-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} CodAgentic AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span 
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-cyan-brand transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </span>
            <span 
              onClick={() => navigate('/terms-conditions')}
              className="hover:text-cyan-brand transition-colors duration-300 cursor-pointer"
            >
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

