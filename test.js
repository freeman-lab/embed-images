var fs = require('fs')
var test = require('tape')
var embed = require('./index')

test(function (t) {
  embed('example.md', 'output.md', function () {
    fs.readFile('output.md', function (err) {
      t.ok(!err, 'file written')
      t.end()
    })
  })
})