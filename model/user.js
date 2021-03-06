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
    },
    dateCreate: {
        type: Date,
        default: Date.now
    }
});
exports.User = mongoose.model('User', schema);