import { expect, test } from '@jest/globals'
import { fetchData, getAvatars } from "../src/async"

test('[비동기 테스트] 콜백 기반', (done) => {
    fetchData((data) => {
        expect(data).toBe('ok')
        done() // 여기서 호출해야 Jest가 "아 테스트 끝났구나" 하고 종료함
    })
})

test('[비동기 테스트] async/await', async () => {
    const avatars = await getAvatars()
    expect(avatars).toBeTruthy()
})