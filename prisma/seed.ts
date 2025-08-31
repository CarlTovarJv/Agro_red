import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const roles = [
    { role_id: 1, role_name: "buyer" },
    { role_id: 2, role_name: "seller" },
    { role_id: 3, role_name: "administrator" },
  ];

  for (const role of roles) {
    await prisma.roles.upsert({
      where: { role_id: role.role_id },
      update: {},
      create: role,
    });
  }

  console.log("✅ Roles insertados correctamente");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
