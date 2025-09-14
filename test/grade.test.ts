import { expect, describe, it } from '@jest/globals'
import { isPass } from '../src/grade'

describe('성적 Pass 여부 확인 함수 테스트', () => {
	it('60점 이상은 PASS', () => {
		expect(isPass(60)).toEqual('PASS')
		expect(isPass(80)).toEqual('PASS')
		expect(isPass(100)).toEqual('PASS')
	})
	
	it('60점 미만은 FAIL', () => {
		expect(isPass(59)).toEqual('FAIL')
		expect(isPass(30)).toEqual('FAIL')
		expect(isPass(0)).toEqual('FAIL')
	})
})