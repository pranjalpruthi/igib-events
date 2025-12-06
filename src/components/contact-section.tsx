import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Contact & Resources</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Access workshop materials and get in touch with organizers
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Contact Information */}
                    <Card>
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Mail className="size-5 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a href="mailto:jitendra.igib@csir.res.in" className="text-muted-foreground hover:text-primary transition-colors">
                                            jitendra.igib@csir.res.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="size-5 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <a href="tel:7835999528" className="text-muted-foreground hover:text-primary transition-colors">
                                            +91 7835999528
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="size-5 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Venue</p>
                                        <p className="text-muted-foreground">
                                            CSIR- Institute of Genomics and Integrative Biology<br />
                                            Mathura Road Campus<br />
                                            Delhi, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a 
                                    href="https://www.igib.res.in/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline inline-flex items-center gap-2"
                                >
                                    Visit CSIR-IGIB Website
                                    <ExternalLink className="size-4" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Resource Links */}
                    <Card>
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Workshop Resources</h3>
                            
                            <div className="space-y-4">
                                <Button asChild variant="outline" className="w-full justify-between h-auto py-4">
                                    <a href="https://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                                        <div className="text-left">
                                            <p className="font-semibold">Resource Cockpit</p>
                                            <p className="text-xs text-muted-foreground">Access for registered users</p>
                                        </div>
                                        <ExternalLink className="size-4" />
                                    </a>
                                </Button>

                                <Button asChild variant="outline" className="w-full justify-between h-auto py-4">
                                    <a href="https://www.canva.com/design/DAG3bQ0I9B8/2Q5S6W9e0Kj2ofaOqeMeYw/view?utm_content=DAG3bQ0I9B8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdaf0b68eab" target="_blank" rel="noopener noreferrer">
                                        <div className="text-left">
                                            <p className="font-semibold">Download Brochure</p>
                                            <p className="text-xs text-muted-foreground">Workshop details & information</p>
                                        </div>
                                        <ExternalLink className="size-4" />
                                    </a>
                                </Button>

                                <Button asChild variant="outline" className="w-full justify-between h-auto py-4">
                                    <a href="https://dub.sh/nOwquyu" target="_blank" rel="noopener noreferrer">
                                        <div className="text-left">
                                            <p className="font-semibold">View Full Schedule</p>
                                            <p className="text-xs text-muted-foreground">Complete 5-day program</p>
                                        </div>
                                        <ExternalLink className="size-4" />
                                    </a>
                                </Button>

                                <Button asChild variant="outline" className="w-full justify-between h-auto py-4">
                                    <a href="https://colab.research.google.com/drive/11QNwa9I-VOk8Wg-VBxcPVycLqCxYqAFq?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <div className="text-left">
                                            <p className="font-semibold">Hands-on Sessions</p>
                                            <p className="text-xs text-muted-foreground">Google Colab notebooks</p>
                                        </div>
                                        <ExternalLink className="size-4" />
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* About Section */}
                <div className="mt-12 text-center">
                    <Card>
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold mb-4">About CSIR-IGIB</h3>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                The CSIR-Institute of Genomics and Integrative Biology is a premier research institute 
                                dedicated to advancing genomics and integrative biology research. The institute focuses on 
                                translational research in genomics, molecular medicine, and bioinformatics.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span>Organized by: <strong>CSIR-IGIB</strong></span>
                                <span className="hidden sm:inline">•</span>
                                <span>Funded by: <strong>ICMR</strong></span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="border-t bg-background py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2025 CSIR-Institute of Genomics and Integrative Biology. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="/" className="text-muted-foreground transition-colors hover:text-primary">
                            Home
                        </a>
                        <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
                            About
                        </a>
                        <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">
                            Contact
                        </a>
                        <a href="/docs" className="text-muted-foreground transition-colors hover:text-primary">
                            Docs
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

