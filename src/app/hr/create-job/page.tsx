import React, { Suspense } from "react";
import CreateJob from "@/components/CreateJob";


const CreateJobPage: React.FC = () => {
    return <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <CreateJob />
    </Suspense>;
};

export default CreateJobPage;