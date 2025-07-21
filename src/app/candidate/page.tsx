import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const CandidatePage: React.FC = () => {
    return (
        <div>
            <h1>Candidate Page</h1>
            <button>
                <SignOutButton />
            </button>
        </div>
    );
};

export default CandidatePage;
