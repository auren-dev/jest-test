import { describe, test, expect, jest } from '@jest/globals'
import flipCoin from '../src/flip-coin'

const randomSpy = jest.spyOn(Math, 'random') // spy로 Math.random 함수를 감시

// test('한가지 값이 아니라 여러 값을 리턴한다', () => {
// 	randomSpy.mockReturnValue(0.3) // Math.random()은 무조건 0.3 반환
// 	const result = flipCoin()
// 	expect(result).toBe('Tail') // 가짜 함수의 결과에 따라 검증

// 	randomSpy.mockReturnValue(0.6) // Math.random()은 무조건 0.6 반환
// 	const result2 = flipCoin()
// 	expect(result2).toBe('Head') // 가짜 함수의 결과에 따라 검증
	
// 	randomSpy.mockRestore() // 원래의 Math.random으로 복구 (설정했던 mockReturnValue가 사라짐)
// })

test('한가지 값이 아니라 여러 값을 리턴한다', () => {
	randomSpy.mockImplementation(() => 0.3)
	const result = flipCoin()
	expect(result).toBe('Tail') // 가짜 함수의 결과에 따라 검증

	randomSpy.mockImplementation(() => 0.6)
	const result2 = flipCoin()
	expect(result2).toBe('Head') // 가짜 함수의 결과에 따라 검증
	
	randomSpy.mockRestore() // 원래의 Math.random으로 복구 (설정했던 mock 구현이 사라짐)
})