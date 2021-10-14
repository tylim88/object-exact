# object-exact

[![npm](https://img.shields.io/npm/v/object-exact)](https://www.npmjs.com/package/object-exact) [![GitHub](https://img.shields.io/github/license/tylim88/object-exact)](https://github.com/tylim88/object-exact/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/object-exact/pulls) [![tylim88](https://circleci.com/gh/tylim88/object-exact.svg?style=shield)](<[LINK](https://github.com/tylim88/object-exact#object-exact)>)

🐤 Remove excess object members.

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
	objExact({ a: 1, b: 2 }, { a: 'hello', b: 'world' as const, c: '!' })
) // { a:"hello", b:"world" } the type is { a:string, b:"world" }
```

return new object, does not modify original objects.
