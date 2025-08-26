import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs"; // bcryptjs es más fácil de usar que bcrypt en Next.js
import { SignJWT } from "jose";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 1️⃣ Buscar usuario por email
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    // 2️⃣ Validar contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
    }

    // 3️⃣ Generar token JWT con JOSE
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT({ id: user.user_id, email: user.email, role: user.role_id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    // 4️⃣ Devolver token y datos del usuario
    return NextResponse.json({ token, user: { id: user.user_id, email: user.email } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}

