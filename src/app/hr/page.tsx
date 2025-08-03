import { getToken } from "@/utils/getToken.utils";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const HRPage: React.FC =  async () => {
    const token = await getToken()
    return (
        <div>
            <h1>HR Page</h1>
            <SignOutButton>
                <button>Logout</button>
            </SignOutButton>
        </div>
    );
};

export default HRPage;
