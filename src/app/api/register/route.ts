import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, dui, address, gender, email, password, accept_terms, accept_privacy, role_id } = body;

    if (!first_name || !last_name || !dui || !email || !password || !accept_terms || !accept_privacy) {
      return NextResponse.json({ error: "Todos los campos obligatorios deben estar completos" }, { status: 400 });
    }

    // Validar rol
    const validRoles = [1, 2, 3];
    const finalRoleId = validRoles.includes(role_id) ? role_id : 1;

    // Hash de contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        first_name,
        last_name,
        dui,
        address: address || "",
        gender, // debe ser "Male" o "Female"
        email,
        password: hashedPassword,
        accept_terms,
        accept_privacy,
        role_id: finalRoleId,
      },
    });

    return NextResponse.json({ userId: user.user_id }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    const message = err.code === "P2002" ? "Email o DUI ya existe" : err.message || "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
