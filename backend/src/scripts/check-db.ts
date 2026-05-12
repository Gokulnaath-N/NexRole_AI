import prisma from '../config/db';

async function main() {
  const domains = await prisma.domain.findMany({
    select: { slug: true, name: true }
  });
  console.log('Domains in DB:', JSON.stringify(domains, null, 2));
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
