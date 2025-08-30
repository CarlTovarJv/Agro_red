"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    dui: "",
    role: "",
    address: "",
    email: "",
    password: "",
    terms: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Datos enviados:", form);
    alert("✅ Cuenta creada!");
  };
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center shadow-xl">
      <div className="w-96 p-8 bg-white rounded-xl shadow-md">


      <div className="flex justify-center -mt-8">
          <img src="/logo.svg" alt="agrored" className="w-32" />
      </div>
    
         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 -mt-4">Create Account</h1>

        
            <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              placeholder="Juan Fernandez"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />           
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
          </div>

          <div className="text-right mb-2">
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Forgot password?
                </a>
              </div>

          <button
            type="submit"
            className="w-30 py-2 bg-black justify-center flex items-center text-white font-semibold rounded-md hover:bg-gray-800 transition-colors mx-auto"
          >
            Create 
          </button>
       
      </div>
    </div>
  );
};
