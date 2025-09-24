"use client";
import { Briefcase, Plus } from "lucide-react";

import { IJob } from "@/types/types";
import PageWrapper from "./PageWrapper";
import { H3, H4, Tagline } from "./ui/Typography";
import { ButtonSecondary } from "./ui/Buttons";
import JobCard from "./JobCard";

export default function JobsPage({ jobs }: { jobs: IJob[] }) {
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
            <JobCard job={job} length={jobs.length} key={job.jobId} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
