const winston = require('winston');

module.exports = function receivedAccountLink(event) {
    const senderID = event.sender.id;
    // const recipientID = event.recipient.id;

    const status = event.account_linking.status;
    const authCode = event.account_linking.authorization_code;

    winston.info(`Received account link event with for user ${senderID}
        with status ${status} and auth code ${authCode}`);
};
