"use client";

import { useRouter } from "next/navigation";
import { Sprout, ShoppingBag, ChevronRight } from "lucide-react";
import React from "react";

export default function SelectAccount() {
    const router = useRouter();

    const go = (role: "buyer" | "seller") => {
        // ⚡ Mantiene tu lógica original: guarda rol y redirige al home
        localStorage.setItem("userRole", role);
        router.push("/");
    };

    return (
        <main className="flex min-h-screen w-screen bg-neutral-50 text-neutral-900 flex-col items-center justify-center px-4">
            {/* Header */}
            <section className="flex flex-col items-center py-10 px-6">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Select Account Type
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-neutral-600">
                        Choose how you want to use AgroRed. You can switch roles later in your
                        profile settings.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Buyer */}
                    <button
                        onClick={() => go("buyer")}
                        className="cursor-pointer group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-black/5"
                    >
                        <div className="flex items-center gap-4">
                            <span
                                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                                style={{ background: "var(--agr-green, #55A605)" }}
                            >
                                <ShoppingBag className="h-6 w-6" aria-hidden />
                            </span>
                            <div className="text-left">
                                <h2 className="text-xl font-semibold">Buyer</h2>
                                <p className="text-sm text-neutral-600">
                                    Discover fair prices, browse fresh products, and place orders
                                    with delivery priority.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <ul className="space-y-1 text-sm text-neutral-700">
                                <li className="flex items-center gap-2">
                                    <span
                                        className="inline-block h-1.5 w-1.5 rounded-full"
                                        style={{ background: "var(--agr-green, #16a34a)" }}
                                    />
                                    Track orders & reviews
                                </li>
                            </ul>
                            <ChevronRight className="h-6 w-6 opacity-60 transition group-hover:translate-x-0.5" />
                        </div>
                    </button>

                    {/* Seller */}
                    <button
                        onClick={() => go("seller")}
                        className="cursor-pointer group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-black/5"
                    >
                        <div className="flex items-center gap-4">
                            <span
                                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                                style={{ background: "var(--agr-green, #55A605)" }}
                            >
                                <Sprout className="h-6 w-6" aria-hidden />
                            </span>
                            <div className="text-left">
                                <h2 className="text-xl font-semibold">Seller</h2>
                                <p className="text-sm text-neutral-600">
                                    Upload products, manage inventory, and get rated by buyers for
                                    quality and reliability.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <ul className="space-y-1 text-sm text-neutral-700">
                                <li className="flex items-center gap-2">
                                    <span
                                        className="inline-block h-1.5 w-1.5 rounded-full"
                                        style={{ background: "var(--agr-green, #16a34a)" }}
                                    />
                                    Product care certification ready
                                </li>
                            </ul>
                            <ChevronRight className="h-6 w-6 opacity-60 transition group-hover:translate-x-0.5" />
                        </div>
                    </button>
                </div>

                {/* Helper note */}
                <p className="mt-6 text-xs text-neutral-500">
                    By continuing you agree to our Terms & Privacy Policy.
                </p>
            </section>
        </main>
    );
}
