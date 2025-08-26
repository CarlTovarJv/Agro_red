"use client";

import React, { useState } from 'react';

import CheckoutProgress from './CheckoutProgress';
import ShippingForm from './ShippingForm'; 
import SummaryOrder from './SummaryOrder'; 
import PaymentDetailsForm from './PaymentDetailsForm'; 
import ReviewOrder from './ReviewOrder'; 
export default function CheckoutPage():JSX. Element {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleNextStep = (): void => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePreviousStep = (): void => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const renderForm = (): JSX.Element => {
        switch (currentStep) {
            case 1:
                return <ShippingForm onNextStep={handleNextStep} />;
            case 2:
                return <PaymentDetailsForm onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />;
            case 3:
                return <ReviewOrder onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />;
            default:
                return <ShippingForm onNextStep={handleNextStep} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <CheckoutProgress currentStep={currentStep} />
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
                    {renderForm()}
                    <SummaryOrder />
                </div>
            </div>
        </div>
    );
}