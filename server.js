// Get dependencies
const EXPRESS = require('express');
const PATH = require('path');
const HTTP = require('http');
const BODY_PARSER = require('body-parser');

// Get routes
const RULES = require('./server/routes/rules');
const APP = EXPRESS();

// Parsers for POST data
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({ extended: false }));

// Point static path to dist
APP.use(EXPRESS.static(PATH.join(__dirname, 'dist')));

// Set routes
APP.use('/rules', RULES);
APP.use('/rules/:game', RULES); // :game is a parameter

// Catch all other routes and return the index file
APP.get('*', (req, res) => {
  res.sendFile(PATH.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express.
const PORT = process.env.PORT || '3000';
APP.set('port', PORT);

// Create HTTP server.
const SERVER = HTTP.createServer(APP);


 // Listen on provided port, on all network interfaces.
SERVER.listen(PORT, () => console.log(`API running on localhost:${PORT}`));