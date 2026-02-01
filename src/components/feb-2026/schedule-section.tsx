import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { CalendarPlus, Copy, Check, Download, Calendar, FileText, ExternalLink } from 'lucide-react'

// Helper to format date for GCal (YYYYMMDD)
const formatDateForGCal = (dateStr: string) => {
    return dateStr.replace(/-/g, '')
}

// Fixed dates for Feb 2026
const EVENT_YEAR = '2026'
const EVENT_MONTH = '02'
const EVENT_START_DATE = '2026-02-01'

const schedule = [
    {
        day: 'Day 1',
        date: '01',
        fullDate: '2026-02-01',
        title: 'Introduction & Linux Basics-1',
        color: 'bg-blue-500',
        sessions: [
            { time: '10:00 – 10:30', title: 'Inauguration & Program Overview', mode: 'Live', speaker: '' },
            { time: '10:30 – 11:30', title: 'Introduction to Bioinformatics and its Applications', mode: 'Lecture', speaker: 'Dr. Jitendra' },
            { time: '11:45 – 13:00', title: 'System setup and installation', mode: 'Lecture', speaker: '' },
            { time: '14:00 – 15:30', title: 'Linux Operating System: Architecture & File System', mode: 'Hands-on', speaker: '' },
            { time: '15:45 – 17:00', title: 'Practical Session: Basic Linux Commands for Bioinformatics', mode: 'Hands-on', speaker: '' },
        ],
        resources: {
            colab: 'https://colab.research.google.com/drive/1rqvW9Mk0EXMdHEIbdEjazsqhPANBbEE-?usp=sharing',
            slides: 'https://intro-to-unix-igib-dd767th.gamma.site/'
        }
    },
    {
        day: 'Day 2',
        date: '02',
        fullDate: '2026-02-02',
        title: 'Introduction & Linux Basics-2',
        color: 'bg-purple-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Text Processing Tools (grep, awk, sed)', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
            { time: '11:45 – 13:00', title: 'Introduction to Shell & BASH Scripting', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '14:00 – 15:30', title: 'Command-Line Bioinformatics Tools Overview, Package manager', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '15:45 – 17:00', title: 'Hands-on: Building Simple BASH Pipelines', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
        ]
    },
    {
        day: 'Day 3',
        date: '03',
        fullDate: '2026-02-03',
        title: 'NGS Technologies & QC',
        color: 'bg-green-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Overview of Next Generation Sequencing Technologies', mode: 'Lecture', speaker: 'Kaushalendra' },
            { time: '11:45 – 13:00', title: 'NGS Data Formats (FASTQ, SAM, BAM, VCF)', mode: 'Lecture', speaker: 'Preeti Agarwal' },
            { time: '14:00 – 15:30', title: 'Quality Control of NGS Data (FastQC, MultiQC)', mode: 'Lecture', speaker: 'Mukul' },
            { time: '15:45 – 17:00', title: 'Hands-on: Raw Read Quality Assessment', mode: 'Hands-on', speaker: 'Mukul' },
        ]
    },
    {
        day: 'Day 4',
        date: '04',
        fullDate: '2026-02-04',
        title: 'Genome Assembly',
        color: 'bg-orange-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Principles of Genome Assembly', mode: 'Lecture', speaker: 'Dr. Jitendra' },
            { time: '11:45 – 13:00', title: 'De novo and Reference-based Assembly', mode: 'Lecture', speaker: 'Mukul' },
            { time: '14:00 – 15:30', title: 'Assembly Tools and Strategies (SPAdes)', mode: 'Lecture', speaker: 'Mukul' },
            { time: '15:45 – 17:00', title: 'Hands-on: Genome Assembly & Evaluation', mode: 'Hands-on', speaker: 'Mukul' },
        ]
    },
    {
        day: 'Day 5',
        date: '05',
        fullDate: '2026-02-05',
        title: 'Genome Annotation',
        color: 'bg-indigo-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Genome Annotation Concepts', mode: 'Lecture', speaker: 'Nityendra' },
            { time: '11:45 – 13:00', title: 'Structural and Functional Annotation', mode: 'Lecture', speaker: '' },
            { time: '14:00 – 15:30', title: 'Annotation Tools and Databases (Prokka, RefSeq)', mode: 'Lecture', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: Genome Annotation Workflow', mode: 'Hands-on', speaker: '' },
        ]
    },
    {
        day: 'Day 6',
        date: '06',
        fullDate: '2026-02-06',
        title: 'AMR Detection',
        color: 'bg-rose-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Antimicrobial Resistance: Genomic Perspective', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '11:45 – 13:00', title: 'AMR Databases (CARD, ResFinder, ARG-ANNOT)', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '14:00 – 15:30', title: 'AMR Detection Tools & Interpretation', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '15:45 – 17:00', title: 'Hands-on: AMR Gene Identification', mode: 'Hands-on', speaker: 'Anwesha' },
        ]
    },
    {
        day: 'Day 7',
        date: '07',
        fullDate: '2026-02-07',
        title: 'Enrichment & Valedictory',
        color: 'bg-amber-500',
        sessions: [
            { time: '10:00 – 11:30', title: 'Gene Enrichment Analysis Introduction', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '11:45 – 13:00', title: 'Hands-on: Gene Enrichment Analysis', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
            { time: '14:00 – 15:30', title: 'CHITRA: Hands-on', mode: 'Hands-on', speaker: 'Pranjal' },
            { time: '15:45 – 17:00', title: 'Feedback, Certificate & Valedictory', mode: '', speaker: 'Dr. Jitendra' },
        ]
    },
]

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '20%' : '-20%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '20%' : '-20%',
        opacity: 0,
    }),
}

