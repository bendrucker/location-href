'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('node', function (t) {
  var location = proxyquire('./', {
    'global/window': {}
  })
  t.equal(location(), '')
  location.set('/foo')
  t.equal(location(), '/foo')
  t.end()
})

test('browser', function (t) {
  var window = {location: {href: ''}}
  var location = proxyquire('./', {
    'global/window': window
  })
  t.equal(location(), '')
  location.set('/foo')
  t.equal(window.location.href, '/foo')
  t.end()
})
