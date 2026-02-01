import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/animate-ui/components/animate/tooltip'

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
                                        <div className="text-left flex-1 min-w-0">
                                            <p className="font-semibold">Sandbox.bio</p>
                                            <p className="text-xs text-muted-foreground truncate">Interactive browser-based tutorials</p>
                                        </div>
                                        <ExternalLink className="size-4 shrink-0 ml-2" />
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
        <footer className="border-t bg-background py-8 pb-24 lg:pb-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Desktop: 3-column layout, Mobile: stacked */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">

                    {/* Branding Section - Left on desktop, top on mobile */}
                    <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
                        <a href="https://bioinformaticsonline.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                            <img
                                src="/assests/bol/favicon-192.png"
                                alt="BioinformaticsOnLine Logo"
                                className="size-10 rounded-lg"
                            />
                            <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">BioinformaticsOnLine</span>
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs">Open source bioinformatics tools for the community.</p>
                    </div>

                    {/* Jitendra Lab Fellows - Center on desktop */}
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="font-semibold text-sm text-foreground">Jitendra Lab Fellows</h4>
                        <TooltipProvider>
                            <div className="flex items-center -space-x-3">
                                {[
                                    { name: 'Dr. Jitendra', image: '/assests/people/jit.webp', role: 'Principal Investigator' },
                                    { name: 'Ajay Bhatia', image: '/assests/people/ajay.webp', role: 'PhD Scholar' },
                                    { name: 'Pranjal Pruthi', image: '/assests/people/pranjal.webp', role: 'PhD Scholar' },
                                    { name: 'Mukul Verma', image: '/assests/people/mukul.webp', role: 'PhD Scholar' },
                                    { name: 'Preeti Agarwal', image: '/assests/people/preeti.webp', role: 'PhD & SRF' },
                                    { name: 'Nityendra Shukla', image: '/assests/people/nitin.webp', role: 'Research Scientist' },
                                    { name: 'Anwesha De', image: '/assests/people/anwesha.webp', role: 'PhD Scholar' },
                                ].map((fellow, idx) => (
                                    <Tooltip key={idx}>
                                        <TooltipTrigger asChild>
                                            <Avatar className="size-10 border-3 border-background hover:scale-110 hover:z-10 transition-all cursor-pointer">
                                                <AvatarImage src={fellow.image} alt={fellow.name} />
                                                <AvatarFallback>{fellow.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="font-semibold">{fellow.name}</p>
                                            <p className="text-xs text-muted-foreground">{fellow.role}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </TooltipProvider>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs mt-2">
                            <a href="/" className="text-muted-foreground transition-colors hover:text-primary">Home</a>
                            <a href="/events" className="text-muted-foreground transition-colors hover:text-primary">Workshops</a>
                            <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">Contact</a>
                            <a href="https://jitendralab.igib.res.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">Lab</a>
                        </div>
                    </div>

                    {/* Social Links - Right on desktop */}
                    <div className="flex flex-col items-center lg:items-end gap-3">
                        <h4 className="font-semibold text-sm text-foreground">Connect</h4>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/BioinformaticsOnLine" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" title="GitHub">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="https://facebook.com/bioinformaticsonline" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" title="Facebook">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://discord.gg/bz2EKz9nG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" title="Discord">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                {/* Partners & Affiliations */}
                <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-sm text-foreground text-center mb-6">Partners & Affiliations</h4>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                        <a
                            href="https://www.igib.res.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                            title="CSIR-IGIB"
                        >
                            <img
                                src="/assests/logos/igib.webp"
                                alt="CSIR-IGIB Logo"
                                className="h-12 md:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg bg-white/80 dark:bg-white/90 p-1"
                            />
                        </a>
                        <a
                            href="https://jitendralab.igib.res.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                            title="Jitendra Lab"
                        >
                            <img
                                src="/assests/logos/jnlab-logo.webp"
                                alt="Jitendra Lab Logo"
                                className="h-16 md:h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg"
                            />
                        </a>
                        <a
                            href="https://www.skillindia.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                            title="Skill India"
                        >
                            <img
                                src="/assests/logos/skill-india.webp"
                                alt="Skill India Logo"
                                className="h-12 md:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg bg-white/80 dark:bg-white/90 p-1"
                            />
                        </a>
                    </div>
                </div>

                {/* Footer Credits - At bottom, centered */}
                <div className="mt-8 pt-6 border-t space-y-3">
                    <p className="text-center text-xs text-muted-foreground">
                        A <strong className="text-foreground">Skill India</strong> project by <strong className="text-foreground">CSIR-IGIB</strong>
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
                        <span>Made with <span className="text-red-500 animate-pulse">❤️</span> in <strong className="text-foreground">Jitendra Lab</strong> by</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="inline-flex items-center gap-2">
                                        <Avatar className="size-6 border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                                            <AvatarImage src="/assests/people/pranjal.webp" alt="Pranjal Pruthi" />
                                            <AvatarFallback>PP</AvatarFallback>
                                        </Avatar>
                                        <strong className="text-foreground">Pranjal</strong>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="flex flex-col gap-2 p-3">
                                    <p className="font-semibold">Pranjal Pruthi</p>
                                    <p className="text-xs text-muted-foreground">Full Stack Web Developer</p>
                                    <div className="flex items-center gap-2 pt-2 border-t">
                                        <a href="https://www.linkedin.com/in/pranjal-pruthi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors" title="LinkedIn">
                                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </a>
                                        <a href="https://github.com/pranjalpruthi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="GitHub">
                                            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                        <a href="mailto:mail@pranjal.work" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
                                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </a>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <p className="text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} CSIR-Institute of Genomics and Integrative Biology. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