function ScheduleCard({ day, index }: { day: any, index: number }) {
    return (
        <div className={cn(
            "flex flex-col h-full rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group",
            "hover:border-primary/20",
            day.color.replace('bg-', 'border-').replace('500', '200') // Add subtle color border hint
        )}>
            {/* Header */}
            <div className={cn("p-4 sm:p-6 pb-4 border-b relative overflow-hidden")}>
                <div className={cn("absolute inset-0 opacity-10", day.color)} />
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-foreground/10">
                            {day.day}
                        </Badge>
                        <div className={cn("size-2 rounded-full", day.color)} />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-lg leading-tight mb-1">{day.title}</h3>
                        <Badge variant="secondary" className="text-[10px] shrink-0 opacity-70">
                            Feb {day.date}
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Sessions List */}
            <div className="flex-1 p-4 sm:p-5 space-y-4 bg-muted/5">
                {day.sessions.map((session: any, sIndex: number) => {
                    const isBreak = session.title.includes('Break')
                    return (
                        <div key={sIndex} className={cn("relative pl-4 border-l-2", isBreak ? "border-muted-foreground/20" : "border-primary/20")}>
                            <div className="mb-1 flex items-center gap-2">
                                <span className={cn("text-xs font-mono font-medium", isBreak ? "text-muted-foreground" : "text-primary")}>
                                    {session.time}
                                </span>
                                {session.mode && !isBreak && (
                                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                                        {session.mode}
                                    </Badge>
                                )}
                            </div>
                            <p className={cn("text-sm font-medium leading-snug", isBreak ? "text-muted-foreground italic" : "text-foreground")}>
                                {session.title}
                            </p>
                            {session.speaker && (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {session.speaker}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Resources */}
            {day.resources && (
                <div className="p-4 sm:p-5 pt-0 flex flex-wrap gap-2">
                    {day.resources.colab && (
                        <Button size="sm" variant="outline" className="gap-1.5 text-xs h-8 bg-[#F9AB00]/10 border-[#F9AB00]/30 hover:bg-[#F9AB00]/20 text-[#F9AB00] dark:text-[#F9AB00]" asChild>
                            <a href={day.resources.colab} target="_blank" rel="noopener noreferrer">
                                <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.9414 4.9757a7.033 7.033 0 0 0-4.9308 2.0646 7.033 7.033 0 0 0-.1232 9.8068l2.395-2.395a3.6455 3.6455 0 0 1 5.1621-5.1621l2.395-2.395a7.033 7.033 0 0 0-4.8981-1.9443zM7.0586 4.9757a7.033 7.033 0 0 0-4.8981 1.9443l2.395 2.395a3.6455 3.6455 0 0 1 5.1621 5.1621l2.395 2.395a7.033 7.033 0 0 0-.1232-9.8068 7.033 7.033 0 0 0-4.9308-2.0646zm9.879 9.879l-2.395 2.395a3.6455 3.6455 0 0 1-5.1621-5.1621L7.0586 9.6946a7.033 7.033 0 0 0 .1232 9.8068 7.033 7.033 0 0 0 9.8068.1232l-2.395-2.395a3.6455 3.6455 0 0 1 2.3491.8506z" /></svg>
                                Colab
                            </a>
                        </Button>
                    )}
                    {day.resources.slides && (
                        <Button size="sm" variant="outline" className="gap-1.5 text-xs h-8 bg-primary/10 border-primary/30 hover:bg-primary/20" asChild>
                            <a href={day.resources.slides} target="_blank" rel="noopener noreferrer">
                                <FileText className="size-3.5" />
                                Slides
                            </a>
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

function ScheduleActions() {
    const [copied, setCopied] = React.useState(false)

    // Event Details
    const title = "One-Week Basic Bioinformatics Skill Development Program"
    const description = "Comprehensive 7-day workshop covering Linux, NGS, Genome Assembly, Annotation, and AMR detection. organized by CSIR-IGIB."
    const location = "Online / CSIR-IGIB"

    // Start: Feb 1, 2026, 10:00 AM
    // End: Feb 1, 2026, 05:00 PM (Daily for 7 days)
    const startDate = "20260201"
    const startTime = "100000"
    const endTime = "170000"

    // GCal Recurrence: Daily for 7 days
    const recurrenceRule = "RRULE:FREQ=DAILY;COUNT=7"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}T${startTime}/${startDate}T${endTime}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&recur=${encodeURIComponent(recurrenceRule)}&sf=true&output=xml`

    const handleDownloadICS = () => {
        // Generating ICS content with VEVENT and RRULE
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//CSIR-IGIB//Bioinformatics Workshop//EN',
            'BEGIN:VEVENT',
            `SUMMARY:${title}`,
            `DTSTART:${startDate}T${startTime}`,
            `DTEND:${startDate}T${endTime}`,
            `RRULE:${recurrenceRule}`,
            `DESCRIPTION:${description}`,
            `LOCATION:${location}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n')

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'igib-bioinformatics-workshop.ics')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleCopy = () => {
        // Copy full schedule text
        let text = `*${title}*\nFeb 1-7, 2026\n\n`
        schedule.forEach(day => {
            text += `*${day.day}: ${day.title}* (${day.fullDate})\n`
            day.sessions.forEach((s: any) => {
                text += `• ${s.time}: ${s.title} (${s.mode})` + (s.speaker ? ` - ${s.speaker}` : '') + '\n'
            })
            text += '\n'
        })

        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 mb-8">
            <Button
                variant="outline"
                size="sm"
                className="gap-2"
                asChild
            >
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarPlus className="size-4 text-blue-500" />
                    <span>Add to Google Calendar</span>
                </a>
            </Button>
            <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleDownloadICS}
            >
                <Download className="size-4 text-green-500" />
                <span>Save to Calendar (.ics)</span>
            </Button>
            <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleCopy}
            >
                {copied ? <Check className="size-4 text-green-600" /> : <Copy className="size-4 text-muted-foreground" />}
                <span>{copied ? 'Copied Schedule' : 'Copy Full Schedule'}</span>
            </Button>
        </div>
    )
}

export function ScheduleSection2026() {
    return (
        <section id="schedule" className="py-12 md:py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="text-center mb-10">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">7-Day Program</Badge>
                    <h2 className="text-2xl font-bold md:text-3xl">Workshop Schedule</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Feb 1-7, 2026 • 10:00 AM – 5:00 PM daily</p>

                    {/* Global Actions */}
                    <ScheduleActions />
                </div>

                <div className="px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4 items-stretch">
                            {schedule.map((day, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 h-auto">
                                    <div className="h-full">
                                        <ScheduleCard day={day} index={index} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>

                    {/* Navigation hint for mobile */}
                    <p className="text-center mt-6 text-sm text-muted-foreground md:hidden animate-pulse select-none">
                        ← Swipe to see full schedule →
                    </p>
                </div>
            </div>
        </section>
    )
}
