This package is deprecated as it's too much effort to keep it in sync with the Node.js implementation. Just use [`util.isDeepStrictEqual()`](https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2).

---

# deep-strict-equal

> Test for deep equality - Node.js [`assert.deepStrictEqual()`](https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message) algorithm as a standalone module

## Install

```
$ npm install deep-strict-equal
```

## Usage

```js
const deepStrictEqual = require('deep-strict-equal');

deepStrictEqual({foo: {bar: [1, 2]}}, {foo: {bar: [1, 2]}});
//=> true

deepStrictEqual({foo: {bar: [1, 2]}}, {foo: {bar: [1, 4]}});
//=> false

deepStrictEqual({foo: {bar: 1}}, {foo: {bar: 1}});
//=> true

deepStrictEqual({foo: {bar: 1}}, {foo: {bar: '1'}});
//=> false
```
