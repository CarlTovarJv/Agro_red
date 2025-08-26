// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma/index.js'; // apunta al index.js del cliente generado

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Insertar roles iniciales
  const rolesData = [
    { role_id: 1, role_name: 'comprador' },
    { role_id: 2, role_name: 'vendedor' },
    { role_id: 3, role_name: 'administrador' },
  ];

  for (const role of rolesData) {
    await prisma.roles.upsert({
      where: { role_id: role.role_id },
      update: {},
      create: role,
    });
  }

  console.log('Roles inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
