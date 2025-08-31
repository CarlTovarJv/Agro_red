"use client";
import { useEffect, useState } from "react";

type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
};

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users") // 👈 ahora va a Express
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((u) => (
          <li key={u.user_id}>
            {u.first_name} {u.last_name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}