import React from "react";
import { getJobsByHRAPI } from "@/actions/hr";
import JobsPage from "@/components/JobsPage";
import { getToken } from "@/utils/getToken.utils";


const HRPage: React.FC = async () => {
    const token = await getToken()
    if (token) {
        const response = await getJobsByHRAPI(token);
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
    }
};

export default HRPage;
