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
            <DialogPopup className="sm:max-w-md bg-white dark:bg-white shadow-2xl border-2 dark:border-gray-200">
                <DialogHeader className="text-center">
                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="size-8 text-primary animate-pulse" />
                    </div>
                    <DialogTitle className="text-xl text-center dark:text-gray-900">{title}</DialogTitle>
                    <DialogDescription className="text-center pt-2 dark:text-gray-700">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-50 border border-blue-200 dark:border-blue-200">
                        <Bell className="size-5 text-blue-600 dark:text-blue-600 shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-700">
                            Workshop content is being uploaded daily. Check back soon!
                        </p>
                    </div>
                    <p className="text-xs text-center text-gray-600 dark:text-gray-600">
                        Day 1 materials are already available in the schedule section.
                    </p>
                </div>
            </DialogPopup>
        </Dialog>
    )
}
