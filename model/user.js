var mongoose = require('../model/mongoose');
var schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.User = mongoose.model('User', schema);