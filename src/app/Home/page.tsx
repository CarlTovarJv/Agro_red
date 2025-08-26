function HomePage() {
  return (
    <div className="w-full">


      <div className="w-full relative">
        <img
          src="/frutashome.jpg"
          alt="Fruits Banner"
          className="w-full h-96 object-cover" 
        />

        <div className="text-center relative -mt-32 z-10"> 
          <h2 className="text-2xl font-bold">
            They faced the same, we provided the solution
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            <img
              src="/Person1.jpg"
              alt="Person 1"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
            <img
              src="/Person2.webp"
              alt="Person 2"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
            <img
              src="/Person3.webp"
              alt="Person 3"
              className="w-60 h-60 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-50 text-center">
        <h2 className="text-xl font-bold mb-6">Everything we offer, in one place</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Shipments.svg" alt="Payments" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold">Shipments</h3>
            <p className="text-sm text-gray-600">Reliable shipping with quality guaranteed.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Deals.svg" alt="Deals" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold">Deals</h3>
            <p className="text-sm text-gray-600">Products guarantee and assured quality.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow flex flex-col items-center hover:scale-105 transition-transform">
            <img src="/Logistic.svg" alt="Logistic" className="w-[200px] h-[100px] mb-3" />
            <h3 className="font-semibold">Logistic</h3>
            <p className="text-sm text-gray-600">Trouble-free agricultural products managed.</p>
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
          <h2 className="text-xl font-bold mb-3">Logistical solutions for everyone</h2>
          <p className="text-gray-700">
            Your logistic partner for modern trade. At Agrimarket, we provide reliable and
            scalable solutions so that your products reach your clients without complications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;