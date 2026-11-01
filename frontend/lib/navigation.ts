export type NavigationItem = {
    label: string;
    href: string;
};

export const navigation: NavigationItem[] = [
    { label: "Dashboard", href: "/dashboard"},
    { label: "Transactions", href: "/dashboard/transactions"},
    { label: "Budgets", href: "/dashboard/budgets"}
];