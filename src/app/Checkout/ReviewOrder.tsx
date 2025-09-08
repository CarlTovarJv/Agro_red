"use client";

import React, { useState, useEffect } from "react";
import { FaEdit, FaCheckCircle } from "react-icons/fa";

interface Props {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

interface ReviewOrderState {
  isConfirming: boolean;
  confirmationMessageVisible: boolean;
}

type CartItem = {
  id: number;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  measure: string;
  subtotal: number;
};

export default function ReviewOrder({
  onNextStep,
  onPreviousStep,
}: Props): JSX.Element {
  const [state, setState] = useState<ReviewOrderState>({
    isConfirming: false,
    confirmationMessageVisible: false,
  });

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  const handleConfirmOrder = () => {
    setState({ ...state, isConfirming: true });
    setTimeout(() => {
      setState({ isConfirming: false, confirmationMessageVisible: true });
    }, 1500);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping = 100; 
  const grandTotal = totalPrice + shipping;

  const shippingDetails = {
    fullName: "Jazmín López",
    address: "1 Street 23, pol.91, La Libertdad, SV ",
  };
  const paymentDetails = {
    type: "Visa",
    cardHolder: "Señora López",
    cardNumber: "xxxx-xxxx-xxxx-1234",
    expirationDate: "12/2025",
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-md border border-gray-200 relative">
      {/* Mensaje de confirmación */}
      {state.confirmationMessageVisible && (
        <div className="absolute inset-0 bg-gray-50 bg-opacity-80 flex flex-col justify-center items-center rounded-lg z-10 transition-opacity duration-300">
          <div className="relative transform -translate-y-4">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-green-600"></div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl border border-gray-300 flex items-center space-x-6 min-w-[450px]">
              <FaCheckCircle className="text-green-600" size={28} />
              <div>
                <p className="font-semibold text-2xl">Order Confirmed!</p>
                <p className="text-base text-gray-600 mt-1">
                  Thank you for your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-6">Review Your Order</h3>

      {/* Shipping */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-lg">Shipping Details</h4>
          <button className="text-gray-500 hover:text-green-500 transition-colors">
            <FaEdit />
          </button>
        </div>
        <p className="text-gray-700 font-semibold">{shippingDetails.fullName}</p>
        <p className="text-gray-600">{shippingDetails.address}</p>
      </div>

      {/* Payment */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-lg">Payment Details</h4>
          <button className="text-gray-500 hover:text-green-500 transition-colors">
            <FaEdit />
          </button>
        </div>
        <p className="text-gray-700 font-semibold">
          Card type: {paymentDetails.type}
        </p>
        <p className="text-gray-600">Cardholder: {paymentDetails.cardHolder}</p>
        <p className="text-gray-600">Card number: {paymentDetails.cardNumber}</p>
        <p className="text-gray-600">
          Expiration date: {paymentDetails.expirationDate}
        </p>
      </div>

      {/* Order */}
      <div className="mb-8">
        <h4 className="font-bold text-lg mb-4">Order Details</h4>

        <div className="mb-6 space-y-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.quantity} {item.measure}
                </p>
              </div>
              <span className="font-semibold">${item.subtotal}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between py-1 text-gray-700">
          <span>Total Products</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between py-1 text-gray-700">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-1 text-gray-700">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 mt-2 font-bold text-lg border-t border-gray-300">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Botones */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPreviousStep}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleConfirmOrder}
          disabled={state.isConfirming}
          className={`px-6 py-3 bg-[#55A605] text-white font-bold rounded-lg hover:bg-green-800 transition-colors ${
            state.isConfirming ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {state.isConfirming ? "Confirming..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
