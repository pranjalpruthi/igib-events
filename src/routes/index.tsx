import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/hero-section'
import { WorkshopInfoSection } from '@/components/workshop-info-section'
import { SessionsSection } from '@/components/sessions-section'
import { ContactSection, Footer } from '@/components/contact-section'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SessionsSection />
      <WorkshopInfoSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
