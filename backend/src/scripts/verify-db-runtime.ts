import 'dotenv/config';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRawUnsafe('SELECT 1');
  console.log('DB_RUNTIME_OK', JSON.stringify(result));
}

main()
  .catch(error => {
    console.error('DB_RUNTIME_FAIL', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
