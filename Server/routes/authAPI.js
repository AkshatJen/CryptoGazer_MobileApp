const express = require('express');
const router = express.Router();
const server = require('./../server');
const firebase = server.firebase;
const db = firebase.database();


/**
 * Registers a new User in the pool of Users in Firebase's Authentication Service
 */
router.post('/registerNewUserAccount', (req, res) => {
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    console.log(`Credentials:${newEmail},${newPassword}`);

    if(newEmail != null && newPassword != null) {
        firebase.auth().createUser({
            email: newEmail,
            emailVerified: false,
            password: newPassword,
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
    }
    else
    {
        res.sendStatus(500);
    }
});

/**
 * Change the email of a registered user (identified by their UID)
 */
router.post('/changeUserEmail', (req, res) => {
    const userUID = req.query.uid;
    const newEmail = req.query.newEmail;
    firebase.auth().updateUser(userUID, {
        email: newEmail
    })
    .then(function(userRecord) {
        console.log("Successfully updated user email", userRecord.toJSON());
        res.sendStatus(200);
    })
    .catch(function(error) {
        console.log("Error updating user email:", error);
        res.sendStatus(500);
    });
});

/**
 * Change the password of a registered user (identified by their UID)
 */
router.post('/changeUserPassword', (req, res) => {
    const userUID = req.query.uid;
    const newPassword = req.query.newPassword;
    firebase.auth().updateUser(userUID, {
        password: newPassword
    })
    .then(function(userRecord) {
        console.log("Successfully updated user password", userRecord.toJSON());
        res.sendStatus(200);
    })
    .catch(function(error) {
        console.log("Error updating user password:", error);
        res.sendStatus(500);
    });
});

/**
 * Returns the User Record for a User's UID, which contains information relating to their account
 */
router.get('/getUserRecordWithUID', (req, res) => {
    const userUID = req.query.uid;
    firebase.auth().getUser(userUID)
    .then(function(userRecord) {
        console.log("Successfully fetched user data:", userRecord.toJSON());
        res.send(userRecord.toJSON());
    })
    .catch(function(error) {
        console.log("Error fetching user data:", error);
        res.sendStatus(500);
    });
});

/**
 * Creates a custom JWT that can be used on the Client App to Authenticate users, the token is signed locally using the
 * Service Account credentials stored in the local JSON file
 */
router.get('/createCustomJWTTokenWithUID', (req, res) => {
    const userUID = req.query.uid;
    firebase.auth().createCustomToken(userUID)
    .then(function(customToken) {
        console.log(`Successfully generated a custom JWT token for UID:${userUID}, Token:${customToken}`);
        res.send(customToken);
    })
    .catch(function(error) {
        console.log("Error creating custom token:", error);
    });
});

/**
 * Checks if the provided ID token has the correct format, is not expired, and is properly signed,
 * the method returns the decoded ID token, which contains the UID of the user
 */
router.get('/verifyClientIDToken', (req, res) => {
    const idToken = req.query.idToken;
    firebase.auth().verifyIdToken(idToken)
    .then(function(decodedToken) {
        console.log(`Successfully decoded ID token for UID:${decodedToken.uid}`);
        res.send(decodedToken);
    })
    .catch(function(error) {
        console.log("Error decoding ID token: " + error.message);
        res.sendStatus(500);
    });
});

/**
 * Returns the coin watchlist for a given username
 */
router.get('/returnUserWatchlist', (req, res) => {
    var userPreferencesRef = db.ref(`userPreferences/${req.body.username}/coinWatchlist`);

    userPreferencesRef.on("value", function(snapshot) {
        res.send(snapshot.val());
    }, function (errorObject) {
        console.log("Error pulling User's Coin Watchlist: " + errorObject.code);
        res.sendStatus(500);
    });
});

/**
 * Updates the coin watchlist for a given username
 */
router.post('/updateUserWatchlist', (req, res) => {
    var userPreferencesRef = db.ref(`userPreferences/${req.body.username}`);
    var updatedCoinWatchlist = req.body.updatedCoinWatchlist;

    userPreferencesRef.set({
        "coinWatchlist":updatedCoinWatchlist
    }, () => {
        res.sendStatus(200);
    });
});

module.exports = router;