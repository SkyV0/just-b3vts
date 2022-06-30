import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice4@prisma.io',
    //       posts: {
    //         create: { title: 'Hello World' },
    //       },
    //       accounts: {
    //         create: { type: 'Yes', provider: 'Google', providerAccountId: 'yes'}
    //       }
    //     },
    //   })

      const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          accounts: true
        },
      })
    console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 