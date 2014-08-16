var User = require('../model/user').User;
//var async = require('async');
exports.get = function (req, res) {
    res.render('regi');
};

console.log('huj2');

exports.post = function (req, res, next) {
    var user = req.body.username;
    var pass = req.body.password;
    console.log('user_req', user, req.body.username);

    User.findOne({username: user}, function (err, callback, next) {
        if (callback != null) {
            console.log('here');
            next(sendReq(1))
        }
    });

    var createUser = User({
        username: user,
        password: pass
    });

    createUser.save(function (err, createUser, callback) {
        if (err) throw  err;
        console.log('huj error2');
        console.log('huj sucks__________________________________________________');
    });

    function sendReq(status) {
        if (status == 1) {

        }
    }

    req.session.user=user;
    res.send({});
};