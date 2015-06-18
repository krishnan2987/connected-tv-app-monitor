# Connected TV App Monitor
A product monitor to check the health of connected TV products and services.

To run locally:
```
git clone git@github.com:johnbeech/connected-tv-app-monitor.git
npm install
node server.js
```

To run as background process on a linux server, using nohup.out to capture output:
```
./start-server.sh
```

To kill the background process:
```
./kill-server.sh
```

Configuration
-------------
Configuration is done by writing custom HTML tags in HTML content fragments, which live in the `/config/content` directory.
For example, to end the index page, edit `/config/content/index.content.html`

