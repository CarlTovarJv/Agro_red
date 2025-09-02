"use client";

import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default function PreNavbar() {
  return (
    <header
      className="w-full bg-white border-b border-gray-200 shadow-sm relative"
      style={{ height: 48 }}
    >
      <div className="max-w-8xl mx-auto ml-6 h-full flex items-center justify-between px-4 relative">
        {/* Left: menu + logo */}
        <div className="flex items-center gap-3">
          <Image src="/menu.svg" className="cursor-pointer" alt="Menu" width={28} height={28} />
          <Image
            className="cursor-pointer"
            src="/Agrored-1-removebg-preview.png"
            alt="AgroRed"
            width={95}
            height={37}
          />
        </div>

        {/* Right: carrito + usuario */}
        <div className="flex items-center gap-2 cursor-pointer mr-6">
          <button className="rounded-full p-1">
            <img src="cart-svgrepo-com.svg" alt="" width={30} height={30} />
          </button>
          <Image
            src="/UsuarioCarlos.jpeg"
            className="cursor-pointer rounded-full"
            alt="User"
            width={28}
            height={28}
          />
        </div>
      </div>
    </header>
  );
}
