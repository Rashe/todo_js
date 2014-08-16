var User = require('../model/user').User;
exports.get = function (req, res) {
    res.render('index');
};

exports.post = function (req, res, next) {

    User.findOne({username: user}, function (err, userDb, next) {
        if (userDb == null) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end('"Такова пацанчика нет"');
        } else if (userDb.password != pass) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end('"Че с паролем пацантрэ??"');
        }
        else {
            req.session.user = user;
            qRes.send({});
        }

    });

};