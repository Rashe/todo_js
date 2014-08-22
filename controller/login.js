var User = require('../model/user').User;
var errors = require('../data/errors');
exports.get = function (req, res) {
    res.render('index');
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
            if (userDb == null) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                //res.end('"Такова пацанчика нет"');
                res.end(errors.no_such_user);
            } else if (userDb.password != pass) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.pass_wrong);
            }
            else {
                req.session.user = user;
                qRes.send({});
            }

        });
    }
};
