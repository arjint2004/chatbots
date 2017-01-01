const winston = require('winston');
const callSendAPI = require('./callSendAPI');

module.exports = function sendReadReceipt(recipientId) {
    winston.info('Sending a read receipt to mark message as seen');

    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'mark_seen',
    };

    callSendAPI(messageData);
};
