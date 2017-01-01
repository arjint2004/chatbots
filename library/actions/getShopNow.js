const sendTextMessage = require('../sender/sendTextMessage');
const sendGenericMessage = require('../sender/sendGenericMessage');
const async = require('async');
const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

module.exports = function getShopNow(senderID) {
    async.waterfall([
        function answer(callback) {
            const message = 'Silahkan Pilih product yang anda inginkan';
            sendTextMessage(senderID, message, callback());
        },
        function options(callback) {
            sendGenericMessage(senderID, {
                payload: {
                    template_type: 'generic',
                    elements: [{
                        title: 'Paket Acne Glow ACG',
                        image_url: `http://www.dr-skincare.com/image/cache/data/product/P60119-205729-001ac-245x250.jpg`,
                        buttons: [{
                            type: 'postback',
                            title: 'Pesan',
                            payload: 'order_acg',
                        }],
                    }, {
                        title: 'Paket Whitening Glow G1',
                        image_url: `http://www.dr-skincare.com/image/cache/data/product/P60119-210157-001ac-245x250.jpg`,
                        buttons: [{
                            type: 'postback',
                            title: 'Pesan',
                            payload: 'order_w1',
                        }],
                    }],
                },
            }, callback());
        },
    ], () => {});
};
