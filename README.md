# Connected TV App Monitor
A product monitor to check the health of connected TV products and services.

To run locally:
```
git clone git@github.com:johnbeech/connected-tv-app-monitor.git
npm install
node server.js
```

To run as background process on a Linux or Windows server, using PM2 to manage the process:
```sh
npm install pm2 -g
./start-server.sh
```

And to monitor and restart:
```sh
pm2 status
pm2 monit
pm2 restart "Connected TV App Monitor"
```

To kill the background process:
```sh
./kill-server.sh
```

Configuration
-------------
Configuration is done by writing custom HTML tags in HTML content fragments, which live in the `/config/content` directory.
For example, to end the index page, edit `/config/content/index.content.html`
