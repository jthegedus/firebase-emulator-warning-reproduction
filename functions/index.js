const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", request.body);
  response.send("Hello from Firebase!");
});

exports.helloPubSub = functions.pubsub
  .topic("topic-name")
  .onPublish((message) => {
    functions.logger.info(
      "Hello logs!",
      Buffer.from(message.data.data, "base64").toString()
    );
    return null;
  });
