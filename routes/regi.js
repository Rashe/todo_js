var User = require('../model/user').User;
var errors = require('../data/errors');
exports.get = function (req, res) {
    res.render('regi');
};

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        pass = req.body.password;

    if (user == '' || user == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    } else if (pass == '' || pass == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    } else {
        User.findOne({username: user}, function (err, userDb, next) {
            if (userDb != null) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.already_registered);
            }
            else {

                var createUser = new User({
                    username: user,
                    password: pass
                });

                createUser.save(function (err) {
                    if (err) throw  err;
                });
                req.session.user = user;
                qRes.send({});
            }
        });
    }
};