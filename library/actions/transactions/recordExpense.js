const sendTextMessage = require('../../sender/sendTextMessage');
const sendQuickReply = require('../../sender/sendQuickReply');
const async = require('async');

module.exports = function recordExpense(senderID, messageText) {
    async.waterfall([
        function check(callback) {
            const rAmount = /\d+/g;
            const s = messageText;
            const tmp = s.split(/ +/);
            let responseText = '';
            if (tmp.length >= 3 && tmp[0] === 'beli') {
                const tmpCount = tmp.length;
                const rawAmount = tmp.slice(tmpCount - 1, tmpCount);
                const rawProduct = tmp.slice(1, tmpCount - 1);
                const product = rawProduct.join(' ');
                const data = rawAmount[0].match(rAmount);
                if (data && data.length > 0) {
                    const amount = parseInt(data.join(''), 10);
                    responseText = `Pembelian '${product}' seharga ${amount} sudah tersimpan`;
                } else {
                    responseText = 'Data harga tidak ditemukan';
                }
            } else {
                responseText = 'Format salah';
            }

            callback(null, responseText);
        },
        function answer(responseText, callback) {
            sendTextMessage(senderID, responseText, () => callback());
        },
        function options(callback) {
            sendQuickReply(senderID, {
                text: 'Cek pengeluaran',
                quick_replies: [
                    {
                        content_type: 'text',
                        title: 'Hari ini',
                        payload: 'pengeluaran_hariini',
                    },
                    {
                        content_type: 'text',
                        title: 'Minggu ini',
                        payload: 'pengeluaran_mingguini',
                    },
                    {
                        content_type: 'text',
                        title: 'Bulan ini',
                        payload: 'pengeluaran_bulanini',
                    },
                ],
            }, () => callback());
        },
    ], () => {});
};
