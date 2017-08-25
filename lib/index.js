var logger = require('./logger');

module.exports = function(config) {
  return {
    canAccess : require('./canAccess')(config),
    filterList : require('./filterList')(config),
    getTeam : require('./getTeam')(config),
    getPerm: require('./getPerm')(config)
  };
};

module.exports.setLogger = logger.setLogger;
