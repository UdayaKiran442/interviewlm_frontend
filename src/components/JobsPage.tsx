"use client";
import {
  Briefcase,
  Building2,
  LocationEdit,
  Plus,
  Users,
  Wallet,
} from "lucide-react";

import { IJob } from "@/types/types";
import PageWrapper from "./ui/PageWrapper";
import { H3, H4, H5, Tagline } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import ProfileIcon from "./ui/ProfileIcon";
import IconWrapper from "./ui/IconWrapper";
import TitleCapsule from "./ui/TitleCapsule";
import JobStats from "./JobStats";

export default function JobsPage({ jobs }: { jobs: IJob[] }) {
  console.log(jobs);
  return (
    <PageWrapper>
      <div className="p-8">
        {/* header */}
        <div className="flex justify-between">
          <div>
            <H3>Jobs & Recruitment</H3>
            <Tagline>
              Manage job postings and track candidate applications
            </Tagline>
          </div>
          <div>
            <ButtonSecondary className="flex items-center gap-2">
              <Plus className="mr-2" />
              Create New Job
            </ButtonSecondary>
          </div>
        </div>
        {/* job postings card */}
        <div className="mt-8 bg-white border border-gray-200 p-8 rounded-2xl">
          <div className="flex items-center gap-2">
            <Briefcase />
            <H4>Job Postings ({jobs.length})</H4>
          </div>
          {jobs.map((job) => (
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
                <ButtonSecondary className="flex items-center gap-2">
                  <Users size={20} />
                  View Applicants ({jobs.length})
                </ButtonSecondary>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
