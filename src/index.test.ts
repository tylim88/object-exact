import 'jest'
import { objExact } from './index'
import { expectType } from 'tsd'
const a = objExact({ a: 1, b: 2 }, { a: 'hello', b: false as const, c: '!' })

const b = objExact({ a: 1, b: undefined }, { a: 'hello', b: 123, c: '!' })

const c = objExact({ a: 1, b: undefined }, { a: 'hello', c: '!' })
describe('objSwap', () => {
	it('test with {a:"1",b:"2",c:"3"}', () => {
		expect(a).toEqual({ a: 'hello', b: false })
		expect(b).toEqual({ a: 'hello', b: 123 })
		expect(c).toEqual({ a: 'hello' })
	})
})

expectType<{ a: string; b: boolean }>(a)
expectType<{ a: string; b: number }>(b)
expectType<{ a: string }>(c)
