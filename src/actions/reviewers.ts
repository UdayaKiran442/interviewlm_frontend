import { IGetReviewersForCompanyAPIResponse } from "@/types/types";
import { getToken } from "@/utils/getToken.utils";

const BASE_URL = "http://localhost:3000/v1/reviewer"

export async function getReviewersForCompanyAPI() {
    try {
        const reviewers = await fetch(`${BASE_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${await getToken()}`,
                "X-User-Role": "hr"
            },
        });
        return await reviewers.json() as IGetReviewersForCompanyAPIResponse
    } catch (error) {
        throw error;
    }
}
