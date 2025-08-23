import Image from 'next/image';
import { FaTh, FaUser, FaSearch } from 'react-icons/fa';
export default function Header() {
return (
    <header className="flex items-center justify-between px-6 py-4 text-black shadow-md">
      <div className="flex items-center gap-4"></div>
      <FaTh size={24} className="text-gray-600" />
      {/* Logo */}
    <Image src="/Logo_Color.svg" alt="Logo de AgroRed" width={150} height={40} />

      {/* Search Bar */}
    <div className="flex-1 mx-6 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 rounded-full bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* User Options */}
    <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaUser size={24} className="text-gray-600" />
          <button className="hover:underline">Sign in</button>
        </div>
      </div>
    </header>
);
}
