is.js / is.g.js
=====

Type checking made easy.

**is.js** and **is.g.js** can be used to mitigate type checking inconsistencies
until JavaScript provides a reliable way to do the same natively.

is.js
-------

Introduces a global object `is` that provides nine useful methods with 
self-descriptive usage. Use it if you don't want to pollute the global scope.

1. `is.Array();`
2. `is.Null();`
3. `is.Undefined();`
4. `is.Defined();`
5. `is.Function();`
6. `is.NaN();`
7. `is.Number();`
8. `is.String();`
9. `is.Boolean();`
10. `is.Object();`

is.g.js
-------

Introduces ten useful, albeit *global*, functions with self-descriptive
usage. Use it if you want a more natural way of type checking, and if the
idea of global scope pollution doesn't look that repulsive to you.

1. `isArray();`
2. `isNull();`
3. `isUndefined();`
4. `isDefined();`
5. `isFunction();`
6. `isNaN();`
7. `isNumber();`
8. `isString();`
9. `isBoolean();`
10. `isObject();`

Changelog
-------

###0.5.0

Introduced **is.Defined** and **isDefined** functions.
   - `isDefined(undefined); // false`
   - `isDefined(false); // true`

###0.4.0

Simplified:

1. **isFunction** and **is.Function**,
2. **isNumber** and **is.Number**,
3. **isString** and **is.String**

###0.3.0

1. Reworked **isObject** (behaves like Underscore's `_.isObject()`)
   - `isObject(function () {}); // true`
   - `isObject([1, 2, 3]); // true`
2. Added **is.js** (implementation of methods is the same as in is.g.js)
3. Updated the test suite

###0.2.0

1. Reworked **isBoolean**:
   - `isBoolean(new Boolean()); // false`
2. Reworked **isObject**:
   1. `isObject(new Boolean()); // true`
   2. `isObject(new Date()); // true`,
     
     `isObject(new RegExp('abc')); // true`
      
      This modifications fixes issue: https://github.com/olegskl/is.js/issues/2

###0.1.0
Initial commit.

Tested on
-------

Chrome, Firefox, Opera, IE 5.55/6/7/8/9

License
-------

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.