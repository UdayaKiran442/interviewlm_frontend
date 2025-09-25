"use client";

import { redirect } from "next/navigation";
import { ArrowLeft, Building2, MapPin, User, Wallet } from "lucide-react";

import { IGetApplicationsForJobAPIResponse } from "@/types/types";
import PageWrapper from "./PageWrapper";
import Button from "./ui/Buttons";
import { H3, H4 } from "./ui/Typography";
import CandidateCard from "./CandidateCard";
import IconInfoItem from "./IconInfoItem";

export default function Applicants({
  applicants,
}: {
  applicants: IGetApplicationsForJobAPIResponse["applications"];
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
            <H3>Senior Software Engineer</H3>
            <div className="flex gap-5">
              {/* department */}
              <IconInfoItem icon={Building2} text="Engineering" size={20} />
              {/* location */}
              <IconInfoItem icon={MapPin} text="India" size={20} />
              {/* package */}
              <IconInfoItem icon={Wallet} text="10-15LPA" size={20} />
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
