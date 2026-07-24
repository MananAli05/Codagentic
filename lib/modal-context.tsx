import React, { createContext, useContext, useState } from 'react'

export interface ServiceDetail {
  num: string
  title: string
  hook: string
  desc: string
  overview: string
  features: string[]
  techStack: string[]
  deliverables: string[]
}

export interface IndustryDetail {
  title: string
  desc: string
  image: string
  alt: string
  overview: string
  useCases: string[]
  keyBenefits: string[]
  complianceNote: string
}

interface ModalContextType {
  activeModal: 'start-project' | 'strategy-call' | 'service-detail' | 'industry-detail' | null
  selectedService: ServiceDetail | null
  selectedIndustry: IndustryDetail | null
  preselectedServiceId?: string
  openStartProject: (serviceId?: string) => void
  openStrategyCall: () => void
  openServiceDetail: (service: ServiceDetail) => void
  openIndustryDetail: (industry: IndustryDetail) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalContextType['activeModal']>(null)
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDetail | null>(null)
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>()

  const openStartProject = (serviceId?: string) => {
    setPreselectedServiceId(serviceId)
    setActiveModal('start-project')
  }

  const openStrategyCall = () => {
    setActiveModal('strategy-call')
  }

  const openServiceDetail = (service: ServiceDetail) => {
    setSelectedService(service)
    setActiveModal('service-detail')
  }

  const openIndustryDetail = (industry: IndustryDetail) => {
    setSelectedIndustry(industry)
    setActiveModal('industry-detail')
  }

  const closeModal = () => {
    setActiveModal(null)
    setSelectedService(null)
    setSelectedIndustry(null)
    setPreselectedServiceId(undefined)
  }

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        selectedService,
        selectedIndustry,
        preselectedServiceId,
        openStartProject,
        openStrategyCall,
        openServiceDetail,
        openIndustryDetail,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModals() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider')
  }
  return context
}
