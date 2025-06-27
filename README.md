## Overview

Local storage with type.

## Installation

```
npm i local-storage-with-type -D
```

## Usage

```js
import 'local-storage-with-type'

const getType = v => Object.prototype.toString.call(v).slice(8, -1)

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

console.log(stringValue, getType(stringValue))
console.log(numberValue, getType(numberValue))
console.log(booleanValue, getType(booleanValue))
console.log(nullValue, getType(nullValue))
console.log(undefinedValue, getType(undefinedValue))
console.log(bigintValue, getType(bigintValue))
console.log(arrayValue, getType(arrayValue))
console.log(objectValue, getType(objectValue))
console.log(dateValue, getType(dateValue))
console.log(regexpValue, getType(regexpValue))
```
