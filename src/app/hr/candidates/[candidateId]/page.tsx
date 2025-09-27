import React from "react";

const CandidatePage = async ({
  params,
}: {
  params: Promise<{ candidateId: string }>;
}) => {
  const { candidateId } = await params;
  return (
    <div>
      <p>candidateId: {candidateId}</p>
    </div>
  );
};

export default CandidatePage;
