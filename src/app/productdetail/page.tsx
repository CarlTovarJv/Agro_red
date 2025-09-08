"use client";

import Image from "next/image";

interface ProductDetailProps {
  onClose: () => void; // función para cerrar el popup
}

export default function Productdetail({ onClose }: ProductDetailProps) {
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
            src="/tomatoes.jpg"
            alt="Large paste tomatoes"
            fill
            className="object-cover"
          />
        </div>

        {/* Detalles */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Tomatoes</h2>
          <p className="text-xl font-semibold text-gray-800 mb-3">$120</p>

          {/* Descripción */}
          <p className="text-gray-600 text-sm mb-4">
            These fresh tomatoes are harvested at their peak ripeness, ensuring
            an optimal, unique, and delicious flavor.
          </p>

          {/* Reviews */}
          <h3 className="font-semibold mb-1">Customer Reviews</h3>
          <p className="text-gray-500 text-sm mb-4">No reviews yet</p>
        </div>
      </div>
    </main>
  );
}



