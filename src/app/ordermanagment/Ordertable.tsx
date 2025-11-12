import React from 'react';

interface Order {
id: string;
client: string;
date: string;
status: 'Sent' | 'Delivered' | 'In process';
total: number;
}

const orders: Order[] = [
{ id: '#12345', client: 'Hortifrutales del Sur', date: '08/15/2025', status: 'Sent', total: 300 },
{ id: '#12346', client: 'Campo Verde', date: '08/17/2025', status: 'Delivered', total: 180 },
{ id: '#12347', client: 'Agroexportaciones Andinas', date: '08/18/2025', status: 'In process', total: 320 },
{ id: '#12348', client: 'Frutas Tropicales', date: '08/21/2025', status: 'Sent', total: 210 },
{ id: '#12349', client: 'Cultivos del Norte', date: '08/23/2025', status: 'Delivered', total: 500 },
];

const Ordertable: React.FC = () => {
const getStatusClasses = (status: Order['status']) => {
    switch (status) {
    case 'Sent':
        return 'bg-gray-200 text-[#55A605]';
    case 'Delivered':
        return 'bg-gray-200 text-[#55A605]';
    case 'In process':
        return 'bg-gray-200 text-[#55A605]';
    default:
        return 'bg-gray-200 text-[#55A605]';
    }
};

const formatTotal = (total: number) => {
    return `$${total.toLocaleString()}`;
};

return (
    <div className="bg-white p-24 rounded-lg shadow-md">
    <   h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Order Summary</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full">
            <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-left">
                    <th className="py-2 px-4 font-normal">order ID</th>
                    <th className="py-2 px-4 font-normal">Coustomer</th>
                    <th className="py-2 px-4 font-normal">Date</th>
                    <th className="py-2 px-4 font-normal">State</th>
                    <th className="py-2 px-4 font-normal text-right">Total</th>
            </tr>
            </thead>
        <tbody>
            {orders.map((order, index) => (
            <tr key={order.id} className="border-b border-gray-100 last:border-b-0">
                <td className="py-4 px-4 text-gray-800 font-semibold">{order.id}</td>
                <td className="py-4 px-4 text-gray-600">{order.client}</td>
                <td className="py-4 px-4 text-gray-500">{order.date}</td>
                <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.status)}`}>
                    {order.status}
                </span>
                </td>
                <td className="py-4 px-4 text-right text-gray-800 font-medium">
                {formatTotal(order.total)}
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};

export default Ordertable;