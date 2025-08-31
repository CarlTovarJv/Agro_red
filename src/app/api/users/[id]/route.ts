import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  const user = await prisma.users.findUnique({
    where: { user_id: id },
  });

  if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });

  return NextResponse.json(user);
  
}