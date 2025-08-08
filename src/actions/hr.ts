import { IHRJobsAPIResponse } from "@/types/types";
import { getToken } from "@/utils/getToken.utils";

export async function getJobsByHRAPI(): Promise<IHRJobsAPIResponse> {
    try {
        const jobsAPI = await fetch("http://localhost:3000/v1/hr/jobs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${await getToken()}`,
                "X-User-Role": "hr"
            },
        });
        const response = await jobsAPI.json()
        if (!response.success) {
            throw new Error(response.message);
        }
        return response;
    } catch (error) {
        throw error;
    }
}