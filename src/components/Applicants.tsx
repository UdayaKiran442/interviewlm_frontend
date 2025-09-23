"use client";

import { IGetApplicationsForJobAPIResponse } from "@/types/types";
import PageWrapper from "./ui/PageWrapper";
import Button from "./ui/Buttons";
import { ArrowLeft, Building2, LocationEdit, User, Wallet } from "lucide-react";
import { H3, H4, Tagline } from "./ui/Typography";
import IconWrapper from "./ui/IconWrapper";
import { redirect } from "next/navigation";
import CandidateCard from "./CandidateCard";

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
              <IconWrapper>
                <Building2 size={20} />
                <Tagline>Engineering</Tagline>
              </IconWrapper>
              <IconWrapper>
                <LocationEdit size={20} />
                <Tagline>India</Tagline>
              </IconWrapper>
              <IconWrapper>
                <Wallet size={20} />
                <Tagline>10-15LPA</Tagline>
              </IconWrapper>
            </div>
          </div>
        </div>
        {/* candidates */}
        <div className="mt-15 bg-white rounded-2xl p-8">
          {/* title */}
          <div>
            <div className="flex items-center gap-3">
              <User size={30} />
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
