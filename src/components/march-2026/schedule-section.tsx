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
            { time: '07:30 - 08:30', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '09:00 - 09:30', icon: Users, title: 'Inauguration & Welcome Address', speaker: 'Dr. Souvik Maiti', type: 'admin' },
            { time: '09:30 - 09:45', icon: Users, title: 'Photo Session', type: 'admin' },
            { time: '09:45 - 10:30', icon: Users, title: 'Delegates Introduction', type: 'admin' },
            { time: '10:30 - 11:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:00 - 12:15', icon: GraduationCap, title: 'Talk 1: Harnessing Genomic Technologies for One Health Solutions', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '12:15 - 13:00', icon: Laptop, title: 'Hands-on 1A: Linux Basics for Bioinformatics', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:15', icon: Laptop, title: 'Hands-on 1B(i): Linux Basics for Bioinformatics', type: 'handson' },
            { time: '15:15 - 15:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '15:45 - 17:00', icon: Laptop, title: 'Hands-on 1B(ii): Introduction to Bioinformatics Data', type: 'handson' },
            { time: '17:00 - 18:00', icon: Users, title: 'Facility visit and orientation (CSIR-IGIB Bio-bank & HPC Facility)', type: 'tour' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Day 1 Closure & Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 2',
        date: 'March 17, 2026',
        title: 'From Raw Data to Complete Genomes: The Assembly Quest',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk 2: Pathogenomics and AI enabled insights towards pathogen and AMR evolution', speaker: 'Dr. Bhupesh Taneja', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 12:30', icon: GraduationCap, title: 'Talk 3: Reconstructing the Genome', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '12:30 - 13:00', icon: Laptop, title: 'Hands-on 2A: Genome Assembly Workflow', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:30', icon: Laptop, title: 'Hands-on 2B(i): Genome Assembly', type: 'handson' },
            { time: '15:30 - 16:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '16:00 - 18:00', icon: Laptop, title: 'Hands-on 2B(ii): Assembly Quality Assessment & Scaffolding', type: 'handson' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Day 2 Closure & Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 3',
        date: 'March 18, 2026',
        title: 'Deciphering Genetic Relationships through Comparative Genomic Analysis',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk 4: Understanding Pathogen Diversity and Evolution through Comparative Genomics', speaker: 'Dr. Jitendra Narayan', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 13:00', icon: Laptop, title: 'Hands-on Session 3A: SNP & Variant Calling', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 14:30', icon: Laptop, title: 'Hands-on Session 3B(i): Sequence Alignment & Phylogenetic tree Construction', type: 'handson' },
            { time: '14:30 - 15:45', icon: Laptop, title: 'Hands-on Session 3B(ii): Functional Enrichment and Chromosomal Rearrangement Analysis', type: 'handson' },
            { time: '15:45 - 16:15', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '16:15 - 18:00', icon: Laptop, title: 'Hands-on Session 3B(iii): croSSRoad', type: 'handson' },
            { time: '19:00 - 21:00', icon: Utensils, title: 'GALA DINNER (Tentative)', type: 'meal', special: true },
        ]
    },
    {
        day: 'Day 4',
        date: 'March 19, 2026',
        title: 'Genomic Approaches for Antimicrobial Resistance Surveillance',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:15 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk 5: ARKbase: Antimicrobial Resistance Knowledgebase 1.0', speaker: 'Dr. Anshu Bhardwaj', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 13:00', icon: Laptop, title: 'Hands-on Session 4A: Antimicrobial Resistance: A Genomic Perspective', type: 'handson' },
            { time: '13:00 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '14:00 - 15:30', icon: Laptop, title: 'Hands-on Session 4B: (contd.) Antimicrobial Resistance Analysis', type: 'handson' },
            { time: '15:30 - 16:00', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '16:00 - 18:00', icon: Laptop, title: 'Hands-on Session 4C: Microbiome Analysis using MarkerML', type: 'handson' },
            { time: '20:00 - 21:00', icon: Utensils, title: 'Day 4 Closure & Dinner', type: 'meal' },
        ]
    },
    {
        day: 'Day 5',
        date: 'March 20, 2026',
        title: 'From Genomes to Public Health: Translating Genomic Insights into Action',
        sessions: [
            { time: '09:00 - 10:00', icon: Utensils, title: 'Breakfast', type: 'meal' },
            { time: '10:00 - 10:15', icon: Users, title: 'Overview of the Day', type: 'admin' },
            { time: '10:15 - 11:15', icon: GraduationCap, title: 'Talk 6: Alternate Transcript Isoforms underlie Alternate Disease Pathophysiology', speaker: 'Dr. Rajesh Pandey', type: 'lecture' },
            { time: '11:15 - 11:45', icon: Coffee, title: 'Tea Break', type: 'break' },
            { time: '11:45 - 12:45', icon: GraduationCap, title: 'Talk 7: Graph-Augmented AI/ML for Antimicrobial Resistance Knowledge Discovery...', speaker: 'Dr. Kumardeep Chaudhary', type: 'lecture' },
            { time: '12:45 - 13:30', icon: GraduationCap, title: 'Valedictory & Certificate Distribution', type: 'closing', special: true },
            { time: '13:30 - 14:00', icon: Utensils, title: 'Lunch Break', type: 'meal' },
            { time: '15:00 - 19:00', icon: Users, title: 'Delhi Darshan', type: 'tour' }
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

                <div className="mt-8 p-6 lg:p-8 rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 text-left flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                            <span className="text-2xl">🚀</span> Quick Access Links
                        </h3>
                        <p className="mt-2 text-emerald-800/80 dark:text-emerald-200/80">
                            <strong className="text-emerald-900 dark:text-emerald-100">Workshop Participants:</strong> Click here to log in to your pre-configured HPC server environments for the hands-on sessions.
                        </p>
                    </div>
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 shadow-lg shadow-emerald-500/20">
                        <a href="http://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                            <Laptop className="mr-2 size-5" />
                            HPC Resource Cockpit
                        </a>
                    </Button>
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
