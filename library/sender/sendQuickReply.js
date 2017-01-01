const callSendAPI = require('./callSendAPI');

module.exports = function sendQuickReply(recipientId, data, cb) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            text: data.text,
            quick_replies: data.quick_replies,
        },
    };

    callSendAPI(messageData, cb);
};
