"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    dui: "",
    address: "",
    dob: "",
    gender: "Male",
    email: "",
    phone: "",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      {/* Card del formulario */}
      <div className="relative max-w-md w-full bg-white shadow-xl rounded-2xl p-6">
        relative max-w-sm w-full bg-white shadow-xl rounded-2xl p-6
        {/*Logo*/}
        <div className="absolute top-4 left-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Logo"
            className="w-15 h-15"
          />
        </div>

        
        <h1 className="text-3xl font-bold mb-6 text-center">Create account</h1>

        
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">DUI</label>
            <input
              name="dui"
              value={form.dui}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Date of birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="col-span-2 space-y-2">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
              <span>I accept terms and conditions</span>
            </label>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
              <span>I accept the privacy policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
