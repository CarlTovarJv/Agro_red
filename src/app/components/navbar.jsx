"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const HIDDEN_ROUTES = ["/login", "/register"];

export default function Navbar() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Reviews", href: "/review" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Contact Us", href: "/Contactus" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm h-16">
      <div className="max-w-8xl mx-auto h-full flex items-center justify-between px-6">
        
        {/* Left: Logo */}
        <Link href="/">
          <Image
            src="/Logo_C.svg"
            alt="AgroRed"
            width={100}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Center nav links */}
        <nav className="flex justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative text-gray-700 transition-colors duration-300
                ${pathname === link.href ? "font-bold text-[#FF6E08]" : ""}
              `}
            >
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF6E08] 
                  scale-x-0 origin-left transition-transform duration-300
                  ${pathname === link.href ? "scale-x-100" : ""}
                `}
              />
            </Link>
          ))}
        </nav>

        {/* Right: Sign in button */}
        <Link href="/login">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#55A605] text-white text-sm font-semibold rounded-xl shadow-md hover:bg-green-700 transition-colors duration-300 cursor-pointer">
            <FaUser size={16} />
            Sign in
          </button>
        </Link>
      </div>
    </header>
  );
}




