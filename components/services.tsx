'use client'

import { Reveal } from '@/components/reveal'

const services = [
  {
    visual: 'generative',
    num: '01',
    title: 'Generative AI Integration',
    hook: 'Bespoke models, not generic prompts.',
    desc: 'Custom-tailored generative pipelines for content generation, image generation, data parsing, and business operations.',
  },
  {
    visual: 'rag',
    num: '02',
    title: 'RAG Applications',
    hook: 'Your private databases, talking back.',
    desc: 'Secure vector search systems connecting large language models to your company databases, wiki docs, and internal knowledge bases.',
  },
  {
    visual: 'automation',
    num: '03',
    title: 'AI Process Automation',
    hook: 'Retire manual, repetitive tasks.',
    desc: 'Automating high-volume business workflows, document processing pipelines, automated email routing, and data cleaning loops.',
  },
  {
    visual: 'chatbot',
    num: '04',
    title: 'Custom AI Chatbots',
    hook: 'Customer service, trained on your data.',
    desc: 'Dynamic customer support bots and sales assistants that live on your website and support channels, keeping your voice consistent.',
  },
  {
    visual: 'copilot',
    num: '05',
    title: 'AI Copilots & Assistants',
    hook: 'Amplify employee performance.',
    desc: 'Intelligent interface companions that assist your operational team in real-time, built directly into your legacy software workflows.',
  },
  {
    visual: 'training',
    num: '06',
    title: 'LLM Tuning & Training',
    hook: 'Domain-specific model intelligence.',
    desc: 'Fine-tuning open-weight models (Llama, Mistral, Qwen) on your proprietary datasets to achieve deep domain specialization.',
  },
  {
    visual: 'agents',
    num: '07',
    title: 'Autonomous AI Agents',
    hook: 'Multi-agent coordination loops.',
    desc: 'Intelligent systems capable of reasoning, tool usage, APIs interaction, and long-term planning with LangGraph frameworks.',
  },
  {
    visual: 'api',
    num: '08',
    title: 'Enterprise API Integration',
    hook: 'Bridges to legacy environments.',
    desc: 'Secure integrations connecting advanced AI agents to traditional CRM, ERP databases, billing models, and server infrastructure.',
  },
]

