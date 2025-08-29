"use client";

import { useEffect, useState } from "react";

type Perfil = {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  gender: string;
};

export default function PerfilPage() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/perfil") // <-- llama a la API sin query ni id en URL
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("Error del servidor:", text);
          throw new Error("Error en la API");
        }
        return res.json();
      })
      .then((data) => {
        setPerfil(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando perfil...</p>;
  if (!perfil) return <p className="text-center mt-10">No hay usuarios disponibles</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Perfil de {perfil.first_name} {perfil.last_name}
      </h2>
      <p><strong>Email:</strong> {perfil.email}</p>
      <p><strong>Fecha de nacimiento:</strong> {perfil.date_of_birth}</p>
      <p><strong>Género:</strong> {perfil.gender}</p>
    </div>
  );
}
