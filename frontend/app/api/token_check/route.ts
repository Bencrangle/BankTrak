import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function GET() {
    try {
        const { token } = await auth0.getAccessToken();

        return NextResponse.json({
            success: true,
            tokenAvailable: Boolean(token),
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                tokenAvailable: false,
                message: "Unable to retrieve an access token.",
            },
            { status: 401 },
        );
    }
}