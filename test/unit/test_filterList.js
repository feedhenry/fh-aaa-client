var assert = require('assert');
exports.it_should_test_filter_list = function(done) {
  var config = require('../fixtures/config'),
    aaaClient = require('../../fh-aaa-client.js')(config);
  var req = require('../fixtures/mockRequest');
  aaaClient.filterList(req, function(err, res) {
    assert.ok(!err);
    assert.ok(res);
    assert.ok(res['business-object-ids']);
    assert.ok(res['business-object-ids'].length > 0);
    done();
  });
};
