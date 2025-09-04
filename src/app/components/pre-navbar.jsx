"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

// Rutas donde el navbar se oculta
const HIDDEN_ROUTES = ["/login", "/register"];

export default function PreNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Reviews", href: "/review" },
    { name: "AboutUs", href: "/Aboutus" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative h-16">
      <div className="max-w-8xl mx-auto h-full flex items-center justify-between px-6">

        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger menu */}
          <button
            className="text-gray-700 text-xl block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>


          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo_C.svg"
              alt="AgroRed"
              width={100}
              height={42}
              priority
            />
          </Link>
        </div>

        {/* Centered navigation */}
        <nav className="flex-1 hidden lg:flex justify-center gap-8">
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
              {/* Subrayado animado */}
              <span
                className={`
                  absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF6E08] 
                  scale-x-0 origin-left transition-transform duration-300
                  ${pathname === link.href ? "scale-x-100" : ""}
                  group-hover:scale-x-100
                `}
              />
            </Link>
          ))}
        </nav>

        {/* Right: search + cart + user */}
        <div className="flex items-center gap-4">
          {/* Search input with icon */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 border border-gray-300 rounded-xl mr-4 focus:outline-none focus:border-gray-400 transition-colors duration-200"
            />
          </div>

          {/* Cart button */}
          <Link href="/cart"><button className="relative rounded-full p-2 bg-[#55A605] hover:bg-[#4E9505] transition-colors duration-300 shadow-md flex items-center justify-center">
            <Image
              src="/shopping-cart.svg"
              alt="Cart"
              width={24}
              height={24}
              priority
            />
          </button></Link>

          {/* User profile */}
          <Link href="/Perfil" className="rounded-full">
            <Image
              src="/Carlos.jpg"
              alt="User"
              width={28}
              height={28}
              className="cursor-pointer rounded-full"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
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
          </nav>
        </div>
      )}
    </header>
  );
}










