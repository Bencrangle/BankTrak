import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import Navbar from "@/components/layout/navbar";

export const instant = false;

export default async function DashboardLayout ({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth0.getSession();

    if (!session?.user) {
        redirect("/auth/login");
    }

    // displays username, if not falls back to email and if not falls back to "User"
    const userName = session.user.name ?? session.user.email ?? "User";

    return (
        <div className = "flex min-h-screen bg-slate-50 text-slate-900">
            <Navbar userName = {userName} />

            <main className = "min-w-0 flex-1 p-5 sm:p-8 lg:p-10">
                {children}
            </main>
        </div>
    );
}