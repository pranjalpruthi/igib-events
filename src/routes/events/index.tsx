import { createFileRoute } from '@tanstack/react-router'
import { FeaturedWorkshops } from '@/components/featured-workshops'
import { TeamSection } from '@/components/team-section'
import { HeroHeader } from '@/components/header'
import { Footer } from '@/components/contact-section'
import { MobileDock } from '@/components/mobile-dock'
import { Home, Calendar, Users, Mail } from 'lucide-react'

export const Route = createFileRoute('/events/')({
    component: EventsPage,
})

function EventsPage() {
    const menuItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Workshops', href: '#events', icon: Calendar },
        { name: 'Team', href: '#team', icon: Users },
        { name: 'Contact', href: '#contact', icon: Mail },
    ]

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] dark:bg-black relative">
            {/* Backgrounds (optional, reused from Landing) */}
            <div
                className="fixed inset-0 z-0 dark:hidden"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
                    backgroundSize: "20px 30px",
                    maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />
            <div
                className="fixed inset-0 z-0 hidden dark:block"
                style={{
                    background: "radial-gradient(ellipse at center, #0f172a 0%, #000000 100%)"
                }}
            />

            <HeroHeader menuItems={menuItems} />

            <main className="relative z-10 pt-20">
                <FeaturedWorkshops />
                <TeamSection />
            </main>

            <div id="contact" className="relative z-10">
                <Footer />
            </div>

            <MobileDock />
        </div>
    )
}
