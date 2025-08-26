"use client";
import React, { useState } from "react";

// Definimos el tipo del formulario
type FormData = {
  name: string;
  lastName: string;
  dui: string;
  address: string;
  dob: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  password: string;
  terms: boolean;
  privacy: boolean;
};

export default function RegisterForm() {
  // Estado inicial tipado
  const [form, setForm] = useState<FormData>({
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

  // Manejo de cambios
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Si es checkbox, obtenemos checked, sino value
    const checked =
      type === "checkbox" && "checked" in e.target ? e.target.checked : undefined;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked! : value,
    }));
  };

  // Manejo del submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // ✅ ya no falla
      });

      const data: { userId?: string; error?: string } = await res.json();

      if (res.ok && data.userId) {
        alert(`✅ Cuenta creada! ID: ${data.userId}`);
        // Resetear formulario
        setForm({
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
      } else {
        alert(`❌ Error: ${data.error || "Algo salió mal"}`);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Ocurrió un error al crear la cuenta");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Apellido"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="dui"
        value={form.dui}
        onChange={handleChange}
        placeholder="DUI"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Dirección"
        className="border p-2 w-full"
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
      </select>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Correo"
        className="border p-2 w-full"
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        className="border p-2 w-full"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Contraseña"
        className="border p-2 w-full"
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleChange}
        />
        <span>Acepto los términos</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="privacy"
          checked={form.privacy}
          onChange={handleChange}
        />
        <span>Acepto la política de privacidad</span>
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Crear cuenta
      </button>
    </form>
  );
}
