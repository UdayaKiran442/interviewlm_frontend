// Your H1 component file
import { cn } from "@/lib/utils"; // Adjust the import path
import { HTMLProps } from "react";

// Corrected type for props
interface TypegraphyProps {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"]; // The className prop is just a string
}

export function H1({ children, className }: TypegraphyProps) {
  // cn() merges the default classes with the passed-in className.
  // If className contains a conflicting class (e.g., text-4xl),
  // it will correctly override the default (text-7xl).
  return <h1 className={cn("!text-7xl font-bold", className)}>{children}</h1>;
}
export function H2({ children, className }: TypegraphyProps) {
  return <h2 className={cn("!text-4xl font-bold", className)}>{children}</h2>;
}

export function H3({ children, className }: TypegraphyProps) {
  return <h3 className={cn("!text-3xl font-bold", className)}>{children}</h3>;
}

export function H4({ children, className }: TypegraphyProps) {
  return <h4 className={cn("!text-xl font-bold", className)}>{children}</h4>;
}

export function H5({ children, className }: TypegraphyProps) {
  return <h4 className={cn("text-lg font-bold", className)}>{children}</h4>;
}

export function Tagline({ children, className }: TypegraphyProps) {
  return <p className={cn("text-gray-600 mt-1", className)}>{children}</p>;
}