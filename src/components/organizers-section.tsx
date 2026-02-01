import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Github, Twitter, Linkedin, Mail, Globe, ExternalLink, BookOpen } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import MatrixText from '@/components/kokonutui/matrix-text'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const organizers = [
    {
        name: "Dr. Jitendra Narayan",
        role: "Principal Investigator",
        title: "Principal Scientist",
        bio: "Head of Jitendra Lab, specializing in Comparative Genomics, Genome Evolution, Chromosome Rearrangements.",
        image: "/assests/people/jit.webp",
        color: "from-blue-500 to-cyan-500",
        isSkillIndiaOrganizer: true,
        links: {
            website: "https://jitendralab.igib.res.in",
            twitter: "https://x.com/jnarayan81",
            email: "jitendra.igib@csir.res.in"
        }
    },
    {
        name: "Ajay Bhatia",
        role: "PhD Scholar",
        title: "Data Analyst",
        bio: "Genome Informatics and Structural Biology. Expertise in Linux & Gene Enrichment.",
        image: "/assests/people/ajay.webp",
        color: "from-green-500 to-emerald-500",
        links: {
            researchgate: "https://www.researchgate.net/profile/Ajay-Bhatia-5"
        }
    },
    {
        name: "Pranjal Pruthi",
        role: "PhD Scholar",
        title: "Full Stack Developer",
        bio: "Exploring frontiers of genomics. Computational Genomics & CHITRA Pipeline development.",
        image: "/assests/people/pranjal.webp",
        color: "from-purple-500 to-pink-500",
        links: {
            github: "https://github.com/pranjalpruthi",
            linkedin: "https://www.linkedin.com/in/pranjal-pruthi/",
            twitter: "https://x.com/pranjalpruthi",
            website: "https://pranjal.mmm.page",
            email: "mail@pranjal.work"
        }
    },
    {
        name: "Mukul Verma",
        role: "PhD Scholar",
        title: "NGS Specialist",
        bio: "Specializing in NGS Data Quality Control and Genome Assembly workflows.",
        image: "/assests/people/mukul.webp",
        color: "from-orange-500 to-red-500",
        links: {
            linkedin: "https://www.linkedin.com/in/mukul-verma-080910252/",
            twitter: "https://x.com/MukulVerm59526",
            email: "mukulverma4321@gmail.com"
        }
    },
    {
        name: "Preeti Agarwal",
        role: "PhD & SRF",
        title: "SSR Specialist",
        bio: "Genome Informatics and Structural Biology. Expert in SSR analysis and NGS Data Formats.",
        image: "/assests/people/preeti.webp",
        color: "from-rose-500 to-pink-500",
        links: {
            researchgate: "https://www.researchgate.net/profile/Preeti-Agarwal-16"
        }
    },
    {
        name: "Nityendra Shukla",
        role: "Research Scientist",
        title: "Annotation Expert",
        bio: "Genome Annotation specialist. Associated with Medical Mycology research.",
        image: "/assests/people/nitin.webp",
        color: "from-teal-500 to-cyan-500",
        links: {
            researchgate: "https://www.researchgate.net/profile/Nityendra-Shukla-2",
            website: "https://jitendralab.igib.res.in/profile/nityendra21",
            email: "nitinshukla218@gmail.com"
        }
    },
    {
        name: "Anwesha De",
        role: "PhD Scholar",
        title: "AMR Researcher",
        bio: "Focusing on Antimicrobial Resistance detection and Genomics research.",
        image: "/assests/people/anwesha.webp",
        color: "from-indigo-500 to-violet-500",
        links: {
            linkedin: "https://www.linkedin.com/in/anwesha-de-6980741bb/",
            github: "https://github.com/anweshagenomics",
            twitter: "https://x.com/AnweshaDe5",
            email: "anwesha.de@csir.res.in"
        }
    },
    {
        name: "Dr. Aastha Mishra",
        role: "Principal Investigator",
        title: "Principal Scientist",
        bio: "Physiological Genomics of Hypoxia. Circulating nucleic acids in disease pathogenesis.",
        image: "/assests/people/aastha.webp",
        color: "from-pink-500 to-rose-500",
        isSkillIndiaOrganizer: true,
        links: {
            researchgate: "https://www.researchgate.net/profile/Aastha-Mishra-2",
            scholar: "https://scholar.google.com/citations?user=WWeXX48AAAAJ&hl=en",
            linkedin: "https://www.linkedin.com/in/aastha-mishra-2308186a/",
            email: "aastha.igib@csir.res.in"
        }
    },
]

export function OrganizersSection() {
    return (
        <section id="organizers" className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 select-none"
                >
                    <Badge className="mb-4 bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/30">Jitendra Lab</Badge>
                    <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        <MatrixText
                            text="Our Organizers"
                            className="text-3xl font-bold md:text-4xl"
                            matrixColor="#06b6d4"
                            matrixShadow="0 2px 10px rgba(6, 182, 212, 0.6)"
                            initialDelay={200}
                        />
                    </div>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">PhD Scholars and Fellows from Jitendra Lab, CSIR-IGIB who organize and conduct these workshops.</p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {organizers.map((member, index) => (
                            <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <Card className="group overflow-hidden transition-all hover:shadow-xl border-2 hover:border-primary/50 rounded-2xl">
                                    <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                                    <CardContent className="p-5 flex flex-col select-none">
                                        {/* Avatar */}
                                        <div className="mb-4 flex items-center justify-center">
                                            <Avatar className="size-20 ring-2 ring-white dark:ring-gray-800 shadow-lg">
                                                <AvatarImage src={member.image} alt={member.name} />
                                                <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white text-lg font-bold`}>
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>

                                        {/* Member Info */}
                                        <div className="text-center mb-3">
                                            <h3 className="text-lg font-bold">{member.name}</h3>
                                            <p className="text-sm font-medium text-primary">{member.role}</p>
                                            <div className="flex flex-col items-center gap-1.5 mt-2">
                                                <Badge variant="secondary" className="text-[10px]">
                                                    {member.title}
                                                </Badge>
                                                {member.isSkillIndiaOrganizer && (
                                                    <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 text-[10px]">SKILL INDIA ORGANIZER</Badge>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-center line-clamp-2">
                                            {member.bio}
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex items-center justify-center gap-2 pt-2 border-t">
                                            {member.links.github && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                                                        <Github className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {member.links.linkedin && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                                                        <Linkedin className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {member.links.twitter && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                                                        <Twitter className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {member.links.website && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={member.links.website} target="_blank" rel="noopener noreferrer">
                                                        <Globe className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {member.links.researchgate && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={member.links.researchgate} target="_blank" rel="noopener noreferrer">
                                                        <BookOpen className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                            {member.links.email && (
                                                <Button size="icon" variant="ghost" className="size-8" asChild>
                                                    <a href={`mailto:${member.links.email}`}>
                                                        <Mail className="size-4" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>

                {/* Navigation hint for mobile */}
                <p className="text-center mt-6 text-sm text-muted-foreground md:hidden select-none">
                    ← Swipe to see more organizers →
                </p>
            </div>
        </section>
    )
}
