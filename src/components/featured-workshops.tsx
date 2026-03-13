import { Link } from '@tanstack/react-router'
import { Calendar, MapPin, Video, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import MatrixText from '@/components/kokonutui/matrix-text'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip'

const events = [
    {
        title: "Advanced Bioinformatics Skill Development Program",
        subtitle: "Two Weeks Skill India Training Workshop",
        date: "Mar 16-27, 2026",
        mode: "In-Person",
        modeIcon: MapPin,
        location: "CSIR-IGIB, Delhi",
        status: "Upcoming",
        statusColor: "bg-purple-600",
        description: "From Data to Discovery: Skills for the Genomic Era. Comprehensive 14-day advanced training.",
        link: "/events/march-2026-advanced",
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        title: "Bioinformatics for One Health",
        subtitle: "Five-Day Hands-on Workshop",
        date: "Mar 16-20, 2026",
        mode: "In-Person",
        modeIcon: MapPin,
        location: "CSIR-IGIB, Delhi",
        status: "Upcoming",
        statusColor: "bg-emerald-600",
        description: "Pathogen genomics, metagenomics, and antimicrobial resistance surveillance training with expert faculty.",
        link: "/events/march-2026",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        title: "Basic Bioinformatics Skill Development",
        subtitle: "One-Week Online Workshop",
        date: "Feb 1-7, 2026",
        mode: "Online (Live)",
        modeIcon: Video,
        location: "Virtual",
        status: "Completed",
        statusColor: "bg-gray-500",
        description: "Comprehensive training covering Linux basics, NGS data analysis, Genome Assembly, AMR detection, and Gene Enrichment.",
        link: "/events/feb-2026",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Bioinformatics for One Health",
        subtitle: "Five-Day Hands-on Workshop",
        date: "Nov 3-7, 2025",
        mode: "In-Person",
        modeIcon: MapPin,
        location: "CSIR-IGIB, Delhi",
        status: "Completed",
        statusColor: "bg-gray-500",
        description: "Focused on pathogen genomics, metagenomics, and antimicrobial resistance surveillance with expert faculty.",
        link: "/events/nov-2025",
        gradient: "from-purple-500 to-pink-500"
    },
]

export function FeaturedWorkshops() {
    return (
        <section id="events" className="relative py-12 md:py-20 lg:py-28 bg-background/50 dark:bg-black/30 backdrop-blur-sm overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div className="text-center mb-12 select-none">
                    <Badge className="mb-4 bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/30">Events</Badge>
                    <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        <MatrixText
                            text="Featured Workshops"
                            className="text-2xl sm:text-3xl font-bold md:text-4xl whitespace-nowrap"
                            matrixColor="#06b6d4"
                            matrixShadow="0 2px 10px rgba(6, 182, 212, 0.6)"
                            initialDelay={200}
                        />
                    </div>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Catch up on past events or register for upcoming sessions organized by our lab.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                                <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge className={`${event.statusColor} text-white`}>{event.status}</Badge>
                                        <Badge variant="secondary">
                                            <event.modeIcon className="size-3 mr-1" />
                                            {event.mode}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                                    <CardDescription>{event.subtitle}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="size-4" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="size-4" />
                                        <span>{event.location}</span>
                                    </div>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <p className="text-sm pt-2 line-clamp-3 cursor-help">{event.description}</p>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-xs">{event.description}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className={`w-full ${event.status === 'Upcoming' ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30 transition-all duration-200 ease-out' : 'transition-colors duration-200'}`} variant={event.status === 'Upcoming' ? 'default' : 'outline'}>
                                        <Link to={event.link}>
                                            {event.status === 'Upcoming' ? 'View Details' : 'View Archive'} <ArrowRight className="ml-2 size-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
