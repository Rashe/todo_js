var mongoose = require('../model/mongoose');
var schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
exports.Todo = mongoose.model('Todo', schema);