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
        <div className="min-h-screen w-full relative overflow-x-hidden">
            <HeroSection2026 />

            {/* Content Sections with Background */}
            <div className="relative bg-[#f8fafc] dark:bg-slate-950/50 [--grid-color:#e2e8f0] dark:[--grid-color:#1e293b]">
                {/* Bottom Fade Grid Background */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 30px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    }}
                />

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
