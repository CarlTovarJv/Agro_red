"use client";

import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import NavbarBuyer from "./pre-navbar";
import NavbarSeller from "./Navbar-seller";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {

    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
  }, [pathname]); 

  if (!pathname) return null;

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/SelectAccount")
  ) {
    return null;
  }

  if (!isSignedIn) return <Navbar />;

  if (role === "buyer") return <NavbarBuyer />;
  if (role === "seller") return <NavbarSeller />;

  return <Navbar />; 
}
