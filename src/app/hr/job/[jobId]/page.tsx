import { redirect } from "next/navigation";
import { getApplicationsForJobAPI } from "@/actions/applications";
import Applicants from "@/components/Applicants";
import { getJobByIdAPI } from "@/actions/job";

const JobApplicantsPage = async ({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) => {
  const { jobId } = await params;
  const response = await getApplicationsForJobAPI(jobId);
  const jobByIdAPIResponse = await getJobByIdAPI({ jobId });
  if (!response.success || !jobByIdAPIResponse.success) {
    redirect("/");
  }

  return (
    <div>
      <Applicants
        applicants={response.applications}
        job={jobByIdAPIResponse.job}
      />
    </div>
  );
};

export default JobApplicantsPage;
