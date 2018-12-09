const express = require('express');
const bodyParser = require('body-parser');
const http = require("http");
const cors = require('cors');
const app = express();

/**
 * Enable cors middleware
 */
let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/**
 * Use CORS middleware
 */
app.use(cors(corsOptions));

/**
 * Get our API routes
 */
const api = require('./server/routes/api');

/**
 * Set our api routes
 */
app.use('/api', api);

/**
 * Parser middleware for POST data
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
