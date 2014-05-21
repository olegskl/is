# is.js

[![Build Status](https://travis-ci.org/olegskl/is.svg?branch=master)](https://travis-ci.org/olegskl/is)
[![Code Climate](https://codeclimate.com/github/olegskl/is.png)](https://codeclimate.com/github/olegskl/is)

Type checking made easy.

**is.js** can be used to mitigate type checking inconsistencies until JavaScript provides a reliable way to do the same natively.

It is quite self-descriptif and convenient. For example, instead of:

    if (obj && typeof obj === 'object') { ... }

you can write a more intuitive:

    if (is.object(obj)) { ... }

## Installation

    npm install git://github.com/olegskl/is.git

or in package.json as a dependency:

    "dependencies": {
        "walk": "git://github.com/olegskl/is.git"
    }

## API

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

## Similar projects

- http://underscorejs.org
- http://lodash.com
- https://github.com/enricomarino/is

## License

http://opensource.org/licenses/mit-license.html