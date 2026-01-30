import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

const organizers = [
    {
        name: 'Dr. Jitendra Narayan',
        role: 'Principal Scientist & Organizer',
        lab: 'Jitendra Lab of Bioinformatics and Big Data',
        affiliation: 'CSIR-IGIB',
        image: 'https://github.com/shadcn.png' // Placeholder, user to provide
    },
    // Add more core organizers if known, otherwise just the lead
]

export function OrganizerTeam() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Organizing Team</Badge>
                    <h2 className="text-3xl font-bold md:text-4xl">Meet the Organizers</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Jitendra Lab of Bioinformatics and Big Data, CSIR-IGIB
                    </p>
                </div>

                <div className="flex justify-center">
                    {organizers.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-md w-full"
                        >
                            <Card className="text-center overflow-hidden hover:shadow-lg transition-all border-primary/20">
                                <CardContent className="pt-8 pb-8">
                                    <div className="mx-auto mb-6 flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                                        <div className="size-full rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                                            {person.name[0]}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                                    <p className="text-primary font-medium mb-1">{person.role}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{person.lab}</p>
                                    <Badge variant="outline">{person.affiliation}</Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
