var Todo = require('../model/todo').Todo;
var User = require('../model/user').User;
var errors = require('../data/errors');

var GetLists = function (username, callback) {
    User.findOne({username: username}, function (err, userDb, next) {
        if (userDb == null) {
            callback(false);
        }
    });

    Todo.find({username: username, status: true}, function (err, list) {
        if (list.length < 1) {
            callback();
        } else {
            callback(list);
        }
    });
};

module.exports.GetLists = GetLists;