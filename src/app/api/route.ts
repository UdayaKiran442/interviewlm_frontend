// app/api/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        // Forward to backend running at :3000
        const resp = await fetch('http://localhost:3000/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            // Ensure server-side fetch, no caching
            cache: 'no-store',
        });
        const data = await resp.json();

        const cookieStore = await cookies();
        cookieStore.set('user', JSON.stringify(data.res), {
            path: '/hr',
        });
        return NextResponse.json(data);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
