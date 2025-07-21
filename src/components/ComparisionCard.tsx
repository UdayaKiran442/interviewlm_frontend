import {
  Calendar,
  Check,
  CheckCircle2,
  Rocket,
  Settings,
  X,
  GitMerge,
  Zap,
} from "lucide-react";
import { H3 } from "./ui/Typography";

export function TraditionalHiringCard() {
  return (
    <div className="bg-white border border-red-200 p-8 rounded-2xl flex-1">
      <div className="flex justify-between items-start">
        <H3 className="text-red-500 text-2xl font-bold">Traditional Hiring</H3>
        {/* Updated header icon to match the image */}
        <div className="bg-red-500 w-fit rounded-full p-2">
          <X className="text-white" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>High volume of unfiltered applications overwhelms HR teams</p>
        </div>

        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>Manual and repetitive interview scheduling consumes time</p>
        </div>

        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>Heavy reliance on internal teams for first-round interviews</p>
        </div>

        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Slow and expensive recruitment cycles due to multiple coordination
            layers
          </p>
        </div>

        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Losing top talent due to long response times and outdated processes
          </p>
        </div>

        <div className="flex items-start gap-3">
          <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Inconsistent manual code reviews leading to biased decisions and
            slow turnaround times
          </p>
        </div>
      </div>
    </div>
  );
}

/*
  Card detailing the benefits of using InterviewLM.
  - Features a blue color scheme.
  - Includes the "Our Solution" tag.
  - Header icon is a white 'Check' on a solid blue background.
  - List items use specific, green-colored icons to match the image.
*/
export function InterviewLMCard() {
  return (
    <div className="bg-white border border-blue-200 p-8 rounded-2xl flex-1">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start">
          {/* Added "Our Solution" tag */}
          <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-2">
            Our Solution
          </span>
          <H3 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-2xl font-bold">
            InterviewLM
          </H3>
        </div>
        {/* Updated header icon to match the image */}
        <div className="bg-blue-500 w-fit rounded-full p-2">
          <Check className="text-white" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="text-green-500 mt-1 flex-shrink-0"
            size={20}
          />
          <p>
            Contextual AI-powered resume screening shortlists top candidates
            based on JD-resume match
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="text-green-500 mt-1 flex-shrink-0" size={20} />
          <p>
            24/7 AI interviews, letting candidates take interviews at their
            convenience with no scheduling hassle
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Settings className="text-green-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Customizable AI-led interview rounds, reducing developer/HR
            bandwidth by automating first-level screening
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Rocket className="text-green-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Fast, asynchronous hiring workflow that accelerates screening and
            feedback turnaround
          </p>
        </div>

        <div className="flex items-start gap-3">
          <GitMerge className="text-green-500 mt-1 flex-shrink-0" size={20} />
          <p>
            Hybrid AI + human review system ensures speed without compromising
            quality or control
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Zap className="text-green-500 mt-1 flex-shrink-0" size={20} />
          <p>
            AI-powered code analysis delivers instant, objective feedback on
            submissions
          </p>
        </div>
      </div>
    </div>
  );
}
