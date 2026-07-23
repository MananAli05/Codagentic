'use client'

import { useState, useEffect } from 'react'
import { LatticeBackground } from '@/components/lattice-background'
import { SmoothScroll } from '@/components/smooth-scroll'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { Team } from '@/components/team'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { PrivacyPolicy } from '@/components/privacy-policy'
import { TermsConditions } from '@/components/terms-conditions'
import * as React from 'react'

export default function App() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <SmoothScroll>
      <div className="noise-overlay" />
      <LatticeBackground />
      <SiteNav />
      <main className="relative z-10">
        {currentPath === '/privacy-policy' ? (
          <PrivacyPolicy />
        ) : currentPath === '/terms-conditions' ? (
          <TermsConditions />
        ) : (
          <>
            <Hero />
            <About />
            <Process />
            <Services />
            <Industries />
            <Team />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </SmoothScroll>
  )
}
