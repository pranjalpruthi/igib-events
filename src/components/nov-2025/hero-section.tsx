import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative">
                    <div className="py-20 md:py-24 lg:py-32">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mx-auto max-w-4xl text-center"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-xs font-medium"
                                >
                                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                                    <span>ONE HEALTH · GENOMICS · AMR · BIOINFORMATICS</span>
                                </motion.div>

                                {/* Main Heading */}
                                <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                                    Five-day Hands-on Workshop on{' '}
                                    <span className="block text-primary mt-2" style={{ fontFamily: "'Bitcount Single', monospace", fontWeight: 300, letterSpacing: '0.08em' }}>
                                        Bioinformatics for One Health
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                                    Advancing One Health through Genomics Data & Discovery.
                                    Comprehensive training in pathogen genomics, metagenomics, and antimicrobial resistance surveillance.
                                </p>

                                {/* Key Info Cards */}
                                <div className="mt-6 md:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card"
                                    >
                                        <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-1 sm:mb-0">
                                            <Calendar className="size-4 sm:size-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Dates</p>
                                            <p className="text-xs sm:text-sm font-semibold whitespace-normal leading-tight">Nov 3-7, 2025</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card"
                                    >
                                        <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-1 sm:mb-0">
                                            <MapPin className="size-4 sm:size-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Venue</p>
                                            <p className="text-xs sm:text-sm font-semibold leading-tight">CSIR-IGIB</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card"
                                    >
                                        <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-1 sm:mb-0">
                                            <Users className="size-4 sm:size-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Format</p>
                                            <p className="text-xs sm:text-sm font-semibold leading-tight">In-person</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-12 rounded-xl px-8 text-base font-semibold bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black shadow-lg shadow-white/30 hover:shadow-xl hover:shadow-white/40 transition-all dark:bg-white dark:text-black dark:hover:bg-white/90"
                                    >
                                        <a href="https://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                                            <span>Access Resource Cockpit</span>
                                            <ChevronRight className="ml-1 size-5" />
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-xl px-8 text-base font-semibold bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90 shadow-lg shadow-[#F9AB00]/30 hover:shadow-xl hover:shadow-[#F9AB00]/40 transition-all"
                                    >
                                        <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer">
                                            <span>Open Colab</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-12 rounded-xl border-2 border-primary px-8 text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <a href="https://www.canva.com/design/DAG3bQ0I9B8/2Q5S6W9e0Kj2ofaOqeMeYw/view?utm_content=DAG3bQ0I9B8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdaf0b68eab" target="_blank" rel="noopener noreferrer">
                                            <span>Download Brochure</span>
                                        </a>
                                    </Button>
                                </div>

                                {/* Organizer Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-10 rounded-xl border bg-card/80 backdrop-blur-sm p-6 text-sm"
                                >
                                    <p className="font-semibold">Organized by:</p>
                                    <p className="mt-2 text-muted-foreground">CSIR- Institute of Genomics and Integrative Biology (CSIR-IGIB)</p>
                                    <p className="mt-1 text-muted-foreground">Funded by: Indian Council of Medical Research (ICMR)</p>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Background Video */}
                        <div className="absolute inset-0 -z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-background/95 dark:bg-background/90" />
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="size-full object-cover opacity-20 dark:opacity-15"
                            >
                                <source src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
