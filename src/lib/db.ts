// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ log: ["query"] });
} else {
  // @ts-ignore
  if (!global.prisma) global.prisma = new PrismaClient({ log: ["query"] });
  // @ts-ignore
  prisma = global.prisma;
}

export { prisma };
