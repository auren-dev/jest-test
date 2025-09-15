import { describe, beforeEach, afterEach, test, expect } from '@jest/globals'
import Counter from '../src/couter'

describe('[Counter] 테스트 그룹', () => {
    let counter: Counter = new Counter()
    
    beforeEach(() => {
        counter.set(2)
    })

    test('[Counter] 증가', () => {
        // 이미 2로 설정되어 있음
        counter.increment()
        const result = counter.get()
        expect(result).toBe(3)
    })

    test('[Counter] 감소', () => {
        // 이미 2로 설정되어 있음
        counter.decrement()
        const result = counter.get()
        expect(result).toBe(1)
    })
})
