"use client";

import { useState } from "react";
import Image from "next/image";

export default function AgreementApplication() {
    const [showPopup, setShowPopup] = useState(false);

    const suggested = [
        { id: 1, name: "Tomatoes", qty: "1000kg", img: "/tomatoes.jpg" },
        { id: 2, name: "Potatoes", qty: "500kg", img: "/potatoes.jpg" },
        { id: 3, name: "Carrots", qty: "800kg", img: "/carrots.jpg" },
    ];

    return (
        <main className="min-h-screen w-screen bg-neutral-50 text-neutral-900 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 mt-10">
                Agreement Application
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                {/* New Agreement Section */}
                <section className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">New Agreement</h2>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/tomatoes.jpg"
                            alt="Tomatoes"
                            width={120}
                            height={120}
                            className="rounded-xl object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-[#55A605]">Tomatoes</h3>
                            <p className="text-sm text-neutral-600">
                                Requested Quantity: <span className="font-semibold">1000 kg</span>
                            </p>
                            <p className="text-sm text-neutral-600">Date: 15/08/2025</p>
                        </div>
                    </div>

                    {/* Contribution */}
                    <div className="mt-6">
                        <h4 className="font-semibold">Your Contribution</h4>
                        <div className="w-full bg-neutral-200 rounded-full h-3 mt-2">
                            <div
                                className="bg-[#55A605] h-3 rounded-full"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                            <span>Contributed: 900 kg</span>
                            <span>Remaining: 100 kg</span>
                        </div>

                        <input
                            type="number"
                            placeholder="Enter your contribution"
                            className="mt-3 w-full border border-neutral-300 rounded-lg p-2 focus:ring-2 focus:ring-[#55A605] focus:outline-none"
                            defaultValue={900}
                        />
                    </div>

                    {/* Conditions */}
                    <div className="mt-6">
                        <h4 className="font-semibold">Conditions</h4>
                        <p className="text-sm text-neutral-600 mt-1">
                            By accepting this agreement, I agree to comply with what has been
                            agreed upon.
                        </p>

                        <div className="flex items-center gap-2 mt-3">
                            <input type="checkbox" className="w-4 h-4 accent-[#55A605]" />
                            <label className="text-sm">
                                I have read the{" "}
                                <span className="text-[#FF6E08] cursor-pointer">
                                    Terms and Conditions
                                </span>
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowPopup(true)}
                        className="mt-6 w-full py-2.5 rounded-xl bg-[#55A605] text-white font-semibold hover:bg-green-800 cursor-pointer transition"
                    >
                        Confirm Agreement
                    </button>
                </section>

                {/* Suggested Agreements */}
                <aside className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Suggested Agreements</h2>
                    <div className="flex flex-col gap-4">
                        {suggested.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl hover:shadow-md cursor-pointer transition"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="rounded-lg object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-neutral-600">
                                        Requested: {item.qty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>

            {/* Popup de confirmación */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
                        <h2 className="text-xl font-semibold text-[#55A605]">
                            Agreement Confirmed
                        </h2>
                        <p className="mt-2 text-sm text-neutral-700">
                            Your agreement has been successfully submitted.
                        </p>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="flex-1 py-2 rounded-lg bg-neutral-200 text-neutral-800 font-medium hover:bg-neutral-300 cursor-pointer"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="flex-1 py-2 rounded-lg bg-[#55A605] text-white font-semibold hover:bg-green-800 cursor-pointer"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}




