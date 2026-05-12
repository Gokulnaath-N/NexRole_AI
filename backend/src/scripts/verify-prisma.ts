import { prisma } from '../lib/prisma'

async function verify() {
  try {
    // Test database connection with a simple query
    const userCount = await prisma.user.count()
    console.log('✅ Connected to Prisma Postgres')
    console.log(`   Database has ${userCount} users`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Connection failed:', error instanceof Error ? error.message : String(error))
    process.exit(1)
  }
}

verify()
