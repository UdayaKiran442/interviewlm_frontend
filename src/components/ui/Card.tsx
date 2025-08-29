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