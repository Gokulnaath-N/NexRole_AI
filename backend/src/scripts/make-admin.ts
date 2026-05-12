import prisma from '../config/db'

async function makeAdmin() {
  const email = process.argv[2]

  if (!email) {
    console.error('❌ Usage: npm run make-admin your@email.com')
    process.exit(1)
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    console.error(`❌ User not found with email: ${email}`)
    console.log('Make sure the user has logged in at least once first.')
    process.exit(1)
  }

  await prisma.user.update({
    where: { email },
    data: { role: 'ADMIN' },
  })

  console.log(`✅ Made ${user.name} (${email}) an admin successfully`)
  await prisma.$disconnect()
}

makeAdmin()
