const sendTextMessage = require('../sender/sendTextMessage');
const winston = require('winston');

module.exports = function receivedAuthentication(event) {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfAuth = event.timestamp;
    const passThroughParam = event.optin.ref;

    winston.info(`Received authentication for user ${senderID} and
         page ${recipientID} with pass through param '${passThroughParam}' at ${timeOfAuth}`);

    sendTextMessage(senderID, 'Authentication successful');
};
