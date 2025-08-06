import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentUser() {
    const user = await currentUser();
    if (user) {
        const userId = user.id;
        const email = user.emailAddresses[0].emailAddress;
        return { userId, email }
    }

}
