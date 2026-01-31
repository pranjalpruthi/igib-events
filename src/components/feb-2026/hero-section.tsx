import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ChevronRight, Video, Home, Mail, Laptop, FileText } from 'lucide-react'
import { motion } from 'motion/react'

import { HeroHeader } from '@/components/header'

export function HeroSection2026() {
    const menuItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Schedule', href: '#schedule', icon: Calendar },
        { name: 'Speakers', href: '#speakers', icon: Users },
        { name: 'Contact', href: '#contact', icon: Mail },
    ]

    const headerButtons = (
        <>
            <Button
                asChild
                size="sm"
                variant="outline"
                className="bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 transition-all dark:bg-white dark:text-black dark:hover:bg-white/90">
                <a href="https://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                    <Laptop className="mr-2 size-4" />
                    <span>Resource Cockpit</span>
                </a>
            </Button>
            <Button
                asChild
                size="sm"
                className="bg-[#F9AB00] text-black hover:bg-[#F9AB00]/90 shadow-md shadow-[#F9AB00]/20 hover:shadow-lg hover:shadow-[#F9AB00]/30 transition-all">
                <a href="https://digital-standee-ppt-cchqj6v.gamma.site" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 size-4" />
                    <span>View Standee</span>
                </a>
            </Button>
        </>
    )

    return (
        <>
            <HeroHeader menuItems={menuItems} rightContent={headerButtons} />
            <section className="relative">
                <div className="pt-32 pb-12 md:py-20 lg:py-24">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-12">
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
                                <span>SKILL INDIA · BIOINFORMATICS · ONLINE</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                                ONE-WEEK BASIC BIOINFORMATICS{' '}
                                <span className="text-primary">
                                    SKILL DEVELOPMENT PROGRAM
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                                Organized by CSIR–Institute of Genomics & Integrative Biology (IGIB).
                                Supported by Skill India.
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
                                        <p className="text-xs sm:text-sm font-semibold whitespace-normal leading-tight">Feb 1-7, 2026</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card"
                                >
                                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-1 sm:mb-0">
                                        <Video className="size-4 sm:size-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Mode</p>
                                        <p className="text-xs sm:text-sm font-semibold leading-tight">Online (Live)</p>
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
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Time</p>
                                        <p className="text-xs sm:text-sm font-semibold leading-tight">10:00 – 5:00</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto mx-auto border-0">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-11 sm:h-12 w-full sm:w-auto sm:min-w-[200px] rounded-xl px-6 sm:px-8 text-sm sm:text-base font-semibold bg-[#F9AB00] text-black hover:bg-[#E09800] shadow-lg shadow-[#F9AB00]/20 hover:shadow-xl hover:shadow-[#F9AB00]/30 transition-all duration-200 ease-out"
                                >
                                    <a href="https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span className="sm:hidden">Modules (Coming Soon)</span>
                                        <span className="hidden sm:inline">Google Colab Modules (Coming Soon)</span>
                                        <ChevronRight className="ml-1 size-4 sm:size-5" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-11 sm:h-12 w-full sm:w-auto sm:min-w-[200px] rounded-xl border-2 border-white bg-white text-black px-6 sm:px-8 text-sm sm:text-base font-semibold hover:bg-white/90 hover:text-black shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all duration-200 ease-out"
                                >
                                    <a href="https://digital-standee-ppt-cchqj6v.gamma.site" target="_blank" rel="noopener noreferrer">
                                        <span className="sm:hidden">Standee (Coming Soon)</span>
                                        <span className="hidden sm:inline">View Presentation / Standee (Coming Soon)</span>
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background (Optional: re-use video or static image) */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-background/95 dark:bg-background/90" />
                        {/* Reusing the DNA video for continuity, or can be removed */}
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
        </>
    )
}
