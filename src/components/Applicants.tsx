"use client";

import { redirect } from "next/navigation";
import { ArrowLeft, Building2, MapPin, User, Wallet } from "lucide-react";

import {
  IGetApplicationsForJobAPIResponse,
  IGetJobByIdAPIResponse,
} from "@/types/types";
import PageWrapper from "./PageWrapper";
import Button from "./ui/Buttons";
import { H3, H4 } from "./ui/Typography";
import CandidateCard from "./CandidateCard";
import IconInfoItem from "./IconInfoItem";

export default function Applicants({
  applicants,
  job,
}: {
  applicants: IGetApplicationsForJobAPIResponse["applications"];
  job: IGetJobByIdAPIResponse["job"];
}) {
  return (
    <PageWrapper className="!bg-[#e8f0f5]">
      <div className="p-8">
        {/* header title */}
        <div className="flex gap-3 items-center">
          <div>
            {/* back button */}
            <Button
              onClick={() => redirect("/hr")}
              className="flex gap-4 !bg-white !text-black !px-3 !py-1.5"
            >
              <ArrowLeft />
              Back to Jobs
            </Button>
          </div>
          {/* job details */}
          <div>
            <H3>{job.jobTitle}</H3>
            <div className="flex gap-5">
              {/* department */}
              <IconInfoItem icon={Building2} text={job.department} size={20} />
              {/* location */}
              <IconInfoItem icon={MapPin} text={job.location} size={20} />
              {/* package */}
              <IconInfoItem icon={Wallet} text={job.package} size={20} />
            </div>
          </div>
        </div>
        {/* candidates */}
        <div className="mt-15 bg-white rounded-2xl p-8">
          {/* title */}
          <div>
            <div className="flex items-center gap-2">
              <User size={25} />
              <H4>Candidates ({applicants.length})</H4>
            </div>
          </div>
          {/* candidates list */}
          {applicants.map((applicant) => (
            <div key={applicant.applicationId} className="mt-5">
              <CandidateCard applicant={applicant} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
