    function CartPage() {
      const items = [
    { name: "Organic Apples", quantity: "10 quintals", price: "45.00" },
    { name: "Fresh Carrots", quantity: "5 quintals", price: "5.00"},
    { name: "Ripe Bananas", quantity: "10 quintals", price: "50.00"},
];
  
  return (
      <div>

     
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-4xl font-semibold text-gray-900 ml-24 mt-10">My Cart</h2>
        </div>

            <div className="flex flex-col space-y-6 mt-20 ml-0">
              <div className="rounded-xl bg-white shadow-md w-[700px] h-[180px]  mx-auto ">
                <div className="flex items-center justify-center space-x-4 ">
                  <img src="./tomatoes.jpg" alt="" className="w-40 h-30 rounded-md ml-14" />
                  <div className="flex items-center justify-center space-x-4 mt-20">
                   
                <div className="flex items-center gap-4 border-1 border-gray-300 text-black px-3 py-1 rounded-md w-fit">
                <button className="text-xl font-bold">+</button>
                <span className="text-lg font-medium">1.00</span>
                <button className="text-xl font-bold">-</button>
                </div>
                
                <div className="relative w-30">
                <select className="appearance-none block w-full bg-white border border-gray-300 text-black py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-lime-500">
                  <option>Sack</option>
                  <option>Box</option>
                  <option>Quintal</option>
                  <option>Dozen</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <img src="./chevron-down.svg" alt="" className="w-4 h-4"/>
                </div>
                </div>
                <button className=" flex items-center justify-between bg-lime-300 gap-2 text-white px-4 py-2 rounded-md hover:bg-lime-600 font-regular">
                  <img src="./trash.svg" alt="empty cart icon" className="w-4 h-4" />
                </button>
                </div>
                <div className="flex flex-col space-y-2 mt-30 spacing: 14px">
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Price:</span>
                  <span className="text-xl font-semibold text-gray-900">$35.00</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Subtotal:</span>
                  <span className="text-xl font-semibold text-gray-900">$70.00</span>
                </div>
              </div>
                </div>
                </div>





          <div className="rounded-xl bg-white shadow-md w-[700px] h-[180px]  mx-auto">
           <div className="flex items-center justify-center space-x-4 ">
             <img src="./pepper.jpg" alt="" className="w-40 h-30 rounded-md ml-14" />
             <div className="flex items-center justify-center space-x-4 mt-20">
          <div className="flex items-center gap-4 border-1 border-gray-300 text-black px-3 py-1 rounded-md w-fit">
          <button className="text-xl font-bold">+</button>
          <span className="text-lg font-medium">1.00</span>
          <button className="text-xl font-bold">-</button>
          </div>
           <div className="relative w-30">
          <select className="appearance-none block w-full bg-white border border-gray-300 text-black py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-lime-500">
            <option>Sack</option>
            <option>Box</option>
            <option>Quintal</option>
            <option>Dozen</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img src="./chevron-down.svg" alt="" className="w-4 h-4"/>
          </div>
        </div>
        <button className=" flex items-center justify-between bg-lime-300 gap-2 text-white px-4 py-2 rounded-md hover:bg-lime-600 font-regular">
             <img src="./trash.svg" alt="empty cart icon" className="w-4 h-4 " />
          </button>
          </div>
          <div className="flex flex-col space-y-2 mt-30 spacing: 14px">
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Price:</span>
                  <span className="text-xl font-semibold text-gray-900">$35.00</span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Subtotal:</span>
                  <span className="text-xl font-semibold text-gray-900">$70.00</span>
                </div>
              </div>
          </div>
          </div>
          
              <div className="rounded-xl bg-white shadow-md w-[700px] h-[180px]  mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <img src="./onion.jpg" alt="" className="w-40 h-30 rounded-md ml-14" />
                <div className="flex items-center justify-center space-x-4 mt-20">
                  <div className="flex items-center gap-4 border-1 border-gray-300 text-black px-3 py-1 rounded-md w-fit">
                <button className="text-xl font-bold">+</button>
                <span className="text-lg font-medium">1.00</span>
                <button className="text-xl font-bold">-</button>
                </div>
                <div className="relative w-30">
                <select className="appearance-none block w-full bg-white border border-gray-300 text-black py-1.5 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-lime-500">
                  <option>Sack</option>
                  <option>Box</option>
                  <option>Quintal</option>
                  <option>Dozen</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <img src="./chevron-down.svg" alt="" className="w-4 h-4"/>
                </div>
              </div>
              <button className=" flex items-center justify-between bg-lime-300 gap-2 text-white px-4 py-2 rounded-md hover:bg-lime-600 font-regular">
                  <img src="./trash.svg" alt="empty cart icon" className="w-4 h-4" />
                </button>
                </div>
                <div className="flex flex-col space-y-1 mt-20">
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Price:</span>
                  <span className="text-xl font-semibold text-gray-900">$35.00</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg text-gray-700">Subtotal:</span>
                  <span className="text-xl font-semibold text-gray-900">$70.00</span>
                </div>
              </div>
                </div>
                </div>
                </div>
                

 
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
   
        <div className="mb-6 space-y-4">
        {items.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
            <div className="flex-1">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-500 text-sm">{item.quantity}</p>
            </div>
            <span className="font-semibold text-gray-800">${item.price}</span>
        </div>
        ))}
    </div>
 
    <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
        <span>Subtotal</span>
        <span>$100.00</span>
        </div>
        <div className="flex justify-between">
        <span>Shipping</span>
        <span>$5.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-black mt-4">
        <span>Total</span>
        <span>$105.00</span>
        </div>
    </div>
    </div>

              </div>
              
            );
}
export default CartPage;