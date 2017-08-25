var assert = require('assert');
exports.it_should_test_can_access = function(done) {
  var config = require('../fixtures/config'),
    aaaClient = require('../../fh-aaa-client.js')(config);
  var req = require('../fixtures/mockRequest');
  req.perm = "read";
  aaaClient.canAccess(req, function(err, res) {
    assert.ok(!err);
    assert.ok(res);
    assert.ok(res.allowed === true);
    done();
  });
};
