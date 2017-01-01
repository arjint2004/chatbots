const callSendAPI = require('./callSendAPI');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendFileMessage(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'file',
                payload: {
                    url: `${SERVER_URL}/assets/test.txt`,
                },
            },
        },
    };

    callSendAPI(messageData);
};
