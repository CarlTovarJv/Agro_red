"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login datos:", { email, password });
    alert(" Bienvenido!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">

        <div className="flex justify-center">
          <img
            src="/Agrored-1-removebg-preview.png"
            alt="agrored"
            className="w-32 h-17 object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-black">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-black font-medium hover:underline hover:text-gray-800"
            >
              Forgot password?
            </a>
          </div>

          <a
          href="/Pagina"
          className="w-full block py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg text-center transition-colors">
          Login
          </a>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-black font-medium hover:underline hover:text-gray-800"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}