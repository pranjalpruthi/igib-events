import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Coffee, Utensils, GraduationCap, Laptop, Users, ExternalLink, LucideIcon, Download, Copy, CalendarPlus, Check } from 'lucide-react'

// TypeScript interface for session data
interface Session {
    time: string;
    icon: LucideIcon;
    title: string;
    type: string;
    speaker?: string;
    description?: string;
    tools?: string;
    colabLink?: string;
    special?: boolean;
}

interface DaySchedule {
    day: string;
    date: string;
    title: string;
    sessions: Session[];
}

const scheduleData: DaySchedule[] = [
    {
        day: 'Day 1',
        date: 'March 16, 2026',
        title: 'The Genomic Compass: Navigating One Health Bioinformatics',
        sessions: [
            { time: '08:00 - 09:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:00 - 09:30', icon: Users, title: 'Registration & Kit Distribution', description: 'Participant check-in, workshop materials distribution, and breakfast', type: 'admin' },
            { time: '09:30 - 10:00', icon: Users, title: 'Inauguration & Welcome Address', speaker: 'Dr. Souvik Maiti (honourable Director CSIR-IGIB)', description: 'Overview of the One Health approach and our goals for this workshop', type: 'admin' },
            { time: '10:00 - 10:20', icon: Users, title: 'Photo Session', type: 'admin' },
            { time: '10:20 - 11:00', icon: Users, title: 'Delegates Introduction', type: 'admin' },
            { time: '11:00 - 11:15', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:15 - 12:15', icon: GraduationCap, title: 'Talk 1: Harnessing Genomic Technologies for One Health Solutions', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '12:15 - 13:00', icon: Laptop, title: 'Hands-on Session 1A: Linux Basics for Bioinformatics', speaker: 'Anwesha', description: '• Installation and linux system setup • Command-line navigation • Conda/Mamba package manager', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:15', icon: Laptop, title: 'Hands-on Session 1B(i): Linux Basics for Bioinformatics', speaker: 'Anwesha', description: '• Setting up a Computational environment. • File handling and text processing • Writing simple shell scripts', type: 'handson' },
            { time: '15:15 - 15:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '15:45 - 17:00', icon: Laptop, title: 'Hands-on Session 1B(ii): Introduction to Bioinformatics Data', speaker: 'Ajay', description: '• Working with biological data formats • Understanding sequencing data formats • Data preprocessing and quality checks', type: 'handson' },
            { time: '17:00 - 18:00', icon: Users, title: 'CSIR - IGIB Bio-bank and HPC visit', type: 'tour' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 2',
        date: 'March 17, 2026',
        title: 'From Raw Data to Complete Genomes: The Assembly Quest',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview for the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk 2', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 12:15', icon: GraduationCap, title: 'Talk 3: Reconstructing the Genome', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '12:15 - 13:00', icon: Laptop, title: 'Hands-on Session 2A(i): Genome Assembly Workflow', speaker: 'Mukul', description: '• Running FastQC on raw sequencing data (Quality assessment) • Quality Assessment and visualization • Generating MultiQC reports', tools: 'FastQC, Fastp, MultiQC', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:30', icon: Laptop, title: 'Hands-on Session 2B(i): Genome Assembly', speaker: 'Mukul', description: '• Viral Genome Assembly using Setu pipeline • Running assembly with SPades', tools: 'Setu, Spades', type: 'handson' },
            { time: '15:30 - 16:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '16:00 - 18:00', icon: Laptop, title: 'Hands-on Session 2B(ii): Assembly Quality Assessment : Completeness and Contamination Check', speaker: 'Mukul', description: '• QUAST for assembled contig quality metrics • Assessing completeness and contamination • Contig Scaffolding with Ragtag', tools: 'Quast, BUSCO and Ragtag', type: 'handson' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 3',
        date: 'March 18, 2026',
        title: 'Deciphering Genetic Relationships through Comparative Genomic Analysis',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 13:00', icon: Laptop, title: 'Hands-on Session 3A(i): SNP & Variant Calling', speaker: 'Nityendra / Anwesha', description: '• Mapping Reads to Reference genomes • Variant Calling and filtering • Identifying important mutations for pathogen characterization', tools: 'minimap2, Samtools, bcftools', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:00', icon: GraduationCap, title: 'Talk', type: 'lecture' },
            { time: '15:00 - 15:30', icon: Laptop, title: 'Hands-on Session 3B(i): Sequence Alignment & Phylogenetic tree Construction', speaker: 'Mukul', description: '• Multiple Sequence Alignment (MSA) with MUSCLE/MAFFT • Building maximum likelihood tree with RAxML/IQtree • Tree Visualization and annotation', tools: 'MUSCLE/ MAFFT and RAxML/IQtree', type: 'handson' },
            { time: '15:30 - 16:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '17:00 - 18:00', icon: Laptop, title: 'Hands-on Session 3B(ii): Phylogenetic Tree Construction continued & other Genomic analysis', speaker: 'Ajay', description: '• Pathway Enrichment Analysis with getEnrich • Chromosomal rearrangement analysis with Chitra tool', type: 'handson' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 4',
        date: 'March 19, 2026',
        title: 'Antimicrobial Resistance Surveillance',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk', speaker: 'Dr. Bhupesh Taneja', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 13:00', icon: Laptop, title: 'Hands-on Session 4A(i): AMR Gene Detection', speaker: 'Anwesha', description: '• Exploring CARD and ResFinder databases • Identifying known resistance genes in assembled genomes • Understanding resistance gene nomenclature and classification', tools: 'CARD, ResFinder, AMRfinder', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:30', icon: Laptop, title: 'Hands-on Session 4B(i): Resistance Pattern Analysis', speaker: 'Anwesha', description: '• Detecting plasmid-mediated resistance • Analyzing resistance hotspots in genomes • Creating resistance Profiles for epidemiological tracking • Predicting antibiotic susceptibility from genomic data • Building prediction models for common pathogens • Interpreting clinical breakpoints', tools: 'Genoptypic & phenotypic correlation tools', type: 'handson' },
            { time: '15:30 - 16:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '16:00 - 18:00', icon: Laptop, title: 'Hands-on Session 4B(ii): AI-Powered Resistance Prediction', speaker: 'BT LAB', description: '• Understanding prediction models and confidence • Identifying novel/emerging resistance patterns before widespread characterization • Running predictions on real pathogen isolates', tools: 'SPARA, Marker-ML', type: 'handson' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Gala-Dinner', description: 'Venue: Sandoz Restraunt, Mathura Road', type: 'meal', special: true },
        ]
    },
    {
        day: 'Day 5',
        date: 'March 20, 2026',
        title: 'Conclusion',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk', speaker: 'Dr. Kumardeep Chaudhary', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 12:45', icon: GraduationCap, title: 'Talk', type: 'lecture' },
            { time: '12:45 - 13:30', icon: GraduationCap, title: 'Valedictory & Certificate Distribution', description: '• Closing remarks • Feedback collection • Certificate distribution', type: 'closing', special: true },
            { time: '13:30 - 14:30', icon: Utensils, title: 'Lunch', type: 'meal' },
            { time: '14:30 - 18:00', icon: Users, title: 'Delhi Darshan', type: 'tour' }
        ]
    },
]

const getTypeColor = (type: string) => {
    switch (type) {
        case 'lecture': return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
        case 'handson': return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
        case 'break': return 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
        case 'meal': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400'
        case 'tour': return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
        case 'closing': return 'bg-pink-500/10 text-pink-700 dark:text-pink-400'
        default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-400'
    }
}

function ScheduleActions() {
    const [copied, setCopied] = React.useState(false)

    const title = "Bioinformatics for One Health Workshop"
    const description = "Five-Day Hands-on Workshop covering Pathogen Genomics, Metagenomics & Antimicrobial Resistance Surveillance. Organized by CSIR-IGIB."
    const location = "CSIR-IGIB, Delhi"

    const startDate = "20260316"
    const startTime = "093000"
    const endTime = "170000"
    const recurrenceRule = "RRULE:FREQ=DAILY;COUNT=5"

    const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(title) + "&dates=" + startDate + "T" + startTime + "/" + startDate + "T" + endTime + "&details=" + encodeURIComponent(description) + "&location=" + encodeURIComponent(location) + "&recur=" + encodeURIComponent(recurrenceRule) + "&sf=true&output=xml";

    const handleDownloadICS = () => {
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//CSIR-IGIB//One Health Workshop//EN',
            'BEGIN:VEVENT',
            'SUMMARY:' + title,
            'DTSTART:' + startDate + 'T' + startTime,
            'DTEND:' + startDate + 'T' + endTime,
            'RRULE:' + recurrenceRule,
            'DESCRIPTION:' + description,
            'LOCATION:' + location,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n')

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'igib-one-health-workshop.ics')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleCopy = () => {
        let text = "*" + title + "*\nMar 16-20, 2026\n\n"
        scheduleData.forEach(day => {
            text += "*" + day.day + ": " + day.title + "* (" + day.date + ")\n"
            day.sessions.forEach((s: any) => {
                text += "• " + s.time + ": " + s.title + " (" + s.type + ")" + (s.speaker ? " - " + s.speaker : "") + "\n"
            })
            text += "\n"
        })

        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 mb-8 select-none">
            <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarPlus className="size-4 text-emerald-500" />
                    <span>Add to Google Calendar</span>
                </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleDownloadICS}>
                <Download className="size-4 text-teal-500" />
                <span>Save to Calendar (.ics)</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4 text-muted-foreground" />}
                <span>{copied ? 'Copied Schedule' : 'Copy Full Schedule'}</span>
            </Button>
        </div>
    )
}

