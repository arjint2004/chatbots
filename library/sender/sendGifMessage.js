const callSendAPI = require('./callSendAPI');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendGifMessage(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: `${SERVER_URL}/assets/instagram_logo.gif`,
                },
            },
        },
    };

    callSendAPI(messageData);
};
