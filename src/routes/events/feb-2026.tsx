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
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 relative overflow-x-hidden">
            {/* Bottom Fade Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] dark:opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 50% at 50% 100%, #000 10%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 50% at 50% 100%, #000 10%, transparent 100%)",
                }}
            />

            <HeroSection2026 />

            {/* Content Sections */}
            <div className="relative z-10">
                <ModulesSection2026 />
                <ScheduleSection2026 />
                <SpeakersSection2026 />
                <ContactSection fundingSource="Skill India Project (IGIB: HCP002502/2025/E-I)" />
                <Footer />
            </div>

            <MobileDock />
        </div>
    )
}
