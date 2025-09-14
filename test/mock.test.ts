import { describe, test, expect, jest } from '@jest/globals'
import { Product, FindByIdType, getProduct } from '../src/mock'

test('[mock]', () => {
    const mock = jest.fn()

    mock.mockReturnValue(42)
    mock() // 42

    mock.mockReturnValue(43)
    mock() // 43

    mock.mockImplementation(() => 100)
    mock() // 100
})

// test('[mock]', () => {
//     const mockFn = jest.fn().mockReturnValue('default')

//     // 호출
//     mockFn('a')
//     mockFn('b')
//     console.log(mockFn.mock.calls) // [ ['a'], ['b'] ]

//     // 1) mockClear()
//     mockFn.mockClear()
//     console.log(mockFn.mock.calls) // []
//     console.log(mockFn())          // 'default' (여전히 반환값 있음)

//     // 2) mockReset()
//     mockFn.mockReset()
//     console.log(mockFn.mock.calls) // []
//     console.log(mockFn())          // undefined (반환값/구현까지 리셋됨)
// })

// // 실습 문제1
// const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Procut] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 1번
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 2번
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })


// // 실습 문제 2
// const mockFindById = // ❗️TODO:: mock에 콜백 함수 직접 전달하기
// // const mockFindById = jest.fn((proudctId: number): Product | null => {
// //     if (proudctId === 1) {
// //         return { id: 1, name: '아이폰', price: 800 }
// //     }

// //     return null;
// // })

// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Procut] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })


// // 실습 문제 3
// const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// // ❗️TODO:: mockImplementation으로 동작 정의하기
// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Procut] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })