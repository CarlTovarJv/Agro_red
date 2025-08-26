import { NextResponse } from "next/server";
import { Client } from "pg";
import bcrypt from "bcryptjs"; 


const { DATABASE_URL, JWT_SECRET} = process.env;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      lastName,
      dui,
      address,
      dob,
      gender,
      email,
      password,
      terms,
      privacy,
    } = data;

    if (!terms || !privacy) {
      return NextResponse.json(
        { error: "Debes aceptar los términos y privacidad." },
        { status: 400 }
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Conectar a PostgreSQL
    const client = new Client({ connectionString: DATABASE_URL });
    await client.connect();

    const query = `
      INSERT INTO users
      (first_name, last_name, dui, address, date_of_birth, gender, email, password, accept_terms, accept_privacy)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING user_id;
    `;

    const values = [
      name,
      lastName,
      dui,
      address,
      dob,
      gender,
      email,
      hashedPassword,
      terms,
      privacy,
    ];

    const result = await client.query(query, values);
    await client.end();

    return NextResponse.json({ success: true, userId: result.rows[0].user_id });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
