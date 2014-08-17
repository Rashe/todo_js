var User = require('../model/user').User;
//var HttpError = require('../error').HttpError;
//var async = require('async');
exports.get = function (req, res) {
    res.render('index');
};

exports.post = function (req, res, next) {

    var user = req.body.username;
    var pass = req.body.password;
    User.findOne({username: user}, function (err, userDb) {
       if (userDb == null) {
            console.log('im here');
           res.writeHead(403, { 'Content-Type': 'text/html' });
           res.end(file, "utf-8");
           console.log('im here2');
        };
        if (userDb.password != pass) {

        }

    });
    req.session.user = user;
    res.send({});

};