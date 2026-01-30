import * as React from 'react'
import { useTheme } from 'next-themes'

interface DNABackgroundProps {
    density?: number
    speed?: number
}

export function DNABackground({ density = 20, speed = 0.3 }: DNABackgroundProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const animationFrameRef = React.useRef<number | undefined>(undefined)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = mounted ? (resolvedTheme || theme) : 'dark'

    React.useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        // Professional color scheme
        const getColors = () => {
            if (currentTheme === 'light') {
                return {
                    primary: '#3b82f6',      // Blue
                    secondary: '#60a5fa',    // Light blue
                    accent: '#93c5fd',       // Lighter blue
                    line: '#e0e7ff',         // Very light blue
                }
            }
            return {
                primary: '#60a5fa',      // Light blue
                secondary: '#3b82f6',    // Blue
                accent: '#1e40af',       // Dark blue
                line: '#1e3a8a',         // Darker blue
            }
        }

        let offset = 0

        const drawHelixPattern = () => {
            const colors = getColors()
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const helixCount = 3
            const spacing = canvas.width / (helixCount + 1)

            for (let h = 0; h < helixCount; h++) {
                const centerX = spacing * (h + 1)
                const amplitude = 40
                const frequency = 0.01
                const dotSpacing = 30

                // Draw subtle connecting lines
                ctx.strokeStyle = colors.line
                ctx.lineWidth = 1
                ctx.globalAlpha = 0.15
                ctx.beginPath()

                for (let y = 0; y < canvas.height + dotSpacing; y += 2) {
                    const x1 = centerX + Math.sin((y + offset) * frequency) * amplitude
                    if (y === 0) {
                        ctx.moveTo(x1, y)
                    } else {
                        ctx.lineTo(x1, y)
                    }
                }
                ctx.stroke()

                // Draw elegant dots
                for (let y = 0; y < canvas.height + dotSpacing; y += dotSpacing) {
                    const x1 = centerX + Math.sin((y + offset) * frequency) * amplitude
                    const x2 = centerX - Math.sin((y + offset) * frequency) * amplitude

                    // Strand 1 dots
                    ctx.globalAlpha = 0.4
                    ctx.fillStyle = colors.primary
                    ctx.beginPath()
                    ctx.arc(x1, y, 3, 0, Math.PI * 2)
                    ctx.fill()

                    // Strand 2 dots
                    ctx.fillStyle = colors.secondary
                    ctx.beginPath()
                    ctx.arc(x2, y, 3, 0, Math.PI * 2)
                    ctx.fill()

                    // Connecting line between strands (base pairs)
                    if (Math.abs(x1 - x2) > 20) {
                        ctx.globalAlpha = 0.1
                        ctx.strokeStyle = colors.accent
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(x1, y)
                        ctx.lineTo(x2, y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            offset += speed
            drawHelixPattern()
            animationFrameRef.current = requestAnimationFrame(animate)
        }

        resize()
        window.addEventListener('resize', resize)
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [speed, currentTheme])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: currentTheme === 'light' ? 0.5 : 0.4 }}
        />
    )
}
