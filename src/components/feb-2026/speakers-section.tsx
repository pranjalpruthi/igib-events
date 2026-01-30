import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

const speakers = [
    { name: 'Dr. Jitendra Narayan', role: 'Organizer & Speaker', session: 'Intro, Genome Assembly' },
    { name: 'Ajay Bhatia', role: 'Speaker', session: 'Linux, Gene Enrichment' },
    { name: 'Kaushalendra', role: 'Speaker', session: 'NGS Overview' },
    { name: 'Preeti Agarwal', role: 'Speaker', session: 'NGS Data Formats' },
    { name: 'Mukul', role: 'Speaker', session: 'QC, Genome Assembly' },
    { name: 'Nityendra', role: 'Speaker', session: 'Genome Annotation' },
    { name: 'Anwesha', role: 'Speaker', session: 'AMR Detection' },
    { name: 'Pranjal', role: 'Speaker', session: 'CHITRA Hands-on' },
]

export function SpeakersSection2026() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">Experts & Speakers</h2>
                    <p className="text-muted-foreground">Meet the team delivering the training sessions</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full hover:shadow-lg transition-all">
                                <CardContent className="pt-6">
                                    <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                                        {speaker.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="font-bold text-lg">{speaker.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">{speaker.role}</p>
                                    <Badge variant="secondary" className="text-xs">
                                        {speaker.session}
                                    </Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
