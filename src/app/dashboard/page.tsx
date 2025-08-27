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
  { name: "Jan", sales: 25},
  { name: "Feb", sales: 35 },
  { name: "Mar", sales: 55 },
  { name: "Apr", sales: 40 },
  { name: "May", sales: 90 },
  { name: "Jun", sales: 120 },
];

export default function Dashboard() {
  return (
    <div className="p-24 grid gap-6 min-h-screen bg-white">
      <h4 className="text-4xl font-bold">Dashboard</h4>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white shadow p-6 space-y-2">
          <p className="text-black text-sm">Active Sales</p>
          <h2 className="text-3xl font-bold">25</h2>
        </div>

        <div className="rounded-xl border bg-white shadow p-6 space-y-2">
          <p className="text-black text-sm">Pending Orders</p>
          <h2 className="text-3xl font-bold">10</h2>
        </div>

        <div className="rounded-xl border bg-white shadow p-6 space-y-2">
          <p className="text-black text-sm">Revenue</p>
          <h2 className="text-3xl font-bold">$15,000</h2>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-xl border bg-white shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
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


        <div className="rounded-xl border bg-white shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <table className="w-full">
            <thead>
              <tr className="text-black text-left">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td>#1027</td>
                <td>$156</td>
                <td>17/09/25</td>
                <td className="text-black font-medium">Pending</td>
              </tr>
              <tr></tr>
              <tr>
                <td>#1027</td>
                <td>$150</td>
                <td>11/09/25</td>
                <td className="text-black font-medium">Pending</td>
              </tr>
              <tr>
                <td>#1027</td>
                <td>$84</td>
                <td>23/08/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
              <tr>
                <td>#1026</td>
                <td>$140</td>
                <td>20/08/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
              <tr>
                <td>#1025</td>
                <td>$180</td>
                <td>12/08/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
              <tr>
                <td>#1024</td>
                <td>$94</td>
                <td>30/07/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
              <tr>
                <td>#1023</td>
                <td>$120</td>
                <td>14/07/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
              <tr>
                <td>#1022</td>
                <td>$148</td>
                <td>06/07/25</td>
                <td className="text-black font-medium">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
