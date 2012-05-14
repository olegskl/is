is.js / is.g.js
=====

Type checking made easy.

Why?
-------

I'm pretty sure many of us don't appreciate:

- `typeof null; // 'object'`
- `typeof []; // 'object'`
- `isNaN('abc'); // true`

... and other JavaScript quirks related to type checking.

**is.js** can be used to mitigate type checking inconsistencies until JavaScript
provides a reliable way to do the same natively.

is.g.js - 0.2.0
-------

Introduces nine very useful, albeit *global*, functions with 
self-descriptive usage:

1. `isArray();`
2. `isNull();`
3. `isUndefined();`
4. `isFunction();`
5. `isNaN();`
6. `isNumber();`
7. `isString();`
8. `isBoolean();`
9. `isObject();`

is.js
-------

*... TBD ...*

Changelog
-------

###is.g.js - 0.2.0

1. Reworked **isBoolean**:
   - `isBoolean(new Boolean()); // false`
2. Reworked **isObject**:
   1. `isObject(new Boolean()); // true`
   2. `isObject(new Date()); // true`,
     
     `isObject(new RegExp('abc')); // true`
      
      This modifications fixes issue: https://github.com/olegskl/is.js/issues/2

###is.g.js - 0.1.0
Initial commit.

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