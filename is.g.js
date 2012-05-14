/**
 * @fileOverview
 * This script introduces type checking functions into the global scope.
 * @license MIT license.
 * Portions of is.js are inspired or borrowed from Underscore,
 * which is (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.,
 * and is freely distributable under the MIT license.
 * @author Oleg Sklyanchuk
 * @version 0.2.0
 */

// The root object represents window in the browser,
// and global on the server:
(function (root) {

    'use strict';

    /**
     * A shortcut to Object.prototype.toString method.
     * @private
     */

    var toString = Object.prototype.toString;

    /**
     * Determines if a variable is an array.
     * Defaults to native Array.isArray implementation if it's available.
     *
     * @example isArray([]); // true
     * @example isArray([1, 2, 3]); // true
     * @example isArray({a: 1, b: 2, c: 3}); // false
     * @example isArray('abc'); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is an array, FALSE otherwise.
     */

    root.isArray = Array.isArray || function (variable) {
        return toString.call(variable) === '[object Array]';
    };

    /**
     * Determines if a variable is null.
     *
     * @example isNull(null); // true
     * @example isNull(false); // false
     * @example isNull(undefined); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is null, FALSE otherwise.
     */

    root.isNull = function (variable) {
        return variable === null;
    };

    /**
     * Determines if a variable is undefined.
     *
     * @example isUndefined(); // true
     * @example isUndefined(undefined); // true
     * @example isUndefined(void 0); // true
     * @example var x; isUndefined(x); // true
     * @example var x = 1; isUndefined(x); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is undefined, FALSE otherwise.
     */

    root.isUndefined = function (variable) {
        return variable === void 0;
    };

    /**
     * Determines if a variable is a function.
     *
     * @example isFunction(function () {}); // true
     * @example isFunction({foo: 'bar'}); // false
     * @example isFunction(Date); // true (Date is a function)
     * @example isFunction(new Date()); // false (new Date(); returns an object)
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a function, FALSE otherwise.
     */

    root.isFunction = function (variable) {
        return toString.call(variable) === '[object Function]';
    };

    /**
     * Determines if a variable is NaN.
     * Overrides the native isNaN implementation due to its inconsistencies.
     *
     * @example isNaN(NaN); // true
     * @example isNaN(Math.sqrt(-1)); // true
     * @example isNaN(parseInt('abc')); // true
     * @example isNaN(0); // false
     * @example isNaN('abc'); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is NaN, FALSE otherwise.
     */

    root.isNaN = function (variable) {
        // NaN is the only value for which "===" is not reflexive:
        return variable !== variable;
    };

    /**
     * Determines if a variable is a number (NaN rejected as non-number).
     *
     * @example isNumber(12); // true
     * @example isNumber('12'); // false
     * @example isNumber(NaN); // false (NaN rejected)
     * @example isNumber(Math.sqrt(-1)); // false (NaN rejected)
     * @example isNumber(parseInt('abc')); // false (NaN rejected)
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a number, FALSE otherwise.
     */

    root.isNumber = function (variable) {
        return !root.isNaN(variable) &&
            toString.call(variable) === '[object Number]';
    };

    /**
     * Determines if a variable is a string.
     *
     * @example isString('abc'); // true
     * @example isString(''); // true
     * @example isString(123); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a string, FALSE otherwise.
     */

    root.isString = function (variable) {
        return toString.call(variable) === '[object String]';
    };

    /**
     * Determines if a variable is boolean.
     *
     * @example isBoolean(true); // true
     * @example isBoolean(false); // true
     *
     * @example isBoolean(new Boolean()); // false
     * @example isBoolean(''); // false
     * @example isBoolean(0); // false
     * @example isBoolean(null); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is a boolean, FALSE otherwise.
     */

    root.isBoolean = function (variable) {
        // Note that a variable could be neither TRUE nor FALSE, but still be
        // of Boolean type when invoked as follows: var bool = new Boolean();
        return variable === true || variable === false;
    };

    /**
     * Determines if a variable is an object.
     *
     * This library assumes (perhaps wrongly) that an Object is any 
     * non-primitive value that is also not an Array and not a Function.
     * Thus, regular expressions, dates, DOM elements, empty boolean values
     * `new Boolean();`, window, etc., are reported as Objects.
     *
     * @example isObject({a: 1, b: 2, c: 3}); // true
     * @example isObject(new Date()); // true
     * @example isObject(new RegExp('abc')); // true
     * @example isObject(/abc/); // true
     * @example isObject(window); // true
     * @example isObject(document.createElement('div')); // true
     * @example isObject(new Boolean()); // true
     *
     * @example isObject([1, 2, 3]); // false
     * @example isObject(null); // false
     * @example isObject(undefined); // false
     *
     * @param {*} variable A variable to test.
     * @returns {Boolean} TRUE if the variable is an object, FALSE otherwise.
     */

    root.isObject = function (variable) {
        return !root.isUndefined(variable) &&
            !root.isNull(variable) &&
            !root.isString(variable) &&
            !root.isBoolean(variable) &&
            !root.isNumber(variable) &&
            !root.isArray(variable) &&
            !root.isFunction(variable) &&
            !root.isNaN(variable);
    };

}(this));