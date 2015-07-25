var serverPort = process.argv.slice(2)[0] || 80;

var monitor = require('product-monitor');
var server = monitor({
  "serverPort": serverPort,
  "productInformation": {
    "title": "Connected TV Product Monitor",
  },
  "userContentPath": "config",
  "npmUpdate": {
    "disableUpdates": true
  }
});
