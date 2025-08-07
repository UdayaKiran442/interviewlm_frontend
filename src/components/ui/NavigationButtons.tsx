import { cn } from "@/lib/utils";

export default function NavigationButton({
    children,
    className,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button className={cn("text-sm font-semibold !px-3 !py-1 !flex !items-center hover:!bg-gradient-to-r from-blue-600 to-cyan-600 hover:!rounded-xl hover:!border-2 hover:!border-gray-200 hover:!text-white hover:!py-2", className)} onClick={onClick}>
            {children}
        </button>
    );
}
