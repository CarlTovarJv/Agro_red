"use client";
import Image from "next/image";

interface ProductDetailProps {
  onClose: () => void; // función para cerrar el popup
}

export default function Productdetail({ onClose }: ProductDetailProps) {
  const product = {
    id: 1,
    name: "Tomatoes",
    description:
      "These fresh tomatoes are harvested at their peak ripeness, ensuring an optimal, unique, and delicious flavor.",
    price: 120,
    image: "/tomatoes.jpg",
    measures: [
      { name: "Sack", price: 120 },
      { name: "Box", price: 30 },
      { name: "Quintal", price: 110 },
      { name: "Dozen", price: 5 },
    ],
  };

  return (
    <main className="flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden relative">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-gray-500 hover:text-gray-800 font-bold"
        >
          ← Back
        </button>

        {/* Imagen */}
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Detalles */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-3">
            ${product.price}
          </p>

          {/* Descripción */}
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>

          {/* Medidas */}
          <h3 className="font-semibold mb-2">Available Options</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.measures.map((measure) => (
              <div
                key={measure.name}
                className="border rounded-lg px-3 py-1 bg-gray-50 hover:bg-gray-100 cursor-pointer text-[#55A605] font-bold text-lg"
              >
                {measure.name}: ${measure.price}
              </div>
            ))}
          </div>

          {/* Reviews */}
          <h3 className="font-semibold mb-1">Customer Reviews</h3>
          <p className="text-gray-500 text-sm mb-4">No reviews yet</p>
        </div>
      </div>
    </main>
  );
}
