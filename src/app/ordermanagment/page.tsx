// src/app/ordermanagment/page.tsx

import Ordertable from './Ordertable';
import Grafic from './Grafic';

export default function OrderManagementPage() {
return (
    <main className="bg-gray-50 min-h-screen p-24">
    <h1 className="text-3xl font-bold mb-8 text-gray-800">Control panel</h1>

    <div className="space-y-8">
        <Ordertable />
        <Grafic />
    </div>
    </main>
);
}