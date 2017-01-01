const winston = require('winston');
const sendTextMessage = require('../sender/sendTextMessage');

const getStarted = require('../actions/getStarted');
const getShopNow = require('../actions/getShopNow');
const getSubCategories = require('../actions/getSubCategories');
const getViewSite = require('../actions/getViewSite');
const getLearnMore = require('../actions/getLearnMore');
const getQuantity = require('../actions/getQuantity');

module.exports = function receivedPostback(event) {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfPostback = event.timestamp;
    const payload = event.postback.payload;

    winston.info(`Received postback for user ${senderID} and
        page ${recipientID} with payload '${payload}' at ${timeOfPostback}`);

    if (payload) {
        if (payload.indexOf('sub-categories') !== -1) {
            getSubCategories(senderID, payload);
        } else {
            switch (payload) {

            case 'get_started':
                getStarted(senderID);
                break;

            case 'order_now':
                getShopNow(senderID);
                break;

            case 'view_site':
                getViewSite(senderID);
                break;

            case 'learn_more':
                getLearnMore(senderID);
                break;
				
            case 'order_w1':
                sendTextMessage(senderID, 'Berapa jumlah yang dipesan ?');
                break;
				
            case 'order_acg':
                sendTextMessage(senderID, 'Berapa jumlah yang dipesan ?');
                break;

            default:
                getStarted(senderID);
                sendTextMessage(senderID, 'Sorry. I couldn\'t understand what you meant.' +
                'Try to selecting an option above '+ payload +'', () => {});
            }
        }
    }
};
