import { expect, describe, jest, test } from '@jest/globals'
import { hello } from '../src/hello'

describe('hello 함수 테스트', () => {
    test('Hello Jest를 리턴해야 한다', () => {
        const value = hello()
        expect(value).toEqual('Hello Jest')
    })

    test('이름을 반영해야 한다', () => {
        const value = hello('Unit Test')
        expect(value).toEqual('Hello Unit Test')
    })
})

describe('Truthy 테스트', () => {
    test('null', () => {
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })

    test('zero', () => {
        const z = 0
        expect(z).not.toBeNull()
        expect(z).toBeDefined()
        expect(z).not.toBeUndefined()
        expect(z).not.toBeTruthy()
        expect(z).toBeFalsy()
    })
})