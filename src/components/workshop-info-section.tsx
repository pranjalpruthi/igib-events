import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Award, ExternalLink, BookOpen, Microscope, Brain, Database } from 'lucide-react'
import { motion } from 'motion/react'

const speakers = [
    {
        name: 'Dr. Jitendra Narayan',
        role: 'Principal Scientist, CSIR-IGIB',
        expertise: 'Bioinformatics & Big Data Analytics',
        talks: [
            { title: 'One Health Framework & Sequencing Technologies', day: 'Monday, Nov 3', time: '10:15 AM' },
            { title: 'Genome Assembly', day: 'Tuesday, Nov 4', time: '9:30 AM' }
        ]
    },
    {
        name: 'Dr. Souvik Mukherjee',
        role: 'Expert Speaker',
        expertise: 'Precision Microbiomics',
        talks: [
            { title: 'Precision Microbiomics: Unraveling the Antimicrobial Resistome', day: 'Tuesday, Nov 4', time: '12:00 PM' }
        ]
    },
    {
        name: 'Dr. Rakesh Sharma',
        role: 'Principal Scientist, CSIR-IGIB',
        expertise: 'Metagenomics & Microbial Diversity',
        talks: [
            { title: 'Microbial Diversity, Pathogens and AMR of Waterbodies', day: 'Tuesday, Nov 4', time: '3:30 PM' }
        ]
    },
    {
        name: 'Dr. Shandar Ahmed',
        role: 'Expert Speaker',
        expertise: 'AI & Machine Learning',
        talks: [
            { title: 'NGS Data Analysis using AI Methods', day: 'Wednesday, Nov 5', time: '9:30 AM' }
        ]
    },
    {
        name: 'Dr. Rajesh Pandey',
        role: 'Principal Scientist, CSIR-IGIB',
        expertise: 'Integrative Genomics',
        talks: [
            { title: 'Economics of Genomics: Active and Inactive Microbes', day: 'Wednesday, Nov 5', time: '11:30 AM' }
        ]
    },
    {
        name: 'Dr. Manish Kumar',
        role: 'Expert Speaker',
        expertise: 'Multi-Omics & Drug Resistance',
        talks: [
            { title: 'Discovery of Drug Resistance Factors in Multi-Omics Data', day: 'Wednesday, Nov 5', time: '2:00 PM' }
        ]
    },
    {
        name: 'Dr. Kumardeep Chaudhary',
        role: 'Expert Speaker',
        expertise: 'Federated AI & Surveillance',
        talks: [
            { title: 'Federated AI for Longitudinal Surveillance of AMR', day: 'Thursday, Nov 6', time: '9:30 AM' }
        ]
    },
    {
        name: 'Dr. Sanjay Deshpande',
        role: 'Expert Speaker',
        expertise: 'Biological Data Integration',
        talks: [
            { title: 'Integrating Data and Discovery: IBDC for Pathogen Research', day: 'Friday, Nov 7', time: '9:30 AM' }
        ]
    }
]

const objectives = [
    {
        icon: BookOpen,
        title: 'Foundational Knowledge',
        description: 'Provide participants with foundational knowledge in bioinformatics applied to emerging infectious diseases and antimicrobial resistance.'
    },
    {
        icon: Microscope,
        title: 'Genomic Technologies',
        description: 'Introduce key genomic sequencing technologies and their applications in public health.'
    },
    {
        icon: Brain,
        title: 'Practical Training',
        description: 'Train participants in the practical use of bioinformatics tools for genomic data analysis.'
    },
    {
        icon: Database,
        title: 'Data Interpretation',
        description: 'Enable participants to interpret genomic data for informed public health decision-making.'
    },
    {
        icon: Users,
        title: 'Collaborative Network',
        description: 'Foster a collaborative network among researchers working on One Health initiatives and bioinformatics.'
    },
    {
        icon: Award,
        title: 'Local Capacity',
        description: 'Enhance local capacity for genomic surveillance and outbreak response using advanced bioinformatics techniques.'
    }
]

export function WorkshopInfoSection() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Workshop Concept */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Workshop Concept</Badge>
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                            Navigating Global Health Challenges
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                            The global health landscape is increasingly challenged by the rapid emergence of <strong>infectious diseases (EIDs)</strong> and 
                            the escalating threat of <strong>antimicrobial resistance (AMR)</strong>. This workshop champions the <strong>"One Health"</strong> philosophy, 
                            recognizing the inextricable link between the health of humans, animals, and our shared environment.
                        </p>
                    </motion.div>
                </div>

                {/* Workshop Objectives */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold md:text-3xl mb-4">Workshop Objectives</h3>
                        <p className="text-muted-foreground">
                            Building expertise for the future of pathogen surveillance and bioinformatics
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-white dark:bg-gray-900 border hover:border-primary/50 transition-all hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <objective.icon className="size-5" />
                                            </div>
                                            <CardTitle className="text-base">{objective.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {objective.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Featured Speakers */}
                <div id="speakers" className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold md:text-3xl mb-4">Featured Speakers</h3>
                        <p className="text-muted-foreground">
                            Leading experts in genomics, AI, and bioinformatics
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full bg-white dark:bg-gray-900 border hover:border-primary/50 transition-all hover:shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                                            {speaker.name}
                                        </CardTitle>
                                        <p className="text-sm text-primary font-medium">{speaker.role}</p>
                                        <Badge variant="secondary" className="w-fit mt-2 text-xs bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                            {speaker.expertise}
                                        </Badge>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {speaker.talks.map((talk, talkIndex) => (
                                                <div key={talkIndex} className="border-l-2 border-primary/30 pl-3">
                                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                        {talk.title}
                                                    </p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                        {talk.day} • {talk.time}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* View Full Schedule CTA */}
                <div className="text-center">
                    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                        <CardContent className="py-12">
                            <h3 className="text-2xl font-bold mb-4">Complete Workshop Information</h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                View the complete digital standee with detailed schedules, team members, and workshop highlights
                            </p>
                            <Button asChild size="lg" className="shadow-lg">
                                <a href="https://digital-standee-ppt-cchqj6v.gamma.site" target="_blank" rel="noopener noreferrer">
                                    <span>View Digital Standee</span>
                                    <ExternalLink className="ml-2 size-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

