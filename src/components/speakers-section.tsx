import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { ExternalLink, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const speakers = [
    {
        name: 'Dr. Jitendra Narayan',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        scholarId: 'ySm4BzcAAAAJ',
        citations: '1000+',
        expertise: 'Bioinformatics, Genome Evolution, Chromosome Breakpoints, Comparative Genomics. Expert in big data and informatics, bacterial and archaeal genomics, evolutionary genomics, metagenomics, and structural genomics.',
        session: 'Genome Assembly (Tuesday, Nov 4 - 9:30 AM)',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Dr. Souvik Mukherjee',
        title: 'Associate Professor',
        organization: 'BRIC-National Institute of Biomedical Genomics',
        scholarId: '2ll9F2UAAAAJ',
        citations: '944+',
        expertise: 'Human Metagenomics, Population Genomics, Molecular Biology. Specializes in host-microbiome interactions in human health and disease, with focus on Psoriasis, Atopic Dermatitis, and Colorectal Cancer.',
        session: 'Precision Microbiomics: Unraveling the Antimicrobial Resistome (Tuesday, Nov 4 - 12:00 PM)',
        color: 'from-green-500 to-emerald-500'
    },
    {
        name: 'Dr. Rakesh Sharma',
        title: 'Chief Scientist',
        organization: 'CSIR-IGIB',
        scholarId: 'BCxFaZcAAAAJ',
        citations: '3398+',
        expertise: 'Metagenomics, Microbial Diversity, Metal-Microbe Interactions. Focuses on microbial diversity and function using metagenomics, exploiting the microbiome for novel bioactive molecules.',
        session: 'Microbial Diversity, Pathogens and AMR of Waterbodies (Tuesday, Nov 4 - 3:30 PM)',
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Dr. Shandar Ahmed',
        title: 'Professor of Bioinformatics',
        organization: 'SCIS, Jawaharlal Nehru University',
        scholarId: 'JC8hey0AAAAJ',
        citations: '4469+',
        expertise: 'AI/ML methods for Bioinformatics, Protein-DNA Structural Interactions. Leads SciWhyLab developing data-driven algorithms using machine learning, deep learning, and big data analytics.',
        session: 'NGS Data Analysis using AI Methods (Wednesday, Nov 5 - 9:30 AM)',
        color: 'from-orange-500 to-red-500'
    },
    {
        name: 'Dr. Rajesh Pandey',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        scholarId: 'Dj14S78AAAAJ',
        citations: '2000+',
        expertise: 'Integrative Genomics of Host-Pathogen, Single Cell Multiomics, Co-infections. Notable work on SARS-CoV-2 research with 1385+ citations on Delta variant studies.',
        session: 'Economics of Genomics: Active and Inactive Microbes (Wednesday, Nov 5 - 11:30 AM)',
        color: 'from-teal-500 to-cyan-500'
    },
    {
        name: 'Dr. Manish Kumar',
        title: 'Professor',
        organization: 'University of Delhi',
        scholarId: 'mOsvus4AAAAJ',
        citations: '800+',
        expertise: 'Multi-omic investigation of microbial resistance mechanisms, Bioinformatics, Chemi-informatics, Phylogenomics. Specializes in analysis of microbial genomes and structure-based drug designing.',
        session: 'Discovery of Drug Resistance Factors in Multi-Omics Data (Wednesday, Nov 5 - 2:00 PM)',
        color: 'from-indigo-500 to-blue-500'
    },
    {
        name: 'Dr. Kumardeep Chaudhary',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        scholarId: 'RTPnUKkAAAAJ',
        citations: '1500+',
        expertise: 'Medical Informatics, Computational Biology, Next Generation Sequencing, Personalized Medicine, Machine Learning. Leads Digital and Genomic Medicine lab with notable publication on deep learning-based multi-omics integration (965 citations).',
        session: 'Federated AI for Longitudinal Surveillance of AMR (Thursday, Nov 6 - 9:30 AM)',
        color: 'from-rose-500 to-pink-500'
    },
    {
        name: 'Dr. Sanjay Deshpande',
        title: 'Scientist',
        organization: 'Indian Biological Data Centre (IBDC)',
        scholarId: null,
        citations: null,
        expertise: 'Nucleotide Archival Services, GenomeIndia initiative, INSACOG, NGS Analysis. Manages national biological data infrastructure, including nucleotide data archive portals (INDA, INSACOG, Genome India).',
        session: 'Integrating Data and Discovery: IBDC for Pathogen Research (Friday, Nov 7 - 9:30 AM)',
        color: 'from-amber-500 to-orange-500'
    },
    {
        name: 'Dr. Bhupesh Taneja',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        scholarId: 'vE_0cBAAAAAJ',
        citations: '1200+',
        expertise: 'Structural Biology, X-ray Crystallography, Genome Informatics. Expert in mycobacterial proteins and structural analysis of genome components.',
        session: 'Team Member',
        color: 'from-violet-500 to-purple-500'
    },
]

export function SpeakersSection() {
    return (
        <section id="speakers" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Expert Speakers</Badge>
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Featured Speakers</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Learn from leading experts in genomics, AI, and bioinformatics
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {speakers.map((speaker, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="group h-full overflow-hidden transition-all hover:shadow-xl bg-white dark:bg-gray-900 border hover:border-primary/50">
                                    <div className={`h-2 bg-gradient-to-r ${speaker.color}`} />
                                    <CardContent className="p-6 flex flex-col h-full">
                                        {/* Avatar */}
                                        <div className="mb-4 flex items-center justify-center">
                                            <div className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${speaker.color} text-2xl font-bold text-white shadow-lg`}>
                                                {speaker.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>

                                        {/* Speaker Info */}
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{speaker.name}</h3>
                                            <p className="mt-1 text-sm font-medium text-primary">{speaker.title}</p>
                                            <Badge variant="secondary" className="mt-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                                {speaker.organization}
                                            </Badge>
                                            {speaker.citations && (
                                                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                                                    <GraduationCap className="size-3" />
                                                    <span>{speaker.citations} citations</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Expertise */}
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                                            {speaker.expertise}
                                        </p>

                                        {/* Session Info */}
                                        <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-2 border-primary">
                                            <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Session:</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{speaker.session}</p>
                                        </div>

                                        {/* Google Scholar Link */}
                                        {speaker.scholarId && (
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <a 
                                                    href={`https://scholar.google.com/citations?user=${speaker.scholarId}&hl=en`}
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
                    ← Swipe to see more speakers →
                </p>
            </div>
        </section>
    )
}

