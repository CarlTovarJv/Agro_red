"use client";

interface Product {
  product_id: number;
  product_name: string;
  description?: string;
  price: number;
  image_url?: string;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="p-6">
      {products.length === 0 ? (
        <p className="text-gray-500">No se encontraron productos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="border border-gray-300 rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image_url || "/placeholder.png"}
                alt={product.product_name}
                className="w-full h-80 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold">{product.product_name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold mt-2">
                {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
