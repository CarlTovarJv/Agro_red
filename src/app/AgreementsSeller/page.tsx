"use client";

import React, { useState } from "react";

export default function AgreementSellerPage() {
    type Contributor = { name: string; qty: number };
    type Contract = {
        id: number;
        product: string;
        total: number;
        covered: number;
        deadline: string;
        price: string;
        contributors: Contributor[];
        creator: string;
        status?: string;
        notes?: string;
    };

    const initialContracts: Contract[] = [
        { id: 1, product: "Tomatoes", total: 100, covered: 40, deadline: "2025-09-20", price: "$12 / box", contributors: [{ name: "Producer A", qty: 40 }], creator: "Admin", notes: "Organic only" },
        { id: 2, product: "Chilies", total: 50, covered: 20, deadline: "2025-09-18", price: "$8 / box", contributors: [{ name: "Producer B", qty: 20 }], creator: "Admin", notes: "Fresh" }
    ];

    const [view, setView] = useState<"available" | "MyAgreements">("available");
    const [contracts, setContracts] = useState<Contract[]>(initialContracts);
    const [selected, setSelected] = useState<Contract | null>(null);
    const [showJoin, setShowJoin] = useState(false);

    const currentUser = "You";

    const availableContracts = contracts.filter(c => c.creator !== currentUser && c.covered < c.total);
    const myContracts = contracts.filter(c => c.creator === currentUser || c.contributors.some(con => con.name === currentUser));

    const joinContract = (id: number, qty: number) => {
        setContracts(prev =>
            prev.map(c => {
                if (c.id !== id) return c;
                const add = Math.min(c.total - c.covered, qty);
                const newCovered = c.covered + add;
                const newContributors = [...c.contributors, { name: currentUser, qty: add }];
                return { ...c, covered: newCovered, contributors: newContributors, status: newCovered >= c.total ? "Completed" : "In Progress" };
            })
        );
        setShowJoin(false);
        setSelected(null);
    };

    // ----------------- Subcomponents -----------------
    const ContractsList: React.FC<{ contracts: Contract[]; onJoin?: (c: Contract) => void }> = ({ contracts, onJoin }) => (
        <section>
            <h2 className="text-xl font-semibold mb-4">Contracts</h2>
            {contracts.length === 0 ? (
                <div className="p-6 rounded-xl bg-white shadow-lg">No contracts found.</div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {contracts.map(c => (
                        <article key={`contract-${c.id}`} className="p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg">{c.product}</h3>
                                    <p className="text-sm text-gray-600">{c.total} boxes • Price: {c.price}</p>
                                    <p className="text-sm text-gray-500 mt-1">Deadline: {c.deadline}</p>
                                    {c.notes && <p className="text-sm text-gray-500 mt-1">Notes: {c.notes}</p>}
                                </div>
                                <div className="text-right">
                                    <p className="text-sm">{c.covered}/{c.total}</p>
                                    <div className="text-xs mt-2">{c.status || "Open"}</div>
                                </div>
                            </div>
                            {onJoin && (
                                <div className="mt-4 flex justify-end">
                                    <button onClick={() => onJoin(c)} className="px-3 py-2 rounded-md bg-[var(--agro-green)] text-white">
                                        Join Contract
                                    </button>
                                </div>
                            )}
                            <div className="mt-2 w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                <div className="h-3 rounded-full" style={{ width: `${Math.min(100, (c.covered / c.total) * 100)}%`, background: 'linear-gradient(90deg,var(--agro-green),#059669)' }} />
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );

    const JoinForm: React.FC<{ contract: Contract; onConfirm: (id: number, qty: number) => void; onCancel: () => void }> = ({ contract, onConfirm, onCancel }) => {
        const [qty, setQty] = useState(1);
        return (
            <div className="mt-4 p-4 rounded-xl bg-white shadow-lg max-w-md mx-auto space-y-3">
                <h3 className="font-medium text-gray-800">Join Contract</h3>
                <p className="text-sm text-gray-600">{contract.total - contract.covered} boxes available</p>
                <div className="flex gap-2 items-center">
                    <input type="number" min={1} max={contract.total - contract.covered} value={qty} onChange={e => setQty(Number(e.target.value))} className="p-2 border rounded-md w-28" />
                    <button onClick={() => onConfirm(contract.id, qty)} className="px-3 py-2 rounded-md bg-[var(--agro-green)] text-white">Confirm</button>
                    <button onClick={onCancel} className="px-3 py-2 rounded-md border">Cancel</button>
                </div>
            </div>
        );
    };

    // ----------------- Render Main -----------------
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900" style={{ "--agro-green": "#55A605" } as React.CSSProperties}>
            <header className="sticky top-0 bg-gray-50 z-20 py-4 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Agreements</h1>
                    <nav className="flex gap-2">
                        {["available", "MyAgreements"].map(v => (
                            <button
                                key={v}
                                onClick={() => setView(v as any)}
                                className={`px-4 py-2 rounded-md font-medium ${view === v ? "bg-[var(--agro-green)] text-white" : "bg-white shadow hover:shadow-lg"}`}>
                                {v === "available" ? "Available" : "MyAgreements"}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto p-4 space-y-6">
                {view === "available" && <ContractsList contracts={availableContracts} onJoin={(c) => { setSelected(c); setShowJoin(true); }} />}
                {view === "MyAgreements" && <ContractsList contracts={myContracts} />}
                {selected && showJoin && <JoinForm contract={selected} onConfirm={joinContract} onCancel={() => setShowJoin(false)} />}
            </main>
        </div>
    );
}