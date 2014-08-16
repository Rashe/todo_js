var mongoose = require('../model/mongoose');


findOne({username: user}, function (err, callback, next) {
    if (callback != null) {
        console.log('here');
        next(sendReq(1))
    }
});
exports.CreateUser = mongoose.model('CreateUser', schema);
