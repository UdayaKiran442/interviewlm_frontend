interface IProps {
  params: Promise<{ applicantId: string }>;
  searchParams: Promise<{ jobId?: string }>;
}

const ApplicantPage = async ({ params, searchParams }: IProps) => {
  const [{ applicantId }, { jobId }] = await Promise.all([
    params,
    searchParams,
  ]);
  return (
    <div>
      <p>applicantId: {applicantId}</p>
      <p>jobId: {jobId}</p>
    </div>
  );
};

export default ApplicantPage;
