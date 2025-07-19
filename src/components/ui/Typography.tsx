// Your H1 component file
import { cn } from "@/lib/utils"; // Adjust the import path

// Corrected type for props
interface H1Props {
  children: React.ReactNode;
  className?: string; // The className prop is just a string
}

export function H1({ children, className }: H1Props) {
  // cn() merges the default classes with the passed-in className.
  // If className contains a conflicting class (e.g., text-4xl),
  // it will correctly override the default (text-7xl).
  return <h1 className={cn("!text-7xl font-bold", className)}>{children}</h1>;
}