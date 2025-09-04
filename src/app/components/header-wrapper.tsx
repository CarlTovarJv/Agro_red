"use client";

import { usePathname } from "next/navigation";
import Header from './pre-navbar';
import Navbar from './navbar';

export default function HeaderWrapper() {
    const pathname = usePathname();

    if (!pathname) return null;

    const showNav = !pathname.startsWith("/login") && !pathname.startsWith("/register");
    const showSpecialNav = pathname.startsWith("/login") || pathname.startsWith("/register");

    return (
        <>
            {showNav && <Header />}
            {showSpecialNav && <Navbar />}
        </>
    );
}
