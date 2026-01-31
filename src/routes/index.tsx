import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from '@/components/contact-section'
import { HeroHeader } from '@/components/header'
import { Home, Mail, BookOpen, Calendar, ArrowRight, Users, Video, MapPin, GraduationCap, Building, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MobileDock } from '@/components/mobile-dock'
import MatrixText from '@/components/kokonutui/matrix-text'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const events = [
  {
    title: "Basic Bioinformatics Skill Development",
    subtitle: "One-Week Online Workshop",
    date: "Feb 1-7, 2026",
    mode: "Online (Live)",
    modeIcon: Video,
    location: "Virtual",
    status: "Upcoming",
    statusColor: "bg-green-600",
    description: "Comprehensive training covering Linux basics, NGS data analysis, Genome Assembly, AMR detection, and Gene Enrichment.",
    link: "/events/feb-2026",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Bioinformatics for One Health",
    subtitle: "Five-Day Hands-on Workshop",
    date: "Nov 3-7, 2025",
    mode: "In-Person",
    modeIcon: MapPin,
    location: "CSIR-IGIB, Delhi",
    status: "Completed",
    statusColor: "bg-gray-500",
    description: "Focused on pathogen genomics, metagenomics, and antimicrobial resistance surveillance with expert faculty.",
    link: "/events/nov-2025",
    gradient: "from-purple-500 to-pink-500"
  },
]

const stats = [
  { label: "Registrations (2026)", value: "4,500+", icon: Users },
  { label: "Acceptance Rate", value: "~3%", icon: GraduationCap },
  { label: "Expert Faculty", value: "15+", icon: Calendar },
]

const teamMembers = [
  {
    name: 'Dr. Jitendra Narayan',
    title: 'Principal Scientist',
    role: 'Principal Investigator',
    organization: 'CSIR-IGIB',
    scholarId: 'ySm4BzcAAAAJ',
    citations: '1000+',
    expertise: 'Bioinformatics, Genome Evolution, Chromosome Breakpoints, Comparative Genomics',
    color: 'from-blue-500 to-cyan-500',
    image: '/assests/team/jit.webp'
  },
  {
    name: 'Dr. Souvik Mukherjee',
    title: 'Associate Professor',
    role: 'Collaborator',
    organization: 'BRIC-NIBMG',
    scholarId: '2ll9F2UAAAAJ',
    citations: '944+',
    expertise: 'Human Metagenomics, Population Genomics, Molecular Biology',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Dr. Rakesh Sharma',
    title: 'Chief Scientist',
    role: 'Researcher',
    organization: 'CSIR-IGIB',
    scholarId: 'BCxFaZcAAAAJ',
    citations: '3398+',
    expertise: 'Metagenomics, Microbial Diversity, Metal-Microbe Interactions',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Dr. Shandar Ahmed',
    title: 'Professor of Bioinformatics',
    role: 'Collaborator',
    organization: 'SCIS, Jawaharlal Nehru University',
    scholarId: 'JC8hey0AAAAJ',
    citations: '4469+',
    expertise: 'AI/ML methods for Bioinformatics, Protein-DNA Structural Interactions',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Dr. Rajesh Pandey',
    title: 'Principal Scientist',
    role: 'Researcher',
    organization: 'CSIR-IGIB',
    scholarId: 'Dj14S78AAAAJ',
    citations: '2000+',
    expertise: 'Integrative Genomics of Host-Pathogen, Single Cell Multiomics',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    name: 'Dr. Kumardeep Chaudhary',
    title: 'Principal Scientist',
    role: 'Researcher',
    organization: 'CSIR-IGIB',
    scholarId: 'RTPnUKkAAAAJ',
    citations: '1500+',
    expertise: 'Medical Informatics, Computational Biology, Machine Learning',
    color: 'from-rose-500 to-pink-500'
  },
]

