const functions = require("firebase-functions");
const { Expo } = require("expo-server-sdk");
exports.sendPushNotifications = functions.firestore
  .document("Tokens/{doc}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const token = data.token;

    // perform desired operations ...
    let expo = new Expo();
    let messages = [];
    messages.push({
      to: token,
      sound: "default",
      title: "Welcome to Covid Tracker !",
      body: "Stay Safe !!",
      _displayInForeground: true,
    });
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    return (async () => {
      // Send the chunks to the Expo push notification service. There are
      // different strategies you could use. A simple one is to send one chunk at a
      // time, which nicely spreads the load out over time:
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
          tickets.push(...ticketChunk);
          // NOTE: If a ticket contains an error code in ticket.details.error, you
          // must handle it appropriately. The error codes are listed in the Expo
          // documentation:
          // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
        } catch (error) {
          console.log(error);
        }
      }
    })();
  });
