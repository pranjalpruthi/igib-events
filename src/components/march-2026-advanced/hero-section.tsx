import { motion } from 'motion/react'
import { Calendar, MapPin, Users, Video, Home, Mail, Laptop } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
}

export function HeroSection2026Advanced() {
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
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 z-0 bg-background" />

                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl"
                    >
                        <motion.div variants={sectionVariants} className="flex justify-center gap-3 mb-6 flex-wrap">
                            <Badge variant="secondary" className="px-3 py-1 text-sm bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 backdrop-blur-md">
                                Skill India Training Workshop
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 backdrop-blur-md">
                                March 16 - 27, 2026
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={sectionVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
                        >
                            <span className="block text-foreground mb-2">From Data to Discovery:</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300">
                                Skills for the Genomic Era
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={sectionVariants}
                            className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                        >
                            Two Weeks Advanced IGIB- Bioinformatics Skill Development Program
                        </motion.p>

                        <motion.div
                            variants={sectionVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                        >
                            <InfoCard icon={Calendar} title="Dates" value="Mar 16 - 27, 2026" color="text-purple-500" />
                            <InfoCard icon={MapPin} title="Location" value="CSIR-IGIB, Delhi" color="text-indigo-500" />
                            <InfoCard icon={Users} title="Format" value="In-person" color="text-blue-500" />
                            <InfoCard icon={Video} title="Mode" value="Hands-on Training" color="text-cyan-500" />
                        </motion.div>

                        <motion.div variants={sectionVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20 transition-all">
                                Register Now (Coming Soon)
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full border-muted-foreground/20 backdrop-blur-md hover:bg-muted/50 transition-all p-0">
                                <a href="#schedule" className="w-full h-full flex items-center justify-center px-8">
                                    View Schedule
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

function InfoCard({ icon: Icon, title, value, color }: { icon: any, title: string, value: string, color: string }) {
    return (
        <div className="flex flex-col items-center p-4 rounded-2xl bg-background/40 backdrop-blur-md border border-muted-foreground/10 shadow-sm">
            <div className={"p-3 rounded-full bg-background border shadow-sm mb-3 " + color}>
                <Icon className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
            <p className="font-semibold text-sm md:text-base text-foreground">{value}</p>
        </div>
    )
}
