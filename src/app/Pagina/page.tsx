import React from 'react';

function HomePage() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
  <img
    src="/Frutashome.jpg"
    alt="Fruits Banner"
    className="w-full max-w-[900px] h-[450px] rounded-lg object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-xl md:text-4xl font-bold text-white text-center px-4">
      They faced the same, we provided the solution.
    </h2>
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
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

      {/* Sección de servicios */}
      <div className="py-12 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Everything we offer, in one place</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Shipments.svg" alt="Payments" className="w-40 h-24 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Shipments</h3>
            <p className="text-gray-600 text-md text-center">
              Reliable shipping with quality guaranteed.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Deals.svg" alt="Deals" className="w-40 h-24 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Deals</h3>
            <p className="text-gray-600 text-md text-center">
              Products guarantee and assured quality.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Logistic.svg" alt="Logistic" className="w-40 h-24 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Logistic</h3>
            <p className="text-gray-600 text-md text-center">
              Trouble-free agricultural products managed.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de solución logística */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 gap-8 max-w-6xl mx-auto">
        <img
          src="/Carlos.jpg"
          alt="Logistics"
          className="w-40 h-40 rounded-lg object-cover"
        />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Logistical solutions for everyone</h2>
          <p className="text-gray-700 text-lg">
            Your logistic partner for modern trade. At Agrimarket, we provide reliable and
            scalable solutions so that your products reach your clients without complications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
