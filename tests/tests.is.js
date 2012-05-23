test('is.Array()', function () {

    deepEqual(is.Array([]), true, 'is.Array([]) === true;');
    deepEqual(is.Array([1, 2, 3]), true, 'is.Array([1, 2, 3]) === true;');

    deepEqual(is.Array(true), false, 'is.Array(true) === false;');
    deepEqual(is.Array(false), false, 'is.Array(false) === false;');
    deepEqual(is.Array(new Boolean()), false, 'is.Array(new Boolean()) === false;');
    deepEqual(is.Array(null), false, 'is.Array(null) === false;');
    deepEqual(is.Array({}), false, 'is.Array({}) === false;');
    deepEqual(is.Array({a: 1, b: 2}), false, 'is.Array({a: 1, b: 2}) === false;');
    deepEqual(is.Array(0), false, 'is.Array(0) === false;');
    deepEqual(is.Array(1), false, 'is.Array(1) === false;');
    deepEqual(is.Array(NaN), false, 'is.Array(NaN) === false;');
    deepEqual(is.Array(Math.sqrt(-1)), false, 'is.Array(Math.sqrt(-1)) === false;');
    deepEqual(is.Array(parseInt('abc')), false, 'is.Array(parseInt("abc")) === false;');
    deepEqual(is.Array(''), false, 'is.Array("") === false;');
    deepEqual(is.Array('abc'), false, 'is.Array("abc") === false;');
    deepEqual(is.Array(), false, 'is.Array() === false;');
    deepEqual(is.Array(void 0), false, 'is.Array(void 0) === false;');
    deepEqual(is.Array(undefined), false, 'is.Array(undefined) === false;');
    deepEqual(is.Array(function () {}), false, 'is.Array(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Array(new Date()), false, 'is.Array(new Date()) === false;');
    deepEqual(is.Array(new RegExp('abc')), false, 'is.Array(new RegExp("abc")) === false;');
    deepEqual(is.Array(/abc/), false, 'is.Array(/abc/) === false;');

});

test('is.Null()', function () {

    deepEqual(is.Null(null), true, 'is.Null(null) === true;');

    deepEqual(is.Null(true), false, 'is.Null(true) === false;');
    deepEqual(is.Null(false), false, 'is.Null(false) === false;');
    deepEqual(is.Null(new Boolean()), false, 'is.Null(new Boolean()) === false;');
    deepEqual(is.Null([]), false, 'is.Null([]) === false;');
    deepEqual(is.Null([1, 2, 3]), false, 'is.Null([1, 2, 3]) === false;');
    deepEqual(is.Null({}), false, 'is.Null({}) === false;');
    deepEqual(is.Null({a: 1, b: 2}), false, 'is.Null({a: 1, b: 2}) === false;');
    deepEqual(is.Null(0), false, 'is.Null(0) === false;');
    deepEqual(is.Null(1), false, 'is.Null(1) === false;');
    deepEqual(is.Null(NaN), false, 'is.Null(NaN) === false;');
    deepEqual(is.Null(Math.sqrt(-1)), false, 'is.Null(Math.sqrt(-1)) === false;');
    deepEqual(is.Null(parseInt('abc')), false, 'is.Null(parseInt("abc")) === false;');
    deepEqual(is.Null(''), false, 'is.Null("") === false;');
    deepEqual(is.Null('abc'), false, 'is.Null("abc") === false;');
    deepEqual(is.Null(), false, 'is.Null() === false;');
    deepEqual(is.Null(void 0), false, 'is.Null(void 0) === false;');
    deepEqual(is.Null(undefined), false, 'is.Null(undefined) === false;');
    deepEqual(is.Null(function () {}), false, 'is.Null(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Null(new Date()), false, 'is.Null(new Date()) === false;');
    deepEqual(is.Null(new RegExp('abc')), false, 'is.Null(new RegExp("abc")) === false;');
    deepEqual(is.Null(/abc/), false, 'is.Null(/abc/) === false;');

});

test('is.Undefined()', function () {

    deepEqual(is.Undefined(undefined), true, 'is.Undefined(undefined) === true;');
    deepEqual(is.Undefined(void 0), true, 'is.Undefined(void 0) === true;');
    deepEqual(is.Undefined(), true, 'is.Undefined() === true;');

    deepEqual(is.Undefined(true), false, 'is.Undefined(true) === false;');
    deepEqual(is.Undefined(false), false, 'is.Undefined(false) === false;');
    deepEqual(is.Undefined(new Boolean()), false, 'is.Undefined(new Boolean()) === false;');
    deepEqual(is.Undefined(null), false, 'is.Undefined(null) === false;');
    deepEqual(is.Undefined([]), false, 'is.Undefined([]) === false;');
    deepEqual(is.Undefined([1, 2, 3]), false, 'is.Undefined([1, 2, 3]) === false;');
    deepEqual(is.Undefined({}), false, 'is.Undefined({}) === false;');
    deepEqual(is.Undefined({a: 1, b: 2}), false, 'is.Undefined({a: 1, b: 2}) === false;');
    deepEqual(is.Undefined(0), false, 'is.Undefined(0) === false;');
    deepEqual(is.Undefined(1), false, 'is.Undefined(1) === false;');
    deepEqual(is.Undefined(NaN), false, 'is.Undefined(NaN) === false;');
    deepEqual(is.Undefined(Math.sqrt(-1)), false, 'is.Undefined(Math.sqrt(-1)) === false;');
    deepEqual(is.Undefined(parseInt('abc')), false, 'is.Undefined(parseInt("abc")) === false;');
    deepEqual(is.Undefined(''), false, 'is.Undefined("") === false;');
    deepEqual(is.Undefined('abc'), false, 'is.Undefined("abc") === false;');
    deepEqual(is.Undefined(function () {}), false, 'is.Undefined(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Undefined(new Date()), false, 'is.Undefined(new Date()) === false;');
    deepEqual(is.Undefined(new RegExp('abc')), false, 'is.Undefined(new RegExp("abc")) === false;');
    deepEqual(is.Undefined(/abc/), false, 'is.Undefined(/abc/) === false;');

});

test('is.Function()', function () {

    deepEqual(is.Function(function () {}), true, 'is.Function(function () {}) === true;');

    deepEqual(is.Function(true), false, 'is.Function(true) === false;');
    deepEqual(is.Function(false), false, 'is.Function(false) === false;');
    deepEqual(is.Function(new Boolean()), false, 'is.Function(new Boolean()) === false;');
    deepEqual(is.Function(null), false, 'is.Function(null) === false;');
    deepEqual(is.Function([]), false, 'is.Function([]) === false;');
    deepEqual(is.Function([1, 2, 3]), false, 'is.Function([1, 2, 3]) === false;');
    deepEqual(is.Function({}), false, 'is.Function({}) === false;');
    deepEqual(is.Function({a: 1, b: 2}), false, 'is.Function({a: 1, b: 2}) === false;');
    deepEqual(is.Function(0), false, 'is.Function(0) === false;');
    deepEqual(is.Function(1), false, 'is.Function(1) === false;');
    deepEqual(is.Function(NaN), false, 'is.Function(NaN) === false;');
    deepEqual(is.Function(Math.sqrt(-1)), false, 'is.Function(Math.sqrt(-1)) === false;');
    deepEqual(is.Function(parseInt('abc')), false, 'is.Function(parseInt("abc")) === false;');
    deepEqual(is.Function(''), false, 'is.Function("") === false;');
    deepEqual(is.Function('abc'), false, 'is.Function("abc") === false;');
    deepEqual(is.Function(), false, 'is.Function() === false;');
    deepEqual(is.Function(void 0), false, 'is.Function(void 0) === false;');
    deepEqual(is.Function(undefined), false, 'is.Function(undefined) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Function(new Date()), false, 'is.Function(new Date()) === false;');
    deepEqual(is.Function(new RegExp('abc')), false, 'is.Function(new RegExp("abc")) === false;');
    deepEqual(is.Function(/abc/), false, 'is.Function(/abc/) === false;');

});

test('is.NaN()', function () {

    deepEqual(is.NaN(NaN), true, 'is.NaN(NaN) === true;');
    deepEqual(is.NaN(Math.sqrt(-1)), true, 'is.NaN(Math.sqrt(-1)) === true;');
    deepEqual(is.NaN(parseInt('abc')), true, 'is.NaN(parseInt("abc")) === true;');

    deepEqual(is.NaN(true), false, 'is.NaN(true) === false;');
    deepEqual(is.NaN(false), false, 'is.NaN(false) === false;');
    deepEqual(is.NaN(new Boolean()), false, 'is.NaN(new Boolean()) === false;');
    deepEqual(is.NaN(null), false, 'is.NaN(null) === false;');
    deepEqual(is.NaN([]), false, 'is.NaN([]) === false;');
    deepEqual(is.NaN([1, 2, 3]), false, 'is.NaN([1, 2, 3]) === false;');
    deepEqual(is.NaN({}), false, 'is.NaN({}) === false;');
    deepEqual(is.NaN({a: 1, b: 2}), false, 'is.NaN({a: 1, b: 2}) === false;');
    deepEqual(is.NaN(0), false, 'is.NaN(0) === false;');
    deepEqual(is.NaN(1), false, 'is.NaN(1) === false;');
    deepEqual(is.NaN(''), false, 'is.NaN("") === false;');
    deepEqual(is.NaN('abc'), false, 'is.NaN("abc") === false;');
    deepEqual(is.NaN(), false, 'is.NaN() === false;');
    deepEqual(is.NaN(void 0), false, 'is.NaN(void 0) === false;');
    deepEqual(is.NaN(undefined), false, 'is.NaN(undefined) === false;');
    deepEqual(is.NaN(function () {}), false, 'is.NaN(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.NaN(new Date()), false, 'is.NaN(new Date()) === false;');
    deepEqual(is.NaN(new RegExp('abc')), false, 'is.NaN(new RegExp("abc")) === false;');
    deepEqual(is.NaN(/abc/), false, 'is.NaN(/abc/) === false;');

});

test('is.Number()', function () {

    deepEqual(is.Number(0), true, 'is.Number(0) === true;');
    deepEqual(is.Number(1), true, 'is.Number(1) === true;');
    // Test coverage for: http://stackoverflow.com/a/1830844/851498
    deepEqual(is.Number(-1), true, 'is.Number(-1) === true');
    deepEqual(is.Number(10.10), true, 'is.Number(10.10) === true');
    deepEqual(is.Number(10e5), true, 'is.Number(10e5) === true');

    deepEqual(is.Number(true), false, 'is.Number(true) === false;');
    deepEqual(is.Number(false), false, 'is.Number(false) === false;');
    deepEqual(is.Number(new Boolean()), false, 'is.Number(new Boolean()) === false;');
    deepEqual(is.Number(null), false, 'is.Number(null) === false;');
    deepEqual(is.Number([]), false, 'is.Number([]) === false;');
    deepEqual(is.Number([1, 2, 3]), false, 'is.Number([1, 2, 3]) === false;');
    deepEqual(is.Number({}), false, 'is.Number({}) === false;');
    deepEqual(is.Number({a: 1, b: 2}), false, 'is.Number({a: 1, b: 2}) === false;');
    deepEqual(is.Number(NaN), false, 'is.Number(NaN) === false;');
    deepEqual(is.Number(Math.sqrt(-1)), false, 'is.Number(Math.sqrt(-1)) === false;');
    deepEqual(is.Number(parseInt('abc')), false, 'is.Number(parseInt("abc")) === false;');
    deepEqual(is.Number(''), false, 'is.Number("") === false;');
    deepEqual(is.Number('abc'), false, 'is.Number("abc") === false;');
    deepEqual(is.Number(), false, 'is.Number() === false;');
    deepEqual(is.Number(void 0), false, 'is.Number(void 0) === false;');
    deepEqual(is.Number(undefined), false, 'is.Number(undefined) === false;');
    deepEqual(is.Number(function () {}), false, 'is.Number(function () {}) === false;');
    // Test coverage for: http://stackoverflow.com/a/1830844/851498
    deepEqual(is.Number(' '), false, 'is.Number(" ") === false');
    deepEqual(is.Number('\t\t'), false, 'is.Number("\\t\\t") === false');
    deepEqual(is.Number('\n\r'), false, 'is.Number("\\n\\r") === false');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Number(new Date()), false, 'is.Number(new Date()) === false;');
    deepEqual(is.Number(new RegExp('abc')), false, 'is.Number(new RegExp("abc")) === false;');
    deepEqual(is.Number(/abc/), false, 'is.Number(/abc/) === false;');

});

test('is.String()', function () {

    deepEqual(is.String(''), true, 'is.String("") === true;');
    deepEqual(is.String('abc'), true, 'is.String("abc") === true;');

    deepEqual(is.String(true), false, 'is.String(true) === false;');
    deepEqual(is.String(false), false, 'is.String(false) === false;');
    deepEqual(is.String(new Boolean()), false, 'is.String(new Boolean()) === false;');
    deepEqual(is.String(null), false, 'is.String(null) === false;');
    deepEqual(is.String([]), false, 'is.String([]) === false;');
    deepEqual(is.String([1, 2, 3]), false, 'is.String([1, 2, 3]) === false;');
    deepEqual(is.String({}), false, 'is.String({}) === false;');
    deepEqual(is.String({a: 1, b: 2}), false, 'is.String({a: 1, b: 2}) === false;');
    deepEqual(is.String(0), false, 'is.String(0) === false;');
    deepEqual(is.String(1), false, 'is.String(1) === false;');
    deepEqual(is.String(NaN), false, 'is.String(NaN) === false;');
    deepEqual(is.String(Math.sqrt(-1)), false, 'is.String(Math.sqrt(-1)) === false;');
    deepEqual(is.String(parseInt('abc')), false, 'is.String(parseInt("abc")) === false;');
    deepEqual(is.String(), false, 'is.String() === false;');
    deepEqual(is.String(void 0), false, 'is.String(void 0) === false;');
    deepEqual(is.String(undefined), false, 'is.String(undefined) === false;');
    deepEqual(is.String(function () {}), false, 'is.String(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.String(new Date()), false, 'is.String(new Date()) === false;');
    deepEqual(is.String(new RegExp('abc')), false, 'is.String(new RegExp("abc")) === false;');
    deepEqual(is.String(/abc/), false, 'is.String(/abc/) === false;');

});

test('is.Boolean()', function () {

    deepEqual(is.Boolean(true), true, 'is.Boolean(true) === true;');
    deepEqual(is.Boolean(false), true, 'is.Boolean(false) === true;');
    
    // A boolean that is neither true nor false is rejected since 0.2.0:
    deepEqual(is.Boolean(new Boolean()), false, 'is.Boolean(new Boolean()) === false;');
    deepEqual(is.Boolean(null), false, 'is.Boolean(null) === false;');
    deepEqual(is.Boolean([]), false, 'is.Boolean([]) === false;');
    deepEqual(is.Boolean([1, 2, 3]), false, 'is.Boolean([1, 2, 3]) === false;');
    deepEqual(is.Boolean({}), false, 'is.Boolean({}) === false;');
    deepEqual(is.Boolean({a: 1, b: 2}), false, 'is.Boolean({a: 1, b: 2}) === false;');
    deepEqual(is.Boolean(0), false, 'is.Boolean(0) === false;');
    deepEqual(is.Boolean(1), false, 'is.Boolean(1) === false;');
    deepEqual(is.Boolean(NaN), false, 'is.Boolean(NaN) === false;');
    deepEqual(is.Boolean(Math.sqrt(-1)), false, 'is.Boolean(Math.sqrt(-1)) === false;');
    deepEqual(is.Boolean(parseInt('abc')), false, 'is.Boolean(parseInt("abc")) === false;');
    deepEqual(is.Boolean(''), false, 'is.Boolean("") === false;');
    deepEqual(is.Boolean('abc'), false, 'is.Boolean("abc") === false;');
    deepEqual(is.Boolean(), false, 'is.Boolean() === false;');
    deepEqual(is.Boolean(void 0), false, 'is.Boolean(void 0) === false;');
    deepEqual(is.Boolean(undefined), false, 'is.Boolean(undefined) === false;');
    deepEqual(is.Boolean(function () {}), false, 'is.Boolean(function () {}) === false;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Boolean(new Date()), false, 'is.Boolean(new Date()) === false;');
    deepEqual(is.Boolean(new RegExp('abc')), false, 'is.Boolean(new RegExp("abc")) === false;');
    deepEqual(is.Boolean(/abc/), false, 'is.Boolean(/abc/) === false;');

});

test('is.Object()', function () {

    deepEqual(is.Object(function () {}), true, 'is.Object(function () {}) === true;');
    deepEqual(is.Object([]), true, 'is.Object([]) === true;');
    deepEqual(is.Object([1, 2, 3]), true, 'is.Object([1, 2, 3]) === true;');
    deepEqual(is.Object({}), true, 'is.Object({}) === true;');
    deepEqual(is.Object({a: 1, b: 2}), true, 'is.Object({a: 1, b: 2}) === true;');
    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    deepEqual(is.Object(new Date()), true, 'is.Object(new Date()) === true;');
    deepEqual(is.Object(new RegExp('abc')), true, 'is.Object(new RegExp("abc")) === true;');
    deepEqual(is.Object(/abc/), true, 'is.Object(/abc/) === true;');
    if (window) { // window is not available on server
        deepEqual(is.Object(window), true, 'is.Object(window) === true;');
    }
    // A boolean that is neither true nor false is an Object since 0.2.0:
    deepEqual(is.Object(new Boolean()), true, 'is.Object(new Boolean()) === true;');

    deepEqual(is.Object(true), false, 'is.Object(true) === false;');
    deepEqual(is.Object(false), false, 'is.Object(false) === false;');
    deepEqual(is.Object(null), false, 'is.Object(null) === false;');
    deepEqual(is.Object(0), false, 'is.Object(0) === false;');
    deepEqual(is.Object(1), false, 'is.Object(1) === false;');
    deepEqual(is.Object(NaN), false, 'is.Object(NaN) === false;');
    deepEqual(is.Object(Math.sqrt(-1)), false, 'is.Object(Math.sqrt(-1)) === false;');
    deepEqual(is.Object(parseInt('abc')), false, 'is.Object(parseInt("abc")) === false;');
    deepEqual(is.Object(''), false, 'is.Object("") === false;');
    deepEqual(is.Object('abc'), false, 'is.Object("abc") === false;');
    deepEqual(is.Object(), false, 'is.Object() === false;');
    deepEqual(is.Object(void 0), false, 'is.Object(void 0) === false;');
    deepEqual(is.Object(undefined), false, 'is.Object(undefined) === false;');

});

