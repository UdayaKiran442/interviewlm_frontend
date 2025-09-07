import React from "react";

import ManageReviewers from "@/components/ManageReviewers";
import { getReviewersForCompanyAPI } from "@/actions/reviewers";
import { getToken } from "@/utils/getToken.utils";


const ManageReviewersPage: React.FC = async () => {
    const token = await getToken()
    if (token) {
        const reviewers = await getReviewersForCompanyAPI(token)
        if (!reviewers.success) {
            return (
                <div>
                    <p>Error</p>
                </div>
            )
        }
        return (
            <>
                <ManageReviewers reviewers={reviewers.reviewers} />
            </>
        )
    }
};

export default ManageReviewersPage;