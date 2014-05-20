is.js
=====

Type checking made easy.

**is.js** can be used to mitigate type checking inconsistencies until JavaScript provides a reliable way to do the same natively.

It is also a very self-descriptif and convenient way to perform type checking. For example, instead of `if (obj && typeof obj === 'object') { ... }` you can write a more intuitive `if (is.object(obj)) { ... }`.

API
---

1. `is.array();`
2. `is.null();`
3. `is.undefined();`
4. `is.defined();`
5. `is.function();`
6. `is.nan();`
7. `is.number();`
8. `is.string();`
9. `is.boolean();`
10. `is.object();`

License
-------

http://opensource.org/licenses/mit-license.html