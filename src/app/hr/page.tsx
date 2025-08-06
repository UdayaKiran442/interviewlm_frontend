import Navigation from "@/components/Navigation";
import { getToken } from "@/utils/getToken.utils";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const HRPage: React.FC = async () => {
    const token = await getToken()
    return (
        <div>
            <Navigation />
        </div>
    );
};

export default HRPage;
