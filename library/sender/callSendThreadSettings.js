const request = require('request');
const winston = require('winston');
const config = require('config');

const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
  (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
  config.get('pageAccessToken');

module.exports = function callSendThreadSettings(messageData) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/thread_settings',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const result = body.result;
            if (result) {
                winston.info(result);
            } else {
                winston.info(body);
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
