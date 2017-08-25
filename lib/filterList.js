module.exports = function(config) {
  var doAAARequest = require('./doAAARequest')(config);

  /*
    req : A request object to fh-aaa with both user-id and business-objects
    cb : callback function
   */
  return function(req, cb) {
    if (!req['user-id'] || !req['business-objects'] || typeof cb !== 'function') {
      return cb(new Error('Error - invalid arguments'));
    }
    doAAARequest('/query/filterlist', req, cb);
  };
};
