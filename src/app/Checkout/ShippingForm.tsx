"use client";

import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { FaCreditCard, FaUniversity } from 'react-icons/fa';

interface Props {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

export default function PaymentDetailsForm({ onNextStep, onPreviousStep }: Props): JSX.Element {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    name: '',
    expirationDate: '',
    bank: '',
    accountNumber: '',
    routingNumber: '',
  });

  const handlePaymentMethodChange = (method: 'card' | 'bank'): void => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log("Datos de pago enviados:", formData);
    onNextStep();
  };

  // Clase base para todos los inputs: borde gris oscuro al enfocar, halo gris, tamaño más grande
  const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-opacity-50 px-3 py-2 text-lg";

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-6">Payment Details</h3>
      
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('card')}
          className={`flex-1 p-4 rounded-md border-2 transition-colors ${
            paymentMethod === 'card' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
          <FaCreditCard className="inline-block mr-2 text-green-600" />
          Card
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('bank')}
          className={`flex-1 p-4 rounded-md border-2 transition-colors ${
            paymentMethod === 'bank' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
          <FaUniversity className="inline-block mr-2 text-green-600" />
          Bank account
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Card number</span>
              <input 
                type="text" 
                name="cardNumber"
                className={inputClass}
                value={formData.cardNumber} 
                onChange={handleInputChange}/>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">CVV</span>
                <input 
                  type="text" 
                  name="cvv"
                  className={inputClass}
                  value={formData.cvv} 
                  onChange={handleInputChange}/>
              </label>
              <label className="block">
                <span className="text-gray-700">Expiration date</span>
                <input 
                  type="text" 
                  name="expirationDate"
                  className={inputClass}
                  value={formData.expirationDate} 
                  onChange={handleInputChange}/>
              </label>
            </div>
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input 
                type="text" 
                name="name"
                className={inputClass}
                value={formData.name} 
                onChange={handleInputChange}/>
            </label>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div className="space-y-4">
            <p className="text-gray-600">Please transfer the payment to the bank account details shown below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">Bank</span>
                <input 
                  type="text" 
                  name="bank"
                  className={inputClass}
                  value={formData.bank} 
                  onChange={handleInputChange}/>
              </label>
              <label className="block">
                <span className="text-gray-700">Account number</span>
                <input 
                  type="text" 
                  name="accountNumber"
                  className={inputClass}
                  value={formData.accountNumber} 
                  onChange={handleInputChange}/>
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Routing number</span>
                <input 
                  type="text" 
                  name="routingNumber"
                  className={inputClass}
                  value={formData.routingNumber} 
                  onChange={handleInputChange}/>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onPreviousStep}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Previous
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-[#55A605] text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
