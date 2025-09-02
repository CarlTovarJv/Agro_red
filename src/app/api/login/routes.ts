import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Normalizar email y password
    const emailNormalized = email.trim().toLowerCase();
    const passwordNormalized = password.trim();

    // Buscar usuario en DB
    const user = await prisma.users.findUnique({
      where: { email: emailNormalized },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    // Validar contraseña
    const validPassword = await bcrypt.compare(passwordNormalized, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
    }

    // Formatear usuario para enviar al frontend
    const userFormatted = {
      userId: user.user_id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    };

    return NextResponse.json({ message: "Login exitoso", user: userFormatted });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
