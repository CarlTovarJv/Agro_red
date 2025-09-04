import { Trash2, Edit } from "lucide-react";

export default function ProductsTable() { 
  const products = [
    {
      id: 1,
      image: "./tomatoes.avif",
      name: "Tomato",
      quantity: "3 boxes",
      date: "29/5/2024",
    },
    {
      id: 2,
      image: "./Beans.jpg",
      name: "Beans",
      quantity: "10 sacks",
      date: "02/6/2024",
    },
    {
      id: 3,
      image: "./Oranges.webp",
      name: "Orange",
      quantity: "5 boxes",
      date: "10/6/2024",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">My products</h1>

      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-700 font-semibold">
                  <th className="px-6 pb-3"></th>
                  <th className="px-6 pb-3">Product name</th>
                  <th className="px-6 pb-3">Quantity</th>
                  <th className="px-6 pb-3">Date</th>
                  <th className="px-6 pb-3">Eliminate</th>
                  <th className="px-6 pb-3">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800">
                  <td className="px-7 py-5">
                    
                    
                    <div className="w-25 h-25 flex items-center justify-center overflow-hidden rounded-xl mx-auto">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                  </td>

                  <td className="px-7 py-3">{product.name}</td>
                  <td className="px-6 py-3">{product.quantity}</td>
                  <td className="px-6 py-3">{product.date}</td>

                  <td className="px-9 py-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center">
                      <Trash2 className="text-white hover:text-red-300" size={20} />
                    </button>
                  </td>

                  <td className="px-6 py-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center">
                      <Edit className="text-white hover:text-yellow-300" size={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}
