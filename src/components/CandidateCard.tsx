"use client";

import { IGetApplicationsForJobAPIResponse } from "@/types/types";
import ProfileIcon from "./ui/ProfileIcon";
import { H5, Tagline } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import { Briefcase, Eye, Mail, MapPin, Phone } from "lucide-react";
import IconWrapper from "./ui/IconWrapper";
import TitleCapsule from "./ui/TitleCapsule";

export default function CandidateCard({
  applicant,
}: {
  applicant: IGetApplicationsForJobAPIResponse["applications"][0];
}) {
  const currenRound = applicant.currentRound;
  const currentRoundDetails = applicant.roundResults.find((round) => round.roundId === currenRound)
  return (
    <div className="border border-gray-200 rounded-2xl p-8">
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
              {applicant.firstName}{" "}
              {applicant.middleName && applicant.middleName}{" "}
              {applicant.lastName && applicant.lastName}
            </H5>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-1.5 gap-4">
              <IconWrapper>
                <Mail size={20} />
                <Tagline className="!-mt-1">{applicant.email}</Tagline>
              </IconWrapper>
              <IconWrapper>
                <Phone size={20} />
                <Tagline className="!-mt-1">{applicant.phone}</Tagline>
              </IconWrapper>
              <IconWrapper>
                <MapPin size={20} />
                <Tagline className="!-mt-1">{applicant.location}</Tagline>
              </IconWrapper>
              <IconWrapper>
                <Briefcase size={20} />
                <Tagline className="!-mt-1">
                  {applicant.totalExperience} years
                </Tagline>
              </IconWrapper>
              <div>
                {/* display current round name */}
                {currentRoundDetails && (
                  <TitleCapsule title={currentRoundDetails?.roundName} />
                )}
              </div>
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
      <div></div>
      {/* round details */}
      <div></div>
    </div>
  );
}
