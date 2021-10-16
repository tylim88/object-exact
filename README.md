# object-exact

[![npm](https://img.shields.io/npm/v/object-exact)](https://www.npmjs.com/package/object-exact) [![GitHub](https://img.shields.io/github/license/tylim88/object-exact)](https://github.com/tylim88/object-exact/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/object-exact/pulls) [![tylim88](https://circleci.com/gh/tylim88/object-exact.svg?style=shield)](<[LINK](https://github.com/tylim88/object-exact#object-exact)>)

🐤 Filter or partially filter object members and remove the rest, return value with accurate typing at the end, work best with typescript.

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Installation

```bash
npm i object-exact
```

## 🦗 Functionality

This library allow you to filter or partially filter object members that you want to keep and discard the rest members, all without modifying the original object.

The logic in this code is simple, you can easily create one yourself, however the best thing about this library is, it return the accurate type.

By accurate typing it means, even if you choose to partially filter the key, it will never return partial, the type shape is exactly the same as target object.

Example if you need to deal with 3 keys: `a`,`b`,`c`, where:

`a` : required
`b` : optional
`c` : discard

and if you have object like these `{a:1, b:2, c:3}` and `{a:1, c:3}`, the output type of the first object is `{a:number, b:number}` and the type of the second object is `{a: number}`, both object will never return type `{a:number, b?:number}`, this allows you to process typing in more precise manner.

## 🎵 Usage

```ts
import { objExact } from 'object-exact'

console.log(
	objExact(
		{
			a: 'use any value here except undefined',
			b: 'use any value here except undefined',
		},
		{ a: 'hello', b: false, c: '!' }
	)
) // { a:"hello", b:"world" } and the type is { a:string, b:boolean }
```

**`object(dummy,target)`**: require `dummy` object and `target` object, return new object with accurate typing, does not modify original objects.

**`dummy`**: the keys of this object is the keys that you want to keep, as for the values of the keys, **use any value, except `undefined`** which bear special utility(see explanation in `target`).

**`target`**: object that you want to remove excess members, this object must be subtype of `dummy` object(all keys exist in `dummy` object must also present in `target` object); unless the `dummy` key's value is `undefined`, then it tries to keep the key only if it is available and will not trigger typescript error if not available.

```ts
import { objExact } from 'object-exact'

// this will trigger typescript error: property b is missing.
// `target` must bet subtype of `dummy`
// NOT recommend for typescript developer, javascript developer is unaffected
console.log(objExact({ a: 1, b: 2 }, { a: 'hello' })) // { a:"hello", b: undefined } and the type is { a: unknown, b: unknown } <- wasted

// if you want to make a value optional
// then  let the `dummy` key's value be undefined, it will try to keep the key if it is available in `target`
console.log(objExact({ a: 1, b: undefined }, { a: 'hello', c: '!' })) // { a:"hello" } and the type is {a: string}
console.log(objExact({ a: 1, b: undefined }, { a: 'hello', b: 123, c: '!' })) // { a:"hello", b:123 } and the type is {a: string, b: number}
```
