const callSendAPI = require('./callSendAPI');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendAudioMessage(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'audio',
                payload: {
                    url: `${SERVER_URL}/assets/sample.mp3`,
                },
            },
        },
    };

    callSendAPI(messageData);
};
