import React from 'react';

function HomePage() {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <img
          src="/Frutashome.jpg"
          alt="Fruits Banner"
          className="w-[1300px] h-100 block mx-auto rounded-lg"
        />
        <div className="text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold text-white ">
            They faced the same, we provided the solution.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto -translate-y-24">
        <img
          src="/Person1.jpg"
          alt="Person 1"
          className="w-full h-60 rounded-lg object-cover shadow-lg"
        />
        <img
          src="/Person2.webp"
          alt="Person 2"
          className="w-full h-60 rounded-lg object-cover shadow-lg"
        />
        <img
          src="/Person3.webp"
          alt="Person 3"
          className="w-full h-60 rounded-lg object-cover shadow-lg"
        />
      </div>

      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Everything we offer, in one place</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Shipments.svg" alt="Payments" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold text-xl">Shipments</h3>
            <p className="text-md text-gray-600">Reliable shipping with quality guaranteed.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Deals.svg" alt="Deals" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold text-xl">Deals</h3>
            <p className="text-md text-gray-600">Products guarantee and assured quality.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Logistic.svg" alt="Logistic" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold text-xl">Logistic</h3>
            <p className="text-md text-gray-600">Trouble-free agricultural products managed.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 gap-8">
        <img
          src="/Carlos.jpg"
          alt="Logistics"
          className="w-40 h-40 rounded-lg object-cover"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-3">Logistical solutions for everyone</h2>
          <p className="text-gray-700 text-xl">
            Your logistic partner for modern trade. At Agrimarket, we provide reliable and
            scalable solutions so that your products reach your clients without complications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;