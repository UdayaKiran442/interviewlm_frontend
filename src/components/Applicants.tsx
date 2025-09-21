"use client";

import { IGetApplicationsForJobAPIResponse } from "@/types/types";
import PageWrapper from "./ui/PageWrapper";
import Button from "./ui/Buttons";
import { ArrowLeft, Building2, LocationEdit, Wallet } from "lucide-react";
import { H3, Tagline } from "./ui/Typography";
import IconWrapper from "./ui/IconWrapper";
import { redirect } from "next/navigation";

export default function Applicants({
  applicants,
}: {
  applicants: IGetApplicationsForJobAPIResponse["applications"];
}) {
  return (
    <PageWrapper className="!bg-[#F9FCFE]">
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
        <div>

        </div>
      </div>
    </PageWrapper>
  );
}
