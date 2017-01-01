const logfbmessage = require('../queries/logfbmessage');
const moment = require('moment');

function isAvailable(value) {
    return value !== undefined ? 1 : 0;
}

function getValue(value, defaultValue) {
    return value !== undefined ? value : defaultValue;
}

function getContent(value) {
    let content = '[]';
    if (value.attachments !== undefined) {
        content = JSON.stringify(value.attachments);
    } else if (value.quick_reply !== undefined) {
        content = JSON.stringify(value.quick_reply);
    }
    return content;
}

module.exports = (req, res, next) => {
    const data = req.body;
    if (data.object === 'page') {
        data.entry.forEach((pageEntry) => {
            pageEntry.messaging.forEach((messagingEvent) => {
                if (messagingEvent.message && !messagingEvent.message.is_echo) {
                    logfbmessage.insert({
                        object: 'page',
                        type: 'message',
                        pageId: pageEntry.id,
                        eventAt: moment(pageEntry.time).format('YYYY-MM-DD HH:mm:ss'),
                        senderId: messagingEvent.sender.id,
                        recipientId: messagingEvent.recipient.id,
                        messageAt: moment(messagingEvent.timestamp).format('YYYY-MM-DD HH:mm:ss'),
                        mid: messagingEvent.message.mid,
                        seq: messagingEvent.message.seq,
                        text: getValue(messagingEvent.message.text, ''),
                        isAttachment: isAvailable(messagingEvent.message.attachments),
                        isQuickReply: isAvailable(messagingEvent.message.quick_reply),
                        content: getContent(messagingEvent.message),
                        status: 'sent',
                    }, () => {});
                }
            });
        });
    }

    next();
};
