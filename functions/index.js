const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.checkAlias = functions
  .region("europe-west2")
  .https.onCall((data, context) => {
    const ref = admin
      .firestore()
      .collection("users")
      .doc(data.slug);

    return ref
      .get()
      .then(doc => {
        return {
          unique: !doc.exists
        };
      })
      .catch(err => {
        throw new functions.https.HttpsError("failed to connect");
      });
  });

exports.startToPlay = functions
  .region("europe-west2")
  .https.onCall((data, context) => {
    return "Welcome to the jungle";
  });
