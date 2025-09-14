// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// const repository = {
//     findById: (id: number) => prisma.product.findUnique({ where: { id } }),
//     // ...
// }

// export default repository

import { PRODUCTS } from "../../prisma/mock"

// 실제 데이터베이스 접근이라 가정
const repository = {
    findById: (productId: number) => PRODUCTS.find((product) => product.id === productId) || null,
    // ...
}

export default repository