import { PrismaClient } from "@prisma/client";

const prisma = PrismaClient();

async function main() {
  await prisma;
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
