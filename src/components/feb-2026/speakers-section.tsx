import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Github, Twitter, Linkedin, Globe, BookOpen, GraduationCap, Mail } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip'

// Detailed speaker data
const speakers = [
    {
        name: "Dr. Jitendra Narayan",
        role: "Principal Investigator",
        roleDetail: "Organizer & Speaker",
        session: "Intro, Genome Assembly",
        bio: "Specializing in Comparative Genomics, Genome Evolution, Adaptation, Chromosome Rearrangements, HGT, Repeats",
        image: "/assests/people/jit.webp",
        isSkillIndiaOrganizer: true,
        links: {
            website: "https://bioinformaticsonline.com/profile/admin",
            scholar: "https://scholar.google.co.uk/citations?user=ySm4BzcAAAAJ&hl=en",
            researchgate: "https://www.researchgate.net/profile/Jitendra-Narayan-3",
            twitter: "https://x.com/jnarayan81"
        }
    },
    {
        name: "Ajay Bhatia",
        role: "Data Analyst",
        roleDetail: "Speaker",
        session: "Linux, Gene Enrichment",
        bio: "PhD Student at Jitendra lab, IGIB. Genome Informatics and Structural Biology Research Area.",
        image: "/assests/people/ajay.webp",
        links: {
            researchgate: "https://www.researchgate.net/profile/Ajay-Bhatia-5",
            scholar: "https://scholar.google.com"
        }
    },
    {
        name: "Pranjal Pruthi",
        role: "Web Developer",
        roleDetail: "Speaker",
        session: "Computational Genomics, CHITRA Hands-on",
        bio: "PhD Scholar at CSIR-IGIB. Exploring frontiers of genomics, Full Stack Dev.",
        image: "/assests/people/pranjal.webp",
        links: {
            github: "https://github.com/pranjalpruthi",
            linkedin: "https://www.linkedin.com/in/pranjal-pruthi/",
            twitter: "https://x.com/pranjalpruthi",
            website: "https://pranjal.mmm.page",
            email: "mail@pranjal.work"
        }
    },
    {
        // Keeping Mukul with minimal data as rich info wasn't provided but is needed for schedule
        name: 'Mukul Verma',
        role: 'PhD Scholar',
        session: 'QC, Genome Assembly',
        bio: 'PhD Scholar at Jitendra Lab, IGIB. Specializing in NGS Data Quality Control and Genome Assembly.',
        image: '/assests/people/mukul.webp',
        links: {
            linkedin: 'https://www.linkedin.com/in/mukul-verma-080910252/',
            email: 'mukulverma4321@gmail.com',
            twitter: 'https://x.com/MukulVerm59526'
        }
    },
    {
        name: "Preeti Agarwal",
        role: "PhD & SRF",
        roleDetail: "Speaker",
        session: "NGS Data Formats",
        bio: "Genome Informatics and Structural Biology Research Area (IGIB). #Pro in SSR analysis.",
        image: "/assests/people/preeti.webp",
        links: {
            researchgate: "https://www.researchgate.net/profile/Preeti-Agarwal-16",
            scholar: "https://scholar.google.com/citations?user=8u8WcwoAAAAJ&hl=en"
        }
    },
    {
        name: 'Kaushlendra Mishra',
        role: 'Project Associate',
        roleDetail: 'NGS Specialist',
        session: 'NGS Overview',
        bio: 'Specializing in High-Throughput Sequencing & Long-Read Genomics',
        image: '/assests/people/Kaushlendra.webp',
        links: {
            email: 'kaushlendra242401@gmail.com',
            twitter: 'https://x.com/kaushlendr47151',
            linkedin: 'https://www.linkedin.com/in/kaushlendra-mishra-90636b205'
        }
    },
    {
        name: "Nityendra Shukla",
        role: "Research Scientist",
        roleDetail: "Speaker",
        session: "Genome Annotation",
        bio: "Department of Medical Mycology, Vallabhbhai Patel Chest Institute, University of Delhi",
        image: "/assests/people/nitin.webp",
        links: {
            researchgate: "https://www.researchgate.net/profile/Nityendra-Shukla-2",
            website: "https://jitendralab.igib.res.in/profile/nityendra21",
            email: "nitinshukla218@gmail.com"
        }
    },
    {
        name: "Dr. Aastha Mishra",
        role: "Principal Investigator",
        roleDetail: "Speaker",
        session: "Physiological Genomics",
        bio: "Physiological Genomics of Hypoxia. Circulating nucleic acids in disease pathogenesis.",
        image: "/assests/people/aastha.webp",
        isSkillIndiaOrganizer: true,
        links: {
            researchgate: "https://www.researchgate.net/profile/Aastha-Mishra-2",
            scholar: "https://scholar.google.com/citations?user=WWeXX48AAAAJ&hl=en",
            linkedin: "https://www.linkedin.com/in/aastha-mishra-2308186a/",
            email: "aastha.igib@csir.res.in"
        }
    },
    {
        name: 'Anwesha De',
        role: 'PhD Scholar',
        roleDetail: 'Speaker',
        session: 'AMR Detection',
        bio: 'PhD Scholar at Jitendra Lab, IGIB. Focusing on Antimicrobial Resistance and Genomics.',
        image: '/assests/people/anwesha.webp',
        links: {
            email: 'anwesha.de@csir.res.in',
            linkedin: 'https://www.linkedin.com/in/anwesha-de-6980741bb/',
            github: 'https://github.com/anweshagenomics',
            twitter: 'https://x.com/AnweshaDe5'
        }
    },

]

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export function SpeakersSection2026() {
    return (
        <section id="speakers" className="py-12 md:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-10 select-none">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Training Team</Badge>
                    <h2 className="text-2xl font-bold md:text-3xl">Experts & Speakers</h2>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto select-text">
                        Meet the distinguished faculty and researchers delivering the training sessions
                    </p>
                </div>

                <div className="px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4 items-stretch">
                            {speakers.map((speaker, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <CardContent className="relative p-6 text-center flex flex-col h-full select-none">
                                                {/* Avatar */}
                                                <div className="relative mx-auto mb-4">
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                                                    <Avatar className="relative size-24 border-4 border-background shadow-xl">
                                                        <AvatarImage src={speaker.image} alt={speaker.name} />
                                                        <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                    </Avatar>
                                                </div>

                                                {/* Name & Role */}
                                                <h3 className="text-lg font-bold">{speaker.name}</h3>
                                                <p className="text-xs text-muted-foreground mb-2">{speaker.roleDetail}</p>

                                                {/* Badges */}
                                                <div className="flex flex-col items-center justify-center gap-2 mb-3">
                                                    {speaker.role === 'Principal Investigator' && (
                                                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-xs">
                                                            Principal Investigator
                                                        </Badge>
                                                    )}
                                                    {speaker.isSkillIndiaOrganizer && (
                                                        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 text-xs">
                                                            SKILL INDIA ORGANIZER
                                                        </Badge>
                                                    )}
                                                </div>

                                                <p className="text-sm font-medium text-primary mb-3">{speaker.session}</p>

                                                {/* Bio with Tooltip */}
                                                <div className="flex-1 flex items-start">
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <p className="text-xs text-muted-foreground line-clamp-3 cursor-help">
                                                                    {speaker.bio}
                                                                </p>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="max-w-xs">{speaker.bio}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>

                                                {/* Social Links */}
                                                {speaker.links && (
                                                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t w-full">
                                                        {speaker.links.website && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.website} target="_blank" rel="noreferrer">
                                                                    <Globe className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.scholar && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.scholar} target="_blank" rel="noreferrer">
                                                                    <GraduationCap className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.researchgate && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-[#00ccbb]/10 text-[#00ccbb] hover:text-[#00a396] transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.researchgate} target="_blank" rel="noreferrer">
                                                                    <BookOpen className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.github && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-gray-500/10 text-gray-900 dark:text-white hover:text-gray-700 transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.github} target="_blank" rel="noreferrer">
                                                                    <Github className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.twitter && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-gray-500/10 text-black dark:text-white hover:text-gray-700 transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.twitter} target="_blank" rel="noreferrer">
                                                                    <Twitter className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.linkedin && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-[#0077b5]/10 text-[#0077b5] hover:text-[#005e93] transition-all hover:scale-110" asChild>
                                                                <a href={speaker.links.linkedin} target="_blank" rel="noreferrer">
                                                                    <Linkedin className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                        {speaker.links.email && (
                                                            <Button size="icon" variant="ghost" className="rounded-full size-8 hover:bg-red-500/10 text-red-500 hover:text-red-600 transition-all hover:scale-110" asChild>
                                                                <a href={`mailto:${speaker.links.email}`}>
                                                                    <Mail className="size-4" />
                                                                </a>
                                                            </Button>
                                                        )}
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>

                    {/* Navigation hint for mobile */}
                    <p className="text-center mt-4 text-sm text-muted-foreground md:hidden select-none">
                        ← Swipe to see more speakers →
                    </p>
                </div>
            </div>
        </section>
    )
}
