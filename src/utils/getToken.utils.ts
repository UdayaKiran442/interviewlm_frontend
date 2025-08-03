import { auth } from "@clerk/nextjs/server";

export async function getToken() {
    const { getToken } = await auth();
    return await getToken();
}