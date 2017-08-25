var _ = require('underscore');
var request = require('request');
var logger = require('./logger').getLogger();

module.exports = function(config) {
  return function doAAARequest(path, body, cb) {
    var url = config.protocol + '://' + config.host + path,
      method = 'POST',
      requestParams;
    if (typeof body === 'function') {
      cb = body;
      method = 'GET';
      body = true;
    }
    requestParams = {
      url : url,
      json : body,
      method : method,
      headers: {}
    };

    //Setting the Reqest ID header if required.
    if (_.isFunction(logger.getRequestId)) {
      var reqId = logger.getRequestId();
      if (reqId) {
        requestParams.headers[logger.requestIdHeader] = reqId;
      }
    }

    request(requestParams, function(err, res, body) {
      if (err || res.statusCode !== 200) {
        return cb(err || 'Error ' + res.statusCode);
      }
      return cb(null, body);
    });
  };
};
