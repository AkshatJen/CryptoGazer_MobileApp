const express = require('express');
const https = require('https');
const router = express.Router();

/**
 *
 */
router.get('/coins', (req, res) => {
  https.get('https://api.coinmarketcap.com/v1/ticker/?limit=25', (resp) => {
      parseResponse(resp, res)
  }).on('error', (error) => {
      console.log('Error -' + error.message);
  });
});

router.get('/coins/:name', (req, res) => {
  const requestedCoinName = req.params.name;
  https.get(`https://min-api.cryptocompare.com/data/price?fsym=${requestedCoinName}&tsyms=USD,JPY,EUR`, (resp) => {
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
        console.log("AUTH API, SENDING JSON DATA: " + data);
        res.send(JSON.parse(data));
    });
}

module.exports = router;