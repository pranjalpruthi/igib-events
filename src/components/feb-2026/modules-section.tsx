import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Terminal, BookOpen, Cpu, Dna, Bug, BarChart3, Microscope, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import MatrixText from '@/components/kokonutui/matrix-text'
import { cn } from '@/lib/utils'
import { ComingSoonDialog } from '@/components/feb-2026/coming-soon-dialog'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip'

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
        colabLink: 'https://colab.research.google.com/drive/1rqvW9Mk0EXMdHEIbdEjazsqhPANBbEE-?usp=sharing',
        slidesLink: 'https://intro-to-unix-igib-dd767th.gamma.site/',
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
        colabLink: '',
        available: false,
        color: 'from-purple-500 to-pink-500',
        className: 'md:col-span-1'
    },
    {
        id: '3',
        title: 'NGS Technologies & QC',
        icon: Microscope,
        topics: ['Sequencing platforms', 'Read quality metrics', 'FastQC & MultiQC'],
        objective: 'Understand sequencing platforms, read quality metrics, adapter/GC issues; hands-on FastQC and MultiQC.',
        colabLink: '',
        available: false,
        color: 'from-green-500 to-emerald-500',
        className: 'md:col-span-1'
    },
    {
        id: '4',
        title: 'Genome Assembly',
        icon: Dna,
        topics: ['De novo vs reference', 'Assembly strategies', 'SPAdes & evaluation'],
        objective: 'Compare de novo vs reference-based assembly, learn assembly strategies; hands-on SPAdes.',
        colabLink: '',
        available: false,
        color: 'from-orange-500 to-red-500',
        className: 'md:col-span-1'
    },
    {
        id: '5',
        title: 'Genome Annotation',
        icon: BookOpen,
        topics: ['Gene prediction', 'Functional databases', 'Prokka workflow'],
        objective: 'Learn gene prediction, functional databases, annotation pipelines; hands-on Prokka workflow.',
        colabLink: '',
        available: false,
        color: 'from-indigo-500 to-violet-500',
        className: 'md:col-span-1'
    },
    {
        id: '6',
        title: 'AMR Detection',
        icon: Bug,
        topics: ['AMR mechanisms', 'Resistance databases', 'Surveillance methods', 'Gene detection'],
        objective: 'Understand AMR mechanisms, databases, surveillance; hands-on AMR gene detection and interpretation.',
        colabLink: '',
        available: false,
        color: 'from-rose-500 to-red-500',
        className: 'md:col-span-2'
    },
    {
        id: '7',
        title: 'Gene Enrichment',
        icon: BarChart3,
        topics: ['GO & KEGG databases', 'Enrichment statistics', 'Chitra Pipeline', 'Pathway visualization'],
        objective: 'Learn GO/KEGG databases, enrichment statistics; hands-on Chitra Pipeline for GO enrichment and pathway visualization.',
        colabLink: '',
        available: false,
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
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-primary/40 overflow-hidden group rounded-2xl">
            {/* Gradient Header Line */}
            <div className={`h-2 w-full bg-gradient-to-r ${module.color}`} />

            <CardHeader className="pb-2 p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className={cn(
                            "flex items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm transition-transform group-hover:scale-110 shrink-0 size-10",
                            module.color
                        )}>
                            <module.icon className="size-5" />
                        </div>
                        <div>
                            <Badge variant="outline" className="mb-1 border-primary/30 text-primary text-[10px]">
                                Module {module.id}
                            </Badge>
                            <CardTitle className="text-base md:text-lg text-gray-900 dark:text-white leading-tight">
                                {module.title}
                            </CardTitle>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-4 md:p-5 pt-0">
                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {module.topics.slice(0, isExpanded ? undefined : 3).map((topic: string, i: number) => (
                        <Badge
                            key={i}
                            variant="secondary"
                            className="text-[10px] bg-muted/60 text-muted-foreground"
                        >
                            {topic}
                        </Badge>
                    ))}
                    {!isExpanded && module.topics.length > 3 && (
                        <Badge variant="secondary" className="text-[10px] bg-muted/60 text-muted-foreground">
                            +{module.topics.length - 3} more
                        </Badge>
                    )}
                </div>

                {/* Objective / Expanded Content */}
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                            >
                                {module.longDescription || (
                                    <p>{module.objective}</p>
                                )}
                            </motion.div>
                        ) : (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <motion.p
                                            key="collapsed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 cursor-help"
                                        >
                                            {module.objective}
                                        </motion.p>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="max-w-xs">{module.objective}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </AnimatePresence>
                </div>

                {/* Expander Toggle */}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 w-full h-7 text-[10px] text-primary hover:text-primary/80 hover:bg-primary/5"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronUp className="ml-1 size-3" /></>
                    ) : (
                        <>Show More <ChevronDown className="ml-1 size-3" /></>
                    )}
                </Button>

                {/* Action Buttons */}
                <div className="mt-3 pt-3 border-t grid grid-cols-2 gap-2">
                    {module.slidesLink ? (
                        <Button
                            asChild
                            size="sm"
                            className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all text-[10px] h-8"
                        >
                            <a href={module.slidesLink} target="_blank" rel="noopener noreferrer">
                                View Slides
                            </a>
                        </Button>
                    ) : (
                        <ComingSoonDialog title="Slides Coming Soon" description={`Slides for ${module.title} will be uploaded soon. Check Day 1 in the Schedule section for available materials.`}>
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full font-medium transition-all text-[10px] h-8 border-blue-500/20 text-blue-500 hover:bg-blue-500/5 hover:text-blue-600"
                            >
                                Slides (Soon)
                            </Button>
                        </ComingSoonDialog>
                    )}
                    {module.available ? (
                        <Button
                            asChild
                            size="sm"
                            className="w-full bg-[#f9ab00] text-black hover:bg-[#e09a00] font-medium transition-all text-[10px] h-8"
                        >
                            <a href={module.colabLink} target="_blank" rel="noopener noreferrer">
                                Open Notebook
                            </a>
                        </Button>
                    ) : (
                        <ComingSoonDialog title="Notebook Coming Soon" description={`The Colab notebook for ${module.title} is being prepared. Check Day 1 in the Schedule section for available materials.`}>
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full font-medium transition-all text-[10px] h-8 border-orange-500/20 text-orange-500 hover:bg-orange-500/5 hover:text-orange-600"
                            >
                                Notebook (Soon)
                            </Button>
                        </ComingSoonDialog>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export function ModulesSection2026() {
    return (
        <section id="modules" className="py-12 md:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-10 select-none">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Online Workshop</Badge>
                    <MatrixText
                        text="Hands-on Training Modules"
                        className="min-h-0 py-0 mb-2 text-2xl sm:text-3xl md:text-4xl font-bold"
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
                                    <div className="h-full min-h-[400px]">
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

                {/* Desktop Carousel View */}
                <div className="hidden md:block px-4 lg:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4 items-stretch">
                            {modules.map((module, index) => (
                                <CarouselItem key={module.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="h-full min-h-[420px]"
                                    >
                                        <ModuleCard module={module} />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-12" />
                        <CarouselNext className="-right-12" />
                    </Carousel>
                </div>

                {/* Master Colab Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Card className="inline-block p-1 pr-4 border border-primary/20 bg-background shadow-sm rounded-full">
                            <div className="flex items-center gap-3">
                                <span className="bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground">Pro Tip</span>
                                <span className="text-sm text-muted-foreground hidden sm:inline">Want everything in one place?</span>
                                <ComingSoonDialog
                                    title="Master Notebook Coming Soon"
                                    description="The unified Master Notebook containing all 7 modules is being finalized. Individual Day 1 notebook is available above."
                                >
                                    <button
                                        className="text-sm font-semibold text-primary hover:underline inline-flex items-center cursor-pointer"
                                    >
                                        Master Notebook (Soon) <ExternalLink className="ml-1 size-3" />
                                    </button>
                                </ComingSoonDialog>
                            </div>
                        </Card>

                        <Card className="inline-block p-1 pr-4 border border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm rounded-full">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium">Data</span>
                                <a
                                    href="https://drive.google.com/drive/folders/11CeOLkJu6aE8ujMJN7qXj5eUVDKXCmm-?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center"
                                >
                                    Common Data Repository <ExternalLink className="ml-1 size-3" />
                                </a>
                            </div>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
