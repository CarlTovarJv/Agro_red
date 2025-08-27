function CartPage() {
  const products = [
    { id: 1, name: "Round tomatoes", image: "./tomatoes.jpg", price: 35, subtotal: 70 },
    { id: 2, name: "Sweet chili", image: "./pepper.jpg", price: 30, subtotal: 60 },
    { id: 3, name: "Potatoes", image: "./potatoes.jpg", price: 35, subtotal: 70 },
     { id: 4, name: "Beet", image: "./beetroot.jpg", price: 25, subtotal: 25 },
    { id: 5, name: "Cauliflower", image: "./cauliflower.jpg", price: 12, subtotal: 24 },
    { id: 6, name: "Red onion", image: "./onion.webp", price: 40, subtotal: 40 },
     { id: 7, name: "Jalapeno", image: "./jalapeno.jpg", price:  17, subtotal: 34 },
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
    <div>
     
      <div className="p-4 mt-10 ">
        <h2 className="text-4xl font-semibold text-gray-900 ml-34">My Cart</h2>
      </div>

     
      <div className="flex justify-center items-start gap-10 mt-[24px]">
       
        <div className="flex flex-col space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl bg-white border border-gray-300 w-[700px] h-[180px] mx-auto p-4 flex items-center gap-6"
            >
              
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-28 rounded-md ml-4"
              />

             
              <div className="flex flex-col flex-1 justify-between h-full">
               
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>

                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-4 border border-gray-300 text-black px-3 py-1 rounded-md w-fit">
                    <button className="text-xl font-medium">+</button>
                    <span className="text-base font-normal">1.00</span>
                    <button className="text-xl font-medium">-</button>
                  </div>

                  <div className="relative w-[120px]">
                    <select className="appearance-none block w-full bg-white border border-gray-300 text-black py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-300">
                      <option>Sack</option>
                      <option>Box</option>
                      <option>Quintal</option>
                      <option>Dozen</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <img src="./chevron-down.svg" alt="" className="w-4 h-4" />
                    </div>
                  </div>

                  <button className="flex items-center justify-center bg-lime-300 gap-2 text-white px-4 py-2 rounded-md hover:bg-lime-600">
                    <img src="./trash.svg" alt="empty cart icon" className="w-4 h-4" />
                  </button>
                </div>

                
                <div className="flex justify-between mt-4">
                  <div>
                    <span className="text-lg text-gray-700">Price:</span>
                    <span className="text-xl font-semibold text-gray-900 block">${product.price}</span>
                  </div>
                  <div>
                    <span className="text-lg text-gray-700">Subtotal:</span>
                    <span className="text-xl font-semibold text-gray-900 block">${product.subtotal}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full max-w-sm p-6 bg-white rounded-lg border border-gray-300">
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
              <span>$343.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-black mt-4">
              <span>Subtotal </span>
              <span>$348.00</span>
            </div>
          </div>
         <div className="flex items-center justify-center">
          <button className=" flex items-center justify-between mx-auto bg-lime-500 gap-2 text-white px-10 py-2  mt-10 rounded-md hover:bg-lime-600 font-regular">
           Proceed to payment
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
