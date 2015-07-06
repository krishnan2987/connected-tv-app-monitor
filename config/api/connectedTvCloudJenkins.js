var instance = function() {}

var server = false;
var request = require('request');

instance.route = '/api/connectedTvCloudJenkins';
instance.cacheDuration = "10 seconds";

instance.configure = function(config) {
  server = config.server;
}

instance.render = function(req, res) {
  var data = {};
  var url = 'http://jenkins.connected-tv.tools.bbc.co.uk:7081';
  var service = 'https://jenkins.connected-tv.tools.bbc.co.uk';

  request(url, function(error, response, body) {
    if(body) {
      try {
        data = JSON.parse(body);
        data.service = service;
        res.jsonp(result);
      }
      catch(exception) {
        data.error = exception;
        res.jsonp(data);
      }
    }
    else {
      data.error = error;
      res.jsonp(data);
    }
  });
}

module.exports = instance;
