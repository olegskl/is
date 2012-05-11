test('isArray()', function () {

    deepEqual(isArray([]), true, 'isArray([]) === true;');
    deepEqual(isArray([1, 2, 3]), true, 'isArray([1, 2, 3]) === true;');

    deepEqual(isArray(true), false, 'isArray(true) === false;');
    deepEqual(isArray(false), false, 'isArray(false) === false;');
    deepEqual(isArray(new Boolean()), false, 'isArray(new Boolean()) === false;');
    deepEqual(isArray(null), false, 'isArray(null) === false;');
    deepEqual(isArray({}), false, 'isArray({}) === false;');
    deepEqual(isArray({a: 1, b: 2}), false, 'isArray({a: 1, b: 2}) === false;');
    deepEqual(isArray(0), false, 'isArray(0) === false;');
    deepEqual(isArray(1), false, 'isArray(1) === false;');
    deepEqual(isArray(NaN), false, 'isArray(NaN) === false;');
    deepEqual(isArray(Math.sqrt(-1)), false, 'isArray(Math.sqrt(-1)) === false;');
    deepEqual(isArray(parseInt('abc')), false, 'isArray(parseInt("abc")) === false;');
    deepEqual(isArray(''), false, 'isArray("") === false;');
    deepEqual(isArray('abc'), false, 'isArray("abc") === false;');
    deepEqual(isArray(), false, 'isArray() === false;');
    deepEqual(isArray(void 0), false, 'isArray(void 0) === false;');
    deepEqual(isArray(undefined), false, 'isArray(undefined) === false;');
    deepEqual(isArray(function () {}), false, 'isArray(function () {}) === false;');

});

test('isNull()', function () {

    deepEqual(isNull(null), true, 'isNull(null) === true;');

    deepEqual(isNull(true), false, 'isNull(true) === false;');
    deepEqual(isNull(false), false, 'isNull(false) === false;');
    deepEqual(isNull(new Boolean()), false, 'isNull(new Boolean()) === false;');
    deepEqual(isNull([]), false, 'isNull([]) === false;');
    deepEqual(isNull([1, 2, 3]), false, 'isNull([1, 2, 3]) === false;');
    deepEqual(isNull({}), false, 'isNull({}) === false;');
    deepEqual(isNull({a: 1, b: 2}), false, 'isNull({a: 1, b: 2}) === false;');
    deepEqual(isNull(0), false, 'isNull(0) === false;');
    deepEqual(isNull(1), false, 'isNull(1) === false;');
    deepEqual(isNull(NaN), false, 'isNull(NaN) === false;');
    deepEqual(isNull(Math.sqrt(-1)), false, 'isNull(Math.sqrt(-1)) === false;');
    deepEqual(isNull(parseInt('abc')), false, 'isNull(parseInt("abc")) === false;');
    deepEqual(isNull(''), false, 'isNull("") === false;');
    deepEqual(isNull('abc'), false, 'isNull("abc") === false;');
    deepEqual(isNull(), false, 'isNull() === false;');
    deepEqual(isNull(void 0), false, 'isNull(void 0) === false;');
    deepEqual(isNull(undefined), false, 'isNull(undefined) === false;');
    deepEqual(isNull(function () {}), false, 'isNull(function () {}) === false;');

});

