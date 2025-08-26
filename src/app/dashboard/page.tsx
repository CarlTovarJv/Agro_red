export default function Dashboard() {
  return (
    <div className="p-24 grid gap-6 min-h-screen white">

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
          <h2 className="text-3xl font-bold">$18,350</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
      <div className="rounded-xl border bg-white shadow grid p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <table className="w-full">
          <thead>
            <tr className="text-black text-left">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td>#1024</td>
              <td>$450</td>
              <td className="text-black font-medium">Completed</td>
            </tr>
            <tr>
              <td>#1023</td>
              <td>$320</td>
              <td className="text-black font-medium">Pending</td>
            </tr>
            <tr>
              <td>#1022</td>
              <td>$580</td>
              <td className="text-black font-medium">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
