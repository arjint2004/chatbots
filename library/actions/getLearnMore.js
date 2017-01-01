const sendButtonMessage = require('../sender/sendButtonMessage');
const async = require('async');

module.exports = function getBantuan(senderID) {
    async.waterfall([
        function options(callback) {
            sendButtonMessage(senderID, {
                text: 'Hi, ada yang bisa Artie bantu?.',
                buttons: [{
                    type: 'postback',
                    title: 'Mencatat Pengeluaran',
                    payload: 'howto_catat_pengeluaran',
                }, {
                    type: 'postback',
                    title: 'Mencatat Jadwal',
                    payload: 'howto_catat_jadwal',
                }],
            }, () => callback());
        },
    ], () => {});
};
