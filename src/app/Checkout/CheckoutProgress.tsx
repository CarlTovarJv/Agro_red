"use client";

import React from 'react'; 
import { FaCheck } from 'react-icons/fa';
interface Props {
    currentStep: number;
}

export default function CheckoutProgress({ currentStep }: Props): JSX.Element {
    const steps = [
        { name: 'Shipping Address', step: 1 },
        { name: 'Payment Details', step: 2 },
        { name: 'Review Your Order', step: 3 },
    ];

    return (
        <div className="w max-2xl p-6 bg-white rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
            <div className="flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
                <div className={`absolute top-1/2 left-0 h-1 bg-[#55A605] -z-10 transition-all duration-500 ${currentStep === 1 ? 'w-[10%]' : currentStep === 2 ? 'w-[50%]' : 'w-full'}`}></div>

                {steps.map((item) => (
                    <div key={item.step} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                        ${currentStep > item.step ? 'bg-[#55A605]' : 'bg-gray-200 border-2 border-gray-300'}`}>
                            {currentStep > item.step ? <FaCheck size={16} /> : (
                                <div className={`${currentStep === item.step ? 'w-4 h-4 rounded-full bg-[#55A605]' : 'w-4 h-4 rounded-full bg-gray-400'}`}></div>
                            )}
                        </div>
                        <span className={`mt-2 text-sm font-semibold whitespace-nowrap
                        ${currentStep >= item.step ? 'text-green-600' : 'text-gray-500'}`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}