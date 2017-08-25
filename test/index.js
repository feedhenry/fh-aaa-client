var aaaMock;
exports.setUp = function(done) {
  aaaMock = require('./fixtures/aaa.js');
  return done();
};

exports.tearDown = function(done) {
  aaaMock.done();
  return done();
};
