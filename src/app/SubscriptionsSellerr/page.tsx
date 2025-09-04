export default function PricingSection() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="text-center w-[660px]">


        <h2 className="text-3xl font-bold text-gray-900">Make your choice</h2>
        <p className="text-gray-600 mt-2">
          Select from two suitable partnership options.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">


          <div className="rounded-2xl shadow-sm p-8 text-left hover:shadow-xl transition flex flex-col justify-between">

            <div>
              <img
                src="./big orange.svg"
                alt="Bean icon"
                className="w-15 h-15 rounded-full flex items-center justify-center mb-6"
              />


              <h3 className="text-xl font-semibold text-gray-900">Co-Agro</h3>
              <p className="text-2xl font-bold mt-2">
                $39.99<span className="text-base font-normal">/mes</span>
              </p>


              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Access to agreements with buyers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Free standard store deliveries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Priority listing in the marketplace
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Access to vendor analytics dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Chat customer support
                </li>
              </ul>
            </div>


            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Join now
            </button>
          </div>


          <div className="rounded-2xl shadow-sm p-8 text-left hover:shadow-xl transition flex flex-col justify-between">

            <div>
              <img
                src="./orangee3.svg"
                alt="Bean icon"
                className="w-15 h-15 rounded-full flex items-center justify-center mb-6"
              />

              <h3 className="text-xl font-semibold text-gray-900">Pro-Agro</h3>
              <p className="text-2xl font-bold mt-2">
                $69.99<span className="text-base font-normal">/mes</span>
              </p>


              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Access to agreements with buyers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Free express deliveries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Top-tier priority in marketplace search results
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Advanced vendor analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-5 inline-block relative">
                    <span className="absolute left-0 top-0 w-2 h-4 border-r-2 border-b-2 border-green-500 rotate-45"></span>
                  </span>
                  Premium customer support with dedicated agent
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

