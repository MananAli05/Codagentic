'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigate } from '@/lib/router'
import * as React from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

function NavbarLogo({ mobile = false }: { mobile?: boolean }) {
  return (
    <img
      src="/codagentic-logo.png"
      alt="CodAgentic"
      className={mobile ? 'h-10 w-auto object-contain' : 'h-12 w-auto object-contain'}
      draggable={false}
    />
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-background/70 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <a
        href="#top"
        onClick={handleLogoClick}
        className="absolute top-1/2 left-[max(1.5rem,calc((100vw-80rem)/2))] -translate-y-1/2 transition-opacity hover:opacity-90 md:left-[max(3rem,calc((100vw-80rem)/2))]"
        aria-label="CodAgentic home"
      >
        <NavbarLogo />
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12"
      >
        <span className="invisible shrink-0" aria-hidden="true">
          <NavbarLogo />
        </span>

        <div className="hidden items-center gap-1 rounded-full border border-border/40 bg-surface/40 px-2 py-1.5 glass-panel md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-foreground px-6 py-2.5 text-xs font-bold text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            Book a Strategy Call
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-surface md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <a
              href="#top"
              onClick={(e) => {
                handleLogoClick(e)
                setOpen(false)
              }}
              className="flex items-center"
              aria-label="CodAgentic home"
            >
              <NavbarLogo mobile />
            </a>
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-surface"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.href)
                  setOpen(false)
                }}
                className="font-sans text-4xl font-extrabold headline-tight text-foreground transition-colors hover:text-primary"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                handleLinkClick(e, '#contact')
                setOpen(false)
              }}
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}