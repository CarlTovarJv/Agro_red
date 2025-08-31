"use client";

import { useState } from "react";

type FormData = {
  first_name: string;
  last_name: string;
  dui: string;
  address: string;
  gender: "Male" | "Female";
  email: string;
  password: string;
  accept_terms: boolean;
  accept_privacy: boolean;
  role_id: number;
};

const initialForm: FormData = {
  first_name: "",
  last_name: "",
  dui: "",
  address: "",
  gender: "Male",
  email: "",
  password: "",
  accept_terms: false,
  accept_privacy: false,
  role_id: 1,
};

export default function RegisterPage() {

  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked! : name === "role_id" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.accept_terms || !form.accept_privacy) {
      alert("Debes aceptar los términos y la política de privacidad.");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Ingresa un correo válido");
      return;
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { userId?: number; error?: string } = await res.json();

      if (res.ok && data.userId) {
        alert(`Cuenta creada! ID: ${data.userId}`);
        setForm(initialForm);
      } else {
        alert(`Error: ${data.error || "Algo salió mal"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.svg"
            alt="agrored"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-black">
          Crear Cuenta
        </h1>
        <p className="text-center text-gray-600">Completa el formulario para registrarte</p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Apellido"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <input
            name="dui"
            value={form.dui}
            onChange={handleChange}
            placeholder="DUI"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="Male">Masculino</option>
            <option value="Female">Femenino</option>
          </select>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <select
            name="role_id"
            value={form.role_id}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value={1}>Buyer</option>
            <option value={2}>Seller</option>
          </select>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="accept_terms"
                checked={form.accept_terms}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span>Acepto los términos</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="accept_privacy"
                checked={form.accept_privacy}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span>Acepto la política de privacidad</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
            disabled={!form.accept_terms || !form.accept_privacy}
          >
            Crear cuenta
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="text-black font-medium hover:underline hover:text-gray-800"
            >
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
