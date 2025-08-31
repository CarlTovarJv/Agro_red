const handleRegister = async () => {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: "Mateo",
      last_name: "Perez",
      dui: "12345678-9",
      address: "Guatemala",
      date_of_birth: "2000-01-01",
      gender: "M",
      email: "mateo@example.com",
      password: "123456",
      accept_terms: true,
      accept_privacy: true,
    }),
  });

  const data = await res.json();
  console.log("Respuesta del backend:", data);
};