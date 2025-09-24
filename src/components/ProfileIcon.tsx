/**
 * @author Udaya Kiran Gonuguntla
 * @description ProfileIcon used to display the profile icon with initials
 * @description default color is blue with light blue background
 * @param {string} name - The initials to display in the profile icon
 * @param {string} className - Additional class names for styling
 * @returns {JSX.Element} The ProfileIcon component
 */

import { HTMLProps } from "react";

import { cn } from "@/lib/utils";

export default function ProfileIcon({
  name,
  className,
}: {
  name: string;
  className?: HTMLProps<HTMLSelectElement>["className"];
}) {
  return (
    <div>
      <p
        className={cn(
          className,
          "text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center"
        )}
      >
        {name}
      </p>
    </div>
  );
}
