"use client";

import Image from "next/image";
import { FaUser, FaBars } from "react-icons/fa";

export default function NavbarLogin() {
  return (
    <header
      className="w-full bg-white border-b border-gray-200 shadow-sm relative"
      style={{ height: 48 }}
    >
      <div className="max-w-8xl mx-auto ml-6 h-full flex items-center justify-between px-4 relative">
        
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger menu */}
          <button className="text-gray-700 text-xl">
            <FaBars />
          </button>

          {/* Logo */}
          <Image
            className="cursor-pointer"
            src="/Logo_C.svg"
            alt="AgroRed"
            width={95}
            height={37}
          />
        </div>

        {/* Right: Sign in */}
        <div className="flex items-center gap-2 cursor-pointer mr-6">
          <FaUser size={20} className="text-gray-700" />
          <button className="text-sm text-gray-800 hover:underline cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
