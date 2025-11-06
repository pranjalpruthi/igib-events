import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Coffee, Utensils, GraduationCap, Laptop, Users, ExternalLink } from 'lucide-react'

const scheduleData = [
    {
        day: 'Day 1',
        date: 'November 3, 2025',
        title: 'Foundations of One Health Bioinformatics & Pathogen Genomics',
        sessions: [
            { time: '08:00-09:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:00-09:30', icon: Users, title: 'Registration & Kit Distribution', type: 'admin' },
            { time: '09:30-09:45', icon: Users, title: 'Inauguration & Welcome Address by Dr. Souvik Maiti (Director, CSIR-IGIB)', type: 'admin' },
            { time: '09:45-10:00', icon: Users, title: 'Welcome for Dr. Nivedita Gupta (Head Communicable Diseases Division, ICMR) followed by Speech', type: 'admin' },
            { time: '10:00-10:15', icon: Users, title: 'Photo Session', type: 'admin' },
            { time: '10:15-11:15', icon: GraduationCap, title: 'Talk 1: One Health Framework & Sequencing Technologies', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '11:15-11:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:30-13:00', icon: Laptop, title: 'Software and Dependencies Installation', type: 'setup' },
            { time: '13:00-14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { 
                time: '14:00-15:15', 
                icon: Laptop, 
                title: 'Hands-on Session 1A: Linux Basics for Bioinformatics', 
                description: 'Command-line navigation, File handling and text processing, Writing simple shell scripts',
                tools: 'Linux/Unix, Bash scripting',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '15:15-15:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { 
                time: '15:30-17:00', 
                icon: Laptop, 
                title: 'Hands-on Session 1B: NGS Data Quality Assessment', 
                description: 'Running FastQC on raw sequencing data, Quality trimming with Trimmomatic, Generating MultiQC reports',
                tools: 'FastQC, Trimmomatic, MultiQC',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '17:00-18:00', icon: Users, title: 'CSIR-IGIB Bio-bank and HPC visit', type: 'tour' },
            { time: '20:00-21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 2',
        date: 'November 4, 2025',
        title: 'Metagenomics for One Health Surveillance',
        sessions: [
            { time: '08:00-09:15', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:15-09:30', icon: Users, title: 'Overview for the Day', type: 'admin' },
            { time: '09:30-10:00', icon: GraduationCap, title: 'Talk 2: Genome Assembly', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { 
                time: '10:00-11:15', 
                icon: Laptop, 
                title: 'Hands-on Session 2A(I): Metagenome Assembly Basics', 
                description: 'Viral Genome Assembly using Setu pipeline, Running assembly with MetaSPAdes',
                tools: 'Setu, MetaSPAdes',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '11:15-11:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { 
                time: '11:30-12:00', 
                icon: Laptop, 
                title: 'Hands-on Session 2A(II): Metagenome Assembly Basics', 
                description: 'Quality assessment of assembled contigs, Binning assembled contigs into MAGs',
                tools: 'QUAST, MetaBAT2',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '12:00-13:00', icon: GraduationCap, title: 'Talk 3: Precision Microbiomics - Unraveling the Antimicrobial Resistome with BHARAT pipeline', speaker: 'Dr. Souvik Mukherjee', type: 'lecture' },
            { time: '13:00-14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { 
                time: '14:00-15:15', 
                icon: Laptop, 
                title: 'BHARAT pipeline for annotation', 
                speaker: 'Mr. Shankha Nath',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '15:15-15:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '15:30-16:30', icon: GraduationCap, title: 'Talk 4', speaker: 'Dr. Rakesh Sharma', type: 'lecture' },
            { 
                time: '16:30-18:00', 
                icon: Laptop, 
                title: 'Hands-on Session 2B: Metagenomic Community Profiling', 
                description: 'Taxonomic classification with Kraken2, Visualization with Krona, Functional profiling with HUMAnN, Abundance estimation with MetaPhlAn',
                tools: 'Kraken2, Krona, HUMAnN, MetaPhlAn',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '20:00-21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 3',
        date: 'November 5, 2025',
        title: 'Hologenome Analysis - Host-Microbiome-Pathogen Interactions',
        sessions: [
            { time: '08:00-09:15', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:15-09:30', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '09:30-11:00', icon: GraduationCap, title: 'Talk 5: NGS Data Analysis using AI Methods', speaker: 'Dr. Shandar Ahmed', type: 'lecture' },
            { time: '11:15-11:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:30-13:00', icon: GraduationCap, title: 'Talk 6: Economics of Genomics through lens of Active and Inactive Microbes', speaker: 'Dr. Rajesh Pandey', type: 'lecture' },
            { time: '13:00-14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00-15:30', icon: GraduationCap, title: 'Talk 7: Discovery of Drug Resistance Factors in Multi-Omics Data', speaker: 'Dr. Manish Kumar', type: 'lecture' },
            { time: '15:30-15:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { 
                time: '15:45-16:45', 
                icon: Laptop, 
                title: 'Hands-on Session 3A: AMR & Virulence Prediction', 
                description: 'Explore key AMR databases, Genome-based resistance prediction tools, Analytical workflows used in research and clinical microbiology',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { 
                time: '16:45-18:00', 
                icon: Laptop, 
                title: 'Hands-on Session 3B: Microbiome Analysis', 
                description: 'Antimicrobial resistance prediction using AI with SPARA, AMR detection using Marker-ML',
                tools: 'SPARA, Marker-ML',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '20:00-21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 4',
        date: 'November 6, 2025',
        title: 'Comparative Genomics & Pathogen Surveillance',
        sessions: [
            { time: '08:00-09:15', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:15-09:30', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '09:30-10:30', icon: GraduationCap, title: 'Talk 8: Federated AI and Machine Learning Opportunities for Longitudinal Surveillance of AMR', speaker: 'Dr. Kumardeep Chaudhary', type: 'lecture' },
            { 
                time: '10:30-11:15', 
                icon: Laptop, 
                title: 'Hands-on Session 4A: Genome Annotation & Functional Enrichment', 
                description: 'Genome annotation with Prokka, Enrichment analysis with getEnrich',
                tools: 'Prokka, getEnrich',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '11:15-11:30', icon: Coffee, title: 'Tea Break', type: 'break' },
            { 
                time: '11:30-13:00', 
                icon: Laptop, 
                title: 'Hands-on Session 4B: Pan-genome & Structural Variation Analysis', 
                description: 'Synteny block analysis, Chromosome breakpoint mapping, Detecting and visualizing genomic rearrangements, Pan-genome construction with Roary, Comprehensive SSR analysis with CrossRoads',
                tools: 'Chitra, Roary, CrossRoads',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '13:00-14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { 
                time: '14:00-15:30', 
                icon: Laptop, 
                title: 'Hands-on Session 4C: Pathogen Genome Analysis', 
                description: 'Bacterial genome identification through alignment and assembly, Reference-based mapping to generate consensus genomes, Comparative coverage assessment, De-novo assembly, Interpretation of genome assembly statistics',
                tools: 'Minimap2, BWA-MEM, SAMtools, Medaka, Bcftools, Flye, Canu, SPAdes',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '15:30-15:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { 
                time: '15:45-18:00', 
                icon: Laptop, 
                title: 'Hands-on Session 4D: Host Response Analysis', 
                description: 'Differential Expression Analysis with DESeq2, Visualization of expression data, Pathway Enrichment Analysis using Enrichr/STRING, Network visualization using Cytoscape',
                tools: 'limma, DESeq2, R/ggplot2, Enrichr, STRING, Cytoscape',
                colabLink: 'https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing',
                type: 'handson' 
            },
            { time: '20:00-21:00', icon: Utensils, title: 'Gala Dinner (Venue: Sandoz Restaurant, Mathura Road)', type: 'meal', special: true },
        ]
    },
    {
        day: 'Day 5',
        date: 'November 7, 2025',
        title: 'Harnessing Biological Data for Pathogen Research',
        sessions: [
            { time: '08:00-09:15', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:15-09:30', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '09:30-11:30', icon: GraduationCap, title: 'Talk 9: Integrating Data and Discovery - IBDC for Pathogen Research', speaker: 'Dr. Sanjay Deshpande', type: 'lecture' },
            { time: '11:30-11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45-13:00', icon: GraduationCap, title: 'Valedictory & Certificate Distribution', description: 'Closing remarks, Feedback collection, Certificate distribution, High tea', type: 'closing', special: true },
            { time: '13:00-14:00', icon: Utensils, title: 'Lunch', type: 'meal' },
        ]
    },
]

const getTypeColor = (type: string) => {
    switch (type) {
        case 'lecture': return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
        case 'handson': return 'bg-green-500/10 text-green-700 dark:text-green-400'
        case 'break': return 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
        case 'meal': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400'
        case 'tour': return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
        case 'closing': return 'bg-pink-500/10 text-pink-700 dark:text-pink-400'
        default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-400'
    }
}

export function WorkshopSchedule() {
    return (
        <section id="schedule" className="py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Workshop Schedule</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive 5-day program with lectures and hands-on training
                    </p>
                </div>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="space-y-4">
                        {scheduleData.map((day, dayIndex) => (
                            <AccordionItem 
                                key={dayIndex} 
                                value={`day-${dayIndex}`}
                                className="rounded-2xl border bg-card px-6 shadow-sm"
                            >
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Calendar className="size-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">{day.day} • {day.date}</p>
                                            <p className="mt-1 text-lg font-semibold">{day.title}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <div className="mt-4 space-y-4">
                                        {day.sessions.map((session, sessionIndex) => {
                                            const Icon = session.icon
                                            return (
                                                <div 
                                                    key={sessionIndex}
                                                    className={`flex gap-4 rounded-xl border p-4 ${session.special ? 'border-primary bg-primary/5' : ''}`}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className={`flex size-10 items-center justify-center rounded-lg ${getTypeColor(session.type)}`}>
                                                            <Icon className="size-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <p className="text-sm font-medium text-muted-foreground">{session.time}</p>
                                                                    <Badge variant="outline" className="text-xs">
                                                                        {session.type}
                                                                    </Badge>
                                                                </div>
                                                                <p className="mt-1 font-semibold">{session.title}</p>
                                                                {session.speaker && (
                                                                    <p className="mt-1 text-sm text-muted-foreground">
                                                                        Speaker: {session.speaker}
                                                                    </p>
                                                                )}
                                                                {session.description && (
                                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                                        {session.description}
                                                                    </p>
                                                                )}
                                                                {session.tools && (
                                                                    <p className="mt-1 text-xs text-muted-foreground">
                                                                        <span className="font-medium">Tools:</span> {session.tools}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            {session.colabLink && (
                                                                <Button
                                                                    asChild
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="flex-shrink-0"
                                                                >
                                                                    <a href={session.colabLink} target="_blank" rel="noopener noreferrer">
                                                                        <span className="text-xs">Colab</span>
                                                                        <ExternalLink className="ml-1 size-3" />
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline">
                        <a href="https://dub.sh/nOwquyu" target="_blank" rel="noopener noreferrer">
                            View Full Schedule
                            <ExternalLink className="ml-2 size-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

