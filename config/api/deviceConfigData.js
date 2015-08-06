var instance = function() {}

var cache = {};
var request = require('request');

instance.route = '/api/deviceConfigData';
instance.cacheDuration = "10 seconds";

instance.configure = function(config) {
  server = config.server;

  checkEndpoint('google', 'chrome');
  checkEndpoint('samsung', 'pe5');
  checkEndpoint('panasonic', 'tv_2014_midrange');
  checkEndpoint('sony', 'hbbtv_2013');
}

function checkEndpoint(brand, model) {
  var key = brand + '-' + model;
  var url = 'http://www.test.bbc.co.uk/tal-launcher/deviceConfig?brand={{brand}}&model={{model}}'
    .replace(/{{brand}}/, brand)
    .replace(/{{model}}/, model);

  request(url, function(error, response, body) {
    var value = false;
    try {
      value = JSON.parse(body).applicationRuntimeContext;
      value.brand = brand;
      value.model = model;
      value.key = key;
    } catch (exception) {
      value = exception;
    }
    console.log('Created', key);
    cache[key] = value;
  });
}

instance.render = function(req, res) {
  var table = [];

  for (var key in cache) {
    var row = cache[key];
    table.push(row);
  }

  res.json({
    data: table
  });
}

module.exports = instance;