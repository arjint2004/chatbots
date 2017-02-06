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
					/*Query.cek_last_action_query(event,(sqlcek)=>{
						Query.query(sqlcek,(x,rows)=>{
								if (rows.length === 0) {
									Query.saveConsul(event,msg,()=>{});
								}
						});
					});*/
					
					
				break;
				case 2:
					event.postback={};
					event.postback.payload='konsultasi';
					
					var msgcust={bot:"cust", step:step-1, texts:event.message.text};
					Query.saveConsul(event,msgcust,()=>{
						var msg={bot:"bot", step:step, texts:"Terima Kasih "+event.message.text+". \n \n 2. Berapa Usia anda ?"};
						sendTextMessage(senderID, msg.texts, () => {});
						console.log(JSON.stringify(event));
						Query.saveConsul(event,msg,()=>{});					
					});
					

					
				break;
				case 3:
					event.postback={};
					event.postback.payload='konsultasi';
					
					var msgcust={bot:"cust", step:step-1, texts:event.message.text};
					Query.saveConsul(event,msgcust,()=>{
						var msg={bot:"bot", step:step, texts:"Mohon infokan no Hp anda untuk sms notifikasi."};
						sendTextMessage(senderID, msg.texts, () => {});
						console.log(JSON.stringify(event));
						Query.saveConsul(event,msg,()=>{});					
					});
					

					
				break;
				case 4:
					event.postback={};
					event.postback.payload='konsultasi';
					
					var msgcust={bot:"cust", step:step-1, texts:event.message.text};
					Query.saveConsul(event,msgcust,()=>{
						var msg={bot:"bot", step:step, texts:"3. Anda Laki-Laki atau Perempuan ?"};
						sendTextMessage(senderID, msg.texts, () => {});
						console.log(JSON.stringify(event));
						Query.saveConsul(event,msg,()=>{});					
					});


					
				break;
				
				case 5:
						
					event.postback={};
					event.postback.payload='konsultasi';
					
					var msgcust={bot:"cust", step:step-1, texts:event.message.text};
					Query.saveConsul(event,msgcust,()=>{
						var msg={bot:"bot", step:step, texts:"3. Apa keluhan anda ?"};
						sendTextMessage(senderID, msg.texts, () => {});
						console.log(JSON.stringify(event));
						Query.saveConsul(event,msg,()=>{});					
					});

			
				break;
				
				case 6:
					event.postback={};
					event.postback.payload='konsultasi';
					
					var msgcust={bot:"cust", step:step-1, texts:event.message.text};
					Query.saveConsul(event,msgcust,()=>{
						var msg={bot:"bot", step:step, texts:"3. Silahkan kirim foto yang jelas dan natural pada bagian yang dikonsultasikan"};
						sendTextMessage(senderID, msg.texts, () => {});
						console.log(JSON.stringify(event));
						Query.saveConsul(event,msg,()=>{});					
					});

	
				break;
				
				case 7:
					if (!!event.message.attachments) {
						event.postback={};
						event.postback.payload='konsultasi';
						
						var msgcust={bot:"cust", step:step-1, texts:event.message.attachments[0].payload.url};
						Query.saveConsul(event,msgcust,()=>{
							var msg={bot:"bot", step:step, texts:"Terima kasih data sudah kami simpan. Mohon tunggu hasil konsultasi dari tim dokter kami."};
							sendTextMessage(senderID, msg.texts, () => {});
										
						});
					}else{
						var databutton={text:"Anda belum melengkapi data foto konsultasi. Klik tombol dibawah untuk mengakhiri konsultasi atau kirim foto anda untuk menyelesaikan konsultasi.",buttons:[{
							type: "postback",
							title: "Hentikan Konsultasi",
							payload: "stop_konsultasi"
						  }]};
						
						sendButtonMessage(senderID,databutton, () => {});
						// sendTextMessage(senderID, 'Anda belum memngirimkan foto. Mohon kirim foto yang jelas dan natural pada bagian yang dikonsultasikan', () => {});
					}
				break;
				
				default:
					
				break;
				
			}
};

//modul untuk membalas chat manual
module.exports.reply = function konsultasi(param,cb) {
	
};
