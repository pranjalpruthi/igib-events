import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

const speakers = [
    { name: 'Dr. Jitendra Narayan', role: 'Organizer & Speaker', session: 'Intro, Genome Assembly' },
    { name: 'Ajay Bhatia', role: 'Speaker', session: 'Linux, Gene Enrichment' },
    { name: 'Pranjal', role: 'Speaker', session: 'CHITRA Hands-on' },
    { name: 'Mukul', role: 'Speaker', session: 'QC, Genome Assembly' },
    { name: 'Preeti Agarwal', role: 'Speaker', session: 'NGS Data Formats' },
    { name: 'Kaushalendra', role: 'Speaker', session: 'NGS Overview' },
    { name: 'Nityendra', role: 'Speaker', session: 'Genome Annotation' },
    { name: 'Anwesha', role: 'Speaker', session: 'AMR Detection' },
]

export function SpeakersSection2026() {
    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-6 md:mb-8">
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Training Team</Badge>
                    <h2 className="text-2xl font-bold md:text-3xl">Experts & Speakers</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Meet the team delivering the training sessions</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
