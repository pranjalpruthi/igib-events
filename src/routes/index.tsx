import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from '@/components/contact-section'
import { HeroHeader } from '@/components/header'
import { Home, Mail, BookOpen, Calendar, ArrowRight, Users, Video, MapPin, GraduationCap, Building, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { MobileDock } from '@/components/mobile-dock'
import MatrixText from '@/components/kokonutui/matrix-text'
import { FeaturedWorkshops } from '@/components/featured-workshops'
import { TeamSection } from '@/components/team-section'
import { OrganizersSection } from '@/components/organizers-section'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const events = [] // Removed inline events, using /events page
// Removed inline teamMembers
// ... imports cleaned up in next step if checking lint

function LandingPage() {
  const menuItems = [
    { name: 'Portal Home', href: '/', icon: Home },
    { name: 'Workshops', href: '/events', icon: Calendar }, // Updated link
    { name: 'Team', href: '/events#team', icon: BookOpen }, // Updated link
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] dark:bg-black relative">
      {/* Light Theme Grid Background - Full Page */}
      <div
        className="fixed inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Dark Theme Top Glow Background */}
      <div
        className="fixed inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 211, 238, 0.15), transparent 70%), #000000"
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col pb-20 lg:pb-0">
        <HeroHeader
          menuItems={menuItems}
          rightContent={
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" asChild>
                <a href="https://jitendralab.igib.res.in" target="_blank" rel="noopener noreferrer">
                  <Building className="mr-2 size-4" />
                  Lab
                </a>
              </Button>
              <Button size="sm" asChild className="rounded-full bg-[#24292e] text-white hover:bg-[#24292e]/90 dark:bg-white dark:text-[#24292e] dark:hover:bg-white/90">
                <a href="https://github.com/BioinformaticsOnLine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild className="rounded-full bg-[#5865F2] text-white hover:bg-[#5865F2]/90">
                <a href="https://discord.gg/bz2EKz9nG" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                  Discord
                </a>
              </Button>
            </div>
          }
        />

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden h-screen flex items-center justify-center">
          {/* Hero Mid Glow - Dark Mode Only (Deep Ocean Glow) */}
          <div
            className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
            style={{
              background:
                "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)"
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto select-none"
            >
              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 select-none"
              >
                <Badge className="bg-primary/10 backdrop-blur-md border-primary/20 hover:bg-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                  <span className="size-1.5 sm:size-2 rounded-full bg-cyan-400 dark:bg-cyan-400 animate-pulse mr-1.5 sm:mr-2" />
                  CSIR-IGIB
                </Badge>
                <a href="https://www.skillindiadigital.gov.in/" target="_blank" rel="noopener noreferrer">
                  <Badge className="bg-amber-500/20 backdrop-blur-md border-amber-500/30 text-amber-600 dark:text-amber-300 hover:bg-amber-500/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm cursor-pointer">
                    Skill India
                  </Badge>
                </a>
              </motion.div>

              {/* Main Title with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-cyan-300 dark:via-blue-400 dark:to-cyan-400">
                  Discovery Genomics
                </span>
              </motion.h1>

              {/* Sequence Your Skills - Matrix Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-2 sm:mt-4 flex flex-col items-center"
              >
                <div className="block sm:hidden flex flex-col items-center gap-1">
                  <MatrixText
                    text="Sequence Your"
                    className="min-h-0 text-foreground/90 py-0 text-3xl leading-none"
                    initialDelay={800}
                    letterAnimationDuration={400}
                    letterInterval={80}
                  />
                  <MatrixText
                    text="Skills"
                    className="min-h-0 text-foreground/90 py-0 text-3xl leading-none"
                    initialDelay={1800} // delayed after first part
                    letterAnimationDuration={400}
                    letterInterval={80}
                  />
                </div>
                <div className="hidden sm:block">
                  <MatrixText
                    text="Sequence Your Skills"
                    className="min-h-0 text-foreground/90 py-0 text-5xl md:text-6xl"
                    initialDelay={800}
                    letterAnimationDuration={400}
                    letterInterval={80}
                  />
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto px-2"
              >
                Organized by <span className="font-semibold text-foreground">Jitendra Lab of Bioinformatics and Big Data</span> at CSIR-IGIB.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 select-none"
              >
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-200 ease-out" asChild>
                  <Link to="/events">Explore Workshops <ArrowRight className="ml-2 size-4 sm:size-5" /></Link>
                </Button>
              </motion.div>

              {/* Organization Links - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8 flex flex-row flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-4 select-none"
              >
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="https://jitendralab.igib.res.in" target="_blank" rel="noopener noreferrer">
                    <Building className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" />
                    <span className="hidden xs:inline">Jitendra </span>Lab
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="https://bioinformaticsonline.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" />
                    <span className="hidden sm:inline">Bioinformatics</span><span className="sm:hidden">Bio</span>OnLine
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="https://github.com/BioinformaticsOnLine" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="https://facebook.com/bioinformaticsonline" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    Facebook
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="https://discord.gg/bz2EKz9nG" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                    Discord
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm h-7 sm:h-8 px-2.5 sm:px-3 text-[10px] sm:text-xs md:text-sm" asChild>
                  <a href="mailto:jitendra.igib@csir.res.in">
                    <Mail className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" />
                    Connect
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Restored Sections */}
        <FeaturedWorkshops />
        <OrganizersSection />
        <TeamSection />

        <div id="contact">
          <Footer />
        </div>
      </div>

      {/* Mobile Navigation Dock */}
      <MobileDock />
    </div>
  )
}
