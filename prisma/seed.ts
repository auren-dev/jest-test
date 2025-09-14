import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from './mock'

const prisma = new PrismaClient()

const main = async () => {
    await prisma.product.deleteMany()
    await prisma.product.createMany({
        data: PRODUCTS,
        skipDuplicates: true,
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
