const query = require('./query');
const TABLE_LOG_MESSAGES = 'log_fb_messages';
const uuidV4 = require('uuid/v4');

module.exports.insert = (params, cb) => {
    const fieldValues = [];
    fieldValues.push(`'${uuidV4()}'`);
    fieldValues.push(`'${params.object}'`);
    fieldValues.push(`'${params.type}'`);
    fieldValues.push(`${params.pageId}`);
    fieldValues.push(`'${params.eventAt}'`);
    fieldValues.push(`'${params.senderId}'`);
    fieldValues.push(`'${params.recipientId}'`);
    fieldValues.push(`'${params.messageAt}'`);
    fieldValues.push(`'${params.mid}'`);
    fieldValues.push(`${params.seq}`);
    fieldValues.push(`'${params.text}'`);
    fieldValues.push(`${params.isAttachment}`);
    fieldValues.push(`${params.isQuickReply}`);
    fieldValues.push(`'${params.content}'`);
    fieldValues.push(`'${params.status}'`);

    const sql = `INSERT INTO ${TABLE_LOG_MESSAGES} VALUES(${fieldValues.join(',')})`;

    query(sql, (err, rows) => {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
};
