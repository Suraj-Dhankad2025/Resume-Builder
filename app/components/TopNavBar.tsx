"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";

export const TopNavBar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <header
            aria-label="Site Header"
        >
        </header>
    );
}
