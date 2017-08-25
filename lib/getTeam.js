module.exports = function(config) {
  var doAAARequest = require('./doAAARequest')(config);
  /*
    req : An object containing userId, business-objects and perm
    cb : callback function
   */
  return function(body, cb) {
    if (!body.id || typeof cb !== 'function') {
      return cb(new Error('Error - invalid arguments'));
    }

    return doAAARequest('/admin/teams/' + body.id, cb);
  };
};
