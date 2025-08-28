import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const CandidatePage: React.FC = () => {
    return (
        <div>
            <h1>Candidate Page</h1>
            <SignOutButton>
                <button>Logout</button>
            </SignOutButton>
        </div>
    );
};

export default CandidatePage;
