# embed-images

> replace image files in markdown with base64

Takes a markdown file with images referenced by file and embeds the image content as base64. Useful when you want to render standalone markdown files without serving or hosting individual image files.

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

Just provide filenames for input and output.

```javascript
require('embed-images')(input, output)
```

If you don't specify an output the result will be logged to stdout.

## use as a cli

You can specify an input and pipe to stdout

```bash
embed-images input.md > output.md
```

Or specify an output file

```bash
embed-images input.md -o output.md
```