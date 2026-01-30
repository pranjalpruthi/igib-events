import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="size-9">
                <Sun className="size-4" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="size-9 relative overflow-hidden"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 1 : 0,
                    opacity: theme === 'dark' ? 1 : 0,
                    rotate: theme === 'dark' ? 0 : 90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="size-4" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'light' ? 1 : 0,
                    opacity: theme === 'light' ? 1 : 0,
                    rotate: theme === 'light' ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="size-4" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