function LandingPage() {
  const menuItems = [
    { name: 'Portal Home', href: '/', icon: Home },
    { name: 'Workshops', href: '#events', icon: Calendar },
    { name: 'Team', href: '#team', icon: BookOpen },
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

      {/* Dark Theme Ocean Glow Background */}
      <div
        className="fixed inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)"
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
              <Button size="sm" variant="ghost" asChild>
                <a href="https://github.com/BioinformaticsOnLine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
              </Button>
            </div>
          }
        />

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">


          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 md:pt-12 select-none"
            >
              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3"
              >
                <Badge className="bg-primary/10 backdrop-blur-md border-primary/20 hover:bg-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                  <span className="size-1.5 sm:size-2 rounded-full bg-cyan-400 dark:bg-cyan-400 animate-pulse mr-1.5 sm:mr-2" />
                  CSIR-IGIB
                </Badge>
                <Badge className="bg-amber-500/20 backdrop-blur-md border-amber-500/30 text-amber-600 dark:text-amber-300 hover:bg-amber-500/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                  Skill India
                </Badge>
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
                className="mt-2 sm:mt-4"
              >
                <MatrixText
                  text="Sequence Your Skills"
                  className="min-h-0 text-foreground/90 py-0"
                  initialDelay={800}
                  letterAnimationDuration={400}
                  letterInterval={80}
                />
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
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-200 ease-out" asChild>
                  <a href="#events">Explore Workshops <ArrowRight className="ml-2 size-4 sm:size-5" /></a>
                </Button>
              </motion.div>

              {/* Organization Links - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8 flex flex-row flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-4"
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
                  <a href="mailto:jitendra.igib@csir.res.in">
                    <Mail className="mr-1 sm:mr-1.5 size-3 sm:size-3.5" />
                    Connect
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Workshops Grid */}
        <section id="events" className="relative py-12 md:py-20 lg:py-28 bg-background/50 dark:bg-black/30 backdrop-blur-sm overflow-hidden">


          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12 select-none">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/30">Events</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Featured Workshops</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Catch up on past events or register for upcoming sessions organized by our lab.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                    <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={`${event.statusColor} text-white`}>{event.status}</Badge>
                        <Badge variant="secondary">
                          <event.modeIcon className="size-3 mr-1" />
                          {event.mode}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <CardDescription>{event.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="size-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-sm pt-2 line-clamp-3">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${event.status === 'Upcoming' ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30 transition-all duration-200 ease-out' : 'transition-colors duration-200'}`} variant={event.status === 'Upcoming' ? 'default' : 'outline'}>
                        <Link to={event.link}>
                          {event.status === 'Upcoming' ? 'View Details & Register' : 'View Archive'} <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative py-12 md:py-20 lg:py-28 overflow-hidden">


          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 select-none"
            >
              <Badge className="mb-4 bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30">Our Team</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Meet the Team</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Expert faculty and researchers from CSIR-IGIB driving innovation in bioinformatics.</p>
            </motion.div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full overflow-hidden transition-all hover:shadow-xl border hover:border-primary/50">
                      <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                      <CardContent className="p-6 flex flex-col h-full select-none">
                        {/* Avatar */}
                        <div className="mb-4 flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="size-20 rounded-full object-cover shadow-lg ring-2 ring-white dark:ring-gray-800"
                            />
                          ) : (
                            <div className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-2xl font-bold text-white shadow-lg`}>
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>

                        {/* Member Info */}
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                          {member.role === 'Principal Investigator' && (
                            <Badge className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">Principal Investigator</Badge>
                          )}
                          {member.role !== 'Principal Investigator' && (
                            <Badge variant="secondary" className="mt-2">
                              {member.organization}
                            </Badge>
                          )}
                          {member.citations && (
                            <div className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                              <GraduationCap className="size-3" />
                              <span>{member.citations} citations</span>
                            </div>
                          )}
                        </div>

                        {/* Expertise */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {member.expertise}
                        </p>

                        {/* Google Scholar Link */}
                        {member.scholarId && (
                          <Button
                            asChild
                            size="sm"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 hover:shadow-blue-500/30 transition-all duration-200 ease-out"
                          >
                            <a
                              href={`https://scholar.google.com/citations?user=${member.scholarId}&hl=en`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GraduationCap className="mr-2 size-4" />
                              <span>View Google Scholar</span>
                              <ExternalLink className="ml-2 size-3" />
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            {/* Navigation hint for mobile */}
            <p className="text-center mt-6 text-sm text-muted-foreground md:hidden">
              ← Swipe to see more team members →
            </p>
          </div>
        </section>

        <div id="contact">
          <Footer />
        </div>
      </div>

      {/* Mobile Navigation Dock */}
      <MobileDock />
    </div>
  )
}
