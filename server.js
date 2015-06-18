var monitor = require('product-monitor');
var server = monitor({
  "serverPort": 80,
  "productInformation": {
    "title": "Connected TV Product Monitor",
  },
  "userContentPath": "config"
});
