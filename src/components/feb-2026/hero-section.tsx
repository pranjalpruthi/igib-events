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
                <a href="https://drive.google.com/drive/folders/11CeOLkJu6aE8ujMJN7qXj5eUVDKXCmm-?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Laptop className="mr-2 size-4" />
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
                                    className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl border bg-card/80 backdrop-blur-sm p-3 sm:p-4 text-center sm:text-left transition-all hover:bg-card hover:border-primary/50 group cursor-pointer"
                                    onClick={() => window.open('https://zoom.us/j/97584266453?pwd=dx9tSA1PDBokiDRYIMNFOehhxKGTuD.1', '_blank')}
                                >
                                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-1 sm:mb-0 group-hover:scale-110 transition-transform">
                                        <Video className="size-4 sm:size-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Platform</p>
                                        <p className="text-xs sm:text-sm font-semibold leading-tight group-hover:text-primary transition-colors underline decoration-dotted underline-offset-4">Zoom (Join)</p>
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
                                        <p className="text-xs sm:text-sm font-semibold leading-tight">10:00 AM – 5:00 PM</p>
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

                            {/* Organizer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-10 rounded-xl border bg-card/80 backdrop-blur-sm p-6 text-sm"
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <a href="https://jitendralab.igib.res.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                        <img
                                            src="/assests/logos/jnlab-logo.webp"
                                            alt="Jitendra Lab Logo"
                                            className="h-16 w-auto object-contain rounded-lg"
                                        />
                                    </a>
                                    <div className="text-center sm:text-left">
                                        <p className="font-semibold">Organized by:</p>
                                        <p className="mt-1 text-muted-foreground">Jitendra Lab of Bioinformatics and Big Data at</p>
                                        <p className="text-muted-foreground">CSIR- Institute of Genomics and Integrative Biology (CSIR-IGIB)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 pt-4 border-t border-border/50">
                                    <a href="https://www.skillindia.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                        <img
                                            src="/assests/logos/skill-india.webp"
                                            alt="Skill India Logo"
                                            className="h-12 w-auto object-contain rounded-lg bg-white/90 p-1"
                                        />
                                    </a>
                                    <p className="text-muted-foreground text-center sm:text-left">Funded by: <strong className="text-foreground">SKILL INDIA PROJECT</strong> Govt. of INDIA</p>
                                </div>
                            </motion.div>
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
