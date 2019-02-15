const express = require('express');
const router = express.Router();
const server = require('./../server');
const db = server.db;

router.get('/sentiments', (req, res) => {
    var ref = db.ref("coinSentiment");

// Attach an asynchronous callback to read the data at our reference
    ref.on("value", function(snapshot) {
        res.send(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.sendStatus(500);
    });
});

module.exports = router;