import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
    } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        first_name: name,
        last_name: lastName,
        dui,
        address,
        date_of_birth: new Date(dob),
        gender,
        email,
        password: hashedPassword,
        accept_terms: terms,
        accept_privacy: privacy,
      },
    });

    return NextResponse.json({ userId: user.user_id }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
