var nock = require('nock');

var aaaReplies = {
  canaccess : function() {
    return {
      "allowed" : true
    };
  },
  filterlist : function() {
    return {
      "business-object-ids" : [1,2,3]
    };
  },
  getTeam : function() {
    return {
      "id" : '1a2b',
      "name" : 'Dev Admins'
    };
  },
  getPerm: function() {
    return {
      'a': '1',
      'a/b': '2',
      'a/b/c': '3'
    };
  }
};

module.exports = nock('http://localhost:1234')
.filteringRequestBody(function() {
  return '*';
})
.post('/query/canaccess', '*')
.reply(200, aaaReplies.canaccess)
.post('/query/filterlist', '*')
.reply(200, aaaReplies.filterlist)
.get('/admin/teams/1a2b', '*')
.reply(200, aaaReplies.getTeam)
.post('/query/resolvepermissions', '*')
.reply(200, aaaReplies.getPerm);
