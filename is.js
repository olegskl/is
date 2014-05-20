/**
 * @license MIT license.
 *    Portions of is.js are inspired or borrowed from Underscore,
 *    which is (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.,
 *    and is freely distributable under the MIT license.
 * @fileOverview Introduces a global object "is" with type checking functions.
 * @author Oleg Sklyanchuk
 * @version 0.8.0
 */

// Linting options:
/*global module */

(function (context) {

    // Enable ECMAScript 5 strict mode:
    'use strict';

    var is = {}, // local container for the exported object
        toString = Object.prototype.toString; // a shortcut to avoid lookup

    /**
     * Determines if a value is an array.
     * Defaults to native Array.isArray implementation if it's available.
     *
     * @example is.array([]); // true
     * @example is.array([1, 2, 3]); // true
     * @example is.array({a: 1, b: 2, c: 3}); // false
     * @example is.array('abc'); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is an array, FALSE otherwise.
     */
    is.array = Array.isArray || function (value) {
        return toString.call(value) === '[object Array]';
    };

    /**
     * Determines if a value is null.
     *
     * @example is.null(null); // true
     * @example is.null(false); // false
     * @example is.null(undefined); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is null, FALSE otherwise.
     */
    is.null = function (value) {
        return value === null;
    };

    /**
     * Determines if a value is undefined.
     *
     * @example is.undefined(); // true
     * @example is.undefined(undefined); // true
     * @example is.undefined(void 0); // true
     * @example var x; is.undefined(x); // true
     * @example var x = 1; is.undefined(x); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is undefined, FALSE otherwise.
     */
    is.undefined = function (value) {
        return value === void 0;
    };

    /**
     * Determines if a value is NOT undefined.
     *
     * This is helpful to avoid mind-bending double negation constructs such as 
     * if (!is.undefined(x)) {}
     *
     * @example is.defined(); // false
     * @example is.defined(undefined); // false
     * @example is.defined(void 0); // false
     * @example var x; is.defined(x); // false
     * @example var x = 1; is.defined(x); // true
     *
     * @param {*} value A value to test.
     * @returns {Boolean} FALSE if the value is undefined, TRUE otherwise.
     */
    is.defined = function (value) {
        return value !== void 0;
    };

    /**
     * Determines if a value is a function.
     *
     * @example is.function(function () {}); // true
     * @example is.function({foo: 'bar'}); // false
     * @example is.function(Date); // true (Date is a function)
     * @example is.function(new Date()); // false (new Date(); returns Object)
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is a function, FALSE otherwise.
     */
    is.function = function (value) {
        return typeof value === 'function';
    };

    /**
     * Determines if a value is NaN.
     * Overrides the native is.NaN implementation due to its inconsistencies.
     *
     * @example is.nan(NaN); // true
     * @example is.nan(Math.sqrt(-1)); // true
     * @example is.nan(parseInt('abc')); // true
     * @example is.nan(0); // false
     * @example is.nan('abc'); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is NaN, FALSE otherwise.
     */
    is.nan = function (value) {
        // NaN is the only value for which "===" is not reflexive:
        return value !== value;
    };

    /**
     * Determines if a value is a number
     * NaN accepted, compliant with underscore.
     *
     * @example is.number(12); // true
     * @example is.number('12'); // false
     * @example is.number(NaN); // true (NaN accepted)
     * @example is.number(Math.sqrt(-1)); // true (NaN accepted)
     * @example is.number(parseInt('abc')); // true (NaN accepted)
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is a number, FALSE otherwise.
     */
    is.number = function (value) {
        // Checking for NaN first, same as is.NaN() implementation:
        return typeof value === 'number';
    };

    /**
     * Determines if a value is a string.
     *
     * @example is.string('abc'); // true
     * @example is.string(''); // true
     * @example is.string(123); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is a string, FALSE otherwise.
     */
    is.string = function (value) {
        return typeof value === 'string';
    };

    /**
     * Determines if a value is boolean.
     * (non-compliant with underscore in regard to new Boolean())
     *
     * @example is.boolean(true); // true
     * @example is.boolean(false); // true
     *
     * @example is.boolean(new Boolean()); // false
     * @example is.boolean(''); // false
     * @example is.boolean(0); // false
     * @example is.boolean(null); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is a boolean, FALSE otherwise.
     */
    is.boolean = function (value) {
        // Note that a value could be neither TRUE nor FALSE, but still be
        // of Boolean type when invoked as follows: var bool = new Boolean();
        // is.js rejects booleans created in this way because they are not
        // true booleans, meaning that they do not evaluate to TRUE or FALSE.
        return value === true || value === false;
    };

    /**
     * Determines if a value is an object.
     *
     * Functions, arrays, regular expressions, dates, DOM elements, empty
     * boolean values, `new Boolean();`, window, etc., are reported as Objects.
     *
     * @example is.object(function () {}); // true
     * @example is.object([1, 2, 3]); // true
     * @example is.object({a: 1, b: 2, c: 3}); // true
     * @example is.object(new Date()); // true
     * @example is.object(new RegExp('abc')); // true
     * @example is.object(/abc/); // true
     * @example is.object(window); // true
     * @example is.object(document.createElement('div')); // true
     * @example is.object(new Boolean()); // true
     *
     * @example is.object(null); // false
     * @example is.object(undefined); // false
     *
     * @param {*} value A value to test.
     * @returns {Boolean} TRUE if the value is an object, FALSE otherwise.
     */
    is.object = function (value) {
        return value === Object(value);
    };

    if (is.object(module) && is.object(module.exports)) {
        module.exports = is; // CommonJS
    } else {
        context.is = is;
    }

}(this));