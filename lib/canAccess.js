module.exports = function(config) {
  var doAAARequest = require('./doAAARequest')(config);

  /*
    req : An object containing userId, business-objects and perm
    cb : callback function
   */
  return function(req, cb) {
    if (!req['user-id'] || !req['business-objects'] || !req.perm || typeof cb !== 'function') {
      return cb(new Error('Error - invalid arguments'));
    }

    return doAAARequest('/query/canaccess', req, cb);
  };
};
