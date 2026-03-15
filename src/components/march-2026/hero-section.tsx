import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ChevronRight, Video, Home, Mail, Laptop, FileText } from 'lucide-react'
import { motion } from 'motion/react'

import { HeroHeader } from '@/components/header'
import { ComingSoonDialog } from '@/components/feb-2026/coming-soon-dialog'
import { CreepyButton } from '@/components/ui/creepy-button'

export function HeroSection2026March() {
    const menuItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Schedule', href: '#schedule', icon: Calendar },
        { name: 'Contact', href: '#contact', icon: Mail },
    ]

    const headerButtons = (
        <>
            <Button
                asChild
                size="sm"
                variant="outline"
                className="bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 transition-all dark:bg-white dark:text-black dark:hover:bg-white/90">
                <a href="https://github.com/BioinformaticsOnLine/one-health-26" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Data Repo</span>
                </a>
            </Button>
            <Button
                asChild
                size="sm"
                className="bg-[#5865F2] text-white hover:bg-[#5865F2]/90 shadow-md shadow-[#5865F2]/20 hover:shadow-lg hover:shadow-[#5865F2]/30 transition-all">
                <a href="https://discord.gg/bz2EKz9nG" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                    <span>Discord</span>
                </a>
            </Button>
            <Button
                asChild
                size="sm"
                className="bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                <a href="http://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                    <Laptop className="mr-2 size-4" />
                    <span>HPC Cockpit</span>
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
                                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-600 dark:text-emerald-400">ONE HEALTH · PATHOGEN GENOMICS</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                                BIOINFORMATICS FOR{' '}
                                <span className="block text-emerald-600 dark:text-emerald-400 mt-2" style={{ fontFamily: "'Pacifico', cursive" }}>
                                    One Health
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                                Five-Day Hands-on Workshop
                                <br />
                                <span className="text-sm">Pathogen Genomics, Metagenomics & Antimicrobial Resistance Surveillance</span>
                            </p>

                            {/* Key Info Cards */}
                            <div className="mt-6 md:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card border-emerald-500/20"
                                >
                                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mb-1 sm:mb-0">
                                        <Calendar className="size-4 sm:size-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Dates</p>
                                        <p className="text-xs sm:text-sm font-semibold whitespace-normal leading-tight">Mar 16-20, 2026</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card border-emerald-500/20"
                                >
                                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mb-1 sm:mb-0">
                                        <MapPin className="size-4 sm:size-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                                        <p className="text-xs sm:text-sm font-semibold leading-tight">CSIR-IGIB, Delhi</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card border-emerald-500/20"
                                >
                                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white mb-1 sm:mb-0">
                                        <Users className="size-4 sm:size-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Mode</p>
                                        <p className="text-xs sm:text-sm font-semibold leading-tight">In-person</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4 w-full sm:w-auto mx-auto border-0">
                                <CreepyButton
                                    className="w-full sm:w-auto h-11 sm:h-12 flex-shrink-0"
                                    coverClassName="bg-emerald-600 text-white font-bold px-6 sm:px-8 py-0 shadow-[0_0_20px_rgba(5,150,105,0.4)]"
                                    onClick={() => {
                                        const element = document.getElementById('schedule');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <span>view full schedule</span>
                                    <ChevronRight className="ml-1 size-4 sm:size-5" />
                                </CreepyButton>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-11 sm:h-12 w-full sm:w-auto flex-shrink-0 rounded-xl border-2 border-emerald-500/30 bg-background/50 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-6 sm:px-8 text-sm sm:text-base font-semibold backdrop-blur-sm transition-all duration-200"
                                >
                                    <a href="https://github.com/BioinformaticsOnLine/one-health-26" target="_blank" rel="noopener noreferrer">
                                        <svg className="mr-2 size-4 sm:size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        <span>Data Repo</span>
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    className="h-11 sm:h-12 w-full sm:w-auto flex-shrink-0 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(5,150,105,0.3)] hover:shadow-[0_0_20px_rgba(5,150,105,0.5)] px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all duration-200"
                                >
                                    <a href="http://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                                        <Laptop className="mr-2 size-4 sm:size-5" />
                                        <span>HPC Cockpit</span>
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
                                <div className="text-center">
                                    <p className="font-semibold">Organized by:</p>
                                    <p className="mt-1 text-muted-foreground">Jitendra Lab of Bioinformatics and Big Data at</p>
                                    <p className="text-muted-foreground">CSIR- Institute of Genomics and Integrative Biology (CSIR-IGIB)</p>
                                </div>
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
                            style={{ filter: 'hue-rotate(-45deg)' }} // Shift blue dna to greenish
                        >
                            <source src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}
