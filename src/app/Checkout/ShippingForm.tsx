"use client";

import { useState } from 'react';
import type { ChangeEvent } from 'react';

interface Props {
onNextStep: () => void;
}

export default function ShippingDetailsForm({ onNextStep }: Props) {
    const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
});

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos del formulario enviados:", formData);

        onNextStep(); 
    };

return (
    <form onSubmit={handleSubmit} className="w-full p-8 bg-white rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-bold mb-6">Shipping Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

        <label className="block">
        <span className="text-gray-700">Full Name</span>
        <input 
            type="text" 
            name="fullName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.fullName} 
            onChange={handleInputChange} 
        />
        </label>

        <label className="block">
        <span className="text-gray-700">Last Name</span>
        <input 
            type="text" 
            name="lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" 
            value={formData.lastName}
            onChange={handleInputChange}
        />
        </label>
        
        <label className="block md:col-span-2">
        <span className="text-gray-700">Address Line 1</span>
        <input 
            type="text" 
            name="addressLine1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.addressLine1}
            onChange={handleInputChange}
        />
        </label>

        <label className="block md:col-span-2">
        <span className="text-gray-700">Address Line 2 (Optional)</span>
        <input 
            type="text" 
            name="addressLine2"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.addressLine2}
            onChange={handleInputChange}
        />
        </label>
        
        <label className="block">
        <span className="text-gray-700">City</span>
        <input 
            type="text" 
            name="city"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.city}
            onChange={handleInputChange}
        />
        </label>
        
        <label className="block">
        <span className="text-gray-700">State</span>
        <input 
            type="text" 
            name="state"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.state}
            onChange={handleInputChange}
        />
        </label>
        
        <label className="block">
        <span className="text-gray-700">Zip Code</span>
        <input 
            type="text" 
            name="zipCode"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.zipCode}
            onChange={handleInputChange}
        />
        </label>
        
        <label className="block">
        <span className="text-gray-700">Country</span>
        <input 
            type="text" 
            name="country"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            value={formData.country}
            onChange={handleInputChange}
        />
        </label>
    </div>

    <div className="flex justify-end mt-8">
        <button
        type="submit"
        className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
        >
        Next Step
        </button>
    </div>
    </form>
);
}