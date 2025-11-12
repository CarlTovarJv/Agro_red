"use client";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  quantity: number;
  measure: string;
  price: number;
  subtotal: number;
};

export default function SummaryOrder() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(savedCart);
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping = subtotal > 0 ? 100 : 0; 
  const total = subtotal + shipping;

  if (items.length === 0)
    return <p className="text-center text-gray-700 mt-4">Your cart is empty.</p>;

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="mb-6 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-500 text-sm">
                {item.quantity} {item.measure}
              </p>
            </div>
            <span className="font-semibold text-gray-800">${item.subtotal}</span>
          </div>
        ))}
      </div>


      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-black mt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}//no tocar
