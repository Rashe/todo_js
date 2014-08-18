var User = require('../model/user').User;
//var HttpError = require('../error').HttpError;
//var async = require('async');
exports.get = function (req, res) {
    res.render('index');
};

exports.post = function (req, res, next) {

    var qRes = res,
        user = req.body.username,
        pass = req.body.password;
    User.findOne({username: user}, function (err, userDb, next) {
       if (userDb == null) {
           res.writeHead(403, {"Content-Type": "text/plain"});
           res.end("shit");
        };
        if (userDb.password != pass) {

        }

    });
    req.session.user = user;
    res.send({});

};