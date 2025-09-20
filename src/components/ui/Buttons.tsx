/* eslint-disable @typescript-eslint/no-unused-expressions */
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
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={cn(
        "border-2 border-gray-200 rounded-xl px-10 py-2.5",
        className
      )}
    >
      {children}
    </button>
  );
}

export function ButtonSecondary({
  children,
  className,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={cn(
        "border-2 border-gray-200 !bg-blue-600 hover:!bg-blue-700 text-white font-bold px-4 py-2 rounded-xl",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
