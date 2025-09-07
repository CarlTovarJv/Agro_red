export default function PricingSection() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900">Choose Your Plan</h2>
        <p className="text-gray-600 mt-2">
          Select from two suitable partnership options designed for sellers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Plan 1 */}
          <div className="border border-gray-200 rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition flex flex-col justify-between h-full">
            <div>
              <img
                src="./beann.svg"
                alt="Bean icon"
                className="w-14 h-14 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">Beanmium</h3>
              <p className="text-2xl font-bold mt-2">
                $39.99<span className="text-base font-normal">/month</span>
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  10 free truck deliveries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  3 vendor agreements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  High delivery priority
                </li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Join now
            </button>
          </div>

          {/* Plan 2 */}
          <div className="border border-gray-200 rounded-2xl shadow-sm p-8 text-left hover:shadow-md transition flex flex-col justify-between h-full">
            <div>
              <img
                src="./orangee3.svg"
                alt="Orange icon"
                className="w-14 h-14 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">Great-Orange</h3>
              <p className="text-2xl font-bold mt-2">
                $79.99<span className="text-base font-normal">/month</span>
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Over 20 free deliveries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Up to 10 vendor agreements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Maximum delivery priority
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  New product alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Purchase refunds
                </li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Join now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
