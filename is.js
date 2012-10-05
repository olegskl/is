/**
 * @license MIT license.
 *    Portions of is.js are inspired or borrowed from Underscore,
 *    which is (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.,
 *    and is freely distributable under the MIT license.
 * @fileOverview Introduces a global object "is" with type checking functions.
 * @author Oleg Sklyanchuk
 * @version 0.5.0
 */

// The root object represents "window" in the browser,
// and "global" on the server:
(function (root) {

    // ECMAScript 5 strict mode:
    'use strict';

    /**
     * A shortcut to Object.prototype.toString method.
     * @private
     */

    var toString = Object.prototype.toString;

    /**
     * A shortcut to the global object "is".
     * @private
     */

    var is = root.is = {};

    /**
     * Determines if a variable is an array.
     * Defaults to native Array.is.Array implementation if it's available.
     *
     * @example is.Array([]); // true
     * @example is.Array([1, 2, 3]); // true
     * @example is.Array({a: 1, b: 2, c: 3}); // false
     * @example is.Array('abc'); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is an array, FALSE otherwise.
     */

    is.Array = Array.isArray || function (variable) {
        return toString.call(variable) === '[object Array]';
    };

    /**
     * Determines if a variable is null.
     *
     * @example is.Null(null); // true
     * @example is.Null(false); // false
     * @example is.Null(undefined); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is null, FALSE otherwise.
     */

    is.Null = function (variable) {
        return variable === null;
    };

    /**
     * Determines if a variable is undefined.
     *
     * @example is.Undefined(); // true
     * @example is.Undefined(undefined); // true
     * @example is.Undefined(void 0); // true
     * @example var x; is.Undefined(x); // true
     * @example var x = 1; is.Undefined(x); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is undefined, FALSE otherwise.
     */

    is.Undefined = function (variable) {
        return variable === void 0;
    };

    /**
     * Determines if a variable is NOT undefined.
     *
     * This is helpful to avoid mind-bending double negation constructs such as 
     * if (!is.Undefined(x)) {}
     *
     * @example is.Defined(); // false
     * @example is.Defined(undefined); // false
     * @example is.Defined(void 0); // false
     * @example var x; is.Defined(x); // false
     * @example var x = 1; is.Defined(x); // true
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} FALSE if the variable is undefined, TRUE otherwise.
     */

    is.Defined = function (variable) {
        return variable !== void 0;
    };

    /**
     * Determines if a variable is a function.
     *
     * @example is.Function(function () {}); // true
     * @example is.Function({foo: 'bar'}); // false
     * @example is.Function(Date); // true (Date is a Function)
     * @example is.Function(new Date()); // false (new Date(); returns Object)
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a function, FALSE otherwise.
     */

    is.Function = function (variable) {
        return typeof variable === 'function';
    };

    /**
     * Determines if a variable is NaN.
     * Overrides the native is.NaN implementation due to its inconsistencies.
     *
     * @example is.NaN(NaN); // true
     * @example is.NaN(Math.sqrt(-1)); // true
     * @example is.NaN(parseInt('abc')); // true
     * @example is.NaN(0); // false
     * @example is.NaN('abc'); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is NaN, FALSE otherwise.
     */

    is.NaN = function (variable) {
        // NaN is the only value for which "===" is not reflexive:
        return variable !== variable;
    };

    /**
     * Determines if a variable is a number (NaN rejected as non-number).
     *
     * @example is.Number(12); // true
     * @example is.Number('12'); // false
     * @example is.Number(NaN); // false (NaN rejected)
     * @example is.Number(Math.sqrt(-1)); // false (NaN rejected)
     * @example is.Number(parseInt('abc')); // false (NaN rejected)
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a number, FALSE otherwise.
     */

    is.Number = function (variable) {
        // Checking for NaN first, same as is.NaN() implementation:
        return variable === variable &&
            typeof variable === 'number';
    };

    /**
     * Determines if a variable is a string.
     *
     * @example is.String('abc'); // true
     * @example is.String(''); // true
     * @example is.String(123); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a string, FALSE otherwise.
     */

    is.String = function (variable) {
        return typeof variable === 'string';
    };

    /**
     * Determines if a variable is boolean.
     *
     * @example is.Boolean(true); // true
     * @example is.Boolean(false); // true
     *
     * @example is.Boolean(new Boolean()); // false
     * @example is.Boolean(''); // false
     * @example is.Boolean(0); // false
     * @example is.Boolean(null); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a boolean, FALSE otherwise.
     */

    is.Boolean = function (variable) {
        // Note that a variable could be neither TRUE nor FALSE, but still be
        // of Boolean type when invoked as follows: var bool = new Boolean();
        // is.js rejects booleans created in this way because they are not
        // true booleans, meaning that they do not evaluate to TRUE or FALSE.
        return variable === true || variable === false;
    };

    /**
     * Determines if a variable is an object.
     *
     * Functions, arrays, regular expressions, dates, DOM elements, empty
     * boolean values, `new Boolean();`, window, etc., are reported as Objects.
     *
     * @example is.Object(function () {}); // true
     * @example is.Object([1, 2, 3]); // true
     * @example is.Object({a: 1, b: 2, c: 3}); // true
     * @example is.Object(new Date()); // true
     * @example is.Object(new RegExp('abc')); // true
     * @example is.Object(/abc/); // true
     * @example is.Object(window); // true
     * @example is.Object(document.createElement('div')); // true
     * @example is.Object(new Boolean()); // true
     *
     * @example is.Object(null); // false
     * @example is.Object(undefined); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is an object, FALSE otherwise.
     */

    is.Object = function (variable) {
        return variable === Object(variable);
    };

}(this));