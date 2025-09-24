import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <div className={cn("min-h-screen w-full bg-gray-100", className)}>
      {children}
    </div>
  );
}
