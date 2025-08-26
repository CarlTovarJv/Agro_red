
import Image from "next/image";
 
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden">
        {}
        <div className="relative w-full h-40">
          <Image
            src="/tomatoes.jpg" 
            alt="Large paste tomatoes"
            fill
            className="object-cover"
          />
          {}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1">
            
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1">
            
          </button>
        </div>
 
        {}
        <div className="p-3">
          <h2 className="text-2xl font-bold mb-2">Large paste tomatoes</h2>
          <p className="text-2x font-semibold text-gray-800 mb-1">$45.00</p>
 
          {}
          <select className="border border-gray-300 rounded-md px-2 py-1 mb-4">
            <option>Box</option>
            <option>Kilo</option>
          </select>
 
          {}
          <p className="text-gray-600 text-sm mb-4">
            These fresh tomatoes are harvested at their peak ripeness,
             ensuring an optimal, unique, and delicious flavor.
          </p>
                   <h3 className="font-semibold mb-1">Customer Reviews</h3>
          <p className="text-gray-500 text-sm mb-4">No reviews yet</p>
 
          {}
          <div className="flex gap-2 mb-3">
            <button className="inline-flex items-center border border-orange-500 text-orange-500 py-2 px-10 rounded-lg  hover:bg-orange-50">
              Add to cart
            </button>
          </div>
 
          {}

 
          {}
          <div className="flex gap-6">
        
          </div>
        </div>
      </div>
    </main>
  );
}
 