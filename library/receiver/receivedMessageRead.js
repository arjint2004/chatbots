const winston = require('winston');
const Query = require('../queries/query');
module.exports = function receivedMessageRead(event) {
    // const senderID = event.sender.id;
    // const recipientID = event.recipient.id;

    const watermark = event.read.watermark;
    const sequenceNumber = event.read.seq;
	Query.savemessagereceivedRead(event,()=>{},'receivedMessageRead');
    winston.info(`Received message read event for watermark ${watermark}
        and sequence number ${sequenceNumber}`);
};
