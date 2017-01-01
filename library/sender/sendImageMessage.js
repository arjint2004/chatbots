const config = require('config');
const callSendAPI = require('./callSendAPI');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendImageMessage(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: `${SERVER_URL}/assets/rift.png`,
                },
            },
        },
    };

    callSendAPI(messageData);
};
