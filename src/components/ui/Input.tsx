import { cn } from "@/lib/utils";

interface InputProps {
    className?: string; // The className prop is just a string
    placeholder: string;
    name: string;
    id: string;
}


export function Input({ className, placeholder, name, id }: InputProps) {
    // cn() merges the default classes with the passed-in className.
    // If className contains a conflicting class (e.g., text-4xl),
    // it will correctly override the default (text-7xl).
    return (
        <>
            <input
                className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition", className)}
                type="text"
                placeholder={placeholder}
                name={name}
                id={id}
                required
            />
        </>
    )
}