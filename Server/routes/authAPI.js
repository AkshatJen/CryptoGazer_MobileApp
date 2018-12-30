const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');
const server = require('./../server');
const firebase = server.firebase;

router.post('/registerNewUserAccount', (req, res) => {
    const newEmail = req.query.email;
    const newPassword = req.query.password;
    firebase.auth().createUser({
        email: newEmail,
        emailVerified: false,
        password: newPassword,
        displayName: "John Doe",
        disabled: false
    })
    .then(function(userRecord) {
        console.log("Successfully created new user:", userRecord.uid);
        res.sendStatus(200);

    })
    .catch(function(error) {
        console.log("Error creating new user:", error);
        res.sendStatus(500);
    });
});

module.exports = router;