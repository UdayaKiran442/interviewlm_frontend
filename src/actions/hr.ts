import { IAddReviewer, IHRJobsAPIResponse, IResponse } from "@/types/types";

const BASE_URL = `http://localhost:3000/v1/hr`

export async function getJobsByHRAPI(token: string): Promise<IHRJobsAPIResponse> {
    try {
        const jobsAPI = await fetch(`${BASE_URL}/jobs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "X-User-Role": "hr"
            },
        });
        const response = await jobsAPI.json()
        return response;
    } catch (error) {
        throw error;
    }
}

export async function inviteReviewerAPI(payload: IAddReviewer, token: string): Promise<IResponse> {
    try {
        const addReviewerAPI = await fetch(`${BASE_URL}/create/reviewer`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "X-User-Role": "hr"
            },
        });
        const response = await addReviewerAPI.json();
        return response;
    } catch (error) {
        throw error
    }
}