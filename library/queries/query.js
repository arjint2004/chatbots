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

module.exports.savemessage = function savemessage(event, cb, posisi) {
console.log(posisi);
var mid;
if (typeof event.message.mid !== 'undefined') {
	mid=event.message.mid;
}else{
	mid='';
}
const sql=`INSERT INTO conversation (id, sender, receipent, date, message, event_json, watermark, is_echo, seq, app_id, mid, posisi) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '${event.message.text}', '${JSON.stringify(event)}', '${event.message.watermark}', '${event.message.is_echo}', '${event.message.seq}', '${event.message.app_id}', '${mid}', '${posisi}');`;
	console.log(sql);
	module.exports.query(sql,()=>{});
};

module.exports.savemessagereceivedRead = function savemessagereceivedRead(event, cb, posisi) {
const sql=`INSERT INTO conversation (id, sender, receipent, date, message, event_json, watermark, is_echo, seq, app_id, mid, posisi) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '', '${JSON.stringify(event)}', '${event.read.watermark}', '', '', '', '', '${posisi}');`;
	console.log(sql);
	module.exports.query(sql,()=>{});
};



module.exports.savemessagePostback = function savemessagePostback(event, cb, payload, posisi) {
const sql=`INSERT INTO conversation (id, sender, receipent, date, message, event_json, watermark, is_echo, seq, app_id, mid, payload, posisi) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '', '', '', '', '', '', '', '${payload}', '${posisi}');`;
	console.log(sql);
	module.exports.query(sql,()=>{}); 
};


module.exports.saveConsul = function savemessagePostback(event ,msg ,cb) {
const sql=`INSERT INTO conversations (id, sender, receipent, date, message ,speak ,event ,watermark ,session ,step) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '${msg.texts}','${msg.bot}','${JSON.stringify(event)}','','','${msg.step}');`;
	console.log(sql);
	module.exports.query(sql,()=>{});
};