const query = require('./query');
const moment = require('moment');
const TABLE_LOG_COOKIE = 'log_cookies';

module.exports = (params, cb) => {
    const sql = `SELECT lastOpenAt FROM ${TABLE_LOG_COOKIE}` +
    ` WHERE senderId = '${params.senderId}' LIMIT 1`;

    query(sql, (err, rows) => {
        if (!err) {
            let hours = 100;
            if (rows.length > 0) {
                const a = moment(rows[0].lastOpenAt);
                const b = moment();
                hours = b.diff(a, 'hours');
            }

            cb(null, hours);
        } else {
            cb(err);
        }
    });
};
