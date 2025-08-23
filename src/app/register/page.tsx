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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("📩 Datos enviados:", form);
    alert("✅ Cuenta creada!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-white-100  px-4">
      <div className="relative max-w-md w-full bg-white shadow-xl rounded-2xl p-9">
        <div className="flex flex-col items-start mb-0 -ml-10">
          <img
            src="./agrored img.svg"
            alt="Logo"
            className="w-38 h-38"
          />
        </div>
        <h1 className="text-3xl font-bold text-center w-full -mt-10 mb-8">Create account</h1> 

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">DUI</label>
            <input
              name="dui"
              value={form.dui}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Date of birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
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
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-1 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="col-span-2 bg-[#55A605] text-white p-3 rounded-lg"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

