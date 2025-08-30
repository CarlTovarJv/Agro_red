"use client";
import { useState } from "react";

export default function UploadProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    photos: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProduct({ ...product, photos: Array.from(e.target.files) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    alert("Product upload succesfully 🚀");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full h-full bg-white shadow-lg rounded-none p-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Upload Products
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div className="md:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full h-14 px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter Product name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full h-20 px-5 py-3 border rounded-md focus:outline-none focus:ring-3 focus:ring-black"
                placeholder="Enter description"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full h-14 px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="$"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="w-full h-14 px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full h-14 px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="">Select category</option>
                <option value="fruit">Fruits</option>
                <option value="vegetable">Vegetables</option>
                <option value="grains">Grains</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-14 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Upload
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 h-full">
            <p className="text-2xl mb-2 text-center">🍑 Add photo</p>
            <p className="text-xs text-gray-500 mb-4 text-center">
              Upload photo of your products
            </p>
            <label className="bg-black text-white px-2 py-3 rounded cursor-pointer text-center w-full max-w-28">
              Add photo
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
