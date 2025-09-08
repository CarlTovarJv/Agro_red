"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const HIDDEN_ROUTES = ["/login", "/register"];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Reviews", href: "/review" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Contact Us", href: "/Contactus" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm h-16 relative">
      <div className="max-w-8xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/AgroC.svg"
            alt="AgroRed"
            width={160}
            height={60}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Center nav links */}
        <nav className="hidden lg:flex flex-1 justify-center gap-8">
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

        {/* Right: Sign in button con más margen */}
        <Link href="/login">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#55A605] text-white text-sm font-semibold rounded-xl shadow-md hover:bg-green-700 transition-colors duration-300 cursor-pointer mr-7">
            <FaUser size={16} />
            Sign in
          </button>
        </Link>

        {/* Mobile menu toggle */}
        <div className="lg:hidden ml-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 ${pathname === link.href ? "font-bold text-[#FF6E08]" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <button className="flex items-center gap-2 px-4 bg-[#55A605] text-white text-sm font-semibold rounded-xl shadow-md hover:bg-green-700 transition-colors duration-300 cursor-pointer mt-2">
                <FaUser size={16} />
                Sign in
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}






