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

const schedule = [
    {
        day: 'Day 1',
        title: 'Introduction & Linux Basics-1',
        color: 'bg-blue-500',
        sessions: [
            { time: '10:00 – 10:30', title: 'Inauguration & Program Overview', mode: 'Live', speaker: '' },
            { time: '10:30 – 11:30', title: 'Introduction to Bioinformatics and its Applications', mode: 'Lecture', speaker: 'Dr. Jitendra' },
            { time: '11:45 – 13:00', title: 'System setup and installation', mode: 'Lecture', speaker: '' },
            { time: '14:00 – 15:30', title: 'Linux Operating System: Architecture & File System', mode: 'Hands-on', speaker: '' },
            { time: '15:45 – 17:00', title: 'Practical Session: Basic Linux Commands for Bioinformatics', mode: 'Hands-on', speaker: '' },
        ]
    },
    {
        day: 'Day 2',
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

export function ScheduleSection2026() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="text-center mb-10">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">7-Day Program</Badge>
                    <h2 className="text-2xl font-bold md:text-3xl">Workshop Schedule</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Feb 1-7, 2026 • 10:00 AM – 5:00 PM daily</p>
                </div>

                <div className="px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4">
                            {schedule.map((day, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 h-full">
                                    <div className="h-full">
                                        <div className={cn(
                                            "flex flex-col h-full rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group",
                                            "hover:border-primary/20"
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
                                                    <h3 className="font-bold text-lg leading-tight mb-1">{day.title}</h3>
                                                </div>
                                            </div>

                                            {/* Sessions List */}
                                            <div className="flex-1 p-4 sm:p-5 space-y-4 bg-muted/5">
                                                {day.sessions.map((session, sIndex) => {
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
                                        </div>
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
