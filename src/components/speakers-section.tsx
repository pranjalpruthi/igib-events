import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'

const speakers = [
    {
        name: 'Dr. Jitendra Narayan',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        expertise: 'Expert in comparative genomics and genome evolution, specializing in chromosomal breakpoints, horizontal gene transfer, and genome repair mechanisms using stress-tolerant organisms.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Dr. Souvik Mukherjee',
        title: 'Associate Professor',
        organization: 'BRIC-NIBMG',
        expertise: 'Specializes in host-microbiome interactions in human health and disease, with focus on Psoriasis, Atopic Dermatitis, Adverse Pregnancy Outcomes, Diabetic Foot Ulcers, and Colorectal Cancer chemoresistance.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        name: 'Dr. Rakesh Sharma',
        title: 'Chief Scientist',
        organization: 'CSIR-IGIB',
        expertise: 'Focuses on microbial diversity and function using metagenomics, exploiting the microbiome for novel bioactive molecules, and studying stress tolerance in microbial communities.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Dr. Shandar Ahmed',
        title: 'Professor',
        organization: 'School of Computational & Integrative Sciences, JNU',
        expertise: 'Leads SciWhyLab developing data-driven algorithms using machine learning, deep learning, and big data analytics for genomic-scale data analysis.',
        color: 'from-orange-500 to-red-500'
    },
    {
        name: 'Dr. Rajesh Pandey',
        title: 'Senior Principal Scientist',
        organization: 'CSIR-IGIB',
        expertise: 'Directs research on host-pathogen interactions using Integrative Genomics, Single Cell Transcriptomics, and Immunogenomics, focusing on infectious diseases.',
        color: 'from-teal-500 to-cyan-500'
    },
    {
        name: 'Dr. Manish Kumar',
        title: 'Professor',
        organization: 'Delhi University',
        expertise: 'Specializes in bioinformatics analysis of microbial genomes, phylogenomics, chemo-informatics for understanding AMR evolution, and structure-based drug design.',
        color: 'from-indigo-500 to-blue-500'
    },
    {
        name: 'Dr. Kumardeep Chaudhary',
        title: 'Principal Scientist',
        organization: 'CSIR-IGIB',
        expertise: 'Leads Digital and Genomic Medicine lab, integrating multi-modal datasets using AI/ML for precision healthcare, cardiovascular diseases, cancer biomarkers, and AMR.',
        color: 'from-rose-500 to-pink-500'
    },
    {
        name: 'Dr. Sanjay Deshpande',
        title: 'Scientist',
        organization: 'Indian Biological Data Centre (IBDC)',
        expertise: 'Manages national biological data infrastructure, including nucleotide data archive portals (INDA, INSACOG, Genome India) and coordinates projects of national relevance.',
        color: 'from-amber-500 to-orange-500'
    },
]

export function SpeakersSection() {
    return (
        <section id="speakers" className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Featured Speakers</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Learn from leading experts in genomics and bioinformatics
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                                <div className={`h-2 bg-gradient-to-r ${speaker.color}`} />
                                <CardContent className="p-6">
                                    {/* Avatar Placeholder */}
                                    <div className="mb-4 flex items-center justify-center">
                                        <div className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${speaker.color} text-2xl font-bold text-white shadow-lg`}>
                                            {speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>

                                    {/* Speaker Info */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold">{speaker.name}</h3>
                                        <p className="mt-1 text-sm font-medium text-primary">{speaker.title}</p>
                                        <Badge variant="secondary" className="mt-2">
                                            {speaker.organization}
                                        </Badge>
                                    </div>

                                    {/* Expertise */}
                                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                        {speaker.expertise}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

