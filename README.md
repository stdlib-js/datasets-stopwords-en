<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# English Stop Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> A list of English [stop words][stopwords].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import stopwords from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-stopwords-en@deno/mod.js';
```

#### stopwords()

Returns a list of 301 english [stop words][stopwords].

```javascript
var list = stopwords();
/* returns
    [
        'a',
        'about',
        'above',
        'across',
        'actually',
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import stopwords from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-stopwords-en@deno/mod.js';

var list = stopwords();
var len = list.length;
var idx;
var i;

// Select random words from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( list[ idx ] );
}
```

</section>

<!-- /.examples -->



<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-stopwords-en.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-stopwords-en

[test-image]: https://github.com/stdlib-js/datasets-stopwords-en/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-stopwords-en/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-stopwords-en/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-stopwords-en?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-stopwords-en.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-stopwords-en/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-stopwords-en/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-stopwords-en/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-stopwords-en/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-stopwords-en/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[stopwords]: https://en.wikipedia.org/wiki/Stop_words

</section>

<!-- /.links -->
