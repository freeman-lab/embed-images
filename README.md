# embed-images

[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

> replace image files in markdown with base64

Takes a markdown file with images referenced by file and embeds the image content as base64. Useful if you want to render standalone markdown files without serving or hosting individual image files. Currently only handles `png` files.

## install

Add to your project with

```bash
npm install embed-images --save
```

Or install as a command line tool with

```bash
npm install embed-images -g
```

## example

If you have a file `example.md` with

```markdown
# this is a markdown file with an image

![png](example.png)
```

And call

```bash
embed-images example.md
```

You'll get

```markdown
# this is a markdown file with an image

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
```

## use as a module

Just provide filenames for input and output and an optional callback.

```javascript
require('embed-images')(input, output, cb)
```

If you don't specify an output the result will be logged to stdout.

## use as a cli

Just specify an input and pipe to stdout

```bash
embed-images input.md > output.md
```

Or specify an output file

```bash
embed-images input.md -o output.md
```

## license

[MIT](LICENSE)

[npm-image]: https://img.shields.io/badge/npm-v1.0.0-lightgray.svg?style=flat-square
[npm-url]: https://npmjs.org/package/embed-images
[standard-image]: https://img.shields.io/badge/code%20style-standard-lightgray.svg?style=flat-square
[standard-url]: https://github.com/feross/standard