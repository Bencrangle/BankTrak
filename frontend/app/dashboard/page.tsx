export default function DashboardPage() {
    return (
        <>
            <header className = "mb-8 flex items-center justify-between">
                <h1 className = "mt-1 text-3x1 font-bold tracking-tight">
                    Overview
                </h1>
            </header>

            <section className = "mb-8">
                <h2 className = "text-xl font-semibold">
                    BankTrak
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
                    <p className = "mt-3 text-2xl font-bold"> 
                        £4,609.00
                    </p>
                </div>

                <div className = "rounded-2xl bg-slate-200 bg-white p-6 shadow-sm">
                    <p className = "text-sm font-medium">
                        Monthly Income
                    </p>
                    <p className = "mt-3 text-2xl font-bold"> 
                        £2,500.00
                    </p>
                </div>

                <div className = "rounded-2xl bg-slate-200 bg-white p-6 shadow-sm">
                    <p className = "text-sm font-medium">
                        Monthly Expenses
                    </p>
                    <p className = "mt-3 text-2xl font-bold">
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
        </>
    );
}