test('isUndefined()', function () {

    deepEqual(isUndefined(undefined), true, 'isUndefined(undefined) === true;');
    deepEqual(isUndefined(void 0), true, 'Void 0: isUndefined(void 0) === true;');
    deepEqual(isUndefined(), true, 'Missing argument: isUndefined() === true;');

    deepEqual(isUndefined(true), false, 'isUndefined(true) === false;');
    deepEqual(isUndefined(false), false, 'isUndefined(false) === false;');
    deepEqual(isUndefined(new Boolean()), false, 'isUndefined(new Boolean()) === false;');
    deepEqual(isUndefined(null), false, 'isUndefined(null) === false;');
    deepEqual(isUndefined([]), false, 'isUndefined([]) === false;');
    deepEqual(isUndefined([1, 2, 3]), false, 'isUndefined([1, 2, 3]) === false;');
    deepEqual(isUndefined({}), false, 'isUndefined({}) === false;');
    deepEqual(isUndefined({a: 1, b: 2}), false, 'isUndefined({a: 1, b: 2}) === false;');
    deepEqual(isUndefined(0), false, 'isUndefined(0) === false;');
    deepEqual(isUndefined(1), false, 'isUndefined(1) === false;');
    deepEqual(isUndefined(NaN), false, 'isUndefined(NaN) === false;');
    deepEqual(isUndefined(Math.sqrt(-1)), false, 'isUndefined(Math.sqrt(-1)) === false;');
    deepEqual(isUndefined(parseInt('abc')), false, 'isUndefined(parseInt("abc")) === false;');
    deepEqual(isUndefined(''), false, 'isUndefined("") === false;');
    deepEqual(isUndefined('abc'), false, 'isUndefined("abc") === false;');
    deepEqual(isUndefined(function () {}), false, 'isUndefined(function () {}) === false;');

});

test('isFunction()', function () {

    deepEqual(isFunction(function () {}), true, 'isFunction(function () {}) === true;');

    deepEqual(isFunction(true), false, 'isFunction(true) === false;');
    deepEqual(isFunction(false), false, 'isFunction(false) === false;');
    deepEqual(isFunction(new Boolean()), false, 'isFunction(new Boolean()) === false;');
    deepEqual(isFunction(null), false, 'isFunction(null) === false;');
    deepEqual(isFunction([]), false, 'isFunction([]) === false;');
    deepEqual(isFunction([1, 2, 3]), false, 'isFunction([1, 2, 3]) === false;');
    deepEqual(isFunction({}), false, 'isFunction({}) === false;');
    deepEqual(isFunction({a: 1, b: 2}), false, 'isFunction({a: 1, b: 2}) === false;');
    deepEqual(isFunction(0), false, 'isFunction(0) === false;');
    deepEqual(isFunction(1), false, 'isFunction(1) === false;');
    deepEqual(isFunction(NaN), false, 'isFunction(NaN) === false;');
    deepEqual(isFunction(Math.sqrt(-1)), false, 'isFunction(Math.sqrt(-1)) === false;');
    deepEqual(isFunction(parseInt('abc')), false, 'isFunction(parseInt("abc")) === false;');
    deepEqual(isFunction(''), false, 'isFunction("") === false;');
    deepEqual(isFunction('abc'), false, 'isFunction("abc") === false;');
    deepEqual(isFunction(), false, 'isFunction() === false;');
    deepEqual(isFunction(void 0), false, 'isFunction(void 0) === false;');
    deepEqual(isFunction(undefined), false, 'isFunction(undefined) === false;');

});

test('isNaN()', function () {

    deepEqual(isNaN(NaN), true, 'isNaN(NaN) === true;');
    deepEqual(isNaN(Math.sqrt(-1)), true, 'isNaN(Math.sqrt(-1)) === true;');
    deepEqual(isNaN(parseInt('abc')), true, 'isNaN(parseInt("abc")) === true;');

    deepEqual(isNaN(true), false, 'isNaN(true) === false;');
    deepEqual(isNaN(false), false, 'isNaN(false) === false;');
    deepEqual(isNaN(new Boolean()), false, 'isNaN(new Boolean()) === false;');
    deepEqual(isNaN(null), false, 'isNaN(null) === false;');
    deepEqual(isNaN([]), false, 'isNaN([]) === false;');
    deepEqual(isNaN([1, 2, 3]), false, 'isNaN([1, 2, 3]) === false;');
    deepEqual(isNaN({}), false, 'isNaN({}) === false;');
    deepEqual(isNaN({a: 1, b: 2}), false, 'isNaN({a: 1, b: 2}) === false;');
    deepEqual(isNaN(0), false, 'isNaN(0) === false;');
    deepEqual(isNaN(1), false, 'isNaN(1) === false;');
    deepEqual(isNaN(''), false, 'isNaN("") === false;');
    deepEqual(isNaN('abc'), false, 'isNaN("abc") === false;');
    deepEqual(isNaN(), false, 'isNaN() === false;');
    deepEqual(isNaN(void 0), false, 'isNaN(void 0) === false;');
    deepEqual(isNaN(undefined), false, 'isNaN(undefined) === false;');
    deepEqual(isNaN(function () {}), false, 'isNaN(function () {}) === false;');

});

