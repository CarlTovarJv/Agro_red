"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs';

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
    { name: "MyOrders", href: "/Myproducts" },
    { name: "ContactUs", href: "/Contactus" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative h-16">
      <div className="max-w-8xl mx-auto h-full flex items-center justify-between px-6">

        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger menu */}
          <button
            className="text-gray-700 text-xl block cursor-pointer lg:hidden"
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
              className="cursor-pointer"
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

        {/* Right: Premium + Cart + User */}
        <div className="flex items-center gap-4">
          {/* Get Premium */}
          <Link href="/Suscriptionsbuyers">
            <button className="px-4 py-2 bg-[#55A605] text-white text-sm font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 cursor-pointer">
              Get Premium
            </button>
          </Link>

          {/* Cart button */}
          <Link href="/cart">
            <button className="relative rounded-full p-2 bg-[#55A605] hover:bg-[#4E9505] transition-colors duration-300 shadow-md flex items-center justify-center cursor-pointer">
              <Image
                src="/shopping-cart.svg"
                alt="Cart"
                width={24}
                height={24}
                priority
              />
            </button>
          </Link>

          {/* User profile */}
          <div className="w-12 h-12 lg:w-12 lg:h-12 transform scale-125 lg:scale-125 ml-2 mt-6 ">
            <UserButton afterSignOutUrl="/" />
          </div>
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













