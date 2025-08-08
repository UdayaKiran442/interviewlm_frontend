import React from "react";
import { getJobsByHRAPI } from "@/actions/hr";
import JobsPage from "@/components/JobsPage";

const HRPage: React.FC = async () => {
    const response = await getJobsByHRAPI();
    if (!response.success) {
        return (
            <div>
                <p>{response.message}</p>
            </div>
        );
    }
    return (
        <div>
            <JobsPage jobs={response.jobs} />
        </div>
    );
};

export default HRPage;