test('isNumber()', function () {

    deepEqual(isNumber(0), true, 'isNumber(0) === true;');
    deepEqual(isNumber(1), true, 'isNumber(1) === true;');

    deepEqual(isNumber(true), false, 'isNumber(true) === false;');
    deepEqual(isNumber(false), false, 'isNumber(false) === false;');
    deepEqual(isNumber(new Boolean()), false, 'isNumber(new Boolean()) === false;');
    deepEqual(isNumber(null), false, 'isNumber(null) === false;');
    deepEqual(isNumber([]), false, 'isNumber([]) === false;');
    deepEqual(isNumber([1, 2, 3]), false, 'isNumber([1, 2, 3]) === false;');
    deepEqual(isNumber({}), false, 'isNumber({}) === false;');
    deepEqual(isNumber({a: 1, b: 2}), false, 'isNumber({a: 1, b: 2}) === false;');
    deepEqual(isNumber(NaN), false, 'isNumber(NaN) === false;');
    deepEqual(isNumber(Math.sqrt(-1)), false, 'isNumber(Math.sqrt(-1)) === false;');
    deepEqual(isNumber(parseInt('abc')), false, 'isNumber(parseInt("abc")) === false;');
    deepEqual(isNumber(''), false, 'isNumber("") === false;');
    deepEqual(isNumber('abc'), false, 'isNumber("abc") === false;');
    deepEqual(isNumber(), false, 'isNumber() === false;');
    deepEqual(isNumber(void 0), false, 'isNumber(void 0) === false;');
    deepEqual(isNumber(undefined), false, 'isNumber(undefined) === false;');
    deepEqual(isNumber(function () {}), false, 'isNumber(function () {}) === false;');

    // Adding tests for: http://stackoverflow.com/a/1830844/851498
    deepEqual(isNumber(' '), false, 'isNumber(" ") === false');
    deepEqual(isNumber('\t\t'), false, 'isNumber("\t\t") === false');
    deepEqual(isNumber('\n\r'), false, 'isNumber("\n\r") === false');
    deepEqual(isNumber(10.10), true, 'isNumber(10.10) === true');
    deepEqual(isNumber(10e5), true, 'isNumber(10e5) === true');
    deepEqual(isNumber(-1), true, 'isNumber(-1) === true');

});

test('isString()', function () {

    deepEqual(isString(''), true, 'isString("") === true;');
    deepEqual(isString('abc'), true, 'isString("abc") === true;');

    deepEqual(isString(true), false, 'isString(true) === false;');
    deepEqual(isString(false), false, 'isString(false) === false;');
    deepEqual(isString(new Boolean()), false, 'isString(new Boolean()) === false;');
    deepEqual(isString(null), false, 'isString(null) === false;');
    deepEqual(isString([]), false, 'isString([]) === false;');
    deepEqual(isString([1, 2, 3]), false, 'isString([1, 2, 3]) === false;');
    deepEqual(isString({}), false, 'isString({}) === false;');
    deepEqual(isString({a: 1, b: 2}), false, 'isString({a: 1, b: 2}) === false;');
    deepEqual(isString(0), false, 'isString(0) === false;');
    deepEqual(isString(1), false, 'isString(1) === false;');
    deepEqual(isString(NaN), false, 'isString(NaN) === false;');
    deepEqual(isString(Math.sqrt(-1)), false, 'isString(Math.sqrt(-1)) === false;');
    deepEqual(isString(parseInt('abc')), false, 'isString(parseInt("abc")) === false;');
    deepEqual(isString(), false, 'isString() === false;');
    deepEqual(isString(void 0), false, 'isString(void 0) === false;');
    deepEqual(isString(undefined), false, 'isString(undefined) === false;');
    deepEqual(isString(function () {}), false, 'isString(function () {}) === false;');

});

