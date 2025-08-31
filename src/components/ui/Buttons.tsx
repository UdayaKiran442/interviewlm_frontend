import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={cn("border-2 border-gray-200 rounded-xl px-10 py-2.5", className)} onClick={onClick}>{children}</button>
  );
}
