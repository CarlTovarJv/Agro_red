"use client";

import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs"; // importamos el hook de Clerk
import Header from './pre-navbar';
import Navbar from './navbar';

export default function HeaderWrapper() {
    const pathname = usePathname();
    const { isSignedIn } = useUser(); // obtenemos si el usuario está logeado

    if (!pathname) return null;

    // No mostrar nada en login/signup/select account
    if (
        pathname.startsWith("/login") ||
        pathname.startsWith("/signup") ||
        pathname.startsWith("/SelectAccount")
    ) {
        return null;
    }

    return (
        <>
            {isSignedIn ? <Header /> : <Navbar />}
        </>
    );
}


