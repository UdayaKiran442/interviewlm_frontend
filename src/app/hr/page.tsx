import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const HRPage: React.FC = () => {
    return (
        <div>
            <h1>HR Page</h1>
            <button>
                <SignOutButton />
            </button>
        </div>
    );
};

export default HRPage;
