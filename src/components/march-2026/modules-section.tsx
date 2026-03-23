import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Copy, Check, Github, Star, Presentation, FlaskConical, FileText, Database, Terminal, Laptop } from 'lucide-react'
import { motion } from 'motion/react'
import MatrixText from '@/components/kokonutui/matrix-text'

interface Resource {
    label: string
    href: string
    icon: any
}

interface Module {
    id: string
    title: string
    subtitle?: string
    objectives: string[]
    description: string
    githubLink?: string
    pptLinks: Resource[]
    toolLinks: Resource[]
    paperLinks?: Resource[]
    tools: string[]
    available: boolean
}

const modules: Module[] = [
    {
        id: '1',
        title: 'Day 1: The Genomic Compass',
        subtitle: 'Navigating One Health Bioinformatics',
        description: 'Setting up computational environments and mastering the command line—the backbone of bioinformatics.',
        objectives: [
            'Installation and Linux system setup',
            'Command-line navigation and Unix utilities (grep, awk, sed)',
            'BASH scripting and environment management with Conda/Mamba'
        ],
        githubLink: 'https://github.com/BioinformaticsOnLine/one-health-26/tree/main/DAY_1',
        pptLinks: [
            { label: 'Linux Basics & Introduction', href: 'https://igib-icmr2-linux-basics-fvs6ipm.gamma.site', icon: Presentation }
        ],
        toolLinks: [
            { label: 'Sandbox.bio', href: 'http://sandbox.bio', icon: Laptop }
        ],
        tools: ['Linux', 'Bash', 'Conda', 'Git', 'seqkit', 'seqtk'],
        available: true
    },
    {
        id: '2',
        title: 'Day 2: The Assembly Quest',
        subtitle: 'From Raw Data to Complete Genomes',
        description: 'Transforming fragmented sequencing data into contiguous genome representations through computational reconstruction.',
        objectives: [
            'Understanding De-novo assembly workflows',
            'Performing assembly quality assessment (QA)',
            'Reference-based vs De-novo assembly comparisons'
        ],
        githubLink: 'https://github.com/BioinformaticsOnLine/one-health-26/tree/main/DAY_2',
        pptLinks: [
            { label: 'Genome Assembly Concepts', href: 'https://genome-assembly-0nd3td3.gamma.site', icon: Presentation },
            { label: 'Assembly Quality & Improvement', href: 'https://assembly-quality-improve-4jaewvk.gamma.site', icon: Presentation }
        ],
        toolLinks: [
            { label: 'QUAST Tool', href: 'https://assembly-quality-improve-4jaewvk.gamma.site', icon: FlaskConical }
        ],
        tools: ['SPAdes', 'Flye', 'Canu', 'QUAST', 'Minimap2'],
        available: true
    },
    {
        id: '3',
        title: 'Day 3: Pathogen Surveillance',
        subtitle: 'AMR & Virulence Prediction',
        description: 'Master practical detection of resistance genes and virulence factors using state-of-the-art bioinformatics tools.',
        objectives: [
            'Exploring AMR databases (CARD, ResFinder)',
            'Genome-based resistance tool workflows',
            'Interpreting AMR dynamics in clinical and research settings'
        ],
        githubLink: 'https://github.com/BioinformaticsOnLine/one-health-26/tree/main/DAY_3',
        pptLinks: [
            { label: 'AMR & Virulence Prediction', href: 'https://amr-virulence-yv2bo1e.gamma.site', icon: Presentation },
            { label: 'AMR: Genomic Perspective', href: 'https://4a-session-amr-nst465o.gamma.site', icon: Presentation }
        ],
        toolLinks: [
            { label: 'AMRFinderPlus', href: 'https://github.com/ncbi/amrfinder', icon: FlaskConical },
            { label: 'AMR India Nexus', href: 'https://amr.igib.res.in', icon: Database }
        ],
        tools: ['AMRFinderPlus', 'RGI', 'ABRicate', 'CARD', 'Nexus'],
        available: true
    },
    {
        id: '4',
        title: 'Day 4: Evolution & Alignment',
        subtitle: 'Sequence Comparison & Mutational Hotspots',
        description: 'Analyzing simple sequence repeats (SSRs) and evolutionary patterns across multiple genomes.',
        objectives: [
            'Advanced sequence alignment scoring models',
            'SSR mediated adaptive genome evolution',
            'Identifying mutational hotspots in genomic data'
        ],
        githubLink: 'https://github.com/BioinformaticsOnLine/one-health-26/tree/main/DAY_4',
        pptLinks: [
            { label: 'Sequence Alignment Guide', href: 'https://gamma.app/docs/Sequence-Alignment-A-Comprehensive-Exam-Review-Guide-ju9wds26xuv3rd9', icon: Presentation },
            { label: 'Scoring DNA/Protein Alignment', href: 'https://gamma.app/docs/Scoring-Alignment-DNAProtein-Sequence-Comparison-vkkmgfkhhwnw6cd', icon: Presentation },
            { label: 'croSSRoad SSR Database', href: 'https://gamma.app/docs/croSSRoadDB-A-User-Friendly-Database-for-SSR-Mediated-Adaptive-Ge-behjeovjnjum6ec', icon: Presentation },
            { label: 'Multiple Sequence Alignment', href: 'https://gamma.app/docs/Multiple-Sequence-Alignment-DNAProtein-Sequence-Comparison-bm5g1fyfb984fp1', icon: Presentation }
        ],
        toolLinks: [
            { label: 'croSSRoad Tool', href: 'https://crossroad.igib.res.in', icon: FlaskConical }
        ],
        paperLinks: [
            { label: 'croSSRoad GitHub', href: 'https://github.com/BioinformaticsOnLine/croSSRoad', icon: Github }
        ],
        tools: ['croSSRoad', 'ClustalW', 'MAFFT', 'MUSCLE'],
        available: true
    },
    {
        id: '5',
        title: 'Day 5: Advanced Resources',
        subtitle: 'Specialized Tools & Knowledgebases',
        description: 'Harnessing integrated, curated knowledgebases for deep genomic insights and target drug discovery.',
        objectives: [
            'Integrated resources for WHO priority pathogens',
            'Functional enrichment and genome annotation',
            'AI-driven prediction of antimicrobial resistance'
        ],
        githubLink: 'https://github.com/BioinformaticsOnLine/one-health-26/tree/main/DAY_5',
        pptLinks: [
            { label: 'Specialized Genomic Resources', href: 'https://gamma.app/docs/Specialized-Genomic-Resources-qpc3xndiiww60yn', icon: Presentation },
            { label: 'Chitra Presentation', href: 'https://www.beautiful.ai/-OnzIEThhus_DvllxNNg/2', icon: Presentation }
        ],
        toolLinks: [
            { label: 'ARKbase 1.0', href: 'https://datascience.imtech.res.in/anshu/arkbase/', icon: Database },
            { label: 'GetEnrich', href: 'https://getenrich.igib.res.in', icon: FlaskConical },
            { label: 'Chitra Tool', href: 'https://chitra.bioinformaticsonline.com', icon: FlaskConical },
            { label: 'SPARA ML', href: 'https://spara.igib.res.in', icon: FlaskConical }
        ],
        paperLinks: [
            { label: 'ARKbase NAR 2024', href: 'https://academic.oup.com/nar/article/54/D1/D703/8402083', icon: FileText },
            { label: 'GetEnrich Paper', href: 'https://academic.oup.com/bioinformaticsadvances/article/5/1/vbaf023/8005226', icon: FileText }
        ],
        tools: ['ARKbase', 'SPARA', 'GetEnrich', 'Chitra'],
        available: true
    }
]

