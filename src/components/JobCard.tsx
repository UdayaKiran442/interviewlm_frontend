import { redirect, RedirectType } from "next/navigation";

import { IJob } from "@/types/types";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { H5, Tagline } from "./ui/Typography";
import IconWrapper from "./IconWrapper";
import { Building2, LocationEdit, Users, Wallet } from "lucide-react";
import TitleCapsule from "./TitleCapsule";
import JobStats from "./JobStats";
import { ButtonSecondary } from "./ui/Buttons";

export default function JobCard({
  job,
  length,
}: {
  job: IJob;
  length: number;
}) {
  return (
    <div
      key={job.jobId}
      className="p-5 bg-gray-100 rounded-xl mt-2.5 border border-gray-200"
    >
      <div className="flex justify-between">
        {/* title header */}
        <div className="flex items-center gap-2">
          {/* icon */}
          <div>
            <ProfileIcon name="BD" className="!w-14 !h-14 !text-2xl" />
          </div>
          {/* title and job details */}
          <div>
            <H5>{job.jobTitle}</H5>
            <div className="flex gap-5">
              <IconWrapper>
                <Building2 size={20} />
                <Tagline>{job.department}</Tagline>
              </IconWrapper>

              {job.location && (
                <IconWrapper>
                  <LocationEdit size={20} />
                  <Tagline>{job.location}</Tagline>
                </IconWrapper>
              )}
              {job.package && (
                <IconWrapper>
                  <Wallet size={20} />
                  <Tagline>{job.package}</Tagline>
                </IconWrapper>
              )}
            </div>
            <div className="flex gap-5 mt-2">
              <TitleCapsule
                title={job.isJobOpen ? "Active" : "Closed"}
                className="!px-3 !py-1 !text-sm"
              />
            </div>
          </div>
        </div>
        <div>Posted on {job.createdAt.split("T")[0]}</div>
      </div>
      {/* stats */}
      <div className="grid md:grid-cols-5 sm:grid-cols-2 mt-4">
        <JobStats job={job} />
      </div>
      {/* actions */}
      <div className="mt-5">
        <ButtonSecondary
          onClick={() => redirect(`/hr/job/${job.jobId}`, RedirectType.push)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Users size={20} />
          View Applicants ({length})
        </ButtonSecondary>
      </div>
    </div>
  );
}
