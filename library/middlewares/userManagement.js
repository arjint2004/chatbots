const async = require('async');
const checkCookie = require('../queries/checkCookie');

module.exports.checkCookie = (req, res, next) => {
    async.waterfall([
        function checkUser(cb) {
            checkCookie({})
            cb();
        },
    ], () => {
        next();
    });
};
