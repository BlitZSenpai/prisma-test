import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: "rich dude",
    },
    distinct: ["name", "age"],
    take: 2,
    skip: 1,
    orderBy: {
      age: "asc",
    },
  });

  const user2 = await prisma.user.findMany({
    where: {
      name: { equals: "rich dude" },
      age: { not: "6" },
      email: { in: ["@mail", "check"] },
    },
  });

  const user3 = await prisma.user.findMany({
    where: {
      email: { contains: "@gmail.com" },
      name: { startsWith: "r" },
      age: { endsWith: "f" },
    },
  });

  console.log(user);
  console.log(user2);
  console.log(user3);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
