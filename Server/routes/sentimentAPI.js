const express = require('express');
const router = express.Router();
const server = require('./../server');
const db = server.db;

router.get('/test', (req, res) => {
    var ref = db.ref("ryanTest");

// Attach an asynchronous callback to read the data at our reference
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        res.sendStatus(200);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.sendStatus(500);
    });
});

module.exports = router;