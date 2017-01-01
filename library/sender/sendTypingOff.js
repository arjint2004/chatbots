const callSendAPI = require('./callSendAPI');
const winston = require('winston');

module.exports = function sendTypingOff(recipientId) {
    winston.info('Turning typing indicator off');

    const messageData = {
        recipient: {
            id: recipientId,
        },
        sender_action: 'typing_off',
    };

    callSendAPI(messageData);
};
