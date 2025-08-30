export default function SummaryOrder() {
const items = [
    { name: "Organic Apples", quantity: "10 quintals", price: "45.00" },
    { name: "Fresh Carrots", quantity: "5 quintals", price: "5.00"},
    { name: "Ripe Bananas", quantity: "10 quintals", price: "50.00"},
];

return (
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
);
}