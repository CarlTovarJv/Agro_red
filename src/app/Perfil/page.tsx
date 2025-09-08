"use client";

import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaBirthdayCake, FaVenusMars, FaUserShield } from "react-icons/fa";

type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  dui: string;
  address: string;
  date_of_birth: string;
  gender: string;
  email: string;
  role_id: number;
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

  if (loading) return <p className="text-center mt-10 text-gray-600">Cargando perfil...</p>;
  if (!user) return <p className="text-center mt-10 text-red-500">Usuario no encontrado</p>;

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden mb-20">
      
      {/* Header */}
      <div className="bg-[#55A605] h-32 flex items-center justify-center relative">
        {/* Se deja espacio para que el avatar no se corte */}
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-16">
        <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img
            src="/default-avatar.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pb-12 pt-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {user.first_name} {user.last_name}
        </h1>
        <p className="text-gray-500 text-center mt-1 flex items-center justify-center gap-2">
          <FaEnvelope className="text-[#55A605]" /> {user.email}
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all">
            <FaIdCard className="text-[#55A605] text-2xl mr-4" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">DUI</h3>
              <p className="text-gray-800 font-semibold">{user.dui}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all">
            <FaUserShield className="text-[#55A605] text-2xl mr-4" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Rol</h3>
              <p className="text-gray-800 font-semibold">
                {user.role_id === 1
                  ? "Buyer"
                  : user.role_id === 2
                  ? "Seller"
                  : user.role_id === 3
                  ? "Admin"
                  : "Desconocido"}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all">
            <FaVenusMars className="text-[#55A605] text-2xl mr-4" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Género</h3>
              <p className="text-gray-800 font-semibold">{user.gender}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all">
            <FaBirthdayCake className="text-[#55A605] text-2xl mr-4" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Fecha de Nacimiento</h3>
              <p className="text-gray-800 font-semibold">{user.date_of_birth}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all col-span-1 md:col-span-2">
            <FaMapMarkerAlt className="text-[#55A605] text-2xl mr-4" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Dirección</h3>
              <p className="text-gray-800 font-semibold">{user.address}</p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#55A605] hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all flex items-center gap-2">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
}

