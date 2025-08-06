import React from "react";

import Navigation from "@/components/Navigation";
import { getToken } from "@/utils/getToken.utils";

const HRPage: React.FC = async () => {
    const token = await getToken()
    return (
        <div>
            <Navigation />
        </div>
    );
};

export default HRPage;
