import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Methods: GET, POST, PUT, DELETE
app.get('/', async (request, reply) => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Server is running on http://localhost:3333')
})
