import { createElement, ForwardRefExoticComponent, HTMLProps, RefAttributes } from "react";
import IconWrapper from "./ui/IconWrapper";
import { Tagline } from "./ui/Typography";
import { LucideProps } from "lucide-react";

interface ContactInfoItemProps {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    text: string | number | null | undefined;
    className?: HTMLProps<HTMLElement>["className"];
    size: number
}

export default function ContactInfoItem({ icon, text, className, size }: ContactInfoItemProps) {
    return (
        <IconWrapper>
            {createElement(icon, { size })}
            <Tagline className={className}>{text}</Tagline>
        </IconWrapper>
    )
}