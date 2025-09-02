"use client";

import { useState } from "react";
import ProductList from "@/app/components/Productlist";
import PreNavbar from "@/app/components/pre-navbar";
import { FaSearch } from "react-icons/fa";

export default function ProductsPageClient({ products }: { products: any[] }) {
  const [search, setSearch] = useState("");


  const filteredProducts = products.filter((p) =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="relative z-50 mt-4 flex justify-center">
    <div className="relative w-[400px]">
    
    <FaSearch className="absolute left-4 top-[-42px] -translate-y-1/2 text-gray-400 z-60" />

    <input
      type="text"
      placeholder="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full h-9 pl-10 pr-3 bg-gray-100 border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl relative z-20  top-[-59px]"
    />
        </div>
      </div>

      <ProductList products={filteredProducts} />
    </>
  );
}

ProductsPageClient.hideHeader = true;