const extraModules = [
    {
        title: 'NGS File Formats & Tools',
        description: 'Essential grounding in the various file formats used in NGS and installation of required bioinformatics tools.',
        pptLinks: [
            { label: 'Essential NGS Formats', href: 'https://gamma.app/docs/Essential-NGS-File-Formats-From-Raw-Reads-to-Variants-eudjfddzj96ve20', icon: Presentation },
            { label: 'Tools Installation Workshop', href: 'https://bioinformatics-tools-wor-o5idf5d.gamma.site', icon: Presentation }
        ],
        tools: ['FASTQ', 'SAM/BAM', 'VCF', 'GFF', 'Trimmomatic', 'FastQC', 'MultiQC'],
        paperLinks: [
             { label: 'MultiQC Paper', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5039924/', icon: FileText }
        ]
    }
]

export function ModulesSection2026March() {
    return (
        <section id="modules" className="py-24 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <MatrixText
                        text="Workshop Training Modules"
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    />
                    <p className="text-lg text-muted-foreground">
                        Unlock the power of genomic data through our comprehensive, 
                        day-by-day training modules and specialized resources.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col border-emerald-500/20 bg-card/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all group shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors" />
                                
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                                            Day {module.id}
                                        </Badge>
                                        {module.githubLink && (
                                            <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-emerald-500/10 hover:text-emerald-600">
                                                <a href={module.githubLink} target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                                                    <Github className="size-5" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                                        {module.title}
                                    </CardTitle>
                                    {module.subtitle && (
                                        <p className="text-sm font-medium text-emerald-600/80 dark:text-emerald-400/80 mt-1 uppercase tracking-wider">
                                            {module.subtitle}
                                        </p>
                                    )}
                                </CardHeader>

                                <CardContent className="flex-1 flex flex-col space-y-6">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {module.description}
                                    </p>

                                    {/* Objectives */}
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Today's Focus</p>
                                        {module.objectives.map((obj, i) => (
                                            <div key={i} className="flex gap-2 items-start text-sm">
                                                <span className="size-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                                <span>{obj}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {module.tools.map((tool, i) => (
                                            <Badge key={i} variant="secondary" className="text-[10px] font-mono bg-blue-500/5 border-blue-500/20 text-blue-600 hover:bg-blue-500/10">
                                                {tool}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Links Section */}
                                    <div className="mt-auto pt-6 space-y-3">
                                        {module.githubLink && (
                                            <Button asChild variant="outline" className="w-full border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500 group/btn h-12 rounded-xl">
                                                <a href={module.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <div className="flex flex-col items-center">
                                                        <div className="flex items-center">
                                                            <Github className="mr-2 size-4" />
                                                            <span>Access Repository</span>
                                                            <Star className="ml-2 size-3 text-amber-500 fill-amber-500 animate-pulse" />
                                                        </div>
                                                        <span className="text-[9px] text-muted-foreground mt-0.5">Star the repo to support our community!</span>
                                                    </div>
                                                </a>
                                            </Button>
                                        )}

                                        <div className="grid grid-cols-2 gap-2">
                                            {module.pptLinks.map((link, i) => (
                                                <Button key={i} asChild variant="secondary" size="sm" className="bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500/10 hover:text-emerald-600 border border-transparent hover:border-emerald-500/30 py-4 h-auto">
                                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                                                        <link.icon className="size-4" />
                                                        <span className="text-[10px] text-center line-clamp-1">{link.label}</span>
                                                    </a>
                                                </Button>
                                            ))}
                                            {module.toolLinks.map((link, i) => (
                                                <Button key={i} asChild variant="secondary" size="sm" className="bg-slate-100 dark:bg-slate-800 hover:bg-blue-500/10 hover:text-blue-600 border border-transparent hover:border-blue-500/30 py-4 h-auto">
                                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                                                        <link.icon className="size-4" />
                                                        <span className="text-[10px] text-center line-clamp-1">{link.label}</span>
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>

                                        {module.paperLinks && (
                                            <div className="pt-2 border-t border-emerald-500/10">
                                                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Key References</p>
                                                <div className="flex flex-col gap-1">
                                                    {module.paperLinks.map((link, i) => (
                                                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                                                            <link.icon className="size-3" />
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* Extra Resources Card */}
                    {extraModules.map((extra, index) => (
                        <motion.div
                            key="extra"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col border-blue-500/20 bg-blue-500/5 backdrop-blur-sm transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
                                <CardHeader>
                                    <Badge className="w-fit mb-2 bg-blue-600">Foundation</Badge>
                                    <CardTitle className="text-xl">{extra.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {extra.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {extra.tools.map((tool, i) => (
                                            <Badge key={i} variant="secondary" className="text-[10px] font-mono">
                                                {tool}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="space-y-2 pt-4">
                                        {extra.pptLinks.map((link, i) => (
                                            <Button key={i} asChild variant="outline" size="sm" className="w-full justify-start border-blue-500/30 hover:bg-blue-500/10">
                                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                    <link.icon className="mr-2 size-4 text-blue-600" />
                                                    {link.label}
                                                </a>
                                            </Button>
                                        ))}
                                        {extra.paperLinks.map((link, i) => (
                                            <Button key={i} asChild variant="outline" size="sm" className="w-full justify-start border-blue-500/30 hover:bg-blue-500/10">
                                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                    <link.icon className="mr-2 size-4 text-blue-600" />
                                                    {link.label}
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Star CTA Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-center shadow-2xl shadow-emerald-500/20"
                >
                    <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
                        <Star className="size-8 fill-amber-400 text-amber-400" />
                        Join Our Open Source Community
                        <Star className="size-8 fill-amber-400 text-amber-400" />
                    </h3>
                    <p className="text-emerald-50/90 mb-6 max-w-2xl mx-auto">
                        All our workshop materials, scripts, and tutorials are open source. 
                        Help us grow the community by starring our repositories on GitHub!
                    </p>
                    <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full font-bold px-12 h-14 text-lg">
                        <a href="https://github.com/BioinformaticsOnLine/one-health-26" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-3 size-6" />
                            Star the Main Repo 🥲
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
