import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

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
                                        <p className="font-semibold">CSIR-IGIB Email</p>
                                        <a href="mailto:jitendra.igib@csir.res.in" className="text-muted-foreground hover:text-primary transition-colors">
                                            jitendra.igib@csir.res.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="size-5 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold">BioinformaticsOnLine</p>
                                        <a href="mailto:info@bioinformaticsonline.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            info@bioinformaticsonline.com
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

                                <Button asChild variant="outline" className="w-full justify-between h-auto py-4">
                                    <a href="https://sandbox.bio" target="_blank" rel="noopener noreferrer">
                                        <div className="text-left">
                                            <div className="font-semibold">Sandbox.bio - Interactive Tutorials</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Learn bioinformatics from your browser. No setup required
                                            </div>
                                        </div>
                                        <ExternalLink className="size-4 shrink-0" />
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
                        © {new Date().getFullYear()} CSIR-Institute of Genomics and Integrative Biology. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
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
                        <a href="https://jitendralab.igib.res.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                            Lab
                        </a>
                        <a href="https://bioinformaticsonline.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                            BioinformaticsOnLine
                        </a>
                        <a href="https://github.com/BioinformaticsOnLine" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary inline-flex items-center gap-1">
                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                        </a>
                        <a href="https://facebook.com/bioinformaticsonline" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary inline-flex items-center gap-1">
                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            Facebook
                        </a>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </footer>
    )
}

