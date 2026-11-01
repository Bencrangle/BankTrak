"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";

export default function Navbar({userName}: {userName: string}) {
    const currentPath = usePathname();

    return (
        <aside className = "flex-col border-r border-slate-200 bg-white p-6 md:flex">
            <Link href = "/dashboard" className = "mb-6 text-2xl font-bold tracking-tight">
                Bank Trak
            </Link>

            <nav className = "flex flex-col gap-2">
                {navigation.map((item) => (
                    <Link
                        key = {item.label}
                        href = {item.href}
                        className = { `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100 ${
                            item.href === currentPath ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        {item.label}
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
    )
}