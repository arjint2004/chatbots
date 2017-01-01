const winston = require('winston');

module.exports = function receivedDeliveryConfirmation(event) {
    // const senderID = event.sender.id;
    // const recipientID = event.recipient.id;
    const delivery = event.delivery;
    const messageIDs = delivery.mids;
    const watermark = delivery.watermark;
    // const sequenceNumber = delivery.seq;

    if (messageIDs) {
        messageIDs.forEach((messageID) => {
            winston.info(`Received delivery confirmation for message ID: ${messageID}`);
        });
    }

    winston.info(`All message before ${watermark} were delivered.`);
};
