## Overview

Local storage with type.

## Installation

```
npm i local-storage-with-type
```

## Usage

### import

```js
import 'local-storage-with-type'
```

### setItem

```js
localStorage.setItem('string', 'foo')
localStorage.setItem('number', 123)
localStorage.setItem('boolean', true)
localStorage.setItem('null', null)
localStorage.setItem('undefined', undefined)
localStorage.setItem('bigint', 10n)
localStorage.setItem('array', ['foo', { bar: 'baz' }, null])
localStorage.setItem('object', { foo: 'bar', baz: [1, true] })
localStorage.setItem('date', new Date())
localStorage.setItem('regexp', /foo/i)
```

### getItem
```js
const getType = v => Object.prototype.toString.call(v).slice(8, -1)

const stringValue = localStorage.getItem('string')
const numberValue = localStorage.getItem('number')
const booleanValue = localStorage.getItem('boolean')
const nullValue = localStorage.getItem('null')
const undefinedValue = localStorage.getItem('undefined')
const bigintValue = localStorage.getItem('bigint')
const arrayValue = localStorage.getItem('array')
const objectValue = localStorage.getItem('object')
const dateValue = localStorage.getItem('date')
const regexpValue = localStorage.getItem('regexp')

console.log(stringValue, getType(stringValue)) // foo String
console.log(numberValue, getType(numberValue)) // 123 'Number'
console.log(booleanValue, getType(booleanValue)) // true 'Boolean'
console.log(nullValue, getType(nullValue)) // null 'Null'
console.log(undefinedValue, getType(undefinedValue)) // undefined 'Undefined'
console.log(bigintValue, getType(bigintValue)) // 10n 'BigInt'
console.log(arrayValue, getType(arrayValue)) // ['foo', {…}, null] 'Array'
console.log(objectValue, getType(objectValue)) // {foo: 'bar', baz: Array(2)} 'Object'
console.log(dateValue, getType(dateValue)) // Fri Jun 27 2025 19:09:43 GMT+0800 (中国标准时间) 'Date'
console.log(regexpValue, getType(regexpValue)) // /foo/i 'RegExp'
```

### size

The maximum capacity of local storage space is 5MB, which is 5 * 1024 * 1024 characters. This function returns the ratio of the total number of characters to the maximum number of characters, with a maximum value of 1

```js
localStorage.size() // 0.00006961822509765625
```
