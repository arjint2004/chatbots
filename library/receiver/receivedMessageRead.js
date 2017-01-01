const winston = require('winston');

module.exports = function receivedMessageRead(event) {
    // const senderID = event.sender.id;
    // const recipientID = event.recipient.id;

    const watermark = event.read.watermark;
    const sequenceNumber = event.read.seq;

    winston.info(`Received message read event for watermark ${watermark}
        and sequence number ${sequenceNumber}`);
};
