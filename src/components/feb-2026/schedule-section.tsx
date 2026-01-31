import React from 'react'
import { Badge } from '@/components/ui/badge'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

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
    const [selected, setSelected] = React.useState('Day 1')
    const [direction, setDirection] = React.useState(0)
    const [dimensions, setDimensions] = React.useState({ width: 0, left: 0 })

    const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map())
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useLayoutEffect(() => {
        const updateDimensions = () => {
            const selectedButton = buttonRefs.current.get(selected)
            const container = containerRef.current

            if (selectedButton && container) {
                const rect = selectedButton.getBoundingClientRect()
                const containerRect = container.getBoundingClientRect()

                setDimensions({
                    width: rect.width,
                    left: rect.left - containerRect.left,
                })
            }
        }

        requestAnimationFrame(() => {
            updateDimensions()
        })

        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [selected])

    const handleTabClick = (day: string) => {
        const currentIndex = schedule.findIndex((item) => item.day === selected)
        const newIndex = schedule.findIndex((item) => item.day === day)
        setDirection(newIndex > currentIndex ? 1 : -1)
        setSelected(day)
    }

    const selectedDay = schedule.find((item) => item.day === selected)

    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="text-center mb-8">
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">7-Day Program</Badge>
                    <h2 className="text-2xl font-bold md:text-3xl">Workshop Schedule</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Feb 1-7, 2026 • 10:00 AM – 5:00 PM daily</p>
                </div>

                {/* Smooth Tab Bar */}
                <div className="flex justify-center mb-8">
                    <div
                        ref={containerRef}
                        className="relative flex items-center gap-1 p-1.5 max-w-full overflow-x-auto bg-muted/30 rounded-full border shadow-sm scrollbar-hide w-fit"
                        role="tablist"
                    >
                        {/* Sliding Background */}
                        <motion.div
                            initial={false}
                            animate={{
                                width: dimensions.width - 6,
                                x: dimensions.left,
                                opacity: 1,
                            }}
                            className={cn(
                                'absolute z-[1] rounded-full shadow-sm',
                                selectedDay?.color || 'bg-primary'
                            )}
                            style={{ height: 'calc(100% - 12px)', top: '6px' }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 30,
                            }}
                        />

                        <div className="relative z-[2] flex min-w-max gap-1">
                            {schedule.map((item) => {
                                const isSelected = selected === item.day
                                return (
                                    <motion.button
                                        key={item.day}
                                        ref={(el) => {
                                            if (el) buttonRefs.current.set(item.day, el)
                                            else buttonRefs.current.delete(item.day)
                                        }}
                                        onClick={() => handleTabClick(item.day)}
                                        role="tab"
                                        aria-selected={isSelected}
                                        className={cn(
                                            'relative flex flex-col items-center justify-center gap-0.5 rounded-full px-4 py-2 sm:px-6 sm:py-3',
                                            'transition-colors duration-200 outline-none select-none',
                                            isSelected
                                                ? 'text-white'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                        )}
                                        type="button"
                                    >
                                        <span className="font-bold text-sm sm:text-base whitespace-nowrap">{item.day}</span>
                                        <span className={cn(
                                            "text-[10px] sm:text-xs font-medium truncate max-w-[80px] sm:max-w-[120px]",
                                            isSelected ? "text-white/90" : "text-muted-foreground/70"
                                        )}>
                                            {item.title.split(' ')[0]}
                                        </span>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative overflow-hidden rounded-2xl border bg-card/50 min-h-[400px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={selected}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                            className="p-4 sm:p-8"
                        >
                            {/* Day Header */}
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                                <div className={cn('w-1.5 h-12 rounded-full', selectedDay?.color)} />
                                <div>
                                    <h3 className="font-bold text-xl sm:text-2xl">{selectedDay?.title}</h3>
                                    <p className="text-muted-foreground">Detailed Breakdown</p>
                                </div>
                            </div>

                            {/* Sessions List */}
                            <div className="space-y-3">
                                {selectedDay?.sessions.map((session, index) => {
                                    const isBreak = session.title.includes('Break')
                                    return (
                                        <div
                                            key={index}
                                            className={cn(
                                                'flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-xl transition-all duration-200',
                                                isBreak
                                                    ? 'bg-muted/20'
                                                    : 'bg-card border hover:border-primary/20 hover:shadow-md hover:translate-x-1'
                                            )}
                                        >
                                            {/* Time */}
                                            <div className={cn(
                                                'shrink-0 text-sm sm:text-base font-mono font-medium',
                                                isBreak ? 'text-muted-foreground/50' : 'text-primary'
                                            )}>
                                                {session.time}
                                            </div>

                                            {/* Title */}
                                            <div className={cn(
                                                'flex-1 min-w-0',
                                                isBreak ? 'text-muted-foreground/50 italic' : 'font-medium text-base sm:text-lg'
                                            )}>
                                                {session.title}
                                            </div>

                                            {/* Badges - Desktop */}
                                            {!isBreak && (
                                                <div className="hidden sm:flex items-center gap-2 shrink-0">
                                                    {session.mode && (
                                                        <Badge
                                                            variant="secondary"
                                                            className={cn(
                                                                'text-xs px-2.5 py-1 font-medium',
                                                                session.mode === 'Hands-on' && 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                                                                session.mode === 'Lecture' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                                                                session.mode === 'Live' && 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                            )}
                                                        >
                                                            {session.mode}
                                                        </Badge>
                                                    )}
                                                    {session.speaker && (
                                                        <Badge variant="outline" className="text-xs px-2.5 py-1 border-primary/30 text-primary font-medium">
                                                            {session.speaker}
                                                        </Badge>
                                                    )}
                                                </div>
                                            )}

                                            {/* Mobile indicator */}
                                            {!isBreak && session.mode && (
                                                <span className="sm:hidden text-lg shrink-0">
                                                    {session.mode === 'Hands-on' ? '🔧' : session.mode === 'Lecture' ? '📖' : '🎥'}
                                                </span>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
