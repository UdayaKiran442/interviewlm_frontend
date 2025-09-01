"use server"

export async function loginUserAPI(payload: { userId: string; email: string }) {
    try {
        const loginAPI = await fetch("http://localhost:3000/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const response = await loginAPI.json();
        return response;
    } catch (error) {
        throw error;
    }
}