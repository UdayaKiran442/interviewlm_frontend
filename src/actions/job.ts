import { ICreateJobPayload, IGetJobByIdAPIResponse } from "@/types/types";

const BASE_URL = "http://localhost:3000/v1/job"

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
        console.log(error);
        return error;
    }
}

export async function getJobByIdAPI(payload: {jobId:string}){
    try {
        const getJobByIdAPI = await fetch(`${BASE_URL}/fetch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        return await getJobByIdAPI.json() as IGetJobByIdAPIResponse
    } catch (error) {
        throw error;
    }
}