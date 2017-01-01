const sendButtonMessage = require('../sender/sendButtonMessage');
const async = require('async');

module.exports = function getStarted(senderID) {
    async.waterfall([
        function options(callback) {
            sendButtonMessage(senderID, {
                text: 'Feel free to send us a message or choose an option from the menu',
                buttons: [{
                    type: 'postback',
                    title: 'Shop now',
                    payload: 'shop_now',
                }, {
                    type: 'postback',
                    title: 'View site',
                    payload: 'view_site',
                }, {
                    type: 'postback',
                    title: 'Learn more',
                    payload: 'learn_more',
                }],
            }, () => callback());
        },
    ], () => {});
};
