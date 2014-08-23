var Todo = require('../model/todo').Todo;
var errors = require('../data/errors');

var GetList = function (username, callback) {
    Todo.find({username: username, status: true}, function (err, list) {
        if (list.length < 1) {
            callback();
        } else {
            callback(list);
        }
    });
};

module.exports.GetList = GetList;