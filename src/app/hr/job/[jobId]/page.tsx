const JobPage = async ({ params }: { params: Promise<{ jobId: string }> }) => {
  const { jobId } = await params;
  return (
    <div>
      <h1>Job Page {jobId}</h1>
    </div>
  );
};

export default JobPage;
