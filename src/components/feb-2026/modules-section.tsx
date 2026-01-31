import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Terminal, BookOpen, Cpu, Dna, Bug, BarChart3, Microscope, FileText } from 'lucide-react'
import { motion } from 'motion/react'
import MatrixText from '@/components/kokonutui/matrix-text'
import { cn } from '@/lib/utils'

const modules = [
    {
        id: '1',
        title: 'Linux & Computational Basics',
        icon: Terminal,
        topics: ['Linux environment', 'Architecture & file systems', 'Commands & permissions', 'Processes & navigation'],
        objective: 'Learn Linux environment, architecture, file systems, commands, permissions, and processes; hands-on navigation and working with genomic files.',
        longDescription: (
            <div className="space-y-4">
                <p>
                    Master the essential tools for bioinformatics. We start with the absolute basics of the Linux operating system,
                    understanding how to navigate the terminal, manage files, and control permissions—skills that are foundational for any genomic analysis.
                </p>

                <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Terminal className="size-3.5" /> Quick Setup (Mamba/Conda)
                    </h4>
                    <div className="bg-muted/50 p-3 rounded-md font-mono text-xs overflow-x-auto border">
                        <p className="text-muted-foreground mb-1"># Install Miniforge (Mamba+Conda):</p>
                        <code className="text-primary">
                            aria2c -x 16 -s 16 -o miniforge.sh https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
                        </code>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="space-y-1">
                        <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">Learning Resources</h4>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <a href="https://www.geeksforgeeks.org/basic-linux-commands/" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1.5">
                                    <ExternalLink className="size-3" /> Basic Linux Commands
                                </a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.org/news/the-linux-commands-handbook/" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1.5">
                                    <ExternalLink className="size-3" /> Linux Command Handbook
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">Genomics Concepts</h4>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <a href="https://www.genome.gov/about-genomics/fact-sheets/A-Brief-Guide-to-Genomics" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1.5">
                                    <ExternalLink className="size-3" /> A Brief Guide to Genomics
                                </a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/introduction-genomics" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1.5">
                                    <ExternalLink className="size-3" /> Global Genomics Edu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-blue-500 to-cyan-500',
        className: 'md:col-span-2 md:row-span-2'
    },
    {
        id: '2',
        title: 'BASH & Automation',
        icon: Cpu,
        topics: ['Shell fundamentals', 'Variables & loops', 'awk, sed, grep', 'Pipelines'],
        objective: 'Master shell fundamentals, variables/loops/conditions, text processing with awk/sed/grep.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-purple-500 to-pink-500',
        className: 'md:col-span-1'
    },
    {
        id: '3',
        title: 'NGS Technologies & QC',
        icon: Microscope,
        topics: ['Sequencing platforms', 'Read quality metrics', 'FastQC & MultiQC'],
        objective: 'Understand sequencing platforms, read quality metrics, adapter/GC issues; hands-on FastQC and MultiQC.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-green-500 to-emerald-500',
        className: 'md:col-span-1'
    },
    {
        id: '4',
        title: 'Genome Assembly',
        icon: Dna,
        topics: ['De novo vs reference', 'Assembly strategies', 'SPAdes & evaluation'],
        objective: 'Compare de novo vs reference-based assembly, learn assembly strategies; hands-on SPAdes.',
        colabLink: 'https://colab.research.google.com/drive/1fMCrkI5jXTpuRgB_MUGamZOvhkDk4pRd?usp=sharing',
        available: true,
        color: 'from-orange-500 to-red-500',
        className: 'md:col-span-1'
    },
    {
        id: '5',
        title: 'Genome Annotation',
        icon: BookOpen,
        topics: ['Gene prediction', 'Functional databases', 'Prokka workflow'],
        objective: 'Learn gene prediction, functional databases, annotation pipelines; hands-on Prokka workflow.',
        colabLink: 'https://colab.research.google.com/drive/1w9ThIz4xlhG_mwYVFx-iAfYLOPp10ztr?usp=sharing',
        available: true,
        color: 'from-indigo-500 to-violet-500',
        className: 'md:col-span-1'
    },
    {
        id: '6',
        title: 'AMR Detection',
        icon: Bug,
        topics: ['AMR mechanisms', 'Resistance databases', 'Surveillance methods', 'Gene detection'],
        objective: 'Understand AMR mechanisms, databases, surveillance; hands-on AMR gene detection and interpretation.',
        colabLink: 'https://colab.research.google.com/drive/1kD92SJYlGRyVvTrQUog6x7CxqXcD0sag?usp=sharing',
        available: true,
        color: 'from-rose-500 to-red-500',
        className: 'md:col-span-2'
    },
    {
        id: '7',
        title: 'Gene Enrichment',
        icon: BarChart3,
        topics: ['GO & KEGG databases', 'Enrichment statistics', 'Chitra Pipeline', 'Pathway visualization'],
        objective: 'Learn GO/KEGG databases, enrichment statistics; hands-on Chitra Pipeline for GO enrichment and pathway visualization.',
        colabLink: 'https://colab.research.google.com/drive/1w9ThIz4xlhG_mwYVFx-iAfYLOPp10ztr?usp=sharing',
        available: true,
        color: 'from-amber-500 to-yellow-500',
        className: 'md:col-span-2'
    }
]

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import { ChevronDown, ChevronUp } from 'lucide-react'

function ModuleCard({ module, isMobile = false }: { module: any, isMobile?: boolean }) {
    const [isExpanded, setIsExpanded] = React.useState(!isMobile)

    return (
        <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card border hover:border-primary/50 overflow-hidden group">
            {/* Gradient Header Line */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${module.color}`} />

            <CardHeader className="pb-2 p-4 md:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className={cn(
                            "flex items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform group-hover:scale-110 shrink-0",
                            module.id === '1' ? "size-10 md:size-14" : "size-10",
                            module.color
                        )}>
                            <module.icon className={cn(module.id === '1' ? "size-5 md:size-7" : "size-5")} />
                        </div>
                        <div>
                            <Badge variant="outline" className="mb-1 border-primary/30 text-primary text-[10px] sm:text-xs">
                                Module {module.id}
                            </Badge>
                            <CardTitle className={cn(
                                "text-gray-900 dark:text-white leading-tight",
                                module.id === '1' ? "text-lg md:text-2xl" : "text-base md:text-lg"
                            )}>
                                {module.title}
                            </CardTitle>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col space-y-4 p-4 md:p-6 pt-0 md:pt-2">
                {/* Topics */}
                <div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {module.topics.map((topic: string, i: number) => (
                            <Badge
                                key={i}
                                variant="secondary"
                                className="text-[10px] sm:text-xs bg-muted/60 text-muted-foreground hover:bg-muted"
                            >
                                {topic}
                            </Badge>
                        ))}
                    </div>

                    {/* Module 1 Logic: Expandable on Mobile */}
                    {module.id === '1' ? (
                        <div className="mt-4">
                            {isExpanded ? (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                                >
                                    {module.longDescription}
                                </motion.div>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                                >
                                    {module.objective}
                                </motion.p>
                            )}

                            {/* Expander Toggle (Only on Mobile for Mod 1) */}
                            {isMobile && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="mt-2 w-full h-8 text-xs text-primary hover:text-primary/80 hover:bg-primary/5"
                                >
                                    {isExpanded ? (
                                        <>Show Less <ChevronUp className="ml-1 size-3" /></>
                                    ) : (
                                        <>Show Details <ChevronDown className="ml-1 size-3" /></>
                                    )}
                                </Button>
                            )}
                        </div>
                    ) : (
                        // Standard Cards logic
                        <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {module.objective}
                        </p>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-2 grid grid-cols-2 gap-2">
                    <Button
                        asChild
                        size="sm"
                        className={cn(
                            "w-full bg-white text-black hover:bg-gray-100 border border-gray-200 font-medium transition-all text-[10px] sm:text-xs h-8 md:h-9",
                            // !module.available && 'pointer-events-none opacity-50' // Keeping it clickable but marked coming soon if desired, or disable if really not ready. User just said "updated". I will leave it enabled but titled coming soon.
                        )}
                    >
                        <a href="#" target="_blank" rel="noopener noreferrer"> {/* Placeholder link for PPT */}
                            <FileText className="size-3 md:size-3.5 mr-1.5" />
                            Slides (Coming Soon)
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="sm"
                        className={cn(
                            "w-full bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90 font-medium transition-all text-[10px] sm:text-xs h-8 md:h-9",
                            !module.available && 'pointer-events-none opacity-50'
                        )}
                    >
                        <a href={module.colabLink} target="_blank" rel="noopener noreferrer">
                            <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Colab" className="size-3 md:size-3.5 mr-2" />
                            Notebook (Coming Soon)
                            <ExternalLink className="ml-2 size-3" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export function ModulesSection2026() {
    return (
        <section id="modules" className="py-12 md:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-10">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Online Workshop</Badge>
                    <MatrixText
                        text="Hands-on Training Modules"
                        className="min-h-0 py-0 mb-2"
                        initialDelay={400}
                        letterAnimationDuration={300}
                        letterInterval={50}
                    />
                    <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
                        7-module program from Linux basics to gene enrichment analysis
                    </p>
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden select-none">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4">
                            {modules.map((module, index) => (
                                <CarouselItem key={module.id} className="pl-4 basis-[85%] h-full">
                                    <div className="h-full">
                                        <ModuleCard module={module} isMobile={true} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Mobile Swipe Hint */}
                        <p className="text-center mt-2 text-sm text-muted-foreground select-none">
                            ← Swipe to explore modules →
                        </p>
                    </Carousel>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid gap-4 grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(280px,auto)]">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={cn('h-full', module.className)}
                        >
                            <ModuleCard module={module} />
                        </motion.div>
                    ))}
                </div>

                {/* Master Colab Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-1 pr-4 border border-primary/20 bg-background shadow-sm rounded-full">
                        <div className="flex items-center gap-3">
                            <span className="bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground">Pro Tip</span>
                            <span className="text-sm text-muted-foreground hidden sm:inline">Want everything in one place?</span>
                            <a
                                href="https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-primary hover:underline inline-flex items-center"
                            >
                                Open Master Notebook <ExternalLink className="ml-1 size-3" />
                            </a>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
