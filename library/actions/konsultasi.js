const sendButtonMessage = require('../sender/sendButtonMessage');
const sendTextMessage = require('../sender/sendTextMessage');
const Query = require('../queries/query');

//modul action saat klik menu konsultasi
module.exports.konsul = function konsultasi(event,step,cb) {
	var senderID=event.sender.id;

    switch(step){
		
				case 1:
					var msg={bot:"bot", step:1, texts:"Anda akan memulai konsultasi online. Jawab pertanyaan dengan benar dan sesuai kondisi anda. Untuk hasil yang baik \n \n 1. Siapa nama lengkap anda ?"};
					sendTextMessage(senderID, msg.texts, () => {});
					Query.saveConsul(event,msg,()=>{});
					
				break;
				case 2:
					var msg={bot:"cust", step:2, texts:"Terima Kasih "+event.message.text+". \n \n 2. Berapa Usia anda ?"};
					
					sendTextMessage(senderID, msg.texts, () => {});
					event.postback={};
					event.postback.payload='konsultasi';
					console.log(JSON.stringify(event));
					Query.saveConsul(event,msg,()=>{});
				break;
				case 3:
					sendTextMessage(senderID, '', () => {});				
				break;
				
				case 4:
					sendTextMessage(senderID, '', () => {});				
				break;
				
				case 5:
					sendTextMessage(senderID, '', () => {});				
				break;
				
				case 6:
					sendTextMessage(senderID, '', () => {});				
				break;
				
				default:
					sendTextMessage(senderID, '', () => {});					
				break;
				
			}
};

//modul untuk membalas chat manual
module.exports.reply = function konsultasi(param,cb) {
	
};
