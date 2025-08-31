"use client";

import { useEffect, useState } from "react";

type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  dui: string;
  address: string;
  date_of_birth: string;
  gender: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const userId = 2;

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users/${userId}`);
        if (!res.ok) throw new Error("Usuario no encontrado");
        const data: User = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>Usuario no encontrado</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <p><strong>Nombre:</strong> {user.first_name} {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>DUI:</strong> {user.dui}</p>
      <p><strong>Dirección:</strong> {user.address}</p>
      <p><strong>Género:</strong> {user.gender}</p>
      <p><strong>Rol:</strong>{" "}{user.role_id === 1? "Buyer": user.role_id === 2? "Seller": user.role_id === 3? "Admin": "Desconocido"}
</p>
    </div>
  );
}
