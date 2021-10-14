import 'jest'
import { objExact } from './index'

describe('objSwap', () => {
	it('test with {a:"1",b:"2",c:"3"}', () => {
		expect(
			objExact({ a: 1, b: 2 }, { a: 'hello', b: 'world', c: '!' })
		).toEqual({ a: 'hello', b: 'world' })
	})
})
