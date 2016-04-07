#! /usr/bin/env node

var chalk = require('chalk')
var embed = require('./index')
var minimist = require('minimist')

var argv = minimist(process.argv.slice(2), {
  alias: {
    o: 'output',
    h: 'help'
  }
})

var usage = `
Usage:
  embed-images {input} -o {output.md}

Options:
  --output, -o       Output file
  --help, -h         Show help
`

if (argv.help) {
  console.log(usage)
  process.exit()
}

if (!argv._[0]) {
  console.log('\nError:\ninput file is required')
  process.exit()
}

var input = argv._[0]
var output = argv.output

if (output) embed(input, output)
else embed(input)
