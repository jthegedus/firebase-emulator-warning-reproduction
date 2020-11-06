const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", request);
  response.send("Hello from Firebase!");
});

exports.helloPubSub = functions.pubsub
  .topic("topic-name")
  .onPublish((message) => {
    functions.logger.info("Hello logs!", message);
  });
