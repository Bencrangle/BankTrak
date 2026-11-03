import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function GET() {
    try {
        const { token } = await auth0.getAccessToken();

        const response = await fetch(
            `${process.env.BACKEND_URI}/transactions`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: "no-store",
            },
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        console.error("Transaction API test failed:", error);

        return NextResponse.json(
            { message: "Unable to communicate with the backend." },
            { status: 500 },
        );
    }
}

export async function POST() {
    try {
        const { token } = await auth0.getAccessToken();

        const transaction = {
            description: "Monthly salary",
            amount: 2500.00,
            type: "INCOME",
            category: "Salary",
            date: "2026-11-03",
        };

        const response = await fetch(
            `${process.env.BACKEND_URI}/transactions`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transaction),
                cache: "no-store",
            },
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        console.error("Transaction creation test failed:", error);

        return NextResponse.json(
            { message: "Unable to create the test transaction." },
            { status: 500 },
        );
    }
}