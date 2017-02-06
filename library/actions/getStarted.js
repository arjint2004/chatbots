const sendButtonMessage = require('../sender/sendButtonMessage');
const async = require('async');

module.exports = function getStarted(senderID) {
    async.waterfall([
        function options(callback) {
            sendButtonMessage(senderID, {
                text: 'Selamat datang di DRWSKINCARE www.dr-skincare.com',
                buttons: [{
                    type: 'postback',
                    title: 'Konsultasi',
                    payload: 'konsultasi',
                }, {
                    type: 'postback',
                    title: 'Order Resep',
                    payload: 'order',
                }, {
                    type: 'postback',
                    title: 'Contact Us',
                    payload: 'contact',
                }],
            }, () => callback());
        },
    ], () => {});
};
