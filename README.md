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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isLowercase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a lowercase string.



<section class="usage">

## Usage

```javascript
import isLowercase from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-lowercase@v0.2.1-deno/mod.js';
```

#### isLowercase( value )

Tests if a `value` is a lowercase `string`.

```javascript
var bool = isLowercase( 'salt and light' );
// returns true

bool = isLowercase( 'HELLO' );
// returns false

bool = isLowercase( 'World' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function validates that a `value` is a `string`. For all other types, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isLowercase from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-lowercase@v0.2.1-deno/mod.js';

var bool = isLowercase( 'hello' );
// returns true

bool = isLowercase( '' );
// returns false

bool = isLowercase( 'Hello' );
// returns false

bool = isLowercase( 'HELLO' );
// returns false
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>
-   <span class="package-name">[`@stdlib/assert-is-uppercase`][@stdlib/assert/is-uppercase]</span><span class="delimiter">: </span><span class="description">test if a value is an uppercase string.</span>

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-lowercase.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-lowercase

[test-image]: https://github.com/stdlib-js/assert-is-lowercase/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/assert-is-lowercase/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-lowercase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-lowercase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-lowercase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-lowercase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-lowercase#cli
[cli-url]: https://github.com/stdlib-js/assert-is-lowercase/tree/cli
[@stdlib/assert-is-lowercase]: https://github.com/stdlib-js/assert-is-lowercase/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-lowercase/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-lowercase/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-lowercase/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-lowercase/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-lowercase/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-lowercase/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-lowercase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-lowercase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert-is-string/tree/deno

[@stdlib/assert/is-uppercase]: https://github.com/stdlib-js/assert-is-uppercase/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