test('isBoolean()', function () {

    deepEqual(isBoolean(true), true, 'isBoolean(true) === true;');
    deepEqual(isBoolean(false), true, 'isBoolean(false) === true;');
    deepEqual(isBoolean(new Boolean()), true, 'isBoolean(new Boolean()) === true;');

    deepEqual(isBoolean(null), false, 'isBoolean(null) === false;');
    deepEqual(isBoolean([]), false, 'isBoolean([]) === false;');
    deepEqual(isBoolean([1, 2, 3]), false, 'isBoolean([1, 2, 3]) === false;');
    deepEqual(isBoolean({}), false, 'isBoolean({}) === false;');
    deepEqual(isBoolean({a: 1, b: 2}), false, 'isBoolean({a: 1, b: 2}) === false;');
    deepEqual(isBoolean(0), false, 'isBoolean(0) === false;');
    deepEqual(isBoolean(1), false, 'isBoolean(1) === false;');
    deepEqual(isBoolean(NaN), false, 'isBoolean(NaN) === false;');
    deepEqual(isBoolean(Math.sqrt(-1)), false, 'isBoolean(Math.sqrt(-1)) === false;');
    deepEqual(isBoolean(parseInt('abc')), false, 'isBoolean(parseInt("abc")) === false;');
    deepEqual(isBoolean(''), false, 'isBoolean("") === false;');
    deepEqual(isBoolean('abc'), false, 'isBoolean("abc") === false;');
    deepEqual(isBoolean(), false, 'isBoolean() === false;');
    deepEqual(isBoolean(void 0), false, 'isBoolean(void 0) === false;');
    deepEqual(isBoolean(undefined), false, 'isBoolean(undefined) === false;');
    deepEqual(isBoolean(function () {}), false, 'isBoolean(function () {}) === false;');

});

test('isObject()', function () {

    deepEqual(isObject({}), true, 'isObject({}) === true;');
    deepEqual(isObject({a: 1, b: 2}), true, 'isObject({a: 1, b: 2}) === true;');

    deepEqual(isObject(true), false, 'isObject(true) === false;');
    deepEqual(isObject(false), false, 'isObject(false) === false;');
    deepEqual(isObject(new Boolean()), false, 'isObject(new Boolean()) === false;');
    deepEqual(isObject(null), false, 'isObject(null) === false;');
    deepEqual(isObject([]), false, 'isObject([]) === false;');
    deepEqual(isObject([1, 2, 3]), false, 'isObject([1, 2, 3]) === false;');
    deepEqual(isObject(0), false, 'isObject(0) === false;');
    deepEqual(isObject(1), false, 'isObject(1) === false;');
    deepEqual(isObject(NaN), false, 'isObject(NaN) === false;');
    deepEqual(isObject(Math.sqrt(-1)), false, 'isObject(Math.sqrt(-1)) === false;');
    deepEqual(isObject(parseInt('abc')), false, 'isObject(parseInt("abc")) === false;');
    deepEqual(isObject(''), false, 'isObject("") === false;');
    deepEqual(isObject('abc'), false, 'isObject("abc") === false;');
    deepEqual(isObject(), false, 'isObject() === false;');
    deepEqual(isObject(void 0), false, 'isObject(void 0) === false;');
    deepEqual(isObject(undefined), false, 'isObject(undefined) === false;');
    deepEqual(isObject(function () {}), false, 'isObject(function () {}) === false;');

});

