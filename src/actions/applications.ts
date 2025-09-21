import { IGetApplicationsForJobAPIResponse } from "@/types/types";

const BASE_URL = "http://localhost:3000/v1/applications";

export async function getApplicationsForJobAPI(jobId: string) {
    try {
        const applications = await fetch(`${BASE_URL}/job`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ jobId })
        })
        return await applications.json() as IGetApplicationsForJobAPIResponse
    } catch (error) {
        throw error
    }
}