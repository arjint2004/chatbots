const callSendThreadSettings = require('./callSendThreadSettings');

module.exports = function sendPersistentMenu() {
    const messageData = {
        setting_type: 'call_to_actions',
        thread_state: 'existing_thread',
        call_to_actions: [{
            type: 'postback',
            title: 'Order',
            payload: 'order_now',
        }, {
            type: 'postback',
            title: 'Konsultasi',
            payload: 'konsultasi',
        }, {
            type: 'postback',
            title: 'Hubungi CS',
            payload: 'hubungi_cs',
        }],
    };

    callSendThreadSettings(messageData);
};
