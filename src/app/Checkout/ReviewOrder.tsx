"use client";

import React, { useState } from 'react';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';

interface Props {
onNextStep: () => void;
onPreviousStep: () => void;
}

interface ReviewOrderState {
isConfirming: boolean;
confirmationMessageVisible: boolean;
}

export default function ReviewOrder({ onNextStep, onPreviousStep }: Props): JSX.Element {
    const [state, setState] = useState<ReviewOrderState>({
    isConfirming: false,
    confirmationMessageVisible: false,
});

const handleConfirmOrder = () => {
    setState({ ...state, isConfirming: true });
    setTimeout(() => {
    setState({ isConfirming: false, confirmationMessageVisible: true });
    }, 1500);
};
    
    
    const shippingDetails = {
        fullName: "Jazmín López",
        address: "1 Street 23, pol.91, La Libertdad, SV "
};
    const paymentDetails = {
        type: "Visa",
        cardHolder: "Señora López",
        cardNumber: "xxxx-xxxx-xxxx-1234",
        expirationDate: "12/2025"
};
    const orderDetails = {
        products: "3 selected",
        total: "$110.00",
        shipping: "$5.00"
};

return (

    <div className="w-full p-8 bg-white rounded-lg shadow-md border border-gray-200 relative"> 

    {state.confirmationMessageVisible && (
        <div className="absolute inset-0 bg-gray-50 bg-opacity-80 flex flex-col justify-center items-center rounded-lg z-10 transition-opacity duration-300"> 
        <div className="relative transform -translate-y-4">
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-green-600"></div>
            
        <div className="bg-white text-gray-800 p-15 rounded-lg shadow-xl border border-gray-300 flex items-center space-x-6 min-w-[550px]">
            <FaCheckCircle className="text-green-600" size={28} />
        <div>
            <p className="font-semibold flex items-center text-2xl">Order Confirmed!</p>
            <p className="text-base text-gray-600 mt-1 flex items-center">Thank you for your purchase.</p>
        </div>
        </div>
    </div>
    </div>
)}

    <h3 className="text-xl font-bold mb-6">Review Your Order</h3>
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

        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">Payment Details</h4>
                <button className="text-gray-500 hover:text-green-500 transition-colors">
                    <FaEdit />
                </button>
            </div>
                <p className="text-gray-700 font-semibold">Card type: {paymentDetails.type}</p>
                <p className="text-gray-600">Cardholder: {paymentDetails.cardHolder}</p>
                <p className="text-gray-600">Card number: {paymentDetails.cardNumber}</p>
                <p className="text-gray-600">Experation date: {paymentDetails.expirationDate}</p>
        </div>
            
        <div className="mb-8">
            <h4 className="font-bold text-lg mb-4">Order Details</h4>
            <div className="flex justify-between py-1 text-gray-700">
                <span>Products</span>
                <span>{orderDetails.products}</span>
                <span>{orderDetails.total}</span>
            </div>
        <div className="flex justify-between py-1 text-gray-700">
                <span>Shipping</span>
                <span>{orderDetails.shipping}</span>
            </div>
            <div className="flex justify-between py-2 mt-2 font-bold text-lg border-t border-gray-300">
                <span>Total</span>
                <span>{orderDetails.total}</span>
            </div>
        </div>

            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={onPreviousStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                    Previous
                </button>
                <button
    type="button"
    onClick={handleConfirmOrder}
    disabled={state.isConfirming}
    className={`px-6 py-3 bg-[#55A605] text-white font-bold rounded-lg hover:bg-green-700 transition-colors ${state.isConfirming ? 'opacity-50 cursor-not-allowed' : ''}`}>
    {state.isConfirming ? 'Confirming...' : 'Place Order'}
    </button>
        </div>
    </div>
);
}