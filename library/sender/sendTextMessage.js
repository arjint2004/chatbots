const callSendAPI = require('./callSendAPI');

module.exports = function sendTextMessage(recipientId, messageText) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            text: messageText,
        },
    };

    callSendAPI(messageData); 
};
