import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export default function IconWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <div className={cn("flex items-center gap-1 justify-center", className)}>
      {children}
    </div>
  );
}
