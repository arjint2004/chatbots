const callSendAPI = require('./callSendAPI');

module.exports = function sendButtonMessage(recipientId, data, cb) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: data.text,
                    buttons: data.buttons,
                },
            },
        },
    };

    callSendAPI(messageData, cb);
};
