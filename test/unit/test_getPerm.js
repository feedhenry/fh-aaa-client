var assert = require('assert');
exports.it_should_test_resolve_perm = function(done) {
  var config = require('../fixtures/config'),
    aaaClient = require('../../fh-aaa-client.js')(config);
  aaaClient.getPerm({
    domain_guid:'test_domain',
    domainType: 'admin'
  }, function(err, aaaRes) {
    assert.ok(!err);
    assert.ok(aaaRes);
    assert.ok(aaaRes.a);
    done();
  });
};