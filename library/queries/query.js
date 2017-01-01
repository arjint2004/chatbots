const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'arsenal1914',
    database: 'alichatz',
    debug: false,
});

module.exports = function query(sql, cb) {
    pool.getConnection((err, connection) => {
        if (err) {
            cb({ code: 100, status: 'Error in connection database' });
        } else {
            connection.query(sql, (err2, rows) => {
                connection.release();
                if (!err2) {
                    cb(null, rows);
                } else {
                    cb(err2);
                }
            });

            connection.on('error', () => {
                cb({ code: 100, status: 'Error in connection database' });
            });
        }
    });
};
