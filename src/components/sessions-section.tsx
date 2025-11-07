import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Copy, Check } from 'lucide-react'
import { motion } from 'motion/react'

const sessions = [
    {
        id: '1A',
        title: 'Linux Basics for Bioinformatics',
        tools: ['Linux / Unix', 'Bash scripting', 'grep, awk, sed', 'File handling'],
        objective: 'Learn essential terminal operations, environment setup, and basic automation to support downstream analysis.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        pptLink: 'https://unix-linux-basics-rrducqu.gamma.site/',
        available: true,
        installCmd: 'mamba install -c bioconda bash coreutils'
    },
    {
        id: '1B',
        title: 'NGS Data Quality Assessment',
        tools: ['FastQC', 'Trimmomatic', 'MultiQC'],
        objective: 'Perform data quality control to ensure accurate downstream genome assembly.',
        colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
        available: true,
        installCmd: 'mamba install -c bioconda fastqc trimmomatic multiqc'
    },
    {
        id: '2A(I)',
        title: 'Metagenome Assembly Basics',
        tools: ['Setu Pipeline', 'MetaSPAdes'],
        objective: 'Assemble raw reads into contigs and scaffolds for metagenomic datasets.',
        colabLink: 'https://colab.research.google.com/drive/1fMCrkI5jXTpuRgB_MUGamZOvhkDk4pRd?usp=sharing',
        available: true,
        installCmd: 'mamba install -c bioconda spades'
    },
    {
        id: '2A(II)',
        title: 'Assembly Quality Assessment & Binning',
        tools: ['QUAST', 'MetaBAT2'],
        objective: 'Assess assembly completeness and extract representative genomes.',
        colabLink: 'https://colab.research.google.com/drive/1fMCrkI5jXTpuRgB_MUGamZOvhkDk4pRd?usp=sharing',
        available: true,
        installCmd: 'mamba install -c bioconda quast metabat2'
    },
    {
        id: '2B',
        title: 'Metagenomic Community Profiling',
        tools: ['Kraken2', 'Krona', 'MetaPhlAn 3', 'HUMAnN 3'],
        objective: 'Characterize microbial community composition and metabolic potential from metagenomic data.',
        colabLink: 'https://colab.research.google.com/drive/1fMCrkI5jXTpuRgB_MUGamZOvhkDk4pRd?usp=sharing',
        available: true,
        installCmd: 'mamba install -c bioconda kraken2 krona metaphlan humann'
    },
    {
        id: '3A',
        title: 'AMR & Virulence Prediction',
        tools: ['ResFinder', 'CARD', 'AMRFinderPlus'],
        objective: 'Predict antimicrobial resistance and virulence factors from genome sequences.',
        colabLink: 'https://colab.research.google.com/drive/1kD92SJYlGRyVvTrQUog6x7CxqXcD0sag?usp=sharing',
        pptLink: 'https://amr-virulence-yv2bo1e.gamma.site/',
        available: true,
        installCmd: 'mamba install -c bioconda ncbi-amrfinderplus'
    },
    {
        id: '3B',
        title: 'Microbiome Analysis using AI/ML',
        tools: ['SPARA', 'Marker-ML'],
        objective: 'Use artificial intelligence to predict AMR and microbial function from hologenomic data.',
        colabLink: 'https://colab.research.google.com/drive/1kD92SJYlGRyVvTrQUog6x7CxqXcD0sag?usp=sharing',
        available: true,
        installCmd: 'pip install spara-ml'
    },
    {
        id: '4A',
        title: 'Genome Annotation & Functional Enrichment',
        tools: ['Prokka', 'getEnrich'],
        objective: 'Annotate bacterial genomes and interpret gene functions through pathway analysis.',
        colabLink: null,
        available: false,
        installCmd: 'mamba install -c bioconda prokka'
    },
    {
        id: '4B',
        title: 'Pan-genome & Structural Variation Analysis',
        tools: ['Chitra', 'Roary', 'CrossRoads'],
        objective: 'Compare multiple genomes to identify conserved and unique genes, chromosomal breakpoints, and genome rearrangements.',
        colabLink: null,
        available: false,
        installCmd: 'mamba install -c bioconda roary'
    },
    {
        id: '4C',
        title: 'Pathogen Genome Analysis',
        tools: ['Minimap2', 'BWA-MEM', 'SAMtools', 'Bcftools', 'Medaka', 'Flye', 'Canu', 'SPAdes'],
        objective: 'Construct complete pathogen genomes and compare reference-based and de-novo assemblies.',
        colabLink: null,
        available: false,
        installCmd: 'mamba install -c bioconda minimap2 bwa samtools bcftools flye canu spades'
    },
    {
        id: '4D',
        title: 'Host Response Analysis',
        tools: ['DESeq2', 'limma', 'Enrichr', 'STRING', 'Cytoscape', 'R/ggplot2'],
        objective: 'Analyze host transcriptional changes during infection and visualize gene interaction networks.',
        colabLink: null,
        available: false,
        installCmd: 'mamba install -c bioconda bioconductor-deseq2 bioconductor-limma r-ggplot2'
    },
]

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="h-8 px-2"
        >
            {copied ? (
                <Check className="size-4 text-green-600" />
            ) : (
                <Copy className="size-4" />
            )}
        </Button>
    )
}

