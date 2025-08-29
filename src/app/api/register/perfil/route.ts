// app/api/perfil/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const userId = 12; // <-- usuario fijo

  try {
    const user = await prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        date_of_birth: true,
        gender: true,
      },
    });

    if (!user) {
      return NextResponse.json({ mensaje: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({
      ...user,
      date_of_birth: user.date_of_birth.toISOString(),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ mensaje: "Error al obtener perfil" }, { status: 500 });
  }
}
