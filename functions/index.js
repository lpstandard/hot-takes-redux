var functions = require('firebase-functions');
var admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export.newMessageAlert = function.database.ref('/messages/(message)')
  .onWrite((event) => {
    const message = event.data.val();

    const getTokens = admin.database().ref('users');
  });