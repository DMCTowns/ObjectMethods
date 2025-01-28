# Javascript Object Methods

A pair of methods useful when manipulating nested objects

## Installation

```
npm install @dmc-towns/object-methods
```

## Getting & setting properties

```typescript
import { setPropertyByAddress, getPropertyByAddress } from '@dmc-towns/object-methods'

const obj = {}

setPropertyByAddress(obj, 'a.b.c', 3)

console.log(obj)

// Output: { a: { b: { c: 3 } } }

let value = getPropertyByAddress(obj, 'a.b.c')

console.log(value)

// Outpput: 3
```

### Using a custom delimiter

```typescript
setPropertyByAddress(obj, 'a/b/c', 4, '/')

console.log(obj)

// Output: { a: { b: { c: 4 } } }
```

### Specifying a fallback value

```typescript
let value = getPropertyByAddress(obj, 'a.b.d')

console.log(obj)

// Output: null

value = getPropertyByAddress(obj, 'a.b.d', 1)

console.log(obj)

// Output: 1
```