export function SessionsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        🧬 Hands-on Training Sessions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive practical training from Linux basics to advanced genomics analysis
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {sessions.map((session, index) => (
                        <motion.div
                            key={session.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col transition-all hover:shadow-xl hover:shadow-primary/20 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-2 hover:border-primary/30">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <Badge variant="outline" className="mb-2">
                                                Session {session.id}
                                            </Badge>
                                            <CardTitle className="text-lg">
                                                {session.title}
                                            </CardTitle>
                                        </div>
                                        {session.available ? (
                                            <Badge className="shrink-0 bg-green-600">Available</Badge>
                                        ) : (
                                            <Badge variant="secondary" className="shrink-0">Coming Soon</Badge>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col space-y-4">
                                    {/* Tools */}
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Tools:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {session.tools.map((tool, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Objective */}
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Objective:</p>
                                        <p className="text-sm text-muted-foreground">
                                            {session.objective}
                                        </p>
                                    </div>

                                    {/* Install Command */}
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Install:</p>
                                        <div className="flex items-center gap-2 rounded-lg bg-muted p-2">
                                            <code className="flex-1 text-xs overflow-x-auto">
                                                {session.installCmd}
                                            </code>
                                            <CopyButton text={session.installCmd} />
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-auto space-y-2">
                                        {/* Colab Link */}
                                        {session.available && session.colabLink ? (
                                            <Button
                                                asChild
                                                className="w-full bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90 shadow-md shadow-[#F9AB00]/20 hover:shadow-lg hover:shadow-[#F9AB00]/30 transition-all"
                                                size="sm"
                                            >
                                                <a href={session.colabLink} target="_blank" rel="noopener noreferrer">
                                                    <span>Open Colab Notebook</span>
                                                    <ExternalLink className="ml-2 size-4" />
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button
                                                disabled
                                                className="w-full"
                                                size="sm"
                                                variant="secondary"
                                            >
                                                Notebook Coming Soon
                                            </Button>
                                        )}
                                        
                                        {/* PPT Link */}
                                        {session.pptLink && (
                                            <Button
                                                asChild
                                                className="w-full"
                                                size="sm"
                                                variant="outline"
                                            >
                                                <a href={session.pptLink} target="_blank" rel="noopener noreferrer">
                                                    <span>View Presentation</span>
                                                    <ExternalLink className="ml-2 size-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Sample Data & Resources */}
                <div className="mt-16 space-y-6">
                    {/* Sample Data Repository */}
                    <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">📦 Sample Data Repository</h3>
                                <p className="text-muted-foreground mb-4">
                                    Access all workshop sample datasets in one central location. This Google Drive folder contains data for all training sessions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700 text-white shadow-lg shadow-lime-600/30 hover:shadow-xl hover:shadow-lime-600/40 transition-all">
                                        <a href="https://drive.google.com/drive/folders/1ILlIgXQZw2-ADOgwDm2aiJodZ-JN2vOH" target="_blank" rel="noopener noreferrer">
                                            <span>Open Sample Data Drive</span>
                                            <ExternalLink className="ml-2 size-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HPC Access Info */}
                    <div className="rounded-2xl border bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">🖥️ HPC Access - Tejas Supercomputer</h3>
                                <p className="text-muted-foreground mb-4">
                                    Workshop materials are available on Tejas HPC. Access via the Resource Cockpit using the path below:
                                </p>
                                <div className="flex items-center gap-2 rounded-lg bg-muted p-3 mb-4 font-mono text-sm">
                                    <code className="flex-1">/home/workshop/</code>
                                    <CopyButton text="/home/workshop/" />
                                </div>
                                <Button asChild variant="outline" size="lg">
                                    <a href="https://subpyramidic-lewis-luminously.ngrok-free.dev" target="_blank" rel="noopener noreferrer">
                                        <span>Access Resource Cockpit</span>
                                        <ExternalLink className="ml-2 size-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Access Links */}
                <div className="mt-16 rounded-2xl border bg-card p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">📚 Quick Access</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Button asChild variant="outline" className="h-auto py-4">
                            <a href="https://www.canva.com/design/DAG3bQ0I9B8/2Q5S6W9e0Kj2ofaOqeMeYw/view?utm_content=DAG3bQ0I9B8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdaf0b68eab" target="_blank" rel="noopener noreferrer">
                                <div className="text-center">
                                    <p className="font-semibold">📘 Brochure</p>
                                    <p className="text-xs text-muted-foreground">Download PDF</p>
                                </div>
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="h-auto py-4">
                            <a href="https://dub.sh/nOwquyu" target="_blank" rel="noopener noreferrer">
                                <div className="text-center">
                                    <p className="font-semibold">🗓️ Schedule</p>
                                    <p className="text-xs text-muted-foreground">View Calendar</p>
                                </div>
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="h-auto py-4">
                            <a href="https://subpyramidic-lewis-luminously.ngrok-free.dev" target="_blank" rel="noopener noreferrer">
                                <div className="text-center">
                                    <p className="font-semibold">💻 Resource Cockpit</p>
                                    <p className="text-xs text-muted-foreground">Access Portal</p>
                                </div>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

