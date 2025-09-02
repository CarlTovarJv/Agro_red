"use client";

import Image from "next/image";
import { FaUser, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header
      className="w-full bg-white border-b border-gray-200 shadow-sm relative"
      style={{ height: 48 }}
    >
      <div className="max-w-8xl mx-auto ml-6 h-full flex items-center justify-between px-4 relative">
        <div className="flex items-center gap-3">
          <Image src="/menu.svg" className="cursor-pointer" alt="Menu" width={28} height={28} />
          <Image className="cursor-pointer"
            src="/Agrored-1-removebg-preview.png"
            alt="AgroRed"
            width={95}
            height={37}
          />
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ width: 400}}
        >
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              aria-label="Search"
              placeholder="Search"
              className="w-full h-9 pl-10 pr-3 bg-gray-100 border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl"
            />
          </div>
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