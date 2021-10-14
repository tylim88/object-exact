# object-exact

[![npm](https://img.shields.io/npm/v/object-exact)](https://www.npmjs.com/package/object-exact) [![GitHub](https://img.shields.io/github/license/tylim88/object-exact)](https://github.com/tylim88/object-exact/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/object-exact/pulls) [![tylim88](https://circleci.com/gh/tylim88/object-exact.svg?style=shield)](<[LINK](https://github.com/tylim88/object-exact#object-exact)>)

🐤 Remove excess object members(required or partial members) and return accurate type.

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Installation

```bash
npm i object-exact
```

## Usage

🎵 Usage

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

**`object(dummy,target)`**: require `dummy` object and `target` object, return new object with proper typing, does not modify original objects.

**`dummy`**: the key of this object is the key that you want, as for the value of the key, **simply use any value, except** `undefined` which bear special utility.

**`target`**: object that you want to remove excess members, this object must be subtype of `dummy` object, which mean must have all the keys exist in `dummy` object, unless the `dummy` key's value is `undefined`, it will tries to keep the key if it is available.

```ts
import { objExact } from 'object-exact'

// this will trigger typescript error: property b is missing.
// this is because `target` must bet subtype of `dummy`
console.log(objExact({ a: 1, b: 2 }, { a: 'hello' })) // { a:"hello" } and the type is { a: unknown, b: unknown }

// if you want to make a value optional
// then  let the `dummy` key's value be undefined, it will try to keep the key if it is available in `target`
console.log(objExact({ a: 1, b: undefined }, { a: 'hello', c: '!' })) // { a:"hello" } and the type is {a: string}
console.log(objExact({ a: 1, b: undefined }, { a: 'hello', b: 123, c: '!' })) // { a:"hello", b:123 } and the type is {a: string, b: number}
```
