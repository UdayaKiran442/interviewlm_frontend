import { JSX } from "react";
import { H4 } from "./ui/Typography";
import { cn } from "@/lib/utils";

type IProps = {
  // icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  icon: JSX.Element;
  title: string;
  description: string;
  className?: string;
};

export default function FeatureCard({ icon, title, description, className }: IProps) {
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl w-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", className)}>
        {icon}
      </div>
      <div>
        <H4>{title}</H4>
      </div>
      <div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
