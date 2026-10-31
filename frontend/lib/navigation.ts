export type NavigationItem = {
    label: string;
    href: string;
};

export const navigation: NavigationItem[] = [
    { label: "Dashboard", href: "/dashboard"},
    { label: "Accounts", href: "/dashboard/accounts"},
    { label: "Transactions", href: "/dashboard/transactions"},
    { label: "Budgets", href: "/dashboard/budgets"},
    { label: "Reports", href: "/dashboard/reports"}
];