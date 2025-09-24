/**
 * @author Udaya Kiran Gonuguntla
 * @description IconWrapper component to wrap icons along with text or other elements
 * @description Example usage: (icon) (text to be displayed next to icon)
 * @param {React.ReactNode} children - The icon elements to be wrapped
 * @param {string} className - Additional class names for styling
 * @returns {JSX.Element} The IconWrapper component
 */

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
    <div className={cn("flex items-center gap-1", className)}>
      {children}
    </div>
  );
}
