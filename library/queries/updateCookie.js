const query = require('./query');
const TABLE_LOG_COOKIE = 'log_cookies';

module.exports = (params, cb) => {
    const sql = `UPDATE ${TABLE_LOG_COOKIE} SET lastOpenAt = '${params.lastOpenAt}'` +
    ` WHERE senderId = '${params.senderId}'`;

    query(sql, (err, rows) => {
        if (!err) {
            if (rows.affectedRows === 0) {
                const fieldValues = [];
                fieldValues.push(`'${params.senderId}'`);
                fieldValues.push(`'${params.lastOpenAt}'`);
                const insert = `INSERT INTO ${TABLE_LOG_COOKIE} VALUES(${fieldValues.join(',')})`;
                query(insert, (err2, rows2) => {
                    if (!err2) {
                        cb(null, rows2);
                    } else {
                        cb(err2);
                    }
                });
            } else {
                cb(null, rows);
            }
        } else {
            cb(err);
        }
    });
};
