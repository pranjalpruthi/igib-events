import { createFileRoute } from '@tanstack/react-router'
import { HeroSection2026 } from '@/components/feb-2026/hero-section'
import { ModulesSection2026 } from '@/components/feb-2026/modules-section'
import { ScheduleSection2026 } from '@/components/feb-2026/schedule-section'
import { SpeakersSection2026 } from '@/components/feb-2026/speakers-section'
import { ContactSection, Footer } from '@/components/contact-section'
import { MobileDock } from '@/components/mobile-dock'


export const Route = createFileRoute('/events/feb-2026')({
    component: Feb2026Workshop,
})

function Feb2026Workshop() {
    return (
        <div className="min-h-screen">
            <HeroSection2026 />
            <div className="relative">


                {/* Content Sections */}
                <div className="relative z-10">
                    <ModulesSection2026 />
                    <ScheduleSection2026 />
                    <SpeakersSection2026 />
                    <ContactSection fundingSource="Skill India Project (IGIB: HCP002502/2025/E-I)" />
                    <Footer />
                </div>
            </div>
            <MobileDock />
        </div>
    )
}
