import React from "react";

const ApplicantPage = async ({
  params,
}: {
  params: Promise<{ applicantId: string }>;
}) => {
  const { applicantId } = await params;
  return (
    <div>
      <p>applicantId: {applicantId}</p>
    </div>
  );
};

export default ApplicantPage;
