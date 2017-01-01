const sendTextMessage = require('../sender/sendTextMessage');
const sendListMessage = require('../sender/sendListMessage');
const async = require('async');

function getListButtons(category) {
    const scList = {
        'Machinery, Industrial Parts & Tools': [],
    };

    return scList[category] !== undefined ? scList[category] : [];
}

module.exports = function getSubCategories(senderID, payload) {
    async.waterfall([
        function parse(callback) {
            const category = payload.substring(14);
            const buttons = getListButtons(category);
            callback(category, buttons);
        },
        function options(category, buttons, callback) {
            sendTextMessage(senderID, `Sub categories from '${category}'`, () => callback());
            sendListMessage(senderID, {
                text: `Sub categories from '${category}'`,
                buttons,
            }, () => callback());
        },
    ], () => {});
};
