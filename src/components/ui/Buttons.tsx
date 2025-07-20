import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={cn("border-2 border-gray-200 rounded-xl px-10 py-2.5", className)}>{children}</button>
  );
}
