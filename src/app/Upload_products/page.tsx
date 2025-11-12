"use client";
import { useState } from "react";

export default function UploadProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    photos: [] as File[],
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
      setProduct({
        ...product,
        photos: [...product.photos, ...Array.from(e.target.files)],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    alert("Product upload successfully");
  };

  const inputStyle =
    "mt-1 block w-full rounded-md border border-gray-600 shadow-sm px-3 py-2 text-lg focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-600 focus:ring-opacity-50";

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
          {/* --- LEFT FORM --- */}
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
                className={inputStyle}
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
                className={inputStyle + " h-24"}
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
                  className={inputStyle}
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
                  className={inputStyle}
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
                className={inputStyle}
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
                className="w-full h-14 bg-[#55A605] text-white rounded-md text-lg font-medium"
              >
                Upload
              </button>
            </div>
          </div>

          {/* --- RIGHT UPLOAD + PREVIEW --- */}
          <div className="w-full flex flex-col items-center justify-start border-2 border-dashed border-gray-400 rounded-xl p-6 h-full">
            <p className="text-2xl mb-2 text-center">Add photo</p>
            <p className="text-xs text-gray-500 mb-4 text-center">
              Upload photo of your products
            </p>
            <label className="bg-[#55A605] text-white px-2 py-3 rounded cursor-pointer text-center w-full max-w-28 mb-4">
              Add photo
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>

            {/* PREVIEW */}
            <div className="grid grid-cols-1 gap-4 w-full">
              {product.photos.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${idx}`}
                  className="w-full h-60 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
