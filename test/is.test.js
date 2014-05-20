/**
 * @fileOverview Unit test suite for is.js.
 * @author Oleg Sklyanchuk
 * @license MIT license.
 *    Portions of is.js are inspired or borrowed from Underscore,
 *    which is (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.,
 *    and is freely distributable under the MIT license.
 */

/*jslint node: true */
/*global describe, it */

'use strict';

var expect = require('chai').expect,
    is = require('../is.js');

describe('library endpoint', function () {
    it('should be an object', function () {
        expect(is).to.not.be.null;
        expect(is).to.be.an('object');
    });
});

describe('is.array', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.array).to.be.a('function');
    });

    it('should return TRUE for array objects', function () {
        expect(is.array([])).to.be.true;
        expect(is.array([1, 2, 3])).to.be.true;
        expect(is.array(new Array())).to.be.true;
        expect(is.array(new Array(1, 2, 3))).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.array(true)).to.be.false;
        expect(is.array(false)).to.be.false;
        expect(is.array(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.array(null)).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.array({})).to.be.false;
        expect(is.array({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.array(0)).to.be.false;
        expect(is.array(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.array(NaN)).to.be.false;
        expect(is.array(Math.sqrt(-1))).to.be.false;
        expect(is.array(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.array('')).to.be.false;
        expect(is.array('abc')).to.be.false;
        expect(is.array(new String('abc'))).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.array()).to.be.false;
        expect(is.array(void 0)).to.be.false;
        expect(is.array(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.array(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.array(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.array(new RegExp('abc'))).to.be.false;
        expect(is.array(/abc/)).to.be.false;
    });

});

describe('is.null', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.null).to.be.a('function');
    });

    it('should return TRUE for nulls', function () {
        expect(is.null(null)).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.null(true)).to.be.false;
        expect(is.null(false)).to.be.false;
        expect(is.null(new Boolean())).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.null([])).to.be.false;
        expect(is.null([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.null({})).to.be.false;
        expect(is.null({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.null(0)).to.be.false;
        expect(is.null(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.null(NaN)).to.be.false;
        expect(is.null(Math.sqrt(-1))).to.be.false;
        expect(is.null(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.null('')).to.be.false;
        expect(is.null('abc')).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.null()).to.be.false;
        expect(is.null(void 0)).to.be.false;
        expect(is.null(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.null(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.null(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.null(new RegExp('abc'))).to.be.false;
        expect(is.null(/abc/)).to.be.false;
    });

});

describe('is.undefined', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.undefined).to.be.a('function');
    });

    it('should return TRUE for undefined', function () {
        expect(is.undefined()).to.be.true;
        expect(is.undefined(void 0)).to.be.true;
        expect(is.undefined(undefined)).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.undefined(true)).to.be.false;
        expect(is.undefined(false)).to.be.false;
        expect(is.undefined(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.undefined(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.undefined([])).to.be.false;
        expect(is.undefined([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.undefined({})).to.be.false;
        expect(is.undefined({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.undefined(0)).to.be.false;
        expect(is.undefined(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.undefined(NaN)).to.be.false;
        expect(is.undefined(Math.sqrt(-1))).to.be.false;
        expect(is.undefined(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.undefined('')).to.be.false;
        expect(is.undefined('abc')).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.undefined(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.undefined(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.undefined(new RegExp('abc'))).to.be.false;
        expect(is.undefined(/abc/)).to.be.false;
    });

});

describe('is.defined', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.defined).to.be.a('function');
    });

    it('should return TRUE for booleans', function () {
        expect(is.defined(true)).to.be.true;
        expect(is.defined(false)).to.be.true;
        expect(is.defined(new Boolean())).to.be.true;
    });

    it('should return TRUE for null', function () {
        expect(is.defined(null)).to.be.true;
    });

    it('should return TRUE for array objects', function () {
        expect(is.defined([])).to.be.true;
        expect(is.defined([1, 2, 3])).to.be.true;
    });

    it('should return TRUE for non-array objects', function () {
        expect(is.defined({})).to.be.true;
        expect(is.defined({a: 1, b: 2})).to.be.true;
    });

    it('should return TRUE for numbers', function () {
        expect(is.defined(0)).to.be.true;
        expect(is.defined(1)).to.be.true;
    });

    it('should return TRUE for NaN', function () {
        expect(is.defined(NaN)).to.be.true;
        expect(is.defined(Math.sqrt(-1))).to.be.true;
        expect(is.defined(parseInt('abc'))).to.be.true;
    });

    it('should return TRUE for strings', function () {
        expect(is.defined('')).to.be.true;
        expect(is.defined('abc')).to.be.true;
    });

    it('should return TRUE for functions', function () {
        expect(is.defined(function () {})).to.be.true;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return TRUE for dates', function () {
        expect(is.defined(new Date())).to.be.true;
    });

    it('should return TRUE for regular expressions', function () {
        expect(is.defined(new RegExp('abc'))).to.be.true;
        expect(is.defined(/abc/)).to.be.true;
    });

    it('should return FALSE for undefined', function () {
        expect(is.defined()).to.be.false;
        expect(is.defined(void 0)).to.be.false;
        expect(is.defined(undefined)).to.be.false;
    });

});

describe('is.function', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.function).to.be.a('function');
    });

    it('should return TRUE for functions', function () {
        expect(is.function(function () {})).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.function(true)).to.be.false;
        expect(is.function(false)).to.be.false;
        expect(is.function(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.function(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.function([])).to.be.false;
        expect(is.function([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.function({})).to.be.false;
        expect(is.function({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.function(0)).to.be.false;
        expect(is.function(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.function(NaN)).to.be.false;
        expect(is.function(Math.sqrt(-1))).to.be.false;
        expect(is.function(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.function('')).to.be.false;
        expect(is.function('abc')).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.function()).to.be.false;
        expect(is.function(void 0)).to.be.false;
        expect(is.function(undefined)).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.function(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.function(new RegExp('abc'))).to.be.false;
        expect(is.function(/abc/)).to.be.false;
    });

});

describe('is.nan', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.nan).to.be.a('function');
    });

    it('should return TRUE for NaN', function () {
        expect(is.nan(NaN)).to.be.true;
        expect(is.nan(Math.sqrt(-1))).to.be.true;
        expect(is.nan(parseInt('abc'))).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.nan(true)).to.be.false;
        expect(is.nan(false)).to.be.false;
        expect(is.nan(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.nan(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.nan([])).to.be.false;
        expect(is.nan([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.nan({})).to.be.false;
        expect(is.nan({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.nan(0)).to.be.false;
        expect(is.nan(1)).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.nan('')).to.be.false;
        expect(is.nan('abc')).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.nan()).to.be.false;
        expect(is.nan(void 0)).to.be.false;
        expect(is.nan(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.nan(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.nan(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.nan(new RegExp('abc'))).to.be.false;
        expect(is.nan(/abc/)).to.be.false;
    });

});

describe('is.number', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.number).to.be.a('function');
    });

    it('should return TRUE for numbers', function () {
        expect(is.number(0)).to.be.true;
        expect(is.number(1)).to.be.true;
    });

    it('should return TRUE for NaN', function () {
        expect(is.number(NaN)).to.be.true;
        expect(is.number(Math.sqrt(-1))).to.be.true;
        expect(is.number(parseInt('abc'))).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.number(true)).to.be.false;
        expect(is.number(false)).to.be.false;
        expect(is.number(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.number(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.number([])).to.be.false;
        expect(is.number([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.number({})).to.be.false;
        expect(is.number({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.number('')).to.be.false;
        expect(is.number('abc')).to.be.false;
        // Test coverage for: http://stackoverflow.com/a/1830844/851498
        expect(is.number(' ')).to.be.false;
        expect(is.number('\t\t')).to.be.false;
        expect(is.number('\n\r')).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.number()).to.be.false;
        expect(is.number(void 0)).to.be.false;
        expect(is.number(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.number(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.number(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.number(new RegExp('abc'))).to.be.false;
        expect(is.number(/abc/)).to.be.false;
    });

});

describe('is.string', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.string).to.be.a('function');
    });

    it('should return TRUE for strings', function () {
        expect(is.string('')).to.be.true;
        expect(is.string('abc')).to.be.true;
    });

    it('should return FALSE for booleans', function () {
        expect(is.string(true)).to.be.false;
        expect(is.string(false)).to.be.false;
        expect(is.string(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.string(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.string([])).to.be.false;
        expect(is.string([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.string({})).to.be.false;
        expect(is.string({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.string(0)).to.be.false;
        expect(is.string(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.string(NaN)).to.be.false;
        expect(is.string(Math.sqrt(-1))).to.be.false;
        expect(is.string(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.string()).to.be.false;
        expect(is.string(void 0)).to.be.false;
        expect(is.string(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.string(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.string(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.string(new RegExp('abc'))).to.be.false;
        expect(is.string(/abc/)).to.be.false;
    });

});

describe('is.boolean', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.boolean).to.be.a('function');
    });

    it('should return TRUE for booleans', function () {
        expect(is.boolean(true)).to.be.true;
        expect(is.boolean(false)).to.be.true;
    });

    // Edge case, non-compliant with underscore:
    it('should return FALSE for boolean object', function () {
        expect(is.boolean(new Boolean())).to.be.false;
    });

    it('should return FALSE for null', function () {
        expect(is.boolean(null)).to.be.false;
    });

    it('should return FALSE for array objects', function () {
        expect(is.boolean([])).to.be.false;
        expect(is.boolean([1, 2, 3])).to.be.false;
    });

    it('should return FALSE for non-array objects', function () {
        expect(is.boolean({})).to.be.false;
        expect(is.boolean({a: 1, b: 2})).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.boolean('')).to.be.false;
        expect(is.boolean('abc')).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.boolean(0)).to.be.false;
        expect(is.boolean(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.boolean(NaN)).to.be.false;
        expect(is.boolean(Math.sqrt(-1))).to.be.false;
        expect(is.boolean(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.boolean()).to.be.false;
        expect(is.boolean(void 0)).to.be.false;
        expect(is.boolean(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.boolean(function () {})).to.be.false;
    });

    // Test coverage for issue #2: https://github.com/olegskl/is.js/issues/2
    it('should return FALSE for dates', function () {
        expect(is.boolean(new Date())).to.be.false;
    });

    it('should return FALSE for regular expressions', function () {
        expect(is.boolean(new RegExp('abc'))).to.be.false;
        expect(is.boolean(/abc/)).to.be.false;
    });

});

describe('is.object', function () {

    // Method validation:
    it('should be a function', function () {
        expect(is.object).to.be.a('function');
    });

    it('should return TRUE for non-array objects', function () {
        expect(is.object({})).to.be.true;
        expect(is.object({a: 1, b: 2})).to.be.true;
    });

    it('should return TRUE for array objects', function () {
        expect(is.object([])).to.be.true;
        expect(is.object([1, 2, 3])).to.be.true;
    });

    it('should return TRUE for Date instances', function () {
        expect(is.object(new Date())).to.be.true;
    });

    it('should return TRUE for regular expressions', function () {
        expect(is.object(new RegExp('abc'))).to.be.true;
        expect(is.object(/abc/)).to.be.true;
    });

    it('should return TRUE for boolean object', function () {
        expect(is.object(new Boolean())).to.be.true;
    });

    it('should return FALSE for null', function () {
        expect(is.object(null)).to.be.false;
    });

    it('should return FALSE for booleans', function () {
        expect(is.object(true)).to.be.false;
        expect(is.object(false)).to.be.false;
    });

    it('should return FALSE for strings', function () {
        expect(is.object('')).to.be.false;
        expect(is.object('abc')).to.be.false;
    });

    it('should return FALSE for numbers', function () {
        expect(is.object(0)).to.be.false;
        expect(is.object(1)).to.be.false;
    });

    it('should return FALSE for NaN', function () {
        expect(is.object(NaN)).to.be.false;
        expect(is.object(Math.sqrt(-1))).to.be.false;
        expect(is.object(parseInt('abc'))).to.be.false;
    });

    it('should return FALSE for undefined', function () {
        expect(is.object()).to.be.false;
        expect(is.object(void 0)).to.be.false;
        expect(is.object(undefined)).to.be.false;
    });

    it('should return FALSE for functions', function () {
        expect(is.object(function () {})).to.be.true;
    });

});