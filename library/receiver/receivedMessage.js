const winston = require('winston');
const sendImageMessage = require('../sender/sendImageMessage');
const sendTextMessage = require('../sender/sendTextMessage');
const sendGifMessage = require('../sender/sendGifMessage');
const sendAudioMessage = require('../sender/sendAudioMessage');
const sendVideoMessage = require('../sender/sendVideoMessage');
const sendFileMessage = require('../sender/sendFileMessage');
const sendButtonMessage = require('../sender/sendButtonMessage');
const sendGenericMessage = require('../sender/sendGenericMessage');
const sendReceiptMessage = require('../sender/sendReceiptMessage');
const sendQuickReply = require('../sender/sendQuickReply');
const sendReadReceipt = require('../sender/sendReadReceipt');
const sendTypingOn = require('../sender/sendTypingOn');
const sendTypingOff = require('../sender/sendTypingOff');
const sendAccountLinking = require('../sender/sendAccountLinking');

const recordExpense = require('../actions/transactions/recordExpense');
const Query = require('../queries/query');

module.exports = function receivedMessage(event) {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfMessage = event.timestamp;
    const message = event.message;

    winston.info(`Received message for user ${senderID} and
        page ${recipientID} at ${timeOfMessage} with message:`);

    winston.info(JSON.stringify(message));

    const isEcho = message.is_echo;
    const messageId = message.mid;
    const appId = message.app_id;
    const metadata = message.metadata;

    // You may get a text or attachment but not both
    const messageText = message.text !== undefined ? message.text.toLowerCase() : '';
    const messageAttachments = message.attachments;
    const quickReply = message.quick_reply;

    if (isEcho) {
        winston.info(`Received echo for message ${messageId} and app ${appId} with metadata ${metadata}`);
        return;
    } else if (quickReply) {
        const quickReplyPayload = quickReply.payload;
        winston.info(`Quick reply for message ${messageId} with payload ${quickReplyPayload}`);
        sendTextMessage(senderID, 'Quick reply tapped', () => {});
        return;
    }

    if (messageText && messageText.indexOf('beli') !== -1) {
        recordExpense(senderID, messageText);
    } else if (messageText) {
        switch (messageText) {

        case 'image':
            sendImageMessage(senderID);
            break;

        case 'gif':
            sendGifMessage(senderID);
            break;

        case 'audio':
            sendAudioMessage(senderID);
            break;

        case 'video':
            sendVideoMessage(senderID);
            break;

        case 'file':
            sendFileMessage(senderID);
            break;

        case 'button':
            sendButtonMessage(senderID);
            break;

        case 'generic':
            sendGenericMessage(senderID);
            break;

        case 'receipt':
            sendReceiptMessage(senderID);
            break;

        case 'quick reply':
            sendQuickReply(senderID);
            break;

        case 'read receipt':
            sendReadReceipt(senderID);
            break;

        case 'typing on':
            sendTypingOn(senderID);
            break;

        case 'typing off':
            sendTypingOff(senderID);
            break;

        case 'account linking':
            sendAccountLinking(senderID);
            break;

        default:
			Query.savemessage(event,()=>{})
            // sendTextMessage(senderID, messageText, () => {});
        }
    } else if (messageAttachments) {
        sendTextMessage(senderID, 'Message with attachment received', () => {});
    }
};
