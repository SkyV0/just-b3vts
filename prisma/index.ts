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
const update = async () => {
    const post = await prisma.post.update({
        where: { id: 1},
        data: { published: true }
    })
    console.log(post);
}

const filter = async () => {
    const filteredPosts = await prisma.post.findMany({
        where: {
            OR: [{title: { contains: 'hello' } }, { content: { contains: 'hello' } }]
        }
    })
}

const findUniquePostsForUser = async () => {
    const userPosts = await prisma.account
        .findUnique({
            where: { id: 1 },
        })
        .user()
        .posts()
    console.log(userPosts)
}

const deleteUser = async () => {
    const deletedUser = await prisma.user.delete({
        where: { email: 'sarah@prisma.io'}
    })
    console.log(deletedUser)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 

update().catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })