import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
    Users, 
    Laptop, 
    FileText, 
    TrendingUp, 
    Dna, 
    Bug, 
    Shield, 
    Microscope, 
    Network, 
    Brain, 
    BarChart3, 
    Code 
} from 'lucide-react'
import { motion } from 'motion/react'

const outcomes = [
    {
        icon: Users,
        title: 'Trained Cohort',
        description: '~25 researchers with specialized skills in One Health bioinformatics',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Laptop,
        title: 'Hands-on Expertise',
        description: 'Metagenomic, hologenomic, and comparative genomic analyses',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: FileText,
        title: 'Deliverables',
        description: 'Standard operating procedures (SOPs) and reusable resources',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: TrendingUp,
        title: 'Impact',
        description: 'Enhanced national and regional capabilities in outbreak detection, AMR monitoring, and pathogen research',
        color: 'from-orange-500 to-red-500'
    },
]

const learningTopics = [
    {
        icon: Dna,
        title: 'Next-Generation Sequencing',
        description: 'NGS data analysis and quality assessment'
    },
    {
        icon: Bug,
        title: 'Metagenomic Profiling',
        description: 'Community profiling and taxonomic classification'
    },
    {
        icon: Shield,
        title: 'AMR Detection',
        description: 'Antimicrobial resistance prediction and monitoring'
    },
    {
        icon: Microscope,
        title: 'Pathogen Genomics',
        description: 'Genome assembly, annotation, and analysis'
    },
    {
        icon: Network,
        title: 'Phylogenetic Analysis',
        description: 'Outbreak tracking and evolutionary studies'
    },
    {
        icon: Brain,
        title: 'AI/ML Applications',
        description: 'Machine learning in genomics research'
    },
    {
        icon: BarChart3,
        title: 'Data Visualization',
        description: 'Network analysis and visual interpretation'
    },
    {
        icon: Code,
        title: 'Bioinformatics Tools',
        description: 'Workflows and computational platforms'
    },
]

export function OutcomesSection() {
    return (
        <>
            {/* Expected Outcomes */}
            <section className="py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Expected Outcomes</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Building capacity for One Health bioinformatics research
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {outcomes.map((outcome, index) => {
                            const Icon = outcome.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="group h-full transition-all hover:shadow-lg">
                                        <CardContent className="p-6">
                                            <div className={`inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${outcome.color} text-white shadow-lg`}>
                                                <Icon className="size-7" />
                                            </div>
                                            <h3 className="mt-4 text-xl font-bold">{outcome.title}</h3>
                                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                                {outcome.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">What You'll Learn</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Comprehensive training in cutting-edge bioinformatics techniques
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {learningTopics.map((topic, index) => {
                            const Icon = topic.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group"
                                >
                                    <div className="flex h-full flex-col items-center rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-md">
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="size-6" />
                                        </div>
                                        <h3 className="mt-4 font-semibold">{topic.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {topic.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Important Information */}
            <section className="py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Important Information</h2>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardContent className="p-6">
                                <div className="text-4xl mb-3">☁️</div>
                                <h3 className="font-semibold mb-2">Computational Platform</h3>
                                <p className="text-sm text-muted-foreground">
                                    All hands-on sessions utilize preconfigured HPC/Cloud-based platforms for reproducibility
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="text-4xl mb-3">💻</div>
                                <h3 className="font-semibold mb-2">Requirements</h3>
                                <p className="text-sm text-muted-foreground">
                                    Participants must bring laptops for practical training sessions
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="text-4xl mb-3">📁</div>
                                <h3 className="font-semibold mb-2">Materials Provided</h3>
                                <p className="text-sm text-muted-foreground">
                                    Workshop materials and datasets provided on Day 1
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="text-4xl mb-3">👥</div>
                                <h3 className="font-semibold mb-2">Limited Seats</h3>
                                <p className="text-sm text-muted-foreground">
                                    Only ~25 participants to ensure personalized attention
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

