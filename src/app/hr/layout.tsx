import { loginUserAPI } from "@/actions/auth"

import Navigation from "@/components/Navigation"
import { ILoginAPIHRResponse } from "@/types/types";
import { getCurrentUser } from "@/utils/getCurrentUser.utils";
import { redirect } from "next/navigation";

export default async function HRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/');
    }

    try {
        const userId = user.userId;
        const email = user.email;
        const response = await loginUserAPI({ userId, email }) as ILoginAPIHRResponse

        if (response.success && response.res.role === 'hr') {
            return <Navigation user={response.res}>{children}</Navigation>
        }

        // If not HR or login failed, redirect to home
        redirect('/');
    } catch (error) {
        // Redirect to home on error
        redirect('/');
    }
}