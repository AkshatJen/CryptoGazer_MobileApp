const express = require('express');
const https = require('https');
const router = express.Router();
const apiKeys = require('../APIKeys/APIKeys');

/**
 * Returns all the top Crypto Headlines
 */
router.get('/topCryptoHeadlines', (req, res) => {
    https.get(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
    }).on('error', (error) => {
        console.log('Error -' + error.message);
    });
});

/**
 * Returns all recent Crypto Headlines
 */
router.get('/allCryptoHeadlines', (req, res) => {
   https.get(`https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
   }).on('error', (error) => {
       console.log('Error -' + error.message);
   });
});

function parseResponse(resp, res){
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        res.send(JSON.parse(data));
    });
}

module.exports = router;