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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isArray(new Date()), false, 'isArray(new Date()) === false;');
    deepEqual(isArray(new RegExp('abc')), false, 'isArray(new RegExp("abc")) === false;');
    deepEqual(isArray(/abc/), false, 'isArray(/abc/) === false;');

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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isNull(new Date()), false, 'isNull(new Date()) === false;');
    deepEqual(isNull(new RegExp('abc')), false, 'isNull(new RegExp("abc")) === false;');
    deepEqual(isNull(/abc/), false, 'isNull(/abc/) === false;');

});

test('isUndefined()', function () {

    deepEqual(isUndefined(undefined), true, 'isUndefined(undefined) === true;');
    deepEqual(isUndefined(void 0), true, 'isUndefined(void 0) === true;');
    deepEqual(isUndefined(), true, 'isUndefined() === true;');

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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isUndefined(new Date()), false, 'isUndefined(new Date()) === false;');
    deepEqual(isUndefined(new RegExp('abc')), false, 'isUndefined(new RegExp("abc")) === false;');
    deepEqual(isUndefined(/abc/), false, 'isUndefined(/abc/) === false;');

});

test('isDefined()', function () {

    deepEqual(isDefined(undefined), false, 'isDefined(undefined) === false;');
    deepEqual(isDefined(void 0), false, 'isDefined(void 0) === false;');
    deepEqual(isDefined(), false, 'isDefined() === false;');

    deepEqual(isDefined(true), true, 'isDefined(true) === true;');
    deepEqual(isDefined(false), true, 'isDefined(false) === true;');
    deepEqual(isDefined(new Boolean()), true, 'isDefined(new Boolean()) === true;');
    deepEqual(isDefined(null), true, 'isDefined(null) === true;');
    deepEqual(isDefined([]), true, 'isDefined([]) === true;');
    deepEqual(isDefined([1, 2, 3]), true, 'isDefined([1, 2, 3]) === true;');
    deepEqual(isDefined({}), true, 'isDefined({}) === true;');
    deepEqual(isDefined({a: 1, b: 2}), true, 'isDefined({a: 1, b: 2}) === true;');
    deepEqual(isDefined(0), true, 'isDefined(0) === true;');
    deepEqual(isDefined(1), true, 'isDefined(1) === true;');
    deepEqual(isDefined(NaN), true, 'isDefined(NaN) === true;');
    deepEqual(isDefined(Math.sqrt(-1)), true, 'isDefined(Math.sqrt(-1)) === true;');
    deepEqual(isDefined(parseInt('abc')), true, 'isDefined(parseInt("abc")) === true;');
    deepEqual(isDefined(''), true, 'isDefined("") === true;');
    deepEqual(isDefined('abc'), true, 'isDefined("abc") === true;');
    deepEqual(isDefined(function () {}), true, 'isDefined(function () {}) === true;');
    // Test coverage for issue #2: https://github.com/olegskl/isjs/issues/2
    deepEqual(isDefined(new Date()), true, 'isDefined(new Date()) === true;');
    deepEqual(isDefined(new RegExp('abc')), true, 'isDefined(new RegExp("abc")) === true;');
    deepEqual(isDefined(/abc/), true, 'isDefined(/abc/) === true;');

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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isFunction(new Date()), false, 'isFunction(new Date()) === false;');
    deepEqual(isFunction(new RegExp('abc')), false, 'isFunction(new RegExp("abc")) === false;');
    deepEqual(isFunction(/abc/), false, 'isFunction(/abc/) === false;');

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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isNaN(new Date()), false, 'isNaN(new Date()) === false;');
    deepEqual(isNaN(new RegExp('abc')), false, 'isNaN(new RegExp("abc")) === false;');
    deepEqual(isNaN(/abc/), false, 'isNaN(/abc/) === false;');

});

test('isNumber()', function () {

    deepEqual(isNumber(0), true, 'isNumber(0) === true;');
    deepEqual(isNumber(1), true, 'isNumber(1) === true;');
    // Test coverage for: http://stackoverflow.com/a/1830844/851498
    deepEqual(isNumber(-1), true, 'isNumber(-1) === true');
    deepEqual(isNumber(10.10), true, 'isNumber(10.10) === true');
    deepEqual(isNumber(10e5), true, 'isNumber(10e5) === true');

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
    // Test coverage for: http://stackoverflow.com/a/1830844/851498
    deepEqual(isNumber(' '), false, 'isNumber(" ") === false');
    deepEqual(isNumber('\t\t'), false, 'isNumber("\\t\\t") === false');
    deepEqual(isNumber('\n\r'), false, 'isNumber("\\n\\r") === false');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isNumber(new Date()), false, 'isNumber(new Date()) === false;');
    deepEqual(isNumber(new RegExp('abc')), false, 'isNumber(new RegExp("abc")) === false;');
    deepEqual(isNumber(/abc/), false, 'isNumber(/abc/) === false;');

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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isString(new Date()), false, 'isString(new Date()) === false;');
    deepEqual(isString(new RegExp('abc')), false, 'isString(new RegExp("abc")) === false;');
    deepEqual(isString(/abc/), false, 'isString(/abc/) === false;');

});

test('isBoolean()', function () {

    deepEqual(isBoolean(true), true, 'isBoolean(true) === true;');
    deepEqual(isBoolean(false), true, 'isBoolean(false) === true;');
    
    // A boolean that is neither true nor false is rejected since 0.2.0:
    deepEqual(isBoolean(new Boolean()), false, 'isBoolean(new Boolean()) === false;');
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
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isBoolean(new Date()), false, 'isBoolean(new Date()) === false;');
    deepEqual(isBoolean(new RegExp('abc')), false, 'isBoolean(new RegExp("abc")) === false;');
    deepEqual(isBoolean(/abc/), false, 'isBoolean(/abc/) === false;');

});

test('isObject()', function () {

    deepEqual(isObject(function () {}), true, 'isObject(function () {}) === true;');
    deepEqual(isObject([]), true, 'isObject([]) === true;');
    deepEqual(isObject([1, 2, 3]), true, 'isObject([1, 2, 3]) === true;');
    deepEqual(isObject({}), true, 'isObject({}) === true;');
    deepEqual(isObject({a: 1, b: 2}), true, 'isObject({a: 1, b: 2}) === true;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(isObject(new Date()), true, 'isObject(new Date()) === true;');
    deepEqual(isObject(new RegExp('abc')), true, 'isObject(new RegExp("abc")) === true;');
    deepEqual(isObject(/abc/), true, 'isObject(/abc/) === true;');
    if (window) { // window is not available on server
        deepEqual(isObject(window), true, 'isObject(window) === true;');
    }
    // A boolean that is neither true nor false is an Object since 0.2.0:
    deepEqual(isObject(new Boolean()), true, 'isObject(new Boolean()) === true;');

    deepEqual(isObject(true), false, 'isObject(true) === false;');
    deepEqual(isObject(false), false, 'isObject(false) === false;');
    deepEqual(isObject(null), false, 'isObject(null) === false;');
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

});

