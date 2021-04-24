var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/user/FlutterProjects/FCM/fcm2/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// This registration token comes from the client FCM SDKs.
var registrationToken = 'REGISTRATION_TOKEN';

var message = {
  notification: {
    title: 'Title',
    body: 'This is body'
  },
  // token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });