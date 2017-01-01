const winston = require('winston');
const callSendAPI = require('./callSendAPI');

module.exports = function sendTypingOn(recipientId) {
    winston.info('Turning typing indicator on');

    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'typing_on',
    };

    callSendAPI(messageData);
};
