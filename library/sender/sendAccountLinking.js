const callSendAPI = require('./callSendAPI');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function sendAccountLinking(recipientId) {
    const messageData = {
        recipient: {
            id: recipientId,
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: 'Welcome. Link your account.',
                    buttons: [{
                        type: 'account_link',
                        url: `${SERVER_URL}/authorize`,
                    }],
                },
            },
        },
    };

    callSendAPI(messageData);
};
