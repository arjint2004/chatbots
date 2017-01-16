const sendButtonMessage = require('../sender/sendButtonMessage');
const sendTextMessage = require('../sender/sendTextMessage');
const Query = require('../queries/query');

module.exports = function konsultasi(event,step,cb) {
	var senderID=event.sender.id;
	// console.log(JSON.stringify(event));
    switch(step){
		
				case 1:
					var msg={bot:"bot", step:1, texts:"Anda akan memulai konsultasi online. Jawab pertanyaan dengan benar dan sesuai kondisi anda. Untuk hasil yang baik \n \n 1. Siapa nama lengkap anda ?"};
					sendTextMessage(senderID, msg.texts, () => {});
					Query.saveConsul(event,msg,()=>{});
					
				break;
				
				case 2:
					sendTextMessage(senderID, '', () => {});
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
