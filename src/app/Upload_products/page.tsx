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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files) {
      setProduct({ ...product, photos: Array.from(e.target.files) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    alert("Producto subido con éxito 🚀");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center shadow-xl">
      <div className="w-96 max-w-md p-8 bg-white shadow-xl shadow-md rounded-xl">
       
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 -mt-4">Upload Products</h2>

          <div className="mb-1">
            <label className="block text-sm font-medium">Product name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border border-[#55A605] rounded-md p-2 focus:outline-none focus:ring-[#55A605]"
              placeholder="Enter product name"
              required
            />
          </div>

          
          <div className="mb-1">
            <label className="block text-sm font-medium">Descripcion</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border border-[#55A605] rounded-md p-1 focus:outline-none focus:ring-[#55A605]"
              placeholder="Enter description"
              rows={0}
              required
            />
          </div>

       
          <div className="mb-1">
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-24 border border-[#55A605] rounded p-1 focus:outline-none"
              placeholder="$"
              required
            />
          </div>

        
          <div className="mb-1" >
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-24 border border-[#55A605] rounded p-1 focus:outline-none"
              placeholder="0"
              required
            />
          </div>

        
          <div className="mb-1">
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-[#55A605] rounded-md p-2 focus:outline-none focus:ring-[#55A605]"
              required
            >
              <option value="select">Select category</option>
              <option value="fruit">Fruits</option>
              <option value="vegetable">Vegetables</option>
              <option value="grains">Grains</option>
              <option value="other">Other</option>
            </select>
          </div>

       
          <div className="mb-2">
            <label className="block text-sm font-medium">Photos</label>
            <div className="border-2 border-dashed border-[#55A605] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <p className="font-medium">Add Photo</p>
              <p className="text-xs text-gray-500">Upload photo of your product</p>
              <label className="mt-2 bg-[#55A605] text-white px-4 py-1 rounded cursor-pointer">
                Add Photo
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

         
          <button 
            type="submit"
            className="w-full bg-[#55A605] text-white p-2 rounded mt-2  border border-[#55A605] rounded-md focus:outline-none focus:ring-[#55A605]"
          >            
            Upload
          </button>
      </div>
    </div>
  );
}
