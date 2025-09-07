"use client";

import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Navbar from "./navbar";
import PreNavbar from "./pre-navbar";

export default function HeaderWrapper() {
    const pathname = usePathname();
    const { isSignedIn } = useUser();

    if (!pathname) return null;

    // No mostrar nada en login/signup
    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
        return null;
    }

    return (
        <>
            {!isSignedIn && <Navbar />}   {/* Usuario NO autenticado */}
            {isSignedIn && <PreNavbar />} {/* Usuario autenticado */}
        </>
    );
}

