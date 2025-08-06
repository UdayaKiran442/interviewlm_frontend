"use server"

export async function loginUser(payload: { userId: string; email: string }) {
    try {
        const loginAPI = await fetch("http://localhost:3000/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return await loginAPI.json();
    } catch (error) {
        console.log(error);
    }
}