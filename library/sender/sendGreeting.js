const callSendThreadSettings = require('./callSendThreadSettings');

module.exports = function sendGreeting() {
    const messageData = {
        setting_type: 'greeting',
        greeting: {
            text: 'Hi {{user_first_name}}!, AliChatz is a Chatbot. ' +
            ' A fun & personal way to shop in Alibaba E-Commerce.',
        },
    };

    callSendThreadSettings(messageData);
};
