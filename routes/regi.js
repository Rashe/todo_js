var User = require('../model/createUser');
//var async = require('async');


var obj = {};
//console.log(obj);
//console.log('body: ' + JSON.stringify(req.body));
//res.send(req.body);
//
//var username = req.body.username;
//var password = req.body.password;
//console.log(username, password);



//exports.get = function(req, res) {
//    res.render('regi');
//    console.log(2);
//};

exports.post = function(req, res) {
    console.log("hher");
    var username = req.body.username;
    var password = req.body.password;

    console.log(username, password);
    //req.session.user = user._id;
    //res.send({});


    //User.authorize(username, password, function(err, user) {
    //    if (err) {
    //        if (err instanceof AuthError) {
    //            return next(new HttpError(403, err.message));
    //        } else {
    //            return next(err);
    //        }
    //    }
    //
    //    req.session.user = user._id;
    //    res.send({});
    //
    //});

};