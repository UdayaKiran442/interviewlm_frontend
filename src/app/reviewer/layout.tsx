import { loginUserAPI } from "@/actions/auth"

import Navigation from "@/components/Navigation"
import { ILoginAPIHRResponse } from "@/types/types";
import { getCurrentUser } from "@/utils/getCurrentUser.utils";

export default async function ReviewerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    try {
        const user = await getCurrentUser();
        if (user) {
            const userId = user.userId;
            const email = user.email;
            const response = await loginUserAPI({ userId, email }) as ILoginAPIHRResponse
            if (response.success && response.res.role === 'reviewer') {
                return <Navigation user={response.res}>{children}</Navigation>
            }
        }
    } catch (error) { }
}