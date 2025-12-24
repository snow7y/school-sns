import { app } from './index.ts'

describe('GET /demo', () => {
  it('200 OK と正しいJSONメッセージが返ること', async () => {
    // 1. app.request で擬似リクエストを送信 (ネットワーク通信は発生しません)
    const res = await app.request('/demo')

    // 2. ステータスコードの検証
    expect(res.status).toBe(200)

    // 3. レスポンスボディ(JSON)の検証
    const json = (await res.json()) as { message: string }

    expect(json).toEqual({
      message: 'This is a demo endpoint.',
    })
  })
})
