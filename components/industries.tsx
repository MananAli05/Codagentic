'use client'

import { Reveal } from '@/components/reveal'
import { useModals, IndustryDetail } from '@/lib/modal-context'

const industries: IndustryDetail[] = [
  {
    title: 'Healthcare',
    desc: 'AI tools for patient support, records, reports, and appointment automation.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    alt: 'Clinician using digital healthcare tools in a modern medical setting',
    overview: 'Transform healthcare operational efficiency with HIPAA-aware AI assistants. We build intake bots, patient triage workflows, clinical report summarizers, and automated appointment scheduling systems.',
    useCases: [
      'Automated patient intake & symptom pre-screening',
      'EHR & clinical transcript summarization',
      'Insurance pre-authorization & billing document parsing',
      '24/7 patient portal Q&A chatbot',
    ],
    keyBenefits: [
      'Reduces clinician charting time by 45%',
      'Eliminates appointment scheduling bottlenecks',
      'Zero error rate in document data extraction',
    ],
    complianceNote: 'All healthcare AI architectures strictly adhere to HIPAA data processing standards, encrypted data transit (TLS 1.3), and zero data-retention model endpoints.',
  },
  {
    title: 'Finance',
    desc: 'AI systems for fraud detection, document analysis, and customer support.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
    alt: 'Financial analyst discussing AI data insights in a modern office',
    overview: 'Accelerate financial decision-making with automated invoice processing, real-time fraud pattern detection, automated earnings report analysis, and wealth advisory chatbots.',
    useCases: [
      'Automated invoice & receipt parsing with OCR + LLMs',
      'Fraud anomaly detection in transaction streams',
      'Regulatory compliance document auditing',
      'Client onboarding & KYC document extraction',
    ],
    keyBenefits: [
      '95%+ speedup in invoice processing time',
      'Automated flagging of compliance anomalies',
      '24/7 instant client inquiry response',
    ],
    complianceNote: 'Built with SOC2 Type II audit readiness, bank-grade AES-256 field-level encryption, and strict audit logging.',
  },
  {
    title: 'Education',
    desc: 'AI tutors, learning assistants, and student support systems.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Students using digital learning platforms together',
    overview: 'Empower educational institutions and EdTech platforms with personalized 24/7 AI tutors, automated assignment grading assistants, and student enrollment bots.',
    useCases: [
      'Interactive AI tutors tailored to course syllabi',
      'Automated assignment feedback & rubric evaluation',
      'Student enrollment & campus directory bot',
      'Multilingual learning assistants',
    ],
    keyBenefits: [
      'Provides personalized 1-on-1 tutoring at scale',
      'Saves educators 10+ hours per week on grading',
      'Increases student course completion rates',
    ],
    complianceNote: 'Compliant with FERPA guidelines for student privacy and data protection.',
  },
  {
    title: 'Real Estate',
    desc: 'AI chatbots, lead handling, property search, and client automation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    alt: 'Real estate professional presenting property insights digitally',
    overview: 'Supercharge real estate agencies and platforms with instant lead qualification bots, intelligent property matching, automated tour scheduling, and lease agreement analysis.',
    useCases: [
      '24/7 inbound property lead qualification on WhatsApp & Web',
      'Natural language property search & recommendation engine',
      'Automated tour scheduling & calendar syncing',
      'Lease document parsing & clause extraction',
    ],
    keyBenefits: [
      'Capture 100% of off-hours inbound buyer leads',
      'Instant property brochure & specs delivery',
      'Reduces agent response time from hours to seconds',
    ],
    complianceNote: 'Includes full audit history for all buyer communication and automated consent handling.',
  },
  {
    title: 'E-commerce',
    desc: 'AI product recommendations, support bots, and order automation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    alt: 'Customer engaging with digital retail experience',
    overview: 'Drive higher conversion and lower support overhead with conversational shopping concierges, dynamic product recommendation agents, and automated order status tracking.',
    useCases: [
      'Conversational AI shopping assistant & size advisor',
      'Automated WISMO (Where Is My Order) status lookup',
      'Dynamic AI product description & marketing generator',
      'Automated return & exchange request handling',
    ],
    keyBenefits: [
      'Reduces support ticket volume by up to 60%',
      'Increases average order value (AOV) via smart upsells',
      '24/7 multilingual shopper assistance',
    ],
    complianceNote: 'Fully GDPR compliant with customer data privacy controls and secure platform integrations (Shopify, WooCommerce, Magento).',
  },
  {
    title: 'Manufacturing',
    desc: 'AI for process automation, monitoring, and predictive maintenance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    alt: 'Automation engineer inspecting smart factory floor with tablet',
    overview: 'Bridge shop-floor operations with intelligent AI reporting. We build predictive maintenance log analyzers, inventory anomaly detection, and automated safety compliance reporting tools.',
    useCases: [
      'Predictive maintenance log analysis & component risk scoring',
      'Supply chain inventory anomaly detection',
      'Automated safety inspection report generation',
      'Floor manager voice-to-text operational logging',
    ],
    keyBenefits: [
      'Prevents costly unplanned machinery downtime',
      'Accelerates shift log reporting',
      'Optimizes supply chain re-order points',
    ],
    complianceNote: 'Designed for air-gapped or hybrid cloud deployment on industrial control networks.',
  },
]

export function Industries() {
  const { openIndustryDetail } = useModals()

  return (
    <section id="industries" className="relative section-pad px-5 md:px-8 border-t border-white/[0.08] bg-[#020a12]/80">
      <div className="pointer-events-none absolute right-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#00B4CC]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Reveal variant="fade-up" className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8FEAFF]">Domain Expertise</p>
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            Built for the way your industry actually works
          </h2>
        </Reveal>

        <Reveal
          variant="slide-left"
          stagger="[data-card]"
          staggerSpeed={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <article
              key={industry.title}
              data-card
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-lg glass-panel transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/40 hover:bg-white/[0.07]"
            >
              {/* Image Frame - Clear, crisp, and high-visibility */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#06111f]">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-1.05"
                />
                {/* Subtle bottom shadow gradient to elevate title contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e19]/70 via-transparent to-transparent" />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-sans text-lg font-extrabold text-foreground group-hover:text-[#8FEAFF] transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                  {industry.desc}
                </p>

                <button
                  type="button"
                  onClick={() => openIndustryDetail(industry)}
                  className="mt-auto inline-flex pt-5 text-xs font-bold text-[#8FEAFF] transition-colors duration-300 hover:text-[#49F2B2] cursor-pointer text-left"
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
