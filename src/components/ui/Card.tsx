/**
 * @author Udaya Kiran Gonuguntla
 * @description Card component to wrap content with padding, background, and shadow
 * @param {React.ReactNode} children - The content to be wrapped inside the card
 * @param {string} className - Additional class names for styling
 * @returns {JSX.Element} The Card component
 */

import { HTMLProps } from "react";
import { cn } from "@/lib/utils";


export function Card({ children, className }: { children: React.ReactNode, className?: HTMLProps<HTMLElement>["className"]; }) {

    return (
        <>
            <div className={cn("p-8 bg-white w-full max-w-4xl rounded-lg shadow-sm", className)}>
                {children}
            </div>
        </>
    )
}