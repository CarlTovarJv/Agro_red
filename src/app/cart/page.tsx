"use client";

import Link from "next/link";

function CartPage() {
  const products = [
    { id: 1, name: "Round tomatoes", image: "./tomatoes.jpg", price: 35, subtotal: 70 },
    { id: 2, name: "Sweet chili", image: "./pepper.jpg", price: 30, subtotal: 60 },
    { id: 3, name: "Potatoes", image: "./potatoes.jpg", price: 35, subtotal: 70 },
    { id: 4, name: "Beet", image: "./beetroot.jpg", price: 25, subtotal: 25 },
    { id: 5, name: "Cauliflower", image: "./cauliflower.jpg", price: 12, subtotal: 24 },
    { id: 6, name: "Red onion", image: "./onion.webp", price: 40, subtotal: 40 },
    { id: 7, name: "Jalapeno", image: "./jalapeno.jpg", price: 17, subtotal: 34 },
    { id: 8, name: "Cucumber", image: "./cucumber.jpeg", price: 20, subtotal: 20 },
  ];

  const items = [
    { name: "Tomatoes", quantity: "2 Box", price: 70 },
    { name: "Sweet chili", quantity: "1 Box", price: 60 },
    { name: "Potatoes", quantity: "2 Sack", price: 70 },
    { name: "Beet", quantity: "1 Sack", price: 25 },
    { name: "Cauliflower", quantity: "2 Dozen", price: 24 },
    { name: "Red onion", quantity: "1 Box", price: 40 },
    { name: "Jalapeno", quantity: "2 Box", price: 34 },
    { name: "Cucumber", quantity: "1 Sack", price: 20 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">

      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center"> My Cart</h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col space-y-6 flex-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white shadow-md hover:shadow-lg transition w-full h-[190px] p-5 flex items-center gap-6"
            >
        
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-28 object-cover ml-5 rounded-lg border border-gray-200"
              />

            
              <div className="flex flex-col flex-1 justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

                <div className="flex items-center gap-4 mt-2">
                 
                  <div className="flex items-center gap-4 border border-gray-300 px-3 py-1 rounded-lg w-fit shadow-sm">
                    <button className="text-xl font-bold text-gray-700 hover:text-orange-600">+</button>
                    <span className="text-base font-medium">1.00</span>
                    <button className="text-xl font-bold text-gray-700 hover:text-orange-500">-</button>
                  </div>

               
                  <div className="relative w-[130px]">
                    <select className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg shadow-sm ">
                      <option>Sack</option>
                      <option>Box</option>
                      <option>Quintal</option>
                      <option>Dozen</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                      <img src="./chevron-down.svg" alt="" className="w-4 h-4" />
                    </div>
                  </div>

                
                  <button className="flex items-center justify-center bg-[#FF6E08] transition text-white px-4 py-2 rounded-lg shadow-md">
                    <img src="./trash.svg" alt="remove item" className="w-4 h-4" />
                  </button>
                </div>

             
                <div className="flex justify-between mt-4">
                  <div>
                    <span className="text-sm text-gray-500">Price</span>
                    <p className="text-lg font-bold text-gray-800">${product.price}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Subtotal</span>
                    <p className="text-lg font-bold text-gray-800">${product.subtotal}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

          <div className="mb-6 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.quantity}</p>
                </div>
                <span className="font-semibold text-gray-800">${item.price}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$343.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-black mt-4 border-t pt-3">
              <span>Total</span>
              <span>$348.00</span>
            </div>
          </div>

          <Link href="/Checkout"><button className="cursor-pointer w-full mt-8 bg-[#FF6E08] hover:bg-orange-500 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
            Proceed to Payment
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

