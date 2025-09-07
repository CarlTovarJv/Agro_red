"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Product = {
  id: number;
  product_name: string;
  description?: string;
  image?: string;
  measures: {
    name: string;
    price: number;
  }[];
};

const products: Product[] = [
  {
    id: 1,
    product_name: "Tomatoes",
    description: "Fresh and juicy tomatoes",
    image: "/tomatoes.jpg",
    measures: [
      { name: "Sack", price: 120 },
      { name: "Box", price: 30 },
      { name: "Quintal", price: 400 },
      { name: "Dozen", price: 5 },
    ],
  },
  {
    id: 2,
    product_name: "Potatoes",
    description: "Organic potatoes from local farms",
    image: "/potatoes.jpg",
    measures: [
      { name: "Sack", price: 100 },
      { name: "Box", price: 25 },
      { name: "Quintal", price: 350 },
      { name: "Dozen", price: 4 },
    ],
  },
  {
    id: 3,
    product_name: "Carrots",
    description: "Fresh carrots, perfect for salads",
    image: "/carrots.jpg",
    measures: [
      { name: "Sack", price: 80 },
      { name: "Box", price: 20 },
      { name: "Quintal", price: 300 },
      { name: "Dozen", price: 3 },
    ],
  },
  {
    id: 4,
    product_name: "Corn",
    description: "Golden corn from El Salvador",
    image: "/corn.webp",
    measures: [
      { name: "Sack", price: 150 },
      { name: "Box", price: 35 },
      { name: "Quintal", price: 500 },
      { name: "Dozen", price: 6 },
    ],
  },
  {
    id: 5,
    product_name: "Onions",
    description: "Crisp onions, ideal for cooking",
    image: "/onion.webp",
    measures: [
      { name: "Sack", price: 110 },
      { name: "Box", price: 28 },
      { name: "Quintal", price: 380 },
      { name: "Dozen", price: 5 },
    ],
  },
  {
    id: 6,
    product_name: "Cucumber",
    description: "Green and fresh cucumber",
    image: "/cucumber.jpeg",
    measures: [
      { name: "Sack", price: 90 },
      { name: "Box", price: 22 },
      { name: "Quintal", price: 320 },
      { name: "Dozen", price: 4 },
    ],
  },
  {
    id: 7,
    product_name: "Cabbage",
    description: "Fresh cabbage heads",
    image: "/cabagge.jpg",
    measures: [
      { name: "Sack", price: 95 },
      { name: "Box", price: 20 },
      { name: "Quintal", price: 340 },
      { name: "Dozen", price: 4 },
    ],
  },
  {
    id: 8,
    product_name: "Bananas",
    description: "Sweet bananas for desserts",
    image: "/banana.jpg",
    measures: [
      { name: "Sack", price: 130 },
      { name: "Box", price: 40 },
      { name: "Quintal", price: 450 },
      { name: "Dozen", price: 6 },
    ],
  },
];

export default function ProductsPageClient() {
  const [search, setSearch] = useState("");
  const [selectedMeasures, setSelectedMeasures] = useState<{ [key: number]: string }>({});
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const filteredProducts = products.filter((p) =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleMeasureChange = (productId: number, measureName: string) => {
    setSelectedMeasures({ ...selectedMeasures, [productId]: measureName });
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity < 1) quantity = 1;
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const getPrice = (product: Product) => {
    const measure = product.measures.find(
      (m) => m.name === (selectedMeasures[product.id] || product.measures[0].name)
    );
    const quantity = quantities[product.id] || 1;
    return (measure?.price ?? 0) * quantity;
  };

  const handleBuy = (product: Product) => {
    const measure = selectedMeasures[product.id] || product.measures[0].name;
    const quantity = quantities[product.id] || 1;
    const price = product.measures.find((m) => m.name === measure)?.price || 0;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex(
      (item: any) => item.id === product.id && item.measure === measure
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
      cart[existingIndex].subtotal = cart[existingIndex].quantity * price;
    } else {
      cart.push({
        id: product.id,
        name: product.product_name,
        image: product.image,
        measure,
        quantity,
        price,
        subtotal: price * quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.product_name} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="relative w-full max-w-md mx-auto mb-6">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-12 pr-4 bg-gray-100 border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55A605] rounded-xl transition-shadow shadow-sm hover:shadow-md"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 overflow-hidden flex flex-col"
          >
            <img
              src={product.image || "/default-product.png"}
              alt={product.product_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.product_name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {product.description || "No description"}
              </p>

              {/* Measure + Quantity */}
              <div className="flex gap-2 mb-3">
                <select
                  value={selectedMeasures[product.id] || product.measures[0].name}
                  onChange={(e) => handleMeasureChange(product.id, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#55A605]"
                >
                  {product.measures.map((measure) => (
                    <option key={measure.name} value={measure.name}>
                      {measure.name}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#55A605]"
                  min={1}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#55A605] font-bold text-lg">
                  ${getPrice(product)}
                </span>
                <button
                  onClick={() => handleBuy(product)}
                  className="bg-[#55A605] text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition-colors"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}
    </div>
  );
}

ProductsPageClient.hideHeader = true;
