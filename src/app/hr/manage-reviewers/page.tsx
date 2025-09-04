import React from "react";

import ManageReviewers from "@/components/ManageReviewers";
import { getReviewersForCompanyAPI } from "@/actions/reviewers";


const ManageReviewersPage: React.FC = async () => {
    const reviewers = await getReviewersForCompanyAPI()
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
};

export default ManageReviewersPage;