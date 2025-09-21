import { redirect } from "next/navigation";
import { getApplicationsForJobAPI } from "@/actions/applications";
import Applicants from "@/components/Applicants";

const JobApplicantsPage = async ({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) => {
  const { jobId } = await params;
  const response = await getApplicationsForJobAPI(jobId);
  if (!response.success) {
    redirect("/");
  }

  return (
    <div>
      <Applicants applicants={response.applications} />
    </div>
  );
};

export default JobApplicantsPage;
