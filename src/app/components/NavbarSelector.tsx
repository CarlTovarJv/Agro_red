"use client";

import { useEffect, useState } from "react";
import NavbarSeller from "./Navbar-seller";
import PreNavbar from "./pre-navbar";

export default function NavbarSelector() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("userRole");
      setRole(savedRole);
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  if (role === "seller") return <NavbarSeller />;
  if (role === "buyer") return <PreNavbar />;

  return null;
}
