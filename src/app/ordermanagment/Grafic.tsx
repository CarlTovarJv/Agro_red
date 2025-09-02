"use client";

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from "recharts";

const data = [
    { name: "August 15th", sales: 300},
    { name: "August 17th", sales: 180 },
    { name: "August 18th", sales: 320 },
    { name: "August 21st", sales: 210 },
    { name: "August 23rd", sales: 500},
]

const Grafic = () => {
return (
<div className="rounded-xl border bg-white shadow p-24">
        <h3 className="text-lg font-semibold mb-4">Monthly sales</h3>
        <h4 className="text-lg font-semibold mb-4">$1,500</h4>
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                type="monotone"
                dataKey="sales"
                stroke="#55A605"      
                strokeWidth={3}
                dot={true}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
);
};

export default Grafic;