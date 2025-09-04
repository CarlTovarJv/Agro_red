"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Array of routes where navbar should be hidden
const HIDDEN_ROUTES = ["/login", "/register"];

export default function PreNavbar() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) {
    return null; // hide navbar on specific pages
  }

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative h-12">
      <div className="max-w-8xl mx-auto h-full flex items-center justify-between px-6">
        {/* Left: menu + logo */}
        <div className="flex items-center gap-3">
          <Image src="/menu.svg" alt="Menu" width={28} height={28} priority />
          <Link href="/page">
            <Image
              src="/Agrored-1-removebg-preview.png"
              alt="AgroRed"
              width={95}
              height={37}
              priority
            />
          </Link>
        </div>

        {/* Right: cart + user */}
        <div className="flex items-center gap-2 mr-6">
          <button className="rounded-full p-1">
            <Image
              src="/cart-svgrepo-com.svg"
              alt="Cart"
              width={30}
              height={30}
              priority
            />
          </button>
          <Link href="/Perfil">
            <Image
              src="/user-avatar.png"
              alt="User"
              width={28}
              height={28}
              className="cursor-pointer rounded-full"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
