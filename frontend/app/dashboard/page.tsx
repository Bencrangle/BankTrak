import Link from "next/link";
import { redirect } from "next/navigation";
import { navigation } from "@/lib/navigation";
import {auth0} from "@/lib/auth0";

export const instant = false;

export default async function Dashboard() {
    const session = await auth0.getSession();
    
    if (!session?.user) {
        redirect("/auth/login");
    }

    const userName = session.user.name ?? session.user.email;
    
    return (
        <div className = "flex min-h-screen bg-slate-50 text-slate-900">
            <aside className = "hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-6 md:flex">
                <Link href = "/dashboard" className = "mb-6 text-2xl font-bold tracking-tight">
                    Bank Trak
                </Link>

                <nav className = "flex flex-col gap-2">
                    {navigation.map((item) => (
                        <Link
                            key = {item.label}
                            href = {item.href}
                            className = { `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100 ${
                                item.href === "/dashboard"? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            <span className = "text-lg">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>
                
                <div className = "mt-auto border-t border-slate-200 pt-5">
                    <p className = "mb-3 text-slate-500 hover:text-red-600">
                        {userName}
                    </p>
                    <a
                        href = "/auth/logout"
                        className = "text-sm text-slate-600 hover:text-red-600"
                    >
                        Log Out
                    </a>
                </div>
            </aside>

            <main className = "min-w-1 flex-1 p-5 sm:p-8 lg:p-10">
                <header className = "mb-8 flex items-center justify-between">
                    <div>
                        <h1 className = "mt-1 text-3x1 font-bold tracking-tight">
                            Overview
                        </h1>
                    </div>

                    <a
                    href = "/auth/logout"
                    className = "rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Log Out
                    </a>
                </header>

                <section className = "mb-8">
                    <h2 className = "text-xl font-semibold">
                        Welcome, {userName}!
                    </h2>
                    <p className = "mt-1 text-slate-500">
                        Here are your recent transactions
                    </p>
                </section>

                <section className = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <div className = "rounded-2xl bg-emerald-700 p-6 text-white shadow-sm">
                        <p className = "text-sm font-medium">
                            Balance
                        </p>
                        <p className = "mt-3 text-2xl font-bold"> // Placeholder value
                            £4,609.00
                        </p>
                    </div>

                    <div className = "rounded-2xl bg-slate-200 bg-white p-6 shadow-sm">
                        <p className = "text-sm font-medium">
                            Monthly Income
                        </p>
                        <p className = "mt-3 text-2xl font-bold"> // Placeholder value
                            £2,500.00
                        </p>
                    </div>

                    <div className = "rounded-2xl bg-slate-200 bg-white p-6 shadow-sm">
                        <p className = "text-sm font-medium">
                            Monthly Expenses
                        </p>
                        <p className = "mt-3 text-2xl font-bold"> // Placeholder value
                            £1,200.00
                        </p>
                    </div>
                </section>

                <section id = "recent-transactions" className = "mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className = "mb-5 flex items-center justify-between">
                        <h2 className = "text-lg font-semibold">
                            Recent Transactions
                        </h2>
                    </div>

                    <div className = "divide-y divide-slate-100">
                        <div className = "flex items-center justify-between gap-4 py-4">
                            <p className = "font-medium">
                                Spotify Premium
                            </p>
                            <p className = "font-bold">
                                -£14.99
                            </p>
                            <p className = "text-sm text-slate-500">
                                October 27, 2026
                            </p>
                        </div>

                        <div className = "flex items-center justify-between gap-4 py-4">
                            <p className = "font-medium">
                                Eurospar
                            </p>
                            <p className = "font-bold">
                                -£37.98
                            </p>
                            <p className = "text-sm text-slate-500">
                                October 26, 2026
                            </p>
                        </div>

                        <div className = "flex items-center justify-between gap-4 py-4">
                            <p className = "font-medium">
                                Wages
                            </p>
                            <p className = "font-bold">
                                +£2000.00
                            </p>
                            <p className = "text-sm text-slate-500">
                                October 20, 2026
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}