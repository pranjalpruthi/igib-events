import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Laptop, Users, ExternalLink, Download, Copy, CalendarPlus, Check, Microscope, Database, Dna, FileText, GraduationCap } from 'lucide-react'

// TypeScript interface for session data
interface Session {
    title: string;
    description?: string[];
    icon?: any;
}

interface DaySchedule {
    date: string;
    title: string;
    sessions: Session[];
}

const scheduleData: DaySchedule[] = [
    {
        date: '16th March',
        title: 'Workshop Orientation',
        sessions: [
            {
                title: 'Workshop Orientation And Introduction to Training Modules',
                icon: Users
            }
        ]
    },
    {
        date: '16th March - 17th March',
        title: 'Introduction To Next Generation Sequencing',
        sessions: [
            {
                title: 'System setup',
                icon: Laptop
            }
        ]
    },
    {
        date: '18th March',
        title: 'Foundations of Linux and Bioinformatics Tools',
        sessions: [
            {
                title: 'Linux and Data Basics',
                description: [
                    'Basics of Linux for bioinformatics workflows',
                    'Understanding the FASTQ format for sequencing data',
                    'Introduction to Phred quality scores and their interpretation',
                    'Using FastQC for quality control and why QC analysis is essential'
                ],
                icon: FileText
            },
            {
                title: 'Environment Setup',
                description: [
                    'Installing Anaconda, Mamba, or Conda and creating environments',
                    'Downloading and managing bioinformatics tools'
                ],
                icon: Laptop
            }
        ]
    },
    {
        date: '19th - 20th March',
        title: 'Quality Control and Genome Assembly Workflows',
        sessions: [
            {
                title: 'Sequencing Data Assessment',
                description: [
                    'Generating sequencing quality control (QC) reports',
                    'Downloading and running FastQC for data assessment',
                    'Viewing and interpreting FastQC output files'
                ],
                icon: Database
            },
            {
                title: 'Preprocessing',
                description: [
                    'Adapter trimming and read filtration for cleaner datasets',
                    'Using Trim Galore or Fastp for Illumina data preprocessing'
                ],
                icon: Laptop
            }
        ]
    },
    {
        date: '23rd - 24th March',
        title: 'Genome Assembly and Variant Calling',
        sessions: [
            {
                title: 'Genome Assembly',
                description: [
                    'Overview of genome assembly approaches: de novo vs. reference-based',
                    'Performing assemblies with tools such as SPAdes and MEGAHIT'
                ],
                icon: Dna
            },
            {
                title: 'Genome Alignment, Duplicate Handling, and Variant Calling',
                description: [
                    'Performing genome alignment/mapping to reference sequences',
                    'Identifying and marking duplicate reads to improve accuracy',
                    'Variant detection using tools such as FreeBayes and BCFtools'
                ],
                icon: Microscope
            }
        ]
    },
    {
        date: '25th March',
        title: 'Genome Annotation, Long-Read Data & Phylogeny',
        sessions: [
            {
                title: 'Genome Annotation',
                description: [
                    'Understanding annotation and why it is important in genomics',
                    'Performing annotation with tools such as Prokka'
                ],
                icon: FileText
            },
            {
                title: 'Long-Read Data Analysis',
                description: [
                    'Working with long-read sequencing data for deeper insights',
                    'Using Prochop, NanoFilt, and Minimap2 for Oxford Nanopore read processing and mapping'
                ],
                icon: Dna
            },
            {
                title: 'Phylogeny',
                icon: Users
            }
        ]
    },
    {
        date: '26th March',
        title: 'Gene Enrichment and AMR Detection',
        sessions: [
            {
                title: 'Introduction to Gene Enrichment Analysis, Gene Ontology, and Pathway Databases',
                icon: Database
            },
            {
                title: 'Antimicrobial Resistance (AMR) Detection and Analysis',
                description: [
                    'Genomic Insights into Antimicrobial Resistance',
                    'Databases for Antimicrobial Resistance (CARD, ResFinder, ARG-ANNOT)',
                    'Tools for AMR Detection and Data Interpretation'
                ],
                icon: Microscope
            }
        ]
    },
    {
        date: '27th March',
        title: 'Conclusion',
        sessions: [
            {
                title: '🎓 Valedictory & Certificate Distribution',
                icon: GraduationCap
            }
        ]
    }
]

function ScheduleActions() {
    const [copied, setCopied] = React.useState(false)

    const title = "Two Weeks Advanced IGIB- Bioinformatics Skill Development Program"
    const description = "Skill India Training Workshop: From Data to Discovery: Skills for the Genomic Era."
    const location = "CSIR-IGIB, Delhi"

    const startDate = "20260316"
    const startTime = "090000"
    const endTime = "170000"
    const recurrenceRule = "RRULE:FREQ=DAILY;COUNT=14"

    const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(title) + "&dates=" + startDate + "T" + startTime + "/" + startDate + "T" + endTime + "&details=" + encodeURIComponent(description) + "&location=" + encodeURIComponent(location) + "&recur=" + encodeURIComponent(recurrenceRule) + "&sf=true&output=xml";

    const handleDownloadICS = () => {
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//CSIR-IGIB//Advanced Bioinformatics Workshop//EN',
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
        link.setAttribute('download', 'igib-advanced-bioinformatics.ics')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleCopy = () => {
        let text = "*" + title + "*\nMar 16-27, 2026\n\n"
        scheduleData.forEach(day => {
            text += "*" + day.date + ": " + day.title + "*\n"
            day.sessions.forEach((s: any) => {
                text += "• " + s.title + "\n"
                if (s.description) {
                    s.description.forEach((d: string) => {
                        text += "  - " + d + "\n"
                    })
                }
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
                    <CalendarPlus className="size-4 text-purple-500" />
                    <span>Add to Google Calendar</span>
                </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleDownloadICS}>
                <Download className="size-4 text-indigo-500" />
                <span>Save to Calendar (.ics)</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
                {copied ? <Check className="size-4 text-purple-600" /> : <Copy className="size-4 text-muted-foreground" />}
                <span>{copied ? 'Copied Schedule' : 'Copy Full Schedule'}</span>
            </Button>
        </div>
    )
}

export function ScheduleSection2026Advanced() {
    return (
        <section id="schedule" className="py-24 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center select-none">
                    <Badge className="mb-3 bg-purple-500/10 text-purple-600 border-purple-500/20">14-Day Program</Badge>
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Training Schedule</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive 14-day program covering advanced bioinformatics skills
                    </p>
                    <ScheduleActions />
                </div>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="space-y-4">
                        {scheduleData.map((day, dayIndex) => (
                            <AccordionItem
                                key={dayIndex}
                                value={"day-" + dayIndex}
                                className="rounded-2xl border bg-card px-6 shadow-sm hover:border-purple-500/30 transition-colors"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 select-none group">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                            <Calendar className="size-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-purple-600/80 dark:text-purple-400">
                                                {day.date}
                                            </p>
                                            <p className="mt-1 text-lg font-semibold">{day.title}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <div className="mt-4 space-y-4">
                                        {day.sessions.map((session: Session, sessionIndex: number) => {
                                            const Icon = session.icon || Laptop
                                            return (
                                                <div
                                                    key={sessionIndex}
                                                    className="flex gap-4 rounded-xl border p-4 select-none hover:bg-muted/30 transition-colors"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-400">
                                                            <Icon className="size-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-lg">{session.title}</p>
                                                        {session.description && session.description.length > 0 && (
                                                            <ul className="mt-3 space-y-2">
                                                                {session.description.map((desc, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500/50 flex-shrink-0" />
                                                                        <span>{desc}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
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
