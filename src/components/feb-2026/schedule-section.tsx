import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'motion/react'

const schedule = [
    {
        day: 'Day 1',
        title: 'Introduction & Linux Basics-1',
        sessions: [
            { time: '10:00 – 10:30', title: 'Inauguration & Program Overview', mode: 'Live', speaker: '' },
            { time: '10:30 – 11:30', title: 'Introduction to Bioinformatics and its Applications', mode: 'Lecture', speaker: 'Dr. Jitendra' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'System setup and installation', mode: 'Lecture', speaker: '' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'Linux Operating System: Architecture & File System', mode: 'Hands-on', speaker: '' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Practical Session: Basic Linux Commands for Bioinformatics', mode: 'Hands-on', speaker: '' },
        ]
    },
    {
        day: 'Day 2',
        title: 'Introduction & Linux Basics-2',
        sessions: [
            { time: '10:00 – 11:30', title: 'Text Processing Tools (grep, awk, sed)', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'Introduction to Shell & BASH Scripting', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'Command-Line Bioinformatics Tools Overview, Package manager', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: Building Simple BASH Pipelines', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
        ]
    },
    {
        day: 'Day 3',
        title: 'NGS Technologies & Data Quality Control',
        sessions: [
            { time: '10:00 – 11:30', title: 'Overview of Next Generation Sequencing Technologies', mode: 'Lecture', speaker: 'Kaushalendra (Dr.Aastha Lab)' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'NGS Data Formats (FASTQ, SAM, BAM, VCF)', mode: 'Lecture', speaker: 'Preeti Agarwal' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'Quality Control of NGS Data (FastQC, MultiQC)', mode: 'Lecture', speaker: 'Mukul' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: Raw Read Quality Assessment', mode: 'Hands-on', speaker: 'Mukul' },
        ]
    },
    {
        day: 'Day 4',
        title: 'Genome Assembly',
        sessions: [
            { time: '10:00 – 11:30', title: 'Principles of Genome Assembly', mode: 'Lecture', speaker: 'Dr. Jitendra' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'De novo and Reference-based Assembly', mode: 'Lecture', speaker: 'Mukul' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'Assembly Tools and Strategies (SPAdes)', mode: 'Lecture', speaker: 'Mukul' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: Genome Assembly & Evaluation', mode: 'Hands-on', speaker: 'Mukul' },
        ]
    },
    {
        day: 'Day 5',
        title: 'Genome Annotation',
        sessions: [
            { time: '10:00 – 11:30', title: 'Genome Annotation Concepts', mode: 'Lecture', speaker: 'Nityendra' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'Structural and Functional Annotation', mode: 'Lecture', speaker: '' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'Annotation Tools and Databases (Prokka, RefSeq)', mode: 'Lecture', speaker: '' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: Genome Annotation Workflow', mode: 'Hands-on', speaker: '' },
        ]
    },
    {
        day: 'Day 6',
        title: 'AMR Detection & Analysis',
        sessions: [
            { time: '10:00 – 11:30', title: 'Antimicrobial Resistance: Genomic Perspective', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'AMR Databases (CARD, ResFinder, ARG-ANNOT)', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'AMR Detection Tools & Interpretation', mode: 'Lecture', speaker: 'Anwesha' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 17:00', title: 'Hands-on: AMR Gene Identification', mode: 'Hands-on', speaker: 'Anwesha' },
        ]
    },
    {
        day: 'Day 7',
        title: 'Gene Enrichment & Valedictory',
        sessions: [
            { time: '10:00 – 11:30', title: 'Gene Enrichment Analysis Introduction and Methods, Gene Ontology and Pathway Databases', mode: 'Lecture', speaker: 'Ajay Bhatia' },
            { time: '11:30 – 11:45', title: 'Break', mode: '', speaker: '' },
            { time: '11:45 – 13:00', title: 'Hands-on: Gene Enrichment Analysis', mode: 'Hands-on', speaker: 'Ajay Bhatia' },
            { time: '13:00 – 14:00', title: 'Lunch Break', mode: '', speaker: '' },
            { time: '14:00 – 15:30', title: 'CHITRA: Hands-on', mode: 'Hands-on', speaker: 'Pranjal' },
            { time: '15:30 – 15:45', title: 'Break', mode: '', speaker: '' },
            { time: '15:45 – 16:30', title: 'Flash quiz', mode: '', speaker: '' },
            { time: '16:30 – 17:00', title: 'Feedback, Certificate Instructions & Valedictory', mode: '', speaker: 'Dr. Jitendra' },
        ]
    },
]

export function ScheduleSection2026() {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        📅 Workshop Schedule
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Detailed seven-day program covering Linux basics to advanced analysis
                    </p>
                </div>

                <Tabs defaultValue="Day 1" className="w-full">
                    <div className="flex justify-center mb-10 overflow-auto py-2">
                        <TabsList className="h-auto flex-wrap justify-center gap-3 bg-transparent p-1">
                            {schedule.map((day) => (
                                <TabsTrigger
                                    key={day.day}
                                    value={day.day}
                                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:scale-105 rounded-full px-6 py-2.5 border border-primary/20 bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                >
                                    {day.day}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {schedule.map((day) => (
                        <TabsContent key={day.day} value={day.day} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                        {day.title}
                                    </h3>
                                </div>
                                <div className="grid gap-4">
                                    {day.sessions.map((session, index) => (
                                        <Card key={index} className={`border-l-4 shadow-sm hover:shadow-md transition-all duration-300 ${session.title === 'Break' || session.title === 'Lunch Break' ? 'border-l-gray-300 bg-gray-50/80 dark:bg-gray-900/50' : 'border-l-primary bg-card/80 backdrop-blur-sm'}`}>
                                            <CardContent className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                                                <div className="w-full md:w-32 font-mono text-sm font-semibold text-muted-foreground whitespace-nowrap">
                                                    {session.time}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`font-medium ${session.title.includes('Break') ? 'text-muted-foreground italic' : ''}`}>
                                                        {session.title}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    {session.mode && (
                                                        <Badge variant="secondary">{session.mode}</Badge>
                                                    )}
                                                    {session.speaker && (
                                                        <Badge variant="outline" className="border-primary/20 text-primary">
                                                            {session.speaker}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
