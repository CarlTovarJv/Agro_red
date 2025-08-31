"use client";

import { useState } from "react";

export default function AgreementPage() {
  const [contribution, setContribution] = useState<string>("");
  const [acceptTerms, setAccepTerms] = useState(false);
  const [acceptedAgreement, setacceptedAgreement] = useState(false);

  const requested = 1000;
  const alreadycontributed = 0;

  const contributionNum = Number(contribution) || 0;
  const remaining = requested - alreadycontributed - contributionNum;

  const handleAccept = () => {
    if (acceptTerms && contributionNum > 0) {
      setacceptedAgreement(true);
    }
  };

  return (
    
        

    <div className="relative">
     
     
      <div className="min-h-screen flex justify-center items-start p-6 gap-20">
        
        <div className=" p-8 mt-[24px] mr-[24px]">
          

          <div className="flex justify-between items-center mb-4 mt-6">
            <span className="text-2xl font-semibold text-gray-700">
              New Agreement
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-xl p-4 mb-6">
            <img
              src="./tomatoes.jpg"
              alt=""
              className="w-34 h-30 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Tomatoes
              </h2>
              <p className="text-gray-700">
                Requested Quantity: <b>{requested} kg</b>
              </p>
              <p className="text-gray-700">Date: 15/08/2025</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-xl text-gray-900 mb-2">
              Your Contribution
            </h3>

            <div className="w-full bg-gray-200 h-3 rounded-lg mb-2">
              <div
                className="bg-lime-500 h-3 rounded-lg"
                style={{
                  width: `${Math.min(
                    ((alreadycontributed + contributionNum) / requested) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Contributed: {alreadycontributed + contribution} kg</span>
              <span>Remaining {remaining > 0 ? remaining : 0} kg</span>
            </div>

            <input
              type="number"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your contribution (kg)"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-xl text-gray-900 mb-2">Conditions</h2>
            <p className="text-gray-600 text-sm mb-2">
              By accepting this agreement, I agree to comply with what has been agreed upon.
            </p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAccepTerms(e.target.checked)}
                className="h-4 w-4 text-lime-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                I have read the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          <button
            disabled={!acceptTerms || contributionNum <= 0}
            onClick={handleAccept}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              acceptTerms && contributionNum > 0
                ? "bg-lime-500 hover:bg-lime-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Accept Agreement
          </button>

          {acceptedAgreement && (
            <div className="mt-6 border border-gray-300 rounded-xl p-4 text-center">
              <p className="text-gray-900 font-semibold text-lg">
                Agreement successfully accepted
              </p>
            </div>
          )}
        </div>

  
        <div className="hidden md:block w-100 h-[80vh] shadow-lg p-4 sticky mt-[24px] ml-[24px]">
          <h2 className="text-xl font-semibold mb-4 mt-[44px]">Suggested Agreements</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center p-2 bg-gray-100 rounded-xl hover:bg-gray-200 ">
              <img
                src="./tomatoes.jpg"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Tomatoes</p>
                <p className="text-sm text-gray-600">Requested: 1000kg</p>
              </div>
            </div>

            <div className="flex gap-4 items-center p-2 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer transition">
              <img
                src="./potatoes.jpg"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Potatoes</p>
                <p className="text-sm text-gray-600">Requested: 500kg</p>
              </div>
            </div>

            <div className="flex gap-4 items-center p-2 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer transition">
              <img
                src="./carrots.jpg"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Carrots</p>
                <p className="text-sm text-gray-600">Requested: 800kg</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>

           
    </div>
  );
}
