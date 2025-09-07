import { IGetReviewersForCompanyAPIResponse, ISearchReviewerAPIResponse } from "@/types/types";

const BASE_URL = "http://localhost:3000/v1/reviewer"

export async function getReviewersForCompanyAPI(token: string) {
    try {
        const reviewers = await fetch(`${BASE_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "X-User-Role": "hr"
            },
        });
        return await reviewers.json() as IGetReviewersForCompanyAPIResponse
    } catch (error) {
        throw error;
    }
}

export async function searchReviewersAPI(payload: { searchName: string }) {
    try {
        const searchReviewers = await fetch(`${BASE_URL}/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        return await searchReviewers.json() as ISearchReviewerAPIResponse
    } catch (error) {
        throw error;
    }
}