import { expect, describe, jest, test, it } from '@jest/globals'
import { getProduct } from '../src/product/service'
import repository from '../src/product/repository'

// `../src/product/service` 모듈에서 사용하는 repository는 mock으로 대체하여 테스트
jest.mock('../src/product/repository')

describe('getProduct 테스트', () => {
    test('존재하는 상품 조회', () => {
        (repository.findById as jest.Mock).mockReturnValue({ id: 1, name: 'iPhone', price: 800 })
        const product = getProduct(1)
        console.log(product)

        expect(product).toEqual({ id: 1, name: 'iPhone', price: 800 })
    })

    test('존재하지 않는 상품 조회', () => {
        (repository.findById as jest.Mock).mockReturnValue(null)
        const product = getProduct(11)
        expect(product).toBeNull()
    })
})
