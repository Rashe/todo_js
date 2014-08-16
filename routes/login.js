var User = require('../model/user').User;
//var async = require('async');
exports.get = function (req, res) {
    res.render('index');
};

exports.post = function (req, res, next) {

    var user = req.body.username;
    var pass = req.body.password;
   User.findOne({username: user}, function (err, userDb) {
       console.log('user',userDb.password );
       if(err) throw err;
        if(userDb.password != pass) {

        }

   });
    req.session.user=user;
    res.send({});

};