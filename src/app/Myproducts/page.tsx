"use client";

import { useState } from "react";

type Order = {
  id: string;
  product: string;
  date: string;
  status: "Pending" | "Shipped" | "Delivered";
  price: number;
};

const sampleOrders: Order[] = [
  { id: "001", product: "Tomatoes", date: "2025-09-01", status: "Pending", price: 15 },
  { id: "002", product: "Lettuce", date: "2025-09-03", status: "Shipped", price: 8 },
  { id: "003", product: "Carrots", date: "2025-09-05", status: "Delivered", price: 12 },
  { id: "004", product: "Potatoes", date: "2025-09-06", status: "Pending", price: 20 },
];

const statusColors: Record<Order["status"], string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
};

export default function MyOrders() {
  const [filter, setFilter] = useState<"All" | Order["status"]>("All");

  const filteredOrders =
    filter === "All" ? sampleOrders : sampleOrders.filter((o) => o.status === filter);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-10">My Orders</h1>

        {/* Filtro de estados */}
        <div className="flex gap-3 mb-6">
          {["All", "Pending", "Shipped", "Delivered"].map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                filter === f
                  ? "text-white"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300"
              }`}
              style={filter === f ? { backgroundColor: "#55A605" } : {}}
              onClick={() => setFilter(f as any)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Lista de pedidos */}
        <div className="grid gap-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Order #{order.id}</span>
                <span className="font-semibold text-lg">{order.product}</span>
                <span className="text-gray-400 text-sm">Date: {order.date}</span>
              </div>

              <div className="flex flex-col md:items-end mt-4 md:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
                <span className="mt-2 font-bold text-gray-900">${order.price}</span>
                <button
                  className="mt-2 px-4 py-2 rounded-full text-white font-semibold hover:opacity-90 transition cursor-pointer"
                  style={{ backgroundColor: "#55A605" }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <p className="text-center text-gray-500 mt-6">No orders found.</p>
          )}
        </div>
      </div>
    </main>
  );
}


