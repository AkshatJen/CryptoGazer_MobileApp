const express = require('express');
const https = require('https');
const router = express.Router();
const apiKeys = require('../keys/APIKeys');

/**
 * Returns all the top Crypto Headlines from the crypto-coins-news source
 */
router.get('/topCryptoCoinsNewsHeadlines', (req, res) => {
    console.log(`News API, pulling top headlines from the crypto-coins-news source`);
    https.get(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
    }).on('error', (error) => {
        console.log('Error -' + error.message);
        res.sendStatus(500);
    });
});

/**
 * Returns all recent Articles from the crypto-coins-news source
 */
router.get('/allCryptoCoinsNewsHeadlines', (req, res) => {
    console.log(`News API, pulling all articles from the crypto-coins-news source`);
    https.get(`https://newsapi.org/v2/everything?sources=crypto-coins-news&language=en&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
    }).on('error', (error) => {
       console.log('Error -' + error.message);
       res.sendStatus(500);
    });
});

/**
 * Return articles based on a query
 */
router.get('/allArticlesWithQuery', (req, res) => {
    const query = req.body.query;
    console.log(`News API, Searching for Articles with the following Query: ${query}`);
    https.get(`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
    }).on('error', (error) => {
        console.log('Error -' + error.message);
        res.sendStatus(500);
    });
});

/**
 * Return all named, English sources available from the News API
 */
router.get('/allSources', (req, res) => {
    console.log("News API, Pulling the News Sources available from the News API");
    https.get(`https://newsapi.org/v2/sources?language=en&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
       parseResponse(resp, res);
    }).on('error', (error) => {
       console.log('Error -' + error.message);
       res.sendStatus(500);
    });
});

/**
 * Return articles based on a query, from specified sources
 */
router.get('/allArticlesWithQueryFromSpecificSources', (req, res) => {
    const query = req.body.query;
    const sources = req.body.sources;
    console.log(`News API, Searching for Articles with the following Query: ${query}, from these sources: ${sources}`);
    https.get(`https://newsapi.org/v2/everything?q=${query}&sources=${sources}&language=en&apiKey=${apiKeys.newsAPIKey}`, (resp) => {
        parseResponse(resp, res);
    }).on('error', (error) => {
        console.log('Error -' + error.message);
        res.sendStatus(500);
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