"use client";

import { useMemo } from "react";
import { Briefcase, Calendar, Eye, FolderDot, Mail, MapPin, Phone } from "lucide-react";

import { IGetApplicationsForJobAPIResponse } from "@/types/types";
import ProfileIcon from "./ui/ProfileIcon";
import { H5 } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import ContactInfoItem from "./IconInfoItem";

export default function CandidateCard({
  applicant,
}: {
  applicant: IGetApplicationsForJobAPIResponse["applications"][0];
}) {
  const currentRoundDetails = useMemo(() =>
    applicant.roundResults?.find((round) => round.roundId === applicant.currentRound),
    [applicant.roundResults, applicant.currentRound]
  );

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
              {applicant.lastName}
            </H5>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-1.5 gap-3">
              {/* appicant email */}
              <ContactInfoItem icon={Mail} size={20} text={applicant.email} />
              {/* applicant phone */}
              <ContactInfoItem icon={Phone} size={20} text={applicant.phone} />
              {/* applicant location */}
              <ContactInfoItem icon={MapPin} size={20} text={applicant.location} />
              {/* applicant experience */}
              <ContactInfoItem icon={Briefcase} size={20} text={`${applicant.totalExperience} years`} />
              {/* display current round name */}
              {currentRoundDetails && (
                <ContactInfoItem icon={FolderDot} size={20} text={currentRoundDetails.roundName} />
              )}
              {/* applied at */}
              <ContactInfoItem icon={Calendar} size={20} text={applicant.appliedAt.split("T")[0]} />
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
