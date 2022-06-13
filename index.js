const express = require('express');
const app = express();
const path = require('path');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

// LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// LiveReload middleware
app.use(connectLiveReload());

// Routes

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Start server

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});