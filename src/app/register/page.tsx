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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("📩 Datos enviados:", form);
    alert("✅ Cuenta creada!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/Agrored-1-removebg-preview.png"
            alt="agrored"
            className="w-32 h-17 object-contain"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-black">
          Create Account
        </h1>
        <p className="text-center text-gray-600">Fill in the form to get started</p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              placeholder="Juan Fernandez"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="example@email.com"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-black font-medium hover:underline hover:text-gray-800"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}



