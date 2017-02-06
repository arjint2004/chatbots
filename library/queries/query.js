const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'drwskincaresys',
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
const sql=`INSERT INTO conversation (id, sender, receipent, date, message, event_json, watermark, is_echo, seq, app_id, mid, payload, posisi) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '', '', '', '', '', '', '', '${event.payload}', '${posisi}');`;
	console.log(sql);
	module.exports.query(sql,()=>{}); 
};


module.exports.saveConsul = function savemessagePostback(event ,msg ,cb) {
const sql=`INSERT INTO percakapan (id, sender, receipent, date, message ,speak ,event ,watermark ,payload ,session ,step) VALUES (NULL, '${event.sender.id}', '${event.recipient.id}', '${event.timestamp}', '${msg.texts}','${msg.bot}','${JSON.stringify(event)}','','${event.postback.payload}','1','${msg.step}');`;
	console.log(sql);
	cb();
	module.exports.query(sql,()=>{});
};

module.exports.cek_last_action_query = function cek_last_action_query(event,cb) {
	const senderID = event.sender.id;
	var sqlcek='SELECT id,sender,receipent,date,speak,watermark,payload,session,step  FROM percakapan WHERE  id=(SELECT MAX(id) FROM percakapan WHERE sender='+senderID+' AND speak="bot")';
	console.log(sqlcek);
	cb(sqlcek);
};

module.exports.cek_last_action = function cek_last_action(event,cb) {
	module.exports.cek_last_action_query(event,(sqlcek)=>{
		module.exports.query(sqlcek,(x,rows)=>{
			if (!!rows[0].payload && !!rows[0].step) {
				 // do something 
				 
				switch (rows[0].payload) {

					case 'konsultasi':
						var limit=rows[0].step+1;
						if(rows[0].step<7){
							const konsultasi = require('../actions/konsultasi');
							konsultasi.konsul(event,rows[0].step+1,function(){
								//callback di sini
							});						
						}

					break;
					case 'order':
				
					break;
					case 'cek_order':
				
					break;
					
					default:
					
				}
			}	
			cb(rows);
		});
	});	
};