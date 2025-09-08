"use client";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  measure: string;
  subtotal: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  // Actualizar localStorage cuando cambie el carrito
  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        const quantity = newQuantity < 1 ? 1 : newQuantity;
        return { ...item, quantity, subtotal: item.price * quantity };
      }
      return item;
    });
    updateCart(newCart);
  };

  const handleMeasureChange = (id: number, newMeasure: string, price: number) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, measure: newMeasure, price, subtotal: price * item.quantity };
      }
      return item;
    });
    updateCart(newCart);
  };

  const handleRemove = (id: number) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  if (cartItems.length === 0)
    return <p className="text-center mt-10 text-gray-700 text-lg">Your cart is empty.</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">My Cart</h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-7xl mx-auto">

        <div className="flex flex-col space-y-6 flex-1">
          {cartItems.map((product, index) => (
            <div
             key={`${product.id}-${index}`} // ✅ ahora es único aunque el id se repita
             className="rounded-2xl bg-white shadow-md hover:shadow-lg transition w-full h-[190px] p-5 flex items-center gap-6"
               >
              <img
                src={product.image || "/default-product.png"}
                alt={product.name}
                className="w-32 h-28 object-cover ml-5 rounded-lg border border-gray-200"
              />

              <div className="flex flex-col flex-1 justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

       
                <div className="flex items-center gap-4 mt-2">
       
                  <div className="flex items-center gap-4 border border-gray-300 px-3 py-1 rounded-lg w-fit shadow-sm">
                    <button
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity + 1)
                      }
                      className="text-xl font-bold text-gray-700 hover:text-orange-600"
                    >
                      +
                    </button>
                    <span className="text-base font-medium">{product.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity - 1)
                      }
                      className="text-xl font-bold text-gray-700 hover:text-orange-500"
                    >
                      -
                    </button>
                  </div>

            
                  <div className="relative w-[130px]">
                    <select
                      value={product.measure}
                      onChange={(e) =>
                        handleMeasureChange(
                          product.id,
                          e.target.value,
                          product.price
                        )
                      }
                      className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg shadow-sm "
                    >
                      <option>Sack</option>
                      <option>Box</option>
                      <option>Quintal</option>
                      <option>Dozen</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                      <img src="./chevron-down.svg" alt="" className="w-4 h-4" />
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(product.id)}
                    className="flex items-center justify-center bg-[#FF6E08] transition text-white px-4 py-2 rounded-lg shadow-md"
                  >
                    <img src="./trash.svg" alt="remove item" className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <span className="text-sm text-gray-500">Price</span>
                    <p className="text-lg font-bold text-gray-800">${product.price}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Subtotal</span>
                    <p className="text-lg font-bold text-gray-800">${product.subtotal}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

          <div className="mb-6 space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {item.quantity} {item.measure}
                  </p>
                </div>
                <span className="font-semibold text-gray-800">${item.subtotal}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between font-bold text-lg text-black mt-4 border-t pt-3">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
            <a href="Checkout">
              <button className="cursor-pointer w-full mt-8 bg-[#FF6E08] hover:bg-orange-500 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
               Proceed to Payment
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}
