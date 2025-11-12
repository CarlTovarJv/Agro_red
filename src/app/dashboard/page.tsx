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

const salesData = [
  { name: "Jan", sales: 25 },
  { name: "Feb", sales: 35 },
  { name: "Mar", sales: 55 },
  { name: "Apr", sales: 40 },
  { name: "May", sales: 90 },
  { name: "Jun", sales: 120 },
];

const stats = [
  { label: "Active Sales", value: 25 },
  { label: "Pending Orders", value: 10 },
  { label: "Revenue", value: "$15,000" },
];

const orders = [
  { id: "#1027", amount: "$156", date: "17/09/25", status: "Pending" },
  { id: "#1027", amount: "$150", date: "11/09/25", status: "Pending" },
  { id: "#1027", amount: "$84", date: "23/08/25", status: "Completed" },
  { id: "#1026", amount: "$140", date: "20/08/25", status: "Completed" },
  { id: "#1025", amount: "$180", date: "12/08/25", status: "Completed" },
  { id: "#1024", amount: "$94", date: "30/07/25", status: "Completed" },
  { id: "#1023", amount: "$120", date: "14/07/25", status: "Completed" },
  { id: "#1022", amount: "$148", date: "06/07/25", status: "Completed" },
];

// ✅ Componente reutilizable para tarjetas
function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-white shadow-md p-6 space-y-2">
      <p className="text-black text-sm">{label}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}

// ✅ Componente tabla de órdenes
function OrdersTable() {
  return (
    <div className="rounded-xl bg-white shadow-md p-6">
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
          {orders.map((order) => (
            <tr key={order.id + order.date}>
              <td>{order.id}</td>
              <td>{order.amount}</td>
              <td>{order.date}</td>
              <td className="text-black font-medium">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-24 grid gap-6 min-h-screen bg-white">
      <h4 className="text-4xl font-bold">Dashboard</h4>

      {/* Tarjetas estadísticas */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Gráfico y órdenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <div className="rounded-xl bg-white shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#55A605"
                  strokeWidth={3}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders */}
        <OrdersTable />
      </div>
    </div>
  );
}

