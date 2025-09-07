import { ChangeEvent, useEffect, useState } from "react";

import { IJobState, IReviewer } from "@/types/types";
import { Input } from "./Input";
import { Label } from "./Label";
import { searchReviewersAPI } from "@/actions/reviewers";

interface SearchDropDownProps {
    jobDetails: IJobState;
    setJobDetails: React.Dispatch<React.SetStateAction<IJobState>>;
}

export function SearchDropDown({
    jobDetails,
    setJobDetails,
}: SearchDropDownProps) {
    const [reviewer, setReviewer] = useState<IReviewer[]>();

    async function searchReviewer(e: ChangeEvent<HTMLInputElement>) {
        try {
            const searchName = e.target.value;
            const reviewer = await searchReviewersAPI({ searchName });
            setReviewer(reviewer.reviewers)
        } catch (error) { }
    }

    function handleSelectReviewer(selected: IReviewer) {
        setJobDetails((prev) => ({
            ...prev,
            reviewerId: selected.reviewerId,
        }));
        setReviewer([])
    }

    return (
        <div className="space-y-2">
            <Label id="reviewer" label="Assign Reviewer" />
            <Input
                name="reviewer"
                id="reviewer"
                placeholder="Assign reviewer"
                type="text"
                className="mt-1"
                onChange={(e) => searchReviewer(e)}
            />
            {reviewer && reviewer.length > 0 && (
                <div>
                    {reviewer.map((reviewer) => (
                        <div onClick={() => handleSelectReviewer(reviewer)} key={reviewer.reviewerId} className="p-2 border-b cursor-pointer hover:bg-gray-100 flex items-center gap-2" >
                            <p>{reviewer.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
