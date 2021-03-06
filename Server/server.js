const express = require('express');
const bodyParser = require('body-parser');
const http = require("http");
const cors = require('cors');
const app = express();
var router = express.Router();
var firebaseAdmin = require('firebase-admin');
var serviceAccount = require('./keys/google-services.json');

/**
 * Firebase Setup
 */
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://gazer-404.firebaseio.com/'
});

module.exports.firebase = firebaseAdmin;

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
 * Parser middleware for POST data
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

/**
 * Get our API routes
 */
const coinAPI = require('./routes/coinAPI');
const authAPI = require('./routes/authAPI');
const newsAPI = require('./routes/newsAPI');
const sentimentAPI = require('./routes/sentimentAPI');

/**
 * Set our api routes
 */
router.use('/coinAPI', coinAPI);
router.use('/authAPI', authAPI);
router.use('/newsAPI', newsAPI);
router.use('/sentimentAPI', sentimentAPI);

app.use('/', router);

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

module.exports = server;