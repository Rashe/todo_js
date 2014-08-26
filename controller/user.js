var Todo = require('../model/todo').Todo;
var User = require('../model/user').User;
var errors = require('../data/errors');

var GetLists = function (username, callback) {
    User.findOne({username: username}, function (err, userDb, next) {
        if (userDb == null) {
            callback(false, null);
        } else {
            Todo.find({username: username}, function (err, list) {
                callback(list, userDb);
            });
        }
    });
};

module.exports.GetLists = GetLists;