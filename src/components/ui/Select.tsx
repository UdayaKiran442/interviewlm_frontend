import { cn } from "@/lib/utils";
import { HTMLProps } from "react";




export function Select({ className, id, name, children }: { className?: HTMLProps<HTMLSelectElement>["className"]; id: string; name: string; children: React.ReactNode }) {
    // cn() merges the default classes with the passed-in className.
    // If className contains a conflicting class (e.g., text-4xl),
    // it will correctly override the default (text-7xl).
    return (
        <>
            <select className={cn("w-full border border-gray-300 rounded-lg p-3", className)} id={id} name={name}>
                {children}
            </select>
        </>
    )
}