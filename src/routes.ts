import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export async function appRoutes(app: FastifyInstance) {
  app.post('/rating', async (request) => {
    const createRatingBody = z.object({
      stars: z.number()
    })

    const { stars } = createRatingBody.parse(request.body)

    await prisma.rating.create({
      data: {
        stars,
      }
    })
  })

  app.get('/ratings', async() => {
    const ratings = await prisma.rating.findMany()
  
    return ratings
  })
}


