export default function NavTabs({ active }) {
const tabs = [
    "Seasonal products",
    "Products",
    "My products",
    "Upload products",
];

return (
    <nav className="flex items-center justify-center px-6 py-2 bg-white text-gray-800 font-medium border-b border-gray-200">
    {tabs.map((tab) => (
        <span
        key={tab}
        className={`cursor-pointer px-4 py-2 transition-colors duration-200
            ${active === tab
            ? "font-bold text-green-700 border-b-2 border-green-700"
            : "hover:text-green-600"
            }
        `}
        >
        {tab}
        </span>
    ))}
    </nav>
);
}