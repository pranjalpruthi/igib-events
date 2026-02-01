import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { GraduationCap, ExternalLink } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import MatrixText from '@/components/kokonutui/matrix-text'

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
        image: '/assests/people/jit.webp',
        isSkillIndiaOrganizer: true
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
        color: 'from-purple-500 to-pink-500',
        image: '/assests/people/rakesh.webp'
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
        color: 'from-teal-500 to-cyan-500',
        image: '/assests/people/rajesh.webp'
    },
    {
        name: 'Dr. Kumardeep Chaudhary',
        title: 'Principal Scientist',
        role: 'Researcher',
        organization: 'CSIR-IGIB',
        scholarId: 'RTPnUKkAAAAJ',
        citations: '1500+',
        expertise: 'Medical Informatics, Computational Biology, Machine Learning',
        color: 'from-rose-500 to-pink-500',
        image: '/assests/people/kumardeep.webp'
    },
    {
        name: 'Dr. Aastha Mishra',
        title: 'Principal Scientist',
        role: 'Principal Investigator',
        organization: 'CSIR-IGIB',
        scholarId: 'WWeXX48AAAAJ',
        citations: '800+',
        expertise: 'Physiological Genomics, Hypoxia, Epigenetics',
        color: 'from-pink-500 to-rose-500',
        image: '/assests/people/aastha.webp',
        isSkillIndiaOrganizer: true
    },
]

export function TeamSection() {
    return (
        <section id="team" className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 select-none"
                >
                    <Badge className="mb-4 bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30">Our Team</Badge>
                    <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        <MatrixText
                            text="Meet the Team"
                            className="text-3xl font-bold md:text-4xl"
                            matrixColor="#a855f7"
                            matrixShadow="0 2px 10px rgba(168, 85, 247, 0.6)"
                            initialDelay={200}
                        />
                    </div>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Expert faculty and researchers from CSIR-IGIB driving innovation in bioinformatics.</p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: true,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {teamMembers.map((member, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="group overflow-hidden transition-all hover:shadow-xl border hover:border-primary/50 h-full flex flex-col">
                                    <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                                    <CardContent className="p-6 flex flex-col select-none flex-1">
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
                                            <div className="flex flex-col items-center justify-center gap-2 mt-2">
                                                {member.role === 'Principal Investigator' && (
                                                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">Principal Investigator</Badge>
                                                )}
                                                {member.isSkillIndiaOrganizer && (
                                                    <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">SKILL INDIA ORGANIZER</Badge>
                                                )}
                                                {member.role !== 'Principal Investigator' && !member.isSkillIndiaOrganizer && (
                                                    <Badge variant="secondary">
                                                        {member.organization}
                                                    </Badge>
                                                )}
                                            </div>
                                            {member.citations && (
                                                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                                                    <GraduationCap className="size-3" />
                                                    <span>{member.citations} citations</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Expertise */}
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
                <p className="text-center mt-6 text-sm text-muted-foreground md:hidden select-none">
                    ← Swipe to see more team members →
                </p>
            </div>
        </section>
    )
}
