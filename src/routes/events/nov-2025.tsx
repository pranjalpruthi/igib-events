import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/nov-2025/hero-section'
import { WorkshopInfoSection } from '@/components/nov-2025/workshop-info-section'
import { SessionsSection } from '@/components/nov-2025/sessions-section'
import { SpeakersSection } from '@/components/nov-2025/speakers-section'
import { ContactSection, Footer } from '@/components/contact-section'
import { MobileDock } from '@/components/mobile-dock'

export const Route = createFileRoute('/events/nov-2025')({
    component: Home,
})

function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <SessionsSection />
            <SpeakersSection />
            <WorkshopInfoSection />
            <ContactSection />
            <Footer />
            <MobileDock />
        </div>
    )
}
