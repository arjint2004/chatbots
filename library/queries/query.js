const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chatbot',
    debug: false,
});

module.exports.query = function query(sql, cb) {
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

module.exports.savemessage = function savemessage(event, cb) {
const sql=`INSERT INTO chatbot.conversation (id, sender, receipent, date, message) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '${JSON.stringify(event.message)}');`;
	console.log(sql);
	module.exports.query(sql,()=>{});
};
