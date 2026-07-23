import { Reveal } from '@/components/reveal'

const industries = [
  {
    title: 'Healthcare',
    desc: 'AI tools for patient support, records, reports, and appointment automation.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
    alt: 'Clinician using a digital healthcare interface',
  },
  {
    title: 'Finance',
    desc: 'AI systems for fraud detection, document analysis, and customer support.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    alt: 'Financial analytics dashboard on a workstation',
  },
  {
    title: 'Education',
    desc: 'AI tutors, learning assistants, and student support systems.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Students using laptops for digital learning',
  },
  {
    title: 'Real Estate',
    desc: 'AI chatbots, lead handling, property search, and client automation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern real estate workspace with property technology',
  },
  {
    title: 'E-commerce',
    desc: 'AI product recommendations, support bots, and order automation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    alt: 'Online shopping and e-commerce operations dashboard',
  },
  {
    title: 'Manufacturing',
    desc: 'AI for process automation, monitoring, and predictive maintenance.',
    image: '/manufacturing.jpg',
    alt: 'Smart manufacturing floor with industrial automation',
  },
]

export function Industries() {
  return (
    <section id="industries" className="relative section-pad px-5 md:px-8">
      <div className="pointer-events-none absolute right-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#00B4CC]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-4xl md:mb-20">
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            Built for the way your industry actually works
          </h2>
        </Reveal>

        <Reveal
          stagger="[data-card]"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {industries.map((industry) => (
            <article
              key={industry.title}
              data-card
              className="group grid h-full min-h-[260px] overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] shadow-[0_20px_64px_rgba(0,0,0,0.26)] glass-panel transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/35 hover:bg-white/[0.06] hover:shadow-[0_28px_86px_rgba(46,175,255,0.13)] sm:grid-cols-[1fr_42%]"
            >
              <div className="flex min-h-[220px] flex-col p-7 md:p-8 lg:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="size-2.5 rounded-full bg-[#2EAFFF] shadow-[0_0_18px_rgba(46,175,255,0.75)] transition-colors duration-300 group-hover:bg-[#49F2B2]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-[#8FEAFF]/24 to-transparent" />
                </div>

                <h3 className="font-sans text-2xl font-extrabold headline-tight text-foreground">
                  {industry.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground/90 md:text-[15px]">
                  {industry.desc}
                </p>

                <a
                  href="#contact"
                  className="mt-auto inline-flex pt-8 text-sm font-semibold text-[#8FEAFF] transition-colors duration-300 hover:text-[#49F2B2]"
                >
                  Learn More <span aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                </a>
              </div>

              <div className="relative min-h-[220px] overflow-hidden border-t border-white/10 sm:border-l sm:border-t-0">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#020912]/15 via-[#020912]/40 to-[#00B4CC]/22 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020912]/65 via-transparent to-[#020912]/20" />
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