function ServiceVisual({ type }: { type: string }) {
  const gradients = {
    fill: `svc-fill-${type}`,
    face: `svc-face-${type}`,
    cyan: `svc-cyan-${type}`,
    green: `svc-green-${type}`,
    glow: `svc-glow-${type}`,
    shadow: `svc-shadow-${type}`,
  }

  const base = (
    <>
      <ellipse cx="120" cy="170" rx="82" ry="22" fill="#000" opacity="0.22" />
      <path d="M51 131 L120 92 L189 131 L120 171 Z" fill={`url(#${gradients.fill})`} stroke="#8FEAFF" strokeOpacity="0.22" />
      <path d="M51 131 L51 151 L120 191 L120 171 Z" fill="#05131F" />
      <path d="M189 131 L189 151 L120 191 L120 171 Z" fill="#092235" />
    </>
  )

  const visuals: Record<string, React.ReactNode> = {
    generative: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M86 96 L120 76 L154 96 L120 116 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M86 96 L86 125 L120 146 L120 116 Z" fill="#061724" />
          <path d="M154 96 L154 125 L120 146 L120 116 Z" fill="#0A2638" />
          <path d="M107 99 C114 91 127 91 134 99 C127 107 114 107 107 99Z" fill="#8FEAFF" opacity="0.2" stroke="#8FEAFF" strokeWidth="2" />
          <circle cx="120" cy="100" r="8" fill={`url(#${gradients.green})`} />
        </g>
      </>
    ),
    rag: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M82 82 L123 58 L164 82 L123 106 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M82 82 L82 128 L123 152 L123 106 Z" fill="#061724" />
          <path d="M164 82 L164 128 L123 152 L123 106 Z" fill="#0A2638" />
          <path d="M104 84 L123 73 L142 84 M100 99 L123 86 L146 99 M100 114 L123 101 L146 114" stroke="#8FEAFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
          <circle cx="157" cy="128" r="17" fill="#061724" stroke={`url(#${gradients.green})`} strokeWidth="3" />
          <path d="M169 140 L181 152" stroke="#49F2B2" strokeWidth="5" strokeLinecap="round" />
        </g>
      </>
    ),
    automation: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M78 88 L104 73 L130 88 L104 103 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M132 114 L158 99 L184 114 L158 129 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.green})`} strokeWidth="2" />
          <path d="M58 124 L84 109 L110 124 L84 139 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M115 94 C131 93 141 98 150 108 M146 126 C131 139 110 139 94 130" fill="none" stroke="#8FEAFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
        </g>
      </>
    ),
    chatbot: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M74 86 L132 53 L183 83 L126 117 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M74 86 L74 123 L126 154 L126 117 Z" fill="#061724" />
          <path d="M183 83 L183 119 L126 154 L126 117 Z" fill="#0A2638" />
          <path d="M92 88 L130 66 L164 86 L126 109 Z" fill="#8FEAFF" opacity="0.13" />
          <circle cx="111" cy="87" r="4" fill="#49F2B2" />
          <circle cx="128" cy="78" r="4" fill="#8FEAFF" />
          <circle cx="145" cy="87" r="4" fill="#49F2B2" />
        </g>
      </>
    ),
    copilot: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M83 111 C89 76 151 76 157 111 L120 133 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.green})`} strokeWidth="2" />
          <circle cx="120" cy="80" r="24" fill="#071B2A" stroke={`url(#${gradients.cyan})`} strokeWidth="3" />
          <path d="M103 116 L120 106 L137 116 L120 126 Z" fill="#8FEAFF" opacity="0.22" />
          <path d="M166 67 L185 56 M170 85 L196 85 M162 102 L181 116" stroke="#8FEAFF" strokeWidth="3" strokeLinecap="round" opacity="0.78" />
        </g>
      </>
    ),
    training: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M82 82 L120 60 L158 82 L120 104 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M82 82 L82 127 L120 149 L120 104 Z" fill="#061724" />
          <path d="M158 82 L158 127 L120 149 L120 104 Z" fill="#0A2638" />
          <path d="M105 88 L120 79 L135 88 L120 97 Z" fill={`url(#${gradients.green})`} />
          <path d="M120 39 V60 M120 149 V171 M59 94 L82 94 M158 94 L181 94 M75 55 L91 72 M149 116 L166 133 M166 55 L149 72 M91 116 L75 133" stroke="#8FEAFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>
      </>
    ),
    agents: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <circle cx="120" cy="99" r="18" fill={`url(#${gradients.green})`} />
          <circle cx="78" cy="82" r="13" fill="#071B2A" stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <circle cx="163" cy="82" r="13" fill="#071B2A" stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <circle cx="88" cy="136" r="13" fill="#071B2A" stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <circle cx="153" cy="136" r="13" fill="#071B2A" stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M91 88 L106 96 M150 88 L135 96 M99 128 L108 112 M142 128 L132 112" stroke="#8FEAFF" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
        </g>
      </>
    ),
    api: (
      <>
        {base}
        <g filter={`url(#${gradients.shadow})`}>
          <path d="M76 81 L120 56 L164 81 L120 106 Z" fill={`url(#${gradients.face})`} stroke={`url(#${gradients.cyan})`} strokeWidth="2" />
          <path d="M76 81 L76 112 L120 137 L120 106 Z" fill="#061724" />
          <path d="M164 81 L164 112 L120 137 L120 106 Z" fill="#0A2638" />
          <path d="M88 119 L120 101 L152 119 L120 138 Z" fill="#061724" stroke={`url(#${gradients.green})`} strokeWidth="2" />
          <path d="M63 118 H84 M156 118 H177 M120 137 V162" stroke="#8FEAFF" strokeWidth="3" strokeLinecap="round" opacity="0.74" />
          <circle cx="63" cy="118" r="6" fill="#49F2B2" />
          <circle cx="177" cy="118" r="6" fill="#49F2B2" />
          <circle cx="120" cy="162" r="6" fill="#49F2B2" />
        </g>
      </>
    ),
  }

  return (
    <svg
      className="h-full w-full overflow-visible transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      viewBox="0 0 240 210"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradients.fill} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#102B40" />
          <stop offset="1" stopColor="#04121D" />
        </linearGradient>
        <linearGradient id={gradients.face} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#183B54" />
          <stop offset="0.55" stopColor="#082033" />
          <stop offset="1" stopColor="#03101A" />
        </linearGradient>
        <linearGradient id={gradients.cyan} x1="0" x2="1">
          <stop stopColor="#8FEAFF" />
          <stop offset="1" stopColor="#2EAFFF" />
        </linearGradient>
        <linearGradient id={gradients.green} x1="0" x2="1">
          <stop stopColor="#49F2B2" />
          <stop offset="1" stopColor="#00B4CC" />
        </linearGradient>
        <radialGradient id={gradients.glow} cx="50%" cy="45%" r="62%">
          <stop stopColor="#2EAFFF" stopOpacity="0.34" />
          <stop offset="0.64" stopColor="#00B4CC" stopOpacity="0.11" />
          <stop offset="1" stopColor="#00B4CC" stopOpacity="0" />
        </radialGradient>
        <filter id={gradients.shadow} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#000000" floodOpacity="0.34" />
        </filter>
      </defs>
      <circle cx="120" cy="105" r="92" fill={`url(#${gradients.glow})`} />
      {visuals[type]}
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="relative section-pad px-5 md:px-8">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2EAFFF]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-3xl md:mb-20">
          <h2 className="font-sans text-3xl font-extrabold headline-tight text-balance md:text-5xl">
            AI solutions and real-world software, <span className="gradient-brand-text">engineered for scale</span>
          </h2>
        </Reveal>

        <Reveal
          stagger="[data-card]"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr"
        >
          {services.map((service) => (
            <article
              key={service.num}
              data-card
              className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] shadow-[0_18px_58px_rgba(0,0,0,0.25)] glass-panel transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2EAFFF]/35 hover:bg-white/[0.06] hover:shadow-[0_26px_80px_rgba(46,175,255,0.14)]"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-[#03111C]/45 px-8 py-7">
                <div className="pointer-events-none absolute inset-x-10 bottom-4 h-24 rounded-full bg-[#00B4CC]/12 blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <ServiceVisual type={service.visual} />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8FEAFF]/70">
                    {service.num}
                  </p>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#8FEAFF]/25 to-transparent" />
                </div>

                <h3 className="font-sans text-xl font-extrabold headline-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#49F2B2]/90">
                  {service.hook}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  {service.desc}
                </p>

                <a
                  href="#contact"
                  className="mt-auto inline-flex pt-7 text-sm font-semibold text-[#8FEAFF] transition-colors duration-300 hover:text-[#49F2B2]"
                >
                  Learn More <span aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
