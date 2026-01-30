import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Copy, Check, Terminal, BookOpen, Cpu, Dna, Bug, BarChart3, Microscope } from 'lucide-react'
import { motion } from 'motion/react'

const modules = [
    {
        id: '1',
        title: 'Linux & Computational Basics',
        icon: Terminal,
        topics: ['Linux environment', 'Architecture & file systems', 'Commands & permissions', 'Processes & navigation'],
        objective: 'Learn Linux environment, architecture, file systems, commands, permissions, and processes; hands-on navigation and working with genomic files.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: '2',
        title: 'BASH & Command Line Automation',
        icon: Cpu,
        topics: ['Shell fundamentals', 'Variables, loops, conditions', 'awk, sed, grep', 'Scripts & pipelines'],
        objective: 'Master shell fundamentals, variables/loops/conditions, text processing with awk/sed/grep; hands-on scripts and simple pipelines.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: '3',
        title: 'NGS Technologies & QC',
        icon: Microscope,
        topics: ['Sequencing platforms', 'Read quality metrics', 'Adapter & GC issues', 'FastQC & MultiQC'],
        objective: 'Understand sequencing platforms, read quality metrics, adapter/GC issues; hands-on FastQC and MultiQC reporting.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: '4',
        title: 'Genome Assembly',
        icon: Dna,
        topics: ['De novo vs reference', 'Assembly strategies', 'N50 & contig stats', 'SPAdes & evaluation'],
        objective: 'Compare de novo vs reference-based assembly, learn assembly strategies, N50/contig stats; hands-on SPAdes and evaluation.',
        colabLink: 'https://colab.research.google.com/drive/1fMCrkI5jXTpuRgB_MUGamZOvhkDk4pRd?usp=sharing',
        available: true,
        color: 'from-orange-500 to-red-500'
    },
    {
        id: '5',
        title: 'Genome Annotation',
        icon: BookOpen,
        topics: ['Gene prediction', 'Functional databases', 'Annotation pipelines', 'Prokka workflow'],
        objective: 'Learn gene prediction, functional databases, annotation pipelines; hands-on Prokka workflow and interpretation.',
        colabLink: 'https://colab.research.google.com/drive/1w9ThIz4xlhG_mwYVFx-iAfYLOPp10ztr?usp=sharing',
        available: true,
        color: 'from-indigo-500 to-violet-500'
    },
    {
        id: '6',
        title: 'AMR Detection',
        icon: Bug,
        topics: ['AMR mechanisms', 'Resistance databases', 'Surveillance methods', 'Gene detection'],
        objective: 'Understand AMR mechanisms, databases, surveillance; hands-on AMR gene detection and interpretation.',
        colabLink: 'https://colab.research.google.com/drive/1kD92SJYlGRyVvTrQUog6x7CxqXcD0sag?usp=sharing',
        available: true,
        color: 'from-rose-500 to-red-500'
    },
    {
        id: '7',
        title: 'Gene Enrichment Analysis',
        icon: BarChart3,
        topics: ['GO & KEGG databases', 'Enrichment statistics', 'Chitra Pipeline', 'Pathway visualization'],
        objective: 'Learn GO/KEGG databases, enrichment statistics; hands-on Chitra Pipeline for GO enrichment and pathway visualization.',
        colabLink: 'https://colab.research.google.com/drive/1w9ThIz4xlhG_mwYVFx-iAfYLOPp10ztr?usp=sharing',
        available: true,
        color: 'from-amber-500 to-yellow-500'
    },
]

export function ModulesSection2026() {
    return (
        <section id="modules" className="py-24 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Online Workshop</Badge>
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        💻 Hands-on Training Modules
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive 7-module online program from Linux basics to advanced gene enrichment analysis
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col transition-all hover:shadow-xl hover:shadow-primary/20 bg-white dark:bg-gray-900 border hover:border-primary/50 overflow-hidden">
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${module.color}`} />

                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex size-10 items-center justify-center rounded-lg bg-gradient-to-br ${module.color} text-white`}>
                                                <module.icon className="size-5" />
                                            </div>
                                            <div>
                                                <Badge variant="outline" className="mb-1 border-primary/30 text-primary text-xs">
                                                    Module {module.id}
                                                </Badge>
                                                <CardTitle className="text-lg text-gray-900 dark:text-white">
                                                    {module.title}
                                                </CardTitle>
                                            </div>
                                        </div>
                                        {module.available ? (
                                            <Badge className="shrink-0 bg-green-600 hover:bg-green-700 text-white">Available</Badge>
                                        ) : (
                                            <Badge variant="secondary" className="shrink-0 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Coming Soon</Badge>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1 flex flex-col space-y-4">
                                    {/* Topics */}
                                    <div>
                                        <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Topics Covered:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {module.topics.map((topic, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Objective */}
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Objective:</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {module.objective}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-2 space-y-2">
                                        <Button
                                            asChild
                                            className={`w-full ${!module.available && 'pointer-events-none opacity-50'} bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90`}
                                        >
                                            <a href={module.colabLink} target="_blank" rel="noopener noreferrer">
                                                <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Colab" className="size-4 mr-2" />
                                                Open Colab Notebook
                                                <ExternalLink className="ml-2 size-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
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
                    <Card className="inline-block p-6 border-2 border-dashed border-primary/30 bg-primary/5">
                        <p className="text-sm text-muted-foreground mb-3">Access all modules in one notebook:</p>
                        <Button asChild size="lg" className="bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90">
                            <a href="https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Colab" className="size-5 mr-2" />
                                Open Master Colab Notebook
                                <ExternalLink className="ml-2 size-4" />
                            </a>
                        </Button>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
