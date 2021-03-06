var ajax = require('ajax');
var GApi = require('GApi');

var Tasks = {
  Tasklists: {
    list: function(callback) {
      GApi.getAccessToken(function(accessToken) {
        var url = 'https://www.googleapis.com/tasks/v1/users/@me/lists?access_token=' +
          encodeURIComponent(accessToken);
        
        ajax({
          url: url,
          type: 'json'
        }, callback, function(error) {
          console.log('The ajax request failed: ' + error);
        }); 
      });
    }
  },
  
  Tasks: {
    list: function(tasklistId, callback) {
      GApi.getAccessToken(function(accessToken) {
        var url = 'https://www.googleapis.com/tasks/v1/lists/' +
            encodeURIComponent(tasklistId) +
            '/tasks?maxResults=10&access_token=' +
            encodeURIComponent(accessToken);
      
        ajax({
          url: url,
          type: 'json'
        }, callback, function(error) {
          console.log('The ajax request failed: ' + error);
        });
      });
    },
    
    update: function(task, callback) {
      GApi.getAccessToken(function(accessToken) {
        var url = task.selfLink + '?access_token=' +
            encodeURIComponent(accessToken);
      
        ajax({
          url: url,
          type: 'json',
          method: 'put',
          data: task
        }, callback, function(error) {
          console.log('The ajax request failed: ' + error);
        });
      });
    },
    
    'delete': function(task, callback) {
      GApi.getAccessToken(function(accessToken) {
        var url = task.selfLink + '?access_token=' +
            encodeURIComponent(accessToken);
      
        ajax({
          url: url,
          method: 'delete'
        }, callback, function(error) {
          console.log('The ajax request failed: ' + error);
        });
      });
    }
  }
};

module.exports = Tasks;
