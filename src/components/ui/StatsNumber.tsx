import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface StatsNumberProps {
  number: number;
  className?: HTMLProps<HTMLElement>["className"];
}

export default function StatsNumber({ number, className }: StatsNumberProps) {
  return <p className={cn("font-semibold text-2xl", className)}>{number}</p>;
}
