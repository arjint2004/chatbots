const sendTextMessage = require('../sender/sendTextMessage');

module.exports = function switchcek(event,cb) {
	var senderID=event.sender.id;
	const sql=SELECT * FROM conversations WHERE sender='${senderID}' AND topik='$';
	console.log(sql);
	module.exports.query(sql,()=>{});
};
