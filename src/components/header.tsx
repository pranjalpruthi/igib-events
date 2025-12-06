import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/logo'
import { Menu, X, Home, Calendar, Users, Mail, Database, BookOpen, Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion, useScroll } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'About', href: '#about', icon: Home },
    { name: 'Schedule', href: '#schedule', icon: Calendar },
    { name: 'Speakers', href: '#speakers', icon: Users },
    { name: 'Contact', href: '#contact', icon: Mail },
]

const mobileMenuItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Sessions', href: '#sessions', icon: BookOpen },
    { name: 'Data', href: 'https://drive.google.com/drive/folders/1ILlIgXQZw2-ADOgwDm2aiJodZ-JN2vOH', icon: Database, external: true },
    { name: 'Cockpit', href: 'https://hpcpit.pranjal.work', icon: Laptop, external: true },
]

export const HeroHeader = () => {
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <>
        <header>
            <nav className="fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:gap-3">
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 transition-all dark:bg-white dark:text-black dark:hover:bg-white/90">
                                <a href="https://hpcpit.pranjal.work" target="_blank" rel="noopener noreferrer">
                                    <span>Resource Cockpit</span>
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-lime-600 hover:bg-lime-700 text-white shadow-md shadow-lime-600/20 hover:shadow-lg hover:shadow-lime-600/30 transition-all">
                                <a href="https://drive.google.com/drive/folders/1ILlIgXQZw2-ADOgwDm2aiJodZ-JN2vOH" target="_blank" rel="noopener noreferrer">
                                    <span>Sample Data</span>
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                                <a href="https://www.canva.com/design/DAG3bQ0I9B8/2Q5S6W9e0Kj2ofaOqeMeYw/view?utm_content=DAG3bQ0I9B8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdaf0b68eab" target="_blank" rel="noopener noreferrer">
                                    <span>Download Brochure</span>
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>

        {/* Mobile Bottom Dock */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-4 mb-4 rounded-2xl border-2 bg-background/95 backdrop-blur-xl shadow-2xl"
            >
                <div className="flex items-center justify-around px-2 py-3">
                    {mobileMenuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all hover:bg-primary/10 active:scale-95"
                        >
                            <item.icon className="size-5 text-muted-foreground" />
                            <span className="text-[10px] font-medium text-muted-foreground">{item.name}</span>
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
        </>
    )
}
