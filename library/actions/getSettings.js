const sendTextMessage = require('../sender/sendTextMessage');
const sendQuickReply = require('../sender/sendQuickReply');
const async = require('async');

module.exports = function getPengaturan(senderID) {
    async.waterfall([
        function answer(callback) {
            const message = 'Hi, pengaturan sedang diperbaiki oleh Artie.';

            sendTextMessage(senderID, message, () => callback());
        },
        function options(callback) {
            sendQuickReply(senderID, {
                text: 'Harap bersabar ya :)',
                quick_replies: [
                    {
                        content_type: 'text',
                        title: 'Bantuan',
                        payload: 'bantuan',
                    },
                ],
            }, () => callback());
        },
    ], () => {});
};