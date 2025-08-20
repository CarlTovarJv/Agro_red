export default function PricingSection() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="text-center max-w-2xl">
        
        <h2 className="text-3xl font-bold text-gray-900">Make your choice</h2>
        <p className="text-gray-600 mt-2">
          Select from two suitable partnership options.
        </p>

        
        <div className="border rounded-2xl shadow-sm p-8 text-left mt-12 hover:shadow-xl transition">
          
          <div >
           
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Co-Agro</h3>
          <p className="text-2xl font-bold mt-2">
            $29.99/mes
          </p>

          
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
             <h1>Access to agreements with buyers</h1> 
            </li>
            <li className="flex items-center gap-2">
             <h1>Free standard store deliveries</h1> 
            </li>
            <li className="flex items-center gap-2">
              <h1>Priority listing in the marketplace</h1> 
            </li>
            <li className="flex items-center gap-2">
              <h1>Access to vendor analytics dashboard</h1> 
            </li>
            <li className="flex items-center gap-2">
              <h1>Chat customer support</h1> 
            </li>
          </ul>

          
          <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
            Join now
          </button>
        </div>
      </div>
    </main>
  );
}
