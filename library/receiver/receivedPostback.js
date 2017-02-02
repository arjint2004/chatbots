const winston = require('winston');
const sendTextMessage = require('../sender/sendTextMessage');

const getStarted = require('../actions/getStarted');
const getShopNow = require('../actions/getShopNow');
const getSubCategories = require('../actions/getSubCategories');
const getViewSite = require('../actions/getViewSite');
const getLearnMore = require('../actions/getLearnMore');
const getQuantity = require('../actions/getQuantity');

const Query = require('../queries/query');
const konsultasi = require('../actions/konsultasi');

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
				Query.savemessagePostback(event,()=>{},'order_now','receivedPostback');
                getShopNow(senderID);
                break;

            case 'view_site':
                getViewSite(senderID);
                break;

            case 'learn_more':
                getLearnMore(senderID);
                break;
				
            case 'konsultasi':
                console.log('konsul');
				// sendTextMessage(senderID, 'Anda akan memulai konsultasi online. Jawab pertanyaan dengan benar dan sesuai kondisi anda. Untuk hasil yang baik.', () => {});
				konsultasi.konsul(event,1,function(){
					//callback di sini
				});
                break;
				
            case 'order_w1':
				// Query.savemessagePostback(event,()=>{},'order_w1','receivedPostback');
                sendTextMessage(senderID, 'Berapa jumlah yang dipesan ?', () => {});
                break;
				
            case 'order_acg':
				// Query.savemessagePostback(event,()=>{},'order_acg','receivedPostback');
                sendTextMessage(senderID, 'Berapa jumlah yang dipesan ?', () => {});
                break;

            default:
                getStarted(senderID);
                sendTextMessage(senderID, 'Sorry. I couldn\'t understand what you meant.' +
                'Try to selecting an option above '+ payload +'', () => {});
            }
        }
    }
};
