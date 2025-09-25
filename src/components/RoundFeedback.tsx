import { Brain, LoaderPinwheel } from "lucide-react";
import IconWrapper from "./IconWrapper";
import TitleCapsule from "./TitleCapsule";
import { Tagline } from "./ui/Typography";
import { IRoundResults } from "@/types/types";

export default function RoundFeedback({
  selectedRound,
}: {
  selectedRound: IRoundResults | undefined;
}) {
  return (
    <div className="border border-gray-900 p-4 mt-8 rounded-2xl">
      <IconWrapper>
        <Brain size={18} color="blue" />
        <p className="font-semibold text-sm">AI Recommendation</p>
      </IconWrapper>
      <div className="flex justify-between items-center mt-2">
        {selectedRound?.roundResultId == null ? (
          <p>Candidate yet to take the round</p>
        ) : (
          <>
            <TitleCapsule
              title={
                selectedRound?.feedback?.aiRecommendation
                  ? "PROCEED"
                  : !selectedRound?.feedback?.aiRecommendation &&
                    selectedRound?.roundResultId
                  ? "REJECT"
                  : "NEEDS HUMAN REVIEW"
              }
              className="!px-2.5 !py-0.5 !text-[0.75rem] font-semibold"
            />
            {/* ai score */}
            <div className="flex items-center gap-0.5">
              <LoaderPinwheel size={16} color="gray" />
              <Tagline className="text-sm">{selectedRound?.feedback?.aiScore}% confidence</Tagline>
            </div>
          </>
        )}
      </div>
      {/* strengths and concerns of the selected round, by default it will show the feedback of the current round */}
      <div className="mt-3">
        {selectedRound &&
          Array.isArray(selectedRound.feedback?.strengths) &&
          selectedRound.feedback.strengths.length > 0 && (
            <div>
              <p className="text-[0.75rem]">
                <span className="text-green-500 font-semibold mr-2.5">
                  Strengths:
                </span>
                {selectedRound.feedback.strengths[0]}
              </p>
            </div>
          )}
        {selectedRound &&
          Array.isArray(selectedRound.feedback?.concerns) &&
          selectedRound.feedback.concerns.length > 0 && (
            <div className="mt-2">
              <p className="text-[0.75rem]">
                <span className="text-red-500 font-semibold mr-2.5">
                  Concerns:
                </span>
                {selectedRound.feedback.concerns[0]}
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
