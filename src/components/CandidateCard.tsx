"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Brain,
  Briefcase,
  Calendar,
  CircleCheckBig,
  CircleX,
  Eye,
  FolderDot,
  LoaderPinwheel,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  IGetApplicationsForJobAPIResponse,
  IRoundResults,
} from "@/types/types";
import ProfileIcon from "./ProfileIcon";
import { H5, Tagline } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import ContactInfoItem from "./IconInfoItem";
import IconWrapper from "./IconWrapper";
import TitleCapsule from "./TitleCapsule";

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

  function handleRoundClick(roundId: string) {
    const round = applicant.roundResults.find((r) => r.roundId === roundId);
    if (round) {
      setSelectedRound(round);
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
              <ContactInfoItem icon={Mail} size={20} text={applicant.email} />
              {/* applicant phone */}
              <ContactInfoItem icon={Phone} size={20} text={applicant.phone} />
              {/* applicant location */}
              <ContactInfoItem
                icon={MapPin}
                size={20}
                text={applicant.location}
              />
              {/* applicant experience */}
              <ContactInfoItem
                icon={Briefcase}
                size={20}
                text={`${
                  Number(applicant.totalExperience) <= 1
                    ? applicant.totalExperience + " year experience"
                    : applicant.totalExperience + " years experience"
                }`}
              />
              {/* display current round name */}
              {currentRoundDetails && (
                <ContactInfoItem
                  icon={FolderDot}
                  size={20}
                  text={currentRoundDetails.roundName}
                />
              )}
              {/* applied at */}
              <ContactInfoItem
                icon={Calendar}
                size={20}
                text={applicant.appliedAt.split("T")[0]}
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
        <div className="border border-gray-900 p-4 mt-8 rounded-2xl">
          <IconWrapper>
            <Brain size={18} color="blue" />
            <p className="font-semibold text-sm">AI Recommendation</p>
          </IconWrapper>
          <div className="flex justify-between items-center mt-2">
            <TitleCapsule
              title={
                selectedRound?.feedback?.aiRecommendation
                  ? "PROCEED"
                  : !selectedRound?.feedback?.aiRecommendation
                  ? "REJECT"
                  : "NEEDS HUMAN REVIEW"
              }
              className="!px-2.5 !py-0.5 !text-xs font-semibold"
            />
            {/* ai score */}
            <div className="flex items-center gap-0.5">
              <LoaderPinwheel size={16} color="gray" />
              <Tagline>{selectedRound?.feedback?.aiScore}% confidence</Tagline>
            </div>
          </div>
          {/* strengths and concerns of the selected round, by default it will show the feedback of the current round */}
          <div>
            {selectedRound &&
              Array.isArray(selectedRound.feedback?.strengths) &&
              selectedRound.feedback.strengths.length > 0 && (
                <div>
                  <p>
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
                  <p>
                    <span className="text-red-500 font-semibold mr-2.5">
                      Concerns:
                    </span>
                    {selectedRound.feedback.concerns[0]}
                  </p>
                </div>
              )}
            {/* if candidate is yet to be screened or yet to give interview then show no feedback available */}
            {!selectedRound?.feedback && (
              <p className="text-gray-600">No AI feedback available.</p>
            )}
          </div>
        </div>
        {/* applications round status */}
        <div className="border border-gray-900 p-4 mt-8 rounded-2xl">
          {/* display application status here */}
          <p className="font-semibold text-sm">Progress Overview</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Interview Progress</p>
            <p>{progress}%</p>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2.5 mt-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <Tagline className="!text-[0.75rem]">
            {completedRounds}/{applicant.roundResults.length} rounds
            completed
          </Tagline>
        </div>
      </div>
      {/* round details on click of each round card, selectedRound state will be updated */}
      <div className="flex justify-center flex-wrap gap-10 mt-8 items-start">
        {applicant.roundResults.map((round) => (
          <div
            key={round.roundId}
            className="flex flex-col items-center cursor-pointer text-center space-y-2 
                 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:bg-gray-50 p-3 rounded-xl"
            onClick={() => handleRoundClick(round.roundId)}
          >
            {/* icon */}
            {round.verdictBy ? (
              round.isQualified ? (
                <CircleCheckBig className="w-8 h-8 text-green-500" />
              ) : (
                <CircleX className="w-8 h-8 text-red-500" />
              )
            ) : (
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
