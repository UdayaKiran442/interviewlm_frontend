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
