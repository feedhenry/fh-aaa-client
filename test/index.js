var test = require('tape-catch');

var aaaMock;

test('setup', function(t) {
  aaaMock = require('./fixtures/aaa.js');
  return t.end();
});

test('canAccess',require('./unit/test_canAccess.js'));
test('filterList',require('./unit/test_filterList.js'));
test('getPerm',require('./unit/test_getPerm.js'));
test('getTeam',require('./unit/test_getTeam.js'));

test('teardown', function(t) {
  aaaMock.done();
  return t.end();
});