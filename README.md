# Welcome to get-ecmascript-type-of 👋
`get-ecmascript-type-of` is a simple package to get the type of a value.

## Usage
```javascript
const assert = require('node:assert')
const getTypeOf = require('get-ecmascript-type-of')

let declaredButUndefinedVariable
const object = { a: 1 }

assert(getTypeOf(37) === "number")
assert(getTypeOf(3.14)=== "number")
assert(getTypeOf(42) === "number")
assert(getTypeOf(Math.LN2) === "number")
assert(getTypeOf(Infinity) === "number")
assert(getTypeOf(NaN) === "number")
assert(getTypeOf(NaN) === "number")
assert(getTypeOf(Number("1")) === "number")
assert(getTypeOf(Number("shoe")) === "number")
assert(getTypeOf(42n) === "bigint")
assert(getTypeOf("") === "string")
assert(getTypeOf("bla") === "string")
assert(getTypeOf(`template literal`) === "string")
assert(getTypeOf("1") === "string")
assert(getTypeOf(getTypeOf(1)) === "string")
assert(getTypeOf(String(1)) === "string")
assert(getTypeOf(true) === "boolean")
assert(getTypeOf(false) === "boolean")
assert(getTypeOf(Boolean(1)) === "boolean")
assert(getTypeOf(!!1) === "boolean")
assert(getTypeOf(Symbol()) === "symbol")
assert(getTypeOf(Symbol("foo")) === "symbol")
assert(getTypeOf(Symbol.iterator) === "symbol")
assert(getTypeOf(undefined) === "undefined")
assert(getTypeOf(declaredButUndefinedVariable) === "undefined")
assert(getTypeOf(object.undeclaredProperty) === "undefined") //this does not throw an error which is why you should use get-member (even if it is an april fools joke it is still useful)
assert(getTypeOf(object) === "object")
assert(getTypeOf(null) === "object")
assert(getTypeOf(process) === "object")
assert(getTypeOf(["foo", "bar", "baz", "qux"]) === "object") // use is-array package or Array.isArray to figure out if something is an array
assert(getTypeOf(new Date()) === "object")
assert(getTypeOf(/regex/) === "object")
assert(getTypeOf(new Boolean(true)) === "object")
assert(getTypeOf(new Number(1)) === "object")
assert(getTypeOf(new String("abc")) === "object")
assert(getTypeOf(function() {}) === "function")
assert(getTypeOf(() => {}) === "function")
assert(getTypeOf(class {}) === "function")
assert(getTypeOf(Math.abs) === "function")
```