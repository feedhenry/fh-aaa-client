module.exports = function(config) {
  var doAAARequest = require('./doAAARequest')(config);

  /**
   * Resolve the user's full perms in the given domain
   * @param  {object}   user        the user object returned by the millicore client middleware
   * @param  {object}   domain    can be null. If it is null, the domain information in the user will be used.
   *   If it's not null, it should contain
   *     domain_guid: the guid of the domain,
   *     domainType: developer or domain, default will be the value of "domainType" in the user object.
   * @param  {Function} cb          the callback
   */
  return function(user, domain, cb) {
    if (!user) {
      return cb("no user");
    }
    var domainInfo = domain;
    var callback = cb;
    if (arguments.length === 2) {
      domainInfo = {domain_guid: user.domain_guid, domainType: user.domainType};
      callback = domain;
    }

    var isAdminDomain = domainInfo.domainType === 'admin';
    var bosChain = isAdminDomain? {'admin': domainInfo.domain_guid} : {'domain': domainInfo.domain_guid};
    var bosLabel = isAdminDomain? "adminDomain" : "devDomain";
    doAAARequest('/query/resolvepermissions', {
      'business-objects': bosChain,
      'user-id': user.guid,
      'bos-label': bosLabel
    }, callback);
  };
};
