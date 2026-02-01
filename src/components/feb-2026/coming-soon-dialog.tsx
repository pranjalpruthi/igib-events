import React from 'react'
import {
    Dialog,
    DialogPopup,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/animate-ui/components/base/dialog'
import { Clock, Bell } from 'lucide-react'

interface ComingSoonDialogProps {
    children: React.ReactNode
    title?: string
    description?: string
}

export function ComingSoonDialog({
    children,
    title = "Coming Soon",
    description = "This content is being prepared and will be available shortly. Stay tuned!"
}: ComingSoonDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogPopup className="sm:max-w-md bg-white dark:bg-zinc-900 shadow-2xl">
                <DialogHeader className="text-center">
                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="size-8 text-primary animate-pulse" />
                    </div>
                    <DialogTitle className="text-xl text-center">{title}</DialogTitle>
                    <DialogDescription className="text-center pt-2">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border">
                        <Bell className="size-5 text-muted-foreground shrink-0" />
                        <p className="text-sm text-muted-foreground">
                            Workshop content is being uploaded daily. Check back soon!
                        </p>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                        Day 1 materials are already available in the schedule section.
                    </p>
                </div>
            </DialogPopup>
        </Dialog>
    )
}
