const sendButtonMessage = require('../sender/sendButtonMessage');
const sendTextMessage = require('../sender/sendTextMessage');
const Query = require('../queries/query');

module.exports = function konsultasi(senderID,session,cb) {
    switch(session){
		
				case 1:
					var texts='1. Siapa nama lengkap anda ?';
					sendTextMessage(senderID, texts, () => {});
					Query.saveConsul(event,'bot',()=>{});
					
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
