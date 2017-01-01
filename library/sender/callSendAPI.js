const request = require('request');
const winston = require('winston');
const config = require('config');

const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
  (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
  config.get('pageAccessToken');

module.exports = function callSendAPI(messageData) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const recipientId = body.recipient_id;
            const messageId = body.message_id;
            if (messageId) {
                winston.info(`Successfully sent message with id ${messageId} to
                    recipient ${recipientId}`);
            } else {
                winston.info(`Successfully called Send API for recipient ${recipientId}`);
            }

        } else {
            winston.info(
                'Failed calling Send API',
                response.statusCode,
                response.statusMessage,
                body.error
            );

        }
    });
};
