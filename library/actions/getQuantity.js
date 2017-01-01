const sendTextMessage = require('../sender/sendTextMessage');
const async = require('async');

module.exports = function getBantuan(senderID) {
    async.waterfall([
        function options(callback) {
            sendTextMessage(senderID, '');
        },
    ], () => {});
};