export function ScheduleSection2026March() {
    return (
        <section id="schedule" className="py-24 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center select-none">
                    <Badge className="mb-3 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">5-Day Program</Badge>
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Workshop Schedule</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive 5-day program with lectures and hands-on training
                    </p>
                    <ScheduleActions />
                </div>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="space-y-4">
                        {scheduleData.map((day, dayIndex) => (
                            <AccordionItem
                                key={dayIndex}
                                value={"day-" + dayIndex}
                                className="rounded-2xl border bg-card px-6 shadow-sm hover:border-emerald-500/30 transition-colors"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 select-none group">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                            <Calendar className="size-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-emerald-600/80 dark:text-emerald-400">
                                                {day.day} • {day.date}
                                            </p>
                                            <p className="mt-1 text-lg font-semibold">{day.title}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <div className="mt-4 space-y-4">
                                        {day.sessions.map((session: Session, sessionIndex: number) => {
                                            const Icon = session.icon
                                            return (
                                                <div
                                                    key={sessionIndex}
                                                    className={"flex gap-4 rounded-xl border p-4 select-none " + (session.special === true ? 'border-emerald-500/50 bg-emerald-500/5' : 'hover:bg-muted/30 transition-colors')}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className={"flex size-10 items-center justify-center rounded-lg " + getTypeColor(session.type)}>
                                                            <Icon className="size-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <p className="text-sm font-medium text-muted-foreground">{session.time}</p>
                                                                    <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold opacity-80">
                                                                        {session.type}
                                                                    </Badge>
                                                                </div>
                                                                <p className="mt-1 font-semibold">{session.title}</p>
                                                                {session.speaker && (
                                                                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                                                                        🎙️ {session.speaker}
                                                                    </p>
                                                                )}
                                                                {session.description && (
                                                                    <p className="mt-2 text-sm opacity-80">
                                                                        {session.description}
                                                                    </p>
                                                                )}
                                                                {session.tools && (
                                                                    <p className="mt-2 text-xs text-muted-foreground">
                                                                        <span className="font-medium text-foreground">Tools:</span> {session.tools}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            {session.colabLink && (
                                                                <Button
                                                                    asChild
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="flex-shrink-0 hover:bg-emerald-500 hover:text-white transition-colors"
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
            </div >
        </section >
    )
}
