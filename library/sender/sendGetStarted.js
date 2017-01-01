const callSendThreadSettings = require('./callSendThreadSettings');

module.exports = function sendGetStarted() {
    const messageData = {
        setting_type: 'call_to_actions',
        thread_state: 'new_thread',
        call_to_actions: [{
            payload: 'get_started',
        }],
    };

    callSendThreadSettings(messageData);
};
