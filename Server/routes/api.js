const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/coins/', (req, res) => {
  res.send({
    coins : [{name:'BTC'}, {name:'ETH'}, {name:'DOGE'}]
  })
});
router.get('/coins/:name', (req, res) => {
  const requestedCoinName = req.params.name;
  https.get('https://min-api.cryptocompare.com/data/price?fsym='+requestedCoinName+'&tsyms=USD,JPY,EUR', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(JSON.parse(data));
    });

  }).on('error', (error) => {
    console.log('Error -' + error.message);
  });
});

router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;
