import { IJob } from "@/types/types";
import StatsWrapper from "./StatsWrapper";
import StatsNumber from "./ui/StatsNumber";
import { Tagline } from "./ui/Typography";

export default function JobStats({ job }: { job: IJob }) {
  return (
    <>
      <StatsWrapper>
        <StatsNumber className="text-blue-600" number={job.applications} />
        <Tagline className="!-mt-1 !text-sm !font-semibold">
          Total Applications
        </Tagline>
      </StatsWrapper>
      <StatsWrapper>
        <StatsNumber className="text-yellow-600" number={job.inProgress} />
        <Tagline className="!-mt-1 !text-sm !font-semibold">
          In Progress
        </Tagline>
      </StatsWrapper>
      <StatsWrapper>
        <StatsNumber className="text-violet-600" number={job.interviewing} />
        <Tagline className="!-mt-1 !text-sm !font-semibold">
          Interviewing
        </Tagline>
      </StatsWrapper>
      <StatsWrapper>
        <StatsNumber className="text-green-600" number={job.hired} />
        <Tagline className="!-mt-1 !text-sm !font-semibold">Hired</Tagline>
      </StatsWrapper>
      <StatsWrapper>
        <StatsNumber className="text-red-600" number={job.rejected} />
        <Tagline className="!-mt-1 !text-sm !font-semibold">Rejected</Tagline>
      </StatsWrapper>
    </>
  );
}
