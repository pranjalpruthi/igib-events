import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <LogoIcon />
            <span className="text-xl font-bold">IGIB Events</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-8', className)}
        >
            <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
            <path
                d="M16 8L20 12L16 16L12 12L16 8Z"
                fill="white"
                fillOpacity="0.9"
            />
            <path
                d="M16 16L20 20L16 24L12 20L16 16Z"
                fill="white"
                fillOpacity="0.7"
            />
            <circle cx="16" cy="16" r="2" fill="white" />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2563eb" />
                    <stop offset="0.5" stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#10b981" />
                </linearGradient>
            </defs>
        </svg>
    )
}

