module.exports = function(assert) {
  var config = require('../fixtures/config'),
    aaaClient = require('../../fh-aaa-client.js')(config);
  aaaClient.getTeam({ id : '1a2b' }, function(err, aaaRes) {
    assert.ok(!err);
    assert.ok(aaaRes);
    assert.ok(aaaRes.name);
    assert.ok(aaaRes.id);

    assert.end();
  });
};
