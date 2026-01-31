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
                                <span>SKILL INDIA · BIOINFORMATICS · ONLINE</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
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
                            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-4 transition-all hover:bg-card"
                                >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Calendar className="size-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground">Dates</p>
                                        <p className="text-sm font-semibold">Feb 1-7, 2026</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-4 transition-all hover:bg-card"
                                >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Video className="size-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground">Mode</p>
                                        <p className="text-sm font-semibold">Online (Live)</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-4 transition-all hover:bg-card"
                                >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Users className="size-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground">Time</p>
                                        <p className="text-sm font-semibold">10:00 AM – 5:00 PM</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-xl px-8 text-base font-semibold bg-[#F9AB00] text-black hover:bg-[#E09800] shadow-lg shadow-[#F9AB00]/30 hover:shadow-xl hover:shadow-[#F9AB00]/40 transition-all duration-200 ease-out"
                                >
                                    <a href="https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <span>Google Colab Modules</span>
                                        <ChevronRight className="ml-1 size-5" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-12 rounded-xl border-2 border-primary px-8 text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 ease-out"
                                >
                                    <a href="https://digital-standee-ppt-cchqj6v.gamma.site" target="_blank" rel="noopener noreferrer">
                                        <span>View Presentation / Standee</span>
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
