import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const firstRatingId = '0730ffac-d039-4194-9571-01aa2aa0efbd'

async function run() {
  await prisma.rating.deleteMany()

  /**
   * Create ratings
   */
  await Promise.all([
    prisma.rating.create({
      data: {
        id: firstRatingId,
        stars: 3,
        tutor: 'Ana'
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })