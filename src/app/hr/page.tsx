import React from "react";
import { cookies } from "next/headers";
import { getJobsByHRAPI } from "@/actions/hr";
import JobsPage from "@/components/JobsPage";

const HRPage: React.FC = async () => {
    const cookieStore = await cookies();
    const user = cookieStore.get('user')?.value;
    console.log("cookieStore.get('user')", cookieStore.get('user'))
    if (!user) {
        return (
            <div>
                <p>Please login to view this page</p>
            </div>
        );
    }
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
