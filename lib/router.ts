export function navigate(to: string) {
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function scrollToSection(hash: string) {
  if (typeof window === 'undefined') return
  const id = hash.startsWith('#') ? hash : `#${hash}`

  if (id === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.history.replaceState(null, '', window.location.pathname)
    return
  }

  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    // Clear/clean the hash from URL so it doesn't stay stuck on refresh
    window.history.replaceState(null, '', window.location.pathname)
  }
}
