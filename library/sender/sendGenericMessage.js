const callSendAPI = require('./callSendAPI');

module.exports = function sendGenericMessage(recipientId, data, cb) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'template',
                payload: data.payload,
            },
        },
    };

    callSendAPI(messageData, cb);
};
