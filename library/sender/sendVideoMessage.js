const callSendAPI = require('./callSendAPI');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendVideoMessage(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'video',
                payload: {
                    url: `${SERVER_URL}/assets/allofus480.mov`,
                },
            },
        },
    };

    callSendAPI(messageData);
};
