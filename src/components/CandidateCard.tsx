"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Briefcase,
  Calendar,
  CircleCheckBig,
  CircleX,
  Eye,
  FolderDot,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  IGetApplicationsForJobAPIResponse,
  IRoundResults,
} from "@/types/types";
import ProfileIcon from "./ProfileIcon";
import { H5 } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import IconInfoItem from "./IconInfoItem";
import ApplicationProgress from "./ApplicationProgress";
import RoundFeedback from "./RoundFeedback";

export default function CandidateCard({
  applicant,
}: {
  applicant: IGetApplicationsForJobAPIResponse["applications"][0];
}) {
  const currentRoundDetails = useMemo(
    () =>
      applicant.roundResults?.find(
        (round) => round.roundId === applicant.currentRound
      ),
    [applicant.roundResults, applicant.currentRound]
  );
  const [selectedRound, setSelectedRound] = useState<IRoundResults | undefined>(
    {
      applicationId: currentRoundDetails?.applicationId || "",
      roundId: currentRoundDetails?.roundId || "",
      roundResultId: currentRoundDetails?.roundResultId || "",
      feedback: currentRoundDetails?.feedback || {
        feedback: "",
        keywordMatch: 0,
        experienceMatch: 0,
        skillMatch: 0,
        aiScore: 0,
        strengths: [],
        concerns: [],
        aiRecommendation: "",
      },
      isQualified: currentRoundDetails?.isQualified || null,
      roundName: currentRoundDetails?.roundName || "",
      roundType: currentRoundDetails?.roundType || "",
      verdictBy: currentRoundDetails?.verdictBy || null,
      roundNumber: currentRoundDetails?.roundNumber || 0,
    }
  );
  const [progress, setProgress] = useState<number>(0);
  const [completedRounds, setCompletedRounds] = useState<number>(0);
  const [activeRoundId, setActiveRoundId] = useState<string>(
    applicant.currentRound || ""
  );

  function handleRoundClick(roundId: string) {
    const round = applicant.roundResults.find((r) => r.roundId === roundId);
    if (round) {
      setSelectedRound(round);
      setActiveRoundId(roundId);
    }
  }

  const calculateProgress = useCallback(() => {
    const totalRounds = applicant.roundResults.length;
    const completedRounds = applicant.roundResults.filter(
      (round) => round.verdictBy !== null
    ).length;
    const percentage =
      totalRounds === 0 ? 0 : Math.round((completedRounds / totalRounds) * 100);
    setProgress(percentage);
    setCompletedRounds(completedRounds);
  }, [applicant.roundResults]);

  useEffect(() => {
    calculateProgress();
  }, [calculateProgress]);

  return (
    <div className="border border-gray-200 rounded-2xl p-8 ">
      {/* candidate details */}
      <div className="flex justify-between">
        {/* left side */}
        <div className="flex items-center gap-3">
          {/* icon */}
          <div>
            <ProfileIcon name="SS" className="!w-18 !h-18 !text-3xl" />
          </div>
          <div>
            <H5>
              {/* applicant first name */}
              {applicant.firstName}{" "}
              {applicant.middleName && applicant.middleName}{" "}
              {applicant.lastName}
            </H5>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-1.5 gap-3">
              {/* appicant email */}
              <IconInfoItem
                className="text-sm"
                icon={Mail}
                size={16}
                text={applicant.email}
              />
              {/* applicant phone */}
              <IconInfoItem
                className="text-sm"
                icon={Phone}
                size={16}
                text={applicant.phone}
              />
              {/* applicant location */}
              <IconInfoItem
                className="text-sm"
                icon={MapPin}
                size={16}
                text={applicant.location}
              />
              {/* applicant experience */}
              <IconInfoItem
                icon={Briefcase}
                size={16}
                className="text-sm"
                text={`${
                  Number(applicant.totalExperience) <= 1
                    ? applicant.totalExperience + " year experience"
                    : applicant.totalExperience + " years experience"
                }`}
              />
              {/* display current round name */}
              {currentRoundDetails && (
                <IconInfoItem
                  icon={FolderDot}
                  size={16}
                  text={currentRoundDetails.roundName}
                  className="text-sm"
                />
              )}
              {/* applied at */}
              <IconInfoItem
                icon={Calendar}
                size={16}
                text={applicant.appliedAt.split("T")[0]}
                className="text-sm"
              />
            </div>
          </div>
        </div>
        {/* right side button  */}
        <div>
          <ButtonSecondary className="flex items-center gap-2">
            <Eye size={20} />
            View Profile
          </ButtonSecondary>
        </div>
      </div>
      {/* ai feedback and application round status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <RoundFeedback selectedRound={selectedRound} />
        {/* applications round status */}
        <ApplicationProgress
          completedRounds={completedRounds}
          totalRounds={applicant.roundResults.length}
          progress={progress}
        />
      </div>
      {/* round details on click of each round card, selectedRound state will be updated */}
      <div className="flex justify-center flex-wrap gap-10 mt-8 items-start">
        {applicant.roundResults.map((round) => (
          <div
            key={round.roundId}
            className={`flex flex-col items-center cursor-pointer text-center space-y-2 hover:bg-gray-50 p-3 rounded-xl ${
              activeRoundId === round.roundId
                ? "border-2 border-blue-600 bg-blue-50"
                : ""
            }`}
            onClick={() => handleRoundClick(round.roundId)}
          >
            {/* icon based on round status */}
            {round.verdictBy ? (
              round.isQualified ? (
                // green check icon if qualified
                <CircleCheckBig className="w-8 h-8 text-green-500" />
              ) : (
                // red cross icon if not qualified
                <CircleX className="w-8 h-8 text-red-500" />
              )
            ) : (
              // default icon with round number if round not yet completed or verdict is pending, gray icon for future rounds, blue for current round
              <ProfileIcon
                name={round.roundNumber.toString()}
                className={`w-8 h-8 ${
                  applicant.currentRound === round.roundId
                    ? ""
                    : "!bg-gray-200 !text-gray-700"
                }`}
              />
            )}
            {/* round name */}
            <p className="text-sm font-medium">{round.roundName}</p>
            {round.feedback?.aiScore && (
              <p className="text-xs text-gray-600">{round.feedback.aiScore}%</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
