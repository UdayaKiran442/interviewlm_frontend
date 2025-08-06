import { loginUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server";

import Navigation from "@/components/Navigation"
import { ILoginAPIHRResponse } from "@/types/types";

export default async function HRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    try {
        const user = await currentUser();
        if (user) {
            const userId = user.id;
            const email = user.emailAddresses[0].emailAddress;
            const response = await loginUser({ userId, email }) as ILoginAPIHRResponse
            if (response.success && response.res.role === 'hr') {
                return <Navigation user={response.res}>{children}</Navigation>
            }
        }
    } catch (error) {
        console.log(error);
    }
}