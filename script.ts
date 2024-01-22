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

  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
