import { ICreateJobPayload } from "@/types/types";

const BASE_URL = "http://localhost:3000/v1/jobs"

export async function createJobAPI(payload: ICreateJobPayload) {
    try {
        const createJobAPI = await fetch(`${BASE_URL}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const response = await createJobAPI.json()
        return response;
    } catch (error) {
        throw error;
    }
}