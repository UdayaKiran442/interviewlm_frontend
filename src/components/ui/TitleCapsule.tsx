import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export default function TitleCapsule({
  title,
  className,
}: {
  title: string;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <div>
      <p
        className={cn(
          className,
          "text-blue-600 text-[0.75rem] bg-blue-100 rounded-xl px-2  w-fit"
        )}
      >
        {title}
      </p>
    </div>
  );
}
